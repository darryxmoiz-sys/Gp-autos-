export default function PostEmbed({ url }) {
  const src = `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(url)}&show_text=true&width=340`;
  return (
    <div className="mx-auto w-full max-w-[340px]">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-white shadow-xl shadow-black/40">
        <iframe src={src} width="340" height="640" style={{ border: 'none', overflow: 'hidden', width: '100%' }} scrolling="no"
          loading="lazy" allow="encrypted-media; picture-in-picture; web-share" title="GP Autos Facebook post" />
      </div>
      <a href={url} target="_blank" rel="noreferrer" className="mt-2 block text-center text-sm text-white/60 hover:text-ice">View on Facebook</a>
    </div>
  );
}
