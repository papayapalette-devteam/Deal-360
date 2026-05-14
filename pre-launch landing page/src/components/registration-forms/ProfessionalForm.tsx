'use client'

import { Button } from '@/components/Ui/button'
import { Input } from '@/components/Ui/input'
import { Label } from '@/components/Ui/label'
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

type FieldErrors = Partial<
  Record<'fullName' | 'role' | 'interestedPlan' | 'companyName' | 'breraOrnId' | 'email' | 'phone' | 'referredByEmail', string>
>

const AGENT_PLANS = [
  { value: 'agent_lite', label: 'Agent Lite — Free' },
  { value: 'agent_basic', label: 'Agent Basic — AED 299/mo' },
  { value: 'agent_plus', label: 'Agent Plus — AED 599/mo' },
  { value: 'agent_elite', label: 'Agent Elite — AED 999/mo' },
]

const BROKERAGE_PLANS = [
  { value: 'brokerage_lite', label: 'Brokerage Lite — Free' },
  { value: 'brokerage_core', label: 'Brokerage Core — AED 999/mo' },
  { value: 'brokerage_pro', label: 'Brokerage Pro — AED 2,499/mo' },
  { value: 'enterprise', label: 'Enterprise — AED 4,999/mo' },
]

interface ProfessionalFormProps {
  initialRole?: string
  initialPlan?: string
}

export default function ProfessionalForm({ initialRole = '', initialPlan = '' }: ProfessionalFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    role: initialRole,
    interestedPlan: initialPlan,
    companyName: '',
    breraOrnId: '',
    email: '',
    phone: '',
    referredByEmail: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [networkError, setNetworkError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  const clearFieldError = (name: keyof FieldErrors) =>
    setFieldErrors((prev) => ({ ...prev, [name]: undefined }))

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    clearFieldError(name as keyof FieldErrors)
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, role: value, interestedPlan: '' }))
    clearFieldError('role')
    clearFieldError('interestedPlan')
  }

  const handlePlanChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interestedPlan: value }))
    clearFieldError('interestedPlan')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const errors: FieldErrors = {}
    if (!formData.fullName.trim()) errors.fullName = 'Name is required'
    if (!formData.email.trim()) errors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errors.email = 'Enter a valid email address'
    if (!formData.role) errors.role = 'Please select your role'
    if (formData.phone.trim() && !isValidPhone(formData.phone))
      errors.phone = 'Enter a valid phone number'

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }

    setLoading(true)
    setNetworkError(null)
    setFieldErrors({})
    try {
      await postPreLaunch('register/professional', {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
        interested_plan: formData.interestedPlan,
        company_name: formData.companyName,
        brera_orn_id: formData.breraOrnId,
        referred_by_email: formData.referredByEmail,
      })
      setSuccess(true)
    } catch (err) {
      if (err instanceof ApiValidationError) {
        const fe = err.fieldErrors
        const mapped: FieldErrors = {}
        if (fe.full_name) mapped.fullName = fe.full_name[0]
        if (fe.email) mapped.email = fe.email[0]
        if (fe.role) mapped.role = fe.role[0]
        if (fe.company_name) mapped.companyName = fe.company_name[0]
        if (fe.brera_orn_id) mapped.breraOrnId = fe.brera_orn_id[0]
        if (fe.phone) mapped.phone = fe.phone[0]
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
        <h3 className="text-[24px] font-medium text-[#F88379] mb-3">
          Professional Registration Form
        </h3>
        <p className="text-sm sm:text-base text-[#686868] mb-2">
          We&apos;re onboarding a limited number of professionals ahead of launch.
        </p>
        <p className="text-sm sm:text-base text-[#686868] mb-4">
          Registration is reviewed to protect quality on the platform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          <div className="rounded-[8px] bg-[#F7F7F7] p-3 text-sm sm:text-base lg:text-base ">
            ✓ Priority visibility
          </div>
          <div className="rounded-[8px] bg-[#F7F7F7] p-3 text-sm sm:text-base lg:text-base ">
            ✓ Early feature access
          </div>
          <div className="rounded-[8px] bg-[#F7F7F7] p-3 text-sm sm:text-base lg:text-base ">
            ✓ Founding-only benefits
          </div>
        </div>
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
          <Label htmlFor="role" className="text-base text-[#343A40] font-medium">
            Select Role <span className="text-red-500">*</span>
          </Label>
          <Select value={formData.role} onValueChange={handleSelectChange}>
            <SelectTrigger
              className={`text-xs mt-2 border h-[48px] rounded-[4px] ${
                fieldErrors.role ? 'border-red-400' : 'border-[#C0C3C1]'
              }`}
            >
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className='bg-white rounded-[4px]'>
              <SelectItem value="broker">Broker</SelectItem>
              <SelectItem value="agent">Agent</SelectItem>
            </SelectContent>
          </Select>
          {fieldErrors.role && (
            <p className="text-xs text-red-500 mt-1">{fieldErrors.role}</p>
          )}
        </div>
      </div>

      {formData.role && (
        <div>
          <Label htmlFor="interestedPlan" className="text-base text-[#343A40] font-medium">
            Subscription Plan <span className="text-[#6C757D] font-normal text-sm">(optional)</span>
          </Label>
          <Select value={formData.interestedPlan} onValueChange={handlePlanChange}>
            <SelectTrigger
              className={`text-xs mt-2 border h-[48px] rounded-[4px] ${
                fieldErrors.interestedPlan ? 'border-red-400' : 'border-[#C0C3C1]'
              }`}
            >
              <SelectValue placeholder="Which plan are you interested in?" />
            </SelectTrigger>
            <SelectContent className="bg-white rounded-[4px]">
              {(formData.role === 'agent' ? AGENT_PLANS : BROKERAGE_PLANS).map((plan) => (
                <SelectItem key={plan.value} value={plan.value}>
                  {plan.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {fieldErrors.interestedPlan && (
            <p className="text-xs text-red-500 mt-1">{fieldErrors.interestedPlan}</p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="companyName" className="text-base text-[#343A40] font-medium">
            Company / Brokerage
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
          <Label htmlFor="breraOrnId" className="text-base text-[#343A40] font-medium">
            BRERA ORN / BRN-ID
          </Label>
          <Input
            id="breraOrnId"
            name="breraOrnId"
            placeholder="Your RERA / BRN number"
            value={formData.breraOrnId}
            onChange={handleInputChange}
            type="text"
            className={inputClass('breraOrnId')}
          />
          {fieldErrors.breraOrnId && (
            <p className="text-xs text-red-500 mt-1">{fieldErrors.breraOrnId}</p>
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

      <p className="text-sm sm:text-base text-[#6C757D] bg-[#F7F7F7] rounded-[8px] p-4">
        Registration is reviewed to protect quality on the platform. No payment
        is taken upfront. Billing begins only once the platform is live and
        your account is activated on a paid plan.
      </p>

      {networkError && (
        <p className="text-sm text-red-500 bg-red-50 rounded-[8px] p-3">{networkError}</p>
      )}
      {success ? (
        <p className="text-sm font-medium text-green-600 bg-green-50 rounded-[8px] p-4 text-center">
          You&apos;re on the list! We&apos;ll review your registration and be in touch.
        </p>
      ) : (
        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-[#7FFFD4] h-[48px] rounded-[4px] hover:bg-[#7FFFD4]/90 text- font-medium disabled:opacity-60"
        >
          {loading ? 'Submitting...' : 'Register as a Professional'}
        </Button>
      )}
    </form>
  )
}
