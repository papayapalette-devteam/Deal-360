'use client'

import * as React from 'react'
import { DayPicker, useDayPicker, type MonthCaptionProps } from 'react-day-picker'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select'

export type CalendarTheme = 'aqua' | 'pink'

const CalendarThemeContext = React.createContext<CalendarTheme>('aqua')

const themeConfig = {
  aqua: {
    gradient: 'linear-gradient(135deg, #E8FFF7 0%, #F0FDF8 100%)',
    arrowText: 'text-[#2D6A4F]',
    selectBorder: 'border-[#7FFFD4]',
    selectText: 'text-[#1A5C3D]',
    selectHover: 'hover:bg-[#F0FDF8]',
    dayHover: 'hover:bg-[#DCFFF4] hover:text-[#1A5C3D]',
    selected: 'bg-[#7FFFD4] text-[#1A5C3D] font-semibold hover:bg-[#7FFFD4] rounded-full shadow-sm',
    today: 'text-[#00A876] font-semibold underline underline-offset-2',
  },
  pink: {
    gradient: 'linear-gradient(135deg, #FFF5F4 0%, #FFF0EE 100%)',
    arrowText: 'text-[#C0504A]',
    selectBorder: 'border-[#F88379]',
    selectText: 'text-[#C0504A]',
    selectHover: 'hover:bg-[#FFF5F4]',
    dayHover: 'hover:bg-[#FFEAE8] hover:text-[#C0504A]',
    selected: 'bg-[#F88379] text-white font-semibold hover:bg-[#F88379] rounded-full shadow-sm',
    today: 'text-[#F88379] font-semibold underline underline-offset-2',
  },
}

function MonthYearCaption({ calendarMonth }: MonthCaptionProps) {
  const { goToMonth, nextMonth, previousMonth } = useDayPicker()
  const theme = React.useContext(CalendarThemeContext)
  const c = themeConfig[theme]
  const date = calendarMonth.date
  const year = date.getFullYear()
  const month = date.getMonth()
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 12 }, (_, i) => currentYear - 1 + i)

  return (
    <div
      className="flex items-center justify-between w-full px-2 py-2"
      style={{ background: c.gradient }}
    >
      <button
        type="button"
        onClick={() => previousMonth && goToMonth(previousMonth)}
        disabled={!previousMonth}
        className="h-7 w-7 flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-sm disabled:opacity-30 transition-all"
      >
        <ChevronLeft className={cn('h-3.5 w-3.5', c.arrowText)} />
      </button>

      <div className="flex items-center gap-1.5">
        <Select value={String(month)} onValueChange={(v) => goToMonth(new Date(year, +v, 1))}>
          <SelectTrigger className={cn('h-7 w-auto min-w-0 gap-1 px-2 text-[12px] font-semibold bg-white', c.selectText, c.selectBorder, c.selectHover)}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
            {Array.from({ length: 12 }, (_, i) => (
              <SelectItem key={i} value={String(i)} className="text-[13px]">
                {format(new Date(year, i, 1), 'MMMM')}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={String(year)} onValueChange={(v) => goToMonth(new Date(+v, month, 1))}>
          <SelectTrigger className={cn('h-7 w-auto min-w-0 gap-1 px-2 text-[12px] font-semibold bg-white', c.selectText, c.selectBorder, c.selectHover)}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
            {years.map((y) => (
              <SelectItem key={y} value={String(y)} className="text-[13px]">
                {y}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <button
        type="button"
        onClick={() => nextMonth && goToMonth(nextMonth)}
        disabled={!nextMonth}
        className="h-7 w-7 flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-sm disabled:opacity-30 transition-all"
      >
        <ChevronRight className={cn('h-3.5 w-3.5', c.arrowText)} />
      </button>
    </div>
  )
}

export type CalendarProps = React.ComponentProps<typeof DayPicker> & { theme?: CalendarTheme }

function Calendar({ theme = 'aqua', className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  const c = themeConfig[theme]
  return (
    <CalendarThemeContext.Provider value={theme}>
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn('pb-3', className)}
        classNames={{
          months: 'flex flex-col',
          month: 'flex flex-col',
          month_caption: 'w-full',
          caption_label: 'hidden',
          nav: 'hidden',
          month_grid: 'w-full border-collapse px-3 pt-2',
          weekdays: 'flex mb-1',
          weekday: 'flex-1 text-center text-[11px] font-semibold uppercase tracking-wide text-[#9CA3AF] py-1',
          week: 'flex w-full',
          day: cn('flex-1 flex items-center justify-center p-0.5', '[&:has([aria-selected])]:bg-transparent'),
          day_button: cn(
            'h-8 w-8 rounded-full text-sm font-normal transition-all duration-150',
            'inline-flex items-center justify-center',
            c.dayHover,
            'aria-selected:opacity-100'
          ),
          selected: c.selected,
          today: c.today,
          outside: 'text-[#D1D5DB]',
          disabled: 'text-[#E5E7EB] cursor-not-allowed hover:bg-transparent',
          hidden: 'invisible',
          ...classNames,
        }}
        components={{ MonthCaption: MonthYearCaption }}
        {...props}
      />
    </CalendarThemeContext.Provider>
  )
}

Calendar.displayName = 'Calendar'

export { Calendar }
