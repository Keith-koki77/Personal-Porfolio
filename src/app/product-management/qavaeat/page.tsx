import { Metadata } from 'next'

import Link from 'next/link'
import { ArrowLeftIcon, CalendarIcon, ClockIcon, BuildingIcon, FileTextIcon } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'QavaEat Case Study | Product Management Portfolio | Keith Koki',
  description:
    'A food-tech platform connecting customers with trusted private chefs through meal discovery, scheduling, and prepayment. Product strategy, design, and development case study.',
  authors: [{ name: 'Keith Koki' }],
  openGraph: {
    title: 'QavaEat Case Study | Product Management Portfolio | Keith Koki',
    description:
      'A food-tech platform connecting customers with trusted private chefs through meal discovery, scheduling, and prepayment.',
    type: 'website',
    url: 'https://keithkoki.com/product-management/qavaeat',
  },
}

export default function QavaEatCaseStudy() {
  const qavaEatRed = '#DD3131'
  const qavaEatYellow = '#F4CD2E'
  const qavaEatWhite = '#F4F5F6'
  const qavaEatGreen = '#00AE09'

  return (
    <main id="main-content" className="pt-0">
      <article>
          {/* Hero */}
          <header className="relative py-20 lg:py-32 bg-aubergine-ground text-ivory-silk overflow-hidden">
            <div
              className="absolute inset-0 bg-[radial-gradient(60%_55%_at_62%_40%,rgba(221,49,49,0.15),transparent_70%)]"
              aria-hidden="true"
            />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
              <Link
                href="/product-management"
                className="inline-flex items-center gap-2 text-sm font-medium text-ochre-champagne hover:text-ochre-brushed transition-luxury-fast mb-8"
              >
                <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
                Back to Product Management
              </Link>
              <div className="flex items-center gap-2 mb-6">
                <span
                  className="px-3 py-1 rounded text-xs font-medium tracking-wider bg-red-500/20 text-red-400 border border-red-500/30"
                  style={{ backgroundColor: `${qavaEatRed}20`, color: qavaEatRed, borderColor: `${qavaEatRed}40` }}
                >
                  FoodTech
                </span>
                <span
                  className="px-3 py-1 rounded text-xs font-medium tracking-wider bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                  style={{ backgroundColor: `${qavaEatYellow}20`, color: qavaEatYellow, borderColor: `${qavaEatYellow}40` }}
                >
                  Consumer Marketplace
                </span>
                <span
                  className="px-3 py-1 rounded text-xs font-medium tracking-wider bg-green-500/20 text-green-400 border border-green-500/30"
                  style={{ backgroundColor: `${qavaEatGreen}20`, color: qavaEatGreen, borderColor: `${qavaEatGreen}40` }}
                >
                  Meal Planning
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded text-xs font-medium tracking-wider bg-ivory-silk/20 text-ivory-surface border border-ivory-silk/30">
                  Mobile app launched
                </span>
              </div>
              <h1 className="font-display font-extrabold text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] tracking-[-0.02em] text-ivory-silk mt-6 mb-4 text-balance">
                Making everyday meal planning stress-free, healthy, and predictable.
              </h1>
            </div>
          </header>

          <div className="mx-auto max-w-5xl px-6 lg:px-8 py-16 lg:py-24 space-y-20 lg:space-y-28">
            {/* Overview */}
            <section aria-labelledby="overview-heading">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-4">
                  <h2 id="overview-heading" className="font-display font-semibold text-3xl lg:text-4xl text-aubergine-deep mb-6">
                    Overview
                  </h2>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  <p className="text-lg text-obsidian-text leading-relaxed">
                    QavaEat is a food-tech platform connecting customers with trusted private chefs through meal discovery, scheduling, and prepayment.
                  </p>
                  <p className="text-lg text-obsidian-text leading-relaxed">
                    The product addresses a different problem from conventional instant food ordering: helping people plan what they eat, manage their food spending, and organize meals around their daily routines.
                  </p>
                  <p className="text-lg text-obsidian-text leading-relaxed">
                    Rather than focusing on instant food ordering, the product helps customers make meal decisions in advance, organize their food spending, and schedule meals around their routines. The opportunity was to build a platform that makes everyday eating more organized and predictable while giving chefs access to more consistent, prepaid demand.
                  </p>
                </div>
              </div>
            </section>

            {/* Problem */}
            <section aria-labelledby="problem-heading" className="border-t border-hairline-light pt-8">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-4">
                  <h2 id="problem-heading" className="font-display font-semibold text-3xl lg:text-4xl text-aubergine-deep mb-6">
                    The Problem
                  </h2>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  <p className="text-lg text-obsidian-text leading-relaxed">
                    Traditional food ordering focuses largely on immediate consumption. However, many people face a different challenge: having to figure out what to eat every day.
                  </p>
                  <p className="text-lg text-obsidian-text leading-relaxed">
                    The opportunity involved several connected problems:
                  </p>
                  <ul className="space-y-3" role="list">
                    <li className="flex items-start gap-3 px-4 py-3 rounded-lg bg-ivory-surface border border-hairline-light">
                      <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" />
                      Busy professionals struggle to plan meals consistently.
                    </li>
                    <li className="flex items-start gap-3 px-4 py-3 rounded-lg bg-ivory-surface border border-hairline-light">
                      <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" />
                      University students need affordable and predictable food options.
                    </li>
                    <li className="flex items-start gap-3 px-4 py-3 rounded-lg bg-ivory-surface border border-hairline-light">
                      <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" />
                      Families need better organization around everyday meals.
                    </li>
                    <li className="flex items-start gap-3 px-4 py-3 rounded-lg bg-ivory-surface border border-hairline-light">
                      <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" />
                      Customers make repeated daily purchases without structured meal budgets.
                    </li>
                    <li className="flex items-start gap-3 px-4 py-3 rounded-lg bg-ivory-surface border border-hairline-light">
                      <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" />
                      Private chefs need more predictable customer demand.
                    </li>
                    <li className="flex items-start gap-3 px-4 py-3 rounded-lg bg-ivory-surface border border-hairline-light">
                      <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" />
                      Traditional ordering experiences do not necessarily solve advance meal planning.
                    </li>
                  </ul>
                  <blockquote className="font-display font-medium text-xl text-aubergine-deep italic leading-relaxed border-l-4 border-ochre-brushed pl-6 my-8 text-balance">
                    &ldquo;The problem isn&rsquo;t always getting food delivered. Sometimes, the bigger problem is having to think about what to eat every single day.&rdquo;
                  </blockquote>
                </div>
              </div>
            </section>

            {/* Product Vision */}
            <section aria-labelledby="vision-heading" className="border-t border-hairline-light pt-8">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-4">
                  <h2 id="vision-heading" className="font-display font-semibold text-3xl lg:text-4xl text-aubergine-deep mb-6">
                    Product Vision
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  <blockquote className="font-display font-semibold text-2xl lg:text-3xl text-ivory-silk leading-tight text-balance bg-aubergine-deep p-8 lg:p-12 rounded-xl border border-aubergine-border">
                    Making eating stress-free, healthy, and predictable.
                  </blockquote>
                  <p className="text-lg text-obsidian-text leading-relaxed mt-6">
                    Build a platform where customers can discover trusted chefs, select meals, arrange schedules, and prepay for planned meals.
                  </p>
                </div>
              </div>
            </section>

            {/* Business Model */}
            <section aria-labelledby="business-model-heading" className="border-t border-hairline-light pt-8">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-4">
                  <h2 id="business-model-heading" className="font-display font-semibold text-3xl lg:text-4xl text-aubergine-deep mb-6">
                    Business Model
                  </h2>
                </div>
                <div className="lg:col-span-8 grid md:grid-cols-2 gap-6 lg:gap-8">
                  <article className="rounded-xl p-6 lg:p-8 bg-aubergine-deep border border-aubergine-border">
                    <h3 className="font-display font-semibold text-lg text-ivory-silk mb-4 flex items-center gap-2">
                      <BuildingIcon className="h-5 w-5 text-ochre-brushed" aria-hidden="true" />
                      Customer Value
                    </h3>
                    <ul className="space-y-2 text-ivory-surface/80" role="list">
                      <li className="flex items-start gap-2"><span className="h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" /> Predictable meal planning</li>
                      <li className="flex items-start gap-2"><span className="h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" /> Better food budget visibility</li>
                      <li className="flex items-start gap-2"><span className="h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" /> Convenient scheduling</li>
                      <li className="flex items-start gap-2"><span className="h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" /> Access to trusted chefs</li>
                      <li className="flex items-start gap-2"><span className="h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" /> Reduced daily decision-making</li>
                    </ul>
                  </article>
                  <article className="rounded-xl p-6 lg:p-8 bg-aubergine-deep border border-aubergine-border">
                    <h3 className="font-display font-semibold text-lg text-ivory-silk mb-4 flex items-center gap-2">
                      <BuildingIcon className="h-5 w-5 text-ochre-brushed" aria-hidden="true" />
                      Chef & Food-Business Value
                    </h3>
                    <ul className="space-y-2 text-ivory-surface/80" role="list">
                      <li className="flex items-start gap-2"><span className="h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" /> More organized demand</li>
                      <li className="flex items-start gap-2"><span className="h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" /> Prepaid orders</li>
                      <li className="flex items-start gap-2"><span className="h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" /> Better production planning</li>
                      <li className="flex items-start gap-2"><span className="h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" /> Access to new customers</li>
                      <li className="flex items-start gap-2"><span className="h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" /> More predictable business opportunities</li>
                    </ul>
                  </article>
                </div>
              </div>
            </section>

            {/* Product Strategy */}
            <section aria-labelledby="strategy-heading" className="border-t border-hairline-light pt-8">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-4">
                  <h2 id="strategy-heading" className="font-display font-semibold text-3xl lg:text-4xl text-aubergine-deep mb-6">
                    Product Strategy
                  </h2>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  <p className="text-lg text-obsidian-text leading-relaxed">
                    QavaEat&rsquo;s product positioning is planned, scheduled, and prepaid meals &mdash; distinct from:
                  </p>
                  <ul className="space-y-3" role="list">
                    <li className="flex items-start gap-3 px-4 py-3 rounded-lg bg-ivory-surface border border-hairline-light">
                      <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" />
                      <strong>Instant food ordering</strong> &mdash; solves immediate demand, not planning
                    </li>
                    <li className="flex items-start gap-3 px-4 py-3 rounded-lg bg-ivory-surface border border-hairline-light">
                      <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" />
                      <strong>Traditional catering</strong> &mdash; event-focused, not everyday meals
                    </li>
                    <li className="flex items-start gap-3 px-4 py-3 rounded-lg bg-ivory-surface border border-hairline-light">
                      <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" />
                      <strong>Planned & prepaid everyday meals</strong> &mdash; QavaEat&rsquo;s differentiated positioning
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* UX and Product Decisions */}
            <section aria-labelledby="ux-heading" className="border-t border-hairline-light pt-8">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-4">
                  <h2 id="ux-heading" className="font-display font-semibold text-3xl lg:text-4xl text-aubergine-deep mb-6">
                    UX & Product Decisions
                  </h2>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  <div className="space-y-4">
                    {[
                      { title: 'Chef-first food discovery', desc: 'Lead with chef profiles and trust signals before meal catalogs to build confidence in the marketplace model.' },
                      { title: 'Meal selection and scheduling', desc: 'Reduce friction between selecting a meal and scheduling it by merging selection and calendar interaction into one flow.' },
                      { title: 'Prepaid meal plans and wallet experience', desc: 'Design a wallet UX that makes prepayment feel like budgeting, not commitment. Show remaining balance, upcoming meals, and flexibility.' },
                      { title: 'Delivery and collection distinction', desc: 'Clearly separate delivery (partner-managed) from self-collection. Transparent fulfilment options reduce confusion and set expectations.' },
                      { title: 'Multi-day meal planning', desc: 'Enable plans with different chefs, prices, and locations. Present understandable totals and per-meal details without overwhelming the user.' },
                      { title: 'Clear pricing and fulfilment information', desc: 'Surface total cost, delivery fees, and chef earnings upfront. Keep the 10% delivery partner commission visible as a partner charge, not a customer surcharge.' },
                    ].map((item, i) => (
                      <div key={i} className="rounded-lg p-4 lg:p-6 bg-ivory-surface border border-hairline-light">
                        <h4 className="font-display font-semibold text-lg text-aubergine-deep mb-1">{item.title}</h4>
                        <p className="text-obsidian-text leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Payments and Operational Architecture */}
            <section aria-labelledby="payments-heading" className="border-t border-hairline-light pt-8">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-4">
                  <h2 id="payments-heading" className="font-display font-semibold text-3xl lg:text-4xl text-aubergine-deep mb-6">
                    Payments & Operational Architecture
                  </h2>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  <p className="text-lg text-obsidian-text leading-relaxed">
                    The operational architecture connects payment collection, customer wallet transactions, order records, meal scheduling, payment reconciliation, chef settlement workflows, delivery partner commission, and fulfilment workflows.
                  </p>
                  <div className="rounded-xl p-6 lg:p-8 bg-aubergine-deep border border-aubergine-border">
                    <h4 className="font-display font-semibold text-lg text-ivory-silk mb-3 flex items-center gap-2">
                      <FileTextIcon className="h-5 w-5 text-ochre-brushed" aria-hidden="true" />
                      Important Commercial Detail
                    </h4>
                    <p className="text-ivory-surface/80 leading-relaxed">
                      QavaEat&rsquo;s 10% delivery commission is charged to the delivery partner, not the customer. This aligns product scope, operational responsibility, and business economics.
                    </p>
                  </div>
                  <ul className="grid md:grid-cols-2 gap-4" role="list">
                    {[
                      'Payment collection',
                      'Customer wallet transactions',
                      'Order records',
                      'Meal scheduling',
                      'Payment reconciliation',
                      'Chef settlement workflows',
                      'Delivery partner commission (10%)',
                      'Fulfilment & satisfaction workflows',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 px-4 py-3 rounded-lg bg-ivory-silk border border-hairline-light">
                        <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Technical Implementation */}
            <section aria-labelledby="tech-heading" className="border-t border-hairline-light pt-8">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-4">
                  <h2 id="tech-heading" className="font-display font-semibold text-3xl lg:text-4xl text-aubergine-deep mb-6">
                    Technical Implementation
                  </h2>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      'Next.js',
                      'React',
                      'Node.js',
                      'Supabase',
                      'Sanity',
                      'Vercel',
                      'Railway',
                      'Figma',
                      'GitHub',
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-ivory-surface border border-hairline-light text-sm text-obsidian-text"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-3" role="list">
                    <li className="flex items-start gap-3 px-4 py-3 rounded-lg bg-ivory-surface border border-hairline-light">
                      <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" />
                      <strong>Customer & chef profiles</strong> with onboarding and approval workflows
                    </li>
                    <li className="flex items-start gap-3 px-4 py-3 rounded-lg bg-ivory-surface border border-hairline-light">
                      <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" />
                      <strong>Meal-time configuration</strong> and scheduling engine
                    </li>
                    <li className="flex items-start gap-3 px-4 py-3 rounded-lg bg-ivory-surface border border-hairline-light">
                      <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" />
                      <strong>Meal plans & scheduling</strong> with multi-chef support
                    </li>
                    <li className="flex items-start gap-3 px-4 py-3 rounded-lg bg-ivory-surface border border-hairline-light">
                      <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" />
                      <strong>Wallet & transaction records</strong> with audit trail
                    </li>
                    <li className="flex items-start gap-3 px-4 py-3 rounded-lg bg-ivory-surface border border-hairline-light">
                      <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" />
                      <strong>Delivery & fulfilment integrations</strong> via partner APIs
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Delivery & Product Evolution */}
            <section aria-labelledby="evolution-heading" className="border-t border-hairline-light pt-8">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-4">
                  <h2 id="evolution-heading" className="font-display font-semibold text-3xl lg:text-4xl text-aubergine-deep mb-6">
                    Delivery & Product Evolution
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  <ol className="space-y-4" role="list">
                    {[
                      'Product concept and positioning',
                      'Product definition',
                      'UX design',
                      'Technical development',
                      'Mobile application launch',
                      'Continued product improvement',
                    ].map((stage, i) => (
                      <li key={i} className="relative pl-10 lg:pl-16 pb-8 border-l border-hairline-light last:border-0">
                        <span className="absolute left-0 top-0 lg:left-[-12px] lg:top-1 flex h-8 w-8 items-center justify-center rounded-full bg-ochre-brushed text-aubergine-core font-bold text-sm">
                          {i + 1}
                        </span>
                        <p className="font-display font-semibold text-lg text-aubergine-deep">{stage}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </section>

            {/* Outcomes */}
            <section aria-labelledby="outcomes-heading" className="border-t border-hairline-light pt-8">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-4">
                  <h2 id="outcomes-heading" className="font-display font-semibold text-3xl lg:text-4xl text-aubergine-deep mb-6">
                    Outcomes
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-lg text-obsidian-text leading-relaxed mb-6">
                    Verified milestone: Mobile application launched.
                  </p>
                  <p className="text-sm text-obsidian-muted italic mb-8">
                    The following are placeholders for verified metrics to be populated:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      'Active users',
                      'App downloads',
                      'Meal plans created',
                      'Successful transactions',
                      'Active chefs',
                      'Order fulfilment rate',
                      'Customer retention',
                    ].map((metric) => (
                      <div key={metric} className="p-4 rounded-lg bg-ivory-surface border border-hairline-light/50">
                        <p className="font-medium text-obsidian-text">{metric}</p>
                        <p className="text-sm text-obsidian-muted mt-1">[Placeholder &mdash; to be verified]</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Lessons Learned */}
            <section aria-labelledby="lessons-heading" className="border-t border-hairline-light pt-8">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-4">
                  <h2 id="lessons-heading" className="font-display font-semibold text-3xl lg:text-4xl text-aubergine-deep mb-6">
                    Lessons Learned
                  </h2>
                </div>
                <div className="lg:col-span-8 space-y-4">
                  {[
                    'Marketplace economics require careful balance between supply and demand incentives.',
                    'Designing for multiple user groups (customers, chefs, delivery partners) demands distinct but connected experiences.',
                    'Reducing UX friction in planning flows directly impacts conversion and retention.',
                    'Translating business models into technical requirements reveals hidden complexity early.',
                    'Operational complexity (delivery, payments, settlements) must be designed into the product architecture, not bolted on.',
                    'Product positioning fundamentally shapes product architecture &mdash; they cannot be decoupled.',
                  ].map((lesson, i) => (
                    <div key={i} className="flex items-start gap-3 px-4 py-3 rounded-lg bg-ivory-surface border border-hairline-light">
                      <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" />
                      <p className="text-obsidian-text leading-relaxed">{lesson}</p>
                    </div>
                  ))}
                </div>
              </div>
</section>
            </div>
          </article>
        </main>
      )
    }