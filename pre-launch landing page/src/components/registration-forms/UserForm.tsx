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

type FieldErrors = Partial<Record<'fullName' | 'iAm' | 'email' | 'phone' | 'referredByEmail', string>>

const isValidPhone = (p: string) => /^\+?[\d\s\-().]{7,20}$/.test(p.trim())

export default function UserForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    iAm: '',
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
    setFormData((prev) => ({ ...prev, iAm: value }))
    clearFieldError('iAm')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const errors: FieldErrors = {}
    if (!formData.fullName.trim()) errors.fullName = 'Name is required'
    if (!formData.email.trim()) errors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errors.email = 'Enter a valid email address'
    if (!formData.iAm) errors.iAm = 'Please select your role'
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
      await postPreLaunch('register/user', {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        user_type: formData.iAm,
        referred_by_email: formData.referredByEmail,
      })
      setSuccess(true)
    } catch (err) {
      if (err instanceof ApiValidationError) {
        const fe = err.fieldErrors
        const mapped: FieldErrors = {}
        if (fe.full_name) mapped.fullName = fe.full_name[0]
        if (fe.email) mapped.email = fe.email[0]
        if (fe.user_type) mapped.iAm = fe.user_type[0]
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
          User Registration
        </h3>
        <p className="text-sm sm:text-base lg:text-xl text-[#686868] mb-4">
          For buyers, tenants, and investors who want early visibility.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <div className="rounded-[8px] bg-[#F7F7F7] p-4">
            <p className="text-sm sm:text-base lg:text-base font-medium text-[#343A40]">Find a Property</p>
            <p className="mt-1 text-sm sm:text-base text-[#6C757D]">Buy or rent with clarity</p>
          </div>
          <div className="rounded-[8px] bg-[#F7F7F7] p-4">
            <p className="text-sm sm:text-base lg:text-base font-medium text-[#343A40]">Submit Requirement</p>
            <p className="mt-1 text-sm sm:text-base text-[#6C757D]">Priority matching with agents</p>
          </div>
          <div className="rounded-[8px] bg-[#F7F7F7] p-4">
            <p className="text-sm sm:text-base lg:text-base font-medium text-[#343A40]">List a Property</p>
            <p className="mt-1 text-sm sm:text-base text-[#6C757D]">Submit listing intent</p>
          </div>
          <div className="rounded-[8px] bg-[#F7F7F7] p-4">
            <p className="text-sm sm:text-base lg:text-base font-medium text-[#343A40]">For Investors</p>
            <p className="mt-1 text-sm sm:text-base text-[#6C757D]">Manage your property portfolio</p>
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
          <Label htmlFor="iAm" className="text-base text-[#343A40] font-medium">
            I am a <span className="text-red-500">*</span>
          </Label>
          <Select value={formData.iAm} onValueChange={handleSelectChange}>
            <SelectTrigger
              className={`text-xs mt-2 border h-[48px] rounded-[4px] ${
                fieldErrors.iAm ? 'border-red-400' : 'border-[#C0C3C1]'
              }`}
            >
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className='bg-white rounded-[4px]'>
              <SelectItem value="buyer">Buyer</SelectItem>
              <SelectItem value="tenant">Tenant</SelectItem>
              <SelectItem value="owner">Owner</SelectItem>
              <SelectItem value="investor">Investor</SelectItem>
            </SelectContent>
          </Select>
          {fieldErrors.iAm && (
            <p className="text-xs text-red-500 mt-1">{fieldErrors.iAm}</p>
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

      <p className="text-sm sm:text-base lg:text-base text-[#6C757D] bg-[#F7F7F7] rounded-[8px] p-4">
        User access is free for buyers, tenants, owners, and investors — with
        early registration and priority engagement at launch.
      </p>

      {networkError && (
        <p className="text-sm text-red-500 bg-red-50 rounded-[8px] p-3">{networkError}</p>
      )}
      {success ? (
        <p className="text-sm font-medium text-green-600 bg-green-50 rounded-[8px] p-4 text-center">
          You&apos;re on the list! We&apos;ll be in touch before launch.
        </p>
      ) : (
        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-[#7FFFD4] h-[48px] rounded-[4px] hover:bg-[#7FFFD4]/90 text- font-medium disabled:opacity-60"
        >
          {loading ? 'Submitting...' : 'Sign Up as a User'}
        </Button>
      )}
    </form>
  )
}
