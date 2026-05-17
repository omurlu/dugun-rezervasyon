const storageKey = "wedding-platform-state-v3";

const makeId = () => crypto.randomUUID();

const seed = {
  year: 2026,
  activeView: "dashboard",
  currentUser: { role: "admin", name: "Ana Admin" },
  activeTenantId: "tenant_lavanta",
  tenants: [
    { id: "tenant_lavanta", name: "Lavanta Kır Bahçesi", username: "lavanta", password: "123456", status: "active", contactName: "Ayşe Demir", phone: "0532 111 2233", city: "İstanbul", membershipPackage: "Profesyonel", annualFee: 24000, membershipPaid: 12000 },
    { id: "tenant_safir", name: "Safir Balo Salonu", username: "safir", password: "123456", status: "active", contactName: "Mehmet Kaya", phone: "0533 444 5566", city: "Ankara", membershipPackage: "Kurumsal", annualFee: 36000, membershipPaid: 36000 }
  ],
  organizationTypes: [
    { id: makeId(), name: "Düğün", value: "dugun" },
    { id: makeId(), name: "Nişan", value: "nisan" },
    { id: makeId(), name: "Kına", value: "kina" },
    { id: makeId(), name: "Sünnet", value: "sunnet" }
  ],
  halls: [
    { id: makeId(), name: "Altın Salon", capacity: 550, description: "Kapalı salon, sahne, gelin odası ve geniş pist." },
    { id: makeId(), name: "Pembe Bahçe", capacity: 420, description: "Kır düğünü alanı, nikah tagı ve açık hava servis düzeni." }
  ],
  packages: [
    { id: makeId(), name: "Düğün Standart Paket", type: "dugun", cost: 125000, price: 185000, personCost: 210, personPrice: 330, description: "Salon, temel süsleme, servis ekibi ve ses sistemi.", content: "Salon kullanımı\nServis ekibi\nDJ & ses sistemi\nTemel masa süsleme" },
    { id: makeId(), name: "Kır Düğünü Premium", type: "dugun", cost: 175000, price: 245000, personCost: 260, personPrice: 410, description: "Bahçe alanı, nikah tagı, premium dekor ve karşılama.", content: "Bahçe alanı\nNikah tagı\nPremium dekor\nKarşılama kokteyli" }
  ],
  extras: [
    { id: makeId(), name: "Fotoğraf Çekimi", type: "dugun", cost: 6000, price: 8000 },
    { id: makeId(), name: "Video Çekimi", type: "dugun", cost: 9000, price: 12000 },
    { id: makeId(), name: "Düğün Pastası (3 Katlı)", type: "dugun", cost: 3500, price: 5000 },
    { id: makeId(), name: "Gelin Çiçeği", type: "nisan", cost: 1500, price: 2000 },
    { id: makeId(), name: "Prova Organizasyonu", type: "dugun", cost: 2500, price: 4500 }
  ],
  menuCategories: [
    { id: makeId(), name: "Mezeler", value: "mezeler" },
    { id: makeId(), name: "Kırmızı Etler", value: "kirmizi_etler" },
    { id: makeId(), name: "Beyaz Etler", value: "beyaz_etler" },
    { id: makeId(), name: "Tatlılar", value: "tatlilar" },
    { id: makeId(), name: "İçecekler", value: "icecekler" }
  ],
  menus: [
    { id: makeId(), name: "Kanepe", category: "mezeler", cost: 30, price: 50 },
    { id: makeId(), name: "Köfte", category: "kirmizi_etler", cost: 24, price: 40 },
    { id: makeId(), name: "Tavuk Şiş", category: "beyaz_etler", cost: 28, price: 45 },
    { id: makeId(), name: "Düğün Çorbası", category: "mezeler", cost: 12, price: 20 },
    { id: makeId(), name: "Baklava", category: "tatlilar", cost: 16, price: 25 }
  ],
  reservations: [
    {
      id: makeId(),
      brideName: "Ayla",
      groomName: "Mehmet",
      couple: "Ayla ve Mehmet",
      phone: "05325545444",
      date: "2025-10-23",
      contractDate: "2025-10-21",
      type: "dugun",
      hallName: "Altın Salon",
      packageName: "Düğün Standart Paket",
      guests: 550,
      total: 282000,
      cost: 172000,
      paid: 0,
      status: "canli_gorusme",
      createdAt: "21.10.2025 03:53"
    }
  ],
  smsTemplates: [
    { id: makeId(), title: "Evlilik Yıldönümü Kutlaması", tag: "Yıldırımumu", mode: "Otomatik gönderim", offset: "", body: "Sevgili {gelin_adi} & {damat_adi}, evlilik yıldönümünüzü en içimizde kaldığımız yerden kutlarız! Mutlu yıllar." },
    { id: makeId(), title: "Düğün Öncesi 1 Hafta Hatırlatma", tag: "Hatırlatma", mode: "Otomatik gönderim", offset: "7 gün önce", body: "Merhaba {gelin_adi} & {damat_adi}, düğününüze 1 hafta kaldı. Son hazırlıkları kontrol etmeyi unutmayın." },
    { id: makeId(), title: "Düğün Öncesi 1 Gün", tag: "Hatırlatma", mode: "Otomatik gönderim", offset: "1 gün önce", body: "Sevgili {gelin_adi} ve {damat_adi}, büyük gün yarın. Heyecanınızı paylaşıyoruz." },
    { id: makeId(), title: "Düğün Sonrası Teşekkür", tag: "Teşekkür", mode: "Otomatik gönderim", offset: "3 gün sonra", body: "Sevgili {gelin_adi} & {damat_adi}, özel gününüzü bizimle paylaşmak bizi çok mutlu etti. Teşekkür ederiz." },
    { id: makeId(), title: "Fotoğraf Video Hazır", tag: "Medya Hazır", mode: "Manuel gönderim", offset: "", body: "Merhaba {gelin_adi} & {damat_adi}, fotoğraf ve videolarınız hazır. Ofisimizden teslim alabilirsiniz." },
    { id: makeId(), title: "Ödeme Hatırlatması", tag: "Ödeme", mode: "Otomatik gönderim", offset: "3 gün önce", body: "Merhaba {gelin_adi} & {damat_adi}, {tutar} TL tutarındaki ödemenizin vadesi yaklaştı." }
  ],
  stock: [
    { id: makeId(), name: "Masa Örtüsü - Beyaz", category: "Dekorasyon", quantity: 150, minimum: 50, unit: "adet", location: "Depo A" },
    { id: makeId(), name: "Sandalye Kılıfı - Saten", category: "Dekorasyon", quantity: 200, minimum: 100, unit: "adet", location: "Depo A" },
    { id: makeId(), name: "LED Işık Sistemi", category: "Aydınlatma", quantity: 8, minimum: 5, unit: "set", location: "Depo B" },
    { id: makeId(), name: "Ses Sistemi", category: "Ekipman", quantity: 3, minimum: 2, unit: "set", location: "Depo B" },
    { id: makeId(), name: "Çiçek Vazo - Büyük", category: "Dekorasyon", quantity: 25, minimum: 30, unit: "adet", location: "Depo A" },
    { id: makeId(), name: "Projeksiyon Cihazı", category: "Ekipman", quantity: 2, minimum: 2, unit: "adet", location: "Depo B" }
  ],
  staff: [
    { id: makeId(), name: "Ahmet Yılmaz", role: "Etkinlik Koordinatörü", phone: "0532 111 2233", email: "ahmet@example.com", events: 5, active: true },
    { id: makeId(), name: "Ayşe Demir", role: "Dekorasyon", phone: "0533 444 5566", email: "ayse@example.com", events: 3, active: true },
    { id: makeId(), name: "Mehmet Kaya", role: "Teknik Ekip Lideri", phone: "0534 777 8899", email: "mehmet@example.com", events: 4, active: true },
    { id: makeId(), name: "Fatma Öztürk", role: "Mutfak Şefi", phone: "0535 222 3344", email: "fatma@example.com", events: 6, active: true },
    { id: makeId(), name: "Ali Çelik", role: "Güvenlik Görevlisi", phone: "0536 555 6677", email: "ali@example.com", events: 2, active: false }
  ],
  suppliers: [
    { id: makeId(), name: "Çiçekçi Güller", category: "Çiçek", phone: "0532 111 4455", balance: -4000 },
    { id: makeId(), name: "Makarna Sarayı", category: "Yemek", phone: "0533 222 5566", balance: -9000 },
    { id: makeId(), name: "Foto Stüdyo Pro", category: "Fotoğraf", phone: "0534 333 6677", balance: -6000 },
    { id: makeId(), name: "DJ Cem Müzik", category: "Müzik", phone: "0535 444 7788", balance: -12000 },
    { id: makeId(), name: "Video Prodüksiyonu", category: "Video", phone: "0536 555 8899", balance: -10000 }
  ],
  specialDays: [
    { date: "2026-01-01", title: "Yılbaşı" },
    { date: "2026-03-20", title: "Ramazan Bayramı Arifesi" },
    { date: "2026-03-21", title: "Ramazan Bayramı" },
    { date: "2026-03-22", title: "Ramazan Bayramı" },
    { date: "2026-03-23", title: "Ramazan Bayramı" },
    { date: "2026-05-01", title: "Emek ve Dayanışma Günü" },
    { date: "2026-05-19", title: "Atatürk'ü Anma, Gençlik ve Spor Bayramı" },
    { date: "2026-05-26", title: "Kurban Bayramı Arifesi" },
    { date: "2026-05-27", title: "Kurban Bayramı" },
    { date: "2026-05-28", title: "Kurban Bayramı" },
    { date: "2026-05-29", title: "Kurban Bayramı" },
    { date: "2026-05-30", title: "Kurban Bayramı" },
    { date: "2026-07-15", title: "Demokrasi ve Milli Birlik Günü" },
    { date: "2026-08-30", title: "Zafer Bayramı" },
    { date: "2026-10-29", title: "Cumhuriyet Bayramı" }
  ]
};

const demoSeed = {
  organizationTypes: [
    { name: "Düğün", value: "dugun" },
    { name: "Nişan", value: "nisan" },
    { name: "Kına", value: "kina" },
    { name: "Söz", value: "soz" },
    { name: "Sünnet Düğünü", value: "sunnet_dugunu" },
    { name: "Mevlit", value: "mevlit" },
    { name: "Mezuniyet Töreni", value: "mezuniyet" }
  ],
  halls: [
    { name: "Safir Balo Salonu", capacity: 650, description: "Yüksek tavanlı, geniş pistli, kapalı davet salonu." },
    { name: "Lavanta Kır Bahçesi", capacity: 480, description: "Nikah alanı, gelin yolu ve açık hava servis düzeni." },
    { name: "Lale Teras Davet", capacity: 260, description: "Nişan, söz ve butik organizasyonlar için teras salon." }
  ],
  packages: [
    { name: "Düğün Gold Paket", type: "dugun", cost: 185000, price: 275000, personCost: 260, personPrice: 420, description: "Salon, servis ekibi, masa süsleme, DJ ve ışık sistemi.", content: "Salon kullanımı\nServis ekibi\nDJ & ışık sistemi\nGelin yolu\nStandart masa süsleme" },
    { name: "Kır Düğünü Premium Paket", type: "dugun", cost: 225000, price: 340000, personCost: 310, personPrice: 520, description: "Kır alanı, nikah tagı, premium dekor ve karşılama kokteyli.", content: "Kır bahçesi kullanımı\nNikah tagı\nKarşılama kokteyli\nPremium masa dekoru\nFotoğraf köşesi" },
    { name: "Nişan Zarafet Paketi", type: "nisan", cost: 72000, price: 118000, personCost: 160, personPrice: 260, description: "Söz/nişan masası, butik süsleme ve ikram servisi.", content: "Nişan masası\nButik masa süsleme\nİkram servisi\nSes sistemi" },
    { name: "Kına Gecesi Paket", type: "kina", cost: 88000, price: 145000, personCost: 170, personPrice: 285, description: "Kına tahtı, bindallı alanı, müzik ve sahne dekoru.", content: "Kına tahtı\nSahne dekoru\nKına ekibi hazırlığı\nDJ & ses sistemi" },
    { name: "Söz ve Nikah Paketi", type: "soz", cost: 42000, price: 76000, personCost: 120, personPrice: 210, description: "Aile arası söz, nikah ve butik kutlamalar için paket.", content: "Söz masası\nMini dekor\nİçecek servisi\nButik pasta sunumu" },
    { name: "Sünnet Düğünü Paket", type: "sunnet_dugunu", cost: 98000, price: 162000, personCost: 150, personPrice: 250, description: "Sünnet tahtı, çocuk konsepti, eğlence ve ikram servisi.", content: "Sünnet tahtı\nÇocuk konsept dekor\nAnimasyon alanı\nİkram servisi" },
    { name: "Mevlit İkram Paketi", type: "mevlit", cost: 28000, price: 52000, personCost: 95, personPrice: 155, description: "Mevlit, anma ve aile davetleri için ikram ağırlıklı paket.", content: "Pilav ayran servisi\nTatlı ikramı\nÇay servisi\nSalon düzeni" },
    { name: "Mezuniyet Kokteyl Paketi", type: "mezuniyet", cost: 76000, price: 128000, personCost: 145, personPrice: 240, description: "Okul mezuniyetleri için DJ, kokteyl ve sahne düzeni.", content: "DJ performansı\nSahne düzeni\nKokteyl masaları\nFotoğraf alanı" }
  ],
  extras: [
    { name: "Fotoğraf & Video Ekibi", type: "dugun", cost: 12000, price: 18000 },
    { name: "Drone Çekimi", type: "dugun", cost: 7000, price: 11000 },
    { name: "Canlı Müzik Ekibi", type: "dugun", cost: 18000, price: 28000 },
    { name: "Gelin Yolu Çiçek Dekoru", type: "dugun", cost: 6500, price: 10500 },
    { name: "Kına Tahtı ve Bindallı Seti", type: "kina", cost: 9000, price: 14500 },
    { name: "Nişan Masası Premium Dekor", type: "nisan", cost: 7500, price: 12500 },
    { name: "Sünnet Tahtı Dekoru", type: "sunnet_dugunu", cost: 8500, price: 13500 },
    { name: "Mevlit Lokma Arabası", type: "mevlit", cost: 6000, price: 9500 },
    { name: "Mezuniyet Sahne Işık Paketi", type: "mezuniyet", cost: 11000, price: 17500 }
  ],
  menuCategories: [
    { name: "Başlangıçlar", value: "baslangiclar" },
    { name: "Ana Yemekler", value: "ana_yemekler" },
    { name: "Ara Sıcaklar", value: "ara_sicaklar" },
    { name: "Tatlılar", value: "tatlilar" },
    { name: "İçecekler", value: "icecekler" },
    { name: "Mevlit İkramları", value: "mevlit_ikramlari" },
    { name: "Çocuk Menüleri", value: "cocuk_menuleri" }
  ],
  menus: [
    { name: "Ordövr Tabağı", category: "baslangiclar", cost: 55, price: 90 },
    { name: "Düğün Çorbası", category: "baslangiclar", cost: 32, price: 60 },
    { name: "Peynirli Sigara Böreği", category: "ara_sicaklar", cost: 26, price: 45 },
    { name: "Izgara Köfte", category: "ana_yemekler", cost: 95, price: 165 },
    { name: "Tavuk Şiş", category: "ana_yemekler", cost: 75, price: 135 },
    { name: "Et Kavurma Pilav", category: "ana_yemekler", cost: 125, price: 210 },
    { name: "Fıstıklı Baklava", category: "tatlilar", cost: 48, price: 85 },
    { name: "Düğün Pastası Dilimi", category: "tatlilar", cost: 38, price: 70 },
    { name: "Limitsiz Meşrubat", category: "icecekler", cost: 35, price: 65 },
    { name: "Pilav Ayran İkramı", category: "mevlit_ikramlari", cost: 42, price: 75 },
    { name: "Lokma Tatlısı", category: "mevlit_ikramlari", cost: 28, price: 55 },
    { name: "Çocuk Burger Menü", category: "cocuk_menuleri", cost: 70, price: 125 }
  ],
  reservations: [
    { couple: "Elif ve Burak", brideName: "Elif", groomName: "Burak", phone: "0532 410 2233", date: "2026-06-14", contractDate: "2026-03-12", type: "dugun", hallName: "Lavanta Kır Bahçesi", packageName: "Kır Düğünü Premium Paket", guests: 480, total: 589600, cost: 374000, paid: 90000, status: "kapora_alindi", createdAt: "12.03.2026 14:20", extras: ["Fotoğraf & Video Ekibi", "Drone Çekimi", "Gelin Yolu Çiçek Dekoru"], menus: ["Ordövr Tabağı", "Et Kavurma Pilav", "Fıstıklı Baklava", "Limitsiz Meşrubat"] },
    { couple: "Ayşe ve Emre", brideName: "Ayşe", groomName: "Emre", phone: "0533 620 4455", date: "2026-08-09", contractDate: "2026-04-03", type: "dugun", hallName: "Safir Balo Salonu", packageName: "Düğün Gold Paket", guests: 620, total: 552900, cost: 343000, paid: 125000, status: "sozlesme", createdAt: "03.04.2026 11:05", extras: ["Fotoğraf & Video Ekibi", "Canlı Müzik Ekibi"], menus: ["Düğün Çorbası", "Tavuk Şiş", "Düğün Pastası Dilimi", "Limitsiz Meşrubat"] },
    { couple: "Zeynep ve Mert", brideName: "Zeynep", groomName: "Mert", phone: "0534 225 7788", date: "2026-04-12", contractDate: "2026-02-18", type: "nisan", hallName: "Lale Teras Davet", packageName: "Nişan Zarafet Paketi", guests: 180, total: 177300, cost: 104000, paid: 45000, status: "kapora_alindi", createdAt: "18.02.2026 16:40", extras: ["Nişan Masası Premium Dekor"], menus: ["Ordövr Tabağı", "Peynirli Sigara Böreği", "Fıstıklı Baklava", "Limitsiz Meşrubat"] },
    { couple: "Derya ve Can", brideName: "Derya", groomName: "Can", phone: "0535 334 9012", date: "2026-05-16", contractDate: "2026-02-26", type: "kina", hallName: "Safir Balo Salonu", packageName: "Kına Gecesi Paket", guests: 260, total: 233600, cost: 142000, paid: 60000, status: "kapora_alindi", createdAt: "26.02.2026 13:15", extras: ["Kına Tahtı ve Bindallı Seti", "Fotoğraf & Video Ekibi"], menus: ["Ordövr Tabağı", "Tavuk Şiş", "Düğün Pastası Dilimi", "Limitsiz Meşrubat"] },
    { couple: "Nazlı ve Kerem", brideName: "Nazlı", groomName: "Kerem", phone: "0536 770 1122", date: "2026-09-05", contractDate: "2026-05-02", type: "soz", hallName: "Lale Teras Davet", packageName: "Söz ve Nikah Paketi", guests: 120, total: 104900, cost: 61000, paid: 25000, status: "sozlesme", createdAt: "02.05.2026 12:00", extras: ["Nişan Masası Premium Dekor"], menus: ["Ordövr Tabağı", "Fıstıklı Baklava", "Limitsiz Meşrubat"] },
    { couple: "Deniz Sünnet Düğünü", brideName: "Deniz", groomName: "Ailesi", phone: "0537 442 1188", date: "2026-07-04", contractDate: "2026-03-22", type: "sunnet_dugunu", hallName: "Lavanta Kır Bahçesi", packageName: "Sünnet Düğünü Paket", guests: 300, total: 250500, cost: 156000, paid: 50000, status: "kapora_alindi", createdAt: "22.03.2026 10:30", extras: ["Sünnet Tahtı Dekoru"], menus: ["Çocuk Burger Menü", "Tavuk Şiş", "Düğün Pastası Dilimi", "Limitsiz Meşrubat"] },
    { couple: "Yılmaz Ailesi Mevlit", brideName: "Yılmaz", groomName: "Ailesi", phone: "0538 150 3344", date: "2026-11-08", contractDate: "2026-06-01", type: "mevlit", hallName: "Lale Teras Davet", packageName: "Mevlit İkram Paketi", guests: 220, total: 95500, cost: 56500, paid: 30000, status: "sozlesme", createdAt: "01.06.2026 09:45", extras: ["Mevlit Lokma Arabası"], menus: ["Pilav Ayran İkramı", "Lokma Tatlısı"] },
    { couple: "Güneş Koleji Mezuniyet", brideName: "Güneş Koleji", groomName: "Mezuniyet", phone: "0539 600 7788", date: "2026-06-28", contractDate: "2026-04-29", type: "mezuniyet", hallName: "Safir Balo Salonu", packageName: "Mezuniyet Kokteyl Paketi", guests: 380, total: 239700, cost: 141000, paid: 80000, status: "kapora_alindi", createdAt: "29.04.2026 15:10", extras: ["Mezuniyet Sahne Işık Paketi"], menus: ["Peynirli Sigara Böreği", "Çocuk Burger Menü", "Limitsiz Meşrubat"] }
  ]
};

