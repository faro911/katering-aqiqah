// Data informasi usaha & katalog Bu Siti Catering & Aqiqah Semarang (Ayu Catering)

export const DEFAULT_BUSINESS_INFO = {
  name: "Bu Siti Catering & Aqiqah Semarang",
  shortName: "Bu Siti Catering & Aqiqah",
  subName: "Ayu Catering Semarang",
  tagline: "Layanan Katering Prasmanan, Nasi Kotak & Aqiqah Siap Saji Semarang",
  slogan: "Halal, Higienis, Masakan Lezat Kaya Rempah & Pilihan Menu Komplit",
  address: "Jl. Kanguru Selatan 9C No. 53, Gayamsari, Kota Semarang, Jawa Tengah 50248",
  addressNote: "Gayamsari, Kota Semarang (Layanan Katering & Aqiqah Berpengalaman)",
  whatsapp: "082136551067",
  whatsappDisplay: "0821-3655-1067",
  instagram: "@busiticatering_aqiqah",
  instagramUrl: "https://instagram.com",
  googleMapsUrl: "https://maps.app.goo.gl/xKBmHLdNMyiD8t1HA",
  mapsEmbedQuery: "Jl.+Kanguru+Selatan+9C+No.+53+Gayamsari+Semarang",
  openingHours: "Setiap Hari 06.00 – 21.00 WIB",
  deliveryAreas: [
    "Gayamsari & Pedurungan",
    "Semarang Timur & Selatan",
    "Semarang Tengah & Barat",
    "Banyumanik & Tembalang",
    "Genuk & Sekitarnya"
  ],
  stats: {
    satisfiedClients: "2.100+",
    googleRating: "4.9",
    totalReviews: "80+",
    experienceYears: "10+"
  }
};

export const ADVANTAGES = [
  {
    id: 1,
    title: "100% Sesuai Syariat Islam",
    desc: "Hewan sehat, cukup umur (poel), tidak cacat, dan disembelih oleh juru sembelih bersertifikat halal & syar'i.",
    icon: "ShieldCheck",
    badge: "Syar'i Guarantee"
  },
  {
    id: 2,
    title: "Spesialis Katering & Aqiqah Komplit",
    desc: "Melayani paket aqiqah siap saji, prasmanan pesta/hajatan, nasi box rapat, snack box, tumpeng, hingga catering harian kantor.",
    icon: "Utensils",
    badge: "Serba Lengkap"
  },
  {
    id: 3,
    title: "Dokumentasi Foto & Video Sembelih",
    desc: "Proses penyembelihan divideokan dengan menyebutkan nama buah hati dan orang tua secara jelas, dikirim via WhatsApp.",
    icon: "Video",
    badge: "Bukti Otentik"
  },
  {
    id: 4,
    title: "Masakan Lezat Tanpa Bau Prengus",
    desc: "Daging diolah dengan bumbu rempah nusantara khas racikan Bu Siti. Daging empuk meresap, lezat mantap, dan dijamin bebas bau prengus.",
    icon: "Flame",
    badge: "Koki Ahli"
  },
  {
    id: 5,
    title: "Gratis Ongkir Area Semarang",
    desc: "Layanan antar tepat waktu dengan armada khusus untuk wilayah Gayamsari, Pedurungan, Semarang Selatan, Timur, Barat, hingga Tembalang.",
    icon: "Truck",
    badge: "Free Delivery"
  },
  {
    id: 6,
    title: "Bonus Sertifikat & Bingkai Eksklusif",
    desc: "Setiap pemesanan aqiqah mendapatkan sertifikat resmi cetak nama anak berbingkai cantik, risalah aqiqah & boneka souvenir.",
    icon: "Award",
    badge: "Bonus Menarik"
  },
  {
    id: 7,
    title: "Penyaluran ke Panti Asuhan / Dhuafa",
    desc: "Bagi yang ingin langsung bersedekah, kami siap membantu menyalurkan masakan aqiqah ke panti asuhan atau pesantren binaan di Semarang.",
    icon: "HeartHandshake",
    badge: "Penyaluran Amanah"
  }
];

