# Shoe Laundry API 👟

REST API sederhana untuk layanan cuci sepatu, dibangun dengan Node.js, Express.js, dan Supabase.

## 🚀 Fitur
- CRUD data sepatu
- Filter status (GET /items?status=Selesai)
- Deploy ke Vercel

## 🧱 Struktur Data (Tabel `shoes`)
| Kolom | Tipe | Keterangan |
|--------|------|------------|
| id | uuid | Primary Key |
| customer_name | text | Nama pelanggan |
| brand | text | Merek sepatu |
| service_type | text | Jenis layanan |
| price | numeric | Harga layanan |
| status | text | Proses / Selesai / Diambil |
| created_at | timestamp | Otomatis waktu input |

## ⚙️ Cara Menjalankan
```bash
npm install
npm run dev