let state = loadState();
const root = document.querySelector("#view-root");
const toast = document.querySelector("#toast");
const sidebar = document.querySelector(".sidebar");
const accountPill = document.querySelector("#accountPill");
const smsCreditPill = document.querySelector("#smsCreditPill");
const tenantScopedCollections = ["organizationTypes", "halls", "packages", "extras", "menuCategories", "menus", "reservations", "smsTemplates", "stock", "staff", "staffAssignments", "suppliers"];
normalizeState();

function loadState() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return structuredClone(seed);
  try {
    return { ...structuredClone(seed), ...JSON.parse(saved) };
  } catch {
    return structuredClone(seed);
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function normalizeState() {
  if (!Array.isArray(state.tenants) || !state.tenants.length) state.tenants = structuredClone(seed.tenants);
  if (!state.currentUser) state.currentUser = structuredClone(seed.currentUser);
  if (!state.activeTenantId || !state.tenants.some(tenant => tenant.id === state.activeTenantId)) state.activeTenantId = state.tenants[0]?.id || seed.activeTenantId;
  normalizeTenants();
  if (!Array.isArray(state.organizationTypes)) state.organizationTypes = structuredClone(seed.organizationTypes);
  if (!Array.isArray(state.specialDays)) state.specialDays = structuredClone(seed.specialDays);
  if (!Array.isArray(state.reservations)) state.reservations = [];
  if (!Array.isArray(state.staffAssignments)) state.staffAssignments = [];
  ensureDemoData();
  assignTenantIds();
  ensureTenantDemoReservations();
  ensureTenantDemoStaff();
  ensureTenantDemoStaffAssignments();
  markTenantDemoReservations();
  ensureLastYearComparisonReservations();
  ensureSmsSystem();
  saveState();
}

function normalizeTenants() {
  state.tenants = state.tenants.map((tenant, index) => {
    const demoPlans = [
      { membershipPackage: "Profesyonel", annualFee: 24000, membershipPaid: 12000 },
      { membershipPackage: "Kurumsal", annualFee: 36000, membershipPaid: 36000 },
      { membershipPackage: "Başlangıç", annualFee: 18000, membershipPaid: 6000 },
      { membershipPackage: "Profesyonel", annualFee: 30000, membershipPaid: 18000 }
    ];
    const demoPlan = demoPlans[index % demoPlans.length];
    const annualFee = Number(tenant.annualFee || demoPlan.annualFee);
    const membershipPaid = Number(tenant.membershipPaid ?? demoPlan.membershipPaid);
    const startDate = tenant.membershipStartDate || `2026-0${index % 3 + 1}-01`;
    const endDate = tenant.membershipEndDate || `2026-12-${String(20 + index).padStart(2, "0")}`;
    return {
      membershipPackage: demoPlan.membershipPackage,
      annualFee,
      membershipPaid,
      membershipStartDate: startDate,
      membershipEndDate: endDate,
      renewalDate: tenant.renewalDate || endDate,
      adminNote: tenant.adminNote || "Sözleşme ve ödeme takibi ana admin tarafından kontrol edilecek.",
      lastLoginAt: tenant.lastLoginAt || `2026-05-${String(10 + index).padStart(2, "0")} 10:${String(20 + index).padStart(2, "0")}`,
      lastActivityAt: tenant.lastActivityAt || `2026-05-${String(14 + index).padStart(2, "0")} 16:${String(10 + index).padStart(2, "0")}`,
      ...tenant,
      status: tenant.status || (index === 2 ? "trial" : "active"),
      annualFee: Number(tenant.annualFee || annualFee),
      membershipPaid: Number(tenant.membershipPaid ?? membershipPaid)
    };
  });
}

function assignTenantIds() {
  const tenantId = state.activeTenantId || state.tenants[0]?.id;
  tenantScopedCollections.forEach(collection => {
    if (!Array.isArray(state[collection])) return;
    state[collection] = state[collection].map(item => item.tenantId ? item : { ...item, tenantId });
  });
}

function isAdmin() {
  return state.currentUser?.role === "admin";
}

function currentTenant() {
  return state.tenants.find(tenant => tenant.id === state.activeTenantId) || state.tenants[0] || null;
}

function scopedItems(collection) {
  const items = Array.isArray(state[collection]) ? state[collection] : [];
  const tenantId = currentTenant()?.id;
  return tenantScopedCollections.includes(collection) && tenantId
    ? items.filter(item => !item.tenantId || item.tenantId === tenantId)
    : items;
}

function visibleReservations() {
  return scopedItems("reservations");
}

function sameText(first, second) {
  return String(first || "").trim().toLocaleLowerCase("tr-TR") === String(second || "").trim().toLocaleLowerCase("tr-TR");
}

function ensureByValue(collection, items) {
  if (!Array.isArray(state[collection])) state[collection] = [];
  items.forEach(item => {
    const existing = state[collection].find(row => row.value === item.value);
    if (existing) {
      Object.assign(existing, { ...item, id: existing.id });
      return;
    }
    state[collection].push({ id: makeId(), ...item });
  });
}

function ensureByName(collection, items) {
  if (!Array.isArray(state[collection])) state[collection] = [];
  items.forEach(item => {
    const exists = state[collection].some(row => sameText(row.name, item.name));
    if (!exists) state[collection].push({ id: makeId(), ...item });
  });
}

function findByName(collection, name) {
  return (state[collection] || []).find(item => sameText(item.name, name));
}

function ensureDemoReservations() {
  demoSeed.reservations.forEach(item => {
    const exists = state.reservations.some(row => sameText(row.couple, item.couple) && row.date === item.date);
    if (exists) return;
    const hall = findByName("halls", item.hallName);
    const packageItem = findByName("packages", item.packageName);
    state.reservations.push({
      id: makeId(),
      ...item,
      hallId: hall?.id || "",
      hallName: hall?.name || item.hallName,
      packageId: packageItem?.id || "",
      packageName: packageItem?.name || item.packageName
    });
  });
}

function ensureDemoData() {
  if (state.demoDataVersion < 2 || !state.demoDataVersion) {
    ensureByValue("organizationTypes", demoSeed.organizationTypes);
    ensureByName("halls", demoSeed.halls);
    ensureByName("packages", demoSeed.packages);
    ensureByName("extras", demoSeed.extras);
    ensureByValue("menuCategories", demoSeed.menuCategories);
    ensureByName("menus", demoSeed.menus);
    ensureDemoReservations();
  }
  state.reportStart = state.reportStart || `${state.year}-01-01`;
  state.reportEnd = state.reportEnd || `${state.year}-12-31`;
  state.demoDataVersion = Math.max(Number(state.demoDataVersion || 0), 3);
}

function ensureTenantDemoReservations() {
  const samples = [
    {
      brideName: "Elif",
      groomName: "Burak",
      couple: "Elif ve Burak",
      phone: "0532 410 2233",
      date: "2026-06-14",
      contractDate: "2026-03-12",
      type: "dugun",
      hallName: "Safir Balo Salonu",
      packageName: "Düğün Gold Paket",
      guests: 420,
      total: 485000,
      cost: 304000,
      paid: 90000,
      status: "kapora_alindi",
      extras: ["Fotoğraf & Video Ekibi", "Drone Çekimi"],
      menus: ["Ordövr Tabağı", "Et Kavurma Pilav", "Fıstıklı Baklava", "Limitsiz Meşrubat"]
    },
    {
      brideName: "Zeynep",
      groomName: "Mert",
      couple: "Zeynep ve Mert",
      phone: "0534 225 7788",
      date: "2026-08-09",
      contractDate: "2026-04-03",
      type: "nisan",
      hallName: "Lale Teras Davet",
      packageName: "Nişan Zarafet Paketi",
      guests: 180,
      total: 177300,
      cost: 104000,
      paid: 45000,
      status: "sozlesme",
      extras: ["Nişan Masası Premium Dekor"],
      menus: ["Ordövr Tabağı", "Peynirli Sigara Böreği", "Fıstıklı Baklava"]
    },
    {
      brideName: "Derya",
      groomName: "Can",
      couple: "Derya ve Can",
      phone: "0535 334 9012",
      date: "2026-09-05",
      contractDate: "2026-05-02",
      type: "kina",
      hallName: "Lavanta Kır Bahçesi",
      packageName: "Kına Gecesi Paket",
      guests: 260,
      total: 233600,
      cost: 142000,
      paid: 60000,
      status: "canli_gorusme",
      extras: ["Kına Tahtı ve Bindallı Seti"],
      menus: ["Düğün Çorbası", "Tavuk Şiş", "Düğün Pastası Dilimi"]
    },
    {
      brideName: "Ayşe",
      groomName: "Emre",
      couple: "Ayşe ve Emre",
      phone: "0533 620 4455",
      date: "2026-07-19",
      contractDate: "2026-04-10",
      type: "dugun",
      hallName: "Lavanta Kır Bahçesi",
      packageName: "Kır Düğünü Premium Paket",
      guests: 510,
      total: 605200,
      cost: 382000,
      paid: 140000,
      status: "sozlesme",
      extras: ["Fotoğraf & Video Ekibi", "Canlı Müzik Ekibi", "Gelin Yolu Çiçek Dekoru"],
      menus: ["Düğün Çorbası", "Izgara Köfte", "Düğün Pastası Dilimi", "Limitsiz Meşrubat"]
    },
    {
      brideName: "Burcu",
      groomName: "Kaan",
      couple: "Burcu ve Kaan",
      phone: "0532 414 7788",
      date: "2026-12-06",
      contractDate: "2026-07-16",
      type: "dugun",
      hallName: "Safir Balo Salonu",
      packageName: "Düğün Gold Paket",
      guests: 560,
      total: 548500,
      cost: 337000,
      paid: 180000,
      status: "sozlesme",
      extras: ["Fotoğraf & Video Ekibi", "Drone Çekimi", "Canlı Müzik Ekibi"],
      menus: ["Ordövr Tabağı", "Et Kavurma Pilav", "Fıstıklı Baklava", "Limitsiz Meşrubat"]
    },
    {
      brideName: "Mina",
      groomName: "Alp",
      couple: "Mina ve Alp",
      phone: "0533 508 1199",
      date: "2026-04-26",
      contractDate: "2026-01-28",
      type: "dugun",
      hallName: "Lavanta Kır Bahçesi",
      packageName: "Kır Düğünü Premium Paket",
      guests: 440,
      total: 556800,
      cost: 348000,
      paid: 120000,
      status: "kapora_alindi",
      extras: ["Fotoğraf & Video Ekibi", "Gelin Yolu Çiçek Dekoru"],
      menus: ["Düğün Çorbası", "Tavuk Şiş", "Düğün Pastası Dilimi", "Limitsiz Meşrubat"]
    },
    {
      brideName: "Seda",
      groomName: "Okan",
      couple: "Seda ve Okan",
      phone: "0532 880 4411",
      date: "2026-05-24",
      contractDate: "2026-02-20",
      type: "nisan",
      hallName: "Lale Teras Davet",
      packageName: "Nişan Zarafet Paketi",
      guests: 145,
      total: 153700,
      cost: 91000,
      paid: 50000,
      status: "kapora_alindi",
      extras: ["Nişan Masası Premium Dekor", "Fotoğraf & Video Ekibi"],
      menus: ["Ordövr Tabağı", "Peynirli Sigara Böreği", "Düğün Pastası Dilimi", "Limitsiz Meşrubat"]
    },
    {
      brideName: "Ece",
      groomName: "Tolga",
      couple: "Ece ve Tolga",
      phone: "0537 771 2233",
      date: "2026-10-11",
      contractDate: "2026-06-18",
      type: "kina",
      hallName: "Safir Balo Salonu",
      packageName: "Kına Gecesi Paket",
      guests: 310,
      total: 268400,
      cost: 161000,
      paid: 85000,
      status: "sozlesme",
      extras: ["Kına Tahtı ve Bindallı Seti", "Canlı Müzik Ekibi"],
      menus: ["Ordövr Tabağı", "Tavuk Şiş", "Fıstıklı Baklava", "Limitsiz Meşrubat"]
    },
    {
      brideName: "Nazlı",
      groomName: "Kerem",
      couple: "Nazlı ve Kerem",
      phone: "0536 770 1122",
      date: "2026-09-26",
      contractDate: "2026-05-28",
      type: "soz",
      hallName: "Lale Teras Davet",
      packageName: "Söz ve Nikah Paketi",
      guests: 95,
      total: 88200,
      cost: 52000,
      paid: 30000,
      status: "kapora_alindi",
      extras: ["Nişan Masası Premium Dekor"],
      menus: ["Ordövr Tabağı", "Fıstıklı Baklava", "Limitsiz Meşrubat"]
    },
    {
      brideName: "Deniz",
      groomName: "Ailesi",
      couple: "Deniz Sünnet Düğünü",
      phone: "0537 442 1188",
      date: "2026-07-04",
      contractDate: "2026-03-22",
      type: "sunnet_dugunu",
      hallName: "Lavanta Kır Bahçesi",
      packageName: "Sünnet Düğünü Paket",
      guests: 300,
      total: 250500,
      cost: 156000,
      paid: 50000,
      status: "kapora_alindi",
      extras: ["Sünnet Tahtı Dekoru"],
      menus: ["Çocuk Burger Menü", "Tavuk Şiş", "Düğün Pastası Dilimi", "Limitsiz Meşrubat"]
    },
    {
      brideName: "Yılmaz",
      groomName: "Ailesi",
      couple: "Yılmaz Ailesi Mevlit",
      phone: "0538 150 3344",
      date: "2026-11-08",
      contractDate: "2026-06-01",
      type: "mevlit",
      hallName: "Lale Teras Davet",
      packageName: "Mevlit İkram Paketi",
      guests: 220,
      total: 95500,
      cost: 56500,
      paid: 30000,
      status: "sozlesme",
      extras: ["Mevlit Lokma Arabası"],
      menus: ["Pilav Ayran İkramı", "Lokma Tatlısı"]
    },
    {
      brideName: "Güneş Koleji",
      groomName: "Mezuniyet",
      couple: "Güneş Koleji Mezuniyet",
      phone: "0539 600 7788",
      date: "2026-06-28",
      contractDate: "2026-04-29",
      type: "mezuniyet",
      hallName: "Safir Balo Salonu",
      packageName: "Mezuniyet Kokteyl Paketi",
      guests: 380,
      total: 239700,
      cost: 141000,
      paid: 80000,
      status: "kapora_alindi",
      extras: ["Mezuniyet Sahne Işık Paketi"],
      menus: ["Peynirli Sigara Böreği", "Çocuk Burger Menü", "Limitsiz Meşrubat"]
    },
    {
      brideName: "İrem",
      groomName: "Bora",
      couple: "İrem ve Bora",
      phone: "0532 915 6677",
      date: "2026-03-30",
      contractDate: "2026-01-18",
      type: "soz",
      hallName: "Safir Balo Salonu",
      packageName: "Söz ve Nikah Paketi",
      guests: 130,
      total: 111800,
      cost: 65500,
      paid: 42000,
      status: "sozlesme",
      extras: ["Fotoğraf & Video Ekibi", "Nişan Masası Premium Dekor"],
      menus: ["Ordövr Tabağı", "Peynirli Sigara Böreği", "Fıstıklı Baklava", "Limitsiz Meşrubat"]
    },
    {
      brideName: "Atlas",
      groomName: "Ailesi",
      couple: "Atlas Sünnet Düğünü",
      phone: "0534 810 2244",
      date: "2026-08-22",
      contractDate: "2026-04-14",
      type: "sunnet_dugunu",
      hallName: "Lale Teras Davet",
      packageName: "Sünnet Düğünü Paket",
      guests: 240,
      total: 218000,
      cost: 131500,
      paid: 70000,
      status: "kapora_alindi",
      extras: ["Sünnet Tahtı Dekoru", "Fotoğraf & Video Ekibi"],
      menus: ["Çocuk Burger Menü", "Izgara Köfte", "Düğün Pastası Dilimi", "Limitsiz Meşrubat"]
    },
    {
      brideName: "Kaya",
      groomName: "Ailesi",
      couple: "Kaya Ailesi Mevlit",
      phone: "0535 228 9090",
      date: "2026-02-16",
      contractDate: "2026-01-06",
      type: "mevlit",
      hallName: "Lavanta Kır Bahçesi",
      packageName: "Mevlit İkram Paketi",
      guests: 180,
      total: 81200,
      cost: 48200,
      paid: 25000,
      status: "canli_gorusme",
      extras: ["Mevlit Lokma Arabası"],
      menus: ["Pilav Ayran İkramı", "Lokma Tatlısı", "Limitsiz Meşrubat"]
    },
    {
      brideName: "Mavi Anadolu Lisesi",
      groomName: "Mezuniyet",
      couple: "Mavi Anadolu Mezuniyet",
      phone: "0536 550 7070",
      date: "2026-06-12",
      contractDate: "2026-03-09",
      type: "mezuniyet",
      hallName: "Safir Balo Salonu",
      packageName: "Mezuniyet Kokteyl Paketi",
      guests: 430,
      total: 268400,
      cost: 158500,
      paid: 95000,
      status: "sozlesme",
      extras: ["Mezuniyet Sahne Işık Paketi", "Canlı Müzik Ekibi"],
      menus: ["Peynirli Sigara Böreği", "Ordövr Tabağı", "Çocuk Burger Menü", "Limitsiz Meşrubat"]
    }
  ];

  state.tenants.forEach((tenant, index) => {
    const orderedSamples = samples.map((_, sampleIndex) => samples[(sampleIndex + index) % samples.length]);
    orderedSamples.forEach(sample => {
      const exists = state.reservations.some(item =>
        item.tenantId === tenant.id &&
        item.demoReservation &&
        sameText(item.couple, `${sample.couple} - ${tenant.name}`)
      );
      if (exists) return;
      state.reservations.push({
        id: makeId(),
        ...sample,
        couple: `${sample.couple} - ${tenant.name}`,
        tenantId: tenant.id,
        demoReservation: true,
        createdAt: new Date().toLocaleString("tr-TR")
      });
    });
  });
}

function ensureTenantDemoStaff() {
  const staffSamples = [
    { name: "Ahmet Yılmaz", role: "Etkinlik Koordinatörü", phone: "0532 111 2233", email: "ahmet@example.com", events: 5, active: true },
    { name: "Ayşe Demir", role: "Dekorasyon Sorumlusu", phone: "0533 444 5566", email: "ayse@example.com", events: 3, active: true },
    { name: "Mehmet Kaya", role: "Teknik Ekip Lideri", phone: "0534 777 8899", email: "mehmet@example.com", events: 4, active: true },
    { name: "Fatma Öztürk", role: "Mutfak Şefi", phone: "0535 222 3344", email: "fatma@example.com", events: 6, active: true }
  ];

  state.tenants.forEach((tenant, tenantIndex) => {
    const currentStaff = state.staff.filter(item => item.tenantId === tenant.id);
    if (currentStaff.length) return;
    staffSamples.slice(0, 3).forEach((sample, index) => {
      state.staff.push({
        id: makeId(),
        tenantId: tenant.id,
        ...staffSamples[(tenantIndex + index) % staffSamples.length]
      });
    });
  });
}

function ensureTenantDemoStaffAssignments() {
  state.tenants.forEach(tenant => {
    const staff = state.staff.filter(item => item.tenantId === tenant.id);
    const reservations = state.reservations
      .filter(item => item.tenantId === tenant.id && !item.comparisonDemoReservation)
      .slice()
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(0, 4);
    if (!staff.length || !reservations.length) return;
    const hasAssignment = state.staffAssignments.some(item => item.tenantId === tenant.id);
    if (hasAssignment) return;
    const roles = ["Piyanist", "Garson", "Servis Şefi", "Fotoğraf Destek"];
    reservations.forEach((reservation, index) => {
      const staffMember = staff[index % staff.length];
      const dailyWage = [3500, 1800, 2400, 2200][index % 4];
      const paid = [1500, 1800, 1000, 0][index % 4];
      state.staffAssignments.push({
        id: makeId(),
        tenantId: tenant.id,
        staffId: staffMember.id,
        reservationId: reservation.id,
        date: reservation.date,
        role: roles[index % roles.length],
        dailyWage,
        paid,
        status: paid >= dailyWage ? "paid" : paid > 0 ? "partial" : "unpaid",
        note: `${reservation.couple} organizasyonu için görev`
      });
    });
  });
}

function markTenantDemoReservations() {
  state.tenants.forEach(tenant => {
    state.reservations = state.reservations.map(reservation => {
      if (reservation.demoReservation || reservation.tenantId !== tenant.id) return reservation;
      return String(reservation.couple || "").includes(` - ${tenant.name}`)
        ? { ...reservation, demoReservation: true }
        : reservation;
    });
  });
}

function previousYearDate(value) {
  if (!value) return "";
  const date = new Date(`${value}T00:00:00`);
  date.setFullYear(date.getFullYear() - 1);
  return localDateValue(date);
}

function comparisonAmount(value, index, minimum = 0) {
  const ratio = [0.82, 0.87, 0.91, 0.78][index % 4];
  return Math.max(minimum, Math.round(Number(value || 0) * ratio));
}

function ensureLastYearComparisonReservations() {
  const currentYear = Number(state.year || new Date().getFullYear());
  const sourceReservations = state.reservations.filter(item => {
    if (item.comparisonDemoReservation) return false;
    if (!String(item.date || "").startsWith(`${currentYear}-`)) return false;
    return item.demoReservation || demoSeed.reservations.some(seedItem => sameText(seedItem.couple, item.couple));
  });

  sourceReservations.forEach((item, index) => {
    const date = previousYearDate(item.date);
    const exists = state.reservations.some(row => sameText(row.couple, item.couple) && row.date === date);
    if (exists) return;
    const total = comparisonAmount(item.total, index);
    const cost = comparisonAmount(item.cost, index, 0);
    const paid = Math.min(total, comparisonAmount(item.paid, index, 0));
    state.reservations.push({
      ...item,
      id: makeId(),
      date,
      contractDate: previousYearDate(item.contractDate),
      total,
      cost,
      paid,
      status: item.status || "sozlesme",
      demoReservation: true,
      comparisonDemoReservation: true,
      createdAt: `Geçen yıl örnek kayıt ${index + 1}`
    });
  });
}

function defaultSmsTemplates() {
  return [
    {
      title: "Prova Randevusu Hatırlatma",
      tag: "Prova",
      mode: "Otomatik",
      trigger: "before_event",
      offsetDays: 7,
      active: true,
      body: "Sayın {gelin_adi} ve {damat_adi}, {mekan_adi} prova randevunuz için düğününüze 1 hafta kaldığını hatırlatır. Detaylar için bizimle iletişime geçebilirsiniz."
    },
    {
      title: "Son Detay Toplantısı",
      tag: "Operasyon",
      mode: "Otomatik",
      trigger: "before_event",
      offsetDays: 3,
      active: true,
      body: "Merhaba {gelin_adi} ve {damat_adi}, {tarih} tarihli organizasyonunuz için son detayları netleştirmek üzere sizi bekliyoruz. {mekan_adi}"
    },
    {
      title: "Düğün / Organizasyon Bir Gün Önce",
      tag: "Hatırlatma",
      mode: "Otomatik",
      trigger: "before_event",
      offsetDays: 1,
      active: true,
      body: "Sevgili {gelin_adi} ve {damat_adi}, özel gününüz yarın. {mekan_adi} ekibi olarak tüm hazırlıklarınızı heyecanla tamamlıyoruz."
    },
    {
      title: "Ödeme Hatırlatması",
      tag: "Tahsilat",
      mode: "Otomatik",
      trigger: "before_event",
      offsetDays: 5,
      active: true,
      body: "Merhaba {gelin_adi} ve {damat_adi}, organizasyonunuz için kalan ödeme tutarınız {kalan_tutar}. Bilgi için {mekan_adi} ile iletişime geçebilirsiniz."
    },
    {
      title: "Organizasyon Sonrası Teşekkür",
      tag: "Teşekkür",
      mode: "Otomatik",
      trigger: "after_event",
      offsetDays: 1,
      active: true,
      body: "Sevgili {gelin_adi} ve {damat_adi}, özel gününüzü {mekan_adi} ile paylaştığınız için teşekkür eder, mutluluklar dileriz."
    },
    {
      title: "Fotoğraf / Video Teslim Bilgisi",
      tag: "Medya",
      mode: "Otomatik",
      trigger: "after_event",
      offsetDays: 7,
      active: true,
      body: "Merhaba {gelin_adi} ve {damat_adi}, fotoğraf ve video teslim sürecinizle ilgili bilgi almak için {mekan_adi} ile iletişime geçebilirsiniz."
    },
    {
      title: "Yıldönümü Kutlama",
      tag: "Sadakat",
      mode: "Otomatik",
      trigger: "after_event",
      offsetDays: 365,
      active: true,
      body: "Sevgili {gelin_adi} ve {damat_adi}, evlilik yıl dönümünüz kutlu olsun. {mekan_adi} olarak mutluluğunuzun daim olmasını dileriz."
    }
  ];
}

function ensureSmsSystem() {
  state.smsSettings = {
    providerTitle: "AYSAH",
    senderTitle: "AYSAH",
    providerUser: "",
    providerPassword: "",
    providerApiUrl: "",
    providerMode: "central_pool",
    defaultTenantQuota: 250,
    credit: 5000,
    used: 0,
    ...state.smsSettings
  };
  if (!Array.isArray(state.smsTemplates)) state.smsTemplates = [];
  const defaults = defaultSmsTemplates();
  defaults.forEach(template => {
    const exists = state.smsTemplates.some(item => sameText(item.title, template.title) && (!item.tenantId || item.tenantId === currentTenant()?.id));
    if (!exists) state.smsTemplates.push({ id: makeId(), tenantId: currentTenant()?.id, ...template });
  });
  state.smsTemplates = state.smsTemplates.map(template => ({
    trigger: template.offset ? "before_event" : "manual",
    offsetDays: Number(String(template.offset || "").match(/\d+/)?.[0] || template.offsetDays || 0),
    active: template.active !== false,
    mode: template.mode || "Otomatik",
    ...template
  }));
  if (!Array.isArray(state.smsHistory)) state.smsHistory = [];
  if (!state.tenantSmsQuotas) state.tenantSmsQuotas = {};
  state.tenants.forEach(tenant => {
    if (!state.tenantSmsQuotas[tenant.id]) {
      state.tenantSmsQuotas[tenant.id] = { quota: state.smsSettings.defaultTenantQuota, used: 0 };
    }
  });
}

function money(value) {
  return new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 0 }).format(Number(value || 0));
}

