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
- SMS bolumune gonderim provasi eklendi: yaklasan otomatik SMS satirindan `Test Gonder` ile mesaj gecmise islenir.
- Test gonderimi ana SMS havuzundan ve secili mekan kotasindan 1 kredi dusurur.
- Ayni planlanan SMS ikinci kez islenmez; satir `Islendi` olarak gorunur.
- Gonderim gecmisi artik planlanan tarih, mekan, alici, sablon ve durum bilgisiyle takip edilir.
- API adresi girildiginde panel `API adresi hazir` durumunu gosterir; gercek saglayici baglantisi icin altyapi ayrildi.

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

## Gorsel Tasarim Notu

- Tum proje icin modern panel/tema katmani eklendi.
- Genel font ailesi Roboto/Segoe UI tabanli sade bir yapiya cekildi.
- Panel, kart, tablo, buton, form ve ozet kutularinda daha modern golge, bosluk, kenarlik ve hover davranisi kullanildi.
- Rapor, SMS, personel ve genel ozet kartlari pastel tonlarla birbirinden ayrildi.
- Tema islevlere dokunmadan CSS seviyesinde uygulandi; veri kaydi ve ekran davranislari ayni kalir.
- Son pastel agirlikli tema kullanici tarafindan fazla renkli bulundu.
- Tema Düğün Yolu alt modulu gibi daha beyaz, sade ve kurumsal bir cizgiye cekildi.
- Ozet kutularinda renkli zeminler kaldirildi; renk artik kutu ust cizgileri, baslik vurgulari ve ana aksiyonlarda kullanilir.
- Basliklarda rose/altin marka vurgusu kullanildi; dashboard hissi daha premium ve sakin hale getirildi.

## Tedarikci Notu

- Tedarikciler bolumu sadece tedarikci tanimi icin sade hale getirildi.
- `Yeni Tedarikci Ekle` butonu personeldeki gibi popup acacak sekilde duzenlendi.
- Tedarikci kartlarindaki `Duzenle` butonu ayni popup icinde tedarikci detaylarini duzenler.
- Tedarikci taniminda ad, kategori, telefon, yetkili kisi, e-posta ve not alanlari bulunur.
- Tedarikciler ekranina Personel Hareket Raporu mantiginda `Tedarikci Cari Raporu` eklendi.
- Rapor alaninda tedarikci, urun/hizmet ve tarih araligi filtreleri bulunur; `Tumu` secilince tum tedarikcilerin hesaplari listelenir.
- Tedarikci secilince urun/hizmet filtresi sadece secili tedarikcinin hareketlerinde gecen urunleri gosterir; tedarikci degisince eski urun secimi sifirlanir.
- Cari tabloda alacak/tutar, odenen, kalan borc ve durum gosterilir.
- Her cari hareket satirinda `Odeme Isle` butonu bulunur; gecmis veya yeni odeme buradan islenir.
- `+ Cari Hareket` butonu tedarikci, urun/hizmet, organizasyon, tarih, alacak/tutar, odenen ve not alanlariyla popup acar.
- Tedarikci tanim kartlari cari raporun altinda kalir; cari hareket detaylari kartlari kalabaliklastirmaz.

## Rezervasyon Formu Notu

- Rezervasyon yeni/duzenle ekraninda genel toplam, tahsilat ve kalan tutar sayfanin altinda sabit gorunen ozet bara alindi.
- Salon + paket, ozel urun/hizmet ve yemek menusu bolumlerinin altina kendi ara toplam satirlari eklendi.
- Ozel urun/hizmet seciminde secilen kalemler form icinde anlik listelenir.
- Taksit ekleme butonu calisir hale getirildi; tarih, tutar ve not bilgisiyle taksit satirlari eklenip silinebilir.
- Rezervasyon listesindeki kartlara silme akisi eklendi; ilk tiklama onay ister, ikinci tiklama kaydi siler.
- Rezervasyon duzenleme ekranindaki geri/iptal butonlari artik ana takvime degil rezervasyon listesine doner.
- Durum secimi sade hale getirildi: `Canli Gorusme` ve `Sozlesme`. Eski `Kapora Alindi` kayitlari gorunumde `Sozlesme` olarak ele alinir.
- Eski kayitlarda sadece salon/paket adi varsa, duzenleme ekraninda salon ve paket secimi artik isimden eslestirilerek dolu gelir.
- Rezervasyon kaydetme hatasina yol acabilecek duzenleme degiskeni duzeltildi; guncelleme sirasinda mevcut rezervasyon dogru bulunur.
- Ozel secim taniminda organizasyon turu yerine tedarikci secimi eklendi. Satis fiyati rezervasyon gelirine, alis fiyati maliyet hesabina dahil edilir.

