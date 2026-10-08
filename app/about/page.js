import PageHead from '@/components/PageHead';
import Sec from '@/components/Sec';
import CTA from '@/components/CTA';
export const metadata = { title: 'About', description: 'GP Autos Cars & Classics is a car dealer in Carrickfergus offering sales, service and transport.' };
export default function About() {
  return (
    <>
      <PageHead title="About GP Autos" text="Cars & classics, based in Carrickfergus." />
      <Sec>
        <div className="max-w-2xl space-y-4 text-lg text-white/75">
          <p>GP Autos Cars &amp; Classics is a car dealer based in Carrickfergus, offering sales, service and transport.</p>
          <p>Recent stock has ranged from everyday hatchbacks like the 2017 Toyota Aygo to rare low-mileage classics like the Mk1 Vauxhall Tigra. Every car is posted with photos and details on our Facebook page.</p>
          <p>Interested in something? Call, message us, or use the contact page and we&rsquo;ll get back to you.</p>
        </div>
      </Sec>
      <CTA />
    </>
  );
}
