'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'

interface TimeUnits {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const t = useTranslations('countdown')
  const [time, setTime] = useState<TimeUnits>({
    days: 90,
    hours: 24,
    minutes: 50,
    seconds: 28,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else if (days > 0) {
          days--
          hours = 23
          minutes = 59
          seconds = 59
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center "
     
    >
      <div className="text-3xl sm:text-5xl lg:text-[64px] font-midium text-[#4B4B4B] mb-2 w-[80px] sm:w-[121px] text-center py-3 rounded-[12px]"
        style={{
        background:
          'linear-gradient(180deg, #DBFFF3 0%, #FFFFFF 50%, #FFE8E6 100%)',
      }}
      >
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-sm sm:text-base text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  )

  return (
    <div
      className="rounded-2xl mt-4"
   
    >
      <div className="flex gap-2 sm:gap-6 lg:gap-2">
        <TimeUnit value={time.days} label={t('days')} />
        <TimeUnit value={time.hours} label={t('hours')} />
        <TimeUnit value={time.minutes} label={t('minutes')} />
        <TimeUnit value={time.seconds} label={t('seconds')} />
      </div>
    </div>
  )
}