function slugify(value) {
  return String(value || "")
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

function typeName(value) {
  return state.organizationTypes.find(item => item.value === value)?.name || value || "Tümü";
}

function categoryName(value) {
  return state.menuCategories.find(item => item.value === value)?.name || value;
}

function statusLabel(value) {
  return {
    canli_gorusme: "Canlı Görüşme",
    kapora_alindi: "Kapora Alındı",
    sozlesme: "Sözleşme"
  }[value] || value || "Görüşme";
}

function selectOptions(items, selected = "", allLabel = null) {
  const first = allLabel ? `<option value="">${allLabel}</option>` : "";
  return first + items.map(item => `<option value="${item.value || item.id}" ${selected === (item.value || item.id) ? "selected" : ""}>${item.name}</option>`).join("");
}

function currentManagementEdit(collection) {
  const edit = state.editingManagement;
  if (!edit || edit.collection !== collection) return null;
  return (state[collection] || []).find(item => item.id === edit.id) || null;
}

function setManagementEdit(collection, id) {
  const item = (state[collection] || []).find(row => row.id === id);
  if (!item) {
    showToast("Düzenlenecek kayıt bulunamadı");
    return;
  }
  state.editingManagement = { collection, id };
  saveState();
  render();
  showToast("Kayıt forma alındı");
}

function clearManagementEdit() {
  state.editingManagement = null;
  saveState();
  render();
}

function managementActions(buttonText, editing = null, dark = false) {
  return `
    <div class="form-actions">
      <button class="btn ${dark ? "dark" : ""}" type="submit">${buttonText}</button>
      ${editing ? `<button class="btn secondary" type="button" data-action="cancelManagementEdit">Vazgeç</button>` : ""}
    </div>
  `;
}

function renameReservationLineItems(field, beforeName, afterName) {
  state.reservations = state.reservations.map(reservation => {
    if (!Array.isArray(reservation[field])) return reservation;
    let changed = false;
    const nextItems = reservation[field].map(item => {
      if (typeof item === "string") {
        if (!sameText(item, beforeName)) return item;
        changed = true;
        return afterName;
      }
      if (item && sameText(item.name, beforeName)) {
        changed = true;
        return { ...item, name: afterName };
      }
      return item;
    });
    return changed ? { ...reservation, [field]: nextItems } : reservation;
  });
}

function syncManagedReferences(collection, before, after) {
  if (collection === "organizationTypes") {
    state.packages = state.packages.map(item => item.type === before.value ? { ...item, type: after.value } : item);
    state.extras = state.extras.map(item => item.type === before.value ? { ...item, type: after.value } : item);
    state.reservations = state.reservations.map(item => item.type === before.value ? { ...item, type: after.value } : item);
  }

  if (collection === "menuCategories") {
    state.menus = state.menus.map(item => item.category === before.value ? { ...item, category: after.value } : item);
  }

  if (collection === "halls") {
    state.reservations = state.reservations.map(item => (
      item.hallId === before.id || sameText(item.hallName, before.name)
        ? { ...item, hallId: before.id, hallName: after.name }
        : item
    ));
  }

  if (collection === "packages") {
    state.reservations = state.reservations.map(item => (
      item.packageId === before.id || sameText(item.packageName, before.name)
        ? { ...item, packageId: before.id, packageName: after.name }
        : item
    ));
  }

  if (collection === "extras") renameReservationLineItems("extras", before.name, after.name);
  if (collection === "menus") renameReservationLineItems("menus", before.name, after.name);
}

function saveManagedItem(collection, item, addedMessage, updatedMessage) {
  const editing = currentManagementEdit(collection);
  if (!editing) {
    addItem(collection, item);
    showToast(addedMessage);
    return;
  }

  const before = { ...editing };
  const after = { ...editing, ...item };
  state[collection] = state[collection].map(row => row.id === editing.id ? after : row);
  syncManagedReferences(collection, before, after);
  state.editingManagement = null;
  saveState();
  render();
  showToast(updatedMessage);
}

function syncNavigation(view) {
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.dataset.view === view);
  });
  document.querySelectorAll(".top-nav a").forEach(link => {
    const target = link.dataset.view;
    const active = target === view || (target === "reports" && view.startsWith("report"));
    link.classList.toggle("active", active);
  });
}

function setView(view) {
  state.activeView = view;
  saveState();
  if (location.hash !== `#${view}`) {
    history.replaceState(null, "", `#${view}`);
  }
  syncNavigation(view);
  sidebar.classList.remove("open");
  render();
}

function pageTitle(icon, title, subtitle = "", backText = "Geri") {
  return `
    <a class="back-link" href="#dashboard" data-view="dashboard">← ${backText}</a>
    <div class="page-title">
      <span class="title-icon">${icon}</span>
      <div>
        <h1>${title}</h1>
        ${subtitle ? `<p>${subtitle}</p>` : ""}
      </div>
    </div>
  `;
}

function pageHeader(title, action = "") {
  return `<div class="section-head"><h1>${title}</h1>${action}</div>`;
}

function renderAccountPill() {
  if (!accountPill) return;
  const tenant = currentTenant();
  accountPill.innerHTML = `
    <span>${isAdmin() ? "Ana Admin" : "Mekan Paneli"}</span>
    <strong>${tenant?.name || "Mekan seçilmedi"}</strong>
  `;
  if (smsCreditPill) {
    const remaining = Number(state.smsSettings?.credit || 0) - Number(state.smsSettings?.used || 0);
    smsCreditPill.innerHTML = `▱ ${remaining.toLocaleString("tr-TR")}`;
    smsCreditPill.title = "Ana SMS havuzu kalan kredi";
  }
}

function attr(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function reservationMatches(item, query) {
  const needle = String(query || "").trim().toLocaleLowerCase("tr-TR");
  if (!needle) return true;
  return [
    item.couple,
    item.brideName,
    item.groomName,
    item.phone,
    item.hallName,
    item.packageName,
    item.status,
    typeName(item.type)
  ].some(value => String(value || "").toLocaleLowerCase("tr-TR").includes(needle));
}

function reservationListMarkup(query = "") {
  const filtered = visibleReservations().filter(item => reservationMatches(item, query));
  if (filtered.length) return filtered.map(reservationCard).join("");
  return query
    ? empty("Aramanıza uygun rezervasyon yok", "İsim, telefon, salon veya paket bilgisiyle tekrar deneyin.")
    : empty("Henüz rezervasyon yok", "Yeni Rezervasyon butonuyla ilk rezervasyonu oluşturabilirsiniz.");
}

function dashboardSearchMarkup(query = "") {
  const needle = String(query || "").trim();
  if (!needle) return "";
  const filtered = visibleReservations().filter(item => reservationMatches(item, needle));
  return `
    <div class="search-results panel">
      <strong>${filtered.length} sonuç</strong>
      <div class="mini-result-list">
        ${filtered.map(item => `<button type="button" data-action="editReservation" data-id="${item.id}"><span>${item.couple}</span><small>${new Date(item.date).toLocaleDateString("tr-TR")} · ${item.hallName || "Salon yok"} · ${money(item.total)}</small></button>`).join("") || `<p class="muted">Bu aramaya uygun rezervasyon bulunamadı.</p>`}
      </div>
    </div>
  `;
}

function renderDashboard() {
  const eventMap = visibleReservations().reduce((map, item) => {
    if (!map[item.date]) map[item.date] = [];
    map[item.date].push(item);
    return map;
  }, {});
  const specialMap = Object.fromEntries((state.specialDays || []).map(item => [item.date, item]));
  const months = Array.from({ length: 12 }, (_, index) => monthCard(state.year, index, eventMap, specialMap)).join("");
  root.innerHTML = `
    <div class="toolbar">
      <input class="search" id="globalSearch" placeholder="Çift adı, telefon, salon, paket ara...">
      <button class="btn" data-action="newReservation">+ Yeni Rezervasyon</button>
    </div>
    <div id="dashboardResults"></div>
    <div class="calendar-head">
      <h1 class="calendar-title">${state.year} Takvimi</h1>
      <div class="year-controls">
        <button class="btn secondary" data-action="prevYear">← Önceki Yıl</button>
        <button class="btn secondary" data-action="thisYear">Bu Yıl</button>
        <button class="btn secondary" data-action="nextYear">Sonraki Yıl →</button>
      </div>
    </div>
    <div class="calendar-legend">
      <span><i class="legend-dot event-dugun"></i>Düğün</span>
      <span><i class="legend-dot event-nisan"></i>Nişan</span>
      <span><i class="legend-dot event-kina"></i>Kına</span>
      <span><i class="legend-dot event-soz"></i>Söz</span>
      <span><i class="legend-dot event-sunnet_dugunu"></i>Sünnet Düğünü</span>
      <span><i class="legend-dot event-mevlit"></i>Mevlit</span>
      <span><i class="legend-dot event-mezuniyet"></i>Mezuniyet</span>
      <span><i class="legend-dot special"></i>Özel gün / kapalı</span>
    </div>
    <div class="months-grid">${months}</div>
  `;
}

function monthCard(year, monthIndex, eventMap, specialMap) {
  const names = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  let days = "";
  for (let i = 0; i < firstDay; i += 1) days += `<span></span>`;
  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const reservations = eventMap[date] || [];
    const special = specialMap[date];
    const type = reservations[0]?.type || "";
    const classes = [
      "day",
      reservations.length ? "has-event" : "",
      type ? `event-${type}` : "",
      special ? "special-day" : ""
    ].filter(Boolean).join(" ");
    const title = reservations.length
      ? `${reservations.length} rezervasyon: ${reservations.map(item => item.couple).join(", ")}`
      : special ? `${special.title} - rezervasyon kapalı` : "Yeni rezervasyon";
    days += `<button class="${classes}" type="button" data-date="${date}" title="${title}">${day}</button>`;
  }
  return `
    <article class="month-card">
      <h3>${names[monthIndex]}</h3>
      <div class="weekday-row"><span>Paz</span><span>Pzt</span><span>Sal</span><span>Çar</span><span>Per</span><span>Cum</span><span>Cmt</span></div>
      <div class="day-grid">${days}</div>
    </article>
  `;
}

function renderNewReservation() {
  const editing = state.editingReservationId ? state.reservations.find(item => item.id === state.editingReservationId) : null;
  const organizationTypes = scopedItems("organizationTypes");
  const halls = scopedItems("halls");
  const packages = scopedItems("packages");
  const extras = scopedItems("extras");
  const menuCategories = scopedItems("menuCategories");
  const menus = scopedItems("menus");
  const selectedDate = state.newReservationDate || editing?.date || "";
  const selectedHall = editing?.hallId || "";
  const selectedPackage = editing?.packageId || "";
  const organizationPrice = editing ? Math.max(0, Math.round(Number(editing.total || 0) / 1.2)) : 0;
  root.innerHTML = `
    <div class="reservation-page">
      <a class="back-link" href="#dashboard" data-view="dashboard">← ${editing ? "Rezervasyon Düzenle" : "Yeni Rezervasyon"}</a>
      <form id="detailedReservationForm">
        <section class="panel compact-panel">
          <h2>Düğün Tarih Bilgisi</h2>
          <div class="form-grid thirds">
            <div class="field"><label>Rezervasyon Tarihi</label><input name="reservationDate" type="date" value="${today()}"></div>
            <div class="field"><label>Sözleşme Tarihi</label><input name="contractDate" type="date" value="${attr(editing?.contractDate || today())}"></div>
            <div class="field"><label>Düğün Tarihi *</label><input name="date" type="date" value="${attr(selectedDate)}" required></div>
            <div class="field"><label>Organizasyon Türü *</label><select name="type" required>${selectOptions(organizationTypes, editing?.type || "", "Seçiniz")}</select></div>
            <div class="field"><label>Düğün Zamanı</label><select name="timeSlot"><option>Akşam</option><option>Öğlen</option><option>Kokteyl</option></select></div>
            <div class="field"><label>Durum</label><select name="status"><option value="canli_gorusme" ${editing?.status === "canli_gorusme" ? "selected" : ""}>Canlı Görüşme</option><option value="kapora_alindi" ${editing?.status === "kapora_alindi" ? "selected" : ""}>Kapora Alındı</option><option value="sozlesme" ${editing?.status === "sozlesme" ? "selected" : ""}>Sözleşme</option></select></div>
          </div>
        </section>

        ${personSection("Gelin Bilgileri", "bride", editing)}
        ${personSection("Damat Bilgileri", "groom", editing)}

        <section class="panel compact-panel">
          <h2>Salon ve Paket</h2>
          <div class="form-grid">
            <div class="field"><label>Salon *</label><select name="hallId" required>${selectOptions(halls, selectedHall, "Salon")}</select></div>
            <div class="field"><label>Paket</label><select name="packageId" id="quotePackage">${selectOptions(packages, selectedPackage, "Paket seçin")}</select></div>
            <div class="field"><label>Davetli Sayısı</label><input name="guests" id="quoteGuests" type="number" min="0" value="${attr(editing?.guests || 0)}"></div>
            <div class="field"><label>Ayrıca Davetli</label><input name="extraGuests" type="number" min="0" placeholder="Paket üstü davetli sayısı"></div>
            <div class="field"><label>Kişi Başı Fiyat (₺)</label><input name="manualPersonPrice" id="quoteManualPersonPrice" type="number" min="0" placeholder="Paket dışı fiyat"></div>
          </div>
        </section>

        <section class="panel compact-panel">
          <h2>Özel</h2>
          <div class="choice-list">
            ${extras.map(item => checkboxPriceRow("extras", item.id, item.name, item.price)).join("")}
          </div>
        </section>

        <section class="panel compact-panel">
          <h2>Yemek Menüsü</h2>
          ${menuCategories.map(category => {
            const items = menus.filter(menu => menu.category === category.value);
            if (!items.length) return "";
            return `<div class="menu-group"><h3>${category.name}</h3><div class="choice-list">${items.map(item => checkboxPriceRow("menus", item.id, item.name, item.price, "kişi")).join("")}</div></div>`;
          }).join("")}
        </section>

        <section class="panel compact-panel">
          <h2>Fiyatlandırma ve Ödeme Planı</h2>
          <div class="form-grid">
            <div class="field"><label>Organizasyon Fiyatı (₺)</label><input name="organizationPrice" id="quoteOrganizationPrice" type="number" min="0" value="${organizationPrice}"></div>
            <div class="field"><label>İskonto Tipi</label><select name="discountType"><option value="amount">Tutar</option><option value="percent">Yüzde</option></select></div>
            <div class="field"><label>İskonto Değeri</label><input name="discountValue" id="quoteDiscount" type="number" min="0" value="0"></div>
            <div class="field"><label>KDV Oranı (%)</label><input name="vatRate" id="quoteVat" type="number" min="0" value="20"></div>
            <div class="field"><label>Kapora (₺)</label><input name="deposit" id="quoteDeposit" type="number" min="0" value="${attr(editing?.paid || 0)}"></div>
          </div>
          <div class="installment-line">
            <strong>Taksit</strong>
            <button class="btn secondary" type="button">+ Taksit Ekle</button>
          </div>
          <p class="hint center">Henüz taksit eklenmedi. "Taksit Ekle" butonuna tıklayarak taksit planı oluşturabilirsiniz.</p>
        </section>

        <section class="panel compact-panel">
          <h2>Hatırlatmalar ve Referans</h2>
          <label class="check-row flat"><input type="checkbox" name="sendRehearsalSms"> Prova Hatırlatma SMS gönderilsin mi?</label>
          <label class="check-row flat"><input type="checkbox" name="sendMediaSms"> Fotoğraf/Video teslimat SMS gönderilsin mi?</label>
          <div class="form-grid">
            <div class="field"><label>Öneren Kaynak</label><input name="source" placeholder="Düğün.com, Instagram, arkadaş vb."></div>
            <div class="field"><label>Referans Kişi</label><input name="referencePerson"></div>
          </div>
        </section>

        <section class="panel compact-panel">
          <h2>Notlar</h2>
          <div class="field"><label>Özel Dilekler</label><textarea name="specialNotes" placeholder="Müşterinin özel istekleri..."></textarea></div>
          <div class="field"><label>Genel Notlar</label><textarea name="generalNotes" placeholder="İç notlar..."></textarea></div>
        </section>

        <section class="panel compact-panel quote-panel">
          <h2>Genel Fiyatlandırma</h2>
          <div class="quote-row"><span>Organizasyon Toplamı:</span><strong id="quoteSubtotal">₺0</strong></div>
          <div class="quote-row"><span>İskonto Sonrası:</span><strong id="quoteAfterDiscount">₺0</strong></div>
          <div class="quote-row"><span>KDV (%20):</span><strong id="quoteVatAmount">₺0</strong></div>
          <div class="quote-total"><span>GENEL TOPLAM:</span><strong id="quoteGrandTotal">₺0</strong></div>
        </section>

        <div class="sticky-actions">
          <button class="btn secondary" type="button" data-view="dashboard">İptal</button>
          <button class="btn" type="submit">${editing ? "Değişiklikleri Kaydet" : "Rezervasyon Kaydet"}</button>
        </div>
      </form>
    </div>
  `;
}

