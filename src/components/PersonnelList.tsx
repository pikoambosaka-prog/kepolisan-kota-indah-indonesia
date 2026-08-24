import { personnelData } from '../personnelData';
import { useState } from 'react';

export function PersonnelList() {
  const [filter, setFilter] = useState('Semua');
  const divisions = ['Semua', ...Array.from(new Set(personnelData.map(p => p.division)))];

  const filteredData = filter === 'Semua' 
    ? personnelData 
    : personnelData.filter(p => p.division === filter);

  // Group by leaders (Kadiv/Wakadiv etc) and members (Anggota)
  const leaders = filteredData.filter(p => p.position.includes('KADIV') || p.position.includes('KEPALA') || p.position.includes('WAKIL') || p.position.includes('SEKJEN'));
  const members = filteredData.filter(p => !p.position.includes('KADIV') && !p.position.includes('KEPALA') && !p.position.includes('WAKIL') && !p.position.includes('SEKJEN'));

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex gap-2 mb-12 justify-center flex-wrap">
        {divisions.map(d => (
          <button 
            key={d}
            onClick={() => setFilter(d)}
            className={`px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest transition ${filter === d ? 'bg-champagne-gold text-obsidian' : 'bg-graphite text-ivory hover:bg-graphite/80'}`}
          >
            {d}
          </button>
        ))}
      </div>
      
      {leaders.length > 0 && (
        <div className="mb-12">
          <h4 className="text-champagne-gold text-sm uppercase tracking-widest mb-6">Pimpinan</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {leaders.map((person, i) => (
              <div key={i} className="bg-deep-navy border border-ivory/10 p-4 rounded-lg hover:border-champagne-gold/50 transition-all">
                <p className="text-champagne-gold text-[10px] uppercase tracking-widest">{person.rank}</p>
                <h3 className="text-ivory text-sm font-medium mt-1">{person.name}</h3>
                <p className="text-muted-gray text-[10px] uppercase tracking-widest mt-2">{person.position}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {members.length > 0 && (
        <div>
          <h4 className="text-muted-gray text-sm uppercase tracking-widest mb-6">Anggota</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {members.map((person, i) => (
              <div key={i} className="bg-graphite/30 border border-ivory/5 p-3 rounded-lg hover:border-ivory/20 transition-all">
                <p className="text-champagne-gold text-[9px] uppercase">{person.rank}</p>
                <h3 className="text-ivory text-xs mt-0.5">{person.name}</h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
