# 🐐 Web Template Aqiqah & Katering Nusantara (Aila Aqiqah Semarang)

Website modern, elegan, responsif, dan siap produksi untuk UMKM jasa **Aqiqah & Katering Siap Saji**, dikembangkan dengan **React 19**, **Vite**, dan **Tailwind CSS**. Didesain khusus sebagai showcase template profesional dengan tingkat konversi tinggi untuk menawarkan jasa pembuatan website ke calon klien UMKM.

Website ini menggunakan profil usaha nyata dari Google Maps: **Aila Aqiqah Semarang** ([Lihat Profil Google Maps](https://maps.app.goo.gl/hjrevRj3j28hUHZZ9)).

---

## ✨ Fitur Unggulan

1. **⚡ Kalkulator Biaya Aqiqah Interaktif**:
   - Pilihan anak: Laki-laki (2 ekor) / Perempuan (1 ekor).
   - Pilihan bobot kambing (Tipe Hemat, Standar Favorit, Premium, Super Sultan).
   - Pilihan varian olahan (Sate & Gule, Sate & Tongseng, Krengsengan & Tengkleng, Rendang).
   - Pilihan penyajian (Nasi Box Bento Sekat, Nasi Kebuli Arab Basmati, Nasi Mandhi, atau Kambing Masak Wadah Panci).
   - Fitur sedekah/penyaluran ke panti asuhan/dhuafa.
   - Perhitungan otomatis real-time + efek confetti selebrasi.
   - **Direct WhatsApp Checkout**: Otomatis merangkai format pesan pesanan rapi untuk dikirim ke WhatsApp admin hanya dengan 1 klik!

2. **🛠️ Mode Demo Klien UMKM (Client Pitching Feature)**:
   - Terdapat tombol floating **"Mode Demo Klien UMKM"** di bagian atas.
   - Anda dapat mendemokan langsung di depan calon klien: mengubah Nama Usaha, Tagline, Nomor WhatsApp, dan Kota/Alamat secara *real-time* tanpa perlu mengedit kode!

3. **🍱 Katalog Paket Aqiqah & Katering Lengkap**:
   - Tab filter: Nasi Box Aqiqah, Nasi Kebuli / Mandhi, Kambing Masak (Prasmanan).
   - Bagian khusus **Katering Acara** (Prasmanan Hajatan, Nasi Kotak Rapat/Pengajian, Snack Box Tradisional & Modern).
   - Modal popup rincian menu dan fasilitas.

4. **🛡️ 7 Keunggulan Syariat & Layanan**:
   - Standar hewan poel/sehat, Juru Sembelih Halal (JULEHA), video dokumentasi HD atas nama anak, garansi tanpa bau prengus, free ongkir, sertifikat berbingkai, dan penyaluran amanah.

5. **⭐ Ulasan Google Maps Terverifikasi (Rating 5.0 / 5.0)**:
   - Menampilkan ulasan autentik dari warga Kota Semarang (Gunungpati, Banyumanik, Tembalang, Mijen) lengkap dengan link langsung ke Google Maps.

6. **📍 Lokasi Kantor & Peta Interaktif**:
   - Terintegrasi iframe Google Maps lokasi Sadeng, Kec. Gunungpati, Kota Semarang (Kandang Sendiri).

7. **📱 Mobile-First & Floating WhatsApp**:
   - Tampilan responsif di semua perangkat (smartphone, tablet, laptop).
   - Floating WhatsApp button dengan pulsating indicator & bubble chat otomatis.

---

## 🚀 Cara Menjalankan di Lokal

1. **Clone atau buka folder proyek**:
   ```bash
   cd web_aqiqah_katering
   ```

2. **Install dependensi**:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Jalankan development server**:
   ```bash
   npm run dev
   ```
   Buka browser di `http://localhost:5173`.

4. **Build untuk produksi**:
   ```bash
   npm run build
   ```

---

## 🌐 Cara Push ke GitHub & Deploy ke Vercel

### Langkah 1: Push ke GitHub
```bash
# 1. Inisialisasi git jika belum
git init

# 2. Tambahkan semua file dan buat commit awal
git add .
git commit -m "feat: initial commit web template aqiqah dan katering siap saji"

# 3. Buat repository baru di https://github.com/new (misal: web-aqiqah-katering)
# 4. Hubungkan remote repository dan push:
git branch -M main
git remote add origin https://github.com/<USERNAME-ANDA>/<NAMA-REPO>.git
git push -u origin main
```

### Langkah 2: Deploy ke Vercel (Gratis & Sangat Cepat)
1. Buka [https://vercel.com](https://vercel.com) dan login dengan akun GitHub Anda.
2. Klik tombol **"Add New..."** -> **"Project"**.
3. Pilih repository yang baru saja Anda push (`web-aqiqah-katering`).
4. Vercel akan otomatis mendeteksi konfigurasi Vite:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Klik **"Deploy"**.
6. Dalam waktu kurang dari 1 menit, website Anda sudah aktif secara global di domain Vercel (misal: `https://web-aqiqah-katering.vercel.app`)!

---

## 📋 Informasi Profil Usaha (Aila Aqiqah Semarang)
- **Nama Usaha**: Aila Aqiqah Semarang
- **Alamat**: Kelurahan Sadeng, Kecamatan Gunungpati, Kota Semarang, Jawa Tengah 50222 (Kandang Sendiri di Sadeng)
- **Jam Buka**: Setiap Hari 07.00 – 17.00 WIB
- **WhatsApp**: 0823-2359-4374
- **Instagram**: [@aila.aqiqah](https://instagram.com/aila.aqiqah)
- **Cakupan Free Ongkir**: Kota Semarang (Gunungpati, Banyumanik, Mijen, Tembalang, Ngaliyan), Ungaran / Kab. Semarang sekitarnya.
- **Link Google Maps**: [https://maps.app.goo.gl/hjrevRj3j28hUHZZ9](https://maps.app.goo.gl/hjrevRj3j28hUHZZ9)
