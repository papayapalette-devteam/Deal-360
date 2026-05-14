'use client'

import Image from 'next/image'
import { Button } from '../Ui/button'
import { Check } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function IncentivesSection() {
  const t = useTranslations('incentives')

  const earlyHowItWorks = [
    t('earlyHowItWorks0'),
    t('earlyHowItWorks1'),
    t('earlyHowItWorks2'),
    t('earlyHowItWorks3'),
  ]

  const earlyRewards = [
    t('earlyRewards0'),
    t('earlyRewards1'),
    t('earlyRewards2'),
    t('earlyRewards3'),
  ]

  const referralRequirements = [
    t('referralReqs0'),
    t('referralReqs1'),
    t('referralReqs2'),
    t('referralReqs3'),
  ]

  const referralRewards = [
    t('referralRewards0'),
    t('referralRewards1'),
  ]

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-[1180px]">
        <div className="text-center mb-10 sm:mb-12">
          <div
            className="inline-block rounded-[999px] p-[3px] mb-5"
            style={{
              background: 'linear-gradient(180deg, #79FFD2 0%, #017850 100%)',
            }}
          >
            <Button
              className="h-[40px] rounded-[999px] px-5 text-sm text-[#F88379]"
              style={{
                background:
                  'linear-gradient(90deg, #E8FFF7 0%, #FFF3F2 50%, #D5FFF1 100%)',
              }}
            >
              <span className="h-2 w-2 rounded-full bg-[#00C274]" />
              {t('badge')}
            </Button>
          </div>

          <h2 className="text-[34px] sm:text-[44px] lg:text-6xl font-medium leading-tight text-[#4B4B4B] dark:text-white">
            {t('heading')} <span className="text-[#F88379]">{t('headingHighlight')}</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#686868] dark:text-white/70 max-w-[760px] mx-auto">
            {t('desc1')}
          </p>
          <p className="mt-2 text-sm sm:text-base text-[#8A8A8A] dark:text-white/50 max-w-[860px] mx-auto">
            {t('desc2')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Early Inventory Incentive card */}
          <div className="rounded-[12px] border border-[#DBDBDB] dark:border-white/10 dark:bg-[#142720] p-5 sm:p-6 flex flex-col">
            <span className="h-[80px] pt-5 mb-10 w-[80px]">
              <Image src="/icon15.png" alt="referral" width={1000} height={1000} className="h-[80px] w-[80px]" />
            </span>
            <div className="mb-4 flex items-center gap-3">
              <h3 className="text-2xl sm:text-[32px] font-medium text-[#4B4B4B] dark:text-white">
                {t('earlyInventoryTitle')}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#686868] dark:text-white/70">
              {t('earlyInventoryDesc')}
            </p>

            <p className="mt-4 text-base sm:text-lg font-medium text-[#4B4B4B] dark:text-white">
              {t('howItWorks')}
            </p>
            <ul className="mt-2 space-y-4">
              {earlyHowItWorks.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm sm:text-base text-[#4B4B4B] dark:text-white/80">
                  <Check className="h-4 w-4 mt-1 text-[#F88379] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <div>
                <Image src="/icon11.png" alt="referral" width={1000} height={1000} className="mt-4 h-6 w-6" />
              </div>
              <p className="mt-4 text-base sm:text-lg font-medium text-[#4B4B4B] dark:text-white">
                {t('rewards')}
              </p>
            </div>
            <ul className="mt-2 space-y-4">
              {earlyRewards.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm sm:text-base text-[#4B4B4B] dark:text-white/80">
                  <Check className="h-4 w-4 mt-1 text-[#45D3A7] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-3 text-xs sm:text-sm text-[#4B4B4B] dark:text-white/55 pb-[40px]">
              {t('earlyFootnote')}
            </p>

            <div className="mt-auto">
              <div
                className="mt-6 rounded-full p-[4px]"
                style={{
                  background: 'linear-gradient(180deg, #79FFD2 0%, #017850 100%)',
                }}
              >
                <div
                  className="rounded-full py-2 px-5 text-base sm:text-lg text-[#4B4B4B] flex items-center justify-center gap-3 cursor-pointer"
                  style={{
                    background: 'linear-gradient(90deg, #FFEFEE 0%, #FFFFFF 50%, #EBFFF8 100%)',
                  }}
                >
                  <Image src="/icon2x.png" alt="referral" width={1000} height={1000} className="h-10 w-10" />
                  {t('earlyInventoryCTA')}
                </div>
              </div>
            </div>
          </div>

          {/* Referral Program card */}
          <div className="rounded-[12px] border border-[#DBDBDB] dark:border-white/10 dark:bg-[#2A1F1E] p-5 sm:p-6 flex flex-col">
            <span className="h-[80px] pt-5 mb-10 w-[80px]">
              <Image src="/icon16.png" alt="referral" width={1000} height={1000} className="h-[80px] w-[80px]" />
            </span>
            <div className="mb-4 flex items-center gap-3">
              <h3 className="text-2xl sm:text-[32px] font-medium text-[#4B4B4B] dark:text-white">
                {t('referralTitle')}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#686868] dark:text-white/70">
              {t('referralDesc')}
            </p>

            <p className="mt-4 text-base sm:text-lg font-medium text-[#4B4B4B] dark:text-white">
              {t('howItWorksReferral')}
            </p>
            <p className="mt-3 text-base sm:text-lg font-medium text-[#4B4B4B] dark:text-white">
              {t('referralSuccessWhen')}
            </p>
            <ul className="mt-2 space-y-2">
              {referralRequirements.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm sm:text-base text-[#4B4B4B] dark:text-white/80">
                  <Check className="h-4 w-4 mt-1 text-[#45D3A7] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-[#4B5563] mt-4">
              {t('freeAccountsNote')}
            </p>

            <div className="flex items-center gap-2">
              <div>
                <Image src="/icon12.png" alt="referral" width={1000} height={1000} className="mt-4 h-6 w-6" />
              </div>
              <p className="mt-4 text-base sm:text-lg font-medium text-[#4B4B4B] dark:text-white">
                {t('rewards')}
              </p>
            </div>
            <ul className="mt-2 space-y-2">
              {referralRewards.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm sm:text-base text-[#4B4B4B] dark:text-white/80">
                  <Check className="h-4 w-4 mt-1 text-[#F88379] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-4 text-base sm:text-lg font-medium text-[#4B4B4B] dark:text-white">
              {t('termsTitle')}
            </p>
            <div className="bg-[#FAFAFA] dark:bg-white/5 p-2 rounded-[7px]">
              <p className="mt-1 text-xs leading-[150%] text-[#939393] dark:text-white/55">
                {t('termsDesc')}
              </p>
            </div>

            <div
              className="mt-6 rounded-full p-[4px]"
              style={{
                background: 'linear-gradient(180deg, #79FFD2 0%, #017850 100%)',
              }}
            >
              <div
                className="rounded-full py-2 px-5 text-base sm:text-lg text-[#4B4B4B] flex items-center justify-center gap-3 cursor-pointer"
                style={{
                  background: 'linear-gradient(90deg, #FFEFEE 0%, #FFFFFF 50%, #EBFFF8 100%)',
                }}
              >
                <Image src="/icon14.png" alt="referral" width={1000} height={1000} className="h-10 w-10" />
                {t('monthFreeReferral')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