function personSection(title, prefix, reservation = null) {
  const name = prefix === "bride" ? reservation?.brideName : reservation?.groomName;
  const phone = reservation?.phone || "";
  return `
    <section class="panel compact-panel">
      <h2>${title}</h2>
      <div class="form-grid">
        <div class="field"><label>Adı Soyadı *</label><input name="${prefix}Name" value="${attr(name)}" required></div>
        <div class="field"><label>TC Kimlik No</label><input name="${prefix}Identity"></div>
        <div class="field"><label>GSM Tel *</label><input name="${prefix}Phone" value="${attr(phone)}" required></div>
        <div class="field"><label>E-posta</label><input name="${prefix}Email" type="email"></div>
        <div class="field"><label>Memleket</label><input name="${prefix}City"></div>
        <div class="field"><label>İlçe / Mahalle</label><input name="${prefix}District"></div>
        <div class="field full"><label>Adres</label><textarea name="${prefix}Address"></textarea></div>
      </div>
    </section>
  `;
}

function checkboxPriceRow(name, id, label, price, suffix = "") {
  return `
    <label class="check-row">
      <span><input type="checkbox" name="${name}" value="${id}" data-price="${price}"> ${label}</span>
      <strong>${money(price)}${suffix ? ` / ${suffix}` : ""}</strong>
    </label>
  `;
}

function renderReservations() {
  const query = state.reservationQuery || "";
  const filtered = visibleReservations().filter(item => reservationMatches(item, query));
  root.innerHTML = `
    <div class="reservations-view">
      <div class="reservation-search">
        <span>⌕</span>
        <input id="reservationSearch" value="${attr(query)}" placeholder="İsim, telefon, salon veya paket ara...">
      </div>
      <p class="muted" id="reservationCount">Toplam ${filtered.length} rezervasyon</p>
      <div class="reservation-list" id="reservationList">
        ${reservationListMarkup(query)}
      </div>
    </div>
  `;
}

function reservationCard(item) {
  const remaining = Number(item.total || 0) - Number(item.paid || 0);
  return `
    <article class="big-reservation-card" data-action="editReservation" data-id="${item.id}" tabindex="0" role="button" title="Rezervasyonu düzenle">
      <div>
        <h2>${item.couple}</h2>
        <span class="tag">${statusLabel(item.status)}</span>
        <div class="reservation-details">
          <span>□ ${new Date(item.date).toLocaleDateString("tr-TR", { day: "2-digit", month: "long", year: "numeric" })}</span>
          <span>☎ ${item.phone || "-"}</span>
          <span>♙ ${item.guests || 0} konuk</span>
        </div>
        <p><strong>Salon:</strong> ${item.hallName || "Salon seçilmedi"}<br><strong>Paket:</strong> ${item.packageName || "Paket seçilmedi"}</p>
        <small>Kayıt: ${item.createdAt || "-"}</small>
      </div>
      <div class="reservation-money">
        <span>Toplam</span>
        <strong>${money(item.total)}</strong>
        <span>Kalan</span>
        <b>${money(remaining)}</b>
        <button class="btn secondary reservation-edit-button" type="button" data-action="editReservation" data-id="${item.id}">Düzenle</button>
      </div>
    </article>
  `;
}

function renderReports() {
  const tabLabels = {
    reports: "Genel Özet",
    reportTypes: "Organizasyon Türü",
    reportHalls: "Salonlar",
    reportPackages: "Paketler",
    reportExtras: "Ekstralar",
    reportMenus: "Menüler"
  };
  const activeReport = tabLabels[state.activeView] ? state.activeView : "reports";
  const totals = state.reservations.reduce((acc, item) => {
    acc.revenue += Number(item.total || 0);
    acc.cost += Number(item.cost || 0);
    return acc;
  }, { revenue: 0, cost: 0 });
  const profit = totals.revenue - totals.cost;
  root.innerHTML = `
    <h1 class="report-title">Detaylı Raporlar</h1>
    <div class="panel">
      <div class="filters">
        <div class="field"><label>Başlangıç Tarihi</label><input type="date" value="${state.year}-01-01"></div>
        <div class="field"><label>Bitiş Tarihi</label><input type="date" value="${state.year}-12-31"></div>
        <div class="field"><label>Hızlı Filtre</label><div class="quick-filter"><button class="btn secondary">Bu Ay</button><button class="btn secondary">Geçen Ay</button><button class="btn secondary">Bu Yıl</button><button class="btn secondary">Geçen Yıl</button></div></div>
        <label class="check-row flat"><input type="checkbox"> Önceki yıl ile karşılaştır</label>
      </div>
    </div>
    <div class="tabs">
      ${Object.entries(tabLabels).map(([view, label]) => `<button class="tab ${activeReport === view ? "active" : ""}" data-view="${view}">${label}</button>`).join("")}
    </div>
    <div class="stats-grid">
      ${statCard("Toplam Rezervasyon", state.reservations.length, "□", "blue")}
      ${statCard("Toplam Ciro", money(totals.revenue), "$", "green")}
      ${statCard("Toplam Maliyet", money(totals.cost), "⌄", "orange")}
      ${statCard("Toplam Kar", money(profit), "↗", "violet", `Kar Oranı: %${totals.revenue ? Math.round((profit / totals.revenue) * 100) : 0}`)}
    </div>
  `;
}

function getReportRange() {
  return {
    start: state.reportStart || `${state.year}-01-01`,
    end: state.reportEnd || `${state.year}-12-31`
  };
}

function isInReportRange(item, range) {
  return (!range.start || item.date >= range.start) && (!range.end || item.date <= range.end);
}

function shiftDateYear(value, diff) {
  if (!value) return "";
  const date = new Date(`${value}T00:00:00`);
  date.setFullYear(date.getFullYear() + diff);
  return localDateValue(date);
}

function comparisonRange(range) {
  const mode = state.reportCompareMode || "";
  if (mode === "previousYear") {
    const startYear = Number((range.start || today()).slice(0, 4));
    return { start: `${startYear - 1}-01-01`, end: `${startYear - 1}-12-31` };
  }
  if (mode === "sameMonthLastYear") {
    return { start: shiftDateYear(range.start, -1), end: shiftDateYear(range.end, -1) };
  }
  return null;
}

function reservationHasLineItem(reservation, field, selected) {
  if (!selected) return true;
  return (reservation[field] || []).some(raw => sameText(typeof raw === "string" ? raw : raw.name, selected));
}

function reportOption(value, name = value) {
  const cleanValue = String(value || "").trim();
  if (!cleanValue || cleanValue.includes("seçilmedi")) return null;
  return { value: cleanValue, name: String(name || cleanValue).trim() };
}

