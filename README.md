# 🔥 FINAL PROJECT (FP) 🔥
## Teknologi Komputasi Awan Kelas A
### Kelompok 4

|          **Nama**            |  **NRP**   |
|:----------------------------:|:----------:|
|   Clara Valentina            | 5027221016 |
|   Gabriella Erlinda Wijaya   | 5027221018 |
|   Wikri Cahya Syahrila       | 5027221020 |
|   Bintang Ryan Wardana       | 5027221022 |
|   Wilson Matthew Thendry     | 5027221024 |

## A. Cakupan Capaian Pembelajaran Mata Kuliah (CPMK)
1. Mampu memahami dan menerapkan berbagai servis pada layanan awan.
2. Mampu merancang dan mengaplikasikan teknologi komputasi awan.


## B. Constraint Final Project
1. FP ini dikerjakan secara berkelompok (mengikuti kelompok presentasi)
2. Linkungan cloud yang digunakan (pilih salah satu)
    - `Digital Ocean (Credit 200$)`
        * Boleh memanfaatkan semua fitur yang ada
        * Harga sesuai dengan yang disediakan Provider
    - `Microsoft Azure (Credit 100$)`
        * Boleh memanfaatkan semua fitur yang ada
        * Harga sesuai dengan pricing calculator Azure
    - `Local Vritual Machine (VirtualBox/Vagrant) sebagai alternatif simulasi cloud.`
        * Apabila membuat lebih dari 1 VM, maka VM harus dibuat **minimal** dari 2 Komputer / Host yang berbeda
        * Hanya boleh membuat VM dengan spesifikasi sebagai berikut

            | No | Tipe   | CPU   | Memory | Harga / bulan |
            |----|--------|-------|--------|---------------|
            | 1  | vm1    | 1vCPU | 512 MB | 4 US$         |
            | 2  | vm2    | 1vCPU | 1 GB   | 6 US$         |
            | 3  | vm3    | 1vCPU | 2 GB   | 12 US$        |
            | 4  | vm4    | 2vCPU | 2 GB   | 18 US$        |
            | 5  | vm5    | 2vCPU | 4 GB   | 24 US$        |
            | 6  | vm6    | 4vCPU | 8 GB   | 48 US$        |


## C. Permasalahan

Anda adalah seorang lulusan Teknologi Informasi, sebagai ahli IT, salah satu kemampuan yang harus dimiliki adalah **Keampuan merancang, membangun, mengelola aplikasi berbasis komputer menggunakan layanan awan untuk memenuhi kebutuhan organisasi.**(menurut kurikulum IT ITS 2023 😙) 

Pada suatu saat teman anda ingin mengajak anda memulai bisnis di bidang digital marketing, anda diberikan sebuah aplikasi berbasis API File: [app.py](/app.py) dengan spesifikasi sebagai berikut

## D. Rancangan Arsitektur dan Spesifikasi

## E. Instalasi dan Implementasi Rancangan Arsitektur
1. Buat registry container untuk image Flask![WhatsApp Image 2023-12-14 at 22 33 11_7306a2ed](https://github.com/waifuwetdream/fp-cloud-a2/assets/134349024/351a1bec-77e7-4e79-9715-fb6761af79ac)

2. Tick checkbox "Admin User" di pengaturan Access Keys untuk dapat memanggil repository![WhatsApp Image 2023-12-14 at 22 37 25_bc31224e](https://github.com/waifuwetdream/fp-cloud-a2/assets/134349024/db0f3cb8-9d06-4bbb-ab67-41c6c2e3851d)

3. Set up virtual network![WhatsApp Image 2023-12-14 at 22 38 55_c70018e2](https://github.com/waifuwetdream/fp-cloud-a2/assets/134349024/eb1a5ef7-5c4f-4689-83b0-53913e584ae9)

4. Buat container app untuk MongoDB dan app environment![WhatsApp Image 2023-12-14 at 22 48 46_e81c21f6](https://github.com/waifuwetdream/fp-cloud-a2/assets/134349024/a74aae5d-01d0-4994-8f1c-6292773dec00)

5. Virtual IP dibuat external exposed sehingga memungkinkan container app untuk diakses secara public menggunakan protocol tcp dan http![WhatsApp Image 2023-12-14 at 22 54 51_b53f38d5](https://github.com/waifuwetdream/fp-cloud-a2/assets/134349024/bf71d0c7-af75-41db-bcda-75956b3071e2)

6. Buat container app untuk Flask![WhatsApp Image 2023-12-14 at 23 03 50_1b45531c](https://github.com/waifuwetdream/fp-cloud-a2/assets/134349024/eac4372a-7fd4-42dd-9e16-8967effd1979) ![WhatsApp Image 2023-12-14 at 23 12 05_74a4c5ac](https://github.com/waifuwetdream/fp-cloud-a2/assets/134349024/39c9ab37-eb24-4e21-acae-e2e9716a53aa)

7. Buat volume mount untuk mongo storage mount dibuat agar azure dapat menyimpan semua data dari server container. Ini dibuat agar data container tidak hilang ketika server mati. Pertama, buat storage account.![WhatsApp Image 2023-12-15 at 00 08 03_70a3386e](https://github.com/clar04/cloud-fp-A2/assets/134349024/409fb3e3-e360-4ed0-a935-81bda87948f7) Ini mengarah ke resource group cloud-a2 yang telah dibuat, dengan instance details standard performance dan LRS redundancy.

## F. Pengujian Endpoint

## G. Load Testing

## H. Kesimpulan dan Saran
### Kesimpulan
- Azure menyusahkan
- Kami lelah dan mengantuk
- Cloud membuat kami meninggoy
### Saran
Dari pengalaman kelompok kami mengerjakan FP Cloud ini di semester 3 dan belum mengambil mata kuliah jaringan komputer (jarkom), sangat tidak disarankan untuk mengambil mata kuliah cloud sebelum jarkom.