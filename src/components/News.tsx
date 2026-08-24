import { newsData } from '../newsData';

export function News() {
  const mainNews = newsData[0];
  const otherNews = newsData.slice(1);

  return (
    <div className="space-y-12">
      {/* Main Feature */}
      <div className="grid md:grid-cols-2 gap-8 items-center bg-deep-navy p-8 rounded-2xl border border-ivory/10">
        <img 
          src="/patroli.png" 
          alt="Berita Utama" 
          className="h-64 w-full object-cover rounded-lg"
          referrerPolicy="no-referrer"
        />
        <div>
          <span className="text-champagne-gold text-xs uppercase tracking-widest">Berita Utama</span>
          <h3 className="text-3xl font-light text-ivory mt-2 mb-4 tracking-tighter">{mainNews.title}</h3>
          <p className="text-ivory/70 mb-6">{mainNews.summary}</p>
          <a href="#" className="text-champagne-gold uppercase tracking-widest text-sm hover:underline">
            Read Story →
          </a>
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherNews.map((news) => (
          <div key={news.id} className="bg-deep-navy p-6 rounded-xl border border-ivory/5 hover:border-ivory/10 transition">
            <h4 className="text-ivory font-light mb-3">{news.title}</h4>
            <p className="text-ivory/60 text-sm mb-4">{news.summary}</p>
            <a href="#" className="text-champagne-gold uppercase tracking-widest text-xs hover:underline">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
