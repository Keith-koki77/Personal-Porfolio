'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from './Icons'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  currentPage?: string
  currentPageHref?: string
}

export function Breadcrumbs({ items, currentPage, currentPageHref }: BreadcrumbsProps) {
  const breadcrumbItems = useMemo(
    () => items.map((item, index) => ({ ...item, position: index + 1 })),
    [items]
  )

  const structuredData = useMemo(() => {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems.map((item) => ({
        '@type': 'ListItem',
        position: item.position,
        name: item.label,
        item: `https://keithkoki.com${item.href}`,
      })),
    }

    if (currentPage && currentPageHref) {
      data.itemListElement.push({
        '@type': 'ListItem',
        position: breadcrumbItems.length + 1,
        name: currentPage,
        item: `https://keithkoki.com${currentPageHref}`,
      })
    }

    return data
  }, [breadcrumbItems, currentPage, currentPageHref])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav
        className="mb-8"
        aria-label="Breadcrumb"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <ol className="flex items-center gap-2 text-sm text-obsidian-text/60" role="list">
          {breadcrumbItems.map((item, index) => (
            <li key={item.href} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link
                href={item.href}
                className="hover:text-ochre-brushed transition-colors flex items-center gap-2"
                itemProp="item"
              >
                <span itemProp="name">{item.label}</span>
                <meta itemProp="position" content={String(item.position)} />
                {index < breadcrumbItems.length - 1 && (
                  <ArrowRightIcon className="w-3 h-3 text-obsidian-text/40" aria-hidden="true" />
                )}
              </Link>
            </li>
          ))}
          {currentPage && (
            <li
              className="text-obsidian-text/40 flex items-center gap-2"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <span itemProp="name">{currentPage}</span>
              <meta itemProp="position" content={String(breadcrumbItems.length + 1)} />
            </li>
          )}
        </ol>
      </nav>
    </>
  )
}