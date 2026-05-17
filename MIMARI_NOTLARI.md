# Dugun Yolu - Mimari Notlari

Bu proje tek bir dugun salonu icin degil, `dugunyolu.tr` altinda birden fazla dugun salonunun kullanacagi cok kiracili bir rezervasyon ve takip sistemi olarak ilerleyecek.

## Ana Kural

Her dugun salonu kendi kullanici adi ve sifresiyle giris yapar. Giris yapan salon sadece kendi verilerini gorur, duzenler ve raporlar. Bir salonun rezervasyonu, tedarikcisi, personeli, stogu, SMS sablonu veya finans kaydi baska bir salon tarafindan gorulmez.

## Is Modeli

Sistemin sahibi ana admin olacak. Ana admin, dugun mekanlarini musteri olarak sisteme ekleyecek ve her mekan icin ayri bir kullanici adi/sifre olusturacak.

Her mekan kendisine verilen bilgilerle kendi paneline giris yapacak. Mekan panelinde kendi isletmesine ait:

- Rezervasyonlari girer ve takip eder.
- Raporlarini anlik gorur.
- Otomatik SMS ayarlarini ve sablonlarini yonetir.
- Kapora, taksit, odeme ve gider gibi kucuk muhasebe kayitlarini tutar.
- Personel, tedarikci, stok, paket, ekstra ve menu bilgilerini yonetir.

Ana admin paneli ise mekanlarin uzerinde duran platform yonetim alani olacak. Ana admin:

- Yeni mekan/musteri hesabi acar.
- Mekan kullanici adi ve sifresini belirler.
- Mekanin aktif/pasif durumunu yonetir.
- Gerekirse mekanin paneline destek amacli bakabilir.
- Tum platformun genel durumunu ve musteri hesaplarini takip eder.

Kritik kural: Bir mekan, baska bir mekanin rezervasyonunu, muhasebesini, raporunu, SMS ayarini veya musteri bilgisini kesinlikle gormeyecek.

## Kullanici Tipleri

- Platform sahibi: Tum salon hesaplarini ve sistem ayarlarini yonetir.
- Dugun salonu yoneticisi: Kendi salonunun rezervasyonlarini, fiyatlarini, personelini, tedarikcilerini, stoklarini ve raporlarini yonetir.
- Salon personeli: Yetki verilirse sadece gorev, rezervasyon veya operasyon ekranlarini kullanir.
- Cift / musteri kullanicisi: Salon tarafindan acilabilecek, kendi rezervasyon detaylarini ve odeme planini gorebilecek hesap.

## Veri Ayrimi

PHP ve veritabani asamasinda her ana tabloda salonu ayiran bir alan olacak:

- `tenant_id` veya `salon_hesabi_id`
- Her rezervasyon, salon, paket, ekstra, menu, personel, tedarikci, stok, SMS ve rapor kaydi bu alanla ilgili dugun salonuna baglanacak.
- Giris yapan kullanicinin `tenant_id` degeri oturumda tutulacak.
- Tum sorgular bu `tenant_id` ile filtrelenecek.

## Temel Tablolar

- `tenants`: Dugun salonu hesaplari.
- `users`: Platform, salon personeli ve cift kullanicilari.
- `reservations`: Rezervasyon kayitlari.
- `halls`: Salon / bahce alanlari.
- `organization_types`: Dugun, nisan, kina, sunnet gibi turler.
- `packages`: Paketler ve fiyatlandirma.
- `extras`: Ekstra secimler.
- `menu_categories`: Menu kategori basliklari.
- `menu_items`: Yemek menu kalemleri.
- `payments`: Kapora, taksit ve odeme hareketleri.
- `sms_templates`: SMS sablonlari.
- `sms_logs`: Gonderilen SMS gecmisi.
- `staff`: Personel.
- `suppliers`: Tedarikciler.
- `supplier_transactions`: Tedarikci cari hareketleri.
- `stock_items`: Stok kalemleri.
- `special_days`: Rezervasyon kapali / ozel gunler.

## Rezervasyon Mantigi

- Yeni rezervasyon takvimden tarih secilerek veya `Yeni Rezervasyon` butonundan acilir.
- Secili tarihte resmi/ozel kapali gun varsa rezervasyon engellenir veya net uyari verilir.
- Ayni tarihte rezervasyon varsa sistem uygunluk kontrolu icin uyari verir.
- Organizasyon turune gore takvim rengi ayrilir:
  - Dugun: kirmizi
  - Nisan: mavi
  - Kina: mor
  - Sunnet: yesil
  - Ozel/kapali gun: sari/uyari rengi

## PHP'ye Donusum Notu

Mevcut prototip tarayicida calisan HTML/CSS/JS ve gecici `localStorage` kaydi ile ilerliyor. Final sistemde bu veri PHP tarafinda MySQL/MariaDB veritabanina tasinacak. Prototipte olusan ekranlar ve is mantigi PHP panellerine donusturulurken bu dosyadaki cok kiracili mimari temel alinacak.
