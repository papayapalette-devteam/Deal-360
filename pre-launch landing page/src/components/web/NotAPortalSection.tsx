'use client'

import Image from 'next/image'
import { Button } from '../Ui/button'
import { useTranslations } from 'next-intl'

export default function NotAPortalSection() {
  const t = useTranslations('notAPortal')

  return (
    <section className="w-full py-14 sm:py-14 px-4 sm:px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="text-center lg:text-start order-1 lg:order-1">
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

          <h2 className="text-[34px] sm:text-[44px] lg:text-[64px] leading-[1.05] font-medium text-[#4B4B4B] dark:text-white max-w-[700px] mx-auto lg:mx-0">
            {t('headingPart1')}<span className="text-[#F88379]">{t('headingHighlight')}</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#686868] dark:text-white/70 max-w-[680px] mx-auto lg:mx-0">
            {t('desc')}
          </p>
        </div>

        <div className="flex justify-center lg:justify-end order-2 lg:order-2">
          <div className="relative w-full  ">
            <Image
              src="/ZenBook Duo 15.png"
              alt="Not a portal platform preview"
              width={1200}
              height={1200}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
