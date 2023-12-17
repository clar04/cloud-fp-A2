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
![image](https://github.com/clar04/cloud-fp-A2/assets/134349024/be806b07-c1ba-454a-8402-39cdc920b1fa)
Spesifikasi droplet yang kami buat adalah sebagai berikut
| No | Nama          | CPU        | Memory | Disk  | Harga / bulan  |
|----|---------------|------------|--------|-------|----------------|
| 1  | Worker 1      | 1 AMD vCPU | 2 GB   | 50 GB | 14 US$         |
| 2  | Worker 2      | 1 AMD vCPU | 2 GB   | 50 GB | 14 US$         |
| 3  | Load Balancer | 1 AMD vCPU | 2 GB   | 50 GB | 14 US$         |
|**Total**|          |            |        |       | **42 US$**     |

## E. Instalasi dan Implementasi Rancangan Arsitektur
1. Create database cluster
![WhatsApp Image 2023-12-15 at 08 38 15_2ae9110a](https://github.com/clar04/cloud-fp-A2/assets/134349024/345e97d9-d393-4643-9702-a899255ea2f0)

2. Set up connection ke database
![WhatsApp Image 2023-12-15 at 08 38 15_4cee72bb](https://github.com/clar04/cloud-fp-A2/assets/134349024/91def3d5-9ecd-4fa5-a819-c5d910fef3d0)

3. Connect dengan mongoDB compass
![WhatsApp Image 2023-12-15 at 08 38 16_f77dd1b8](https://github.com/clar04/cloud-fp-A2/assets/134349024/cbd1b561-9865-48ae-ab1f-b5a2f0557aca)

4. Buat orders.json
![WhatsApp Image 2023-12-15 at 08 38 16_28f88447](https://github.com/clar04/cloud-fp-A2/assets/134349024/7b9d7d44-d91f-4122-8e26-ea8d3b55803e)

5. Import orders.json ke database
![WhatsApp Image 2023-12-15 at 08 38 16_55f4ad5e](https://github.com/clar04/cloud-fp-A2/assets/134349024/90c2f40c-01c9-43b0-94f8-a261ca79942a)

6. Jalankan API file [app.py](/app.py)![WhatsApp Image 2023-12-15 at 08 38 17_bbda7ea2](https://github.com/clar04/cloud-fp-A2/assets/134349024/968222fe-021b-4dd0-b874-31dfe08f51b1)

7. Test dengan postman apakah API berjalan
![WhatsApp Image 2023-12-15 at 08 38 17_cf7dfc65](https://github.com/clar04/cloud-fp-A2/assets/134349024/ced63a6c-1306-4281-b343-ac4255f3e5be)

8. Pilih spesifikasi OS dan plan untuk droplet
![WhatsApp Image 2023-12-15 at 08 38 18_56d96cce](https://github.com/clar04/cloud-fp-A2/assets/134349024/2297c72e-ec56-4511-9eea-ac67e722213f)

9. Sesuaikan spesifikasi droplet dan harga
![WhatsApp Image 2023-12-15 at 08 38 18_f6ecc355](https://github.com/clar04/cloud-fp-A2/assets/134349024/58a91dba-3c5c-4ef5-8d63-2d7e1824accd)

10. Buat master password untuk root
![WhatsApp Image 2023-12-15 at 08 38 19_efb2cff5](https://github.com/clar04/cloud-fp-A2/assets/134349024/46cf0d75-ac1d-4c73-ada6-20784193e2f5)


## F. Pengujian Endpoint
Dilakukan pengujian all endpoint menggunakan postman
1. Pengujian get all orders
    - Worker 1
    ![WhatsApp Image 2023-12-16 at 21 43 17_463d1490](https://github.com/clar04/cloud-fp-A2/assets/134349024/fbfd2b30-ee60-42db-aa36-916a4d224bb1)
    - Worker 2
    ![WhatsApp Image 2023-12-16 at 22 03 10_00a5db24](https://github.com/clar04/cloud-fp-A2/assets/134349024/789aec8c-b17d-4a55-a771-c8fff19d4751)
2. Pengujian get by order id
    - Worker 1
    ![WhatsApp Image 2023-12-16 at 21 54 08_52efe0f1](https://github.com/clar04/cloud-fp-A2/assets/134349024/16f0ecf6-1a36-44a8-8759-3afc6e185fb1)
    - Worker 2
    ![WhatsApp Image 2023-12-16 at 22 04 57_65eba750](https://github.com/clar04/cloud-fp-A2/assets/134349024/246bca59-46cc-4d86-a29d-1a7adc8e4471)
3. Pengujian create new order
    - Worker 1
    ![WhatsApp Image 2023-12-16 at 21 55 23_a3142684](https://github.com/clar04/cloud-fp-A2/assets/134349024/275f81ac-da26-4e81-a4f4-ec7a4a5884a9)
    - Worker 2
    ![WhatsApp Image 2023-12-16 at 22 06 05_2ad36aac](https://github.com/clar04/cloud-fp-A2/assets/134349024/253a11e5-5c33-41fd-8e54-2a6ff4a9561b)
4. Pengujian update order by id
    - Worker 1
    ![WhatsApp Image 2023-12-16 at 21 56 38_3189f344](https://github.com/clar04/cloud-fp-A2/assets/134349024/bcff0a77-649b-426d-8b50-c8ca3ef04fd3)
    - Worker 2
    ![WhatsApp Image 2023-12-16 at 22 07 39_0e803573](https://github.com/clar04/cloud-fp-A2/assets/134349024/6727d577-325b-4596-9026-3397ba4bdbc6)
5. Pengujian delete order by id
    - Worker 1
    ![WhatsApp Image 2023-12-16 at 21 58 02_7dec8167](https://github.com/clar04/cloud-fp-A2/assets/134349024/5e918107-f976-445b-8f98-c15d48467feb)
    - Worker 2
    ![WhatsApp Image 2023-12-16 at 22 08 25_8da289bf](https://github.com/clar04/cloud-fp-A2/assets/134349024/e5c59aa4-c6d5-41e5-88fd-e11660a70f1f)

## G. Load Testing
1. Load balancing menggunakan droplet
![WhatsApp Image 2023-12-17 at 10 30 25_adc80fea](https://github.com/clar04/cloud-fp-A2/assets/134349024/e48ca0a6-789e-4876-9797-d5f00b6a0ae7)
    - Install nginx
    ![WhatsApp Image 2023-12-17 at 10 30 45_25c1aa60](https://github.com/clar04/cloud-fp-A2/assets/134349024/015d13e0-e558-461d-8b9b-3f9f249d1ddd)
    - Config nginx
    ![WhatsApp Image 2023-12-17 at 10 31 02_75b5846c](https://github.com/clar04/cloud-fp-A2/assets/134349024/c1ed48a5-c7eb-4f83-b424-82df1c35c06a)
    - Restart nginx
    ![WhatsApp Image 2023-12-17 at 10 31 12_5cf64bec](https://github.com/clar04/cloud-fp-A2/assets/134349024/8cf78cdd-8623-4ba5-b0ba-1130916e98fc)
    - Test load balance
    ![WhatsApp Image 2023-12-17 at 10 31 21_3f84126e](https://github.com/clar04/cloud-fp-A2/assets/134349024/7777c5a2-a0a5-492a-b57f-c92047b43ab3)
2. Locust testing dengan users 100, spawn rate 25, **maximum RPS 14,25**, **faiilure 0%**
![WhatsApp Image 2023-12-17 at 10 38 04_ef81ea0e](https://github.com/clar04/cloud-fp-A2/assets/134349024/1b8a2056-ce02-42ca-9632-7446fdc2024d)
3. Locust testing dengan spawn rate 50, user 100, **maximum RPS 10,5**, **failure 0%**
![WhatsApp Image 2023-12-17 at 10 41 41_71d28410](https://github.com/clar04/cloud-fp-A2/assets/134349024/3a9c4fd4-2b21-4cef-93ce-ba2f6b68b198)
4. Locust testing dengan users 100, spawn rate 100, **maximum RPS 27**, **failure 0%**
![WhatsApp Image 2023-12-17 at 10 44 56_3903ec63](https://github.com/clar04/cloud-fp-A2/assets/134349024/e718e56b-7113-4199-9df9-de1601f9424e)

Kami juga mencoba menggunakan load balancer dari DigitalOcean namun hasilnya menunjukkan **failure 100%** dengan users 250 dan spawn rate 25
![WhatsApp Image 2023-12-17 at 10 52 32_05b2bec5](https://github.com/clar04/cloud-fp-A2/assets/134349024/b53c24c0-52f5-4dd8-8cb7-f054ae5449ca)

## H. Kesimpulan dan Saran
### Kesimpulan
- Melakukan set up dan konfigurasi pada Azure relatif lebih kompleks dibanding DigitalOcean
- Harga yang ditawarkan Azure lebih tinggi dibanding DigitalOcean; fitur yang disediakan Azure juga lebih banyak
- Load Balancer yang disediakan DigitalOcean kurang *reliable*
### Saran
Dari pengalaman kami selama menggeluti konfigurasi cloud ini, ada baiknya kita memberikan usaha terbaik dalam mengerjakan segala sesuatu. Namun jika hasilnya kurang sesuai jangan berkecil hati, mungkin sudah lelah.
