import { teamPhotos } from '../data';

export function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {teamPhotos.map((photo) => (
        <div key={photo.id} className="overflow-hidden rounded-lg border border-ivory/10 hover:border-champagne-gold/50 transition-all">
          <img 
            src={photo.src} 
            alt={photo.alt} 
            className={`w-full h-64 ${photo.id === 2 ? 'object-contain' : 'object-cover'} hover:scale-105 transition-transform duration-500`} 
            referrerPolicy="no-referrer"
          />
        </div>
      ))}
    </div>
  );
}
