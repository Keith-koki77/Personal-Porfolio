import { Navigation } from '@/components/Navigation'

export default function ProductManagementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-ivory-silk">
      <Navigation />
      <main id="main-content" className="pt-0">{children}</main>
    </div>
  )
}