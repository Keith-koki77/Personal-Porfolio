'use client'

import { LinkedInIcon, GitHubIcon, XIcon, SubstackIcon, ArrowUpIcon, LogoIcon, DotIcon } from './Icons'
import Link from 'next/link'

const footerNav = {
  Product: [
    { label: 'Product Management', href: '/product-management' },
    { label: 'Software Engineering', href: '/engineering' },
    { label: 'AI Governance', href: '/ai-governance' },
  ],
  Works: [
    { label: 'Selected Works', href: '/works' },
    { label: 'Track Record', href: '/works' },
    { label: 'Case Studies', href: '/works' },
  ],
  Pillars: [
    { label: 'Capabilities', href: '/pillars' },
    { label: 'Process', href: '/pillars' },
    { label: 'Philosophy', href: '/pillars' },
  ],
  Engage: [
    { label: 'Contact', href: '/contact' },
    { label: 'Advisory', href: '/advisory' },
    { label: 'Speaking', href: '/speaking' },
    { label: 'FAQ', href: '/faq' },
  ],
  Legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
}

const socialLinks = [
  { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/keith-koki-669782240/', label: 'LinkedIn' },
  { icon: GitHubIcon, href: 'https://github.com/Keith-koki77/', label: 'GitHub' },
  { icon: XIcon, href: 'https://x.com/KeithKoki3980', label: 'X' },
  { icon: SubstackIcon, href: 'https://substack.com/@keithkoki', label: 'Substack' },
]

export function Footer() {
  return (
    <footer className="bg-ivory-silk border-t border-hairline-light" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="lg:col-span-4 space-y-6">
            <Link
              href="#"
              className="flex items-center gap-3 font-display font-medium text-xl text-aubergine-deep hover:text-aubergine-hover transition-luxury-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-brushed focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-silk rounded-sm"
              aria-label="Keith Koki — Home"
            >
              <LogoIcon className="h-8 w-8" />
              <span className="tracking-tight">KEITH KOKI.</span>
              <DotIcon className="h-1.5 w-1.5 text-ochre-brushed" aria-hidden="true" />
            </Link>
            <p className="text-obsidian-text leading-relaxed max-w-xs">
              Executive portfolio of Keith Koki. Product leadership, software engineering, and ISO/IEC 42001 certified AI governance advisory. CTO at Qavaeat &amp; Mama Sure. Accepting engagements for fractional CTO, technical advisory, and algorithmic compliance audits.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-ivory-surface border border-hairline-light text-obsidian-text hover:bg-ochre-brushed/10 hover:border-ochre-brushed hover:text-ochre-brushed transition-luxury-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-brushed focus-visible:ring-offset-2"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav className="lg:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-8" aria-label="Footer navigation">
            {Object.entries(footerNav).map(([section, links]) => (
              <div key={section}>
                <h4 className="overline text-obsidian-muted mb-4">{section.toUpperCase()}</h4>
                <ul className="space-y-3" role="list">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-obsidian-text hover:text-aubergine-deep transition-luxury-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-brushed focus-visible:ring-offset-2 rounded"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="pt-8 lg:pt-12 border-t border-hairline-light">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <p className="text-sm text-obsidian-muted">
              &copy; {new Date().getFullYear()} Keith Koki. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-obsidian-muted">
              <Link
                href="/privacy"
                className="hover:text-aubergine-deep transition-luxury-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-brushed focus-visible:ring-offset-2 rounded"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-aubergine-deep transition-luxury-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-brushed focus-visible:ring-offset-2 rounded"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="flex items-center gap-1.5 text-ochre-brushed hover:text-ochre-champagne transition-luxury-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-brushed focus-visible:ring-offset-2 rounded"
                aria-label="Back to top"
              >
                <ArrowUpIcon className="h-4 w-4" aria-hidden="true" />
                <span>Top</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}