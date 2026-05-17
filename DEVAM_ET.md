# Devam Etme Notu

Bu proje icin kalici klasor:

`C:\Users\bilgi\Documents\Codex\Projeler\dugun-rezervasyon`

Yarin veya iki gun sonra Codex'e sunu yazman yeterli:

`Dugun Platformu projesine devam edelim. Klasor: C:\Users\bilgi\Documents\Codex\Projeler\dugun-rezervasyon`

## Gunluk kullanim

1. Proje klasorune gir.
2. `baslat.bat` dosyasina cift tikla.
3. Site tarayicida acilir.

## Kayit duzeni

- Ben proje uzerinde calisirken degisiklikleri bu klasordeki dosyalara islerim.
- Ana dosyalar: `index.html`, `styles.css`, `app.js`.
- Kaldigimiz yer ve teknik notlar icin: `README.md`, `MIMARI_NOTLARI.md`, `DEVAM_ET.md`.

## Son Calisma Notu

17 Mayis 2026 calismasinda cok musterili yapinin ilk ekran katmani baslatildi:

- Sol menuye `Mekanlar` ekrani eklendi.
- Ust bara aktif hesap/mekan bilgisi eklendi.
- Ana admin icin mekan/musteri hesabi listeleme ekrani eklendi.
- Yeni mekan hesabi acma formu eklendi.
- Aktif mekan degistirme mantigi eklendi.
- Rezervasyon, takvim ve rapor listeleri secili mekana gore filtrelenmeye baslandi.

Bu degisiklikler bilgisayardaki proje dosyalarina kaydedildi.

GitHub notu: Bu bilgisayardaki `.git` klasoru yazma izni vermedigi icin bu parcanin GitHub'a normal Git ile gonderimi tamamlanamadi. Kodlar yerelde guvende; GitHub senkronu icin Git kurulumu/izin duzeltmesi gerekir.

## GitHub Dal Takibi

Git kurulumu ve GitHub girisi tamamlandi. Ilk calisma GitHub'a su dal olarak gonderildi:

`codex/mekan-hesaplari`

Takip karari:

- Gelistirmelere bir sure `codex/mekan-hesaplari` dali uzerinden devam edilecek.
- Bu dal ana siteyi bozmadan gelistirme alani olarak kullanilacak.
- Mekan hesaplari, ana admin ve mekan paneli yapisi oturunca bu dal `main` ile birlestirilecek.
- Kullanici "ne zaman dersen birlestiririz" dedi; birlestirme zamanini Codex uygun noktada onerecek.

## Test Verisi Notu

Mekan paneli testlerini kolaylastirmak icin bos mekan hesaplarina otomatik ornek rezervasyon kaydi ekleyen demo veri mantigi baslatildi.

- Hic rezervasyonu olmayan her mekan icin 2 mantikli ornek rezervasyon uretilir.
- Orneklerde organizasyon turu, salon, paket, davetli sayisi, toplam tutar, maliyet, kapora, ekstra ve menu bilgileri bulunur.
- Boylece mekan degistirme, rezervasyon listesi, raporlar ve tahsilat alanlari bos kalmadan test edilebilir.

## Mekan Uyelik Takibi

Ana admin tarafinda mekan hesabi acilirken ve mekan listesinde uyelik bilgileri takip edilecek:

- Mekana verilen uyelik paketi.
- Yillik uyelik ucreti.
- Bu uyelikten tahsil edilen tutar.
- Uyelikten kalan borc.

Mekanlar listesinde bu bilgiler her mekan kartinda gorunur. Bu alanlar ana adminin kendi musteri/mekan tahsilatini takip etmesi icindir; mekanin kendi dugun rezervasyon muhasebesinden ayridir.

Demo mekanlarda uyelik finans alanlari bos kalmasin diye ornek paket/ucret/tahsilat/kalan borc verileri otomatik tamamlanir.

## GitHub baglantisi

GitHub deposu olarak su adres not edildi:

`https://github.com/omurlu/dugun-rezervasyon`

Su an bilgisayarda `git` komutu bulunamadigi icin yerel klasor ile GitHub arasinda otomatik gonderme/alma yapamiyorum.

Bunu tamamlamak icin bir kere Git for Windows kurulup proje klasorunde GitHub remote ayarlanacak. Ondan sonra calisma duzeni su olur:

- Baslarken GitHub'daki en guncel hali aliriz.
- Degisiklikleri yerel dosyalara kaydederiz.
- Is bitince GitHub'a gondeririz.
- Bir sonraki gun ayni klasorden devam ederiz.
