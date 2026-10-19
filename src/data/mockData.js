// Data informasi usaha & katalog Aqiqah Nuur Rahma & Katering

export const DEFAULT_BUSINESS_INFO = {
  name: "Aqiqah Nuur Rahma",
  tagline: "Layanan Aqiqah & Katering Siap Saji Semarang - Kendal",
  slogan: "Syar'i, Higienis, Lezat Tanpa Bau Prengus & Berkah",
  address: "Jl. Prof. Dr. Hamka No. 04, RT. 04 / RW. 09, Purwoyoso, Kec. Ngaliyan, Kota Semarang, Jawa Tengah 50184",
  addressNote: "Tepat di Depan Kampus 3 UIN Walisongo Semarang",
  whatsapp: "087770055530",
  whatsappDisplay: "0877-7005-5530",
  instagram: "@aqiqahnuurrahma",
  instagramUrl: "https://instagram.com/aqiqahnuurrahma",
  googleMapsUrl: "https://maps.app.goo.gl/ncg1txdCavAjN6Dr5",
  mapsEmbedQuery: "Aqiqah+Nuur+Rahma+Semarang",
  openingHours: "Setiap Hari 08.30 – 16.00 WIB",
  deliveryAreas: ["Kota Semarang", "Kendal & Kaliwungu", "Boja & Mijen", "Mangkang & Ngaliyan", "Kabupaten Semarang", "Demak & Sekitarnya"],
  stats: {
    satisfiedClients: "1.950+",
    googleRating: "4.9",
    totalReviews: "148+",
    experienceYears: "8+"
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
    title: "Bisa Pilih & Timbang Sendiri",
    desc: "Shohibul aqiqah dipersilakan datang ke kandang mitra kami untuk memilih langsung domba/kambing yang disukai.",
    icon: "Eye",
    badge: "Transparan"
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
    desc: "Daging diolah dengan resep rempah nusantara khas Nuur Rahma. Tekstur daging empuk meresap dan dijamin bebas bau prengus.",
    icon: "Utensils",
    badge: "Koki Ahli"
  },
  {
    id: 5,
    title: "Gratis Ongkir Sampai Depan Rumah",
    desc: "Layanan antar tepat waktu dengan armada khusus untuk wilayah Semarang, Kendal, Kaliwungu, Ngaliyan, dan sekitarnya.",
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
    desc: "Bagi yang ingin langsung bersedekah, kami siap menyalurkan masakan aqiqah ke panti asuhan atau pesantren binaan.",
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
      "Gratis Ongkir Area Semarang & Kendal*"
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
      "Gratis Ongkir Area Semarang & Kendal*"
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
      "400 Tusuk Sate Bumbu Spesial Nuur Rahma",
      "100 Porsi Gule/Tongseng/Krengsengan Rempah",
      "Pilihan Menu Pendamping Komplit",
      "Acar Nanas Segar, Emping Melinjo, Buah",
      "Sertifikat Mewah + Pigura Kayu Elegan",
      "Boneka Maskot Domba & Kartu Ucapan",
      "Video Penyembelihan Resolusi Tinggi (HD)",
      "Layanan Prioritas & Gratis Antar Semarang-Kendal"
    ]
  },

  // Paket Spesial Nasi Kebuli & Mandhi
  {
    id: "kebuli-istimewa",
    category: "kebuli",
    name: "Paket Nasi Kebuli Kambing Nuur Rahma",
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
    name: "Paket Katering Prasmanan Hajatan",
    badge: "Minimal 50 Porsi",
    popular: false,
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
    name: "Paket Nasi Kotak Syukuran & Rapat",
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
    title: "Hewan Sehat di Kandang Mitra",
    category: "Kandang & Hewan",
    image: "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?w=800&auto=format&fit=crop&q=80",
    desc: "Kambing & domba terawat bersih, sehat, bebas cacat dan cukup umur."
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
    location: "Ngaliyan, Semarang Barat",
    rating: 5,
    date: "1 minggu lalu (Google Review)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    review: "Alhamdulillah sangat puas dengan Aqiqah Nuur Rahma! Sate dan gulenya benar-benar tidak bau prengus sama sekali, tamu dan keluarga besar pada muji enaknya. Video sembelih dikirim lengkap dengan nama anak saya. Sukses selalu untuk tim!",
    packageOrdered: "Paket Nasi Box Standar 60 Box"
  },
  {
    id: 2,
    name: "Ibu Rahayu Kusumaningrum",
    role: "Shohibul Aqiqah Putri Kedua",
    location: "Kaliwungu, Kendal",
    rating: 5,
    date: "3 minggu lalu (Google Review)",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    review: "Awalnya ragu pesan online, tapi lokasinya pas di seberang Kampus 3 UIN Walisongo jadi langsung mampir ke kantornya. Pelayanannya ramah banget, gratis ongkir sampai ke Kaliwungu Kendal dan datangnya tepat waktu pas jam makan siang. Dapat sertifikat berbingkai cantik pula.",
    packageOrdered: "Paket Nasi Kebuli 60 Box"
  },
  {
    id: 3,
    name: "Bpk. Hendro Prasetyo, S.Kom",
    role: "Katering Syukuran Kantor & Aqiqah",
    location: "Semarang Kota",
    rating: 5,
    date: "1 bulan lalu (Google Review)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    review: "Sudah order 2 kali di sini, pertama waktu aqiqah anak kembar (pesan 2 kambing), kedua untuk katering syukuran kantor. Makanannya konsisten sedap, kemasan box rapi higienis, porsi pas kenyang. Recommended banget buat warga Semarang dan Kendal!",
    packageOrdered: "Paket Nasi Box Sultan 100 Box"
  },
  {
    id: 4,
    name: "Ustadz H. Ahmad Baihaqi",
    role: "Tokoh Masyarakat & Pelanggan Setia",
    location: "Boja, Kendal",
    rating: 5,
    date: "2 bulan lalu (Google Review)",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    review: "Dari segi syariat penyembelihan sangat tertib, bacaan basmalah & takbir jelas menyebutkan nama anak. Dagingnya bersih, bumbunya medok meresap. InsyaAllah berkah untuk keluarga kami.",
    packageOrdered: "Paket Kambing Masak Tipe Super"
  }
];

