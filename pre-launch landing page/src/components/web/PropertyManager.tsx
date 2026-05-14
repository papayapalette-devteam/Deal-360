'use client'

import Image from 'next/image'
import { Button } from '../Ui/button'
import { Check } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function PropertyManager() {
  const t = useTranslations('propertyManager')

  const managerPoints = [
    t('managerPoint0'),
    t('managerPoint1'),
    t('managerPoint2'),
    t('managerPoint3'),
  ]

  return (
    <section className="w-full py-14 sm:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="flex justify-center lg:justify-start order-2 lg:order-1">
          <div className="relative w-full max-w-[560px]">
            <Image
              src="/blue2x.png"
              alt="Property manager preview"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain drop-shadow-[0_0_85px_#B9FFE8] dark:drop-shadow-none"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 sm:gap-6 text-center lg:text-start order-1 lg:order-2">
          <div>
            <div
              className="inline-block rounded-[999px] p-[3px]"
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
          </div>

          <h2 className="text-[34px] sm:text-[44px] lg:text-[64px] leading-[1.05] font-medium text-[#4B4B4B] dark:text-white">
            <span className="text-[#7FFFD4]">{t('heading').split(' ')[0]}</span>{' '}
            <span className="text-[#F88379]">{t('heading').split(' ').slice(1).join(' ')}</span>
          </h2>

          <h3 className="text-2xl sm:text-[32px] font-medium text-[#4B4B4B] dark:text-white">
            {t('subheading')}
          </h3>

          <p className="text-base sm:text-lg leading-relaxed text-[#686868] dark:text-white/70 max-w-[640px] mx-auto lg:mx-0">
            {t('desc')}
          </p>

          <div>
            <p className="text-xl sm:text-2xl font-medium text-[#4B4B4B] dark:text-white mb-4">
              {t('withTitle')}
            </p>
            <ul className="space-y-4 text-start">
              {managerPoints.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 justify-start text-[#4B4B4B] dark:text-white text-base sm:text-xl font-medium"
                >
                  <span className="h-8 w-8 rounded-full bg-[#FFEAE6] dark:bg-[#2D2421] flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4 text-[#F88379]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-base sm:text-lg text-[#686868] dark:text-white/70">
            {t('footerDesc')}
          </p>
        </div>
      </div>
    </section>
  )
}
