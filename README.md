# 👟 Shoe Laundry API

REST API sederhana untuk layanan **daftar barang cuci sepatu**, dibuat menggunakan **Node.js**, **Express.js**, dan **Supabase** sebagai database.

---

## 🧭 Deskripsi Umum

API ini digunakan untuk mencatat, membaca, memperbarui, dan menghapus data sepatu yang sedang dicuci di layanan laundry.  
Setiap item memiliki informasi seperti nama pelanggan, jenis sepatu, status pencucian, dan tanggal masuk/selesai.

---

## 🎯 Tujuan dan Fitur Utama

- Menyediakan endpoint CRUD untuk data sepatu.
- Mendukung filter berdasarkan status (`/items?status=Selesai`).
- Terintegrasi dengan **Supabase** sebagai backend database.
- Dapat di-deploy ke **Vercel** untuk akses publik.

---

## 🧱 Struktur Data (Tabel `items`)

| Kolom | Tipe Data | Keterangan |
|-------|------------|-------------|
| id | uuid | Primary key |
| nama_pelanggan | text | Nama pelanggan |
| jenis_sepatu | text | Jenis sepatu |
| status | text | Contoh: "Proses", "Selesai", "Menunggu" |
| tanggal_masuk | date | Tanggal diterima |
| tanggal_selesai | date | Tanggal selesai |

---

## 🔗 Endpoint API

| Method | Endpoint | Deskripsi |
|--------|-----------|------------|
| `GET` | `/items` | Menampilkan semua data sepatu |
| `GET` | `/items?status=Selesai` | Menampilkan data berdasarkan status |
| `GET` | `/items/:id` | Menampilkan satu data berdasarkan ID |
| `POST` | `/items` | Menambahkan data baru |
| `PUT` | `/items/:id` | Memperbarui data berdasarkan ID |
| `DELETE` | `/items/:id` | Menghapus data berdasarkan ID |

---

## 📦 Contoh Request & Response

### ➕ POST `/items`
**Request Body**
```json
{
  "nama_pelanggan": "Ryan",
  "jenis_sepatu": "Nike Air Force 1",
  "status": "Proses",
  "tanggal_masuk": "2025-10-15",
  "tanggal_selesai": "2025-10-20"
}
