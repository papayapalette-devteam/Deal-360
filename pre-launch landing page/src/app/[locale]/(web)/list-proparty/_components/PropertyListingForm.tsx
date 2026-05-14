'use client';

import { useMemo, useRef, useState } from 'react';
import { Check, ChevronDown, ChevronLeft, Info, MapPin, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Input } from '@/components/Ui/input';
import { InfoTooltip } from '@/components/Ui/info-tooltip';
import { Label } from '@/components/Ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/Ui/select';
import { Switch } from '@/components/Ui/switch';
import { Textarea } from '@/components/Ui/textarea';
import { DatePicker } from '@/components/Ui/date-picker';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Ui/popover';
import Image from 'next/image';
import { ApiValidationError, postPreLaunch, requestUploadUrl, uploadToStorage } from '@/lib/api';

type PropertyType = 'residential' | 'commercial';
type TransactionType = 'rent' | 'sale';

type IdealFor = 'end-use' | 'investment' | 'both';
type AmenityGroup = 'building-community' | 'unit-level' | 'private-amenities';

type PropertyStatus = {
  occupancy?: 'vacant' | 'tenanted';
  completion?: 'ready' | 'off-plan';
  ownership?: 'freehold' | 'leasehold';
};

type FormData = {
  // Top fields
  location: string;

  expectedPrice: string;
  negotiable: boolean;

  // SALE only (Image 1/2)
  idealFor: IdealFor;
  dealSignals: string[];
  originalPrice: string;

  // RENT only (Image 3/4)
  depositType: 'standard' | 'custom';
  depositAmount: string;
  priceType: 'monthly' | 'annually';
  utilitiesIncluded: 'not-included' | 'some-included' | 'all-included';
  includedUtilitiesDetail: string;

  // Types
  configuration: string;
  selectedSubType: string;
  positionType: string; // residential only
  rowType: string; // residential only (villa/townhouse)

  // Status
  propertyStatus: PropertyStatus;
  availableFrom: Date | undefined; // rent only
  occupancyRent: 'vacant' | 'tenanted'; // rent only

  // Residential only (both sale & rent on images)
  bedrooms: string;
  bathrooms: string;

  // Additional details
  bua: string;
  buaUnit: 'sqft' | 'sqm';
  plotSize: string;
  parkingSpaces: string;
  parkingType: string[];
  features: string[];
  propertyCondition: string;
  propertyAge: string;
  furnishing: string;
  chequeSelected: string[]; // rent only — which cheque options are checked
  chequeAmounts: Record<string, string>; // rent only — keyed by cheque count ('1','2','3','4','6','12')
  amenities: string;
  amenitiesGroups: AmenityGroup[];
  amenitiesBuilding: string[];
  amenitiesUnit: string[];
  amenitiesPrivate: string[];
  amenitiesBuildingOther: string;
  amenitiesUnitOther: string;
  amenitiesPrivateOther: string;
  viewingOptions: string[];

  // Buyer profile (sale)
  financeMethod: string[]; // cash/mortgage/payment-plan
  buyerPreference: string;
  targetClosingDate: Date | undefined;
  urgencyLevelSale: string;

  // Commercial-only text fields
  featuresText: string;
  amenitiesText: string;

  // Tenant info (rent)
  keyMoney: 'yes' | 'no';
  keyMoneyType: string;
  tenantPreference: string;
  preferredLeaseLength: string;
  urgencyLevelRent: string;

  // Keywords
  keywords: string;

  // Private listing
  privateListingOffMarket: boolean;

  // Contact
  name: string;
  email: string;
  phone: string;
  referredByEmail: string;
  notes: string;

  // Listing intent
  agentsCount: string;

  // Seller commission stance (sale)
  sellerCommissionStance: string;

  // Agent engagement & response preference
  agentEngagementPreference: string[];
  agentResponsePreference: string;
  maxAgents: string;

  // Contact consent & preferences
  preferredContactMethod: string[];
  bestTimeToContact: string[];

  // Privacy & consent
  remainAnonymous: boolean;
  consentSharing: boolean;

  // Proof of Ownership
  ownershipTitleDeedNumber: string;
  ownershipOqoodNumber: string;
  ownershipPermitNumber: string;
  sellerType: string;
  contactPreferenceOwner: string;
};



const RES_POSITION_TYPES: Record<string, string[]> = {
  apartment: ['Standard Apartment', 'Penthouse', 'Duplex', 'Serviced Apartment'],
  villa: ['Stand alone', 'Twin Villa'],
  townhouse: ['Corner Unit', 'End Unit', 'middle Unit'],
  land: [],
};

const COM_POSITION_TYPES: Record<string, string[]> = {
  office: [],
  retail: ['Ground Floor', 'Mall Unit', 'Street level', 'High Street'],
  warehouse: [],
  showroom: ['Ground Floor', 'Mezzanine', 'Multi-level'],
  restaurant: ['Stand alone'],
  industrial: [],
  mixed: [],
  'commercial-land': [],
};

const COM_CONFIG_FALLBACK: Record<string, string> = {
  office: 'Full Floor',
  retail: '',
  warehouse: '',
  showroom: '',
  restaurant: '',
  industrial: '',
  mixed: '',
  'commercial-land': '',
};

const getPositionTypeOptions = (property: PropertyType, subType: string) => {
  return property === 'residential' ? RES_POSITION_TYPES[subType] ?? [] : COM_POSITION_TYPES[subType] ?? [];
};

const getDefaultPositionType = (property: PropertyType, subType: string) => {
  const options = getPositionTypeOptions(property, subType);
  return options[0] ?? '';
};