## Canli Onizleme Notu

- Bu projede yan taraftaki canli goruntu icin calisan adres `http://localhost:5500/`.
- `http://127.0.0.1:5500/` Codex yan tarayicisinda bazen hata verebiliyor; bu yuzden oncelik `localhost:5500`.
- Projeye devam ederken kullanici `canli goruntuyu ac` derse once yerel yayini 5500 portunda baslat, sonra yan tarayiciyi `http://localhost:5500/` adresine gotur.

## Kasa ve Organizasyon Finans Notu

- Sol menuye `Kasa` ekrani eklendi.
- Kasa yapisi organizasyon merkezli kuruldu: rezervasyon tahsilatlari kasa girisi, tedarikci/personel odemeleri kasa cikisi olarak gorunur.
- Rezervasyon kaydindaki tahsilat/kapora otomatik kasa girisi sayilir.
- Tedarikci cari hareketinde `Odenen` tutar varsa otomatik kasa cikisi sayilir ve organizasyon secildiyse ilgili organizasyona baglanir.
- Personel gorevlendirmesinde `Odenen` tutar varsa otomatik kasa cikisi sayilir ve ilgili organizasyona baglanir.
- Elektrik, su, kira, reklam, temizlik, bakim onarim gibi genel giderler icin manuel kasa hareketi ekleme formu eklendi.
- Manuel kasa hareketi istenirse organizasyona baglanabilir; organizasyonsuz genel gider olarak da kalabilir.
- Kasa ekraninda organizasyon, hareket tipi ve tarih araligi filtreleri bulunur.
- Sayfanin altina sabit kasa bari eklendi: kasa bakiyesi, bugun giris ve bugun cikis bilgisi her ekranda gorunur.

## Stok Takibi Notu

- `Stok Takibi` ekrani son tedarikci/cari mantigina uygun sekilde yeniden duzenlendi.
- Ekranda artik `+ Yeni Stok Karti` ve `+ Stok Hareketi` butonlari popup acar.
- Stok kartinda urun adi, kategori, tedarikci, mevcut miktar, minimum stok, birim, konum, birim alis, birim satis ve not alanlari bulunur.
- Stok hareketinde giris/satin alma, organizasyona kullanim ve fire/kayip hareketleri islenir.
- Hareketler tedarikciye ve organizasyona baglanabilir; boylece hangi urunun hangi organizasyonda kullanildigi izlenir.
- Stok hareketi girisi mevcut stogu artirir; organizasyona kullanim ve fire hareketleri mevcut stogu dusurur.
- Stok kartlari duzenlenebilir/silinebilir; stok hareketleri de duzenlenebilir/silinebilir.
- Stok hareket raporunda urun ve organizasyon filtreleri ile tarih araligi bulunur.
- Stok ozetinde toplam urun, dusuk stok, stok maliyeti ve tahmini satis degeri gosterilir.

## Menu - Stok Recete Notu

- `Menu Kategorileri` ve `Yemek Menusu` tek ekranda birlestirildi.
- Sol menude ayri `Menu Kategorileri` satiri kaldirildi; eski `#menuCategories` adresi acilirsa yine `Yemek Menusu` birlesik ekranina gider.
- Birlesik ekranda onem sirasi duzenlendi: ustte yemek/ikram kalemi ekleme ve mevcut menu listesi, altta kategori ayarlari bulunur.
- Genel tasarim prensibi: her bolumde gunluk kullanilan/asli isler ustte, tanim/ayar gibi ikinci onemli alanlar altta tutulacak.
- Kuru pasta, pogaca, kola/limitsiz mesrubat gibi kalemler `Yemek Menusu` tarafinda musterinin sececegi menu olarak durur; arka tarafta `Stok Baglantisi` ile depodan dusurulur.
- Menu tanimina `Hazirlama Sekli` eklendi: mekan mutfagi/asci, disaridan hazir alim, stoktan hazir tuketim veya sadece hizmet.
- Menu tanimina tedarikci, stok baglantisi, kisi basi stok cikisi ve stok hesaplama sekli eklendi.
- Rezervasyon kaydedilirken stok baglantisi olan secili menu kalemleri icin otomatik stok hareketi olusur.
- `Sinirsiz / serbest icim` seciminde kisi basi miktara %20 pay eklenerek stok cikisi hesaplanir.
- Rezervasyon silinirse veya duzenlenirse, o rezervasyondan otomatik olusan stok hareketleri geri alinir ve yeniden hesaplanir.
- Demo olarak `Kola 1 Litre`, `Kuru Pasta`, `Pogaca`, `Ordovr Sarf Malzemesi` stok kartlari ve bunlara bagli menu ornekleri eklendi.

