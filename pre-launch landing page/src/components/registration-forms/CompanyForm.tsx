'use client'

import Image from 'next/image'
import { Button } from "@/components/Ui/button"
import { Input } from '@/components/Ui/input'
import { Label } from '@/components/Ui/label'
import { Textarea } from '@/components/Ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/Ui/select'
import { ApiValidationError, postPreLaunch } from '@/lib/api'
import { useState } from 'react'

const isValidPhone = (p: string) => /^\+?[\d\s\-().]{7,20}$/.test(p.trim())
const isValidUrl = (u: string) => { try { new URL(u.startsWith('http') ? u : `https://${u}`); return true } catch { return false } }

type FieldErrors = Partial<
  Record<
    'fullName' | 'serviceCategory' | 'companyName' | 'websiteUrl' | 'email' | 'phone' | 'briefDescription' | 'referredByEmail',
    string
  >
>

export default function CompanyForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    serviceCategory: '',
    companyName: '',
    websiteUrl: '',
    email: '',
    phone: '',
    briefDescription: '',
    referredByEmail: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [networkError, setNetworkError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  const clearFieldError = (name: keyof FieldErrors) =>
    setFieldErrors((prev) => ({ ...prev, [name]: undefined }))

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    clearFieldError(name as keyof FieldErrors)
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, serviceCategory: value }))
    clearFieldError('serviceCategory')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const errors: FieldErrors = {}
    if (!formData.fullName.trim()) errors.fullName = 'Name is required'
    if (!formData.email.trim()) errors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errors.email = 'Enter a valid email address'
    if (!formData.serviceCategory) errors.serviceCategory = 'Please select a service category'
    if (!formData.companyName.trim()) errors.companyName = 'Company name is required'
    if (formData.phone.trim() && !isValidPhone(formData.phone))
      errors.phone = 'Enter a valid phone number'
    if (formData.websiteUrl.trim() && !isValidUrl(formData.websiteUrl))
      errors.websiteUrl = 'Enter a valid website URL'

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }

    setLoading(true)
    setNetworkError(null)
    setFieldErrors({})
    try {
      await postPreLaunch('register/partner', {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        service_category: formData.serviceCategory,
        company_name: formData.companyName,
        website_url: formData.websiteUrl,
        brief_description: formData.briefDescription,
        referred_by_email: formData.referredByEmail,
      })
      setSuccess(true)
    } catch (err) {
      if (err instanceof ApiValidationError) {
        const fe = err.fieldErrors
        const mapped: FieldErrors = {}
        if (fe.full_name) mapped.fullName = fe.full_name[0]
        if (fe.email) mapped.email = fe.email[0]
        if (fe.service_category) mapped.serviceCategory = fe.service_category[0]
        if (fe.company_name) mapped.companyName = fe.company_name[0]
        if (fe.website_url) mapped.websiteUrl = fe.website_url[0]
        if (fe.phone) mapped.phone = fe.phone[0]
        if (fe.brief_description) mapped.briefDescription = fe.brief_description[0]
        if (Object.keys(mapped).length) {
          setFieldErrors(mapped)
        } else {
          setNetworkError(fe.non_field_errors?.[0] ?? 'An unexpected error occurred.')
        }
      } else {
        setNetworkError('Unable to connect. Please check your connection and try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (field: keyof FieldErrors) =>
    `text-xs mt-2 border h-[48px] rounded-[4px] placeholder:text-[#6C757D] ${
      fieldErrors[field] ? 'border-red-400 focus-visible:ring-red-400' : 'border-[#C0C3C1]'
    }`

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <div className="flex gap-4 mb-4 items-stretch">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-semibold text-[#F88379] mb-4">
              Partner Registration - by Invitation
            </h3>
            <p className="text-sm sm:text-base text-[#6C757D] font-normal mb-4">
              We are onboarding a limited number of professionals ahead of launch.
              Selected partners may showcase that company profile and services
              within the Deal 360 company through sponsored brand partnership
              opportunities.
            </p>
            <div className="space-y-2 text-[#6C757D] bg-[#F8F9FA] p-4 rounded-lg">
              <p className='text-sm sm:text-base font-medium text-[#343A40]'>This includes services such as:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Real Estate Developers</li>
                <li>Short-term & holiday rentals</li>
                <li>Furniture & interior solutions</li>
                <li>Mortgage & financing providers</li>
                <li>Conveyancing & legal services</li>
                <li>Property management & maintenance</li>
                <li>Other</li>
              </ul>
            </div>
          </div>
          <div className="shrink-0 w-[160px] sm:w-[200px] rounded-lg overflow-hidden" style={{ aspectRatio: '800/1575' }}>
            <div style={{ height: '200%', animation: 'nshamaSlide 20s ease-in-out infinite' }}>
              <div style={{ height: '50%' }}>
                <Image
                  src="/nshama-marketing.png"
                  alt="Nshama - Town Square"
                  width={800}
                  height={1430}
                  className="w-full h-full object-contain"
                />
              </div>
              <div style={{ height: '50%' }}>
                <Image
                  src="/nshama-marketing-2.png"
                  alt="Nshama - Payment Plan"
                  width={800}
                  height={1575}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <style>{`
              @keyframes nshamaSlide {
                0%, 42%  { transform: translateY(0); }
                50%, 92% { transform: translateY(-50%); }
                100%     { transform: translateY(0); }
              }
            `}</style>
          </div>
        </div>
        <p className="text-sm sm:text-base text-[#6C757D]">
          Partners registering early will be considered for priority visibility, early integrations, and first rollout consideration as the platform expands.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fullName" className="text-base text-[#343A40] font-medium">
            Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="Your Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            className={inputClass('fullName')}
          />
          {fieldErrors.fullName && (
            <p className="text-xs text-red-500 mt-1">{fieldErrors.fullName}</p>
          )}
        </div>
        <div>
          <Label htmlFor="serviceCategory" className="text-base text-[#343A40] font-medium">
            Service Category <span className="text-red-500">*</span>
          </Label>
          <Select value={formData.serviceCategory} onValueChange={handleSelectChange}>
            <SelectTrigger
              className={`text-xs mt-2 border h-[48px] rounded-[4px] ${
                fieldErrors.serviceCategory ? 'border-red-400' : 'border-[#C0C3C1]'
              }`}
            >
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent className="bg-white rounded-[4px]">
              <SelectItem value="retails">Short-term & Holiday Retails</SelectItem>
              <SelectItem value="furniture">Furniture & Interior Solutions</SelectItem>
              <SelectItem value="mortgage">Mortgage & Financing Providers</SelectItem>
              <SelectItem value="legal">Conveyancing & Legal Services</SelectItem>
              <SelectItem value="management">Property Management & Maintenance</SelectItem>
            </SelectContent>
          </Select>
          {fieldErrors.serviceCategory && (
            <p className="text-xs text-red-500 mt-1">{fieldErrors.serviceCategory}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="companyName" className="text-base text-[#343A40] font-medium">
            Company / Brokerage <span className="text-red-500">*</span>
          </Label>
          <Input
            id="companyName"
            name="companyName"
            placeholder="Company or brokerage name"
            value={formData.companyName}
            onChange={handleInputChange}
            className={inputClass('companyName')}
          />
          {fieldErrors.companyName && (
            <p className="text-xs text-red-500 mt-1">{fieldErrors.companyName}</p>
          )}
        </div>
        <div>
          <Label htmlFor="websiteUrl" className="text-base text-[#343A40] font-medium">
            Company Website
          </Label>
          <Input
            id="websiteUrl"
            name="websiteUrl"
            placeholder="Website link or name"
            value={formData.websiteUrl}
            onChange={handleInputChange}
            className={inputClass('websiteUrl')}
          />
          {fieldErrors.websiteUrl && (
            <p className="text-xs text-red-500 mt-1">{fieldErrors.websiteUrl}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email" className="text-base text-[#343A40] font-medium">
            Email Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="hello@example.com"
            value={formData.email}
            onChange={handleInputChange}
            className={inputClass('email')}
          />
          {fieldErrors.email && (
            <p className="text-xs text-red-500 mt-1">{fieldErrors.email}</p>
          )}
        </div>
        <div>
          <Label htmlFor="phone" className="text-base text-[#343A40] font-medium">
            Phone
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+971 50 XXX XXXX"
            value={formData.phone}
            onChange={handleInputChange}
            className={inputClass('phone')}
          />
          {fieldErrors.phone && (
            <p className="text-xs text-red-500 mt-1">{fieldErrors.phone}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="briefDescription" className="text-base text-[#343A40] font-medium">
          Brief description of your service
        </Label>
        <Textarea
          id="briefDescription"
          name="briefDescription"
          placeholder="Tell us about your service....."
          value={formData.briefDescription}
          onChange={handleInputChange}
          className={`text-xs mt-2 min-h-[114px] border rounded-[4px] placeholder:text-[#6C757D] ${
            fieldErrors.briefDescription ? 'border-red-400' : 'border-[#C0C3C1]'
          }`}
        />
        {fieldErrors.briefDescription && (
          <p className="text-xs text-red-500 mt-1">{fieldErrors.briefDescription}</p>
        )}
      </div>

      <div>
        <Label htmlFor="referredByEmail" className="text-base text-[#343A40] font-medium">
          Referred by <span className="text-[#6C757D] font-normal text-sm">(optional)</span>
        </Label>
        <Input
          id="referredByEmail"
          name="referredByEmail"
          type="email"
          placeholder="Email of the person who referred you"
          value={formData.referredByEmail}
          onChange={handleInputChange}
          className={inputClass('referredByEmail')}
        />
      </div>

      {networkError && (
        <p className="text-sm text-red-500 bg-red-50 rounded-[8px] p-3">{networkError}</p>
      )}
      {success ? (
        <p className="text-sm font-medium text-green-600 bg-green-50 rounded-[8px] p-4 text-center">
          Thank you! We&apos;ll review your partner request and be in touch.
        </p>
      ) : (
        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-[#7FFFD4] h-[48px] rounded-[4px] hover:bg-[#7FFFD4]/90 text- font-medium disabled:opacity-60"
        >
          {loading ? 'Submitting...' : 'Partner With Us Request'}
        </Button>
      )}
    </form>
  )
}
