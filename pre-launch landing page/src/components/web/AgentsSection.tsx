'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '../Ui/button'
import { RegistrationModal } from '../registration-forms/RegistrationModal'
import {
  BadgeCheck,
  Bolt,
  ClipboardList,
  FolderKanban,
  Lock,
  Target,
  Check,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

export function AgentsSection() {
  const [registrationOpen, setRegistrationOpen] = useState(false)
  const t = useTranslations('agents')

  const leadFlowPoints = [
    {
      icon: Target,
      title: t('leadFlow0Title'),
      desc: t('leadFlow0Desc'),
    },
    {
      icon: ClipboardList,
      title: t('leadFlow1Title'),
      desc: t('leadFlow1Desc'),
    },
    {
      icon: Bolt,
      title: t('leadFlow2Title'),
      desc: t('leadFlow2Desc'),
    },
    {
      icon: BadgeCheck,
      title: t('leadFlow3Title'),
      desc: t('leadFlow3Desc'),
    },
    {
      icon: FolderKanban,
      title: t('leadFlow4Title'),
      desc: t('leadFlow4Desc'),
    },
  ]

  const whyDifferent = [
    t('whyDifferent0'),
    t('whyDifferent1'),
    t('whyDifferent2'),
    t('whyDifferent3'),
  ]

  return (
    <>
      <section className="px-4 sm:px-6 lg:px-2 py-16 sm:py-20">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 ">
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[540px]">
              <Image
                src="/2xcold.png"
                alt="Agent requirements preview"
                width={900}
                height={900}
                className="w-full h-auto object-contain drop-shadow-[0_0_85px_#B9FFE8] dark:drop-shadow-none"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 sm:gap-6 text-center lg:text-start">
            <div>
              <div
                className="inline-block rounded-[999px] p-[3px]"
                style={{
                  background:
                    'linear-gradient(180deg, #79FFD2 0%, #017850 100%)',
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
            </div>

          <h2 className="text-[34px] sm:text-[44px] lg:text-[64px] leading-[1.05] font-medium text-[#4B4B4B] dark:text-white">
            {t('heading')} <span className="text-[#F88379]">{t('headingHighlight')}</span>
          </h2>

          <div className="space-y-3">
            <p className="text-lg sm:text-xl font-medium text-[#4B4B4B] dark:text-white">
              {t('subheading')}
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-[#686868] dark:text-white/70">
              {t('desc1')}
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-[#686868] dark:text-white/70">
              {t('desc2')}
            </p>
          </div>

          <div className="space-y-4 pt-1">
            {leadFlowPoints.map((item) => (
              <div
                key={item.title}
                className="flex gap-3 sm:gap-4 items-start justify-start text-start"
              >
                <span className="mt-1 h-8 w-8 rounded-full bg-[#FFEAE6] dark:bg-[#2D2421] flex items-center justify-center shrink-0">
                  <item.icon className="h-4 w-4 text-[#F88379]" />
                </span>
                <div>
                  <p className="text-[22px] leading-tight font-medium text-[#4B4B4B] dark:text-white">
                    {item.title}
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed text-[#686868] dark:text-white/70">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-2">
            <h3 className="text-2xl sm:text-[32px] font-medium text-[#4B4B4B] dark:text-white">
              {t('whyDifferentTitle')}
            </h3>

            <ul className="space-y-2 text-start">
              {whyDifferent.map((point) => (
                <li
                  key={point}
                  className="flex items-center justify-start gap-3 text-sm sm:text-base text-[#686868] dark:text-white/70"
                >
                  <span className="h-6 w-6 rounded-full bg-[#FFEAE6] dark:bg-[#2D2421] flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5 text-[#F88379]" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div>
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
                  {t('earlyAgentRegistration')}
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-[#686868] dark:text-white/70">
              <Lock className="h-3.5 w-3.5 text-[#F88379] shrink-0" />
              {t('privateOpportunities')}
            </div>
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