export default function PropertyListingForm() {
  const t = useTranslations('listingForm');
  const [propertyType, setPropertyType] = useState<PropertyType>('residential');
  const [transactionType, setTransactionType] = useState<TransactionType>('sale');
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [amenitiesBuildingOpen, setAmenitiesBuildingOpen] = useState(false);
  const [amenitiesUnitOpen, setAmenitiesUnitOpen] = useState(false);
  const [amenitiesPrivateOpen, setAmenitiesPrivateOpen] = useState(false);

  const isResidential = propertyType === 'residential';
  const isCommercial = propertyType === 'commercial';
  const isSale = transactionType === 'sale';
  const isRent = transactionType === 'rent';

  const residentialSubTypes = useMemo(() => [
    { id: 'apartment', label: t('subTypeApartment'), icon: '/icon/1.png' },
    { id: 'villa', label: t('subTypeVilla'), icon: '/icon/2.png' },
    { id: 'townhouse', label: t('subTypeTownhouse'), icon: '/icon/3.png' },
    { id: 'land', label: t('subTypeLand'), icon: '/icon/4.png' },
  ], [t]);

  const commercialSubTypes = useMemo(() => [
    { id: 'office', label: t('subTypeOffice'), icon: '/icon/5.png' },
    { id: 'retail', label: t('subTypeRetail'), icon: '/icon/6.png' },
    { id: 'warehouse', label: t('subTypeWarehouse'), icon: '/icon/7.png' },
    { id: 'showroom', label: t('subTypeShowroom'), icon: '/icon/8.png' },
    { id: 'restaurant', label: t('subTypeRestaurant'), icon: '/icon/9.png' },
    { id: 'industrial', label: t('subTypeIndustrial'), icon: '/icon/10.png' },
    { id: 'mixed', label: t('subTypeMixed'), icon: '/icon/11.png' },
    { id: 'commercial-land', label: t('subTypeCommercialLand'), icon: '/icon/12.png' },
  ], [t]);

  const rowTypes = useMemo(() => [t('rowTypeSingleRow'), t('rowTypeBackToBack')], [t]);

  const BUILDING_COMMUNITY_AMENITIES = useMemo(() => [
    { id: 'central-ac', label: t('amenityCentralAC') },
    { id: 'shared-pool', label: t('amenitySharedPool') },
    { id: 'shared-gym', label: t('amenitySharedGym') },
    { id: 'shared-spa', label: t('amenitySharedSpa') },
    { id: 'concierge', label: t('amenityConcierge') },
    { id: 'serviced', label: t('amenityServiced') },
    { id: 'childrens-play-area', label: t('amenityChildrensPlayArea') },
    { id: 'childrens-pool', label: t('amenityChildrensPool') },
    { id: 'bbq-area', label: t('amenityBBQArea') },
    { id: 'co-working-space', label: t('amenityCoWorkingSpace') },
    { id: 'paddle-court', label: t('amenityPaddleCourt') },
    { id: 'gated-community', label: t('amenityGatedCommunity') },
  ], [t]);

  const UNIT_LEVEL_AMENITIES = useMemo(() => [
    { id: 'balcony', label: t('amenityBalcony') },
    { id: 'pets-allowed', label: t('amenityPetsAllowed') },
    { id: 'built-in-wardrobes', label: t('amenityBuiltInWardrobes') },
    { id: 'walk-in-closet', label: t('amenityWalkInCloset') },
    { id: 'built-in-kitchen-appliances', label: t('amenityBuiltInKitchenAppliances') },
  ], [t]);

  const PRIVATE_AMENITIES = useMemo(() => [
    { id: 'private-garden', label: t('amenityPrivateGarden') },
    { id: 'private-pool', label: t('amenityPrivatePool') },
    { id: 'private-gym', label: t('amenityPrivateGym') },
    { id: 'private-jacuzzi', label: t('amenityPrivateJacuzzi') },
  ], [t]);

  const PARKING_TYPE_OPTIONS = useMemo(() => [
    { id: 'basement', label: t('parkingTypeBasement') },
    { id: 'podium', label: t('parkingTypePodium') },
    { id: 'covered-carport', label: t('parkingTypeCoveredCarport') },
    { id: 'garage', label: t('parkingTypeGarage') },
    { id: 'open-air', label: t('parkingTypeOpenAir') },
    { id: 'no-parking', label: t('parkingTypeNone') },
    { id: 'visitor-parking', label: t('parkingTypeVisitor') },
  ], [t]);

  const FEATURE_OPTIONS = useMemo(() => [
    { id: 'bathtub', label: t('featureBathtub') },
    { id: 'balcony', label: t('featureBalcony') },
    { id: 'pet-allowed', label: t('featurePetAllowed') },
    { id: 'chiller-free', label: t('featureChillerFree') },
    {
      id: 'maids-room',
      label: t('featureMaidsRoom'),
      info: {
        title: t('featureMaidsRoomInfoTitle'),
        text: t('featureMaidsRoomInfoText'),
      },
    },
    {
      id: 'study',
      label: t('featureStudy'),
      info: {
        title: t('featureStudyInfoTitle'),
        text: t('featureStudyInfoText'),
      },
    },
    {
      id: 'vastu-compliant',
      label: t('featureVastuCompliant'),
      info: {
        title: t('featureVastuInfoTitle'),
        text: t('featureVastuInfoText'),
      },
    },
  ], [t]);

  const subTypes = useMemo(() => (isResidential ? residentialSubTypes : commercialSubTypes), [isResidential, residentialSubTypes, commercialSubTypes]);




  const [dealSignalInput, setDealSignalInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [networkError, setNetworkError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string; expectedPrice?: string; phone?: string }>({});

  // Media upload — selected file names (display only)
  const [uploadedPhotos, setUploadedPhotos] = useState<File[]>([]);
  const [uploadedFloorPlan, setUploadedFloorPlan] = useState<File | null>(null);
  const [uploadedVideoTour, setUploadedVideoTour] = useState<File | null>(null);
  const [uploaded360Tour, setUploaded360Tour] = useState<File | null>(null);
  // Media upload — stored public URLs (sent with form)
  const [mediaPhotoUrls, setMediaPhotoUrls] = useState<string[]>([]);
  const [mediaFloorPlanUrl, setMediaFloorPlanUrl] = useState('');
  const [mediaVideoTourUrl, setMediaVideoTourUrl] = useState('');
  const [media360TourUrl, setMedia360TourUrl] = useState('');
  // Media upload — per-field loading flags
  const [uploadingPhotos, setUploadingPhotos] = useState(false);
  const [uploadingFloorPlan, setUploadingFloorPlan] = useState(false);
  const [uploadingVideoTour, setUploadingVideoTour] = useState(false);
  const [uploading360Tour, setUploading360Tour] = useState(false);
  const photosRef = useRef<HTMLInputElement>(null);
  const floorPlanRef = useRef<HTMLInputElement>(null);
  const videoTourRef = useRef<HTMLInputElement>(null);
  const tour360Ref = useRef<HTMLInputElement>(null);
  const ownershipDocRef = useRef<HTMLInputElement>(null);
  const [uploadedOwnershipDoc, setUploadedOwnershipDoc] = useState<File | null>(null);
  const [uploadingOwnershipDoc, setUploadingOwnershipDoc] = useState(false);
  const [ownershipDocUrl, setOwnershipDocUrl] = useState('');

  const [formData, setFormData] = useState<FormData>({
    location: '',

    expectedPrice: '',
    negotiable: true,

    idealFor: 'end-use',
    dealSignals: [],
    originalPrice: '',

    depositType: 'standard',
    depositAmount: '',
    priceType: 'monthly',
    utilitiesIncluded: 'not-included',
    includedUtilitiesDetail: '',

    configuration: '',
    selectedSubType: 'apartment',
    positionType: 'Standard Apartment',
    rowType: 'Single Row',

    propertyStatus: {},
    availableFrom: undefined,
    occupancyRent: 'vacant',

    bedrooms: 'studio',
    bathrooms: '1',

    bua: '',
    buaUnit: 'sqft',
    plotSize: '',
    parkingSpaces: '1',
    parkingType: [],
    features: [],
    propertyCondition: 'all',
    propertyAge: '',
    furnishing: 'fully-furnished',
    chequeSelected: [],
    chequeAmounts: { '1': '', '2': '', '3': '', '4': '', '6': '', '12': '' },
    amenities: 'multi-select',
    amenitiesGroups: ['building-community', 'unit-level', 'private-amenities'],
    amenitiesBuilding: [],
    amenitiesUnit: [],
    amenitiesPrivate: [],
    amenitiesBuildingOther: '',
    amenitiesUnitOther: '',
    amenitiesPrivateOther: '',
    viewingOptions: [],

    financeMethod: ['cash'],
    buyerPreference: '',
    targetClosingDate: undefined,
    urgencyLevelSale: 'ready-now',

    featuresText: '',
    amenitiesText: '',

    keyMoney: 'no',
    keyMoneyType: '',
    tenantPreference: '',
    preferredLeaseLength: '12-months',
    urgencyLevelRent: 'ready-now',

    keywords: '',
    privateListingOffMarket: true,

    name: '',
    email: '',
    phone: '',
    referredByEmail: '',
    notes: '',

    agentsCount: '1-agent',
    sellerCommissionStance: 'yes',

    agentEngagementPreference: [],
    agentResponsePreference: '',
    maxAgents: '',

    preferredContactMethod: [],
    bestTimeToContact: [],

    remainAnonymous: false,
    consentSharing: false,

    ownershipTitleDeedNumber: '',
    ownershipOqoodNumber: '',
    ownershipPermitNumber: '',
    sellerType: '',
    contactPreferenceOwner: '',
  });

  const selectedAccent = 'bg-[#f58d86] text-white border border-[#f58d86] rounded-[8px]';
  const ghost = 'bg-white text-[#4B4B4B] border border-[#CAD5E2] rounded-[8px]';
  const labelClass = 'mb-2 block text-sm font-medium text-[#535965]';
  const controlClass = 'h-11 border border-[#CAD5E2] bg-white text-[14px] font-medium text-[#4B4B4B] rounded-[8px]';

  const setField = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData((p) => ({ ...p, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { name?: string; email?: string; expectedPrice?: string; phone?: string } = {};
    if (!formData.name.trim()) errors.name = t('errorNameRequired');
    if (!formData.email.trim()) errors.email = t('errorEmailRequired');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = t('errorEmailInvalid');
    if (!formData.expectedPrice.trim()) errors.expectedPrice = t('errorExpectedPriceRequired');
    else if (isNaN(parseFloat(formData.expectedPrice.replace(/,/g, ''))) || parseFloat(formData.expectedPrice.replace(/,/g, '')) <= 0) errors.expectedPrice = t('errorExpectedPriceInvalid');
    if (formData.phone.trim() && !/^\+?[\d\s\-().]{7,20}$/.test(formData.phone.trim())) errors.phone = t('errorPhoneInvalid');
    if (Object.keys(errors).length > 0) { setFieldErrors(errors); return; }
    setLoading(true);
    setNetworkError(null);
    setFieldErrors({});
    try {
      await postPreLaunch('listing-intent', {
        full_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        referred_by_email: formData.referredByEmail,
        location: formData.location,
        property_type: formData.selectedSubType,
        bedrooms: formData.bedrooms ? parseInt(formData.bedrooms) : null,
        expected_price: formData.expectedPrice ? parseFloat(formData.expectedPrice) : null,
        details: {
          transactionType,
          propertyType,
          configuration: formData.configuration,
          positionType: formData.positionType,
          rowType: formData.rowType,
          negotiable: formData.negotiable,
          idealFor: formData.idealFor,
          dealSignals: formData.dealSignals,
          originalPrice: formData.originalPrice,
          depositType: formData.depositType,
          depositAmount: formData.depositAmount,
          priceType: formData.priceType,
          utilitiesIncluded: formData.utilitiesIncluded,
          includedUtilitiesDetail: formData.includedUtilitiesDetail,
          propertyStatus: formData.propertyStatus,
          availableFrom: formData.availableFrom,
          occupancyRent: formData.occupancyRent,
          bathrooms: formData.bathrooms,
          bua: formData.bua,
          buaUnit: formData.buaUnit,
          plotSize: formData.plotSize,
          parkingSpaces: formData.parkingSpaces,
          parkingType: formData.parkingType,
          features: formData.features,
          propertyCondition: formData.propertyCondition,
          propertyAge: formData.propertyAge,
          furnishing: formData.furnishing,
          chequeSelected: formData.chequeSelected,
          chequeAmounts: formData.chequeAmounts,
          amenitiesBuilding: formData.amenitiesBuilding,
          amenitiesUnit: formData.amenitiesUnit,
          amenitiesPrivate: formData.amenitiesPrivate,
          viewingOptions: formData.viewingOptions,
          financeMethod: formData.financeMethod,
          targetClosingDate: formData.targetClosingDate,
          urgencyLevelSale: formData.urgencyLevelSale,
          keyMoney: formData.keyMoney,
          keyMoneyType: formData.keyMoneyType,
          tenantPreference: formData.tenantPreference,
          preferredLeaseLength: formData.preferredLeaseLength,
          urgencyLevelRent: formData.urgencyLevelRent,
          agentsCount: formData.agentsCount,
          sellerCommissionStance: formData.sellerCommissionStance,
          privateListingOffMarket: formData.privateListingOffMarket,
          agentEngagementPreference: formData.agentEngagementPreference,
          agentResponsePreference: formData.agentResponsePreference,
          maxAgents: formData.maxAgents,
          preferredContactMethod: formData.preferredContactMethod,
          bestTimeToContact: formData.bestTimeToContact,
          remainAnonymous: formData.remainAnonymous,
          consentSharing: formData.consentSharing,
          keywords: formData.keywords,
          notes: formData.notes,
          buyerPreference: formData.buyerPreference,
          featuresText: formData.featuresText,
          amenitiesText: formData.amenitiesText,
          media: {
            photos: mediaPhotoUrls,
            floorPlan: mediaFloorPlanUrl,
            videoTour: mediaVideoTourUrl,
            tour360: media360TourUrl,
          },
          ownership: {
            titleDeedNumber: formData.ownershipTitleDeedNumber,
            oqoodNumber: formData.ownershipOqoodNumber,
            permitNumber: formData.ownershipPermitNumber,
            docUrl: ownershipDocUrl,
            sellerType: formData.sellerType,
            contactPreference: formData.contactPreferenceOwner,
          },
        },
      });
      setSuccess(true);
    } catch (err) {
      if (err instanceof ApiValidationError) {
        const fe = err.fieldErrors;
        const mapped: { name?: string; email?: string } = {};
        if (fe.full_name) mapped.name = fe.full_name[0];
        if (fe.email) mapped.email = fe.email[0];
        if (Object.keys(mapped).length) {
          setFieldErrors(mapped);
        } else {
          setNetworkError(fe.non_field_errors?.[0] ?? t('errorNetwork'));
        }
      } else {
        setNetworkError(t('errorNetwork'));
      }
    } finally {
      setLoading(false);
    }
  };

  const toggleAmenity = (field: 'amenitiesBuilding' | 'amenitiesUnit' | 'amenitiesPrivate', id: string) => {
    setFormData((p) => {
      const current = p[field];
      const next = current.includes(id) ? current.filter((v) => v !== id) : [...current, id];
      return { ...p, [field]: next };
    });
  };

  const selectedSubTypeLabel = useMemo(() => {
    return subTypes.find((t) => t.id === formData.selectedSubType)?.label ?? formData.selectedSubType;
  }, [subTypes, formData.selectedSubType]);

  const positionTypeOptions = useMemo(() => {
    return getPositionTypeOptions(propertyType, formData.selectedSubType);
  }, [propertyType, formData.selectedSubType]);

  const showRowType = isResidential && (formData.selectedSubType === 'villa' || formData.selectedSubType === 'townhouse');
  // const showConfigurationInput =
  //   (isResidential && formData.selectedSubType === 'villa') || (isCommercial && formData.selectedSubType === 'office');

  const configPosition =
    positionTypeOptions.length > 0 ? formData.positionType : COM_CONFIG_FALLBACK[formData.selectedSubType] ?? '';
  const configLine = [selectedSubTypeLabel, configPosition, showRowType ? formData.rowType : '']
    .filter(Boolean)
    .join(' - ');

  const resetForTabs = (nextProperty: PropertyType, nextTxn: TransactionType) => {
    const nextIsRes = nextProperty === 'residential';
    const nextIsSale = nextTxn === 'sale';

    setFormData((p) => ({
      ...p,
      selectedSubType: nextIsRes ? 'apartment' : 'office',
      positionType: getDefaultPositionType(nextProperty, nextIsRes ? 'apartment' : 'office'),
      rowType: 'Single Row',
      configuration: '',
      // keep shared values, but clear non-applicable fields for less "jump"
      depositType: nextIsSale ? 'standard' : p.depositType,
      depositAmount: nextIsSale ? '' : p.depositAmount,
      chequeSelected: nextIsSale ? [] : p.chequeSelected,
      chequeAmounts: nextIsSale ? { '1': '', '2': '', '3': '', '4': '', '6': '', '12': '' } : p.chequeAmounts,
      utilitiesIncluded: nextIsSale ? 'not-included' : p.utilitiesIncluded,
      includedUtilitiesDetail: nextIsSale ? '' : p.includedUtilitiesDetail,
      originalPrice: nextIsSale ? p.originalPrice : p.originalPrice,
      tenantPreference: nextIsSale ? '' : p.tenantPreference,
      financeMethod: nextIsSale ? p.financeMethod : p.financeMethod,
      propertyStatus: {},
    }));
  };

  const onPropertyTypeChange = (type: PropertyType) => {
    setPropertyType(type);
    resetForTabs(type, transactionType);
  };

  const onTransactionTypeChange = (type: TransactionType) => {
    setTransactionType(type);
    resetForTabs(propertyType, type);
  };

  const [amenitiesMainOpen, setAmenitiesMainOpen] = useState(false);

  const onSelectSubType = (id: string) => {
    const nextPosition = getDefaultPositionType(propertyType, id);
    setFormData((p) => ({
      ...p,
      selectedSubType: id,
      positionType: nextPosition,
      rowType: 'Single Row',
    }));
  };


  const toggleParkingType = (id: string) => {
    setFormData((p) => {
      const exists = p.parkingType.includes(id);
      return { ...p, parkingType: exists ? p.parkingType.filter((x) => x !== id) : [...p.parkingType, id] };
    });
  };

  const toggleFeature = (featureId: string) => {
    setFormData((p) => {
      const exists = p.features.includes(featureId);
      return { ...p, features: exists ? p.features.filter((x) => x !== featureId) : [...p.features, featureId] };
    });
  };

  const toggleMulti = (field: 'agentEngagementPreference' | 'preferredContactMethod' | 'bestTimeToContact', id: string) => {
    setFormData((p) => {
      const arr = p[field] as string[];
      return { ...p, [field]: arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id] };
    });
  };

  return (
    <div className=" py-10 overflow-hidden">
      {/* Top tabs */}
      <div className="pt-4 pb-14">
        <div className="container mx-auto flex flex-col items-center gap-3 px-4">
          <div className="grid w-full max-w-[380px] grid-cols-2 gap-1 rounded-[8px] border border-[#CAD5E2] bg-white p-1 shadow-md">
            <button
              type="button"
              onClick={() => onPropertyTypeChange('residential')}
              className={`h-10 rounded-[8px] text-[14px] font-medium transition ${isResidential ? 'bg-[#f58d86] text-white' : 'text-[#30343a]'
                }`}
            >
              {t('tabResidential')}
            </button>
            <button
              type="button"
              onClick={() => onPropertyTypeChange('commercial')}
              className={`h-10 rounded-[8px] text-[14px] font-medium transition ${isCommercial ? 'bg-[#f58d86] text-white' : 'text-[#30343a]'
                }`}
            >
              {t('tabCommercial')}
            </button>
          </div>

          <div className="grid w-full max-w-[260px] grid-cols-2 gap-1 rounded-[8px] border border-[#CAD5E2] bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => onTransactionTypeChange('sale')}
              className={`h-9 rounded-[8px] text-[14px] font-medium transition ${isSale ? 'bg-[#f58d86] text-white' : 'text-[#30343a]'
                }`}
            >
              {t('tabSale')}
            </button>
            <button
              type="button"
              onClick={() => onTransactionTypeChange('rent')}
              className={`h-9 rounded-[8px] text-[14px] font-medium transition ${isRent ? 'bg-[#f58d86] text-white' : 'text-[#30343a]'
                }`}
            >
              {t('tabRent')}
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto rounded-[8px]">
        {/* Header */}
        <div className="rounded-tl-[8px] rounded-tr-[8px] bg-[#F88379] px-5 py-6 text-white">
          <button
            type="button"
            className="mb-3 inline-flex items-ce#FFFFFFnter gap-2 text-sm font-medium text-white/90 underline-offset-2 hover:underline"
          >
            <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
            {t('goBack')}
          </button>
          <h1 className="text-4xl font-semibold leading-tight">
            {isRent ? t('titleRent') : t('titleSale')}
          </h1>
          <p className="mt-1 text-sm text-white/90">
            {isRent ? t('subtitleRent') : t('subtitleSale')}
          </p>
        </div>

        <form className="space-y-7 bg-white px-5 py-6 text-[#3d4350]" onSubmit={handleSubmit}>
          {/* Top fields (exact like images) */}
          <div className="grid gap-4 md:grid-cols-12">
            <div className={isSale ? 'md:col-span-5' : 'md:col-span-7'}>


              <Label className={`${labelClass} flex gap-2 items-center`}>
                <span>
                  <MapPin className="h-4 w-4" />
                </span>
                {isRent ? t('preferredLocationsLabel') : t('locationLabel')}
              </Label>
              <Input
                className={controlClass}
                placeholder={t('locationPlaceholder')}
                value={formData.location}
                onChange={(e) => setField('location', e.target.value)}
              />


            </div>

            <div className={isSale ? 'md:col-span-4' : 'md:col-span-5'}>
              <div className=' relative '>
                <Label className={labelClass}>{t('expectedPriceLabel')}</Label>
                <Input
                  className={`${controlClass}${fieldErrors.expectedPrice ? ' border-red-400' : ''}`}
                  inputMode="numeric"
                  placeholder={isRent ? t('expectedPricePlaceholderRent') : t('expectedPricePlaceholderSale')}
                  value={formData.expectedPrice}
                  onChange={(e) => { setField('expectedPrice', e.target.value); setFieldErrors((p) => ({ ...p, expectedPrice: undefined })); }}
                />
                {fieldErrors.expectedPrice && <p className="mt-1 text-xs text-red-500">{fieldErrors.expectedPrice}</p>}
                {/* Negotiable */}
                <div className="mt-2 flex items-center justify-end gap-2 text-xs text-[#6f7783] absolute top-[50%] translate-y-[-30%] end-2">
                  <span>{t('negotiableLabel')}</span>
                  <button
                    type="button"
                    onClick={() => setField('negotiable', true)}
                    className={`px-3 py-1 text-xs font-semibold ${formData.negotiable ? selectedAccent : ghost}`}
                  >
                    {t('negotiableYes')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setField('negotiable', false)}
                    className={`px-3 py-1 text-xs font-semibold ${!formData.negotiable ? selectedAccent : ghost}`}
                  >
                    {t('negotiableNo')}
                  </button>
                </div>
              </div>


              {/* RENT: Monthly/Annually + Service charges (same row like image) */}
              {isRent && (
                <div className="mt-3 ">
                  <div className="inline-flex overflow-hidden rounded-[8px] border border-[#CAD5E2]">
                    <button
                      type="button"
                      onClick={() => setField('priceType', 'monthly')}
                      className={`px-4 py-1 text-sm font-medium ${formData.priceType === 'monthly' ? 'bg-[#f58d86] text-white' : 'bg-white text-[#3d4350]'
                        }`}
                    >
                      {t('priceTypeMonthly')}
                    </button>
                    <button
                      type="button"
                      onClick={() => setField('priceType', 'annually')}
                      className={`px-4 py-1 text-sm font-medium ${formData.priceType === 'annually' ? 'bg-[#f58d86] text-white' : 'bg-white text-[#3d4350]'
                        }`}
                    >
                      {t('priceTypeAnnually')}
                    </button>
                  </div>


                </div>
              )}

            </div>

            {/* SALE: Original Price — 3rd column */}
            {isSale && (
              <div className="md:col-span-3">
                <Label className={labelClass}>{t('originalPriceLabel')}</Label>
                <Input
                  className={controlClass}
                  inputMode="numeric"
                  placeholder={t('originalPricePlaceholder')}
                  value={formData.originalPrice}
                  onChange={(e) => setField('originalPrice', e.target.value)}
                />
              </div>
            )}

          </div>

          {/* SALE: Ideal For + Deal Signals — 2-column row */}
          {isSale && (
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <span className="flex items-center gap-2 text-sm text-[#4B4B4B] mb-2">
                  {t('idealForLabel')}
                  <InfoTooltip content={t('idealForInfoModal')} />
                </span>
                <div className="grid grid-cols-3 rounded-[8px] bg-[#F1F5F9] p-1">
                  {[
                    { k: 'end-use', t: t('idealForEndUse') },
                    { k: 'investment', t: t('idealForInvestment') },
                    { k: 'both', t: t('idealForBoth') },
                  ].map((x) => (
                    <button
                      key={x.k}
                      type="button"
                      onClick={() => setField('idealFor', x.k as IdealFor)}
                      className={`rounded-[8px] px-3 py-2 text-xs font-medium ${formData.idealFor === x.k ? 'bg-white' : ''}`}
                    >
                      {x.t}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <Label className={labelClass}>{t('dealSignalsLabel')}</Label>
                <div className="mt-1 flex flex-wrap gap-2 mb-2">
                  {['Motivated Seller', 'Quick Sale', 'Below Market Value', 'Open to Offers', 'Price Reduced', 'Distressed Sale'].map((signal) => {
                    const isActive = formData.dealSignals.includes(signal);
                    return (
                      <button
                        key={signal}
                        type="button"
                        onClick={() => setField('dealSignals', isActive ? formData.dealSignals.filter((s) => s !== signal) : [...formData.dealSignals, signal])}
                        className={`rounded-[6px] border px-3 py-1 text-xs font-semibold transition-colors ${isActive ? 'border-[#E06E65] bg-[#FFDEDB] text-[#C0504A]' : 'border-[#CAD5E2] bg-white text-[#4B4B4B] hover:bg-[#F9FAFB]'}`}
                      >
                        {signal}
                      </button>
                    );
                  })}
                </div>
                {formData.dealSignals.filter((s) => !['Motivated Seller', 'Quick Sale', 'Below Market Value', 'Open to Offers', 'Price Reduced', 'Distressed Sale'].includes(s)).length > 0 && (
                  <div className="mb-2 flex flex-wrap gap-1.5">
                    {formData.dealSignals.filter((s) => !['Motivated Seller', 'Quick Sale', 'Below Market Value', 'Open to Offers', 'Price Reduced', 'Distressed Sale'].includes(s)).map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 rounded-full bg-[#FFEAE8] border border-[#E06E65] px-2.5 py-0.5 text-[11px] font-medium text-[#C0504A]">
                        {tag}
                        <button type="button" onClick={() => setField('dealSignals', formData.dealSignals.filter((s) => s !== tag))} className="ml-0.5 text-[#E06E65] hover:text-[#C0504A]">×</button>
                      </span>
                    ))}
                  </div>
                )}
                <Input
                  className={controlClass}
                  placeholder="Type a custom signal and press Tab to add..."
                  value={dealSignalInput}
                  onChange={(e) => setDealSignalInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Tab' && dealSignalInput.trim()) {
                      e.preventDefault();
                      const tag = dealSignalInput.trim();
                      if (!formData.dealSignals.includes(tag)) setField('dealSignals', [...formData.dealSignals, tag]);
                      setDealSignalInput('');
                    }
                  }}
                />
              </div>
            </div>
          )}

          {/* RENT: Security Deposit + Utilities side by side */}
          {isRent && (
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label className={`${labelClass} flex items-center gap-1.5`}>
                  {t('securityDepositLabel')}
                  <InfoTooltip content={t('securityDepositTooltip')} />
                </Label>
                <Select value={formData.depositType} onValueChange={(v) => setField('depositType', v as 'standard' | 'custom')}>
                  <SelectTrigger className={controlClass}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                    <SelectItem value="standard">{t('depositStandard')}</SelectItem>
                    <SelectItem value="custom">{t('depositCustom')}</SelectItem>
                  </SelectContent>
                </Select>
                {formData.depositType === 'custom' && (
                  <Input
                    className={`${controlClass} mt-2`}
                    inputMode="numeric"
                    placeholder={t('securityDepositPlaceholder')}
                    value={formData.depositAmount}
                    onChange={(e) => setField('depositAmount', e.target.value)}
                  />
                )}
              </div>
              <div>
                <Label className={labelClass}>{t('utilitiesTitle')}</Label>
                <Select value={formData.utilitiesIncluded} onValueChange={(v) => setField('utilitiesIncluded', v as 'not-included' | 'some-included' | 'all-included')}>
                  <SelectTrigger className={controlClass}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                    <SelectItem value="not-included">{t('utilitiesNotIncluded')}</SelectItem>
                    <SelectItem value="some-included">{t('utilitiesSomeIncluded')}</SelectItem>
                    <SelectItem value="all-included">{t('utilitiesAllIncluded')}</SelectItem>
                  </SelectContent>
                </Select>
                {formData.utilitiesIncluded === 'some-included' && (
                  <Input
                    className={`${controlClass} mt-2`}
                    placeholder={t('includedUtilitiesPlaceholder')}
                    value={formData.includedUtilitiesDetail}
                    onChange={(e) => setField('includedUtilitiesDetail', e.target.value)}
                  />
                )}
              </div>
            </div>
          )}

          {/* Property Type */}
          <section className="space-y-4">
            <h2 className="text-[20px] font-medium leading-none text-[#4B4B4B]">
              {t('propertyTypeSection')} ( {isResidential ? t('propertyTypeResidential') : t('propertyTypeCommercial')} )
            </h2>

            <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
              {subTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => onSelectSubType(type.id)}
                  className={`rounded-[8px] border border-[#FFC1BC] px-4 py-2 text-center text-base text-[#4B4B4B] font-medium transition ${formData.selectedSubType === type.id ? 'bg-[#FFDEDB] text-[#3b3b3b]' : 'bg-white text-[#3b3b3b]'
                    }`}
                >
                  {type.icon.startsWith('/') ? (
                    <Image src={type.icon} width={1000} height={1000} alt={type.label} className="mx-auto mb-1 h-6 w-6" />
                  ) : (
                    <span className="mb-1 block text-base">{type.icon}</span>
                  )}
                  {type.label}
                </button>
              ))}
            </div>

            {/* Position type (conditional by subtype) */}
            {positionTypeOptions.length > 0 && (
              <div className=' space-y-2'>
                <Label className={"text-xl text-[#4B4B4B] front-midium "}>{t('positionTypeLabel')}</Label>
                <div className="grid gap-3 md:grid-cols-4">
                  {positionTypeOptions.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setField('positionType', item)}
                      className={`rounded-[8px] border border-[#FFC1BC] px-4 py-2 text-sm font-medium ${formData.positionType === item ? 'bg-[#FFDEDB]' : 'bg-white'
                        }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {showRowType && (
              <div className=' space-y-2'>
                <Label className={"text-xl text-[#4B4B4B] front-midium "}>{t('rowTypeLabel')}</Label>
                <div className="grid gap-3 md:grid-cols-4">
                  {rowTypes.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setField('rowType', item)}
                      className={`rounded-[8px] border border-[#FFC1BC] px-4 py-2 text-sm font-medium ${formData.rowType === item ? 'bg-[#FFDEDB]' : 'bg-white'
                        }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="grid gap-4 md:grid-cols-2 items-end">
              <div className="space-y-2">
                <Label className="text-xl text-[#4B4B4B] font-medium">{t('configurationLabel')}</Label>
                <Input
                  className={`${controlClass} placeholder:text-[#A5A5A5]`}
                  placeholder={t('configurationPlaceholder')}
                  value={formData.configuration}
                  onChange={(e) => setField('configuration', e.target.value)}
                />
              </div>
              <div className="rounded-[8px] border border-[#FFC1BC] bg-[#FFDEDB] px-3 py-3 text-xs text-[#e0776f]">
                {t('selectConfigurationLabel')} {configLine}
              </div>
            </div>

          </section>

          {/* Property Status */}
          <section className="space-y-4">
            <h3 className="text-[20px] font-medium leading-none text-[#4B4B4B]">{t('propertyStatusSection')}</h3>

            {/* RENT status (image 3/4) */}
            {isRent ? (
              <div>
                <Label className={labelClass}>{t('occupancyStatusRequired')}</Label>
                <div className="grid grid-cols-2 rounded-[8px] border border-[#CAD5E2] bg-[#F1F5F9] p-1">
                  <button
                    type="button"
                    onClick={() => setField('occupancyRent', 'vacant')}
                    className={`rounded-[8px] px-4 py-2 text-sm font-medium ${formData.occupancyRent === 'vacant' ? 'bg-white' : ''
                      }`}
                  >
                    {t('statusVacant')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setField('occupancyRent', 'tenanted')}
                    className={`rounded-[8px] px-4 py-2 text-sm font-medium ${formData.occupancyRent === 'tenanted' ? 'bg-white' : ''
                      }`}
                  >
                    {t('statusTenanted')}
                  </button>
                </div>
              </div>
            ) : (
              /* SALE status (image 1/2) */
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: t('occupancyStatusLabel'),
                    key: 'occupancy',
                    values: [
                      { v: 'vacant', t: t('statusVacant') },
                      { v: 'tenanted', t: t('statusTenanted') },
                    ],
                  },
                  {
                    title: t('completionStatusLabel'),
                    key: 'completion',
                    values: [
                      { v: 'ready', t: t('statusReady') },
                      { v: 'off-plan', t: t('statusOffPlan') },
                    ],
                  },
                  {
                    title: t('ownershipTenureLabel'),
                    key: 'ownership',
                    values: [
                      { v: 'freehold', t: t('statusFreehold') },
                      { v: 'leasehold', t: t('statusLeasehold') },
                    ],
                  },
                ].map((group) => (
                  <div key={group.title}>
                    <Label className={labelClass}>{group.title}</Label>
                    <div className="grid grid-cols-2 rounded-[8px] border border-[#CAD5E2] bg-[#F1F5F9] p-1">
                      {group.values.map((item) => (
                        <button
                          key={item.v}
                          type="button"
                          onClick={() =>
                            setField('propertyStatus', {
                              ...formData.propertyStatus,
                              [group.key]: item.v,
                            } as PropertyStatus)
                          }
                          className={`rounded-[8px] px-2 py-2 text-xs font-medium ${
                            //eslint-disable-next-line
                            (formData.propertyStatus as any)[group.key] === item.v ? 'bg-white' : ''
                            }`}
                        >
                          {item.t}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Bedrooms/Bathrooms (Residential on BOTH sale & rent images) */}
            {isResidential && (
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label className={`${labelClass} flex items-center gap-2`}>
                    {t('bedroomsLabel')}
                    <InfoTooltip content={t('bedroomsInfoModal')} />
                  </Label>
                  <Select value={formData.bedrooms} onValueChange={(v) => setField('bedrooms', v)}>
                    <SelectTrigger className={controlClass}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                      <SelectItem value="studio">{t('bedroomStudio')}</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="6">6</SelectItem>
                      <SelectItem value="7">7</SelectItem>
                      <SelectItem value="8-plus">8+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className={`${labelClass} flex items-center gap-2`}>
                    {t('bathroomsLabel')}
                    <InfoTooltip content={t('bathroomsInfoModal')} />
                  </Label>
                  <Select value={formData.bathrooms} onValueChange={(v) => setField('bathrooms', v)}>
                    <SelectTrigger className={controlClass}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="6-plus">6+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </section>

          {/* Additional Details (same across) */}
          <section className="space-y-4">
            <h3 className="text-[20px] font-medium leading-none text-[#3D4350]">{t('additionalDetailsSection')}</h3>

            <div className="grid gap-4 md:grid-cols-4">
              <div>
                <Label className={labelClass}>{t('buaLabel')}</Label>
                <Input
                  className={controlClass}
                  inputMode="numeric"
                  placeholder={t('buaPlaceholder')}
                  value={formData.bua}
                  onChange={(e) => setField('bua', e.target.value)}
                />
                <div className="mt-2 inline-flex overflow-hidden rounded-[8px] border border-[#CAD5E2]">
                  <button
                    type="button"
                    onClick={() => setField('buaUnit', 'sqft')}
                    className={`px-3 py-1 text-xs font-semibold ${formData.buaUnit === 'sqft' ? 'bg-[#f58d86] text-white' : 'bg-white text-[#3d4350]'}`}
                  >
                    {t('buaSqFt')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setField('buaUnit', 'sqm')}
                    className={`px-3 py-1 text-xs font-semibold ${formData.buaUnit === 'sqm' ? 'bg-[#f58d86] text-white' : 'bg-white text-[#3d4350]'}`}
                  >
                    {t('buaSqM')}
                  </button>
                </div>
              </div>

              <div>
                <Label className={labelClass}>{t('plotSizeLabel')}</Label>
                <Input
                  className={controlClass}
                  inputMode="numeric"
                  placeholder={t('plotSizePlaceholder')}
                  value={formData.plotSize}
                  onChange={(e) => setField('plotSize', e.target.value)}
                />
              </div>

              <div>
                <Label className={`${labelClass} flex items-center gap-2`}>
                  {t('parkingSpacesLabel')}
                  <InfoTooltip content={t('parkingSpacesInfoModal')} />
                </Label>
                <Select value={formData.parkingSpaces} onValueChange={(v) => setField('parkingSpaces', v)}>
                  <SelectTrigger className={controlClass}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="6-plus">6+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className={labelClass}>{t('parkingTypeLabel')}</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className={`${controlClass} w-full flex items-center justify-between gap-2 text-start px-3`}
                    >
                      {formData.parkingType.length === 0 ? (
                        <span className="text-[#9CA3AF] text-[14px]">{t('parkingTypePlaceholder')}</span>
                      ) : (
                        <span className="flex items-center gap-1.5">
                          <span className="text-[#4B4B4B] text-[13px] font-medium truncate">
                            {PARKING_TYPE_OPTIONS.find(o => o.id === formData.parkingType[0])?.label}
                          </span>
                          {formData.parkingType.length > 1 && (
                            <span className="inline-flex shrink-0 items-center px-1.5 py-0.5 rounded-full bg-[#FFEAE8] text-[#C0504A] text-[11px] font-semibold">
                              +{formData.parkingType.length - 1}
                            </span>
                          )}
                        </span>
                      )}
                      <ChevronDown className="h-4 w-4 text-[#7b8492] shrink-0" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent
                    align="start"
                    sideOffset={4}
                    className="p-0 rounded-[10px] border border-[#CAD5E2] shadow-md overflow-hidden"
                    style={{ width: 'var(--radix-popover-trigger-width)' }}
                  >
                    {PARKING_TYPE_OPTIONS.map((option) => {
                      const checked = formData.parkingType.includes(option.id)
                      return (
                        <label
                          key={option.id}
                          className={`flex items-center gap-3 px-3 py-2.5 cursor-pointer transition-colors ${checked ? 'bg-[#FFF5F4]' : 'hover:bg-[#F9FAFB]'}`}
                        >
                          <span className={`h-4 w-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${checked ? 'bg-[#F88379] border-[#E06E65]' : 'border-[#D1D5DB] bg-white'}`}>
                            {checked && <Check className="h-2.5 w-2.5 text-white" />}
                          </span>
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleParkingType(option.id)}
                            className="sr-only"
                          />
                          <span className={`text-[13px] ${checked ? 'text-[#C0504A] font-medium' : 'text-[#3d4350]'}`}>{option.label}</span>
                        </label>
                      )
                    })}
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="relative">
                {isCommercial ? (
                  <>
                    <Label className={labelClass}>{t('featuresCommercialLabel')}</Label>
                    <Input
                      className={controlClass}
                      placeholder={t('featuresCommercialPlaceholder')}
                      value={formData.featuresText}
                      onChange={(e) => setField('featuresText', e.target.value)}
                    />
                  </>
                ) : (
                  <>
                    <Label className={labelClass}>{t('featuresLabel')}</Label>
                    <button
                      type="button"
                      onClick={() => setFeaturesOpen((v) => !v)}
                      className={`${controlClass} w-full flex items-center justify-between text-start pe-3`}
                    >
                      <span className="text-[#3d4350] px-3">
                        {formData.features.length > 0 ? t('featuresSelected', { count: formData.features.length }) : t('featuresPlaceholder')}
                      </span>
                      <ChevronDown className="h-4 w-4 text-[#7b8492]" />
                    </button>
                    {featuresOpen && (
                      <div className="absolute left-0 right-0 top-full z-20 mt-2 max-h-[50vh] space-y-2 overflow-auto rounded-[8px] border border-[#CAD5E2] bg-white p-2 shadow-lg">
                        {FEATURE_OPTIONS.map((option) => {
                          const optionId = `feature-${option.id}`;
                          return (
                            <div
                              key={option.id}
                              className="flex items-center justify-between rounded-[8px] border border-[#CAD5E2] bg-white px-3 py-3 text-sm text-[#3d4350]"
                            >
                              <label htmlFor={optionId} className="flex items-center gap-3">
                                <input
                                  id={optionId}
                                  type="checkbox"
                                  checked={formData.features.includes(option.id)}
                                  onChange={() => toggleFeature(option.id)}
                                  className="h-4 w-4 rounded border-[#CAD5E2] accent-[#7FFFD4]"
                                />
                                {option.label}
                              </label>
                              {option.info && (
                                <InfoTooltip content={option.info.text} />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </>
                )}
              </div>

              <div>
                <Label className={labelClass}>{t('propertyConditionLabel')}</Label>
                <Select value={formData.propertyCondition} onValueChange={(v) => setField('propertyCondition', v)}>
                  <SelectTrigger className={controlClass}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                    <SelectItem value="all">{t('conditionAll')}</SelectItem>
                    <SelectItem value="brand-new">{t('conditionBrandNew')}</SelectItem>
                    <SelectItem value="nearly-new">{t('conditionNearlyNew')}</SelectItem>
                    <SelectItem value="fully-renovated">{t('conditionFullyRenovated')}</SelectItem>
                    <SelectItem value="upgraded">{t('conditionUpgraded')}</SelectItem>
                    <SelectItem value="excellent">{t('conditionExcellent')}</SelectItem>
                    <SelectItem value="fair">{t('conditionFair')}</SelectItem>
                    <SelectItem value="needs-updating">{t('conditionNeedsUpdating')}</SelectItem>
                    <SelectItem value="original">{t('conditionOriginal')}</SelectItem>
                    <SelectItem value="type-property-age">{t('conditionTypePropertyAge')}</SelectItem>
                  </SelectContent>
                </Select>
                {formData.propertyCondition === 'type-property-age' && (
                  <Input
                    className={`${controlClass} mt-2`}
                    placeholder={t('conditionTypePropertyAge')}
                    value={formData.propertyAge}
                    onChange={(e) => setField('propertyAge', e.target.value)}
                  />
                )}
              </div>

              <div>
                <Label className={labelClass}>{t('furnishingLabel')}</Label>
                <Select value={formData.furnishing} onValueChange={(v) => setField('furnishing', v)}>
                  <SelectTrigger className={controlClass}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                    <SelectItem value="fully-furnished">{t('furnishingFullyFurnished')}</SelectItem>
                    <SelectItem value="semi-furnished">{t('furnishingSemiFurnished')}</SelectItem>
                    <SelectItem value="unfurnished">{t('furnishingUnfurnished')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className='relative'>
                {isCommercial ? (
                  <>
                    <Label className={labelClass}>{t('amenitiesCommercialLabel')}</Label>
                    <Input
                      className={controlClass}
                      placeholder={t('amenitiesCommercialPlaceholder')}
                      value={formData.amenitiesText}
                      onChange={(e) => setField('amenitiesText', e.target.value)}
                    />
                  </>
                ) : (
                  <>
                    <Label className={labelClass}>{t('chooseAmenitiesLabel')}</Label>

                    {/* Main Amenities Dropdown Button */}
                    <button
                      type="button"
                      onClick={() => {
                        // Toggle main dropdown - opens/closes the container with the three options
                        if (amenitiesBuildingOpen || amenitiesUnitOpen || amenitiesPrivateOpen) {
                          // If any sub-dropdown is open, close everything
                          setAmenitiesBuildingOpen(false);
                          setAmenitiesUnitOpen(false);
                          setAmenitiesPrivateOpen(false);
                        } else {
                          // If nothing is open, open the main container (shows the three options)
                          // We need to track main dropdown state - let's add a new state
                          setAmenitiesMainOpen(!amenitiesMainOpen);
                        }
                      }}
                      className={`${controlClass} w-full flex items-center justify-between text-start mb-2 pe-3`}
                    >
                      <span className="text-[#3d4350] px-3">
                        {formData.amenitiesBuilding.length > 0 ||
                          formData.amenitiesUnit.length > 0 ||
                          formData.amenitiesPrivate.length > 0
                          ? t('amenitiesSelected', { count: formData.amenitiesBuilding.length + formData.amenitiesUnit.length + formData.amenitiesPrivate.length })
                          : t('amenitiesPlaceholder')}
                      </span>
                      <ChevronDown className={`!h-4 !w-4 text-[#7b8492] transition-transform ${amenitiesMainOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Three Dropdown Options - Shown only when main dropdown is open */}
                    {amenitiesMainOpen && (
                      <div className="space-y-3 mt-2 absolute left-0 right-0 top-full z-20 bg-white rounded-[8px] border border-[#CAD5E2] p-3 shadow-lg">

                        {/* Building/Community Dropdown */}
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => {
                              // Toggle only this dropdown
                              setAmenitiesBuildingOpen(!amenitiesBuildingOpen);
                              // Close other dropdowns
                              setAmenitiesUnitOpen(false);
                              setAmenitiesPrivateOpen(false);
                            }}
                            className={`${controlClass} w-full flex items-center justify-between text-start pe-2`}
                          >
                            <span className="text-[#3d4350] px-3">
                              {formData.amenitiesBuilding.length > 0
                                ? t('amenitiesBuildingCommunitySelected', { count: formData.amenitiesBuilding.length })
                                : t('amenitiesBuildingCommunity')}
                            </span>
                            <ChevronDown className={`h-4 w-4 text-[#7b8492] transition-transform ${amenitiesBuildingOpen ? 'rotate-180' : ''}`} />
                          </button>

                          {amenitiesBuildingOpen && (
                            <div className="mt-2 space-y-2 rounded-[8px] border border-[#CAD5E2] bg-white p-2">
                              {BUILDING_COMMUNITY_AMENITIES.map((item) => {
                                const optionId = `amenities-building-${item.id}`;
                                return (
                                  <div
                                    key={item.id}
                                    className="flex items-center justify-between rounded-[8px] border border-[#CAD5E2] bg-white px-3 py-3 text-sm text-[#3d4350]"
                                  >
                                    <label htmlFor={optionId} className="flex items-center gap-3">
                                      <input
                                        id={optionId}
                                        type="checkbox"
                                        checked={formData.amenitiesBuilding.includes(item.id)}
                                        onChange={() => toggleAmenity('amenitiesBuilding', item.id)}
                                        className="h-4 w-4 rounded border-[#CAD5E2] accent-[#7FFFD4]"
                                      />
                                      {item.label}
                                    </label>
                                  </div>
                                );
                              })}
                              <Input
                                className="h-10 rounded-[8px] border border-[#CAD5E2] bg-white text-sm text-[#3d4350]"
                                placeholder={t('amenitiesOtherPlaceholder')}
                                value={formData.amenitiesBuildingOther}
                                onChange={(e) => setField('amenitiesBuildingOther', e.target.value)}
                              />
                            </div>
                          )}
                        </div>

                        {/* Unit-Level Amenities Dropdown */}
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => {
                              // Toggle only this dropdown
                              setAmenitiesUnitOpen(!amenitiesUnitOpen);
                              // Close other dropdowns
                              setAmenitiesBuildingOpen(false);
                              setAmenitiesPrivateOpen(false);
                            }}
                            className={`${controlClass} w-full flex items-center justify-between text-start pe-2`}
                          >
                            <span className="text-[#3d4350] px-3">
                              {formData.amenitiesUnit.length > 0
                                ? t('amenitiesUnitLevelSelected', { count: formData.amenitiesUnit.length })
                                : t('amenitiesUnitLevel')}
                            </span>
                            <ChevronDown className={`h-4 w-4 text-[#7b8492] transition-transform ${amenitiesUnitOpen ? 'rotate-180' : ''}`} />
                          </button>

                          {amenitiesUnitOpen && (
                            <div className="mt-2 space-y-2 rounded-[8px] border border-[#CAD5E2] bg-white p-2">
                              {UNIT_LEVEL_AMENITIES.map((item) => {
                                const optionId = `amenities-unit-${item.id}`;
                                return (
                                  <div
                                    key={item.id}
                                    className="flex items-center justify-between rounded-[8px] border border-[#CAD5E2] bg-white px-3 py-3 text-sm text-[#3d4350]"
                                  >
                                    <label htmlFor={optionId} className="flex items-center gap-3">
                                      <input
                                        id={optionId}
                                        type="checkbox"
                                        checked={formData.amenitiesUnit.includes(item.id)}
                                        onChange={() => toggleAmenity('amenitiesUnit', item.id)}
                                        className="h-4 w-4 rounded border-[#CAD5E2] accent-[#7FFFD4]"
                                      />
                                      {item.label}
                                    </label>
                                  </div>
                                );
                              })}
                              <Input
                                className="h-10 rounded-[8px] border border-[#CAD5E2] bg-white text-sm text-[#3d4350]"
                                placeholder={t('amenitiesOtherPlaceholder')}
                                value={formData.amenitiesUnitOther}
                                onChange={(e) => setField('amenitiesUnitOther', e.target.value)}
                              />
                            </div>
                          )}
                        </div>

                        {/* Private Amenities Dropdown */}
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => {
                              // Toggle only this dropdown
                              setAmenitiesPrivateOpen(!amenitiesPrivateOpen);
                              // Close other dropdowns
                              setAmenitiesBuildingOpen(false);
                              setAmenitiesUnitOpen(false);
                            }}
                            className={`${controlClass} w-full flex items-center justify-between text-start pe-2`}
                          >
                            <span className="text-[#3d4350] px-3">
                              {formData.amenitiesPrivate.length > 0
                                ? t('amenitiesPrivateSelected', { count: formData.amenitiesPrivate.length })
                                : t('amenitiesPrivate')}
                            </span>
                            <ChevronDown className={`h-4 w-4 text-[#7b8492] transition-transform ${amenitiesPrivateOpen ? 'rotate-180' : ''}`} />
                          </button>

                          {amenitiesPrivateOpen && (
                            <div className="mt-2 space-y-2 rounded-[8px] border border-[#CAD5E2] bg-white p-2">
                              {PRIVATE_AMENITIES.map((item) => {
                                const optionId = `amenities-private-${item.id}`;
                                return (
                                  <div
                                    key={item.id}
                                    className="flex items-center justify-between rounded-[8px] border border-[#CAD5E2] bg-white px-3 py-3 text-sm text-[#3d4350]"
                                  >
                                    <label htmlFor={optionId} className="flex items-center gap-3">
                                      <input
                                        id={optionId}
                                        type="checkbox"
                                        checked={formData.amenitiesPrivate.includes(item.id)}
                                        onChange={() => toggleAmenity('amenitiesPrivate', item.id)}
                                        className="h-4 w-4 rounded border-[#CAD5E2] accent-[#7FFFD4]"
                                      />
                                      {item.label}
                                    </label>
                                  </div>
                                );
                              })}
                              <Input
                                className="h-10 rounded-[8px] border border-[#CAD5E2] bg-white text-sm text-[#3d4350]"
                                placeholder={t('amenitiesOtherPlaceholder')}
                                value={formData.amenitiesPrivateOther}
                                onChange={(e) => setField('amenitiesPrivateOther', e.target.value)}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Viewing Options — flat checkboxes with inline uploads */}
              <div>
                <Label className={`${labelClass} flex items-center gap-1.5`}>
                  {t('viewingOptionsTitle')}
                  <InfoTooltip content={t('viewingOptionsTooltip')} />
                </Label>
                <div className="space-y-2">
                  {/* Photos */}
                  <div className={`rounded-[8px] border px-3 py-2.5 transition-colors ${formData.viewingOptions.includes('photos') ? 'border-[#E06E65] bg-[#FFF5F4]' : 'border-[#CAD5E2] bg-white'}`}>
                    <div className="flex items-center justify-between gap-3">
                      <label className="flex items-center gap-2 cursor-pointer flex-1">
                        <span className={`h-4 w-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${formData.viewingOptions.includes('photos') ? 'bg-[#F88379] border-[#E06E65]' : 'border-[#D1D5DB] bg-white'}`}>
                          {formData.viewingOptions.includes('photos') && <Check className="h-2.5 w-2.5 text-white" />}
                        </span>
                        <input type="checkbox" checked={formData.viewingOptions.includes('photos')} onChange={() => { const cur = formData.viewingOptions; setField('viewingOptions', cur.includes('photos') ? cur.filter(x => x !== 'photos') : [...cur, 'photos']); }} className="sr-only" />
                        <span className={`text-sm ${formData.viewingOptions.includes('photos') ? 'text-[#C0504A] font-medium' : 'text-[#3d4350]'}`}>{t('viewingPhotosLabel')}</span>
                      </label>
                      {formData.viewingOptions.includes('photos') && (
                        <div className="flex items-center gap-2 shrink-0">
                          {uploadingPhotos && <span className="text-xs text-[#535965]">Uploading…</span>}
                          {!uploadingPhotos && uploadedPhotos.length > 0 && <span className="text-xs text-[#535965] truncate max-w-[120px]">{uploadedPhotos.length === 1 ? uploadedPhotos[0].name : t('mediaMultipleFiles', { count: uploadedPhotos.length })}</span>}
                          <button type="button" disabled={uploadingPhotos} onClick={() => photosRef.current?.click()} className="rounded-[6px] border border-[#CAD5E2] bg-white px-3 py-1 text-xs font-medium text-[#4B4B4B] hover:bg-[#F9FAFB] disabled:opacity-50">{t('mediaUploadButton')}</button>
                          <input ref={photosRef} type="file" accept="image/*" multiple className="sr-only" onChange={async (e) => { const files = Array.from(e.target.files ?? []); if (!files.length) return; setUploadedPhotos(files); setUploadingPhotos(true); try { const urls = await Promise.all(files.map(async (file) => { const { upload_url, public_url } = await requestUploadUrl(file.name, file.type, 'photos'); await uploadToStorage(upload_url, file); return public_url; })); setMediaPhotoUrls(urls); } finally { setUploadingPhotos(false); } }} />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Floor Plan */}
                  <div className={`rounded-[8px] border px-3 py-2.5 transition-colors ${formData.viewingOptions.includes('floor-plan') ? 'border-[#E06E65] bg-[#FFF5F4]' : 'border-[#CAD5E2] bg-white'}`}>
                    <div className="flex items-center justify-between gap-3">
                      <label className="flex items-center gap-2 cursor-pointer flex-1">
                        <span className={`h-4 w-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${formData.viewingOptions.includes('floor-plan') ? 'bg-[#F88379] border-[#E06E65]' : 'border-[#D1D5DB] bg-white'}`}>
                          {formData.viewingOptions.includes('floor-plan') && <Check className="h-2.5 w-2.5 text-white" />}
                        </span>
                        <input type="checkbox" checked={formData.viewingOptions.includes('floor-plan')} onChange={() => { const cur = formData.viewingOptions; setField('viewingOptions', cur.includes('floor-plan') ? cur.filter(x => x !== 'floor-plan') : [...cur, 'floor-plan']); }} className="sr-only" />
                        <span className={`text-sm ${formData.viewingOptions.includes('floor-plan') ? 'text-[#C0504A] font-medium' : 'text-[#3d4350]'}`}>{t('viewingFloorPlanLabel')}</span>
                      </label>
                      {formData.viewingOptions.includes('floor-plan') && (
                        <div className="flex items-center gap-2 shrink-0">
                          {uploadingFloorPlan && <span className="text-xs text-[#535965]">Uploading…</span>}
                          {!uploadingFloorPlan && uploadedFloorPlan && <span className="text-xs text-[#535965] truncate max-w-[120px]">{uploadedFloorPlan.name}</span>}
                          <button type="button" disabled={uploadingFloorPlan} onClick={() => floorPlanRef.current?.click()} className="rounded-[6px] border border-[#CAD5E2] bg-white px-3 py-1 text-xs font-medium text-[#4B4B4B] hover:bg-[#F9FAFB] disabled:opacity-50">{t('mediaUploadButton')}</button>
                          <input ref={floorPlanRef} type="file" accept="image/*,.pdf" className="sr-only" onChange={async (e) => { const file = e.target.files?.[0]; if (!file) return; setUploadedFloorPlan(file); setUploadingFloorPlan(true); try { const { upload_url, public_url } = await requestUploadUrl(file.name, file.type, 'floor-plan'); await uploadToStorage(upload_url, file); setMediaFloorPlanUrl(public_url); } finally { setUploadingFloorPlan(false); } }} />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Video Tour */}
                  <div className={`rounded-[8px] border px-3 py-2.5 transition-colors ${formData.viewingOptions.includes('video-tour') ? 'border-[#E06E65] bg-[#FFF5F4]' : 'border-[#CAD5E2] bg-white'}`}>
                    <div className="flex items-center justify-between gap-3">
                      <label className="flex items-center gap-2 cursor-pointer flex-1">
                        <span className={`h-4 w-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${formData.viewingOptions.includes('video-tour') ? 'bg-[#F88379] border-[#E06E65]' : 'border-[#D1D5DB] bg-white'}`}>
                          {formData.viewingOptions.includes('video-tour') && <Check className="h-2.5 w-2.5 text-white" />}
                        </span>
                        <input type="checkbox" checked={formData.viewingOptions.includes('video-tour')} onChange={() => { const cur = formData.viewingOptions; setField('viewingOptions', cur.includes('video-tour') ? cur.filter(x => x !== 'video-tour') : [...cur, 'video-tour']); }} className="sr-only" />
                        <span className={`text-sm ${formData.viewingOptions.includes('video-tour') ? 'text-[#C0504A] font-medium' : 'text-[#3d4350]'}`}>{t('viewingVideoTourLabel')}</span>
                      </label>
                      {formData.viewingOptions.includes('video-tour') && (
                        <div className="flex items-center gap-2 shrink-0">
                          {uploadingVideoTour && <span className="text-xs text-[#535965]">Uploading…</span>}
                          {!uploadingVideoTour && uploadedVideoTour && <span className="text-xs text-[#535965] truncate max-w-[120px]">{uploadedVideoTour.name}</span>}
                          <button type="button" disabled={uploadingVideoTour} onClick={() => videoTourRef.current?.click()} className="rounded-[6px] border border-[#CAD5E2] bg-white px-3 py-1 text-xs font-medium text-[#4B4B4B] hover:bg-[#F9FAFB] disabled:opacity-50">{t('mediaUploadButton')}</button>
                          <input ref={videoTourRef} type="file" accept="video/*" className="sr-only" onChange={async (e) => { const file = e.target.files?.[0]; if (!file) return; setUploadedVideoTour(file); setUploadingVideoTour(true); try { const { upload_url, public_url } = await requestUploadUrl(file.name, file.type, 'video-tour'); await uploadToStorage(upload_url, file); setMediaVideoTourUrl(public_url); } finally { setUploadingVideoTour(false); } }} />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 360° Virtual Tour */}
                  <div className={`rounded-[8px] border px-3 py-2.5 transition-colors ${formData.viewingOptions.includes('360-virtual-tour') ? 'border-[#E06E65] bg-[#FFF5F4]' : 'border-[#CAD5E2] bg-white'}`}>
                    <div className="flex items-center justify-between gap-3">
                      <label className="flex items-center gap-2 cursor-pointer flex-1">
                        <span className={`h-4 w-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${formData.viewingOptions.includes('360-virtual-tour') ? 'bg-[#F88379] border-[#E06E65]' : 'border-[#D1D5DB] bg-white'}`}>
                          {formData.viewingOptions.includes('360-virtual-tour') && <Check className="h-2.5 w-2.5 text-white" />}
                        </span>
                        <input type="checkbox" checked={formData.viewingOptions.includes('360-virtual-tour')} onChange={() => { const cur = formData.viewingOptions; setField('viewingOptions', cur.includes('360-virtual-tour') ? cur.filter(x => x !== '360-virtual-tour') : [...cur, '360-virtual-tour']); }} className="sr-only" />
                        <span className={`text-sm ${formData.viewingOptions.includes('360-virtual-tour') ? 'text-[#C0504A] font-medium' : 'text-[#3d4350]'}`}>{t('viewing360TourLabel')}</span>
                      </label>
                      {formData.viewingOptions.includes('360-virtual-tour') && (
                        <div className="flex items-center gap-2 shrink-0">
                          {uploading360Tour && <span className="text-xs text-[#535965]">Uploading…</span>}
                          {!uploading360Tour && uploaded360Tour && <span className="text-xs text-[#535965] truncate max-w-[120px]">{uploaded360Tour.name}</span>}
                          <button type="button" disabled={uploading360Tour} onClick={() => tour360Ref.current?.click()} className="rounded-[6px] border border-[#CAD5E2] bg-white px-3 py-1 text-xs font-medium text-[#4B4B4B] hover:bg-[#F9FAFB] disabled:opacity-50">{t('mediaUploadButton')}</button>
                          <input ref={tour360Ref} type="file" accept="video/*" className="sr-only" onChange={async (e) => { const file = e.target.files?.[0]; if (!file) return; setUploaded360Tour(file); setUploading360Tour(true); try { const { upload_url, public_url } = await requestUploadUrl(file.name, file.type, '360-tour'); await uploadToStorage(upload_url, file); setMedia360TourUrl(public_url); } finally { setUploading360Tour(false); } }} />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* In-Person Viewing */}
                  <div className={`rounded-[8px] border px-3 py-2.5 transition-colors ${formData.viewingOptions.includes('in-person') ? 'border-[#E06E65] bg-[#FFF5F4]' : 'border-[#CAD5E2] bg-white'}`}>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <span className={`h-4 w-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${formData.viewingOptions.includes('in-person') ? 'bg-[#F88379] border-[#E06E65]' : 'border-[#D1D5DB] bg-white'}`}>
                        {formData.viewingOptions.includes('in-person') && <Check className="h-2.5 w-2.5 text-white" />}
                      </span>
                      <input type="checkbox" checked={formData.viewingOptions.includes('in-person')} onChange={() => { const cur = formData.viewingOptions; setField('viewingOptions', cur.includes('in-person') ? cur.filter(x => x !== 'in-person') : [...cur, 'in-person']); }} className="sr-only" />
                      <span className={`text-sm ${formData.viewingOptions.includes('in-person') ? 'text-[#C0504A] font-medium' : 'text-[#3d4350]'}`}>{t('viewingInPersonLabel')}</span>
                    </label>
                  </div>

                  {/* Live Video Showing */}
                  <div className={`rounded-[8px] border px-3 py-2.5 transition-colors ${formData.viewingOptions.includes('live-video') ? 'border-[#E06E65] bg-[#FFF5F4]' : 'border-[#CAD5E2] bg-white'}`}>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <span className={`h-4 w-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${formData.viewingOptions.includes('live-video') ? 'bg-[#F88379] border-[#E06E65]' : 'border-[#D1D5DB] bg-white'}`}>
                        {formData.viewingOptions.includes('live-video') && <Check className="h-2.5 w-2.5 text-white" />}
                      </span>
                      <input type="checkbox" checked={formData.viewingOptions.includes('live-video')} onChange={() => { const cur = formData.viewingOptions; setField('viewingOptions', cur.includes('live-video') ? cur.filter(x => x !== 'live-video') : [...cur, 'live-video']); }} className="sr-only" />
                      <span className={`text-sm ${formData.viewingOptions.includes('live-video') ? 'text-[#C0504A] font-medium' : 'text-[#3d4350]'}`}>{t('viewingLiveVideoLabel')}</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/* Keywords */}
          <section>
            <Label className={labelClass}>{t('keywordsLabel')}</Label>
            <Input
              className={controlClass}
              placeholder={isSale ? t('keywordsPlaceholderSale') : t('keywordsPlaceholderRent')}
              value={formData.keywords}
              onChange={(e) => setField('keywords', e.target.value)}
            />
          </section>

          {/* Private listing — show on ALL 4 forms */}
          <section className="flex items-center gap-x-3">
            <h3 className="text-[20px] font-semibold text-[#434853]">{t('privateListingLabel')}</h3>
            <InfoTooltip content={t('privateListingInfoModal')} />
            <Switch checked={formData.privateListingOffMarket} onCheckedChange={(v) => setField('privateListingOffMarket', v)} className="data-[state=checked]:bg-[#F88379]" />
          </section>

          {/* RENT: Preferred Tenant Information — below Private/Off-Market toggle */}
          {isRent && (
            <section className="space-y-4">
              {/* Commercial rent Key Money — above section heading */}
              {isCommercial && (
                <div>
                  <Label className={`${labelClass} flex items-center gap-2`}>
                    {t('keyMoneyLabel')}
                    <InfoTooltip content={t('keyMoneyInfoModal')} />
                  </Label>
                  <div className="grid grid-cols-3 gap-3 rounded-[8px] border border-[#CAD5E2] bg-white px-3 py-2">
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="key-money-rent"
                        checked={formData.keyMoney === 'yes'}
                        onChange={() => setField('keyMoney', 'yes')}
                      />
                      {t('keyMoneyYes')}
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="key-money-rent"
                        checked={formData.keyMoney === 'no'}
                        onChange={() => setField('keyMoney', 'no')}
                      />
                      {t('keyMoneyNo')}
                    </label>
                    <Input
                      className="h-9 rounded-[8px] border border-[#CAD5E2]"
                      placeholder={t('keyMoneyTypePlaceholder')}
                      value={formData.keyMoneyType}
                      onChange={(e) => setField('keyMoneyType', e.target.value)}
                    />
                  </div>
                </div>
              )}

              <h3 className="text-[20px] font-semibold leading-none text-[#4B4B4B]">{t('preferredTenantInfoSection')}</h3>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label className={labelClass}>{t('tenantPreferenceLabel')}</Label>
                  <Input
                    className={controlClass}
                    value={formData.tenantPreference}
                    onChange={(e) => setField('tenantPreference', e.target.value)}
                  />
                </div>

                <div>
                  <Label className={labelClass}>{t('preferredLeaseLengthLabel')}</Label>
                  <Select value={formData.preferredLeaseLength} onValueChange={(v) => setField('preferredLeaseLength', v)}>
                    <SelectTrigger className={controlClass}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                      <SelectItem value="24-months-plus">{t('lease24MonthsPlus')}</SelectItem>
                      <SelectItem value="12-months">{t('lease12Months')}</SelectItem>
                      <SelectItem value="6-months">{t('lease6Months')}</SelectItem>
                      <SelectItem value="3-months">{t('lease3Months')}</SelectItem>
                      <SelectItem value="flexible">{t('leaseFlexible')}</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="mt-1.5 text-xs text-[#6f7783]">{t('leaseHelperText')}</p>
                </div>
              </div>

              {/* Annual Rent Payment Terms */}
              <div>
                <Label className={`${labelClass} flex items-center gap-1.5`}>
                  {t('chequeTermsLabel')}
                  <InfoTooltip content={t('chequeTermsTooltip')} />
                </Label>
                <div className="mt-2 grid grid-cols-2 gap-3 md:grid-cols-3">
                  {([
                    { n: '1', label: t('cheque1Short') },
                    { n: '2', label: t('cheque2Short') },
                    { n: '3', label: t('cheque3Short') },
                    { n: '4', label: t('cheque4Short') },
                    { n: '6', label: t('cheque6Short') },
                    { n: '12', label: t('cheque12Short') },
                  ] as const).map(({ n, label }) => {
                    const isChecked = formData.chequeSelected.includes(n);
                    return (
                      <div key={n} className="space-y-1.5">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() =>
                              setFormData((p) => ({
                                ...p,
                                chequeSelected: isChecked
                                  ? p.chequeSelected.filter((x) => x !== n)
                                  : [...p.chequeSelected, n],
                              }))
                            }
                            className="h-4 w-4 rounded border-[#CAD5E2] accent-[#F88379]"
                          />
                          <span className="text-sm text-[#4B4B4B]">{label}</span>
                        </label>
                        {isChecked && (
                          <Input
                            className={controlClass}
                            inputMode="numeric"
                            placeholder={t('chequeAmountPlaceholder')}
                            value={formData.chequeAmounts[n] ?? ''}
                            onChange={(e) => setFormData((p) => ({ ...p, chequeAmounts: { ...p.chequeAmounts, [n]: e.target.value } }))}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
                <p className="mt-2 text-xs text-[#6f7783]">{t('chequeTermsHelperText')}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label className={labelClass}>{t('availableFromLabel')}</Label>
                  <DatePicker
                    theme="pink"
                    value={formData.availableFrom}
                    onChange={(d) => setField('availableFrom', d)}
                    placeholder={t('availableFromLabel')}
                    disablePast={false}
                  />
                  <p className="mt-1 text-xs text-[#6f7783]">{t('datePickerInfoText')}</p>
                </div>

                <div>
                  <Label className={labelClass}>{t('urgencyLevelLabel')}</Label>
                  <Select value={formData.urgencyLevelRent} onValueChange={(v) => setField('urgencyLevelRent', v)}>
                    <SelectTrigger className={controlClass}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                      <SelectItem value="ready-now">{t('urgencyReadyNow')}</SelectItem>
                      <SelectItem value="within-30-days">{t('urgencyWithin30Days')}</SelectItem>
                      <SelectItem value="within-1-3-months">{t('urgencyWithin1to3Months')}</SelectItem>
                      <SelectItem value="flexible-timeline">{t('urgencyFlexibleTimeline')}</SelectItem>
                      <SelectItem value="exploring-option">{t('urgencyExploringOption')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </section>
          )}

          {/* SALE: Buyer Profile (below Private Listing) */}
          {isSale && (
            <section className="space-y-4">
              <h3 className="text-[31px] font-semibold leading-none text-[#434853]">{t('buyerProfileSection')}</h3>

              {/* Finance Method */}
              <div className="relative">
                <Label className={labelClass}>{t('preferredFinanceMethodLabel')}</Label>
                <div className="absolute end-3 top-[50%] translate-y-[20%]">
                  <InfoTooltip content={t('financeInfoModal')} />
                </div>
                <div className="grid gap-3 md:grid-cols-3">
                  {[
                    { k: 'cash', t: t('financeCashBuyer') },
                    { k: 'mortgage', t: t('financeMortgageBuyer') },
                    { k: 'payment-plan', t: t('financePaymentPlan') },
                  ].map((x) => (
                    <label
                      key={x.k}
                      className="flex items-center gap-2 rounded-[8px] border border-[#CAD5E2] bg-white px-3 py-3 text-sm"
                    >
                      <input
                        type="checkbox"
                        checked={formData.financeMethod.includes(x.k)}
                        onChange={() =>
                          setField(
                            'financeMethod',
                            formData.financeMethod.includes(x.k)
                              ? formData.financeMethod.filter((v) => v !== x.k)
                              : [...formData.financeMethod, x.k]
                          )
                        }
                      />
                      {x.t}
                    </label>
                  ))}
                </div>
              </div>

              {/* Commercial sale Key Money */}
              {isCommercial && (
                <div>
                  <Label className={`${labelClass} flex items-center gap-2`}>
                    {t('keyMoneyLabel')}
                    <InfoTooltip content={t('keyMoneyInfoModal')} />
                  </Label>
                  <div className="grid grid-cols-3 gap-3 rounded-[8px] border border-[#CAD5E2] bg-white px-3 py-2">
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="key-money-sale"
                        checked={formData.keyMoney === 'yes'}
                        onChange={() => setField('keyMoney', 'yes')}
                      />
                      {t('keyMoneyYes')}
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="key-money-sale"
                        checked={formData.keyMoney === 'no'}
                        onChange={() => setField('keyMoney', 'no')}
                      />
                      {t('keyMoneyNo')}
                    </label>
                    <Input
                      className="h-9 rounded-[8px] border border-[#CAD5E2]"
                      placeholder={t('keyMoneyTypePlaceholder')}
                      value={formData.keyMoneyType}
                      onChange={(e) => setField('keyMoneyType', e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* Buyer Preference */}
              <div>
                <Label className={labelClass}>{t('buyerPreferenceLabel')}</Label>
                <Input
                  className={controlClass}
                  placeholder={t('buyerPreferencePlaceholder')}
                  value={formData.buyerPreference}
                  onChange={(e) => setField('buyerPreference', e.target.value)}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label className={labelClass}>{t('targetClosingDateLabel')}</Label>
                  <DatePicker
                    theme="pink"
                    value={formData.targetClosingDate}
                    onChange={(d) => setField('targetClosingDate', d)}
                    placeholder={t('targetClosingDateLabel')}
                    disablePast={false}
                  />
                  <p className="mt-1 text-xs text-[#6f7783]">{t('datePickerInfoText')}</p>
                </div>

                <div>
                  <Label className={labelClass}>{t('urgencyLevelLabel')}</Label>
                  <Select value={formData.urgencyLevelSale} onValueChange={(v) => setField('urgencyLevelSale', v)}>
                    <SelectTrigger className={controlClass}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                      <SelectItem value="ready-now">{t('urgencyReadyNow')}</SelectItem>
                      <SelectItem value="within-30-days">{t('urgencyWithin30Days')}</SelectItem>
                      <SelectItem value="within-1-3-months">{t('urgencyWithin1to3Months')}</SelectItem>
                      <SelectItem value="flexible-timeline">{t('urgencyFlexibleTimeline')}</SelectItem>
                      <SelectItem value="exploring-option">{t('urgencyExploringOption')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </section>
          )}

          {/* Contact Details */}
          <section className="space-y-3">
            <h3 className="text-[20px] font-semibold text-[#434853]">{t('contactDetailsSection')}</h3>

            <div>
              <Input
                className={`${controlClass}${fieldErrors.name ? ' border-red-400' : ''}`}
                placeholder={t('contactNamePlaceholder')}
                value={formData.name}
                onChange={(e) => { setField('name', e.target.value); setFieldErrors((p) => ({ ...p, name: undefined })); }}
              />
              {fieldErrors.name && <p className="mt-1 text-xs text-red-500">{fieldErrors.name}</p>}
            </div>
            <div>
              <Input
                className={`${controlClass}${fieldErrors.email ? ' border-red-400' : ''}`}
                placeholder={t('contactEmailPlaceholder')}
                type="email"
                value={formData.email}
                onChange={(e) => { setField('email', e.target.value); setFieldErrors((p) => ({ ...p, email: undefined })); }}
              />
              {fieldErrors.email && <p className="mt-1 text-xs text-red-500">{fieldErrors.email}</p>}
            </div>
            <div>
              <Input
                type="tel"
                className={`${controlClass}${fieldErrors.phone ? ' border-red-400' : ''}`}
                placeholder={t('contactPhonePlaceholder')}
                value={formData.phone}
                onChange={(e) => { setField('phone', e.target.value); setFieldErrors((p) => ({ ...p, phone: undefined })); }}
              />
              {fieldErrors.phone && <p className="mt-1 text-xs text-red-500">{fieldErrors.phone}</p>}
            </div>
            <div>
              <Input
                type="email"
                className={controlClass}
                placeholder={t('referredByEmailPlaceholder')}
                value={formData.referredByEmail}
                onChange={(e) => setField('referredByEmail', e.target.value)}
              />
            </div>

            <Textarea
              placeholder={t('contactNotesPlaceholder')}
              value={formData.notes}
              onChange={(e) => setField('notes', e.target.value)}
              className="min-h-28 rounded-[8px] border border-[#CAD5E2] bg-white"
            />
          </section>

          {/* Proof of Ownership / Listing Rights */}
          <section className="space-y-4">
            <div>
              <h3 className="text-[20px] font-semibold text-[#434853]">Proof of Ownership / Listing Rights</h3>
              <p className="mt-1 text-sm text-[#6f7783]">Provide at least ONE of the following</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <Label className={labelClass}>Title Deed Number</Label>
                <Input
                  className={controlClass}
                  placeholder="e.g. 123456789"
                  value={formData.ownershipTitleDeedNumber}
                  onChange={(e) => setField('ownershipTitleDeedNumber', e.target.value)}
                />
              </div>
              <div>
                <Label className={labelClass}>Oqood Number <span className="text-xs font-normal text-[#6f7783]">(for off-plan)</span></Label>
                <Input
                  className={controlClass}
                  placeholder="e.g. OQ-123456"
                  value={formData.ownershipOqoodNumber}
                  onChange={(e) => setField('ownershipOqoodNumber', e.target.value)}
                />
              </div>
              <div>
                <Label className={labelClass}>Trakheesi / Permit Number <span className="text-xs font-normal text-[#6f7783]">(if already listed)</span></Label>
                <Input
                  className={controlClass}
                  placeholder="e.g. TR-123456"
                  value={formData.ownershipPermitNumber}
                  onChange={(e) => setField('ownershipPermitNumber', e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label className={`${labelClass} flex items-center gap-1.5`}>
                Upload Document <span className="text-xs font-normal text-[#6f7783]">(optional but encouraged)</span>
              </Label>
              <p className="mb-2 text-xs text-[#6f7783]">Title deed copy · Oqood · Listing agreement · Any ownership proof</p>
              <div className="flex items-center gap-3">
                {uploadingOwnershipDoc && <span className="text-sm text-[#535965]">Uploading…</span>}
                {!uploadingOwnershipDoc && uploadedOwnershipDoc && (
                  <span className="text-sm text-[#535965] truncate max-w-[180px]">{uploadedOwnershipDoc.name}</span>
                )}
                <button
                  type="button"
                  disabled={uploadingOwnershipDoc}
                  onClick={() => ownershipDocRef.current?.click()}
                  className="rounded-[8px] border border-[#CAD5E2] bg-white px-4 py-2 text-sm font-medium text-[#4B4B4B] hover:bg-[#F9FAFB] transition-colors disabled:opacity-50"
                >
                  Upload Document
                </button>
                <input
                  ref={ownershipDocRef}
                  type="file"
                  accept="image/*,.pdf"
                  className="sr-only"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    setUploadedOwnershipDoc(file);
                    setUploadingOwnershipDoc(true);
                    try {
                      const { upload_url, public_url } = await requestUploadUrl(file.name, file.type, 'ownership-doc');
                      await uploadToStorage(upload_url, file);
                      setOwnershipDocUrl(public_url);
                    } finally {
                      setUploadingOwnershipDoc(false);
                    }
                  }}
                />
              </div>
              <p className="mt-1.5 text-xs text-[#6f7783] flex items-center gap-1">
                <Info className="h-3 w-3 flex-shrink-0" />
                Used for verification only — not publicly visible
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-base font-semibold text-[#434853]">Seller / Landlord Confirmation</h4>
              <div>
                <p className="mb-2 text-sm font-medium text-[#535965]">Are you:</p>
                <div className="grid gap-2 md:grid-cols-2">
                  {[
                    { v: 'owner', label: 'Owner' },
                    { v: 'exclusive-agent', label: 'Exclusive Agent' },
                    { v: 'non-exclusive-agent', label: 'Non-Exclusive Agent' },
                    { v: 'poa', label: 'POA / Authorized Representative' },
                  ].map((opt) => (
                    <label key={opt.v} className={`flex cursor-pointer items-center gap-3 rounded-[8px] border px-4 py-2.5 transition-colors ${formData.sellerType === opt.v ? 'border-[#E06E65] bg-[#FFF5F4]' : 'border-[#CAD5E2] bg-white hover:bg-[#F9FAFB]'}`}>
                      <input
                        type="radio"
                        name="seller-type"
                        checked={formData.sellerType === opt.v}
                        onChange={() => setField('sellerType', opt.v)}
                        className="relative h-4 w-4 shrink-0 appearance-none rounded-full border border-[#D1D5DB] bg-white checked:border-[#E06E65] checked:before:absolute checked:before:left-[3px] checked:before:top-[3px] checked:before:h-2 checked:before:w-2 checked:before:rounded-full checked:before:bg-[#F88379] checked:before:content-[''] focus:outline-none focus:ring-1 focus:ring-[#F88379]/30 cursor-pointer"
                      />
                      <span className="text-sm text-[#4B4B4B]">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-[#535965]">Contact preference <span className="text-xs font-normal text-[#9CA3AF]">(optional visibility)</span></p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { v: 'direct', label: 'Direct to owner' },
                    { v: 'via-agent', label: 'Via agent' },
                    { v: 'private', label: 'Private / hidden' },
                  ].map((opt) => (
                    <button
                      key={opt.v}
                      type="button"
                      onClick={() => setField('contactPreferenceOwner', opt.v)}
                      className={`rounded-[8px] border px-3 py-2 text-sm font-medium transition-colors ${formData.contactPreferenceOwner === opt.v ? 'border-[#E06E65] bg-[#FFDEDB] text-[#C0504A]' : 'border-[#CAD5E2] bg-white text-[#4B4B4B] hover:bg-[#F9FAFB]'}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[8px] border border-[#E0C55A] bg-[#FFF9E6] p-4 space-y-2">
              <p className="text-sm font-semibold text-[#A65F00]">Permit &amp; Listing Compliance</p>
              <p className="text-sm text-[#6f7783] leading-relaxed">
                A valid Trakheesi / DLD permit is legally required for any property to be publicly marketed in the UAE. If a permit is not yet available, your property can still be submitted to Deal 360 as an <strong>Unverified Off-Market</strong> listing. These listings will have limited exposure and will only be shared within the Deal 360 agent network. They will not be publicly visible until a valid permit is provided. Our network of partner brokers can assist in obtaining the required permits, enabling full listing visibility and verified status.
              </p>
            </div>
          </section>

          {/* Listing Intent Notice */}
          <section className="space-y-4">
            <div className="rounded-[8px] border border-[#CAD5E2] bg-[#fff7df] p-4">
              <div className="mb-2 flex items-start gap-2 text-[#b7801f]">

                <div>
                  <h3 className="text-base text-[#A65F00] font-semibold">{t('listingIntentNoticeTitle')}</h3>
                  <p className="text-base text-[#A65F00] flex gap-2">
                    <Info className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    {t('listingIntentNoticeText')}
                  </p>
                </div>
              </div>

              <Label className="mb-1 block text-sm font-semibold text-[#314158]">{t('agentsCountLabel')}</Label>

              <Select value={formData.agentsCount} onValueChange={(v) => setField('agentsCount', v)}>
                <SelectTrigger className={controlClass}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                  <SelectItem value="1-agent">{t('agentsCount1')}</SelectItem>
                  <SelectItem value="2-agents">{t('agentsCount2')}</SelectItem>
                  <SelectItem value="3-agents">{t('agentsCount3')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Sale only: Seller Commission Stance */}
            {isSale && (
              <div className="space-y-3">
                <div>
                  <h4 className="text-base font-medium text-[#4B4B4B]">{t('sellerCommissionStanceTitle')}</h4>
                  <p className="text-sm text-[#4B4B4B]">{t('sellerCommissionStanceDesc')}</p>
                </div>

                {[
                  { v: 'yes', t: t('sellerCommissionYes') },
                  { v: 'no', t: t('sellerCommissionNo') },
                  { v: 'negotiable', t: t('sellerCommissionNegotiable') },
                ].map((x) => (
                  <label key={x.v} className="flex items-center gap-2 rounded-[8px] border border-[#CAD5E2] bg-white px-3 py-3 text-base text-[#4B4B4B]">
                    <input
                      type="radio"
                      name="seller-commission"
                      checked={formData.sellerCommissionStance === x.v}
                      onChange={() => setField('sellerCommissionStance', x.v)}
                      className="relative h-4 w-4 appearance-none rounded-[3px] border border-black bg-[#DFFFF4] checked:bg-[#DFFFF4] checked:border-black checked:before:absolute checked:before:left-[5px] checked:before:top-[1px] checked:before:h-[9px] checked:before:w-[5px] checked:before:rotate-45 checked:before:border-2 checked:before:border-black checked:before:border-t-0 checked:before:border-l-0 checked:before:content-[''] focus:outline-none focus:ring-1 focus:ring-black/30"
                    />
                    {x.t}
                  </label>
                ))}
              </div>
            )}

            <div className="rounded-[8px] border border-[#CAD5E2] bg-[#fff7df] p-4">
              <div className="flex items-start gap-2 text-[#A65F00]">
                <Info className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <p className="text-sm">
                  <span className="font-semibold">{t('commissionNoticeLabel')}</span> {t('commissionNoticeSale')}

                </p>
              </div>
            </div>
          </section>

          {/* ── Agent Engagement Preference ── */}
          <section className="space-y-3">
            <div>
              <h3 className="text-[20px] font-semibold text-[#434853]">{t('agentEngagementTitle')}</h3>
              <p className="mt-1 text-sm text-[#6f7783]">{t('agentEngagementDesc')}</p>
            </div>
            {[
              { id: 'agents-with-buyers', label: t('agentEngagementWithBuyers'), desc: t('agentEngagementWithBuyersDesc') },
              { id: 'agents-who-source',  label: t('agentEngagementOpenSource'),  desc: t('agentEngagementOpenSourceDesc') },
            ].map(({ id, label, desc }) => (
              <label key={id} className="flex cursor-pointer items-start gap-3 rounded-[8px] border border-[#CAD5E2] bg-white px-4 py-3">
                <input
                  type="checkbox"
                  checked={formData.agentEngagementPreference.includes(id)}
                  onChange={() => toggleMulti('agentEngagementPreference', id)}
                  className="mt-0.5 relative h-4 w-4 shrink-0 appearance-none rounded-[3px] border border-[#D1D5DB] bg-white checked:bg-[#F88379] checked:border-[#E06E65] checked:before:absolute checked:before:left-[5px] checked:before:top-[1px] checked:before:h-[9px] checked:before:w-[5px] checked:before:rotate-45 checked:before:border-2 checked:before:border-white checked:before:border-t-0 checked:before:border-l-0 checked:before:content-[''] focus:outline-none focus:ring-1 focus:ring-[#F88379]/30 cursor-pointer"
                />
                <div>
                  <p className="text-sm font-semibold text-[#4B4B4B]">{label}</p>
                  <p className="mt-0.5 text-sm text-[#6f7783]">{desc}</p>
                </div>
              </label>
            ))}
            <p className="text-xs text-[#6f7783] italic">{t('agentEngagementNote')}</p>
          </section>

          {/* ── Agent Response Preference ── */}
          <section className="space-y-3">
            <div>
              <h3 className="text-[20px] font-semibold text-[#434853]">{t('agentResponseTitle')}</h3>
              <p className="mt-1 text-sm text-[#6f7783]">{t('agentResponseDesc')}</p>
            </div>
            {[
              { v: 'all-agents',   label: t('agentResponseAll'),   desc: t('agentResponseAllDesc') },
              { v: 'limit-agents', label: t('agentResponseLimit'),  desc: null },
            ].map(({ v, label, desc }) => (
              <label key={v} className="flex cursor-pointer items-start gap-3 rounded-[8px] border border-[#CAD5E2] bg-white px-4 py-3">
                <input
                  type="radio"
                  name="agent-response"
                  checked={formData.agentResponsePreference === v}
                  onChange={() => setField('agentResponsePreference', v)}
                  className="mt-0.5 relative h-4 w-4 shrink-0 appearance-none rounded-full border border-[#D1D5DB] bg-white checked:border-[#E06E65] checked:before:absolute checked:before:left-[3px] checked:before:top-[3px] checked:before:h-2 checked:before:w-2 checked:before:rounded-full checked:before:bg-[#F88379] checked:before:content-[''] focus:outline-none focus:ring-1 focus:ring-[#F88379]/30 cursor-pointer"
                />
                <div className="w-full">
                  <p className="text-sm font-semibold text-[#4B4B4B]">{label}</p>
                  {desc && <p className="mt-0.5 text-sm text-[#6f7783]">{desc}</p>}
                  {v === 'limit-agents' && formData.agentResponsePreference === 'limit-agents' && (
                    <div className="mt-3">
                      <p className="mb-2 text-sm font-medium text-[#535965]">{t('maxAgentsLabel')}</p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          { v: '3',  label: t('maxAgents3') },
                          { v: '5',  label: t('maxAgents5') },
                          { v: '10', label: t('maxAgents10') },
                        ].map((opt) => (
                          <label key={opt.v} className="flex cursor-pointer items-center gap-2 rounded-[8px] border border-[#CAD5E2] bg-white px-3 py-2 text-sm text-[#4B4B4B]">
                            <input
                              type="radio"
                              name="max-agents"
                              checked={formData.maxAgents === opt.v}
                              onChange={() => setField('maxAgents', opt.v)}
                              className="relative h-4 w-4 shrink-0 appearance-none rounded-full border border-[#D1D5DB] bg-white checked:border-[#E06E65] checked:before:absolute checked:before:left-[3px] checked:before:top-[3px] checked:before:h-2 checked:before:w-2 checked:before:rounded-full checked:before:bg-[#F88379] checked:before:content-[''] focus:outline-none focus:ring-1 focus:ring-[#F88379]/30 cursor-pointer"
                            />
                            {opt.label}
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </label>
            ))}
            <p className="text-xs text-[#6f7783] italic">{t('agentResponseNote')}</p>
          </section>

          {/* ── Contact Consent & Preferences ── */}
          <section className="space-y-4">
            <div>
              <h3 className="text-[20px] font-semibold text-[#434853]">{t('contactConsentTitle')}</h3>
              <p className="mt-1 text-sm text-[#6f7783]">{t('contactConsentDesc')}</p>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-[#535965]">{t('preferredContactMethodLabel')}</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'email',    label: t('contactMethodEmail') },
                  { id: 'phone',    label: t('contactMethodPhone') },
                  { id: 'whatsapp', label: t('contactMethodWhatsApp') },
                  { id: 'inmail',   label: t('contactMethodInmail') },
                ].map(({ id, label }) => (
                  <label key={id} className="flex cursor-pointer items-center gap-2 rounded-[8px] border border-[#CAD5E2] bg-white px-3 py-2 text-sm text-[#4B4B4B]">
                    <input
                      type="checkbox"
                      checked={formData.preferredContactMethod.includes(id)}
                      onChange={() => toggleMulti('preferredContactMethod', id)}
                      className="relative h-4 w-4 shrink-0 appearance-none rounded-[3px] border border-[#D1D5DB] bg-white checked:bg-[#F88379] checked:border-[#E06E65] checked:before:absolute checked:before:left-[5px] checked:before:top-[1px] checked:before:h-[9px] checked:before:w-[5px] checked:before:rotate-45 checked:before:border-2 checked:before:border-white checked:before:border-t-0 checked:before:border-l-0 checked:before:content-[''] focus:outline-none focus:ring-1 focus:ring-[#F88379]/30 cursor-pointer"
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-[#535965]">{t('bestTimeLabel')}</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'morning',   label: t('bestTimeMorning') },
                  { id: 'afternoon', label: t('bestTimeAfternoon') },
                  { id: 'evening',   label: t('bestTimeEvening') },
                  { id: 'anytime',   label: t('bestTimeAnytime') },
                  { id: 'other',     label: t('bestTimeOther') },
                ].map(({ id, label }) => (
                  <label key={id} className="flex cursor-pointer items-center gap-2 rounded-[8px] border border-[#CAD5E2] bg-white px-3 py-2 text-sm text-[#4B4B4B]">
                    <input
                      type="checkbox"
                      checked={formData.bestTimeToContact.includes(id)}
                      onChange={() => toggleMulti('bestTimeToContact', id)}
                      className="relative h-4 w-4 shrink-0 appearance-none rounded-[3px] border border-[#D1D5DB] bg-white checked:bg-[#F88379] checked:border-[#E06E65] checked:before:absolute checked:before:left-[5px] checked:before:top-[1px] checked:before:h-[9px] checked:before:w-[5px] checked:before:rotate-45 checked:before:border-2 checked:before:border-white checked:before:border-t-0 checked:before:border-l-0 checked:before:content-[''] focus:outline-none focus:ring-1 focus:ring-[#F88379]/30 cursor-pointer"
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>
          </section>

          {/* ── Privacy Option ── */}
          <section className="space-y-3">
            <h3 className="text-[20px] font-semibold text-[#434853]">{t('privacyOptionTitle')}</h3>
            <label className="flex cursor-pointer items-start gap-3 rounded-[8px] border border-[#CAD5E2] bg-white px-4 py-3">
              <input
                type="checkbox"
                checked={formData.remainAnonymous}
                onChange={() => setField('remainAnonymous', !formData.remainAnonymous)}
                className="mt-0.5 relative h-4 w-4 shrink-0 appearance-none rounded-[3px] border border-[#D1D5DB] bg-white checked:bg-[#F88379] checked:border-[#E06E65] checked:before:absolute checked:before:left-[5px] checked:before:top-[1px] checked:before:h-[9px] checked:before:w-[5px] checked:before:rotate-45 checked:before:border-2 checked:before:border-white checked:before:border-t-0 checked:before:border-l-0 checked:before:content-[''] focus:outline-none focus:ring-1 focus:ring-[#F88379]/30 cursor-pointer"
              />
              <div>
                <p className="text-sm font-semibold text-[#4B4B4B]">{t('remainAnonymousLabel')}</p>
                <p className="mt-0.5 text-sm text-[#6f7783]">{t('remainAnonymousDesc')}</p>
              </div>
            </label>
          </section>

          {/* ── Platform Disclaimer ── */}
          <section className="rounded-[8px] border border-[#CAD5E2] bg-[#F9FAFB] px-4 py-4 space-y-2">
            <h3 className="text-sm font-semibold text-[#434853]">{t('platformDisclaimerTitle')}</h3>
            <p className="text-sm text-[#6f7783] leading-relaxed">{t('platformDisclaimerText')}</p>
          </section>

          {/* ── Consent ── */}
          <section>
            <label className="flex cursor-pointer items-start gap-3 rounded-[8px] border border-[#CAD5E2] bg-white px-4 py-4">
              <input
                type="checkbox"
                checked={formData.consentSharing}
                onChange={() => setField('consentSharing', !formData.consentSharing)}
                className="mt-0.5 relative h-4 w-4 shrink-0 appearance-none rounded-[3px] border border-[#D1D5DB] bg-white checked:bg-[#F88379] checked:border-[#E06E65] checked:before:absolute checked:before:left-[5px] checked:before:top-[1px] checked:before:h-[9px] checked:before:w-[5px] checked:before:rotate-45 checked:before:border-2 checked:before:border-white checked:before:border-t-0 checked:before:border-l-0 checked:before:content-[''] focus:outline-none focus:ring-1 focus:ring-[#F88379]/30 cursor-pointer"
              />
              <p className="text-sm text-[#4B4B4B]">{t('consentSharingLabel')}</p>
            </label>
          </section>

          {networkError && (
            <p className="rounded-[8px] bg-red-50 p-3 text-sm text-red-500">{networkError}</p>
          )}
          {success && (
            <p className="rounded-[8px] bg-green-50 p-4 text-center text-sm font-medium text-green-600">
              {t('successMessage')}
            </p>
          )}

          {/* Bottom buttons */}
          {!success && (
            <div className="grid gap-4 pb-2 md:grid-cols-2">
              <button
                type="button"
                className="h-11 rounded-[8px] border border-[#CAD5E2] bg-[#D7D7D7] text-sm font-medium text-[#2e3239]"
              >
                {t('cancelButton')}
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex h-11 items-center justify-center gap-3 rounded-[8px] bg-[#F88379] text-sm font-medium text-white hover:bg-[#ef746b] disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {loading ? t('submittingButton') : t('submitButton')}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
