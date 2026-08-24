export function Navigation({ sections }: { sections: { id: string, title: string }[] }) {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl bg-graphite/60 backdrop-blur-xl border border-ivory/10 rounded-2xl z-50">
      <div className="px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <img src="/logopolisi.png" alt="Logo KKII" className="h-10 w-auto" referrerPolicy="no-referrer" />
            <div className="font-bold text-lg text-champagne-gold tracking-widest">KKII</div>
        </div>
        <div className="flex gap-8">
          {sections.filter(s => s.id !== 'beranda').map((section) => (
            <a key={section.id} href={`#${section.id}`} className="text-xs uppercase tracking-widest text-ivory/70 hover:text-champagne-gold transition-colors">
              {section.title}
            </a>
          ))}
          <a href="#portal" className="text-xs uppercase tracking-widest text-champagne-gold border border-champagne-gold/30 px-4 py-2 rounded-lg hover:bg-champagne-gold/10 transition-colors">
            Command Portal
          </a>
        </div>
      </div>
    </nav>
  );
}