export const PACKAGES = [
  // Paket Nasi Box Lengkap
  {
    id: "box-hemat",
    category: "box",
    name: "Paket Nasi Box Hemat",
    badge: "Paling Terjangkau",
    popular: false,
    price: 1850000,
    pricePerBox: 37000,
    portion: "50 Kotak",
    meatYield: "200 Tusuk Sate + 50 Porsi Gule",
    description: "Pilihan pas untuk syukuran keluarga inti atau dibagikan ke tetangga terdekat dengan menu komplit.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=700&auto=format&fit=crop&q=80",
    includes: [
      "1 Ekor Kambing/Domba Sehat Cukup Umur",
      "50 Box Nasi Putih Pulen Wangi",
      "200 Tusuk Sate Kambing Bumbu Kacang/Kecap",
      "50 Porsi Gule Kambing Kuah Rempah Gurih",
      "Sambal Goreng Kentang Ati / Oseng Buncis",
      "Acar Timun Wortel Segar & Sambal",
      "Kerupuk Udang Gurih & Buah Segar",
      "Sertifikat Aqiqah Eksklusif + Pigura",
      "Risalah Doa & Stiker Nama Anak di Tiap Box",
      "Gratis Ongkir Area Semarang*"
    ]
  },
  {
    id: "box-standar",
    category: "box",
    name: "Paket Nasi Box Standar",
    badge: "Paling Diminati (Best Seller)",
    popular: true,
    price: 2350000,
    pricePerBox: 39000,
    portion: "60 Kotak",
    meatYield: "240 Tusuk Sate + 60 Porsi Gule / Tongseng",
    description: "Paket terfavorit shohibul aqiqah. Jumlah porsi pas, olahan daging melimpah dengan kemasan bento sekat elegan.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=700&auto=format&fit=crop&q=80",
    includes: [
      "1 Ekor Kambing/Domba Pilihan Berkualitas",
      "60 Box Bento Sekat Eksklusif",
      "240 Tusuk Sate Kambing Empuk Istimewa",
      "60 Porsi Gule / Tongseng Kambing Rempah",
      "Nasi Putih Pulen Wangi Tabur Bawang",
      "Sambal Goreng Ati Kentang Balado",
      "Acar Segar, Sambal & Kerupuk Udang",
      "Buah Pisang / Jeruk Segar",
      "Sertifikat Pigura + Souvenir Boneka Domba",
      "Video & Foto Dokumentasi Penyembelihan",
      "Gratis Ongkir Area Semarang*"
    ]
  },
  {
    id: "box-premium",
    category: "box",
    name: "Paket Nasi Box Premium",
    badge: "Porsi Melimpah",
    popular: false,
    price: 2950000,
    pricePerBox: 37000,
    portion: "80 Kotak",
    meatYield: "320 Tusuk Sate + 80 Porsi Gule / Tongseng",
    description: "Cocok untuk dibagikan ke lingkungan RT, majelis taklim, dan rekan kantor dengan kualitas masakan nomor satu.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&auto=format&fit=crop&q=80",
    includes: [
      "1 Ekor Kambing/Domba Berbobot Besar",
      "80 Box Nasi Bento Sekat Modern",
      "320 Tusuk Sate Kambing Bumbu Rempah",
      "80 Porsi Gule atau Tongseng Kuah Kental",
      "Mie Goreng Ulang Tahun / Bihun Kari",
      "Sambal Goreng Kentang Ati Daging",
      "Acar, Sambal Rawit, Emping / Kerupuk Udang",
      "Buah Segar + Sendok & Tisu Tertutup",
      "Sertifikat Berbingkai + Souvenir Eksklusif",
      "Dokumentasi Lengkap via WhatsApp",
      "Gratis Pengantaran Tepat Waktu"
    ]
  },
  {
    id: "box-sultan",
    category: "box",
    name: "Paket Nasi Box Eksklusif Sultan",
    badge: "Porsi Besar 100 Box",
    popular: false,
    price: 3650000,
    pricePerBox: 36500,
    portion: "100 Kotak",
    meatYield: "400 Tusuk Sate + 100 Porsi Gule / Tongseng / Krengsengan",
    description: "Kambing jantan super dengan hasil olahan paling banyak, hidangan mewah untuk acara syukuran akbar.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=700&auto=format&fit=crop&q=80",
    includes: [
      "1 Ekor Kambing Super Jantan Bobot Maksimal",
      "100 Box Nasi Premium Sekat 5",
      "400 Tusuk Sate Bumbu Spesial Bu Siti",
      "100 Porsi Gule/Tongseng/Krengsengan Rempah",
      "Pilihan Menu Pendamping Komplit",
      "Acar Nanas Segar, Emping Melinjo, Buah",
      "Sertifikat Mewah + Pigura Kayu Elegan",
      "Boneka Maskot Domba & Kartu Ucapan",
      "Video Penyembelihan Resolusi Tinggi (HD)",
      "Layanan Prioritas & Gratis Antar Semarang"
    ]
  },

  // Paket Spesial Nasi Kebuli & Mandhi
  {
    id: "kebuli-istimewa",
    category: "kebuli",
    name: "Paket Nasi Kebuli Kambing Bu Siti",
    badge: "Menu Khas Timur Tengah",
    popular: true,
    price: 2750000,
    pricePerBox: 45000,
    portion: "60 Kotak",
    meatYield: "Olahan Daging Kambing Kebuli + Gule",
    description: "Nasi kebuli beras basmati beraroma rempah kapulaga, cengkeh & minyak samin dengan daging kambing empuk meresap.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=700&auto=format&fit=crop&q=80",
    includes: [
      "1 Ekor Kambing Pilihan Sesuai Syariat",
      "60 Box Nasi Kebuli Beras Basmati / Lokal Super",
      "Daging Kambing Goreng Rempah / Sate Bumbu",
      "Gule Kambing Kuah Gurih Kaya Bumbu",
      "Taburan Kismis Manis & Bawang Goreng Gurih",
      "Acar Arab Segar (Nanas, Wortel, Mentimun)",
      "Sambal Goreng Tomat Khas Arab & Emping",
      "Sertifikat Aqiqah + Pigura Kaca",
      "Video Sembelih Atas Nama Buah Hati",
      "Gratis Antar Wilayah Semarang & Sekitarnya"
    ]
  },
  {
    id: "mandhi-tampah",
    category: "kebuli",
    name: "Paket Nasi Mandhi Tampah Akbar",
    badge: "Sajian Tradisi & Silaturahmi",
    popular: false,
    price: 1950000,
    pricePerBox: 0,
    portion: "6 Tampah Besar (30-35 Porsi)",
    meatYield: "Paha Kambing Oven Mandhi & Gule Kental",
    description: "Sangat disukai untuk santap bersama keluarga besar usai pengajian atau doa bersama di rumah.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700&auto=format&fit=crop&q=80",
    includes: [
      "1 Ekor Kambing Masak Oven Rempah Mandhi",
      "6 Tampah Nasi Mandhi Beras Basmati Asli",
      "Potongan Daging Kambing Panggang Empuk Juicy",
      "Gule Kuah Segar Hangat",
      "Acar Segar, Sambal Dhaboq & Kerupuk",
      "Sertifikat Aqiqah Berbingkai Lengkap",
      "Dokumentasi Video Sembelih Langsung",
      "Penyajian Siap Santap Hangat"
    ]
  },

  // Paket Kambing Masak (Prasmanan / Mandiri)
  {
    id: "masak-hemat",
    category: "masak",
    name: "Paket Kambing Masak Tipe A",
    badge: "Masak Saja (Tanpa Nasi)",
    popular: false,
    price: 1450000,
    portion: "40-50 Porsi",
    meatYield: "200 Tusuk Sate + 1 Panci Gule (±50 Porsi)",
    description: "Paling fleksibel bila Anda sudah menyiapkan nasi dan lauk sendiri di rumah, tinggal santap olahan kambing matang.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=700&auto=format&fit=crop&q=80",
    includes: [
      "1 Ekor Kambing/Domba Betina/Jantan Sehat",
      "200 Tusuk Sate Kambing Matang Bumbu Kacang/Kecap",
      "1 Panci Gule Kambing Kuah Santan Rempah (±50 Porsi)",
      "Bumbu Sate, Acar & Sambal Dipisah Rapi",
      "Sertifikat Aqiqah + Pigura Kayu",
      "Video Pemotongan Syar'i Atas Nama Anak",
      "Antar Hangat Menggunakan Wadah Higienis"
    ]
  },
  {
    id: "masak-standar",
    category: "masak",
    name: "Paket Kambing Masak Tipe B",
    badge: "Pilihan Favorit Keluarga",
    popular: true,
    price: 1850000,
    portion: "60-70 Porsi",
    meatYield: "250 Tusuk Sate + 1 Panci Besar Gule/Tongseng",
    description: "Jumlah daging lebih mantap, cocok untuk prasmanan tasyakuran aqiqah keluarga besar di rumah.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=700&auto=format&fit=crop&q=80",
    includes: [
      "1 Ekor Kambing Bobot Sedang Sehat & Poel",
      "250 Tusuk Sate Kambing Bakar Wangi Empuk",
      "Gule / Tongseng Kambing 1 Panci Porsi Besar",
      "Acar Segar, Sambal Ekstra & Bumbu Kacang Khas",
      "Sertifikat Aqiqah + Pigura Eksklusif",
      "Dokumentasi Penyembelihan Lengkap",
      "Bebas Pilih Varian Olahan (Tongseng/Krengsengan)"
    ]
  },
  {
    id: "masak-jumbo",
    category: "masak",
    name: "Paket Kambing Masak Tipe Super",
    badge: "Kambing Jantan Super",
    popular: false,
    price: 2450000,
    portion: "80-100 Porsi",
    meatYield: "350 Tusuk Sate + 1 Panci Jumbo Gule & Tongseng",
    description: "Kambing jantan pilihan ukuran jumbo. Daging tebal, kuah berlimpah, sangat pas untuk tasyakuran kapasitas banyak.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&auto=format&fit=crop&q=80",
    includes: [
      "1 Ekor Kambing Jantan Super Berbobot Besar",
      "350 Tusuk Sate Kambing Siap Saji",
      "1 Panci Jumbo Gule + Tongseng Kambing",
      "Kepala & Kaki (Tengkleng / Masak Bumbu Kuning)",
      "Acar, Sambal Rawit Segar & Bumbu Lengkap",
      "Sertifikat Bingkai + Boneka Souvenir",
      "Video & Foto Dokumentasi Berkualitas"
    ]
  },

  // Paket Katering Acara / UMKM Umum
  {
    id: "katering-prasmanan",
    category: "katering",
    name: "Paket Katering Prasmanan Hajatan & Resepsi",
    badge: "Minimal 50 Porsi",
    popular: true,
    price: 38000,
    priceNote: "per porsi",
    portion: "Mulai 50 Porsi",
    meatYield: "Lengkap Lauk Utama, Sayur & Minuman",
    description: "Layanan prasmanan lengkap untuk acara pernikahan, khitanan, syukuran rumah, arisan keluarga, hingga rapat kantor.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=700&auto=format&fit=crop&q=80",
    includes: [
      "Nasi Putih Pulen / Nasi Kuning Wangi",
      "Pilihan Daging: Rendang / Bistik Sapi / Olahan Ayam",
      "Olahan Ikan / Sup Bakso Sosis / Sup Kimlo",
      "Capcay Goreng Bakso / Sambal Goreng Kentang Krecek",
      "Kerupuk Udang, Acar & Sambal Pilihan",
      "Puding Buah / Buah Iris Segar & Air Mineral",
      "Peralatan Makan & Meja Prasmanan Higienis",
      "Tim Pramusaji Ramah & Berpengalaman"
    ]
  },
  {
    id: "katering-nasibox",
    category: "katering",
    name: "Paket Nasi Kotak Syukuran & Rapat Kantor",
    badge: "Mulai 25 Box",
    popular: true,
    price: 25000,
    priceNote: "per box",
    portion: "Mulai 25 Box",
    meatYield: "Pilihan Ayam Panggang / Bakar / Balado",
    description: "Nasi kotak higienis dengan cita rasa nusantara untuk pengajian, rapat instansi/kantor, dan tasyakuran.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=700&auto=format&fit=crop&q=80",
    includes: [
      "Nasi Putih Pulen Wangi",
      "Ayam Bakar Madu / Ayam Goreng Lengkuas / Rendang",
      "Sambal Goreng Ati Kentang / Tumis Buncis Jagung",
      "Mie Goreng Jawa / Bihun Sayur",
      "Kerupuk, Sambal Bajak & Acar",
      "Buah Pisang Segar",
      "Sendok, Garpu, Tusuk Gigi & Tisu Kemas",
      "Kemasan Box Eksklusif & Bersih"
    ]
  },
  {
    id: "katering-snack",
    category: "katering",
    name: "Paket Snack Box Tradisional & Modern",
    badge: "Mulai Rp 12.000",
    popular: false,
    price: 12000,
    priceNote: "per box",
    portion: "Mulai 30 Box",
    meatYield: "3 Macam Kue + Air Mineral",
    description: "Kombinasi kue asin gurih dan manis favorit tamu untuk pengajian, seminar kampus, dan coffee break kantor.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=700&auto=format&fit=crop&q=80",
    includes: [
      "1 Kue Asin (Lemper Ayam / Pastel / Risol Rogout)",
      "1 Kue Manis (Kue Sus / Bolu Gulung / Pie Buah)",
      "1 Tradisional (Nagasari / Lapis Legit / Semar Mendem)",
      "Air Mineral Gelas 220ml",
      "Kemasan Box Cantik Rapi & Tisu",
      "Pemesanan Fleksibel Menyesuaikan Budget"
    ]
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Sate Kambing Bumbu Kacang Khas",
    category: "Olahan Daging",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
    desc: "Daging empuk tanpa bau prengus, dipanggang dengan rempah meresap."
  },
  {
    id: 2,
    title: "Gule Kambing Kuah Kuning Rempah",
    category: "Olahan Daging",
    image: "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=800&auto=format&fit=crop&q=80",
    desc: "Kuah santan gurih nikmat dengan ramuan rempah nusantara otentik."
  },
  {
    id: 3,
    title: "Nasi Kebuli Kambing Basmati",
    category: "Nasi Box Spesial",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80",
    desc: "Nasi kebuli bertabur kismis, kacang mete & potongan daging lezat."
  },
  {
    id: 4,
    title: "Kemasan Bento Box Sekat 5 Eksklusif",
    category: "Kemasan",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=80",
    desc: "Kemasan higienis, rapi, aman dibawa dan elegan untuk dibagikan."
  },
  {
    id: 5,
    title: "Katering Prasmanan Hajatan Gayamsari",
    category: "Katering & Prasmanan",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&auto=format&fit=crop&q=80",
    desc: "Penyajian prasmanan higienis, dekorasi rapi, dan hidangan hangat lengkap."
  },
  {
    id: 6,
    title: "Sertifikat Aqiqah + Pigura Kayu",
    category: "Bonus Eksklusif",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80",
    desc: "Kenang-kenangan ibadah aqiqah buah hati tercinta yang berkesan selamanya."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "dr. Muhammad Firdaus, Sp.A",
    role: "Shohibul Aqiqah Putra Pertama",
    location: "Gayamsari, Semarang",
    rating: 5,
    date: "1 minggu lalu (Google Review)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    review: "Alhamdulillah sangat puas dengan Bu Siti Catering & Aqiqah! Lokasinya di Gayamsari mudah diakses, komunikasi via WA sangat fast respons. Sate dan gulenya benar-benar enak, tidak bau prengus sama sekali, bumbunya mantap meresap. Sukses selalu untuk Bu Siti Catering!",
    packageOrdered: "Paket Nasi Box Standar 60 Box"
  },
  {
    id: 2,
    name: "Ibu Rahayu Kusumaningrum",
    role: "Pesanan Katering Syukuran & Resepsi",
    location: "Pedurungan, Semarang",
    rating: 5,
    date: "3 minggu lalu (Google Review)",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    review: "Sudah langganan di Bu Siti Catering untuk acara keluarga. Nasi box dan prasmanannya selalu tepat waktu, porsi melimpah, dan cita rasanya konsisten enak. Tamu undangan pada memuji masakannya.",
    packageOrdered: "Paket Prasmanan Hajatan 100 Porsi"
  },
  {
    id: 3,
    name: "Bpk. Hendro Prasetyo, S.Kom",
    role: "Katering Rapat Kantor & Aqiqah",
    location: "Semarang Selatan",
    rating: 5,
    date: "1 bulan lalu (Google Review)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    review: "Pesan paket nasi box untuk aqiqah anak dan makan siang kantor. Bento box tertutup rapat dan higienis. Pilihan menu daging olahannya empuk dan bumbu rempahnya sangat medok. Rekomendasi utama di Semarang!",
    packageOrdered: "Paket Nasi Box Sultan 100 Box"
  },
  {
    id: 4,
    name: "Ustadz H. Ahmad Baihaqi",
    role: "Tokoh Masyarakat & Pelanggan Setia",
    location: "Semarang Timur",
    rating: 5,
    date: "2 bulan lalu (Google Review)",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    review: "Dari segi syariat penyembelihan sangat tertib dan sesuai fiqih aqiqah. Video pemotongan dikirim dengan doa yang fasih menyebutkan nama buah hati. Masakannya bersih, halal, dan berkah.",
    packageOrdered: "Paket Kambing Masak Tipe Super"
  }
];