function mergeReportOptions(options) {
  const seen = new Set();
  return options
    .filter(Boolean)
    .filter(option => {
      const key = option.value.toLocaleLowerCase("tr-TR");
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => a.name.localeCompare(b.name, "tr-TR"));
}

function reservationLineOptions(field) {
  return visibleReservations().flatMap(reservation => (reservation[field] || []).map(raw => {
    const name = typeof raw === "string" ? raw : raw.name;
    return reportOption(name);
  }));
}

function reportFilterConfig(activeReport) {
  const reservations = visibleReservations();
  const configs = {
    reportTypes: { label: "Organizasyon Türü", all: "Tüm organizasyon türleri", options: mergeReportOptions([...scopedItems("organizationTypes").map(item => reportOption(item.value, item.name)), ...reservations.map(item => reportOption(item.type, typeName(item.type)))]) },
    reportHalls: { label: "Salon", all: "Tüm salonlar", options: mergeReportOptions([...scopedItems("halls").map(item => reportOption(item.name)), ...reservations.map(item => reportOption(item.hallName))]) },
    reportPackages: { label: "Paket", all: "Tüm paketler", options: mergeReportOptions([...scopedItems("packages").map(item => reportOption(item.name)), ...reservations.map(item => reportOption(item.packageName))]) },
    reportExtras: { label: "Ekstra Ürün / Hizmet", all: "Tüm ekstralar", options: mergeReportOptions([...scopedItems("extras").map(item => reportOption(item.name)), ...reservationLineOptions("extras")]) },
    reportMenus: { label: "Yemek Menüsü", all: "Tüm menüler", options: mergeReportOptions([...scopedItems("menus").map(item => reportOption(item.name)), ...reservationLineOptions("menus")]) }
  };
  return configs[activeReport] || null;
}

function reportFilterMatches(item, activeReport, selected) {
  if (!selected) return true;
  if (activeReport === "reportTypes") return item.type === selected;
  if (activeReport === "reportHalls") return sameText(item.hallName, selected);
  if (activeReport === "reportPackages") return sameText(item.packageName, selected);
  if (activeReport === "reportExtras") return reservationHasLineItem(item, "extras", selected);
  if (activeReport === "reportMenus") return reservationHasLineItem(item, "menus", selected);
  return true;
}

function filteredReportReservations(activeReport, range) {
  const selected = state.reportFilterValue || "";
  return visibleReservations().filter(item => isInReportRange(item, range) && reportFilterMatches(item, activeReport, selected));
}

function summarizeReservations(reservations) {
  const totals = reservations.reduce((acc, item) => {
    acc.revenue += Number(item.total || 0);
    acc.cost += Number(item.cost || 0);
    acc.paid += Number(item.paid || 0);
    acc.guests += Number(item.guests || 0);
    acc.count += 1;
    return acc;
  }, { count: 0, revenue: 0, cost: 0, paid: 0, guests: 0 });
  totals.profit = totals.revenue - totals.cost;
  totals.remaining = totals.revenue - totals.paid;
  totals.averageSale = totals.count ? Math.round(totals.revenue / totals.count) : 0;
  return totals;
}

function percentChange(current, previous) {
  if (!previous) return current ? "Yeni veri" : "Fark yok";
  const percent = Math.round(((current - previous) / previous) * 100);
  return `${percent > 0 ? "+" : ""}%${percent}`;
}

function formatMetric(value, type = "money") {
  if (type === "count") return value;
  if (type === "guest") return `${value} kişi`;
  return money(value);
}

function comparisonMetricCard(label, current, previous, type = "money") {
  const diff = current - previous;
  const good = diff >= 0;
  return `
    <article class="comparison-card ${good ? "positive" : "negative"}">
      <span>${label}</span>
      <strong>${formatMetric(current, type)}</strong>
      <div class="comparison-lines">
        <small>Geçen dönem: ${formatMetric(previous, type)}</small>
        <em class="${good ? "profit" : "danger-text"}">Fark: ${formatMetric(diff, type)} · ${percentChange(current, previous)}</em>
      </div>
    </article>
  `;
}

function comparisonChartRow(label, current, previous, type = "money") {
  const max = Math.max(Math.abs(current), Math.abs(previous), 1);
  const currentWidth = Math.max(4, Math.round((Math.abs(current) / max) * 100));
  const previousWidth = Math.max(4, Math.round((Math.abs(previous) / max) * 100));
  return `
    <div class="comparison-chart-row">
      <div class="comparison-chart-label">${label}</div>
      <div class="comparison-chart-bars">
        <div class="chart-line current"><span style="width:${currentWidth}%"></span><strong>Bu dönem ${formatMetric(current, type)}</strong></div>
        <div class="chart-line previous"><span style="width:${previousWidth}%"></span><strong>Geçen dönem ${formatMetric(previous, type)}</strong></div>
      </div>
    </div>
  `;
}

function comparisonMarkup(currentReservations, comparisonReservations, comparisonLabel) {
  if (!comparisonLabel) return "";
  const current = summarizeReservations(currentReservations);
  const previous = summarizeReservations(comparisonReservations);
  const chartRows = [
    ["Rezervasyon Adedi", current.count, previous.count, "count"],
    ["Satış Tutarı", current.revenue, previous.revenue, "money"],
    ["Masraf", current.cost, previous.cost, "money"],
    ["Net Kar", current.profit, previous.profit, "money"],
    ["Tahsilat", current.paid, previous.paid, "money"]
  ];
  return `
    <section class="panel comparison-panel">
      <div class="comparison-head">
        <div>
          <h2>${comparisonLabel} Karşılaştırması</h2>
          <p>Seçili filtre ve tarih aralığına göre bu dönem ile geçmiş dönem aynı kırılımda kıyaslanır.</p>
        </div>
      </div>
      <div class="comparison-grid">
        ${comparisonMetricCard("Rezervasyon Sayısı", current.count, previous.count, "count")}
        ${comparisonMetricCard("Satış Tutarı", current.revenue, previous.revenue)}
        ${comparisonMetricCard("Masraf", current.cost, previous.cost)}
        ${comparisonMetricCard("Net Kar", current.profit, previous.profit)}
        ${comparisonMetricCard("Tahsilat", current.paid, previous.paid)}
        ${comparisonMetricCard("Kalan Alacak", current.remaining, previous.remaining)}
        ${comparisonMetricCard("Konuk Sayısı", current.guests, previous.guests, "guest")}
        ${comparisonMetricCard("Ortalama Satış", current.averageSale, previous.averageSale)}
      </div>
      <div class="comparison-chart">
        <h3>Grafik Karşılaştırma</h3>
        ${chartRows.map(row => comparisonChartRow(...row)).join("")}
      </div>
    </section>
  `;
}

function reportGroupRows(reservations, keyFn, labelFn) {
  const groups = reservations.reduce((map, item) => {
    const key = keyFn(item) || "Belirtilmemiş";
    if (!map[key]) {
      map[key] = { label: labelFn(item, key), count: 0, guests: 0, revenue: 0, cost: 0, paid: 0 };
    }
    map[key].count += 1;
    map[key].guests += Number(item.guests || 0);
    map[key].revenue += Number(item.total || 0);
    map[key].cost += Number(item.cost || 0);
    map[key].paid += Number(item.paid || 0);
    return map;
  }, {});
  return Object.values(groups).sort((a, b) => b.revenue - a.revenue);
}

function reportLineItemRows(reservations, field, perGuest = false) {
  const groups = {};
  reservations.forEach(reservation => {
    (reservation[field] || []).forEach(raw => {
      const sourceName = typeof raw === "string" ? raw : raw.name;
      const catalogItem = findByName(field === "extras" ? "extras" : "menus", sourceName);
      const price = Number((typeof raw === "object" ? raw.price : catalogItem?.price) || 0);
      const cost = Number((typeof raw === "object" ? raw.cost : catalogItem?.cost) || 0);
      const quantity = Number((typeof raw === "object" ? raw.quantity : 0) || (perGuest ? reservation.guests : 1) || 1);
      if (!groups[sourceName]) groups[sourceName] = { label: sourceName, count: 0, guests: 0, revenue: 0, cost: 0, paid: 0 };
      groups[sourceName].count += 1;
      groups[sourceName].guests += quantity;
      groups[sourceName].revenue += price * quantity;
      groups[sourceName].cost += cost * quantity;
    });
  });
  return Object.values(groups).sort((a, b) => b.revenue - a.revenue);
}

function reportRowsTable(title, rows, labelTitle = "Başlık") {
  return `
    <section class="panel">
      <h2>${title}</h2>
      ${rows.length ? table([labelTitle, "Adet", "Konuk", "Ciro", "Maliyet", "Kar", "Tahsilat"], rows.map(row => [
        `<strong>${row.label}</strong>`,
        row.count,
        row.guests,
        money(row.revenue),
        money(row.cost),
        `<span class="profit">${money(row.revenue - row.cost)}</span>`,
        money(row.paid || 0)
      ])) : empty("Bu tarih aralığında rapor verisi yok")}
    </section>
  `;
}

function reportSelectionTitle(activeReport) {
  const config = reportFilterConfig(activeReport);
  if (!config || !state.reportFilterValue) return "Tüm kayıtlar";
  return config.options.find(option => option.value === state.reportFilterValue)?.name || state.reportFilterValue;
}

function topRow(rows, fallback = "Veri yok") {
  return rows.length ? rows[0] : { label: fallback, count: 0, guests: 0, revenue: 0, cost: 0, paid: 0 };
}

function reportHighlights(reservations) {
  return {
    type: topRow(reportGroupRows(reservations, item => item.type, item => typeName(item.type)), "Organizasyon yok"),
    hall: topRow(reportGroupRows(reservations, item => item.hallName, item => item.hallName || "Salon yok"), "Salon yok"),
    package: topRow(reportGroupRows(reservations, item => item.packageName, item => item.packageName || "Paket yok"), "Paket yok"),
    extra: topRow(reportLineItemRows(reservations, "extras"), "Ekstra yok"),
    menu: topRow(reportLineItemRows(reservations, "menus", true), "Menü yok")
  };
}

function executiveSummaryMarkup(totals, selectionTitle) {
  return `
    <section class="executive-summary">
      <article><span>Seçili Rapor</span><strong>${selectionTitle}</strong></article>
      <article><span>Rezervasyon</span><strong>${totals.count}</strong></article>
      <article><span>Ciro</span><strong>${money(totals.revenue)}</strong></article>
      <article><span>Tahsilat</span><strong>${money(totals.paid)}</strong></article>
      <article><span>Kalan Alacak</span><strong>${money(totals.remaining)}</strong></article>
      <article><span>Net Kar</span><strong>${money(totals.profit)}</strong></article>
    </section>
  `;
}

function smartInsightsMarkup(current, previous, reservations) {
  const paymentRate = current.revenue ? Math.round((current.paid / current.revenue) * 100) : 0;
  const profitRate = current.revenue ? Math.round((current.profit / current.revenue) * 100) : 0;
  const revenueChange = previous ? percentChange(current.revenue, previous.revenue) : "Karşılaştırma seçilmedi";
  const remainingHigh = current.remaining > current.paid;
  const insights = [
    { title: "Ciro Eğilimi", text: previous ? `Seçili raporda satış ${revenueChange} değişti.` : "Geçen yıl karşılaştırması açılırsa eğilim analizi görünür.", tone: previous && current.revenue >= previous.revenue ? "positive" : "neutral" },
    { title: "Tahsilat Durumu", text: `Tahsilat oranı %${paymentRate}. Kalan alacak ${money(current.remaining)}.`, tone: remainingHigh ? "warning" : "positive" },
    { title: "Karlılık", text: `Net kar oranı %${profitRate}. Ortalama satış ${money(current.averageSale)}.`, tone: profitRate >= 35 ? "positive" : "warning" },
    { title: "Operasyon Hacmi", text: `${current.guests} konuk ve ${reservations.length} rezervasyon yönetiliyor.`, tone: "neutral" }
  ];
  return `
    <section class="panel insight-panel">
      <h2>Akıllı Özet</h2>
      <div class="insight-grid">
        ${insights.map(item => `<article class="${item.tone}"><strong>${item.title}</strong><span>${item.text}</span></article>`).join("")}
      </div>
    </section>
  `;
}

function topEarnersMarkup(reservations) {
  const highlights = reportHighlights(reservations);
  const cards = [
    ["En Karlı Organizasyon", highlights.type],
    ["En Çok Kazandıran Salon", highlights.hall],
    ["En Çok Satan Paket", highlights.package],
    ["En Güçlü Ekstra", highlights.extra],
    ["En Güçlü Menü", highlights.menu]
  ];
  return `
    <section class="panel top-earners-panel">
      <h2>En Çok Kazandıranlar</h2>
      <div class="top-earners-grid">
        ${cards.map(([title, item]) => `
          <article>
            <span>${title}</span>
            <strong>${item.label}</strong>
            <small>${item.count} adet · ${money(item.revenue)} ciro · ${money(item.revenue - item.cost)} kar</small>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function monthlyReportRows(reservations) {
  const rows = Array.from({ length: 12 }, (_, month) => ({
    month,
    label: new Date(state.year, month, 1).toLocaleDateString("tr-TR", { month: "long" }),
    count: 0,
    revenue: 0,
    cost: 0,
    paid: 0
  }));
  reservations.forEach(item => {
    const month = Number(String(item.date || "").slice(5, 7)) - 1;
    if (!rows[month]) return;
    rows[month].count += 1;
    rows[month].revenue += Number(item.total || 0);
    rows[month].cost += Number(item.cost || 0);
    rows[month].paid += Number(item.paid || 0);
  });
  return rows;
}

function monthlyChartMarkup(reservations) {
  const rows = monthlyReportRows(reservations);
  const max = Math.max(...rows.map(row => row.revenue), 1);
  return `
    <section class="panel monthly-panel">
      <h2>Aylık Ciro ve Kar Grafiği</h2>
      <div class="monthly-chart">
        ${rows.map(row => {
          const revenueHeight = Math.max(5, Math.round((row.revenue / max) * 100));
          const profit = row.revenue - row.cost;
          const profitHeight = Math.max(5, Math.round((Math.max(profit, 0) / max) * 100));
          return `
            <article>
              <div class="month-bars">
                <span class="revenue" style="height:${revenueHeight}%"></span>
                <span class="profit-bar" style="height:${profitHeight}%"></span>
              </div>
              <strong>${row.label.slice(0, 3)}</strong>
              <small>${row.count} kayıt</small>
            </article>
          `;
        }).join("")}
      </div>
      <div class="chart-legend"><span class="revenue"></span> Ciro <span class="profit-bar"></span> Net kar</div>
    </section>
  `;
}

function collectionReportMarkup(reservations, totals) {
  const risky = reservations
    .filter(item => Number(item.total || 0) - Number(item.paid || 0) > 0)
    .sort((a, b) => (Number(b.total || 0) - Number(b.paid || 0)) - (Number(a.total || 0) - Number(a.paid || 0)))
    .slice(0, 5);
  return `
    <section class="panel collection-panel">
      <h2>Tahsilat Raporu</h2>
      <div class="collection-grid">
        <article><span>Toplam Alacak</span><strong>${money(totals.remaining)}</strong></article>
        <article><span>Tahsilat Oranı</span><strong>%${totals.revenue ? Math.round((totals.paid / totals.revenue) * 100) : 0}</strong></article>
        <article><span>Kapora / Tahsilat</span><strong>${money(totals.paid)}</strong></article>
      </div>
      ${risky.length ? table(["Rezervasyon", "Tarih", "Toplam", "Tahsilat", "Kalan"], risky.map(item => [
        `<strong>${item.couple}</strong>`,
        new Date(item.date).toLocaleDateString("tr-TR"),
        money(item.total),
        money(item.paid),
        `<span class="danger-text">${money(Number(item.total || 0) - Number(item.paid || 0))}</span>`
      ])) : empty("Kalan alacak yok", "Seçili raporda tüm tahsilatlar tamamlanmış görünüyor.")}
    </section>
  `;
}

function csvCell(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function exportReportCsv() {
  const range = getReportRange();
  const activeReport = state.activeView?.startsWith("report") ? state.activeView : "reports";
  const reservations = filteredReportReservations(activeReport, range);
  const rows = [
    ["Tarih", "Rezervasyon", "Tür", "Salon", "Paket", "Konuk", "Toplam", "Masraf", "Tahsilat", "Kalan", "Net Kar"],
    ...reservations
      .slice()
      .sort((a, b) => a.date.localeCompare(b.date))
      .map(item => [
        item.date,
        item.couple,
        typeName(item.type),
        item.hallName || "",
        item.packageName || "",
        item.guests || 0,
        item.total || 0,
        item.cost || 0,
        item.paid || 0,
        Number(item.total || 0) - Number(item.paid || 0),
        Number(item.total || 0) - Number(item.cost || 0)
      ])
  ];
  const csv = `\uFEFF${rows.map(row => row.map(csvCell).join(";")).join("\n")}`;
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `dugun-platformu-rapor-${range.start}-${range.end}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("Excel raporu indirildi");
}

function renderReportDetail(activeReport, reservations, totals) {
  if (activeReport === "reportTypes") {
    return reportRowsTable("Organizasyon Türüne Göre Rapor", reportGroupRows(reservations, item => item.type, item => typeName(item.type)), "Organizasyon Türü");
  }
  if (activeReport === "reportHalls") {
    return reportRowsTable("Salonlara Göre Rapor", reportGroupRows(reservations, item => item.hallName, item => item.hallName || "Salon seçilmedi"), "Salon");
  }
  if (activeReport === "reportPackages") {
    return reportRowsTable("Paketlere Göre Rapor", reportGroupRows(reservations, item => item.packageName, item => item.packageName || "Paket seçilmedi"), "Paket");
  }
  if (activeReport === "reportExtras") {
    return reportRowsTable("Ekstra Seçim Raporu", reportLineItemRows(reservations, "extras"), "Ekstra");
  }
  if (activeReport === "reportMenus") {
    return reportRowsTable("Menü Raporu", reportLineItemRows(reservations, "menus", true), "Menü");
  }
  return `
    <section class="panel">
      <h2>Rezervasyon Gelir Özeti</h2>
      ${reservations.length ? table(["Tarih", "Rezervasyon", "Tür", "Salon", "Toplam", "Kapora", "Kalan", "Kar"], reservations
        .slice()
        .sort((a, b) => a.date.localeCompare(b.date))
        .map(item => [
          new Date(item.date).toLocaleDateString("tr-TR"),
          `<strong>${item.couple}</strong>`,
          typeName(item.type),
          item.hallName || "-",
          money(item.total),
          money(item.paid),
          money(Number(item.total || 0) - Number(item.paid || 0)),
          `<span class="profit">${money(Number(item.total || 0) - Number(item.cost || 0))}</span>`
        ])) : empty("Seçili tarih aralığında rezervasyon yok")}
      <div class="report-footer">
        <span>Toplam tahsilat: <strong>${money(totals.paid)}</strong></span>
        <span>Kalan alacak: <strong>${money(totals.revenue - totals.paid)}</strong></span>
      </div>
    </section>
  `;
}

function renderReports() {
  const tabLabels = {
    reports: "Genel Özet",
    reportTypes: "Organizasyon Türü",
    reportHalls: "Salonlar",
    reportPackages: "Paketler",
    reportExtras: "Ekstralar",
    reportMenus: "Menüler"
  };
  const activeReport = tabLabels[state.activeView] ? state.activeView : "reports";
  const range = getReportRange();
  const filterConfig = reportFilterConfig(activeReport);
  if (!filterConfig) {
    state.reportFilterValue = "";
    state.reportFilterView = "";
  } else if (state.reportFilterView !== activeReport) {
    state.reportFilterValue = "";
    state.reportFilterView = activeReport;
  } else if (state.reportFilterValue && !filterConfig.options.some(option => option.value === state.reportFilterValue)) {
    state.reportFilterValue = "";
  }
  const reportReservations = filteredReportReservations(activeReport, range);
  const compareRange = comparisonRange(range);
  const comparisonReservations = compareRange ? filteredReportReservations(activeReport, compareRange) : [];
  const comparisonLabel = state.reportCompareMode === "previousYear"
    ? "Geçen Yıl"
    : state.reportCompareMode === "sameMonthLastYear" ? "Geçen Yıl Aynı Tarih Aralığı" : "";
  const totals = summarizeReservations(reportReservations);
  const comparisonTotals = comparisonReservations.length ? summarizeReservations(comparisonReservations) : null;
  const profit = totals.revenue - totals.cost;
  const selectionTitle = reportSelectionTitle(activeReport);
  root.innerHTML = `
    <div class="report-heading">
      <h1 class="report-title">Detaylı Raporlar</h1>
      <div class="report-actions">
        <button class="btn secondary" type="button" data-action="exportReportCsv">Excel'e Aktar</button>
        <button class="btn secondary" type="button" data-action="printReport">PDF / Yazdır</button>
      </div>
    </div>
    <div class="panel">
      <div class="filters">
        <div class="field"><label>Başlangıç Tarihi</label><input id="reportStart" type="date" value="${range.start}"></div>
        <div class="field"><label>Bitiş Tarihi</label><input id="reportEnd" type="date" value="${range.end}"></div>
        <div class="field"><label>Hızlı Filtre</label><div class="quick-filter"><button class="btn secondary" type="button" data-report-range="thisMonth">Bu Ay</button><button class="btn secondary" type="button" data-report-range="lastMonth">Geçen Ay</button><button class="btn secondary" type="button" data-report-range="thisYear">Bu Yıl</button><button class="btn secondary" type="button" data-report-range="lastYear">Geçen Yıl</button></div></div>
        <div class="field"><label>Karşılaştırma</label><select id="reportCompareMode"><option value="" ${!state.reportCompareMode ? "selected" : ""}>Karşılaştırma yok</option><option value="previousYear" ${state.reportCompareMode === "previousYear" ? "selected" : ""}>Geçen yılla karşılaştır</option><option value="sameMonthLastYear" ${state.reportCompareMode === "sameMonthLastYear" ? "selected" : ""}>Geçen yıl aynı tarih aralığı</option></select></div>
      </div>
      ${filterConfig ? `<div class="filters report-specific-filter"><div class="field"><label>${filterConfig.label} Seçimi</label><select id="reportFilterValue"><option value="">${filterConfig.all}</option>${filterConfig.options.map(option => `<option value="${attr(option.value)}" ${state.reportFilterValue === option.value ? "selected" : ""}>${option.name}</option>`).join("")}</select></div></div>` : ""}
    </div>
    ${executiveSummaryMarkup(totals, selectionTitle)}
    <div class="tabs">
      ${Object.entries(tabLabels).map(([view, label]) => `<button class="tab ${activeReport === view ? "active" : ""}" data-view="${view}">${label}</button>`).join("")}
    </div>
    <div class="stats-grid">
      ${statCard("Toplam Rezervasyon", reportReservations.length, "□", "blue")}
      ${statCard("Toplam Ciro", money(totals.revenue), "$", "green")}
      ${statCard("Toplam Maliyet", money(totals.cost), "⌄", "orange")}
      ${statCard("Toplam Kar", money(profit), "↗", "violet", `Kar Oranı: %${totals.revenue ? Math.round((profit / totals.revenue) * 100) : 0}`)}
    </div>
    ${renderReportDetail(activeReport, reportReservations, totals)}
    ${comparisonMarkup(reportReservations, comparisonReservations, comparisonLabel)}
    ${smartInsightsMarkup(totals, comparisonTotals, reportReservations)}
    ${monthlyChartMarkup(reportReservations)}
    ${topEarnersMarkup(reportReservations)}
    ${collectionReportMarkup(reportReservations, totals)}
  `;
}

function smsTriggerLabel(template) {
  if (template.trigger === "before_event") return `${template.offsetDays} gün önce`;
  if (template.trigger === "after_event") return `${template.offsetDays} gün sonra`;
  return "Manuel";
}

function smsSendDate(template, reservation) {
  if (template.trigger === "manual") return "";
  const date = new Date(`${reservation.date}T00:00:00`);
  const offset = Number(template.offsetDays || 0);
  date.setDate(date.getDate() + (template.trigger === "before_event" ? -offset : offset));
  return localDateValue(date);
}

function smsPreview(template, reservation) {
  const remaining = Number(reservation.total || 0) - Number(reservation.paid || 0);
  return String(template.body || "")
    .replaceAll("{gelin_adi}", reservation.brideName || "Gelin")
    .replaceAll("{damat_adi}", reservation.groomName || "Damat")
    .replaceAll("{mekan_adi}", currentTenant()?.name || "Mekan")
    .replaceAll("{tarih}", new Date(reservation.date).toLocaleDateString("tr-TR"))
    .replaceAll("{kalan_tutar}", money(remaining))
    .replaceAll("{tutar}", money(remaining));
}

function smsScheduleRows() {
  const templates = scopedItems("smsTemplates").filter(template => template.active !== false && template.trigger !== "manual");
  return visibleReservations()
    .flatMap(reservation => templates.map(template => ({
      reservation,
      template,
      sendDate: smsSendDate(template, reservation)
    })))
    .filter(item => item.sendDate)
    .sort((a, b) => a.sendDate.localeCompare(b.sendDate))
    .slice(0, 12);
}

function smsTemplateForm(editing = null) {
  return `
    <section class="panel sms-template-form-panel">
      <h2>${editing ? "SMS Şablonunu Düzenle" : "Yeni SMS Şablonu"}</h2>
      <form id="smsTemplateForm">
        <div class="form-grid thirds">
          <div class="field"><label>Şablon Başlığı</label><input name="title" required value="${attr(editing?.title || "")}" placeholder="Örn: Prova hatırlatma"></div>
          <div class="field"><label>Etiket</label><input name="tag" value="${attr(editing?.tag || "")}" placeholder="Prova, Tahsilat, Teşekkür"></div>
          <div class="field"><label>Durum</label><select name="active"><option value="true" ${editing?.active !== false ? "selected" : ""}>Aktif</option><option value="false" ${editing?.active === false ? "selected" : ""}>Pasif</option></select></div>
          <div class="field"><label>Gönderim Zamanı</label><select name="trigger"><option value="before_event" ${editing?.trigger === "before_event" ? "selected" : ""}>Organizasyondan önce</option><option value="after_event" ${editing?.trigger === "after_event" ? "selected" : ""}>Organizasyondan sonra</option><option value="manual" ${editing?.trigger === "manual" ? "selected" : ""}>Manuel</option></select></div>
          <div class="field"><label>Gün</label><input name="offsetDays" type="number" min="0" value="${Number(editing?.offsetDays || 0)}"></div>
          <div class="field"><label>Mod</label><select name="mode"><option value="Otomatik" ${(editing?.mode || "Otomatik") === "Otomatik" ? "selected" : ""}>Otomatik</option><option value="Manuel" ${editing?.mode === "Manuel" ? "selected" : ""}>Manuel</option></select></div>
          <div class="field full"><label>Mesaj Metni</label><textarea name="body" required placeholder="{gelin_adi}, {damat_adi}, {mekan_adi}, {tarih}, {kalan_tutar} kullanabilirsin">${attr(editing?.body || "")}</textarea><div class="hint">Kullanılabilir alanlar: {gelin_adi}, {damat_adi}, {mekan_adi}, {tarih}, {kalan_tutar}</div></div>
        </div>
        <div class="form-actions">
          <button class="btn dark" type="submit">${editing ? "Şablonu Güncelle" : "Şablon Ekle"}</button>
          ${editing ? `<button class="btn secondary" type="button" data-action="cancelSmsTemplateEdit">Vazgeç</button>` : ""}
        </div>
      </form>
    </section>
  `;
}

function renderSms() {
  const settings = state.smsSettings || {};
  const remaining = Number(settings.credit || 0) - Number(settings.used || 0);
  const tenant = currentTenant();
  const quota = state.tenantSmsQuotas?.[tenant?.id] || { quota: settings.defaultTenantQuota || 0, used: 0 };
  const templates = scopedItems("smsTemplates");
  const editingTemplate = state.editingSmsTemplateId ? state.smsTemplates.find(item => item.id === state.editingSmsTemplateId) : null;
  const scheduled = smsScheduleRows();
  root.innerHTML = `
    ${pageHeader("SMS Bildirimleri", `<div class="sms-credit"><span>Ana SMS Havuzu</span><strong>${remaining.toLocaleString("tr-TR")}</strong><small>Başlık: ${settings.senderTitle || "AYSAH"}</small></div>`)}
    <section class="panel sms-settings-panel">
      <div class="sms-explain">
        <h2>Merkezi SMS Bağlantısı</h2>
        <p>Mekanlar ayrı SMS paketi almak yerine senin ana SMS havuzundan, tanımladığın kota kadar gönderim yapar. Gönderici başlığı varsayılan olarak <strong>${settings.senderTitle || "AYSAH"}</strong> görünür.</p>
      </div>
      <form id="smsSettingsForm">
        <div class="form-grid thirds">
          <div class="field"><label>Gönderici Başlığı</label><input name="senderTitle" value="${attr(settings.senderTitle || "AYSAH")}"></div>
          <div class="field"><label>Sağlayıcı Kullanıcı Adı</label><input name="providerUser" value="${attr(settings.providerUser || "")}" placeholder="SMS panel kullanıcı adı"></div>
          <div class="field"><label>Sağlayıcı Şifre / API Anahtarı</label><input name="providerPassword" type="password" value="${attr(settings.providerPassword || "")}" placeholder="Şifre veya API anahtarı"></div>
          <div class="field"><label>API Adresi</label><input name="providerApiUrl" value="${attr(settings.providerApiUrl || "")}" placeholder="https://..."></div>
          <div class="field"><label>Ana SMS Kredisi</label><input name="credit" type="number" min="0" value="${Number(settings.credit || 0)}"></div>
          <div class="field"><label>Bu Mekanın Kotası</label><input name="tenantQuota" type="number" min="0" value="${Number(quota.quota || 0)}"></div>
        </div>
        <div class="form-actions"><button class="btn dark" type="submit">SMS Ayarlarını Kaydet</button></div>
      </form>
    </section>
    <div class="sms-overview-grid">
      ${statCard("Ana Havuz Kalan", remaining.toLocaleString("tr-TR"), "▱", "violet")}
      ${statCard("Bu Mekan Kotası", `${Number(quota.used || 0)} / ${Number(quota.quota || 0)}`, "□", "blue")}
      ${statCard("Aktif Şablon", templates.filter(item => item.active !== false).length, "✉", "green")}
      ${statCard("Planlanan SMS", scheduled.length, "⌁", "orange")}
    </div>
    ${smsTemplateForm(editingTemplate)}
    <section class="panel">
      <h2>Otomatik SMS Şablonları</h2>
      <div class="sms-grid">
        ${templates.map(template => `
          <article class="sms-card ${template.active === false ? "passive" : ""}">
            <div class="card-actions"><button type="button" data-action="editSmsTemplate" data-id="${template.id}">✎</button><button type="button" data-action="deleteSmsTemplate" data-id="${template.id}">⌫</button></div>
            <h2>${template.title}</h2>
            <span class="tag">${template.tag}</span>
            <p>${template.body}</p>
            <small>${template.active === false ? "Pasif" : "Aktif"} · ${template.mode || "Otomatik"} · ${smsTriggerLabel(template)}</small>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="panel">
      <h2>Yaklaşan Otomatik Gönderimler</h2>
      ${scheduled.length ? table(["Gönderim", "Şablon", "Rezervasyon", "Telefon", "Mesaj Önizleme"], scheduled.map(item => [
        new Date(item.sendDate).toLocaleDateString("tr-TR"),
        item.template.title,
        `<strong>${item.reservation.couple}</strong>`,
        item.reservation.phone || "-",
        smsPreview(item.template, item.reservation)
      ])) : empty("Planlanan SMS yok", "Aktif şablonlar ve rezervasyon tarihleri oluşunca burada görünür.")}
    </section>
    <section class="panel">
      <h2>Gönderim Geçmişi</h2>
      ${state.smsHistory.length ? table(["Tarih", "Mekan", "Alıcı", "Şablon", "Durum"], state.smsHistory.map(item => [item.date, item.tenantName, item.phone, item.template, item.status])) : empty("Henüz gerçek gönderim yapılmadı", "Canlı SMS API bağlantısı açıldığında gönderimler burada takip edilecek.")}
    </section>
  `;
}

function renderStock() {
  const low = state.stock.filter(item => item.quantity <= item.minimum);
  root.innerHTML = `
    ${pageHeader("Stok Yönetimi", `<button class="btn">+ Yeni Stok Ekle</button>`)}
    <div class="alert">△ <strong>Düşük Stok Uyarısı!</strong><br>${low.length} ürünün stoğu minimum seviyenin altında</div>
    <div class="stats-grid">
      ${statCard("Toplam Ürün", state.stock.length, "◇", "violet")}
      ${statCard("Düşük Stok", low.length, "⌄", "red")}
      ${statCard("Kategoriler", new Set(state.stock.map(i => i.category)).size, "⬡", "green")}
      ${statCard("Lokasyonlar", new Set(state.stock.map(i => i.location)).size, "▣", "blue")}
    </div>
    <section class="panel">
      <h2>Stok Listesi</h2>
      ${table(["Ürün Adı", "Kategori", "Miktar", "Min. Miktar", "Birim", "Konum", "Durum", "İşlemler"], state.stock.map(item => [
        `<strong>${item.name}</strong>`,
        item.category,
        `<strong>${item.quantity}</strong>`,
        item.minimum,
        item.unit,
        item.location,
        stockBadge(item),
        `<button class="table-icon">✎</button><button class="table-icon delete">⌫</button>`
      ]))}
    </section>
  `;
}

function staffAssignmentTotals(staffId = null) {
  const assignments = scopedItems("staffAssignments").filter(item => !staffId || item.staffId === staffId);
  return assignments.reduce((acc, item) => {
    acc.count += 1;
    acc.total += Number(item.dailyWage || 0);
    acc.paid += Number(item.paid || 0);
    return acc;
  }, { count: 0, total: 0, paid: 0 });
}

function assignmentStatusLabel(status) {
  return {
    paid: "Ödendi",
    partial: "Kısmi Ödendi",
    unpaid: "Ödenmedi"
  }[status] || "Kısmi Ödendi";
}

function assignmentStatusClass(status) {
  return {
    paid: "ok",
    partial: "warn",
    unpaid: "danger"
  }[status] || "warn";
}

function renderStaffAssignmentForm(editing = null) {
  const staff = scopedItems("staff");
  const reservations = visibleReservations()
    .filter(item => !item.comparisonDemoReservation)
    .slice()
    .sort((a, b) => a.date.localeCompare(b.date));
  return `
    <section class="panel">
      <h2>${editing ? "Görevlendirme Düzenle" : "Yeni Görevlendirme"}</h2>
      <form id="staffAssignmentForm">
        <div class="form-grid thirds">
          <div class="field"><label>Personel</label><select name="staffId" required><option value="">Seçin</option>${staff.map(item => `<option value="${item.id}" ${editing?.staffId === item.id ? "selected" : ""}>${item.name} - ${item.role}</option>`).join("")}</select></div>
          <div class="field"><label>Rezervasyon / Organizasyon</label><select name="reservationId" required><option value="">Seçin</option>${reservations.map(item => `<option value="${item.id}" ${editing?.reservationId === item.id ? "selected" : ""}>${new Date(item.date).toLocaleDateString("tr-TR")} - ${item.couple}</option>`).join("")}</select></div>
          <div class="field"><label>Görev</label><input name="role" required value="${attr(editing?.role || "")}" placeholder="Piyanist, garson, servis şefi"></div>
          <div class="field"><label>Tarih</label><input name="date" type="date" value="${attr(editing?.date || today())}"></div>
          <div class="field"><label>Günlük Yevmiye</label><input name="dailyWage" type="number" min="0" value="${Number(editing?.dailyWage || 0)}"></div>
          <div class="field"><label>Ödenen</label><input name="paid" type="number" min="0" value="${Number(editing?.paid || 0)}"></div>
          <div class="field full"><label>Not</label><textarea name="note" placeholder="Görev, saat, özel not...">${attr(editing?.note || "")}</textarea></div>
        </div>
        <div class="form-actions">
          <button class="btn dark" type="submit">${editing ? "Görevlendirmeyi Güncelle" : "Görevlendir"}</button>
          <button class="btn secondary" type="button" data-action="cancelStaffAssignmentEdit">Vazgeç</button>
        </div>
      </form>
    </section>
  `;
}

function staffAssignmentCard(assignment) {
  const staffMember = state.staff.find(item => item.id === assignment.staffId);
  const reservation = state.reservations.find(item => item.id === assignment.reservationId);
  const remaining = Number(assignment.dailyWage || 0) - Number(assignment.paid || 0);
  return `
    <article class="assignment-card">
      <div>
        <span class="badge ${assignmentStatusClass(assignment.status)}">${assignmentStatusLabel(assignment.status)}</span>
        <h3>${staffMember?.name || "Personel yok"}</h3>
        <p>${assignment.role || staffMember?.role || "Görev belirtilmedi"}</p>
        <div class="assignment-meta">
          <span>${new Date(assignment.date).toLocaleDateString("tr-TR")}</span>
          <span>${reservation?.couple || "Rezervasyon bulunamadı"}</span>
          <span>${reservation?.hallName || ""}</span>
        </div>
        ${assignment.note ? `<small>${assignment.note}</small>` : ""}
      </div>
      <div class="assignment-money">
        <span>Yevmiye <strong>${money(assignment.dailyWage)}</strong></span>
        <span>Ödenen <strong class="profit">${money(assignment.paid)}</strong></span>
        <span>Kalan <strong class="${remaining > 0 ? "danger-text" : "profit"}">${money(remaining)}</strong></span>
      </div>
      <div class="row-actions">
        <button class="small-icon" type="button" data-action="editStaffAssignment" data-id="${assignment.id}">✎ Düzenle</button>
        <button class="small-icon delete" type="button" data-action="deleteStaffAssignment" data-id="${assignment.id}">⌫ Sil</button>
      </div>
    </article>
  `;
}

function renderStaff() {
  const staff = scopedItems("staff");
  const editing = state.editingStaffId ? state.staff.find(item => item.id === state.editingStaffId) : null;
  const editingAssignment = state.editingStaffAssignmentId ? state.staffAssignments.find(item => item.id === state.editingStaffAssignmentId) : null;
  const showForm = Boolean(state.showStaffForm || editing);
  const showAssignmentForm = Boolean(state.showStaffAssignmentForm || editingAssignment);
  const assignments = scopedItems("staffAssignments").slice().sort((a, b) => a.date.localeCompare(b.date));
  const assignmentTotals = staffAssignmentTotals();
  const active = staff.filter(item => item.active).length;
  root.innerHTML = `
    ${pageHeader("Personel Yönetimi", `<div class="row-actions"><button class="btn secondary" type="button" data-action="newStaffAssignment">+ Görevlendirme</button><button class="btn" type="button" data-action="newStaff">+ Yeni Personel Ekle</button></div>`)}
    <div class="stats-grid three-cols">
      ${statCard("Toplam Personel", staff.length, "♙", "violet")}
      ${statCard("Görev Kaydı", assignmentTotals.count, "□", "blue")}
      ${statCard("Kalan Personel Alacağı", money(assignmentTotals.total - assignmentTotals.paid), "₺", assignmentTotals.total - assignmentTotals.paid > 0 ? "orange" : "green", `${active} aktif personel`)}
    </div>
    ${showAssignmentForm ? renderStaffAssignmentForm(editingAssignment) : ""}
    ${showForm ? `<section class="panel">
      <h2>${editing ? "Personel Düzenle" : "Yeni Personel Ekle"}</h2>
      <form id="staffForm">
        <div class="form-grid thirds">
          <div class="field"><label>Ad Soyad</label><input name="name" required value="${attr(editing?.name || "")}" placeholder="Örn: Ahmet Yılmaz"></div>
          <div class="field"><label>Görev</label><input name="role" required value="${attr(editing?.role || "")}" placeholder="Örn: Etkinlik Koordinatörü"></div>
          <div class="field"><label>Telefon</label><input name="phone" value="${attr(editing?.phone || "")}" placeholder="05xx xxx xx xx"></div>
          <div class="field"><label>E-posta</label><input name="email" type="email" value="${attr(editing?.email || "")}" placeholder="ornek@mail.com"></div>
          <div class="field"><label>Atama / Etkinlik Sayısı</label><input name="events" type="number" min="0" value="${Number(editing?.events || 0)}"></div>
          <div class="field"><label>Durum</label><select name="active"><option value="true" ${editing?.active !== false ? "selected" : ""}>Aktif</option><option value="false" ${editing?.active === false ? "selected" : ""}>Pasif</option></select></div>
        </div>
        <div class="form-actions">
          <button class="btn dark" type="submit">${editing ? "Personeli Güncelle" : "Personel Ekle"}</button>
          <button class="btn secondary" type="button" data-action="cancelStaffEdit">Vazgeç</button>
        </div>
      </form>
    </section>` : ""}
    <div class="staff-grid">
      ${staff.map(item => `
        <article class="person-card">
          ${(() => {
            const totals = staffAssignmentTotals(item.id);
            const remaining = totals.total - totals.paid;
            return `
          <span class="status ${item.active ? "ok" : ""}">${item.active ? "Aktif" : "Pasif"}</span>
          <h2>${item.name}</h2>
          <p>${item.role}</p>
          <div class="person-meta"><span>☎ ${item.phone}</span><span>✉ ${item.email}</span><span>□ ${totals.count} görev</span><span>Yevmiye: ${money(totals.total)}</span><span>Ödenen: ${money(totals.paid)}</span><span>Kalan: <strong class="${remaining > 0 ? "danger-text" : "profit"}">${money(remaining)}</strong></span></div>
            `;
          })()}
          <div class="row-actions">
            <button class="small-icon" type="button" data-action="editStaff" data-id="${item.id}">✎ Düzenle</button>
            ${state.pendingStaffDeleteId === item.id
              ? `<button class="small-icon delete confirm-delete" type="button" data-action="confirmDeleteStaff" data-id="${item.id}">Silinsin mi?</button><button class="small-icon" type="button" data-action="cancelStaffDelete">Vazgeç</button>`
              : `<button class="small-icon delete" type="button" data-action="deleteStaff" data-id="${item.id}">⌫ Sil</button>`}
          </div>
        </article>
      `).join("") || empty("Personel kaydı yok", "Yeni Personel Ekle alanından ilk personeli oluşturabilirsiniz.")}
    </div>
    <section class="panel">
      <h2>Görev ve Yevmiye Kartları</h2>
      <div class="assignment-grid">
        ${assignments.map(staffAssignmentCard).join("") || empty("Henüz görevlendirme yok", "Yeni Görevlendirme ile personeli bir organizasyona bağlayabilirsiniz.")}
      </div>
    </section>
  `;
}

function renderSuppliers() {
  root.innerHTML = `
    ${pageHeader("Tedarikçi Yönetimi", `<button class="btn">+ Yeni Tedarikçi Ekle</button>`)}
    <div class="category-grid">
      ${state.suppliers.map(item => `
        <article class="mini-card">
          <h3>${item.name}</h3>
          <span class="tag">${item.category}</span>
          <p class="muted">☎ ${item.phone}</p>
          <p><strong>Cari:</strong> <span class="${item.balance < 0 ? "danger-text" : "profit"}">${money(item.balance)}</span></p>
          <div class="row-actions"><button class="small-icon">✎ Düzenle</button><button class="small-icon delete">⌫</button></div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderSupplierAccount() {
  const total = state.suppliers.reduce((sum, item) => sum + item.balance, 0);
  const paid = Math.abs(total);
  root.innerHTML = `
    ${pageHeader("Tedarikçi Cari Hareketleri", `<button class="btn">+ Yeni Hareket Ekle</button>`)}
    <div class="stats-grid three-cols">
      ${statCard("Toplam Alacak", money(total), "⌄", "red")}
      ${statCard("Aktif Tedarikçi", state.suppliers.length, "$", "green")}
      ${statCard("Toplam İşlem", 18, "▤", "blue")}
    </div>
    <div class="tabs three"><button class="tab active">Genel Özet</button><button class="tab">Tüm Hareketler</button><button class="tab">Detaylı Rapor</button></div>
    <section class="panel">
      <h2>Tedarikçi Özet Raporu</h2>
      ${table(["Tedarikçi", "Toplam Tutar", "Ödenen", "Kalan Borç", "İşlemler"], [
        ...state.suppliers.map(item => [item.name, money(0), `<span class="profit">${money(Math.abs(item.balance))}</span>`, `<span class="danger-text">${money(item.balance)}</span>`, `<button class="btn secondary">Detay</button>`]),
        ["<strong>TOPLAM</strong>", `<strong>${money(0)}</strong>`, `<strong class="profit">${money(paid)}</strong>`, `<strong class="danger-text">${money(total)}</strong>`, ""]
      ])}
    </section>
  `;
}

function tenantStats(tenantId) {
  const reservations = state.reservations.filter(item => item.tenantId === tenantId);
  const revenue = reservations.reduce((sum, item) => sum + Number(item.total || 0), 0);
  const paid = reservations.reduce((sum, item) => sum + Number(item.paid || 0), 0);
  return { reservations: reservations.length, revenue, paid };
}

function tenantMatches(tenant, query) {
  const needle = String(query || "").trim().toLocaleLowerCase("tr-TR");
  if (!needle) return true;
  return [
    tenant.name,
    tenant.username,
    tenant.contactName,
    tenant.phone,
    tenant.city,
    tenant.membershipPackage,
    tenant.annualFee,
    tenant.membershipPaid,
    tenant.membershipEndDate,
    tenant.renewalDate,
    tenant.adminNote,
    tenant.lastLoginAt,
    tenant.lastActivityAt,
    tenantStatusLabel(tenant.status)
  ].some(value => String(value || "").toLocaleLowerCase("tr-TR").includes(needle));
}

function tenantStatusLabel(status) {
  return {
    active: "Aktif",
    trial: "Deneme",
    suspended: "Borçtan Kapalı",
    passive: "Pasif"
  }[status] || "Aktif";
}

function tenantStatusClass(status) {
  return {
    active: "ok",
    trial: "info",
    suspended: "danger",
    passive: "warn"
  }[status] || "ok";
}

function tenantCard(tenant) {
  const stats = tenantStats(tenant.id);
  const selected = tenant.id === state.activeTenantId;
  const annualFee = Number(tenant.annualFee || 0);
  const membershipPaid = Number(tenant.membershipPaid || 0);
  const membershipDebt = Math.max(0, annualFee - membershipPaid);
  const hasDebt = membershipDebt > 0;
  return `
    <article class="tenant-card ${selected ? "active" : ""}">
      <div>
        <div class="tenant-card-head">
          <h2>${tenant.name}</h2>
          <span class="badge ${tenantStatusClass(tenant.status)}">${tenantStatusLabel(tenant.status)}</span>
          ${hasDebt ? `<span class="badge danger">Üyelik borcu var</span>` : `<span class="badge ok">Üyelik ödendi</span>`}
        </div>
        <p class="muted">${tenant.city || "-"} · ${tenant.contactName || "Yetkili yok"} · ${tenant.phone || "Telefon yok"}</p>
        <div class="tenant-login">
          <span>Kullanıcı adı: <strong>${tenant.username}</strong></span>
          <span>Şifre: <strong>${tenant.password}</strong></span>
        </div>
        <div class="membership-strip">
          <span>Üyelik: <strong>${tenant.membershipPackage || "Paket seçilmedi"}</strong></span>
          <span>Yıllık: <strong>${money(annualFee)}</strong></span>
          <span>Tahsilat: <strong class="profit">${money(membershipPaid)}</strong></span>
          <span>Kalan: <strong class="${membershipDebt > 0 ? "danger-text" : "profit"}">${money(membershipDebt)}</strong></span>
        </div>
        <div class="tenant-followup">
          <span>Bitiş: <strong>${tenant.membershipEndDate || "-"}</strong></span>
          <span>Yenileme: <strong>${tenant.renewalDate || "-"}</strong></span>
          <span>Son giriş: <strong>${tenant.lastLoginAt || "-"}</strong></span>
          <span>Son işlem: <strong>${tenant.lastActivityAt || "-"}</strong></span>
        </div>
        ${tenant.adminNote ? `<p class="tenant-note"><strong>Admin notu:</strong> ${tenant.adminNote}</p>` : ""}
      </div>
      <div class="tenant-metrics">
        <span>${stats.reservations} rezervasyon</span>
        <strong>${money(stats.revenue)}</strong>
        <small>Tahsilat: ${money(stats.paid)}</small>
        <button class="btn secondary" type="button" data-action="selectTenant" data-id="${tenant.id}">${selected ? "Seçili Mekan" : "Bu Mekana Geç"}</button>
        <button class="btn secondary" type="button" data-action="editTenant" data-id="${tenant.id}">Düzenle</button>
        <button class="btn danger" type="button" data-action="deleteTenant" data-id="${tenant.id}">Sil</button>
      </div>
    </article>
  `;
}

function renderTenants() {
  const activeTenants = state.tenants.filter(item => item.status === "active").length;
  const query = state.tenantQuery || "";
  const filteredTenants = state.tenants.filter(tenant => tenantMatches(tenant, query));
  const editingTenant = state.editingTenantId ? state.tenants.find(tenant => tenant.id === state.editingTenantId) : null;
  const tenantModal = state.showTenantModal ? `
    <div class="modal-backdrop" data-action="closeTenantModal">
      <section class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="tenantModalTitle">
        <div class="modal-head">
          <h2 id="tenantModalTitle">${editingTenant ? "Mekan Hesabını Düzenle" : "Yeni Mekan Hesabı Aç"}</h2>
          <button class="icon-button" type="button" data-action="closeTenantModal" aria-label="Kapat">×</button>
        </div>
        <form id="tenantForm">
          <div class="form-grid">
            <div class="field"><label>Mekan Adı *</label><input name="name" required placeholder="Örn: İnci Davet Salonu" value="${attr(editingTenant?.name || "")}"></div>
            <div class="field"><label>Kullanıcı Adı *</label><input name="username" required placeholder="Örn: inci" value="${attr(editingTenant?.username || "")}"></div>
            <div class="field"><label>Şifre *</label><input name="password" required placeholder="Geçici şifre" value="${attr(editingTenant?.password || "")}"></div>
            <div class="field"><label>Yetkili Kişi</label><input name="contactName" placeholder="Mekan yetkilisi" value="${attr(editingTenant?.contactName || "")}"></div>
            <div class="field"><label>Telefon</label><input name="phone" placeholder="05xx xxx xx xx" value="${attr(editingTenant?.phone || "")}"></div>
            <div class="field"><label>Şehir</label><input name="city" placeholder="İstanbul" value="${attr(editingTenant?.city || "")}"></div>
            <div class="field"><label>Mekan Durumu</label><select name="status"><option value="active" ${!editingTenant || editingTenant?.status === "active" ? "selected" : ""}>Aktif</option><option value="trial" ${editingTenant?.status === "trial" ? "selected" : ""}>Deneme</option><option value="suspended" ${editingTenant?.status === "suspended" ? "selected" : ""}>Borçtan Kapalı</option><option value="passive" ${editingTenant?.status === "passive" ? "selected" : ""}>Pasif</option></select></div>
            <div class="field"><label>Üyelik Paketi *</label><select name="membershipPackage" required><option value="Başlangıç" ${editingTenant?.membershipPackage === "Başlangıç" ? "selected" : ""}>Başlangıç</option><option value="Profesyonel" ${!editingTenant || editingTenant?.membershipPackage === "Profesyonel" ? "selected" : ""}>Profesyonel</option><option value="Kurumsal" ${editingTenant?.membershipPackage === "Kurumsal" ? "selected" : ""}>Kurumsal</option></select></div>
            <div class="field"><label>Yıllık Üyelik Ücreti (₺) *</label><input name="annualFee" type="number" min="0" required value="${attr(editingTenant?.annualFee ?? 24000)}"></div>
            <div class="field"><label>Tahsil Edilen (₺)</label><input name="membershipPaid" type="number" min="0" value="${attr(editingTenant?.membershipPaid ?? 0)}"></div>
            <div class="field"><label>Üyelik Başlangıcı</label><input name="membershipStartDate" type="date" value="${attr(editingTenant?.membershipStartDate || today())}"></div>
            <div class="field"><label>Üyelik Bitişi</label><input name="membershipEndDate" type="date" value="${attr(editingTenant?.membershipEndDate || `${new Date().getFullYear()}-12-31`)}"></div>
            <div class="field"><label>Yenileme Tarihi</label><input name="renewalDate" type="date" value="${attr(editingTenant?.renewalDate || editingTenant?.membershipEndDate || `${new Date().getFullYear()}-12-31`)}"></div>
            <div class="field"><label>Son Giriş</label><input name="lastLoginAt" value="${attr(editingTenant?.lastLoginAt || "")}" placeholder="2026-05-17 10:30"></div>
            <div class="field"><label>Son İşlem</label><input name="lastActivityAt" value="${attr(editingTenant?.lastActivityAt || "")}" placeholder="2026-05-17 16:45"></div>
            <div class="field full"><label>Admin Notu</label><textarea name="adminNote" placeholder="Sadece ana adminin göreceği iç not...">${attr(editingTenant?.adminNote || "")}</textarea></div>
          </div>
          <div class="form-actions">
            <button class="btn secondary" type="button" data-action="closeTenantModal">Vazgeç</button>
            <button class="btn dark" type="submit">${editingTenant ? "Mekanı Güncelle" : "Mekan Hesabı Aç"}</button>
          </div>
        </form>
      </section>
    </div>
  ` : "";
  root.innerHTML = `
    ${pageHeader("Mekan / Müşteri Hesapları", `<button class="btn" type="button" data-action="focusTenantForm">+ Yeni Mekan</button>`)}
    <div class="stats-grid three-cols">
      ${statCard("Toplam Mekan", state.tenants.length, "□", "blue")}
      ${statCard("Aktif Mekan", activeTenants, "✓", "green")}
      ${statCard("Seçili Mekan", currentTenant()?.name || "-", "◇", "violet")}
    </div>
    <div class="toolbar compact-toolbar">
      <button class="btn secondary" type="button" data-action="clearTenantDemoData">Seçili Mekanın Demo Verisini Temizle</button>
    </div>
    <section class="panel">
      <div class="reservation-search">
        <span>⌕</span>
        <input id="tenantSearch" value="${attr(query)}" placeholder="Mekan adı, kullanıcı adı, yetkili, telefon veya şehir ara...">
      </div>
      <p class="muted" id="tenantCount">Toplam ${filteredTenants.length} mekan gösteriliyor</p>
    </section>
    <section class="panel">
      <h2>Mevcut Mekanlar</h2>
      <div class="tenant-list" id="tenantList">${filteredTenants.map(tenantCard).join("") || empty("Aramanıza uygun mekan yok", "Mekan adı, yetkili, kullanıcı adı veya şehirle tekrar deneyin.")}</div>
    </section>
    ${tenantModal}
  `;
}

function renderTypes() {
  const editing = currentManagementEdit("organizationTypes");
  root.innerHTML = `
    ${pageTitle("□", "Organizasyon Türleri", "Düğün, nişan, sünnet gibi organizasyon türlerini yönetin", "Ana Sayfaya Dön")}
    ${simpleForm("typeForm", editing ? "Organizasyon Türünü Düzenle" : "Yeni Organizasyon Türü Ekle", "Organizasyon Türü Adı *", "Örnek: Düğün, Nişan, Sünnet", "Sistem Değeri *", "Örn: dugun, nisan, sunnet", editing ? "Güncelle" : "+ Ekle", editing)}
    <section class="panel"><h2>Mevcut Organizasyon Türleri</h2><div class="category-grid">${scopedItems("organizationTypes").map(item => categoryCard(item, "organizationTypes")).join("") || empty("Henüz organizasyon türü eklenmemiş")}</div></section>
  `;
}

function renderMenuCategories() {
  const editing = currentManagementEdit("menuCategories");
  root.innerHTML = `
    ${pageTitle("⌑", "Menü Kategorileri", "Kırmızı etler, beyaz etler, sebzeler gibi yemek kategorilerini yönetin", "Ana Sayfaya Dön")}
    ${simpleForm("categoryForm", editing ? "Menü Kategorisini Düzenle" : "Yeni Menü Kategorisi Ekle", "Kategori Adı *", "Örn: Kırmızı Etler, Beyaz Etler, Salatalar", "Sistem Değeri *", "Örn: kirmizi_etler, beyaz_etler", editing ? "Güncelle" : "+ Ekle", editing)}
    <section class="panel"><h2>Mevcut Menü Kategorileri</h2><div class="category-grid">${scopedItems("menuCategories").map(item => categoryCard(item, "menuCategories")).join("") || empty("Henüz menü kategorisi eklenmemiş")}</div></section>
  `;
}

function renderHalls() {
  const editing = currentManagementEdit("halls");
  root.innerHTML = `
    ${pageTitle("▥", "Salon Yönetimi")}
    <section class="panel"><h2>${editing ? "Salonu Düzenle" : "Yeni Salon Ekle"}</h2><form id="hallForm"><div class="form-grid"><div class="field"><label>Salon Adı *</label><input name="name" required placeholder="Örn: Altın Salon" value="${attr(editing?.name || "")}"></div><div class="field"><label>Kapasite (Kişi) *</label><input name="capacity" type="number" min="1" required placeholder="Örn: 500" value="${attr(editing?.capacity || "")}"></div><div class="field full"><label>Açıklama</label><textarea name="description" placeholder="Salon özellikleri...">${attr(editing?.description || "")}</textarea></div></div>${managementActions(editing ? "Salonu Güncelle" : "+ Salon Ekle", editing)}</form></section>
    <section class="panel"><h2>Mevcut Salonlar</h2><div class="list">${scopedItems("halls").map(hallRow).join("") || empty("Yeni salon ekleyin")}</div></section>
  `;
}

function renderPackages() {
  const editing = currentManagementEdit("packages");
  root.innerHTML = `
    ${pageTitle("◇", "Paket Yönetimi")}
    <section class="panel"><h2>${editing ? "Paketi Düzenle" : "Yeni Paket Ekle"}</h2><form id="packageForm"><div class="form-grid"><div class="field"><label>Paket Adı *</label><input name="name" required placeholder="Örn: Standart Düğün Paketi" value="${attr(editing?.name || "")}"></div><div class="field"><label>Organizasyon Türü *</label><select name="type" required>${selectOptions(scopedItems("organizationTypes"), editing?.type || "", "Seçin")}</select></div><div class="field"><label>Alış Fiyatı (₺) *</label><input name="cost" type="number" min="0" required placeholder="Toplam maliyet" value="${attr(editing?.cost ?? "")}"></div><div class="field"><label>Satış Fiyatı (₺) *</label><input name="price" type="number" min="0" required placeholder="Müşteri fiyatı" value="${attr(editing?.price ?? "")}"></div><div class="field"><label>Alış Fiyatı (Kişi Başı ₺)</label><input name="personCost" type="number" min="0" placeholder="Kişi başı maliyet" value="${attr(editing?.personCost ?? "")}"></div><div class="field"><label>Satış Fiyatı (Kişi Başı ₺) *</label><input name="personPrice" type="number" min="0" placeholder="Kişi başı fiyat" value="${attr(editing?.personPrice ?? "")}"></div><div class="field full"><label>Açıklama</label><textarea name="description" placeholder="Paket açıklaması...">${attr(editing?.description || "")}</textarea></div><div class="field full"><label>Paket İçeriği (Her satıra bir öğe)</label><textarea name="content" placeholder="Açık büfe&#10;DJ & Müzik&#10;Fotoğraf çekimi...">${attr(editing?.content || "")}</textarea></div></div>${managementActions(editing ? "Paketi Güncelle" : "+ Paket Ekle", editing)}</form></section>
    <section class="panel"><div class="field" style="max-width:520px"><label>Organizasyon Türüne Göre Filtrele:</label><select id="packageFilter">${selectOptions(scopedItems("organizationTypes"), "", "Tümü")}</select></div></section>
    <section class="panel"><h2>Mevcut Paketler</h2><div class="list" id="packageList">${scopedItems("packages").map(packageRow).join("") || empty("Hiçbir paket eklenmedi")}</div></section>
  `;
}

function renderExtras() {
  const editing = currentManagementEdit("extras");
  root.innerHTML = `
    ${pageTitle("✦", "Özelleştirme Yönetimi")}
    <section class="panel"><h2>${editing ? "Özel Seçimi Düzenle" : "Yeni Özel Seçim Ekle"}</h2><form id="extraForm"><div class="form-grid"><div class="field"><label>Öğe Adı *</label><input name="name" required placeholder="Örn: Düğün Pastası" value="${attr(editing?.name || "")}"></div><div class="field"><label>Organizasyon Türü</label><select name="type">${selectOptions(scopedItems("organizationTypes"), editing?.type || "", "Tümü")}</select></div><div class="field"><label>Alış Fiyatı (₺) *</label><input name="cost" type="number" min="0" required placeholder="Takımınız" value="${attr(editing?.cost ?? "")}"></div><div class="field"><label>Satış Fiyatı (₺) *</label><input name="price" type="number" min="0" required placeholder="Müşteri fiyatı" value="${attr(editing?.price ?? "")}"></div></div>${managementActions(editing ? "Özeli Güncelle" : "+ Özel Ekle", editing)}</form></section>
    <section class="panel"><h2>Mevcut Özeller</h2><div class="list">${scopedItems("extras").map(extraRow).join("") || empty("Henüz özel seçim eklenmedi")}</div></section>
  `;
}

function renderMenus() {
  const editing = currentManagementEdit("menus");
  root.innerHTML = `
    ${pageTitle("☷", "Yemek Menüsü", "Menü kalemlerini kategori, maliyet ve satış fiyatıyla yönetin")}
    <section class="panel"><h2>${editing ? "Menü Öğesini Düzenle" : "Yeni Menü Öğesi Ekle"}</h2><form id="menuForm"><div class="form-grid"><div class="field"><label>Yemek Adı *</label><input name="name" required placeholder="Örn: Dana rosto" value="${attr(editing?.name || "")}"></div><div class="field"><label>Kategori *</label><select name="category" required>${selectOptions(scopedItems("menuCategories"), editing?.category || "", "Seçin")}</select></div><div class="field"><label>Alış Fiyatı (₺)</label><input name="cost" type="number" min="0" value="${attr(editing?.cost ?? "")}"></div><div class="field"><label>Satış Fiyatı (₺)</label><input name="price" type="number" min="0" value="${attr(editing?.price ?? "")}"></div></div>${managementActions(editing ? "Menüyü Güncelle" : "+ Menüye Ekle", editing)}</form></section>
    <section class="panel"><h2>Mevcut Menü</h2><div class="list">${scopedItems("menus").map(menuRow).join("") || empty("Menü öğesi eklenmedi")}</div></section>
  `;
}

function simpleForm(id, title, firstLabel, firstPlaceholder, secondLabel, secondPlaceholder, button, editing = null) {
  return `
    <section class="panel">
      <h2>${title}</h2>
      <form id="${id}">
        <div class="form-grid">
          <div class="field"><label>${firstLabel}</label><input name="name" required placeholder="${firstPlaceholder}" value="${attr(editing?.name || "")}"><div class="hint">Görünen ad Türkçe karakterlerle yazılabilir</div></div>
          <div class="field"><label>${secondLabel}</label><input name="value" placeholder="${secondPlaceholder}" value="${attr(editing?.value || "")}"><div class="hint">Boş bırakılırsa otomatik oluşturulur</div></div>
        </div>
        ${managementActions(button, editing, true)}
      </form>
    </section>
  `;
}

function categoryCard(item, collection) {
  return `<article class="mini-card"><h3>${item.name}</h3><span class="tag">${item.value}</span><div class="row-actions"><button class="small-icon" data-edit-category="${collection}:${item.id}">✎ Düzenle</button><button class="small-icon delete" data-delete-category="${collection}:${item.id}">⌫</button></div></article>`;
}

function hallRow(item) {
  return `<article class="item-row"><div><div class="item-title">${item.name}</div><div class="meta"><span>${item.capacity} kişi</span><span>${item.description || "Açıklama yok"}</span></div></div><div class="row-actions"><button class="small-icon" data-edit-hall="${item.id}">✎</button><button class="small-icon delete" data-delete-hall="${item.id}">⌫</button></div></article>`;
}

function packageRow(item) {
  return `<article class="item-row" data-type="${item.type}"><div><div class="item-title">${item.name} <span class="tag">${typeName(item.type)}</span></div><div class="meta"><span>Alış: ${money(item.cost)}</span><span>Satış: ${money(item.price)}</span><span class="profit">Kar: ${money(item.price - item.cost)}</span><span>${item.description || ""}</span></div></div><div class="row-actions"><button class="small-icon" data-edit-package="${item.id}">✎</button><button class="small-icon delete" data-delete-package="${item.id}">⌫</button></div></article>`;
}

function extraRow(item) {
  return `<article class="item-row"><div><div class="item-title">${item.name} <span class="tag">${typeName(item.type)}</span></div><div class="meta"><span>Alış: ${money(item.cost)}</span><span>Satış: ${money(item.price)}</span><span class="profit">Kar: ${money(item.price - item.cost)}</span></div></div><div class="row-actions"><button class="small-icon" data-edit-extra="${item.id}">✎</button><button class="small-icon delete" data-delete-extra="${item.id}">⌫</button></div></article>`;
}

function menuRow(item) {
  return `<article class="item-row"><div><div class="item-title">${item.name} <span class="tag">${categoryName(item.category)}</span></div><div class="meta"><span>Alış: ${money(item.cost)}</span><span>Satış: ${money(item.price)}</span><span class="profit">Kar: ${money(item.price - item.cost)}</span></div></div><div class="row-actions"><button class="small-icon" data-edit-menu="${item.id}">✎</button><button class="small-icon delete" data-delete-menu="${item.id}">⌫</button></div></article>`;
}

function statCard(label, value, icon, color = "blue", hint = "") {
  return `<article class="stat-card ${color}"><div><div class="stat-label">${label}</div><div class="stat-value">${value}</div>${hint ? `<div class="hint">${hint}</div>` : ""}</div><div class="stat-icon">${icon}</div></article>`;
}

function table(headers, rows) {
  return `<div class="table-wrap"><table><thead><tr>${headers.map(head => `<th>${head}</th>`).join("")}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}

function stockBadge(item) {
  if (item.quantity < item.minimum) return `<span class="badge danger">Düşük Stok</span>`;
  if (item.quantity === item.minimum) return `<span class="badge warn">Dikkat</span>`;
  return `<span class="badge ok">Normal</span>`;
}

function empty(text, detail = "") {
  return `<div class="empty"><div><div class="empty-icon">□</div><div>${text}</div>${detail ? `<small>${detail}</small>` : ""}</div></div>`;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function localDateValue(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function monthRange(year, monthIndex) {
  return {
    start: localDateValue(new Date(year, monthIndex, 1)),
    end: localDateValue(new Date(year, monthIndex + 1, 0))
  };
}

function applyReportRange(rangeName) {
  const now = new Date();
  if (rangeName === "thisMonth") {
    Object.assign(state, { reportStart: monthRange(now.getFullYear(), now.getMonth()).start, reportEnd: monthRange(now.getFullYear(), now.getMonth()).end });
  }
  if (rangeName === "lastMonth") {
    const last = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    Object.assign(state, { reportStart: monthRange(last.getFullYear(), last.getMonth()).start, reportEnd: monthRange(last.getFullYear(), last.getMonth()).end });
  }
  if (rangeName === "thisYear") {
    Object.assign(state, { reportStart: `${now.getFullYear()}-01-01`, reportEnd: `${now.getFullYear()}-12-31` });
  }
  if (rangeName === "lastYear") {
    Object.assign(state, { reportStart: `${now.getFullYear() - 1}-01-01`, reportEnd: `${now.getFullYear() - 1}-12-31` });
  }
  saveState();
  render();
}

function quoteTotals(form) {
  const guests = Number(form.quoteGuests?.value || 0);
  const packageItem = scopedItems("packages").find(item => item.id === form.quotePackage?.value);
  const base = Number(form.quoteOrganizationPrice?.value || 0);
  const packageTotal = packageItem ? Number(packageItem.price || 0) + guests * Number(packageItem.personPrice || 0) : 0;
  const manualPerson = Number(form.quoteManualPersonPrice?.value || 0) * guests;
  const extras = [...form.querySelectorAll('input[name="extras"]:checked')].reduce((sum, input) => sum + Number(input.dataset.price || 0), 0);
  const menus = [...form.querySelectorAll('input[name="menus"]:checked')].reduce((sum, input) => sum + Number(input.dataset.price || 0) * guests, 0);
  const subtotal = base + packageTotal + manualPerson + extras + menus;
  const discount = Number(form.quoteDiscount?.value || 0);
  const discountType = form.discountType?.value || "amount";
  const afterDiscount = Math.max(0, subtotal - (discountType === "percent" ? subtotal * discount / 100 : discount));
  const vatRate = Number(form.quoteVat?.value || 0);
  const vat = afterDiscount * vatRate / 100;
  return { subtotal, afterDiscount, vat, grandTotal: afterDiscount + vat };
}

function updateQuote() {
  const form = document.querySelector("#detailedReservationForm");
  if (!form) return;
  const totals = quoteTotals(form);
  document.querySelector("#quoteSubtotal").textContent = money(totals.subtotal);
  document.querySelector("#quoteAfterDiscount").textContent = money(totals.afterDiscount);
  document.querySelector("#quoteVatAmount").textContent = money(totals.vat);
  document.querySelector("#quoteGrandTotal").textContent = money(totals.grandTotal);
}

function bindForms() {
  document.querySelector("#tenantForm")?.addEventListener("submit", event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const isEditingTenant = Boolean(state.editingTenantId);
    const tenant = {
      id: state.editingTenantId || `tenant_${slugify(data.username || data.name) || makeId()}`,
      name: data.name,
      username: data.username,
      password: data.password,
      contactName: data.contactName,
      phone: data.phone,
      city: data.city,
      status: data.status || "active",
      membershipPackage: data.membershipPackage,
      annualFee: Number(data.annualFee || 0),
      membershipPaid: Number(data.membershipPaid || 0),
      membershipStartDate: data.membershipStartDate,
      membershipEndDate: data.membershipEndDate,
      renewalDate: data.renewalDate,
      lastLoginAt: data.lastLoginAt,
      lastActivityAt: data.lastActivityAt,
      adminNote: data.adminNote
    };
    state.tenants = state.editingTenantId
      ? state.tenants.map(item => item.id === state.editingTenantId ? { ...item, ...tenant } : item)
      : [tenant, ...state.tenants];
    state.activeTenantId = tenant.id;
    state.showTenantModal = false;
    state.editingTenantId = null;
    saveState();
    render();
    showToast(isEditingTenant ? "Mekan hesabı güncellendi" : "Mekan hesabı açıldı");
  });

  document.querySelector("#tenantSearch")?.addEventListener("input", event => {
    state.tenantQuery = event.target.value;
    const filteredTenants = state.tenants.filter(tenant => tenantMatches(tenant, state.tenantQuery));
    document.querySelector("#tenantCount").textContent = `Toplam ${filteredTenants.length} mekan gösteriliyor`;
    document.querySelector("#tenantList").innerHTML = filteredTenants.map(tenantCard).join("") || empty("Aramanıza uygun mekan yok", "Mekan adı, yetkili, kullanıcı adı veya şehirle tekrar deneyin.");
    saveState();
  });

  document.querySelector("#typeForm")?.addEventListener("submit", event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    saveManagedItem(
      "organizationTypes",
      { name: data.name, value: data.value || slugify(data.name) },
      "Organizasyon türü eklendi",
      "Organizasyon türü güncellendi"
    );
  });

  document.querySelector("#categoryForm")?.addEventListener("submit", event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    saveManagedItem(
      "menuCategories",
      { name: data.name, value: data.value || slugify(data.name) },
      "Menü kategorisi eklendi",
      "Menü kategorisi güncellendi"
    );
  });

  document.querySelector("#hallForm")?.addEventListener("submit", event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    saveManagedItem(
      "halls",
      { name: data.name, capacity: Number(data.capacity), description: data.description },
      "Salon eklendi",
      "Salon güncellendi"
    );
  });

  document.querySelector("#packageForm")?.addEventListener("submit", event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    saveManagedItem(
      "packages",
      {
        name: data.name, type: data.type, cost: Number(data.cost), price: Number(data.price),
        personCost: Number(data.personCost || 0), personPrice: Number(data.personPrice || 0),
        description: data.description, content: data.content
      },
      "Paket eklendi",
      "Paket güncellendi"
    );
  });

  document.querySelector("#extraForm")?.addEventListener("submit", event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    saveManagedItem(
      "extras",
      { name: data.name, type: data.type || "Tümü", cost: Number(data.cost), price: Number(data.price) },
      "Özel seçim eklendi",
      "Özel seçim güncellendi"
    );
  });

  document.querySelector("#menuForm")?.addEventListener("submit", event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    saveManagedItem(
      "menus",
      { name: data.name, category: data.category, cost: Number(data.cost || 0), price: Number(data.price || 0) },
      "Menü öğesi eklendi",
      "Menü öğesi güncellendi"
    );
  });

  document.querySelector("#smsSettingsForm")?.addEventListener("submit", event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const tenant = currentTenant();
    state.smsSettings = {
      ...state.smsSettings,
      senderTitle: data.senderTitle || "AYSAH",
      providerTitle: data.senderTitle || "AYSAH",
      providerUser: data.providerUser,
      providerPassword: data.providerPassword,
      providerApiUrl: data.providerApiUrl,
      credit: Number(data.credit || 0)
    };
    if (tenant) {
      state.tenantSmsQuotas[tenant.id] = {
        ...(state.tenantSmsQuotas[tenant.id] || {}),
        quota: Number(data.tenantQuota || 0)
      };
    }
    saveState();
    render();
    showToast("SMS ayarları kaydedildi");
  });

  document.querySelector("#smsTemplateForm")?.addEventListener("submit", event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const template = {
      title: data.title,
      tag: data.tag || "Genel",
      mode: data.mode || "Otomatik",
      trigger: data.trigger || "before_event",
      offsetDays: Number(data.offsetDays || 0),
      active: data.active !== "false",
      body: data.body
    };
    if (state.editingSmsTemplateId) {
      state.smsTemplates = state.smsTemplates.map(item => item.id === state.editingSmsTemplateId ? { ...item, ...template } : item);
      state.editingSmsTemplateId = null;
      saveState();
      render();
      showToast("SMS şablonu güncellendi");
      return;
    }
    state.smsTemplates = [{ id: makeId(), tenantId: currentTenant()?.id, ...template }, ...state.smsTemplates];
    saveState();
    render();
    showToast("SMS şablonu eklendi");
  });

  document.querySelector("#staffForm")?.addEventListener("submit", event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const staffMember = {
      name: data.name,
      role: data.role,
      phone: data.phone,
      email: data.email,
      events: Number(data.events || 0),
      active: data.active !== "false"
    };
    if (state.editingStaffId) {
      state.staff = state.staff.map(item => item.id === state.editingStaffId ? { ...item, ...staffMember } : item);
      state.editingStaffId = null;
      state.showStaffForm = false;
      saveState();
      render();
      showToast("Personel güncellendi");
      return;
    }
    state.staff = [{ id: makeId(), tenantId: currentTenant()?.id, ...staffMember }, ...state.staff];
    state.showStaffForm = false;
    saveState();
    render();
    showToast("Personel eklendi");
  });

  document.querySelector("#staffAssignmentForm")?.addEventListener("submit", event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const reservation = state.reservations.find(item => item.id === data.reservationId);
    const dailyWage = Number(data.dailyWage || 0);
    const paid = Number(data.paid || 0);
    const assignment = {
      staffId: data.staffId,
      reservationId: data.reservationId,
      date: data.date || reservation?.date || today(),
      role: data.role,
      dailyWage,
      paid,
      status: paid >= dailyWage ? "paid" : paid > 0 ? "partial" : "unpaid",
      note: data.note
    };
    if (state.editingStaffAssignmentId) {
      state.staffAssignments = state.staffAssignments.map(item => item.id === state.editingStaffAssignmentId ? { ...item, ...assignment } : item);
      state.editingStaffAssignmentId = null;
      state.showStaffAssignmentForm = false;
      saveState();
      render();
      showToast("Görevlendirme güncellendi");
      return;
    }
    state.staffAssignments = [{ id: makeId(), tenantId: currentTenant()?.id, ...assignment }, ...state.staffAssignments];
    state.showStaffAssignmentForm = false;
    saveState();
    render();
    showToast("Personel görevlendirildi");
  });

  document.querySelector("#detailedReservationForm")?.addEventListener("input", updateQuote);
  document.querySelector("#detailedReservationForm")?.addEventListener("change", updateQuote);
  document.querySelector("#detailedReservationForm")?.addEventListener("submit", event => {
    event.preventDefault();
    const form = event.target;
    const data = Object.fromEntries(new FormData(form));
    const special = (state.specialDays || []).find(item => item.date === data.date);
    if (special) {
      showToast(`${special.title}: bu özel güne rezervasyon açılmamalı.`);
      return;
    }
    const totals = quoteTotals(form);
    const hall = scopedItems("halls").find(item => item.id === data.hallId);
    const packageItem = scopedItems("packages").find(item => item.id === data.packageId);
    const couple = `${data.brideName || "Gelin"} ve ${data.groomName || "Damat"}`;
    const reservation = {
      tenantId: editing?.tenantId || currentTenant()?.id,
      brideName: data.brideName,
      groomName: data.groomName,
      couple,
      phone: data.bridePhone || data.groomPhone,
      date: data.date,
      contractDate: data.contractDate,
      type: data.type,
      hallId: data.hallId,
      hallName: hall?.name || "Salon seçilmedi",
      packageId: data.packageId,
      packageName: packageItem?.name || "Paket seçilmedi",
      guests: Number(data.guests || 0),
      total: Math.round(totals.grandTotal),
      cost: Math.round(totals.grandTotal * 0.62),
      paid: Number(data.deposit || 0),
      status: data.status,
      createdAt: state.editingReservationId
        ? state.reservations.find(item => item.id === state.editingReservationId)?.createdAt || new Date().toLocaleString("tr-TR")
        : new Date().toLocaleString("tr-TR")
    };
    if (state.editingReservationId) {
      state.reservations = state.reservations.map(item => item.id === state.editingReservationId ? { ...item, ...reservation } : item);
      state.editingReservationId = null;
      state.newReservationDate = null;
      saveState();
      showToast("Rezervasyon güncellendi");
    } else {
      addItem("reservations", reservation);
      state.newReservationDate = null;
      saveState();
      showToast("Rezervasyon kaydedildi");
    }
    setView("reservations");
  });

  document.querySelector("#globalSearch")?.addEventListener("input", event => {
    document.querySelector("#dashboardResults").innerHTML = dashboardSearchMarkup(event.target.value);
  });

  document.querySelector("#reservationSearch")?.addEventListener("input", event => {
    state.reservationQuery = event.target.value;
    const filtered = visibleReservations().filter(item => reservationMatches(item, state.reservationQuery));
    document.querySelector("#reservationCount").textContent = `Toplam ${filtered.length} rezervasyon`;
    document.querySelector("#reservationList").innerHTML = reservationListMarkup(state.reservationQuery);
  });

  document.querySelector("#reportStart")?.addEventListener("change", event => {
    state.reportStart = event.target.value;
    saveState();
    render();
  });

  document.querySelector("#reportEnd")?.addEventListener("change", event => {
    state.reportEnd = event.target.value;
    saveState();
    render();
  });

  document.querySelector("#reportCompareMode")?.addEventListener("change", event => {
    state.reportCompareMode = event.target.value;
    saveState();
    render();
  });

  document.querySelector("#reportFilterValue")?.addEventListener("change", event => {
    state.reportFilterValue = event.target.value;
    state.reportFilterView = state.activeView;
    saveState();
    render();
  });

  document.querySelectorAll("[data-report-range]").forEach(button => {
    button.addEventListener("click", () => applyReportRange(button.dataset.reportRange));
  });

  document.querySelector("#packageFilter")?.addEventListener("change", event => {
    const value = event.target.value;
    document.querySelectorAll("#packageList [data-type]").forEach(row => {
      row.style.display = !value || row.dataset.type === value ? "" : "none";
    });
  });

  updateQuote();
}

function addItem(collection, item) {
  const tenantFields = tenantScopedCollections.includes(collection) ? { tenantId: currentTenant()?.id } : {};
  state[collection] = [{ id: makeId(), ...tenantFields, ...item }, ...state[collection]];
  saveState();
  render();
}

function deleteItem(collection, id) {
  state[collection] = state[collection].filter(item => item.id !== id);
  if (state.editingManagement?.collection === collection && state.editingManagement?.id === id) {
    state.editingManagement = null;
  }
  saveState();
  render();
}

function render() {
  renderAccountPill();
  syncNavigation(state.activeView);
  const views = {
    dashboard: renderDashboard,
    newReservation: renderNewReservation,
    reservations: renderReservations,
    reports: renderReports,
    reportTypes: renderReports,
    reportHalls: renderReports,
    reportPackages: renderReports,
    reportExtras: renderReports,
    reportMenus: renderReports,
    types: renderTypes,
    halls: renderHalls,
    packages: renderPackages,
    extras: renderExtras,
    menuCategories: renderMenuCategories,
    menus: renderMenus,
    tenants: renderTenants,
    messages: renderSms,
    staff: renderStaff,
    suppliers: renderSuppliers,
    supplierAccount: renderSupplierAccount,
    stock: renderStock
  };
  (views[state.activeView] || views.dashboard)();
  bindForms();
}

document.addEventListener("click", event => {
  const link = event.target.closest("[data-view]");
  if (link) {
    event.preventDefault();
    setView(link.dataset.view);
    return;
  }

  const action = event.target.closest("[data-action]")?.dataset.action;
  const actionEl = event.target.closest("[data-action]");
  if (action === "exportReportCsv") {
    exportReportCsv();
    return;
  }
  if (action === "printReport") {
    window.print();
    return;
  }
  if (action === "prevYear") state.year -= 1;
  if (action === "nextYear") state.year += 1;
  if (action === "thisYear") state.year = new Date().getFullYear();
  if (["prevYear", "nextYear", "thisYear"].includes(action)) {
    saveState();
    render();
    return;
  }
  if (action === "newReservation") {
    state.editingReservationId = null;
    state.newReservationDate = null;
    saveState();
    setView("newReservation");
    return;
  }
  if (action === "editReservation") {
    state.editingReservationId = actionEl?.dataset.id || null;
    state.newReservationDate = null;
    saveState();
    setView("newReservation");
    return;
  }
  if (action === "cancelManagementEdit") {
    clearManagementEdit();
    showToast("Düzenleme iptal edildi");
    return;
  }
  if (action === "editSmsTemplate") {
    state.editingSmsTemplateId = actionEl?.dataset.id || null;
    saveState();
    render();
    document.querySelector("#smsTemplateForm input[name='title']")?.focus();
    return;
  }
  if (action === "cancelSmsTemplateEdit") {
    state.editingSmsTemplateId = null;
    saveState();
    render();
    showToast("SMS şablon düzenleme iptal edildi");
    return;
  }
  if (action === "deleteSmsTemplate") {
    const id = actionEl?.dataset.id;
    const template = state.smsTemplates.find(item => item.id === id);
    if (!template) return;
    const ok = confirm(`${template.title} şablonu silinsin mi?`);
    if (!ok) return;
    state.smsTemplates = state.smsTemplates.filter(item => item.id !== id);
    if (state.editingSmsTemplateId === id) state.editingSmsTemplateId = null;
    saveState();
    render();
    showToast("SMS şablonu silindi");
    return;
  }
  if (action === "newStaff") {
    state.editingStaffId = null;
    state.showStaffForm = true;
    saveState();
    render();
    document.querySelector("#staffForm input[name='name']")?.focus();
    return;
  }
  if (action === "editStaff") {
    state.editingStaffId = actionEl?.dataset.id || null;
    state.showStaffForm = true;
    saveState();
    render();
    document.querySelector("#staffForm input[name='name']")?.focus();
    return;
  }
  if (action === "cancelStaffEdit") {
    state.editingStaffId = null;
    state.showStaffForm = false;
    saveState();
    render();
    showToast("Personel düzenleme iptal edildi");
    return;
  }
  if (action === "deleteStaff") {
    const id = actionEl?.dataset.id;
    const staffMember = state.staff.find(item => item.id === id);
    if (!staffMember) return;
    state.pendingStaffDeleteId = id;
    saveState();
    render();
    showToast("Silmek için tekrar onayla");
    return;
  }
  if (action === "cancelStaffDelete") {
    state.pendingStaffDeleteId = null;
    saveState();
    render();
    return;
  }
  if (action === "confirmDeleteStaff") {
    const id = actionEl?.dataset.id;
    state.staff = state.staff.filter(item => item.id !== id);
    if (state.editingStaffId === id) state.editingStaffId = null;
    state.pendingStaffDeleteId = null;
    saveState();
    render();
    showToast("Personel silindi");
    return;
  }
  if (action === "newStaffAssignment") {
    state.editingStaffAssignmentId = null;
    state.showStaffAssignmentForm = true;
    saveState();
    render();
    document.querySelector("#staffAssignmentForm select[name='staffId']")?.focus();
    return;
  }
  if (action === "editStaffAssignment") {
    state.editingStaffAssignmentId = actionEl?.dataset.id || null;
    state.showStaffAssignmentForm = true;
    saveState();
    render();
    document.querySelector("#staffAssignmentForm select[name='staffId']")?.focus();
    return;
  }
  if (action === "cancelStaffAssignmentEdit") {
    state.editingStaffAssignmentId = null;
    state.showStaffAssignmentForm = false;
    saveState();
    render();
    return;
  }
  if (action === "deleteStaffAssignment") {
    const id = actionEl?.dataset.id;
    state.staffAssignments = state.staffAssignments.filter(item => item.id !== id);
    if (state.editingStaffAssignmentId === id) state.editingStaffAssignmentId = null;
    saveState();
    render();
    showToast("Görevlendirme silindi");
    return;
  }
  if (action === "selectTenant") {
    const tenantId = actionEl?.dataset.id;
    if (state.tenants.some(tenant => tenant.id === tenantId)) {
      state.activeTenantId = tenantId;
      state.reservationQuery = "";
      saveState();
      render();
      showToast("Mekan paneli değiştirildi");
    }
    return;
  }
  if (action === "editTenant") {
    const tenantId = actionEl?.dataset.id;
    if (state.tenants.some(tenant => tenant.id === tenantId)) {
      state.editingTenantId = tenantId;
      state.showTenantModal = true;
      saveState();
      render();
    }
    return;
  }
  if (action === "deleteTenant") {
    const tenantId = actionEl?.dataset.id;
    const tenant = state.tenants.find(item => item.id === tenantId);
    if (!tenant) return;
    const ok = confirm(`${tenant.name} silinsin mi? Bu mekana ait rezervasyon kayıtları da kaldırılacak.`);
    if (!ok) return;
    state.tenants = state.tenants.filter(item => item.id !== tenantId);
    state.reservations = state.reservations.filter(item => item.tenantId !== tenantId);
    tenantScopedCollections
      .filter(collection => !["reservations"].includes(collection))
      .forEach(collection => {
        if (Array.isArray(state[collection])) {
          state[collection] = state[collection].filter(item => item.tenantId !== tenantId);
        }
      });
    if (state.activeTenantId === tenantId) state.activeTenantId = state.tenants[0]?.id || "";
    state.showTenantModal = false;
    state.editingTenantId = null;
    saveState();
    render();
    showToast("Mekan silindi");
    return;
  }
  if (action === "clearTenantDemoData") {
    const tenant = currentTenant();
    if (!tenant) return;
    const beforeCount = state.reservations.length;
    state.reservations = state.reservations.filter(item => !(item.tenantId === tenant.id && item.demoReservation));
    const removedCount = beforeCount - state.reservations.length;
    saveState();
    render();
    showToast(removedCount ? `${tenant.name} demo rezervasyonları temizlendi` : "Temizlenecek demo rezervasyon yok");
    return;
  }
  if (action === "focusTenantForm") {
    state.editingTenantId = null;
    state.showTenantModal = true;
    saveState();
    render();
    document.querySelector("#tenantForm input[name='name']")?.focus();
    return;
  }
  if (action === "closeTenantModal") {
    if (actionEl?.classList.contains("modal-backdrop") && event.target.closest(".modal-panel")) return;
    state.showTenantModal = false;
    state.editingTenantId = null;
    saveState();
    render();
    return;
  }

  const dayButton = event.target.closest("[data-date]");
  if (dayButton) {
    const date = dayButton.dataset.date;
    const special = (state.specialDays || []).find(item => item.date === date);
    if (special) {
      showToast(`${special.title}: bu özel güne rezervasyon açılmamalı.`);
      return;
    }
    const existing = visibleReservations().filter(item => item.date === date);
    state.editingReservationId = null;
    state.newReservationDate = date;
    saveState();
    setView("newReservation");
    if (existing.length) {
      showToast(`Bu tarihte ${existing.length} rezervasyon var. Müsaitlik kontrol edin.`);
    }
    return;
  }

  const deletion = [
    ["delete-hall", "halls"],
    ["delete-package", "packages"],
    ["delete-extra", "extras"],
    ["delete-menu", "menus"]
  ].find(([key]) => event.target.closest(`[data-${key}]`));

  if (deletion) {
    const [key, collection] = deletion;
    const id = event.target.closest(`[data-${key}]`).dataset[key.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())];
    deleteItem(collection, id);
    showToast("Kayıt silindi");
    return;
  }

  const categoryDelete = event.target.closest("[data-delete-category]");
  if (categoryDelete) {
    const [collection, id] = categoryDelete.dataset.deleteCategory.split(":");
    deleteItem(collection, id);
    showToast("Kayıt silindi");
    return;
  }

  const hallEdit = event.target.closest("[data-edit-hall]");
  if (hallEdit) {
    setManagementEdit("halls", hallEdit.dataset.editHall);
    return;
  }

  const packageEdit = event.target.closest("[data-edit-package]");
  if (packageEdit) {
    setManagementEdit("packages", packageEdit.dataset.editPackage);
    return;
  }

  const extraEdit = event.target.closest("[data-edit-extra]");
  if (extraEdit) {
    setManagementEdit("extras", extraEdit.dataset.editExtra);
    return;
  }

  const menuEdit = event.target.closest("[data-edit-menu]");
  if (menuEdit) {
    setManagementEdit("menus", menuEdit.dataset.editMenu);
    return;
  }

  const categoryEdit = event.target.closest("[data-edit-category]");
  if (categoryEdit) {
    const [collection, id] = categoryEdit.dataset.editCategory.split(":");
    setManagementEdit(collection, id);
  }
});

document.querySelector(".menu-button").addEventListener("click", () => sidebar.classList.add("open"));
document.querySelector(".mobile-close").addEventListener("click", () => sidebar.classList.remove("open"));

window.addEventListener("hashchange", () => {
  const view = location.hash.replace("#", "");
  if (view) setView(view);
});

if (location.hash) {
  state.activeView = location.hash.replace("#", "");
}

render();
