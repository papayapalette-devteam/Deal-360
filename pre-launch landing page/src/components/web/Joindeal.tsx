'use client'

import { useState } from 'react'
import { Check, CheckCircle, Clock, Shield } from 'lucide-react'
import { Button } from '../Ui/button'
import { RegistrationModal } from '../registration-forms/RegistrationModal'
import { useTranslations } from 'next-intl'

type RegistrationTab = 'professional' | 'user' | 'company'

const Joindeal = () => {
  const [registrationOpen, setRegistrationOpen] = useState(false)
  const [registrationTab, setRegistrationTab] =
    useState<RegistrationTab>('professional')
  const t = useTranslations('joindeal')

  const registrationTypes: Array<{ label: string; tab?: RegistrationTab }> = [
    { label: t('regType0') },
    { label: t('regType1') },
    { label: t('regType2'), tab: 'professional' },
    { label: t('regType3'), tab: 'user' },
    { label: t('regType4'), tab: 'company' },
  ]

  const topHighlights = [
    {
      icon: Clock,
      title: t('highlight0Title'),
      description: t('highlight0Desc'),
      bg: 'bg-[#E6FFF7] dark:bg-[#18342A]',
    },
    {
      icon: Shield,
      title: t('highlight1Title'),
      description: t('highlight1Desc'),
      bg: 'bg-[#FFEFEE] dark:bg-[#2A1F1E]',
    },
    {
      icon: CheckCircle,
      title: t('highlight2Title'),
      description: t('highlight2Desc'),
      bg: 'bg-[#E6FFF7] dark:bg-[#18342A]',
    },
  ]

  const earlyAccessItems = [
    t('earlyAccess0'),
    t('earlyAccess1'),
    t('earlyAccess2'),
    t('earlyAccess3'),
  ]

  const whyMattersItems = [
    t('whyMatters0'),
    t('whyMatters1'),
    t('whyMatters2'),
    t('whyMatters3'),
  ]

  const openRegistration = (tab: RegistrationTab) => {
    setRegistrationTab(tab)
    setRegistrationOpen(true)
  }

  return (
    <>
      <section className="w-full px-4 sm:px-6 py-12 md:py-20 lg:py-24">
        <div className="container mx-auto max-w-[1180px]">
        <div className="text-center">
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

          <h2 className="text-[34px] sm:text-[44px] lg:text-[64px] leading-[1.05] font-medium text-[#4B4B4B] dark:text-white">
            {t('headingPart1')}<span className="text-[#F88379]">{t('headingHighlight')}</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#686868] dark:text-white/70 max-w-[820px] mx-auto">
            {t('desc1')}
          </p>

          <p className="mt-1 text-xs sm:text-sm text-[#8A8A8A] dark:text-white/50 max-w-[980px] mx-auto">
            {t('desc2')}
          </p>

          <div className="my-5 h-px bg-[#E6E6E6] dark:bg-white/10" />

          <div className="flex flex-wrap gap-3 max-w-[620px] mx-auto justify-center">
            {registrationTypes.map((type) => (
              <div
                key={type.label}
                className="inline-block rounded-[10px] p-[2px]"
                style={{
                  background:
                    'linear-gradient(180deg, #79FFD2 0%, #017850 100%)',
                }}
              >
                <Button
                  onClick={
                    typeof type.tab === 'string'
                      ? () => openRegistration(type.tab as RegistrationTab)
                      : undefined
                  }
                  className="h-[38px] rounded-[8px] px-4 text-xs sm:text-sm text-[#4B4B4B]"
                  style={{
                    background:
                      'linear-gradient(90deg, #E8FFF7 0%, #FFF3F2 50%, #D5FFF1 100%)',
                  }}
                >
                  {type.label}
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {topHighlights.map((item) => (
            <div key={item.title} className={`rounded-[12px] p-5 text-center ${item.bg}`}>
              <span className="mx-auto mb-3 h-11 w-11 rounded-full bg-white dark:bg-black/20 flex items-center justify-center">
                <item.icon className="h-5 w-5 text-[#4B4B4B] dark:text-white" />
              </span>
              <h3 className="text-2xl font-medium text-[#4B4B4B] dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#686868] dark:text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="rounded-[12px] bg-[#FFEFEE] dark:bg-[#2A1F1E] p-5 sm:p-6">
            <h3 className="text-2xl font-medium text-[#4B4B4B] dark:text-white">
              {t('earlyAccessTitle')}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#686868] dark:text-white/70">
              {t('earlyAccessDesc')}
            </p>
            <ul className="mt-4 space-y-3">
              {earlyAccessItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm sm:text-base text-[#4B4B4B] dark:text-white/80"
                >
                  <Check className="h-4 w-4 mt-1 text-[#4B4B4B] dark:text-white shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[12px] bg-[#EEFFF9] dark:bg-[#18342A] p-5 sm:p-6">
            <h3 className="text-2xl font-medium text-[#4B4B4B] dark:text-white">
              {t('whyMattersTitle')}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#686868] dark:text-white/70">
              {t('whyMattersDesc')}
            </p>
            <ul className="mt-4 space-y-3">
              {whyMattersItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm sm:text-base text-[#4B4B4B] dark:text-white/80"
                >
                  <Check className="h-4 w-4 mt-1 text-[#4B4B4B] dark:text-white shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      </section>

      <RegistrationModal
        open={registrationOpen}
        onOpenChange={setRegistrationOpen}
        initialTab={registrationTab}
      />
    </>
  )
}

export default Joindeal
