'use client'

import { ArrowRightIcon, ArrowUpRightIcon } from './Icons'

const stats = [
  { value: '2', label: 'Active CTO roles', note: 'Qavaeat · Mama Sure' },
  { value: '42001', label: 'ISO/IEC certified', note: 'AI governance' },
  { value: '0→1', label: 'Early-stage products', note: 'Strategy to shipped' },
]

export function Hero() {
  return (
    <section
      className="hero relative isolate min-h-[100svh] overflow-hidden bg-aubergine-ground text-ivory-silk"
      aria-labelledby="hero-heading"
    >
      <style>{`
        @keyframes hero-word { from { opacity: 0; transform: translateY(5%) scale(1.02); } to { opacity: 1; transform: none; } }
        @keyframes hero-fade { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        .hero-word { animation: hero-word 1.4s cubic-bezier(.16,1,.3,1) both; }
        .hero-in { animation: hero-fade 1s cubic-bezier(.16,1,.3,1) both; animation-delay: var(--d, 0s); }
        @media (prefers-reduced-motion: reduce) { .hero-word, .hero-in { animation: none; } }
      `}</style>

      {/* Ambient light behind the portrait */}
      <div
        className="absolute inset-0 -z-20 bg-[radial-gradient(60%_55%_at_62%_40%,rgba(197,155,39,0.14),transparent_70%)]"
        aria-hidden="true"
      />

      {/* Oversized backdrop word */}
      <p
        className="hero-word pointer-events-none absolute inset-x-0 top-[9rem] -z-10 select-none text-center font-display font-extrabold uppercase leading-[0.78] tracking-[-0.04em] text-[clamp(6.5rem,25vw,24rem)] bg-gradient-to-b from-ochre-champagne via-ochre-brushed/70 to-transparent bg-clip-text text-transparent lg:top-[7rem]"
        aria-hidden="true"
      >
        Product
      </p>

      {/* Portrait, fading into the page at the base */}
      <div className="hero-in absolute inset-x-0 bottom-0 top-28 -z-0 flex justify-center lg:left-[22%] lg:right-[14%] lg:top-20" style={{ ['--d' as string]: '0.25s' }}>
        <img
          src="/keith-koki.png"
          alt="Keith Koki"
          className="h-full w-auto max-w-none object-contain object-bottom [mask-image:linear-gradient(to_bottom,#000_72%,transparent_100%)]"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Legibility vignettes */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(10,0,13,0.85)_0%,rgba(10,0,13,0.25)_45%,transparent_70%)]" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 z-[1] h-1/3 bg-gradient-to-t from-aubergine-ground to-transparent" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[90rem] flex-col justify-between px-6 pb-10 pt-24 lg:px-12 lg:pt-28">
        {/* Top meta row */}
        <div className="hero-in flex items-start justify-between text-sm text-ivory-surface/70" style={{ ['--d' as string]: '0.6s' }}>
          <p className="leading-snug">
            Product Management
            <br />
            &amp; CTO Scaling
          </p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-ochre-champagne" aria-hidden="true" />
            Open to advisory &amp; retainers
          </p>
        </div>

        {/* Lower composition */}
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6 xl:col-span-5">
            <p
              className="hero-in font-script text-3xl text-ochre-champagne lg:text-4xl"
              style={{ ['--d' as string]: '0.7s' }}
            >
              Hello, I&rsquo;m
            </p>

            <h1
              id="hero-heading"
              className="hero-in mt-1 font-display text-[clamp(3.5rem,9vw,8rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.03em] text-ivory-silk"
              style={{ ['--d' as string]: '0.8s' }}
            >
              Keith
              <br />
              Koki
            </h1>

            <p
              className="hero-in mt-6 text-lg font-medium text-ochre-champagne lg:text-xl"
              style={{ ['--d' as string]: '0.95s' }}
            >
              CTO &amp; Product Leader
            </p>

            <p
              className="hero-in mt-4 max-w-md text-base leading-relaxed text-ivory-surface/75"
              style={{ ['--d' as string]: '1.05s' }}
            >
              I turn early-stage ambiguity into products people choose, bridging product strategy,
              engineering architecture and institutional AI governance.
            </p>

            <div
              className="hero-in mt-8 flex flex-wrap items-center gap-x-8 gap-y-4"
              style={{ ['--d' as string]: '1.15s' }}
            >
              <button
                type="button"
                className="group inline-flex items-center gap-2 rounded-full bg-ochre-brushed px-7 py-3.5 text-base font-medium text-aubergine-core transition-colors duration-300 hover:bg-ochre-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-aubergine-ground"
              >
                Selected work
                <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="group inline-flex items-center gap-1.5 border-b border-ivory-surface/30 pb-1 text-base text-ivory-surface transition-colors duration-300 hover:border-ochre-champagne hover:text-ochre-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-champagne focus-visible:ring-offset-4 focus-visible:ring-offset-aubergine-ground"
              >
                Advisory &amp; retainers
                <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Stats: open column, hairline separated, no boxes */}
          <dl
            className="hero-in lg:col-span-4 lg:col-start-9 xl:col-span-3 xl:col-start-10"
            style={{ ['--d' as string]: '1.25s' }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center justify-between gap-6 border-t border-ivory-surface/15 py-5 first:border-t-0 lg:justify-end"
              >
                <dd className="order-1 font-display text-5xl font-semibold tabular-nums text-ochre-champagne lg:order-none lg:text-6xl">
                  {s.value}
                </dd>
                <dt className="max-w-[9rem] text-sm leading-snug text-ivory-surface/70 lg:order-none">
                  <span className="block text-ivory-surface">{s.label}</span>
                  {s.note}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}