export const ORDER_STEPS = [
  {
    step: "01",
    title: "Pilih Paket & Konsultasi",
    desc: "Gunakan kalkulator aqiqah di web atau hubungi CS WhatsApp kami untuk memilih paket sesuai kebutuhan & anggaran.",
    icon: "Calculator"
  },
  {
    step: "02",
    title: "Pilih Hewan & Jadwal",
    desc: "Tentukan tanggal penyembelihan dan pengantaran. Anda bisa memilih hewan langsung atau mempercayakan kepada tim kami.",
    icon: "CalendarCheck"
  },
  {
    step: "03",
    title: "Penyembelihan Syar'i & Masak",
    desc: "Hewan disembelih secara syar'i, didokumentasikan (video/foto), lalu dimasak oleh juru masak profesional higienis.",
    icon: "Flame"
  },
  {
    step: "04",
    title: "Antar Tepat Waktu & Santap",
    desc: "Pesanan diantar langsung dalam kondisi hangat dan rapi ke alamat rumah Anda, siap dibagikan dengan penuh keberkahan.",
    icon: "CheckCircle2"
  }
];

export const FAQS = [
  {
    q: "Berapa hari minimal pemesanan aqiqah sebelum hari H?",
    a: "Untuk kelancaran persiapan dan penjadwalan juru sembelih, kami sarankan pemesanan minimal H-3 atau H-7. Namun untuk kebutuhan mendesak / dadakan (H-1), silakan langsung konfirmasi via WhatsApp ke CS kami untuk cek ketersediaan kuota hari tersebut."
  },
  {
    q: "Apakah kambingnya memenuhi syarat syariat Islam?",
    a: "Pasti. Semua hewan aqiqah di Nuur Rahma kami pastikan cukup umur (poel / minimal 1 tahun untuk kambing, 6 bulan untuk domba), dalam kondisi sehat, gemuk, tidak cacat fisik, dan disembelih oleh juru sembelih yang bersertifikat syar'i."
  },
  {
    q: "Bolehkah saya menyaksikan langsung proses penyembelihan?",
    a: "Sangat diperbolehkan! Shohibul aqiqah atau perwakilan keluarga bisa hadir langsung di lokasi pemotongan. Jika berhalangan hadir, kami akan mengirimkan video dokumentasi beresolusi tinggi saat penyembelihan dengan pengucapan doa & nama anak yang jelas."
  },
  {
    q: "Berapa kambing untuk aqiqah anak laki-laki dan perempuan?",
    a: "Berdasarkan sunnah Rasulullah SAW: 2 ekor kambing/domba untuk anak laki-laki, dan 1 ekor kambing/domba untuk anak perempuan. Namun bagi yang memiliki keterbatasan, aqiqah 1 ekor untuk anak laki-laki tetap sah secara hukum syariat."
  },
  {
    q: "Apakah benar gratis ongkir untuk wilayah Semarang & Kendal?",
    a: "Ya! Kami memberikan fasilitas GRATIS ONGKIR (Free Delivery) sampai ke depan pintu rumah untuk wilayah Kota Semarang, Ngaliyan, Mijen, Kaliwungu, Kendal kota, dan sekitarnya sesuai rute pengiriman harian kami."
  },
  {
    q: "Bagaimana sistem pembayarannya? Apakah bisa COD?",
    a: "Sistem pembayaran sangat aman dan fleksibel. Anda cukup membayar uang muka (DP) sebesar 20-30% sebagai tanda jadi penjadwalan, dan pelunasan sisanya dapat ditransfer atau dibayarkan secara tunai (COD) saat pesanan tiba di rumah Anda."
  },
  {
    q: "Selain aqiqah, apakah melayani katering acara umum lainnya?",
    a: "Ya, kami melayani katering prasmanan dan nasi box untuk berbagai tasyakuran seperti khitanan, pernikahan, pengajian, syukuran rumah baru, hingga catering makan siang kantor/perusahaan."
  }
];
