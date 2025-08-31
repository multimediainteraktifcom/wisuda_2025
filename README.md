# Undangan Wisuda - HTML Version

Website undangan wisuda universitas yang dibuat dengan HTML, CSS, dan jQuery dengan desain clean dan modern.

## Fitur

- **Halaman Cover**: Sapaan personal dari URL parameter dengan animasi amplop
- **Halaman Utama**: Kutipan inspiratif, countdown timer, galeri, peta lokasi, dan panduan
- **Desain Responsif**: Mobile-friendly dengan animasi smooth
- **Kontrol Musik**: Background music dengan kontrol play/pause
- **Personalisasi**: Menggunakan parameter URL untuk nama tamu

## Struktur File

```
/
├── index.html          # Halaman cover undangan
├── invitation.html     # Halaman utama undangan
├── styles.css          # File CSS utama
├── script.js           # File JavaScript/jQuery
└── src/assets/         # Folder gambar
    ├── graduation-hero.jpg
    ├── graduation-ceremony.jpg
    ├── graduation-diploma.jpg
    └── graduation-group.jpg
```

## Cara Penggunaan

### 1. Setup Dasar
1. Download semua file ke folder yang sama
2. Pastikan struktur folder sesuai dengan di atas
3. Buka `index.html` di browser

### 2. Personalisasi URL
Untuk menampilkan nama tamu, tambahkan parameter `to` di URL:
```
index.html?to=Hazel
invitation.html?to=Hazel
```

### 3. Kustomisasi

#### Mengubah Tanggal Wisuda
Edit di `script.js` baris:
```javascript
var targetDate = new Date('2025-09-27T08:00:00+07:00').getTime();
```

#### Mengubah Warna
Edit variabel CSS di `styles.css`:
```css
:root {
    --primary: #213A82;    /* Biru utama */
    --secondary: #F09A11;  /* Kuning/emas */
    --text-primary: #333333; /* Abu-abu gelap */
}
```

#### Mengganti Gambar
Ganti file gambar di folder `src/assets/` dengan nama yang sama, atau update path di HTML.

#### Mengubah Lokasi
Edit informasi venue di `invitation.html` bagian venue section dan update embed Google Maps.

## Teknologi

- **HTML5**: Struktur semantik dengan SEO optimization
- **CSS3**: Custom properties, Flexbox, Grid, animasi
- **jQuery**: DOM manipulation dan event handling
- **Google Fonts**: Font Poppins
- **Responsive Design**: Mobile-first approach

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Optimisasi Performance

- Lazy loading untuk gambar
- Preloading gambar penting
- CSS animations dengan hardware acceleration
- Compressed images (recommended)

## Deployment

Upload semua file ke web hosting yang mendukung HTML static:
- GitHub Pages
- Netlify
- Vercel
- cPanel hosting

## Kustomisasi Lanjutan

### Menambah Background Music
1. Upload file audio (.mp3, .wav) ke folder
2. Update path di `invitation.html`:
```html
<source src="path/to/your/music.mp3" type="audio/mpeg">
```

### Menambah Section Baru
Tambahkan HTML di `invitation.html` dan styling di `styles.css`.

### Analytics
Tambahkan Google Analytics atau tracking lainnya di `<head>` section.

## License

Free to use for personal and educational purposes.

---

**Catatan**: Pastikan semua gambar memiliki resolusi yang baik dan ukuran file yang optimal untuk performa website.
