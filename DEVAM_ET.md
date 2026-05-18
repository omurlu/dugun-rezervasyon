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

Ek ana admin takip alanlari eklendi:

- Mekan durumu: aktif, deneme, borctan kapali, pasif.
- Uyelik baslangic, bitis ve yenileme tarihi.
- Uyelik borcu varsa mekan kartinda uyari.
- Ana adminin sadece kendisi icin tutacagi admin notu.
- Son giris ve son islem bilgisi.
- Secili mekanin demo rezervasyonlarini temizleme butonu.
- Mekan kartlarinda onayli silme butonu.

Bu alanlar mekanin kendi rezervasyon muhasebesinden ayridir; platform sahibinin musteri/mekan takibi icindir.

## Rapor Filtre ve Karsilastirma Notu

Raporlar bolumunde daha detayli secim ve karsilastirma baslatildi:

- Genel rapor alanina `Karsilastirma` secimi eklendi.
- Secili tarih araligi, gecen yil tam yil veya gecen yil ayni tarih araligi ile kiyaslanabilir.
- Organizasyon turu raporunda sadece dugun, nisan, kina gibi tek bir tur secilebilir.
- Salon raporunda sadece secilen salona ait dokum alinabilir.
- Paket raporunda sadece secilen pakete ait dokum alinabilir.
- Ekstralar raporunda tek bir ekstra urun/hizmet secilebilir.
- Menuler raporunda tek bir yemek menusu secilebilir.
- Bu filtreler seciliyken ustteki toplamlar ve karsilastirma kartlari ayni secime gore hesaplanir.
- Karsilastirma testleri icin her mekanin demo rezervasyonlarina gecen yil karsiliklari otomatik eklenir.
- Demo mekanlarda dugun, nisan ve kina kayitlari birlikte tutulur; boylece organizasyon turu karsilastirmasi bos kalmaz.
- Karsilastirma paneli rezervasyon adedi, satis tutari, masraf, net kar, tahsilat, kalan alacak, konuk sayisi ve ortalama satisi birlikte gosterir.
- Karsilastirma kartlarinin altina bu donem/gecen donem cubuk grafik karsilastirmasi eklendi.
- Demo veri seti genisletildi: her mekan icin dugun, nisan, kina, soz, sunnet, mevlit ve mezuniyet gibi farkli organizasyonlardan birden fazla ornek kayit olusturulur.
- Paket raporlarini daha gercekci test etmek icin her demo paketinden en az 2 rezervasyon olusacak sekilde ornekler tamamlandi.
- Genisletilen demo kayitlarin gecen yil karsiliklari da otomatik eklenir; boylece rapor filtreleri ve grafik karsilastirmalari daha gercekci test edilir.
- Rapor ekranina mekan sahibi icin ust yonetici ozeti, akilli ozet/uyarilar, en cok kazandiranlar, aylik ciro-kar grafigi ve tahsilat raporu eklendi.
- Rapor ekranina Excel'e aktar ve PDF/Yazdir butonlari eklendi. Excel cikisi secili tarih ve filtreye gore CSV dosyasi indirir; PDF icin tarayici yazdirma ekrani acilir.
- Rapor sayfasi siralamasi duzenlendi: secilen rapor tablosu ve karsilastirma ustte, genel analizler ve tahsilat/aylik grafik alanlari altta gosterilir.

## SMS Bildirimleri Notu

SMS bolumu merkezi havuz mantigina gore duzenlendi:

- Sag ustteki `5.000` artik ana SMS havuzu kalan kredi gostergesidir.
- Varsayilan SMS gonderici basligi `AYSAH` olarak ayarlandi.
- Ana admin SMS saglayici kullanici adi, sifre/API anahtari, API adresi ve toplam kredi bilgisini girebilir.
- Her mekan icin ana havuzdan kullanacagi SMS kotasi tanimlanabilir.
- Mekanlar ayri SMS paketi almak zorunda kalmadan ana havuzdan kota kadar gonderim yapacak sekilde tasarlandi.
- Prova, son detay, dugunden 1 gun once, odeme hatirlatmasi, tesekkur, fotograf/video teslim ve yildonumu icin otomatik SMS sablonlari eklendi.
- SMS sablonlari ekrandan eklenebilir, duzenlenebilir, pasife alinabilir veya silinebilir hale getirildi.
- Rezervasyon tarihine gore yaklasan otomatik SMS gonderimleri listelenir.
- Canli SMS gonderimi icin sonraki adimda secilecek saglayicinin API formatina gore gercek gonderim baglantisi eklenecek.