export const ORDER_STEPS = [
  {
    step: "01",
    title: "Pilih Paket & Konsultasi",
    desc: "Gunakan kalkulator aqiqah di web atau hubungi CS WhatsApp kami untuk memilih paket aqiqah atau katering sesuai kebutuhan & anggaran.",
    icon: "Calculator"
  },
  {
    step: "02",
    title: "Pilih Hewan & Jadwal Acara",
    desc: "Tentukan tanggal penyembelihan dan jam pengantaran. Anda dapat mempercayakan pemilihan hewan sehat & poel kepada tim ahli kami.",
    icon: "CalendarCheck"
  },
  {
    step: "03",
    title: "Penyembelihan Syar'i & Masak",
    desc: "Hewan disembelih secara syar'i, didokumentasikan (video/foto), lalu dimasak oleh juru masak berpengalaman higienis.",
    icon: "Flame"
  },
  {
    step: "04",
    title: "Antar Tepat Waktu & Santap",
    desc: "Pesanan diantar langsung dalam kondisi hangat dan rapi ke alamat rumah Anda di Semarang, siap disajikan dengan penuh keberkahan.",
    icon: "CheckCircle2"
  }
];

export const FAQS = [
  {
    q: "Berapa hari minimal pemesanan aqiqah atau katering sebelum hari H?",
    a: "Untuk kelancaran persiapan dan penjadwalan juru masak/sembelih, kami sarankan pemesanan minimal H-3 atau H-7. Namun untuk kebutuhan mendesak / dadakan (H-1), silakan langsung konfirmasi via WhatsApp ke CS kami untuk cek ketersediaan kuota hari tersebut."
  },
  {
    q: "Apakah kambing aqiqahnya memenuhi syarat syariat Islam?",
    a: "Pasti. Semua hewan aqiqah di Bu Siti Catering kami pastikan cukup umur (poel / minimal 1 tahun untuk kambing, 6 bulan untuk domba), dalam kondisi sehat, gemuk, tidak cacat fisik, dan disembelih oleh juru sembelih yang bersertifikat syar'i."
  },
  {
    q: "Apakah ada dokumentasi penyembelihan hewan aqiqah?",
    a: "Ya, tentu! Kami menyediakan dokumentasi video dan foto beresolusi tinggi saat proses penyembelihan dengan pengucapan doa & nama buah hati secara jelas, lalu dikirimkan langsung ke nomor WhatsApp Anda."
  },
  {
    q: "Berapa kambing untuk aqiqah anak laki-laki dan perempuan?",
    a: "Berdasarkan sunnah Rasulullah SAW: 2 ekor kambing/domba untuk anak laki-laki, dan 1 ekor kambing/domba untuk anak perempuan. Namun bagi yang memiliki keterbatasan, aqiqah 1 ekor untuk anak laki-laki tetap sah secara hukum syariat."
  },
  {
    q: "Apakah benar gratis ongkir untuk wilayah Kota Semarang?",
    a: "Ya! Kami memberikan fasilitas GRATIS ONGKIR (Free Delivery) sampai ke depan pintu rumah untuk wilayah Gayamsari, Pedurungan, Semarang Timur, Semarang Selatan, Semarang Tengah, Banyumanik, dan area jangkauan kami."
  },
  {
    q: "Bagaimana sistem pembayarannya? Apakah bisa COD?",
    a: "Sistem pembayaran sangat aman dan fleksibel. Anda cukup membayar uang muka (DP) sebesar 20-30% sebagai tanda jadi penjadwalan, dan pelunasan sisanya dapat ditransfer atau dibayarkan secara tunai (COD) saat pesanan tiba di rumah Anda."
  },
  {
    q: "Selain aqiqah, layanan katering apa saja yang disediakan?",
    a: "Kami menyediakan katering prasmanan resepsi/hajatan, nasi kotak bento rapat/pengajian, snack box, nasi tumpeng komplit, nasi besek tradisional, hingga katering makan siang harian kantor & instansi."
  }
];
