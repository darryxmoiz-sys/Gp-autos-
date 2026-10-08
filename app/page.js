import Link from 'next/link';
import Reveal from '@/components/Reveal';
import PostEmbed from '@/components/PostEmbed';
import ReelEmbed from '@/components/ReelEmbed';
import Sec, { Card } from '@/components/Sec';
import CTA from '@/components/CTA';
import { PHONE_DISPLAY, TEL, services, posts, reel } from '@/lib/data';

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy md:flex md:min-h-[640px] md:items-center md:px-5 md:py-28">
        <picture className="hero-img relative block h-[250px] w-full md:absolute md:inset-y-0 md:right-0 md:-z-10 md:h-auto md:w-[72%]">
          <source media="(min-width: 768px)" srcSet="/hero.jpg" />
          <img src="/hero-mobile.jpg" alt="" className="h-full w-full object-cover object-center" />
        </picture>
        <div className="hero-shade absolute inset-0 -z-10 hidden md:block" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-14 pt-2 md:p-0">
          <div className="max-w-lg">
            <Reveal delay={0.1}><p className="mb-3 font-semibold text-ice">Carrickfergus &middot; Sales | Service | Transport</p></Reveal>
            <Reveal delay={0.25}><h1 className="h text-4xl sm:text-5xl md:text-6xl">Quality cars <span className="text-ice">&amp; classics.</span></h1></Reveal>
            <Reveal delay={0.4}><p className="mt-5 max-w-md text-lg text-white/80">GP Autos Cars &amp; Classics. Browse our latest stock, then call or message to ask about a car.</p></Reveal>
            <Reveal delay={0.55} className="mt-8 flex flex-wrap gap-3">
              <a href={TEL} className="rounded-sm bg-ice px-7 py-4 font-semibold text-white transition hover:bg-ice2">Call {PHONE_DISPLAY}</a>
              <Link href="/cars" className="rounded-sm border border-white/30 px-7 py-4 transition hover:border-ice hover:text-ice">See our cars</Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ice text-white">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-5 py-5 text-center text-sm font-semibold md:grid-cols-4 md:text-base">
          {['Used cars', 'Classics', 'Servicing & transport', 'Carrickfergus'].map((t) => <li key={t}>{t}</li>)}
        </ul>
      </section>

      <Sec title="Latest from the forecourt" intro="Straight from our Facebook page, so you always see the newest cars.">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{posts.slice(0, 3).map((u) => <PostEmbed key={u} url={u} />)}</div>
        <Link href="/cars" className="mt-8 inline-block font-semibold text-ice hover:underline">See all cars</Link>
      </Sec>

      <Sec tone="light" title="What we do">
        <div className="grid gap-5 md:grid-cols-3">{services.map(([t, d]) => <Card key={t} light><h3 className="h text-xl text-navy">{t}</h3><p className="mt-2 text-sm text-navy/70">{d}</p></Card>)}</div>
      </Sec>

      <Sec title="Watch the latest reel">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <ReelEmbed url={reel} />
          <div>
            <p className="text-white/70">Walkarounds and new arrivals are posted on our Facebook page. Follow us to see new cars as soon as they land.</p>
            <Link href="/contact" className="mt-5 inline-block rounded-sm bg-ice px-6 py-3 font-semibold text-white transition hover:bg-ice2">Ask about a car</Link>
          </div>
        </div>
      </Sec>
      <CTA />
    </>
  );
}
