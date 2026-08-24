import { commandStructure } from '../commandStructure';

export function CommandStructure() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {commandStructure.map((leader, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="text-center bg-graphite border border-champagne-gold/20 p-6 rounded-lg w-full max-w-sm">
            <h3 className="text-champagne-gold uppercase tracking-widest text-xs mb-1">{leader.role}</h3>
            <p className="text-2xl font-light text-ivory">{leader.name}</p>
            <p className="text-sm text-muted-gray mt-1">{leader.code}</p>
          </div>
          
          <div className="w-px h-12 bg-champagne-gold/30 my-2" />
          
          <div className="text-center bg-graphite border border-champagne-gold/20 p-6 rounded-lg w-full max-w-sm">
            <h3 className="text-champagne-gold uppercase tracking-widest text-xs mb-1">{leader.subordinate.role}</h3>
            <p className="text-xl font-light text-ivory">{leader.subordinate.name}</p>
            <p className="text-sm text-muted-gray mt-1">{leader.subordinate.code}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full">
            {leader.subordinate.children.map((child, j) => (
              <div key={j} className="bg-deep-navy border border-ivory/5 p-4 rounded-lg">
                <h4 className="text-champagne-gold/80 text-xs uppercase tracking-widest mb-3">{child.role}</h4>
                {child.heads ? (
                  <div className="space-y-2">
                    {child.heads.map((h, k) => (
                      <div key={k} className="border-t border-ivory/5 pt-2">
                        <p className="text-ivory text-sm">{h.name}</p>
                        <p className="text-xs text-muted-gray">{h.role} • {h.code}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-ivory text-sm">{child.name}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
