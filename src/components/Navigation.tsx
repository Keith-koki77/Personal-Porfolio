'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  LogoIcon,
  MenuIcon,
  CloseIcon,
  DotIcon,
  ArrowRightIcon,
} from './Icons'

const navLinks = [
  { href: '/product-management', label: 'Product Management' },
  { href: '/engineering', label: 'Engineering' },
  { href: '/ai-governance', label: 'AI Governance' },
  { href: '/blogs', label: 'Blogs & News' },
  { href: '/contact', label: 'Contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }
    handleResize()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-luxury ${isScrolled
          ? 'glass-frosted border-b border-hairline-light shadow-[0_4px_24px_-4px_rgba(42,22,43,0.08)]'
          : 'bg-ivory-silk/95 border-b border-hairline-light backdrop-blur-sm'
        }`}
      role="banner"
    >
      <nav
        className="mx-auto max-w-7xl px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 font-display font-medium text-xl text-aubergine-deep hover:text-aubergine-hover transition-luxury-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-brushed focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-silk"
            aria-label="Keith Koki — Home"
          >
            <LogoIcon className="h-8 w-8" />
            <span className="hidden sm:block tracking-tight">KEITH KOKI.</span>
            <DotIcon className="h-1.5 w-1.5 text-ochre-brushed" aria-hidden="true" />
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm font-medium text-obsidian-charcoal/80 hover:text-aubergine-deep transition-luxury-fast rounded-md hover:bg-ivory-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-brushed focus-visible:ring-offset-2 after:absolute after:bottom-1 after:left-3 after:right-3 after:h-[1px] after:bg-ochre-brushed after:scale-x-0 after:origin-center after:transition-transform hover:after:scale-x-100"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/advisory"
              className="ml-2 flex items-center gap-2 rounded-md bg-ochre-brushed px-5 py-2.5 text-sm font-medium text-aubergine-core hover:bg-ochre-champagne hover:gold-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-brushed focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-silk transition-luxury relative overflow-hidden shadow-[0_4px_16px_-4px_rgba(197,155,39,0.3)]"
              aria-label="Initiate Advisory"
            >
              <span className="relative z-10">Initiate Advisory</span>
              <ArrowRightIcon className="h-4 w-4 transition-luxury-fast" aria-hidden="true" />
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              className="p-2 rounded-md text-obsidian-charcoal hover:text-aubergine-deep hover:bg-ivory-surface transition-luxury-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-brushed focus-visible:ring-offset-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-luxury ${isMobileMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
            }`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="pt-4 space-y-2 border-t border-hairline-light">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-obsidian-charcoal/80 hover:text-aubergine-deep transition-luxury-fast rounded-md hover:bg-ivory-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-brushed"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/advisory"
              className="w-full mt-4 flex items-center justify-center gap-2 rounded-md bg-ochre-brushed px-5 py-3 text-base font-medium text-aubergine-core hover:bg-ochre-champagne hover:gold-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-brushed transition-luxury shadow-[0_4px_16px_-4px_rgba(197,155,39,0.3)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Initiate Advisory
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}