## Tablet Sunum Notu

- Sol menuye `Tablet Sunum` ekrani eklendi.
- Bu ekran mekanin yonetim ekrani degil, gorusme sirasinda ciftlere tabletten gosterilecek secim/teklif ekranidir.
- Salon, paket, yemek/ikram ve ozel secimler kartlarla gosterilir.
- Davetli sayisi, ek organizasyon bedeli, iskonto ve kapora alanlari bulunur.
- Her secimde teklif ozeti canli guncellenir: salon+paket, yemek/ikram, ozel secimler, iskonto sonrasi, tahsilat ve kalan.
- Kasa alt bari bu ekranda gizlenir; ciftlerin gorecegi ekranda finans/kasa bilgisi cikmaz.
- `Secimleri Temizle` butonu tablet ekranindaki secimleri ilk hale alir.
- Tablet dikey/portre tutuldugunda teklif ozeti sagda durup ekrani daraltmaz; secimlerin altina iner.

## Tedarikci Cari Notu

- `Tedarikci Cari` ekranindaki `Genel Ozet`, `Tum Hareketler` ve `Detayli Rapor` sekmeleri calisir hale getirildi.
- `Tedarikci` ve `Tedarikci Cari` artik tek ekranda toplandi: sayfa basligi `Tedarikci ve Cari Yonetimi`.
- Sol menude ayri `Tedarikci Cari` satiri kaldirildi; eski `#supplierAccount` adresi acilirsa yine ayni birlesik ekrana gider.
- Birlesik ekranda ustte cari ozet/raporlar, altta tedarikci tanim kartlari bulunur.
- `+ Cari Hareket` ve `+ Yeni Tedarikci Ekle` butonlari ayni sayfanin sag ustunde yer alir.
- Genel ozet tedarikci bazinda toplam tutar, odenen, kalan borc ve islem sayisini gosterir.
- Genel ozet tablosundaki `Detay` butonu ilgili tedarikcinin hareketlerini filtreleyip `Tum Hareketler` sekmesine gecirir.
- `Tum Hareketler` sekmesi tedarikci, urun/hizmet ve tarih araligi filtreleriyle mevcut cari raporu gosterir.
- `Detayli Rapor` sekmesi urun/hizmet bazinda tedarikci toplamlarini, odenen ve kalan tutarlari listeler.
- `+ Yeni Hareket Ekle` butonu bu ekranda da tedarikci cari hareketi popup'ini acar.
- Tedarikci cari hareket formuna miktar/adet, birim, birim alis fiyati, birim satis fiyati, toplam alis/borc ve organizasyona satis alanlari eklendi.
- Toplam alis/borc miktar x birim alis olarak, organizasyona satis miktar x birim satis olarak otomatik hesaplanir.
- Tedarikci borcu alis tutarindan, organizasyon satis/kar takibi satis tutarindan okunacak sekilde veri saklanir.

## GitHub baglantisi

GitHub deposu olarak su adres not edildi:

`https://github.com/omurlu/dugun-rezervasyon`

Su an bilgisayarda `git` komutu bulunamadigi icin yerel klasor ile GitHub arasinda otomatik gonderme/alma yapamiyorum.

Bunu tamamlamak icin bir kere Git for Windows kurulup proje klasorunde GitHub remote ayarlanacak. Ondan sonra calisma duzeni su olur:

- Baslarken GitHub'daki en guncel hali aliriz.
- Degisiklikleri yerel dosyalara kaydederiz.
- Is bitince GitHub'a gondeririz.
- Bir sonraki gun ayni klasorden devam ederiz.
