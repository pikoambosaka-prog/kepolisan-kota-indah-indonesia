export function Profile() {
  return (
    <div className="max-w-3xl mx-auto text-ivory/90 leading-relaxed space-y-8">
      <p className="text-xl font-light">
        Kepolisian Kota Indah Indonesia hadir sebagai bagian dari sistem keamanan Kota Indah dengan menjunjung tinggi profesionalisme, integritas, kedisiplinan, dan tanggung jawab dalam setiap pelaksanaan tugas.
      </p>
      <p className="text-lg text-ivory/70">
        Dengan didukung oleh personel dari berbagai satuan dan divisi, Kepolisian Kota Indah berkomitmen untuk menciptakan lingkungan kota yang aman, tertib, dan kondusif bagi seluruh masyarakat.
      </p>
      <div className="pt-8 border-t border-champagne-gold/20">
        <h4 className="text-champagne-gold uppercase tracking-widest text-sm mb-4">Nilai Utama</h4>
        <ul className="grid grid-cols-2 gap-4 text-sm tracking-wide">
          <li className="flex items-center gap-2"><span>◈</span> Profesionalisme</li>
          <li className="flex items-center gap-2"><span>◈</span> Integritas</li>
          <li className="flex items-center gap-2"><span>◈</span> Kedisiplinan</li>
          <li className="flex items-center gap-2"><span>◈</span> Tanggung Jawab</li>
        </ul>
      </div>
    </div>
  );
}
