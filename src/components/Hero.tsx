import { motion } from 'motion/react';

export function Hero() {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-center px-6">
      <div className="absolute inset-0 bg-obsidian/60 z-10" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544256336-e57467669d67?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center z-0" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-20 flex flex-col items-center"
      >
        <h2 className="text-ivory/80 uppercase tracking-[0.3em] text-sm mb-4">Metropolitan Police Department</h2>
        <h1 className="text-6xl md:text-8xl font-light text-ivory mb-2 tracking-tighter">KEPOLISIAN<br />KOTA INDAH INDONESIA</h1>
        <p className="text-champagne-gold uppercase tracking-[0.2em] text-sm mt-8">PROTECT • SERVE • PRESERVE</p>
        
        <a href="#profil" className="mt-16 px-8 py-3 border border-champagne-gold/50 text-champagne-gold hover:bg-champagne-gold hover:text-obsidian transition-all uppercase tracking-widest text-xs">
          Explore Department
        </a>
      </motion.div>
      
      <div className="absolute bottom-12 left-12 z-20 text-muted-gray text-xs tracking-widest">01 / 05</div>
    </div>
  );
}
