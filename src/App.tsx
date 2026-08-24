/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Profile } from './components/Profile';
import { News } from './components/News';
import { Gallery } from './components/Gallery';
import { CommandStructure } from './components/CommandStructure';
import { PersonnelList } from './components/PersonnelList';
import { Contact } from './components/Contact';
import { SectionReveal } from './components/SectionReveal';

export default function App() {
  const sections = [
    { id: 'beranda', title: 'Beranda' },
    { id: 'profil', title: 'Profil' },
    { id: 'struktur', title: 'Struktur Organisasi' },
    { id: 'personel', title: 'Personel' },
    { id: 'berita', title: 'Berita' },
    { id: 'galeri', title: 'Galeri' },
    { id: 'kontak', title: 'Kontak' },
  ];

  return (
    <div className="min-h-screen bg-obsidian text-ivory font-sans">
      <Navigation sections={sections} />

      <main>
        <section id="beranda">
          <Hero />
        </section>
        
        {sections.slice(1).map((section) => (
          <section key={section.id} id={section.id} className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-ivory/10">
            <SectionReveal>
              <h2 className="text-4xl md:text-5xl font-light mb-16 tracking-tighter text-champagne-gold">{section.title}</h2>
              <div className="space-y-12">
                {section.id === 'profil' && <Profile />}
                {section.id === 'berita' && <News />}
                {section.id === 'galeri' && <Gallery />}
                {section.id === 'struktur' && <CommandStructure />}
                {section.id === 'personel' && <PersonnelList />}
                {section.id === 'kontak' && <Contact />}
              </div>
            </SectionReveal>
          </section>
        ))}
      </main>
    </div>
  );
}
