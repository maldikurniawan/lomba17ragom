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
    tanggal: '8-9 & 15-16 Agustus 2026',
    waktu: '08.00 - 17.00 WIB',
    tempat: 'Halaman Warga RT 01',
    keterangan: 'Sabtu-Minggu, dua akhir pekan berturut-turut.'
  },
  {
    label: 'Malam Puncak & Syukuran',
    tanggal: 'Senin, 17 Agustus 2026',
    waktu: '19.30 WIB - selesai',
    tempat: 'Halaman Warga RT 01',
    keterangan: 'Potong tumpeng, bagi hadiah, hiburan orgen.'
  }
]

export const kategoriPeserta = [
  { nama: 'Anak-anak', rentang: '3-5 tahun' },
  { nama: 'Anak-anak Sekolah', rentang: '6-12 tahun' },
  { nama: 'Remaja & Pemuda Pemudi', rentang: '13-20 tahun' },
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
  }
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

export const penutup = {
  kota: 'Bandar Lampung',
  ketua: 'Egy Anggita',
  sekretaris: 'Metha Aisyah Ramadhani',
  ketuaRt: 'Zairi Bakar'
}
