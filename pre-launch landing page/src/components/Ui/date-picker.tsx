'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Calendar, type CalendarTheme } from './calendar'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

interface DatePickerProps {
  value?: Date
  onChange: (date: Date | undefined) => void
  placeholder?: string
  className?: string
  disabled?: boolean
  disablePast?: boolean
  theme?: CalendarTheme
}

export function DatePicker({
  value,
  onChange,
  placeholder = 'Pick a date',
  className,
  disabled,
  disablePast = true,
  theme = 'aqua',
}: DatePickerProps) {
  const today = React.useMemo(() => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    return d
  }, [])

  const isPink = theme === 'pink'

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          disabled={disabled}
          className={cn(
            'flex w-full items-center justify-between overflow-hidden rounded-[8px] border border-[#CAD5E2] bg-white h-11 text-left transition-colors focus:outline-none focus:ring-2',
            isPink
              ? 'hover:border-[#F88379] focus:ring-[#F88379]/40'
              : 'hover:border-[#7FFFD4] focus:ring-[#7FFFD4]/40',
            disabled && 'cursor-not-allowed opacity-50',
            className
          )}
        >
          <span className={cn('flex-1 px-3 text-[14px]', value ? 'text-[#4B4B4B] font-medium' : 'text-[#9CA3AF]')}>
            {value ? format(value, 'dd MMM yyyy') : placeholder}
          </span>
          <span className={cn(
            'flex h-full items-center justify-center border-l border-[#CAD5E2] px-3 transition-colors',
            isPink ? 'bg-[#FFF5F4]' : 'bg-[#F0FDF8]'
          )}>
            <CalendarIcon className={cn('h-4 w-4', isPink ? 'text-[#F88379]' : 'text-[#37B08A]')} />
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 shadow-lg border border-[#CAD5E2] rounded-[12px] overflow-hidden" align="start">
        <Calendar
          theme={theme}
          mode="single"
          selected={value}
          onSelect={onChange}
          disabled={disablePast ? { before: today } : undefined}
          defaultMonth={value ?? today}
          autoFocus
        />
      </PopoverContent>
    </Popover>
  )
}