## Personel Notu

- Personel bolumune ekleme, duzenleme, vazgec ve silme akisi eklendi.
- Her mekan icin demo personel kayitlari otomatik olusturulur.
- Personel kartlarindaki Duzenle butonu formu doldurur; kaydedince kart ve istatistikler guncellenir.
- Personel silme tarayici onay penceresi yerine iki asamali hale getirildi: ilk tiklama onay ister, ikinci tiklama siler.
- Yeni Personel Ekle butonu formu net sekilde acar; form kayit sonrasi kapanip personel karti listeye eklenir.
- Personel bolumu gorevlendirme/yevmiye mantigina genisletildi.
- Mekan sahibi personeli secip rezervasyona baglayabilir; gorev, tarih, gunluk yevmiye, odenen tutar ve kalan alacak kart olarak takip edilir.
- Personel kartlari artik toplam gorev, toplam yevmiye, odenen ve kalan alacak ozetlerini gosterir.
- Yeni personel ekleme/duzenleme popup olarak acilir; sayfa uzerinde surekli form kalabaligi olusturmaz.
- Personel Hareket Raporu eklendi: tum personel veya tek personel secilebilir, tarih araligi verilebilir, gorev hareketleri tablo halinde listelenir.
- Personel hareket raporu ustunde personel adi/gorevi, toplam gorev, toplam yevmiye, odenen ve kalan alacak ozet kutulari bulunur.
- Personel ekleme popup'indaki Atama/Etkinlik Sayisi alani kaldirildi; gorev sayisi gorevlendirme kayitlarindan otomatik hesaplanir.
- Personel ekraninin ustundeki Toplam Personel, Gorev Kaydi ve Kalan Personel Alacagi kutulari kaldirildi; detayli ozet artik Personel Hareket Raporu icinde tutulur.
- Personel kimlik kartlari sayfanin en altinda `Personeller` basligi altinda sade kartlar olarak gosterilir.
- Gun sonu veya hafta sonu odemeleri icin personel hareket raporu, secilen personelin toplam yevmiyesini, odenenini ve kalan alacagini hizli gormek icin ana kontrol alani olarak kurgulandi.
- Personel Hareket Raporu'na organizasyon secimi eklendi; mekan sahibi yaklasan bir etkinligi secip o etkinlikte gorevli personeli, telefonlarini, yevmiye/odeme durumlarini tek tabloda gorebilir.
- Rapor basliginin yanindaki ekstra gorevlendirme butonu kaldirildi; yeni gorevlendirme ana sayfa basligindaki butondan acilir.
- Ayrica `Gorev ve Yevmiye Hareketleri` kart bolumu kaldirildi; ayni hareketlerin duzenle/sil islemleri artik Personel Hareket Raporu tablosunda yapilir.
- Personel Hareket Raporu tablosunun en sagina net `Odeme Isle` butonu eklendi; personele o gorev icin odeme yapildiginda bu butondan gorev acilip `Odenen` tutari islenir.
- Personel kartlari sade tutuldu: telefon ve kart icindeki katildigi etkinlikler listesi kaldirildi; kartta isim, gorev, toplam gorev sayisi, genel yevmiye, odenen, kalan, duzenle ve sil kalir.
- Odeme islemi daha anlasilir olsun diye Personel Hareket Raporu tablosunda ilgili gorev yanindaki buton `Odeme Isle` olarak adlandirildi.
- Personel Hareket Raporu'ndaki Personel, Organizasyon, Toplam Gorev, Toplam Yevmiye, Odenen ve Kalan Alacak ozet kutulari pastel renklerle ayrildi.

## GitHub baglantisi

GitHub deposu olarak su adres not edildi:

`https://github.com/omurlu/dugun-rezervasyon`

Su an bilgisayarda `git` komutu bulunamadigi icin yerel klasor ile GitHub arasinda otomatik gonderme/alma yapamiyorum.

Bunu tamamlamak icin bir kere Git for Windows kurulup proje klasorunde GitHub remote ayarlanacak. Ondan sonra calisma duzeni su olur:

- Baslarken GitHub'daki en guncel hali aliriz.
- Degisiklikleri yerel dosyalara kaydederiz.
- Is bitince GitHub'a gondeririz.
- Bir sonraki gun ayni klasorden devam ederiz.
