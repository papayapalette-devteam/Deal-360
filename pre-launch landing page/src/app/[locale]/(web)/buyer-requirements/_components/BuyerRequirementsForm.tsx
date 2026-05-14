'use client';

import { useMemo, useState } from 'react';
import { Check, ChevronDown, ChevronLeft, Info, MapPin, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Input } from '@/components/Ui/input';
import { InfoTooltip } from '@/components/Ui/info-tooltip';
import { Label } from '@/components/Ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/Ui/select';
import { Textarea } from '@/components/Ui/textarea';
import { DatePicker } from '@/components/Ui/date-picker';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Ui/popover';
import Image from 'next/image';
import { ApiValidationError, postPreLaunch } from '@/lib/api';

type PropertyType = 'residential' | 'commercial';
type TransactionType = 'rent' | 'sale';

type DealSignal = 'distressed' | 'below-market' | 'quick-sale' | 'motivated-seller';
type IdealFor = 'end-use' | 'investment' | 'both';

type PropertyStatus = {
  occupancy?: 'all' | 'vacant' | 'tenanted';
  completion?: 'all' | 'ready' | 'off-plan';
  ownership?: 'all' | 'freehold' | 'leasehold';
};

type FormData = {
  location: string;
  budgetMin: string;
  budgetMax: string;

  expectedPrice: string;
  negotiable: boolean;

  // SALE only
  idealFor: IdealFor;
  dealSignals: DealSignal[];
  originalPrice: string;

  // RENT only
  depositAmount: string;
  priceType: 'monthly' | 'annually';
  serviceCharges: string;

  configuration: string;
  selectedSubType: string;
  positionType: string; // residential only
  rowType: string; // residential only (townhouse/villa)

  propertyStatus: PropertyStatus;
  availableFrom: string; // rent only
  occupancyRent: 'vacant' | 'tenanted'; // rent only

  bedrooms: string;
  bathrooms: string;

  bua: string;
  buaUnit: 'sqft' | 'sqm';
  plotSize: string;
  parkingSpaces: string;
  parkingType: string[];
  mustHaveFeatureTags: string[];
  propertyCondition: string[];
  propertyAge: string;
  furnishing: string;
  chequePreferences: string[];
  chequeNote: string;
  amenitiesText: string;
  buyerSignalTags: string[];

  financeMethod: string[];
  targetClosingDate: Date | undefined;
  urgencyLevelSale: string;

  keyMoney: 'yes' | 'no' | 'any';
  keyMoneyType: string;
  tenantPreference: string;
  preferredLeaseLength: string;
  moveInDate: Date | undefined;
  urgencyLevelRent: string;

  keywords: string;

  privateListingOffMarket: boolean;

  name: string;
  email: string;
  phone: string;
  referredByEmail: string;
  notes: string;

  agentsCount: string;
  sellerCommissionStance: string;

  matchPreference: 'exact' | 'open' | '';
  agentResponsePreference: 'all' | 'limited' | '';
  maxAgents: '3' | '5' | '10' | '';
  preferredContactMethod: string[];
  bestTimeToContact: string[];
  remainAnonymous: boolean;
  consentSharing: boolean;
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

export default function RequirementListingForm() {
  const t = useTranslations('requirementForm');
  const [propertyType, setPropertyType] = useState<PropertyType>('residential');
  const [transactionType, setTransactionType] = useState<TransactionType>('rent');

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

  const rowTypes = useMemo(() => [
    { id: 'Single Row', label: t('rowTypeSingleRow') },
    { id: 'Back-to-Back', label: t('rowTypeBackToBack') },
  ], [t]);

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
  const toggleParkingType = (id: string) => {
    setFormData((p) => {
      const exists = p.parkingType.includes(id);
      return { ...p, parkingType: exists ? p.parkingType.filter((x) => x !== id) : [...p.parkingType, id] };
    });
  };

  const PROPERTY_CONDITION_OPTIONS = useMemo(() => [
    { id: 'brand-new', label: t('conditionBrandNew') },
    { id: 'nearly-new', label: t('conditionNearlyNew') },
    { id: 'fully-renovated', label: t('conditionFullyRenovated') },
    { id: 'upgraded', label: t('conditionUpgraded') },
    { id: 'excellent', label: t('conditionExcellent') },
    { id: 'fair', label: t('conditionFair') },
    { id: 'needs-updating', label: t('conditionNeedsUpdating') },
    { id: 'original', label: t('conditionOriginal') },
    { id: 'type-property-age', label: t('conditionTypePropertyAge') },
  ], [t]);

  const togglePropertyCondition = (id: string) => {
    setFormData((p) => {
      const exists = p.propertyCondition.includes(id);
      return { ...p, propertyCondition: exists ? p.propertyCondition.filter((x) => x !== id) : [...p.propertyCondition, id] };
    });
  };

  const toggleContactMethod = (id: string) => {
    setFormData((p) => {
      const exists = p.preferredContactMethod.includes(id);
      return { ...p, preferredContactMethod: exists ? p.preferredContactMethod.filter((x) => x !== id) : [...p.preferredContactMethod, id] };
    });
  };

  const toggleBestTime = (id: string) => {
    setFormData((p) => {
      const exists = p.bestTimeToContact.includes(id);
      return { ...p, bestTimeToContact: exists ? p.bestTimeToContact.filter((x) => x !== id) : [...p.bestTimeToContact, id] };
    });
  };

  const [mustHaveInput, setMustHaveInput] = useState('');
  const [buyerSignalInput, setBuyerSignalInput] = useState('');

  const toggleChequePreference = (id: string) => {
    setFormData((p) => {
      const exists = p.chequePreferences.includes(id);
      return { ...p, chequePreferences: exists ? p.chequePreferences.filter((x) => x !== id) : [...p.chequePreferences, id] };
    });
  };

  const CHEQUE_OPTIONS = [
    { id: '1-cheque', label: t('cheque1') },
    { id: '2-cheques', label: t('cheque2') },
    { id: '3-cheques', label: t('cheque3') },
    { id: '4-cheques', label: t('cheque4') },
    { id: '6-cheques', label: t('cheque6') },
    { id: '12-cheques', label: t('cheque12') },
  ];

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [networkError, setNetworkError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string; phone?: string }>({});

  const [formData, setFormData] = useState<FormData>({
    location: '',
    budgetMin: '',
    budgetMax: '',

    expectedPrice: '',
    negotiable: true,

    idealFor: 'end-use',
    dealSignals: ['distressed', 'below-market', 'quick-sale', 'motivated-seller'],
    originalPrice: '100,000',

    depositAmount: '',
    priceType: 'annually',
    serviceCharges: '',

    configuration: '',
    selectedSubType: 'apartment',
    positionType: 'Standard Apartment',
    rowType: 'Single Row',

    propertyStatus: { occupancy: 'all', completion: 'all', ownership: 'all' },
    availableFrom: 'q1-2026',
    occupancyRent: 'vacant',

    bedrooms: 'studio',
    bathrooms: '1',

    bua: '',
    buaUnit: 'sqft',
    plotSize: '',
    parkingSpaces: '1',
    parkingType: [],
    mustHaveFeatureTags: [],
    propertyCondition: [],
    propertyAge: '',
    furnishing: 'fully-furnished',
    chequePreferences: [],
    chequeNote: '',
    amenitiesText: '',
    buyerSignalTags: [],

    financeMethod: ['cash'],
    targetClosingDate: undefined,
    urgencyLevelSale: 'ready-now',

    keyMoney: 'any',
    keyMoneyType: '',
    tenantPreference: '',
    preferredLeaseLength: '12-months',
    moveInDate: undefined,
    urgencyLevelRent: 'ready-now',

    keywords: '',

    privateListingOffMarket: false,

    name: '',
    email: '',
    phone: '',
    referredByEmail: '',
    notes: '',

    agentsCount: '1-agent',
    sellerCommissionStance: 'yes',

    matchPreference: '',
    agentResponsePreference: '',
    maxAgents: '',
    preferredContactMethod: [],
    bestTimeToContact: [],
    remainAnonymous: false,
    consentSharing: false,
  });

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

  const setField = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData((p) => ({ ...p, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { name?: string; email?: string; phone?: string } = {};
    if (!formData.name.trim()) errors.name = t('errorNameRequired');
    if (!formData.email.trim()) errors.email = t('errorEmailRequired');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = t('errorEmailInvalid');
    if (formData.phone.trim() && !/^\+?[\d\s\-().]{7,20}$/.test(formData.phone.trim())) errors.phone = t('errorPhoneInvalid');
    if (Object.keys(errors).length > 0) { setFieldErrors(errors); return; }
    setLoading(true);
    setNetworkError(null);
    setFieldErrors({});
    try {
      await postPreLaunch('buyer-requirement', {
        full_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        referred_by_email: formData.referredByEmail,
        property_type: formData.selectedSubType,
        bedrooms: formData.bedrooms ? parseInt(formData.bedrooms) : null,
        budget_min: formData.budgetMin ? parseFloat(formData.budgetMin) : null,
        budget_max: formData.budgetMax ? parseFloat(formData.budgetMax) : null,
        details: {
          transactionType,
          propertyType,
          location: formData.location,
          configuration: formData.configuration,
          positionType: formData.positionType,
          rowType: formData.rowType,
          negotiable: formData.negotiable,
          idealFor: formData.idealFor,
          dealSignals: formData.dealSignals,
          originalPrice: formData.originalPrice,
          depositAmount: formData.depositAmount,
          priceType: formData.priceType,
          serviceCharges: formData.serviceCharges,
          propertyStatus: formData.propertyStatus,
          availableFrom: formData.availableFrom,
          occupancyRent: formData.occupancyRent,
          bathrooms: formData.bathrooms,
          bua: formData.bua,
          buaUnit: formData.buaUnit,
          plotSize: formData.plotSize,
          parkingSpaces: formData.parkingSpaces,
          parkingType: formData.parkingType,
          mustHaveFeatureTags: formData.mustHaveFeatureTags,
          propertyCondition: formData.propertyCondition,
          propertyAge: formData.propertyAge,
          furnishing: formData.furnishing,
          chequePreferences: formData.chequePreferences,
          chequeNote: formData.chequeNote,
          amenitiesText: formData.amenitiesText,
          buyerSignalTags: formData.buyerSignalTags,
          financeMethod: formData.financeMethod,
          targetClosingDate: formData.targetClosingDate,
          urgencyLevelSale: formData.urgencyLevelSale,
          keyMoney: formData.keyMoney,
          keyMoneyType: formData.keyMoneyType,
          tenantPreference: formData.tenantPreference,
          preferredLeaseLength: formData.preferredLeaseLength,
          moveInDate: formData.moveInDate,
          urgencyLevelRent: formData.urgencyLevelRent,
          agentsCount: formData.agentsCount,
          sellerCommissionStance: formData.sellerCommissionStance,
          privateListingOffMarket: formData.privateListingOffMarket,
          keywords: formData.keywords,
          notes: formData.notes,
          matchPreference: formData.matchPreference,
          agentResponsePreference: formData.agentResponsePreference,
          maxAgents: formData.maxAgents,
          preferredContactMethod: formData.preferredContactMethod,
          bestTimeToContact: formData.bestTimeToContact,
          remainAnonymous: formData.remainAnonymous,
          consentSharing: formData.consentSharing,
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

  const resetForTabs = (nextProperty: PropertyType, nextTxn: TransactionType) => {
    const nextIsRes = nextProperty === 'residential';
    setFormData((p) => ({
      ...p,
      selectedSubType: nextIsRes ? 'apartment' : 'office',
      positionType: getDefaultPositionType(nextProperty, nextIsRes ? 'apartment' : 'office'),
      rowType: 'Single Row',
      configuration: '',
      propertyStatus: { occupancy: 'all', completion: 'all', ownership: 'all' },
      // keep shared values; clear only where needed
      tenantPreference: nextTxn === 'sale' ? '' : p.tenantPreference,
      depositAmount: nextTxn === 'sale' ? '' : p.depositAmount,
      serviceCharges: nextTxn === 'sale' ? '' : p.serviceCharges,
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

  const onSelectSubType = (id: string) => {
    const nextPosition = getDefaultPositionType(propertyType, id);
    setFormData((p) => ({
      ...p,
      selectedSubType: id,
      positionType: nextPosition,
      rowType: 'Single Row',
    }));
  };

  // ===== YOUR COLORS =====
  const PRIMARY = '#B2FFE5';
  const SOFT = '#E6FFF7';

  // ===== UI CLASSES (match provided design) =====
  const labelClass = 'mb-2 flex items-center gap-2 text-[12px] font-medium text-[#5B6472]';
  const sectionTitleClass = 'text-[20px] font-medium leading-none text-[#4B4B4B]';
  const controlClass =
    'h-10 w-full rounded-[8px] border border-[#D7DFEA] bg-white text-[13px] font-medium text-[#2e3239] shadow-sm ' +
    'placeholder:text-[#A0A7B2] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[rgba(178,255,229,0.85)] focus-visible:ring-offset-white';

  const chipOn =
    'rounded-[6px] border border-[#CAD5E2] bg-white px-3 py-1 text-[11px] font-semibold text-[#2e3239] shadow-sm';
  const chipOff =
    'rounded-[6px] border border-[#CAD5E2] bg-[#F4F6F9] px-3 py-1 text-[11px] font-semibold text-[#5b6472]';

  const tabWrap =
    'grid w-full max-w-[380px] grid-cols-2 gap-1 rounded-[8px] border border-[#CAD5E2] bg-white p-1 shadow-sm';
  const tabOn = 'h-9 rounded-[8px] text-[13px] font-semibold text-[#1f2a37]';
  const tabOff = 'h-9 rounded-[8px] text-[13px] font-semibold text-[#3b4452]';

  const subCardOn =
    'rounded-[8px] border border-[rgba(178,255,229,1)] bg-[rgba(230,255,247,1)] px-4 py-3 text-center text-[12px] font-semibold text-[#2e3239]';
  const subCardOff =
    'rounded-[8px] border border-[#D7DFEA] bg-white px-4 py-3 text-center text-[12px] font-semibold text-[#2e3239] hover:bg-[#F7FAFC]';

  // Header text (match images)
  const pageTitle = isRent ? t('titleTenant') : t('titleBuyer');
  const pageSub = isRent ? t('subtitleTenant') : t('subtitleBuyer');

  const commissionNote = isRent ? t('commissionNoticeTenant') : t('commissionNoticeBuyer');

  return (
    <div className="min-h-screen  py-10">
      <div className="mx-auto w-full container px-4">
        {/* Top tabs */}
        <div className="pt-4 pb-10">
          <div className="flex flex-col items-center gap-3">
            <div className={tabWrap}>
              <button
                type="button"
                onClick={() => onPropertyTypeChange('residential')}
                className={`${isResidential ? tabOn : tabOff}`}
                style={{ background: isResidential ? PRIMARY : 'transparent' }}
              >
                {t('tabResidential')}
              </button>
              <button
                type="button"
                onClick={() => onPropertyTypeChange('commercial')}
                className={`${isCommercial ? tabOn : tabOff}`}
                style={{ background: isCommercial ? PRIMARY : 'transparent' }}
              >
                {t('tabCommercial')}
              </button>
            </div>

            <div className="grid w-full max-w-[260px] grid-cols-2 gap-1 rounded-[8px] border border-[#CAD5E2] bg-white p-1 shadow-sm">
              <button
                type="button"
                onClick={() => onTransactionTypeChange('sale')}
                className="h-8 rounded-[8px] text-[13px] font-semibold text-[#1f2a37]"
                style={{ background: isSale ? PRIMARY : 'transparent' }}
              >
                {t('tabBuy')}
              </button>
              <button
                type="button"
                onClick={() => onTransactionTypeChange('rent')}
                className="h-8 rounded-[8px] text-[13px] font-semibold text-[#1f2a37]"
                style={{ background: isRent ? PRIMARY : 'transparent' }}
              >
                {t('tabRent')}
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[12px] border border-[#E6EBF2] bg-white shadow-sm">
          {/* Header (match images: mint bar) */}
          <div className="px-5 py-6" style={{ background: PRIMARY }}>
            <button type="button" className="mb-3 inline-flex items-center gap-2 text-[12px] font-medium text-[#2e3239]">
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#2e3239]">
                <ChevronLeft className="h-3 w-3 rtl:rotate-180" />
              </span>
              {t('goBack')}
            </button>

            <h1 className="text-[22px] font-semibold text-[#2e3239]">{pageTitle}</h1>
            <p className="mt-1 text-[12px] text-[#2e3239]/80">{pageSub}</p>
          </div>

          <form className="space-y-7 px-5 py-6 text-[#2e3239]" onSubmit={handleSubmit}>
            {/* Tip for Better Results */}
            <div className="rounded-[10px] border border-[rgba(178,255,229,1)] px-4 py-3" style={{ background: SOFT }}>
              <div className="flex items-start gap-2">
                <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2e8060]" />
                <div>
                  <p className="text-[12px] font-semibold text-[#2e3239]">{t('tipForResultsTitle')}</p>
                  <p className="mt-0.5 text-[11px] text-[#5B6472]">{isCommercial ? t('tipForResultsTextCommercial') : t('tipForResultsText')}</p>
                </div>
              </div>
            </div>

            {/* Top fields */}
            <div className="grid gap-4 md:grid-cols-12">
              <div className="md:col-span-7">
                <Label className={labelClass}>
                  <MapPin className="h-4 w-4" />
                  {t('preferredLocationsLabel')}
                </Label>

                <Input
                  className={controlClass}
                  placeholder={t('locationPlaceholder')}
                  value={formData.location}
                  onChange={(e) => setField('location', e.target.value)}
                />


                {/* SALE: Ideal for row (images show this only on Buyer) */}
                {isSale && (
                  <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2 text-[12px] font-medium text-[#4B4B4B]">
  {t('useTypeLabel')}
  <InfoTooltip content={t('useTypeInfoModal')} />
</div>

                    <div className="mt- w-[400px] grid grid-cols-3 rounded-[8px] bg-[#F1F5F9] p-1">
                      {[
                        { k: 'end-use', t: t('useTypeEndUse') },
                        { k: 'investment', t: t('useTypeInvestment') },
                        { k: 'both', t: t('useTypeBoth') },
                      ].map((x) => (
                        <button
                          key={x.k}
                          type="button"
                          onClick={() => setField('idealFor', x.k as IdealFor)}
                          className="rounded-[8px] px-3 py-2 text-xs font-semibold"
                          style={{ background: formData.idealFor === x.k ? 'white' : 'transparent' }}
                        >
                          {x.t}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="md:col-span-5">
                <Label className={labelClass}>{t('budgetLabel')}</Label>

                <Input
                  className={controlClass}
                  inputMode="numeric"
                  placeholder={t('budgetMaxPlaceholder')}
                  value={formData.budgetMax}
                  onChange={(e) => setField('budgetMax', e.target.value)}
                />

                {/* Rent: Monthly/Annually toggle (same as images) */}
                {isRent && (
                  <div className="mt-3 inline-flex overflow-hidden rounded-[8px] border border-[#CAD5E2] bg-white">
                    <button
                      type="button"
                      onClick={() => setField('priceType', 'monthly')}
                      className="px-4 py-2 text-xs font-semibold"
                      style={{ background: formData.priceType === 'monthly' ? PRIMARY : 'transparent' }}
                    >
                      {t('priceTypeMonthly')}
                    </button>
                    <button
                      type="button"
                      onClick={() => setField('priceType', 'annually')}
                      className="px-4 py-2 text-xs font-semibold"
                      style={{ background: formData.priceType === 'annually' ? PRIMARY : 'transparent' }}
                    >
                      {t('priceTypeAnnually')}
                    </button>
                  </div>
                )}

                {/* Buyer signals (sale) */}
                {isSale && (
                  <div className="mt-3">
                    <div className="text-[12px] font-medium text-[#4B4B4B]">{t('buyerSignalsLabel')}</div>
                    <div className="mt-2 flex flex-wrap gap-3 text-[11px] text-[#4B4B4B]">
                      {[
                        t('buyerSignalReadyToProceed'),
                        t('buyerSignalActivelyLooking'),
                        t('buyerSignalInvestorBuyer'),
                        t('buyerSignalSeriousBuyer'),
                      ].map((label) => (
                        <label key={label} className="inline-flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="h-3.5 w-3.5 rounded border-[#D7DFEA] accent-[#7FFFD4]"
                            defaultChecked
                          />
                          {label}
                        </label>
                      ))}
                    </div>
                    {formData.buyerSignalTags.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {formData.buyerSignalTags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 rounded-full bg-[#E8FFF7] border border-[#37B08A] px-2.5 py-0.5 text-[11px] font-medium text-[#1A5C3D]"
                          >
                            {tag}
                            <button
                              type="button"
                              onClick={() => setField('buyerSignalTags', formData.buyerSignalTags.filter((t) => t !== tag))}
                              className="ml-0.5 text-[#37B08A] hover:text-[#1A5C3D]"
                            >
                              ×
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                    <Input
                      className={`${controlClass} mt-2`}
                      placeholder={t('buyerSignalsTypePlaceholder')}
                      value={buyerSignalInput}
                      onChange={(e) => setBuyerSignalInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Tab' && buyerSignalInput.trim()) {
                          e.preventDefault();
                          const tag = buyerSignalInput.trim();
                          if (!formData.buyerSignalTags.includes(tag)) {
                            setField('buyerSignalTags', [...formData.buyerSignalTags, tag]);
                          }
                          setBuyerSignalInput('');
                        }
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Property Type */}
            <section className="space-y-4">
              <div className={`flex items-center gap-2 ${sectionTitleClass}`}>
                <span className="inline-block h-2 w-2 rounded-full" style={{ background: PRIMARY }} />
                {t('propertyTypeSection')} ( {isResidential ? t('propertyTypeResidential') : t('propertyTypeCommercial')} )
              </div>

              <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
                {subTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => onSelectSubType(type.id)}
                    className={formData.selectedSubType === type.id ? subCardOn : subCardOff}
                  >
                    <Image src={type.icon} alt={type.label} width={1000} height={1000} className="mx-auto mb-1 h-6 w-6" />
                    <div className="text-[13px] font-semibold">{type.label}</div>
                  </button>
                ))}
              </div>

              {/* Position type (conditional by subtype) */}
              {positionTypeOptions.length > 0 && (
                <div className="space-y-2">
                  <Label className="text-[13px] font-semibold text-[#2e3239]">{t('positionTypeLabel')}</Label>
                  <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
                    {positionTypeOptions.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setField('positionType', item)}
                        className={
                          formData.positionType === item
                            ? 'rounded-[8px] border border-[#D7DFEA] px-4 py-2 text-[12px] font-semibold text-[#2e3239]'
                            : 'rounded-[8px] border border-[#D7DFEA] bg-white px-4 py-2 text-[12px] font-semibold text-[#2e3239] hover:bg-[#F7FAFC]'
                        }
                        style={{ background: formData.positionType === item ? SOFT : 'white' }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {showRowType && (
                <div className="space-y-2">
                  <Label className="text-[13px] font-semibold text-[#2e3239]">{t('rowTypeLabel')}</Label>
                  <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
                    {rowTypes.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setField('rowType', item.id)}
                        className={
                          formData.rowType === item.id
                            ? 'rounded-[8px] border border-[#D7DFEA] px-4 py-2 text-[12px] font-semibold text-[#2e3239]'
                            : 'rounded-[8px] border border-[#D7DFEA] bg-white px-4 py-2 text-[12px] font-semibold text-[#2e3239] hover:bg-[#F7FAFC]'
                        }
                        style={{ background: formData.rowType === item.id ? SOFT : 'white' }}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid gap-4 md:grid-cols-2 items-end">
                <div className="space-y-2">
                  <Label className="text-[13px] font-semibold text-[#2e3239]">{t('configurationLabel')}</Label>
                  <Input
                    className={controlClass}
                    placeholder={t('configurationPlaceholder')}
                    value={formData.configuration}
                    onChange={(e) => setField('configuration', e.target.value)}
                  />
                </div>
                <div
                  className="rounded-[8px] border border-[rgba(178,255,229,1)] px-3 py-3 text-xs font-medium text-[#2e3239]"
                  style={{ background: SOFT }}
                >
                  {configLine}
                </div>
              </div>

            </section>

            {/* Strong Preferences (match images section title) */}
            <section className="space-y-4">
              <div className={`flex items-center gap-2 ${sectionTitleClass}`}>
                <span className="inline-block h-2 w-2 rounded-full" style={{ background: PRIMARY }} />
                {t('sectionStrongPreferences')}
              </div>

              {/* Sale: 3 status groups (like buyer images) */}
              {isSale && (
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    {
                      title: t('occupancyStatusLabel'),
                      key: 'occupancy',
                      values: [
                        { v: 'all', t: t('statusAll') },
                        { v: 'vacant', t: t('statusVacant') },
                        { v: 'tenanted', t: t('statusTenanted') },
                      ],
                    },
                    {
                      title: t('completionStatusLabel'),
                      key: 'completion',
                      values: [
                        { v: 'all', t: t('statusAll') },
                        { v: 'ready', t: t('statusReady') },
                        { v: 'off-plan', t: t('statusOffPlan') },
                      ],
                    },
                    {
                      title: t('ownershipTenureLabel'),
                      key: 'ownership',
                      values: [
                        { v: 'all', t: t('statusAll') },
                        { v: 'freehold', t: t('statusFreehold') },
                        { v: 'leasehold', t: t('statusLeasehold') },
                      ],
                    },
                  ].map((group) => (
                    <div key={group.title}>
                      <Label className="mb-2 text-xs font-semibold text-[#5b6472]">{group.title}</Label>
                      <div className="grid grid-cols-3 rounded-[8px] border border-[#CAD5E2] bg-[#F1F5F9] p-1">
                        {group.values.map((item) => {
                          //eslint-disable-next-line
                          const active = (formData.propertyStatus as any)[group.key] === item.v;
                          return (
                            <button
                              key={item.v}
                              type="button"
                              onClick={() =>
                                setField('propertyStatus', {
                                  ...formData.propertyStatus,
                                  [group.key]: item.v,
                                } as PropertyStatus)
                              }
                              className="rounded-[8px] px-2 py-2 text-xs font-semibold"
                              style={{ background: active ? 'white' : 'transparent' }}
                            >
                              {item.t}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Beds/Baths (residential) */}
              {isResidential && (
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label className={labelClass}>
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
                    <Label className={labelClass}>
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

            {/* Additional Details */}
            <section className="space-y-4">
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
                  <div className="mt-2 inline-flex gap-2">
                    <button
                      type="button"
                      onClick={() => setField('buaUnit', 'sqft')}
                      className={formData.buaUnit === 'sqft' ? chipOn : chipOff}
                      style={{ background: formData.buaUnit === 'sqft' ? PRIMARY : undefined }}
                    >
                      {t('buaSqFt')}
                    </button>
                    <button
                      type="button"
                      onClick={() => setField('buaUnit', 'sqm')}
                      className={formData.buaUnit === 'sqm' ? chipOn : chipOff}
                      style={{ background: formData.buaUnit === 'sqm' ? PRIMARY : undefined }}
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
                  <Label className={labelClass}>
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
                        className={`${controlClass} flex items-center justify-between gap-2 text-start px-3`}
                      >
                        {formData.parkingType.length === 0 ? (
                          <span className="text-[#A0A7B2] text-[13px]">{t('parkingTypePlaceholder')}</span>
                        ) : (
                          <span className="flex items-center gap-1.5">
                            <span className="text-[#2e3239] text-[13px] font-medium truncate">
                              {PARKING_TYPE_OPTIONS.find(o => o.id === formData.parkingType[0])?.label}
                            </span>
                            {formData.parkingType.length > 1 && (
                              <span className="inline-flex shrink-0 items-center px-1.5 py-0.5 rounded-full bg-[#DCFFF4] text-[#1A5C3D] text-[11px] font-semibold">
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
                            className={`flex items-center gap-3 px-3 py-2.5 cursor-pointer transition-colors ${checked ? 'bg-[#E8FFF7]' : 'hover:bg-[#F9FAFB]'}`}
                          >
                            <span className={`h-4 w-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${checked ? 'bg-[#7FFFD4] border-[#37B08A]' : 'border-[#D1D5DB] bg-white'}`}>
                              {checked && <Check className="h-2.5 w-2.5 text-[#1A5C3D]" />}
                            </span>
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleParkingType(option.id)}
                              className="sr-only"
                            />
                            <span className={`text-[13px] ${checked ? 'text-[#1A5C3D] font-medium' : 'text-[#2e3239]'}`}>{option.label}</span>
                          </label>
                        )
                      })}
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <Label className={labelClass}>{t('mustHaveFeaturesLabel')}</Label>
                  {formData.mustHaveFeatureTags.length > 0 && (
                    <div className="mb-2 flex flex-wrap gap-1.5">
                      {formData.mustHaveFeatureTags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-full bg-[#E8FFF7] border border-[#37B08A] px-2.5 py-0.5 text-[11px] font-medium text-[#1A5C3D]"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => setField('mustHaveFeatureTags', formData.mustHaveFeatureTags.filter((t) => t !== tag))}
                            className="ml-0.5 text-[#37B08A] hover:text-[#1A5C3D]"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                  <Input
                    className={controlClass}
                    placeholder={t('mustHaveFeaturesPlaceholder')}
                    value={mustHaveInput}
                    onChange={(e) => setMustHaveInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Tab' && mustHaveInput.trim()) {
                        e.preventDefault();
                        const tag = mustHaveInput.trim();
                        if (!formData.mustHaveFeatureTags.includes(tag)) {
                          setField('mustHaveFeatureTags', [...formData.mustHaveFeatureTags, tag]);
                        }
                        setMustHaveInput('');
                      }
                    }}
                  />
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

                <div>
                  <Label className={labelClass}>{t('propertyConditionLabel')}</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className={`${controlClass} flex items-center justify-between gap-2 text-start px-3`}
                      >
                        {formData.propertyCondition.length === 0 ? (
                          <span className="text-[#A0A7B2] text-[13px]">{t('propertyConditionPlaceholder')}</span>
                        ) : (
                          <span className="flex items-center gap-1.5">
                            <span className="text-[#2e3239] text-[13px] font-medium truncate">
                              {PROPERTY_CONDITION_OPTIONS.find(o => o.id === formData.propertyCondition[0])?.label}
                            </span>
                            {formData.propertyCondition.length > 1 && (
                              <span className="inline-flex shrink-0 items-center px-1.5 py-0.5 rounded-full bg-[#DCFFF4] text-[#1A5C3D] text-[11px] font-semibold">
                                +{formData.propertyCondition.length - 1}
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
                      {PROPERTY_CONDITION_OPTIONS.map((option) => {
                        const checked = formData.propertyCondition.includes(option.id);
                        return (
                          <label
                            key={option.id}
                            className={`flex items-center gap-3 px-3 py-2.5 cursor-pointer transition-colors ${checked ? 'bg-[#E8FFF7]' : 'hover:bg-[#F9FAFB]'}`}
                          >
                            <span className={`h-4 w-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${checked ? 'bg-[#7FFFD4] border-[#37B08A]' : 'border-[#D1D5DB] bg-white'}`}>
                              {checked && <Check className="h-2.5 w-2.5 text-[#1A5C3D]" />}
                            </span>
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => togglePropertyCondition(option.id)}
                              className="sr-only"
                            />
                            <span className={`text-[13px] ${checked ? 'text-[#1A5C3D] font-medium' : 'text-[#2e3239]'}`}>{option.label}</span>
                          </label>
                        );
                      })}
                    </PopoverContent>
                  </Popover>
                  {formData.propertyCondition.includes('type-property-age') && (
                    <Input
                      className={`${controlClass} mt-2`}
                      placeholder={t('conditionTypePropertyAge')}
                      value={formData.propertyAge}
                      onChange={(e) => setField('propertyAge', e.target.value)}
                    />
                  )}
                </div>
              </div>

              <div>
                <Label className={labelClass}>{t('chooseAmenitiesLabel')}</Label>
                <Input
                  className={controlClass}
                  placeholder={t('amenitiesTextPlaceholder')}
                  value={formData.amenitiesText}
                  onChange={(e) => setField('amenitiesText', e.target.value)}
                />
              </div>
            </section>

            {/* Additional Keywords & Requirements */}
            <section className="space-y-2">
              <Label className={labelClass}>{t('keywordsLabel')}</Label>
              <Input
                className={controlClass}
                placeholder={isSale ? t('keywordsPlaceholderSale') : t('keywordsPlaceholderRent')}
                value={formData.keywords}
                onChange={(e) => setField('keywords', e.target.value)}
              />
            </section>

            {/* Buyer Profile (Sale) */}
            {isSale && (
              <section className="space-y-4">
              <div className={`flex items-center gap-2 ${sectionTitleClass}`}>
                <span className="inline-block h-2 w-2 rounded-full" style={{ background: PRIMARY }} />
                {t('buyerProfileSection')}
              </div>
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

                {isCommercial && (
                  <div>
                    <Label className={labelClass}>
                      {t('keyMoneyLabel')}
                      <InfoTooltip content={t('keyMoneyInfoModal')} />
                    </Label>
                    <div className="grid grid-cols-3 gap-3 rounded-[8px] border border-[#CAD5E2] bg-white px-3 py-2">
                      {[
                        { v: 'any', t: t('keyMoneyAny') },
                        { v: 'no', t: t('keyMoneyNoKeyMoney') },
                        { v: 'yes', t: t('keyMoneyAcceptable') },
                      ].map((x) => (
                        <label key={x.v} className="flex items-center gap-2 text-[12px] font-medium text-[#2e3239]">
                          <input
                            type="radio"
                            name="key-money-sale"
                            checked={formData.keyMoney === x.v}
                            onChange={() => setField('keyMoney', x.v as FormData['keyMoney'])}
                            className="h-4 w-4 accent-[#7FFFD4]"
                          />
                          {x.t}
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label className={labelClass}>{t('targetClosingDateLabel')}</Label>
                    <DatePicker
                      value={formData.targetClosingDate}
                      onChange={(d) => setField('targetClosingDate', d)}
                      placeholder={t('targetClosingDateLabel')}
                      disablePast={true}
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

            {/* Tenant Profile (Rent) */}
            {isRent && (
              <section className="space-y-4">
                <div className={`flex items-center gap-2 ${sectionTitleClass}`}>
                  <span className="inline-block h-2 w-2 rounded-full" style={{ background: PRIMARY }} />
                  {t('optionalProfileSection')}
                </div>

                {isCommercial && (
                  <div>
                    <Label className={labelClass}>
                      {t('keyMoneyLabel')}
                      <InfoTooltip content={t('keyMoneyInfoModal')} />
                    </Label>
                    <div className="grid grid-cols-3 gap-3 rounded-[8px] border border-[#CAD5E2] bg-white px-3 py-2">
                      {[
                        { v: 'any', t: t('keyMoneyAny') },
                        { v: 'no', t: t('keyMoneyNoKeyMoney') },
                        { v: 'yes', t: t('keyMoneyAcceptable') },
                      ].map((x) => (
                        <label key={x.v} className="flex items-center gap-2 text-[12px] font-medium text-[#2e3239]">
                          <input
                            type="radio"
                            name="key-money-rent"
                            checked={formData.keyMoney === x.v}
                            onChange={() => setField('keyMoney', x.v as FormData['keyMoney'])}
                            className="h-4 w-4 accent-[#7FFFD4]"
                          />
                          {x.t}
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <Label className={labelClass}>{t('tenantDescriptionLabel')}</Label>
                    <Input
                      className={controlClass}
                      placeholder={t('tenantDescriptionPlaceholder')}
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
                    {!isCommercial && <p className="mt-1.5 text-xs text-[#A0A7B2]">{t('leaseHelperText')}</p>}
                  </div>

                  <div>
                    <Label className={labelClass}>{t('chequePreferenceLabelMax')}</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className={`${controlClass} flex items-center justify-between gap-2 text-start px-3`}
                        >
                          {formData.chequePreferences.length === 0 ? (
                            <span className="text-[#A0A7B2] text-[13px]">{t('chequePreferenceLabelMax')}</span>
                          ) : (
                            <span className="flex items-center gap-1.5">
                              <span className="text-[#2e3239] text-[13px] font-medium truncate">
                                {CHEQUE_OPTIONS.find(o => o.id === formData.chequePreferences[0])?.label}
                              </span>
                              {formData.chequePreferences.length > 1 && (
                                <span className="inline-flex shrink-0 items-center px-1.5 py-0.5 rounded-full bg-[#DCFFF4] text-[#1A5C3D] text-[11px] font-semibold">
                                  +{formData.chequePreferences.length - 1}
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
                        {CHEQUE_OPTIONS.map((option) => {
                          const checked = formData.chequePreferences.includes(option.id);
                          return (
                            <label
                              key={option.id}
                              className={`flex items-center gap-3 px-3 py-2.5 cursor-pointer transition-colors ${checked ? 'bg-[#E8FFF7]' : 'hover:bg-[#F9FAFB]'}`}
                            >
                              <span className={`h-4 w-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${checked ? 'bg-[#7FFFD4] border-[#37B08A]' : 'border-[#D1D5DB] bg-white'}`}>
                                {checked && <Check className="h-2.5 w-2.5 text-[#1A5C3D]" />}
                              </span>
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => toggleChequePreference(option.id)}
                                className="sr-only"
                              />
                              <span className={`text-[13px] ${checked ? 'text-[#1A5C3D] font-medium' : 'text-[#2e3239]'}`}>{option.label}</span>
                            </label>
                          );
                        })}
                      </PopoverContent>
                    </Popover>
                    {formData.chequePreferences.length > 0 && (
                      <Input
                        className={`${controlClass} mt-2`}
                        placeholder="Additional note (optional)"
                        value={formData.chequeNote}
                        onChange={(e) => setField('chequeNote', e.target.value)}
                      />
                    )}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label className={labelClass}>{t('moveInDateLabel')}</Label>
                    <DatePicker
                      value={formData.moveInDate}
                      onChange={(d) => setField('moveInDate', d)}
                      placeholder={t('moveInDateLabel')}
                      disablePast={true}
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

            {/* Property Match Preference */}
            <section className="space-y-4">
              <div className={`flex items-center gap-2 ${sectionTitleClass}`}>
                <span className="inline-block h-2 w-2 rounded-full" style={{ background: PRIMARY }} />
                {t('matchPreferenceTitle')}
              </div>
              <p className="text-[12px] text-[#5B6472]">{t('matchPreferenceDesc')}</p>
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  { v: 'exact', label: t('matchExactLabel'), desc: t('matchExactDesc') },
                  { v: 'open', label: t('matchOpenLabel'), desc: t('matchOpenDesc') },
                ].map((x) => (
                  <label
                    key={x.v}
                    className={`flex cursor-pointer items-start gap-3 rounded-[8px] border px-4 py-3 transition-colors ${formData.matchPreference === x.v ? 'border-[#37B08A] bg-[#E8FFF7]' : 'border-[#CAD5E2] bg-white hover:bg-[#F9FAFB]'}`}
                  >
                    <input
                      type="radio"
                      name="matchPreference"
                      checked={formData.matchPreference === x.v}
                      onChange={() => setField('matchPreference', x.v as FormData['matchPreference'])}
                      className="mt-0.5 h-4 w-4 accent-[#7FFFD4]"
                    />
                    <div>
                      <p className="text-[13px] font-semibold text-[#2e3239]">{x.label}</p>
                      <p className="mt-0.5 text-[11px] text-[#5B6472]">{x.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
              <p className="text-[11px] italic text-[#A0A7B2]">{t('matchPreferenceNote')}</p>
            </section>

            {/* Agent Response Preference */}
            <section className="space-y-4">
              <div className={`flex items-center gap-2 ${sectionTitleClass}`}>
                <span className="inline-block h-2 w-2 rounded-full" style={{ background: PRIMARY }} />
                {t('agentResponseTitle')}
              </div>
              <p className="text-[12px] text-[#5B6472]">{t('agentResponseDesc')}</p>
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  { v: 'all', label: t('agentResponseAllLabel'), desc: t('agentResponseAllDesc') },
                  { v: 'limited', label: t('agentResponseLimitLabel'), desc: t('agentResponseLimitDesc') },
                ].map((x) => (
                  <label
                    key={x.v}
                    className={`flex cursor-pointer items-start gap-3 rounded-[8px] border px-4 py-3 transition-colors ${formData.agentResponsePreference === x.v ? 'border-[#37B08A] bg-[#E8FFF7]' : 'border-[#CAD5E2] bg-white hover:bg-[#F9FAFB]'}`}
                  >
                    <input
                      type="radio"
                      name="agentResponsePreference"
                      checked={formData.agentResponsePreference === x.v}
                      onChange={() => setField('agentResponsePreference', x.v as FormData['agentResponsePreference'])}
                      className="mt-0.5 h-4 w-4 accent-[#7FFFD4]"
                    />
                    <div>
                      <p className="text-[13px] font-semibold text-[#2e3239]">{x.label}</p>
                      <p className="mt-0.5 text-[11px] text-[#5B6472]">{x.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
              {formData.agentResponsePreference === 'limited' && (
                <div className="space-y-2">
                  <Label className={labelClass}>{t('agentResponseMaxLabel')}</Label>
                  <div className="flex gap-3">
                    {(['3', '5', '10'] as const).map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setField('maxAgents', n)}
                        className="rounded-[8px] border px-4 py-2 text-[12px] font-semibold"
                        style={{
                          background: formData.maxAgents === n ? PRIMARY : 'white',
                          borderColor: formData.maxAgents === n ? '#37B08A' : '#CAD5E2',
                          color: '#2e3239',
                        }}
                      >
                        {n === '3' ? t('agentMax3') : n === '5' ? t('agentMax5') : t('agentMax10')}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <p className="text-[11px] italic text-[#A0A7B2]">{t('agentResponseNote')}</p>
            </section>

            {/* Contact Consent & Preferences */}
            <section className="space-y-4">
              <div className={`flex items-center gap-2 ${sectionTitleClass}`}>
                <span className="inline-block h-2 w-2 rounded-full" style={{ background: PRIMARY }} />
                {t('contactConsentTitle')}
              </div>
              <p className="text-[12px] text-[#5B6472]">{t('contactConsentText')}</p>

              <div className="space-y-3">
                <Label className={labelClass}>{t('preferredContactMethodLabel')}</Label>
                <div className="flex flex-wrap gap-3">
                  {[
                    { id: 'email', label: t('contactMethodEmail') },
                    { id: 'phone', label: t('contactMethodPhone') },
                    { id: 'whatsapp', label: t('contactMethodWhatsapp') },
                    { id: 'inmail', label: t('contactMethodInmail') },
                  ].map((opt) => {
                    const checked = formData.preferredContactMethod.includes(opt.id);
                    return (
                      <label
                        key={opt.id}
                        className={`flex cursor-pointer items-center gap-2 rounded-[8px] border px-3 py-2 text-[12px] font-medium transition-colors ${checked ? 'border-[#37B08A] bg-[#E8FFF7] text-[#1A5C3D]' : 'border-[#CAD5E2] bg-white text-[#2e3239] hover:bg-[#F9FAFB]'}`}
                      >
                        <input type="checkbox" checked={checked} onChange={() => toggleContactMethod(opt.id)} className="sr-only" />
                        {opt.label}
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-3">
                <Label className={labelClass}>{t('bestTimeToContactLabel')}</Label>
                <div className="flex flex-wrap gap-3">
                  {[
                    { id: 'morning', label: t('bestTimeMorning') },
                    { id: 'afternoon', label: t('bestTimeAfternoon') },
                    { id: 'evening', label: t('bestTimeEvening') },
                    { id: 'anytime', label: t('bestTimeAnytime') },
                    { id: 'other', label: t('bestTimeOther') },
                  ].map((opt) => {
                    const checked = formData.bestTimeToContact.includes(opt.id);
                    return (
                      <label
                        key={opt.id}
                        className={`flex cursor-pointer items-center gap-2 rounded-[8px] border px-3 py-2 text-[12px] font-medium transition-colors ${checked ? 'border-[#37B08A] bg-[#E8FFF7] text-[#1A5C3D]' : 'border-[#CAD5E2] bg-white text-[#2e3239] hover:bg-[#F9FAFB]'}`}
                      >
                        <input type="checkbox" checked={checked} onChange={() => toggleBestTime(opt.id)} className="sr-only" />
                        {opt.label}
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Privacy Option */}
              <div className="rounded-[8px] border border-[#CAD5E2] bg-white px-4 py-3">
                <p className="mb-2 text-[12px] font-semibold text-[#2e3239]">{t('privacyOptionTitle')}</p>
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={formData.remainAnonymous}
                    onChange={() => setField('remainAnonymous', !formData.remainAnonymous)}
                    className="mt-0.5 h-4 w-4 accent-[#7FFFD4]"
                  />
                  <div>
                    <p className="text-[12px] font-semibold text-[#2e3239]">{t('remainAnonymousLabel')}</p>
                    <p className="mt-0.5 text-[11px] text-[#5B6472]">{t('remainAnonymousDesc')}</p>
                  </div>
                </label>
              </div>

              <p className="text-[11px] italic text-[#A0A7B2]">{t('contactConsentNote')}</p>
            </section>

            {/* Platform Disclaimer */}
            <section className="rounded-[8px] border border-[#D7DFEA] bg-[#F8FAFC] px-4 py-4">
              <p className="mb-2 text-[12px] font-semibold text-[#2e3239]">{t('platformDisclaimerTitle')}</p>
              <p className="text-[11px] leading-relaxed text-[#5B6472]">{t('platformDisclaimerText')}</p>
            </section>

            {/* Consent checkbox */}
            <section>
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={formData.consentSharing}
                  onChange={() => setField('consentSharing', !formData.consentSharing)}
                  className="mt-0.5 h-4 w-4 accent-[#7FFFD4]"
                />
                <p className="text-[12px] text-[#5B6472]">{t('consentLabel')}</p>
              </label>
            </section>

            {/* Contact Details */}
            <section className="space-y-3">
              <div className={`flex items-center gap-2 ${sectionTitleClass}`}>
                <span className="inline-block h-2 w-2 rounded-full" style={{ background: PRIMARY }} />
                {t('sectionContactDetails')}
              </div>

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
                className="min-h-28 rounded-[8px] border border-[#CAD5E2] bg-white shadow-sm placeholder:text-[#A0A7B2] focus-visible:ring-2 focus-visible:ring-[rgba(178,255,229,0.85)]"
              />
            </section>

            {/* Commission Notice (same look as images) */}
            <section className="rounded-[8px] border border-[#f1d291] bg-[#fff7df] p-4">
              <div className="flex items-start gap-2 text-[#A65F00]">
                <Info className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <p className="text-[12px]">
                  <span className="font-semibold">{t('commissionNoticeLabel')}</span> {commissionNote}
                </p>
              </div>
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
                  className="h-10 rounded-[8px] border border-[#CAD5E2] bg-[#D7D7D7] text-[13px] font-semibold text-[#2e3239]"
                >
                  {t('cancelButton')}
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex h-10 items-center justify-center gap-3 rounded-[8px] text-[13px] font-semibold text-[#1f2a37] shadow-sm disabled:opacity-60"
                  style={{ background: PRIMARY }}
                >
                  <Send className="h-4 w-4" />
                  {loading ? t('submittingButton') : t('submitButton')}
                </button>
              </div>
            )}

          </form>
        </div>
      </div>
    </div>
  );
}
