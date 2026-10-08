import './globals.css';
import Link from 'next/link';
import { Rajdhani, Inter } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import Preloader from '@/components/Preloader';
import Nav from '@/components/Nav';
import FloatingButtons from '@/components/FloatingButtons';
import { PHONE_DISPLAY, TEL, EMAIL, FB } from '@/lib/data';

const display = Rajdhani({ subsets: ['latin'], weight: ['700'], variable: '--font-display' });
const body = Inter({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-body' });

export const metadata = {
  title: { default: 'GP Autos Cars & Classics | Used Cars, Service & Transport, Carrickfergus', template: '%s | GP Autos Cars & Classics' },
  description: 'GP Autos Cars & Classics in Carrickfergus: quality used cars and classics, servicing and vehicle transport. See our latest stock.',
};
const schema = { '@context': 'https://schema.org', '@type': 'AutoDealer', name: 'GP Autos Cars & Classics', telephone: '+447590921616', email: 'gpautoscarsandclassics@gmail.com', address: { '@type': 'PostalAddress', addressLocality: 'Carrickfergus', addressCountry: 'GB' } };

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <SmoothScroll /><Preloader /><Nav />
        <main className="overflow-x-clip">{children}</main>
        <footer className="bg-deep px-5 py-12 text-sm text-white/50">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            <div><img src="/logo-wide.png" alt="GP Autos Cars & Classics" className="h-10 w-auto" /><p className="mt-3">Sales | Service | Transport. Based in Carrickfergus.</p></div>
            <div className="space-y-1"><Link href="/cars" className="block hover:text-ice">Cars</Link><Link href="/services" className="block hover:text-ice">Services</Link><Link href="/about" className="block hover:text-ice">About</Link><Link href="/contact" className="block hover:text-ice">Contact</Link></div>
            <div className="space-y-1"><a href={TEL} className="block hover:text-ice">{PHONE_DISPLAY}</a><a href={`mailto:${EMAIL}`} className="block break-all hover:text-ice">{EMAIL}</a><a href={FB} target="_blank" rel="noreferrer" className="block hover:text-ice">Facebook</a></div>
          </div>
        </footer>
        <FloatingButtons />
      </body>
    </html>
  );
}
