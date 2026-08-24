export const commandStructure = [
  {
    role: "Kepala Kepolisian",
    name: "BAYY A. BIMANTARA",
    code: "TB 1",
    subordinate: {
      role: "Wakil Kepala Kepolisian",
      name: "MANGKULUHUR BIMANTARA",
      code: "TB 2",
      children: [
        { role: "Sekretaris Jendral", name: "SHENNA L. BIMANTARA" },
        {
          role: "Divisi PROPAM",
          heads: [
            { role: "Kepala Divisi PROPAM", name: "KURO SCHMIDT", code: "PM 1" },
            { role: "Wakil Kepala Divisi PROPAM", name: "OLIVER BIMANTARA J.K", code: "PM 2" },
          ]
        },
        {
          role: "Divisi Sabhara",
          heads: [
            { role: "Kepala Divisi Sabhara", name: "ALEXANDER JOSHUA MORTY", code: "Jaguar 1" },
            { role: "Wakil Kepala Divisi Sabhara", name: "-", code: "Jaguar 2" },
          ]
        },
        {
          role: "Divisi Polantas",
          heads: [
            { role: "Kepala Divisi Polantas", name: "HAZAMA XAVI BIMANTARA", code: "Zebra 1" },
            { role: "Wakil Kepala Divisi Polantas", name: "RICO A. BIMANTARA", code: "Zebra 2" },
          ]
        },
        {
          role: "Divisi Satuan Khusus",
          heads: [
            { role: "Kepala Divisi Satsus", name: "UCUP LION", code: "BM 1" },
            { role: "Wakil Kepala Divisi Satsus", name: "MARCO HIGGINS", code: "BM 2" },
          ]
        },
        {
          role: "Divisi Reserse Kriminal",
          heads: [
            { role: "Kepala Divisi Reskrim", name: "KAI ORSIX BIMANTARA", code: "Hantu 1" },
            { role: "Wakil Kepala Divisi Reskrim", name: "-", code: "Hantu 2" },
          ]
        }
      ]
    }
  }
];
