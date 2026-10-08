'use client';
import { useState } from 'react';
import { EMAIL, WA } from '@/lib/data';
const types = ['Buying a car', 'Selling / part exchange', 'Servicing', 'Transport', 'Other'];
export default function ContactForm({ light = false }) {
  const [f, setF] = useState({ name: '', phone: '', type: types[0], message: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const body = () => `Hi GP Autos, my name is ${f.name || '-'}.\nPhone: ${f.phone || '-'}\nEnquiry: ${f.type}\n\n${f.message || ''}`;
  const input = light ? 'border-navy/25 bg-white text-navy focus:border-navy' : 'border-white/20 bg-deep text-white focus:border-ice';
  const cls = `w-full rounded-sm border px-4 py-3 outline-none ${input}`;
  const lab = `mb-1 block text-sm font-semibold ${light ? 'text-navy' : 'text-white'}`;
  return (
    <div className="grid max-w-2xl gap-4">
      <div><label htmlFor="name" className={lab}>Name</label><input id="name" value={f.name} onChange={set('name')} className={cls} /></div>
      <div><label htmlFor="phone" className={lab}>Phone</label><input id="phone" value={f.phone} onChange={set('phone')} className={cls} /></div>
      <div><label htmlFor="type" className={lab}>What do you need?</label><select id="type" value={f.type} onChange={set('type')} className={cls}>{types.map((t) => <option key={t}>{t}</option>)}</select></div>
      <div><label htmlFor="message" className={lab}>Your message</label><textarea id="message" rows={4} value={f.message} onChange={set('message')} className={cls} placeholder="e.g. Interested in the Toyota Aygo, is it still available?" /></div>
      <div className="flex flex-wrap gap-3">
        <a href={`mailto:${EMAIL}?subject=${encodeURIComponent('Enquiry: ' + f.type)}&body=${encodeURIComponent(body())}`} className="rounded-sm bg-ice px-6 py-3 font-semibold text-white transition hover:bg-ice2">Send by email</a>
        <a href={`${WA}?text=${encodeURIComponent(body())}`} target="_blank" rel="noreferrer" className={`rounded-sm border px-6 py-3 font-semibold transition ${light ? 'border-navy/40 text-navy hover:bg-navy hover:text-white' : 'border-white/30 hover:border-ice hover:text-ice'}`}>Send on WhatsApp</a>
      </div>
    </div>
  );
}
