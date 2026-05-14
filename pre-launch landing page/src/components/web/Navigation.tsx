
'use client'

import { useEffect, useMemo, useState } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { Button } from '@/components/Ui/button'
import { LogOut, Menu, Moon, Sun } from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/Ui/sheet'
import { RegistrationModal } from '../registration-forms/RegistrationModal'
import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'

type NavItem =
  | { label: string; href: string; anchorId?: undefined }
  | { label: string; href: string; anchorId: string }

export default function Header() {
  const pathname = usePathname()
  const { theme, setTheme, resolvedTheme: nextResolvedTheme } = useTheme()
  const t = useTranslations('nav')
  const locale = useLocale()

  const isHomePage = pathname === '/'

  const navItems = useMemo<NavItem[]>(
    () => [
      { label: t('requirements'), href: '/buyer-requirements' },
      { label: t('listingIntent'), href: '/list-proparty' },
      { label: t('agent'), href: '#agent', anchorId: 'agent' },
      { label: t('brokerages'), href: '#brokerage', anchorId: 'brokerages' },
      { label: t('plans'), href: '#plan', anchorId: 'plans' },
    ],
    [t]
  )

  const [mounted, setMounted] = useState(false)
  const [activeAnchor, setActiveAnchor] = useState('')
  const [registrationOpen, setRegistrationOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Sync active anchor from URL hash so Agent/Brokerages/Investor stay active when navigating to /#agent etc.
  useEffect(() => {
    if (!mounted || !isHomePage) return
    const hash = typeof window !== 'undefined' ? window.location.hash.slice(1) : ''
    const validIds = ['agent', 'brokerages', 'plans']
    if (hash && validIds.includes(hash)) setActiveAnchor(hash)
  }, [mounted, isHomePage])

  // When landing on /#agent, scroll may happen after paint; sync active from hash once
  useEffect(() => {
    if (!mounted || !isHomePage) return
    const hash = window.location.hash.slice(1)
    if (hash && ['agent', 'brokerages', 'plans'].includes(hash)) {
      const t = setTimeout(() => setActiveAnchor(hash), 100)
      return () => clearTimeout(t)
    }
  }, [mounted, isHomePage, pathname])

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash) setActiveAnchor(hash)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (!mounted || !isHomePage) return

    const anchorItems = navItems.filter((item): item is NavItem & { anchorId: string } =>
      item.anchorId !== undefined
    )

    const getActive = () => {
      const hashId = typeof window !== 'undefined' ? window.location.hash.slice(1) : ''
      const validIds = ['agent', 'brokerages', 'plans']

      // When URL has a section hash, always show that tab as active (so Agent/Brokerages stay active)
      if (hashId && validIds.includes(hashId)) {
        setActiveAnchor(hashId)
        return
      }

      const offset = 120
      const scrollPos = window.scrollY + offset
      let current = ''
      for (const item of anchorItems) {
        const el = document.getElementById(item.anchorId)
        if (!el) continue
        const top = el.offsetTop
        const height = el.offsetHeight
        if (scrollPos >= top && scrollPos < top + height) {
          current = item.anchorId
          break
        }
      }
      setActiveAnchor(current)
    }

    getActive()
    window.addEventListener('scroll', getActive, { passive: true })
    window.addEventListener('resize', getActive)

    return () => {
      window.removeEventListener('scroll', getActive)
      window.removeEventListener('resize', getActive)
    }
  }, [mounted, navItems, isHomePage])

  const resolvedTheme = mounted ? (nextResolvedTheme ?? theme ?? 'light') : 'light'

  const isActive = (item: NavItem) => {
    if (item.anchorId) return isHomePage && activeAnchor === item.anchorId
    return pathname === item.href
  }

  const resolveHref = (item: NavItem) => {
    if (item.anchorId && !isHomePage) return `/${item.href}` // e.g. /#agent so logo and nav work from any page
    return item.href
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#fff] dark:bg-[#0F1419] shadow-md backdrop-blur border-b border-transparent dark:border-white/10 px-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex h-[88px] items-center justify-between">
          {/* Logo - always links to hero (home) */}
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Deal 360 - Go to home">
            <Image
              src={locale === 'ar' ? '/logoar.jpeg' : '/logoae.jpeg'}
              alt="Deal 360"
              width={locale === 'ar' ? 140 : 148}
              height={48}
              className={locale === 'ar' ? 'h-[48px] w-auto' : 'w-[148px] h-[48px]'}
              priority
            />
          </Link>

          {/* Menu Items (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const href = resolveHref(item)
              const active = isActive(item)

              if (item.anchorId) {
                return (
                  <a
                    key={item.href}
                    href={href}
                    className={`text-base font-medium transition-colors pb-1 border-b-2 ${
                      active
                        ? 'text-[#F88379] dark:text-[#7FFFD4] border-[#7FFFD4]'
                        : 'text-[#4B4B4B] dark:text-white/90 hover:text-[#F88379] dark:hover:text-[#7FFFD4] border-transparent'
                    }`}
                  >
                    {item.label}
                  </a>
                )
              }

              return (
                <Link
                  key={item.href}
                  href={href}
                  className={`text-base font-medium transition-colors pb-1 border-b-2 ${
                    active
                      ? 'text-[#F88379] dark:text-[#7FFFD4] border-[#7FFFD4]'
                      : 'text-[#4B4B4B] dark:text-white/90 hover:text-[#F88379] dark:hover:text-[#7FFFD4] border-transparent'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Theme Toggle (Desktop) */}
            <div className="hidden sm:flex items-center gap-1 rounded-[8px] p-1.5 h-[50px] bg-gray-200 dark:bg-white/10">
              <button
                type="button"
                onClick={() => {
                  setTheme('light')
                  document.documentElement.setAttribute('data-theme', 'light')
                  document.documentElement.classList.remove('dark')
                }}
                className={`flex items-center gap-2 px-3 h-full rounded-[6px] text-sm font-medium transition-all ${
                  resolvedTheme === 'light'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white'
                }`}
                aria-label="Light mode"
              >
                <Sun className="h-4 w-4" />
                {t('light')}
              </button>
              <button
                type="button"
                onClick={() => {
                  setTheme('dark')
                  document.documentElement.setAttribute('data-theme', 'dark')
                  document.documentElement.classList.add('dark')
                }}
                className={`flex items-center gap-2 px-3 h-full rounded-[6px] text-sm font-medium transition-all ${
                  resolvedTheme === 'dark'
                    ? 'bg-[#7FFFD4] text-gray-900 border border-[#7FFFD4]'
                    : 'text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white'
                }`}
                aria-label="Dark mode"
              >
                <Moon className="h-4 w-4" />
                {t('dark')}
              </button>
            </div>

            {/* Language Switcher (Desktop) */}
            <div className="hidden sm:flex">
              <Link
                href={pathname}
                locale={locale === 'en' ? 'ar' : 'en'}
                className="flex items-center justify-center h-[50px] w-14 rounded-[8px] border border-black/10 dark:border-white/10 text-sm font-medium text-[#4B4B4B] dark:text-white bg-white/60 dark:bg-white/5 hover:bg-white/80"
              >
                {locale === 'en' ? t('switchToArabic') : t('switchToEnglish')}
              </Link>
            </div>

            {/* Buttons (Desktop only) */}
            <div className="hidden sm:flex gap-2">
              <Button
                onClick={() => setRegistrationOpen(true)}
                className="bg-[#7FFFD4] hover:bg-[#6ee9c4] text-gray-900 dark:text-gray-900 h-[50px] rounded-[8px] font-medium"
              >
                <span><LogOut className="h-4 w-4" /></span>
                {t('preRegistration')}
              </Button>
            </div>

            {/* Mobile Sheet Trigger */}
            <div className="sm:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5"
                    aria-label="Open menu"
                  >
                    <Menu className="h-5 w-5 text-[#4B4B4B] dark:text-white" />
                  </button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="w-[320px] sm:w-[360px] bg-white dark:bg-[#0F1419] border-s dark:border-white/10"
                >
                  <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                      <Link href="/" className="block" aria-label="Deal 360 - Go to home">
                        <Image
                          src={locale === 'ar' ? '/logo-ar.png' : '/logo.png'}
                          alt="Deal 360"
                          width={148}
                          height={48}
                          className="h-[32px] w-auto"
                        />
                      </Link>
                    </SheetTitle>
                  </SheetHeader>

                  {/* Menu Items */}
                  <div className="mt-8 flex flex-col gap-3">
                    {navItems.map((item) => {
                      const href = resolveHref(item)
                      const active = isActive(item)

                      if (item.anchorId) {
                        return (
                          <SheetClose asChild key={item.href}>
                            <a
                              href={href}
                              className={`rounded-[10px] px-4 py-3 text-base font-medium transition-colors ${
                                active
                                  ? 'text-[#F88379] dark:text-[#7FFFD4] bg-black/5 dark:bg-white/10'
                                  : 'text-[#4B4B4B] dark:text-white hover:bg-black/5 dark:hover:bg-white/10'
                              }`}
                            >
                              {item.label}
                            </a>
                          </SheetClose>
                        )
                      }

                      return (
                        <SheetClose asChild key={item.href}>
                          <Link
                            href={href}
                            className={`rounded-[10px] px-4 py-3 text-base font-medium transition-colors ${
                              active
                                ? 'text-[#F88379] dark:text-[#7FFFD4] bg-black/5 dark:bg-white/10'
                                : 'text-[#4B4B4B] dark:text-white hover:bg-black/5 dark:hover:bg-white/10'
                            }`}
                          >
                            {item.label}
                          </Link>
                        </SheetClose>
                      )
                    })}
                  </div>

                  {/* Theme Toggle (Mobile) */}
                  <div className="mt-6 flex items-center gap-1 rounded-[10px] p-1.5 bg-gray-200 dark:bg-white/10">
                    <button
                      type="button"
                      onClick={() => {
                        setTheme('light')
                        document.documentElement.setAttribute('data-theme', 'light')
                        document.documentElement.classList.remove('dark')
                      }}
                      className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-[8px] text-sm font-medium ${
                        resolvedTheme === 'light' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 dark:text-white/70'
                      }`}
                    >
                      <Sun className="h-4 w-4" />
                      {t('light')}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setTheme('dark')
                        document.documentElement.setAttribute('data-theme', 'dark')
                        document.documentElement.classList.add('dark')
                      }}
                      className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-[8px] text-sm font-medium ${
                        resolvedTheme === 'dark' ? 'bg-[#7FFFD4] text-gray-900' : 'text-gray-600 dark:text-white/70'
                      }`}
                    >
                      <Moon className="h-4 w-4" />
                      {t('dark')}
                    </button>
                  </div>

                  {/* Language Switcher (Mobile) */}
                  <div className="mt-4">
                    <Link
                      href={pathname}
                      locale={locale === 'en' ? 'ar' : 'en'}
                      className="flex items-center justify-center h-9 w-full rounded-[8px] border border-black/10 dark:border-white/10 text-sm font-medium text-[#4B4B4B] dark:text-white bg-white/60 dark:bg-white/5 hover:bg-white/80"
                    >
                      {locale === 'en' ? t('switchToArabic') : t('switchToEnglish')}
                    </Link>
                  </div>

                  {/* Mobile Buttons */}
                  <div className="mt-6 grid grid-cols-1 gap-3">
                    <Button
                      onClick={() => setRegistrationOpen(true)}
                      className="bg-[#7FFFD4] hover:bg-[#6ee9c4] text-gray-900 h-[50px] rounded-[8px] font-medium"
                    >
                      {t('preRegistration')}
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Modal */}
      <RegistrationModal
        open={registrationOpen}
        onOpenChange={setRegistrationOpen}
      />
    </nav>
  )
}
