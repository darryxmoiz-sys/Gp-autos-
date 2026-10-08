import PageHead from '@/components/PageHead';
import Sec from '@/components/Sec';
import CTA from '@/components/CTA';
import { services } from '@/lib/data';
export const metadata = { title: 'Services', description: 'Car sales, servicing and vehicle transport in Carrickfergus.' };
export default function Services() {
  return (
    <>
      <PageHead title="Sales | Service | Transport" text="Everything for your car, from one local team." />
      <Sec>
        {services.map(([t, d]) => (
          <div key={t} className="group grid gap-2 border-t border-white/15 py-7 md:grid-cols-2 md:px-4">
            <h2 className="h text-xl transition group-hover:translate-x-2 group-hover:text-ice md:text-3xl">{t}</h2>
            <p className="text-white/70">{d}</p>
          </div>
        ))}
      </Sec>
      <CTA />
    </>
  );
}
