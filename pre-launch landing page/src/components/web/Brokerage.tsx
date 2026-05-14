'use client'

import { useState } from 'react'
import { Button } from '../Ui/button'
import Image from 'next/image'
import { Check, ChartNoAxesColumn, ClipboardList, Users } from 'lucide-react'
import { RegistrationModal } from '../registration-forms/RegistrationModal'
import { useTranslations } from 'next-intl'

const Brokerage = () => {
  const [registrationOpen, setRegistrationOpen] = useState(false)
  const t = useTranslations('brokerage')

  const coreCapabilities = [
    {
      icon: Users,
      title: t('capability0Title'),
      description: t('capability0Desc'),
    },
    {
      icon: ChartNoAxesColumn,
      title: t('capability1Title'),
      description: t('capability1Desc'),
    },
    {
      icon: ClipboardList,
      title: t('capability2Title'),
      description: t('capability2Desc'),
    },
    {
      icon: Check,
      title: t('capability3Title'),
      description: t('capability3Desc'),
    },
  ]

  return (
    <>
      <section className="w-full py-12 md:py-20 lg:py-24 px-4 sm:px-6">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="text-center lg:text-start">
          <div
            className="inline-block rounded-[999px] p-[3px] mb-6"
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

          <div className="mt-5 space-y-3">
            <p className="text-base sm:text-lg leading-relaxed text-[#686868] dark:text-white/70">
              {t('desc1')}
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-[#686868] dark:text-white/70">
              {t('desc2')}
            </p>
            <p className="text-base sm:text-lg font-medium text-[#4B4B4B] dark:text-white">
              {t('desc3')}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl sm:text-[32px] font-medium text-[#4B4B4B] dark:text-white mb-4">
              {t('coreCapabilitiesTitle')}
            </h3>

            <div className="space-y-4">
              {coreCapabilities.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 text-start justify-center lg:justify-start"
                >
                  <span className="mt-1 h-8 w-8 rounded-full bg-[#FFEAE6] dark:bg-[#2D2421] flex items-center justify-center shrink-0">
                    <item.icon className="h-4 w-4 text-[#F88379]" />
                  </span>
                  <div>
                    <p className="text-[22px] leading-tight font-medium text-[#4B4B4B] dark:text-white">
                      {item.title}
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed text-[#686868] dark:text-white/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-[8px] bg-[#FFEFEE] dark:bg-[#2A1F1E] p-4 text-start">
            <p className="text-base sm:text-lg font-medium text-[#F88379]">
              {t('earlyBrokerageTitle')}
            </p>
            <p className="text-sm sm:text-base text-[#686868] dark:text-white/70">
              {t('earlyBrokerageDesc1')}
            </p>
            <p className="text-sm sm:text-base text-[#686868] dark:text-white/70">
              {t('earlyBrokerageDesc2')}
            </p>
          </div>

          <div className="mt-5">
            <div
              className="inline-block rounded-[10px] p-[2px]"
              style={{
                background: 'linear-gradient(180deg, #79FFD2 0%, #017850 100%)',
              }}
            >
              <Button
                onClick={() => setRegistrationOpen(true)}
                className="rounded-[8px] h-[48px] px-6 text-base text-[#4B4B4B]"
                style={{
                  background:
                    'linear-gradient(90deg, #E8FFF7 0%, #FFF3F2 50%, #D5FFF1 100%)',
                }}
              >
                {t('earlyBrokerageButton')}
              </Button>
            </div>
          </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[620px]">
              <Image
                src="/dabol2x.png"
                alt="Brokerage dashboards"
                width={1200}
                height={1200}
                className="w-full h-auto object-contain drop-shadow-[0_0_85px_#FFADA6] dark:drop-shadow-none"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <RegistrationModal
        open={registrationOpen}
        onOpenChange={setRegistrationOpen}
      />
    </>
  )
}

export default Brokerage
