import PageHead from '@/components/PageHead';
import PostEmbed from '@/components/PostEmbed';
import ReelEmbed from '@/components/ReelEmbed';
import Sec from '@/components/Sec';
import CTA from '@/components/CTA';
import { posts, reel, FB } from '@/lib/data';
export const metadata = { title: 'Our cars', description: 'Latest used cars and classics from GP Autos Cars & Classics, Carrickfergus.' };

export default function Cars() {
  return (
    <>
      <PageHead title="Our cars" text="Our latest stock, live from our Facebook page. Message us about any car you like." />
      <Sec>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{posts.map((u) => <PostEmbed key={u} url={u} />)}</div>
        <div className="mt-12 grid items-center gap-8 md:grid-cols-2"><ReelEmbed url={reel} />
          <div><h2 className="h text-2xl text-ice">More on Facebook</h2><p className="mt-3 text-white/70">New cars are posted all the time. Follow our page to see them first.</p>
            <a href={FB} target="_blank" rel="noreferrer" className="mt-5 inline-block rounded-sm bg-ice px-6 py-3 font-semibold text-white transition hover:bg-ice2">Visit our Facebook page</a></div></div>
      </Sec>
      <CTA />
    </>
  );
}
