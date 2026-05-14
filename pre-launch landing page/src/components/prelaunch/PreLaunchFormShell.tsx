'use client'

import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { ReactNode, useState } from 'react'
import Navigation  from '@/components/web/Navigation'

export interface PreLaunchFormShellProps {
  title: string
  subtitle: string
  /** Background color for the card top banner. When set with bannerLightText, renders a colored card top. */
  bannerColor?: string
  /** Accent color for active segment tabs */
  accentColor?: string
  /** Use dark text in banner (light-colored banners like green) */
  bannerTextDark?: boolean
  /** Use light/white text in banner (dark-colored banners like coral) */
  bannerLightText?: boolean
  primarySegment?: { label: string; value: string }[]
  secondarySegment?: { label: string; value: string }[]
  secondaryDefault?: string
  children: ReactNode
}

export function PreLaunchFormShell({
  title,
  subtitle,
  bannerColor,
  accentColor = '#50C8A8',
  bannerLightText = false,
  primarySegment,
  secondarySegment,
  secondaryDefault,
  children,
}: PreLaunchFormShellProps) {
  const [primaryActive, setPrimaryActive] = useState(primarySegment?.[0]?.value ?? '')
  const [secondaryActive, setSecondaryActive] = useState(
    secondaryDefault ?? secondarySegment?.[0]?.value ?? ''
  )

  // Colored-banner mode: card has colored top section (e.g. listing-intent coral)
  const isColoredBanner = bannerLightText && !!bannerColor

  return (
    <div className="min-h-screen bg-[#FBFFFE] dark:bg-[#0F1419]">
      <Navigation />

      <div className="py-10">
        <div className="pt-4 pb-14">

          {/* Segment toggles — centered, above the form card */}
          {(primarySegment || secondarySegment) && (
            <div className="container mx-auto flex flex-col items-center gap-3 px-4 mb-6">
              {primarySegment && (
                <div className="grid w-full max-w-[380px] grid-cols-2 gap-1 rounded-[8px] border border-[#CAD5E2] bg-white p-1 shadow-md dark:bg-white/5 dark:border-white/20">
                  {primarySegment.map((seg) => (
                    <button
                      key={seg.value}
                      type="button"
                      onClick={() => setPrimaryActive(seg.value)}
                      className={`h-10 rounded-[8px] text-[14px] font-medium transition ${
                        primaryActive === seg.value
                          ? 'text-white'
                          : 'text-[#30343a] dark:text-gray-200'
                      }`}
                      style={
                        primaryActive === seg.value
                          ? { backgroundColor: accentColor }
                          : undefined
                      }
                    >
                      {seg.label}
                    </button>
                  ))}
                </div>
              )}

              {secondarySegment && (
                <div className="grid w-full max-w-[260px] grid-cols-2 gap-1 rounded-[8px] border border-[#CAD5E2] bg-white p-1 shadow-sm dark:bg-white/5 dark:border-white/20">
                  {secondarySegment.map((seg) => (
                    <button
                      key={seg.value}
                      type="button"
                      onClick={() => setSecondaryActive(seg.value)}
                      className={`h-9 rounded-[8px] text-[14px] font-medium transition ${
                        secondaryActive === seg.value
                          ? 'text-white'
                          : 'text-[#30343a] dark:text-gray-200'
                      }`}
                      style={
                        secondaryActive === seg.value
                          ? { backgroundColor: accentColor }
                          : undefined
                      }
                    >
                      {seg.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Form card */}
          <div className="container mx-auto px-4">
            {isColoredBanner ? (
              /* Colored-top card (listing-intent style) */
              <div className="overflow-hidden rounded-[8px]">
                {/* Colored banner top */}
                <div
                  className="rounded-tl-[8px] rounded-tr-[8px] px-5 py-6 text-white"
                  style={{ backgroundColor: bannerColor }}
                >
                  <Link
                    href="/"
                    className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-white/90 underline-offset-2 hover:underline"
                  >
                    <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
                    Go Back
                  </Link>
                  <h1 className="text-4xl font-semibold leading-tight">{title}</h1>
                  <p className="mt-1 text-sm text-white/90">{subtitle}</p>
                </div>
                {/* White form body */}
                <div className="space-y-7 bg-white px-5 py-6 text-[#3d4350] dark:bg-[#0F1419] dark:text-gray-100">
                  {children}
                </div>
              </div>
            ) : (
              /* White card with border (requirement style) */
              <div className="overflow-hidden rounded-[12px] border border-[#E6EBF2] bg-white shadow-sm dark:bg-white/5 dark:border-white/10">
                {/* Header (no colored bg) */}
                <div className="px-5 py-6 border-b border-[#E6EBF2] dark:border-white/10">
                  <Link
                    href="/"
                    className="mb-4 inline-flex items-center gap-2 text-[12px] font-medium text-[#2e3239] hover:underline dark:text-gray-300"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#2e3239] dark:border-gray-400">
                      <ChevronLeft className="h-3 w-3 rtl:rotate-180" />
                    </span>
                    Go Back
                  </Link>
                  <h1 className="text-[22px] font-semibold text-[#2e3239] dark:text-white">
                    {title}
                  </h1>
                  <p className="mt-1 text-[12px] text-[#2e3239]/80 dark:text-gray-400">
                    {subtitle}
                  </p>
                </div>
                {/* Form body */}
                <div className="space-y-7 px-5 py-6 text-[#2e3239] dark:text-gray-100">
                  {children}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
