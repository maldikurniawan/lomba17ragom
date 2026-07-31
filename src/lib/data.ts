export const acara = {
  judul: 'Peringatan HUT ke-81 Kemerdekaan Republik Indonesia',
  tahun: 2026,
  penyelenggara: 'Pemuda Pemudi RT 01',
  lokasiSingkat: 'Ragom Gawi Permai 1, RT 01 / RW 01',
  kelurahan: 'Kelurahan Bukit Kemiling Permai',
  kota: 'Bandar Lampung',
  tema: 'Menjaga Persatuan, Menguatkan Gotong Royong, Menuju RT 01 yang Solid dan Mandiri.'
}

export const jadwalUtama = [
  {
    label: 'Rangkaian Perlombaan',
    tanggal: '8–9 & 15–16 Agustus 2026',
    waktu: '08.00 – 17.00 WIB',
    tempat: 'Halaman Warga RT 01',
    keterangan: 'Sabtu–Minggu, dua akhir pekan berturut-turut.'
  },
  {
    label: 'Malam Puncak & Syukuran',
    tanggal: 'Senin, 17 Agustus 2026',
    waktu: '19.30 WIB – selesai',
    tempat: 'Halaman Warga RT 01',
    keterangan: 'Potong tumpeng, bagi hadiah, hiburan orgen.'
  }
]

export const kategoriPeserta = [
  { nama: 'Anak-anak', rentang: '3–5 tahun' },
  { nama: 'Anak-anak Sekolah', rentang: '6–12 tahun' },
  { nama: 'Remaja & Pemuda Pemudi', rentang: '13–20 tahun' },
  { nama: 'Ibu-Ibu', rentang: 'Warga RT 01' },
  { nama: 'Bapak-Bapak', rentang: 'Warga RT 01' },
  { nama: 'Seluruh Warga', rentang: 'Lingkungan RT 01' }
]

export const lomba = [
  {
    key: 'anak',
    kategori: 'Anak-anak',
    warna: 'default' as const,
    daftar: [
      'Makan kerupuk',
      'Memancing paku ke botol',
      'Balap karung helm',
      'Tiup bola pingpong dalam air',
      'Bola dalam kardus',
      'Cantol besek',
      'Estafet kardus',
      'Injak balon sampai pecah'
    ]
  },
  {
    key: 'ibu',
    kategori: 'Ibu-Ibu',
    warna: 'gold' as const,
    daftar: [
      'Lempar balon pakai sarung',
      'Joget balon berpasangan',
      'Cantol besek',
      'Menebak barang dalam kardus',
      'Karaoke'
    ]
  },
  {
    key: 'bapak',
    kategori: 'Bapak-Bapak',
    warna: 'daun' as const,
    daftar: ['Joget balon pakai daster', 'Cantol besek', 'Gaplek']
  },
]

export const panitia = [
  { jabatan: 'Penanggung Jawab', nama: 'Zairi Bakar (Ketua RT 01)' },
  { jabatan: 'Pembina Panitia', nama: 'Samsul Arief' },
  { jabatan: 'Ketua Panitia', nama: 'Egy Anggita' },
  { jabatan: 'Wakil Ketua', nama: 'M. Prayoga' },
  { jabatan: 'Sekretaris', nama: 'Metha & Aulia' },
  { jabatan: 'Bendahara', nama: 'Nadia & Selvi' },
  { jabatan: 'Seksi Acara', nama: 'Selfi Tri Rahayu (Koordinator)' },
  { jabatan: 'Seksi Perlengkapan', nama: 'Firman & Andra (Koordinator)' },
  { jabatan: 'Seksi Konsumsi', nama: 'Diva & Tika (Koordinator)' },
  {
    jabatan: 'Seksi Dokumentasi',
    nama: 'Rahma, Aziz, Icha, Aldi, Lumitha, Fadli (Koordinator)'
  },
  { jabatan: 'Seksi Keamanan & Kebersihan', nama: 'Warga RT 01' }
]

export const anggaran = {
  total: 'Rp 12.200.000',
  dariWarga: 'Rp 6.500.000',
  sumberLain: 'Proposal Sponsorship & Donatur Perusahaan Lokal',
  rincian: [
    { item: 'Sewa sound system, dekorasi & spanduk', biaya: 'Rp 2.500.000' },
    { item: 'Peralatan & perlengkapan lomba', biaya: 'Rp 1.500.000' },
    { item: 'Hadiah pemenang lomba (17 kategori)', biaya: 'Rp 1.700.000' },
    { item: 'Konsumsi panitia & juri (4 hari)', biaya: 'Rp 1.250.000' },
    { item: 'Konsumsi malam puncak warga', biaya: 'Rp 2.000.000' },
    { item: 'Aqua dus, gula, kopi & teh', biaya: 'Rp 700.000' },
    { item: 'Seragam/vest panitia', biaya: 'Rp 1.550.000' },
    { item: 'Operasional panitia', biaya: 'Rp 500.000' },
    { item: 'Dana tak terduga / cadangan', biaya: 'Rp 500.000' }
  ]
}

export const timeline = [
  {
    minggu: 'Minggu I – Juli 2026',
    agenda: 'Pembentukan panitia, penyusunan proposal, pengesahan RT.'
  },
  {
    minggu: 'Minggu II – Juli 2026',
    agenda: 'Pendistribusian proposal sponsor & penarikan iuran warga.'
  },
  {
    minggu: 'Minggu I – Agustus 2026',
    agenda: 'Pembelian hadiah, belanja logistik, kerja bakti arena lomba.'
  },
  {
    minggu: '8–9 & 15–16 Agustus 2026',
    agenda: 'Eksekusi seluruh perlombaan warga di lapangan RT 01.'
  },
  {
    minggu: '17 Agustus 2026',
    agenda: 'Malam puncak kemerdekaan & pembagian hadiah.'
  }
]

export const penutup = {
  kota: 'Bandar Lampung',
  tanggal: '7 Agustus 2026',
  ketua: 'Egy Anggita',
  sekretaris: 'Metha Aisyah Ramadhani',
  ketuaRt: 'Zairi Bakar'
}
