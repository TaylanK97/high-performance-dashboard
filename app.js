"use strict";

// ==========================================================================
// 1. STATİK BİLGİ VE EGZERSİZ VERİLERİ
// ==========================================================================
const DAILY_ROUTINE = [
  { 
    id: "r_1", 
    time: "06:00 - 06:30", 
    title: "Sirkadiyen Ritim Uyanış", 
    desc: "10 dk güneş ışığı, hidrasyon, esneme.", 
    type: "sleep", 
    xp: 10,
    details: [
      "Uyanır uyanmaz ilk 5 dakika içinde yataktan kalk ve hafifçe gerinerek vücudunu ısıt.",
      "Camın arkasından değil (cam sirkadiyen saati kuran yararlı dalga boylarını %50'den fazla filtreler), doğrudan açık havaya çık (balkon, bahçe veya pencereyi tam aç).",
      "Güneş ışınlarının doğrudan gözüne girmesini sağla (güneşe direkt bakıp retinanı yakma, sadece gökyüzüne bak).",
      "Açık ve güneşli havalarda 10 dakika, bulutlu havalarda 20 dakika, yağmurlu/karanlık havalarda ise 30 dakika dışarıda kal.",
      "Hücrelerin gece boyu kaybettiği suyu geri kazanmak için 500 ml oda sıcaklığında mineralli su (içine bir çimdik kaya tuzu atılmış) iç."
    ],
    science: "Gözlerimizin arkasında bulunan melanopsin hücreleri, sabahın yüksek yoğunluklu mavi/sarı ışık dalgalarını algılar ve doğrudan beyndeki ana saat olan 'Suprakiazmatik Çekirdek' (SCN) bölgesini uyarır. Bu uyarı ile vücutta stres ve uyanıklık hormonu olan 'Kortizol' pik yapar. Kortizol piki, uykunu açar ve tam 16 saat sonrası için beynin 'Melatonin' (uyku hormonu) salgılama sayacını kurar. Yani bu sabah rutini, bu gece ne kadar derin ve kaliteli uyuyacağını belirleyen biyolojik anahtardır!"
  },
  { 
    id: "r_2", 
    time: "06:30 - 08:00", 
    title: "Deep Work: Pasif Gelir Geliştirme", 
    desc: "Mikro SaaS / yan proje odaklı 90 dk çalışma.", 
    type: "deepwork", 
    xp: 30,
    details: [
      "Telefonunu tamamen kapat veya uçak moduna alıp başka bir odaya yerleştir. Göz önünde olması bile dikkatini böler.",
      "Çalışmaya başlamadan önce, bu 90 dakikada tam olarak hangi modülü kodlayacağını veya hangi konuyu yazacağını kağıda net olarak yaz.",
      "Bilgisayarında sadece çalışacağın sekmeleri açık tut; tüm sosyal medya, e-posta ve iletişim sekmelerini kapat.",
      "90 dakika boyunca masandan kalkma ve su dışında hiçbir şeyle ilgilenme (Pomodoro gibi kısa kesme, 90 dakika zihnin derinleşmesi için ideal süredir)."
    ],
    science: "Cal Newport'un 'Deep Work' (Pürüzsüz Odaklanma) teorisine göre, dikkatini her dağıttığında (örneğin sadece 2 saniyeliğine telefona gelen bir bildirime bakmak) beyninde 'Dikkat Kalıntısı' (Attention Residue) oluşur. Beyninin eski derin odağına geri dönmesi tam 20-25 dakika sürer. Kesintisiz 90 dakikalık 'Ultradyan Döngü' boyunca çalışarak, beynin en üretken olduğu ve zor problemleri çözebildiği 'Akış' (Flow) fazına geçersin. Bu fazda ürettiğin işin kalitesi, bölünerek yapılan 5 saatlik çalışmadan çok daha yüksektir."
  },
  { 
    id: "r_3", 
    time: "08:00 - 08:30", 
    title: "Duruş Düzeltme & Omurga Sağlığı", 
    desc: "Biyomekanik egzersiz rutini (30 dk).", 
    type: "posture", 
    xp: 20,
    details: [
      "Boyun hizalaması için 10 set Chin Tuck egzersizi yap (çeneyi geriye çekip boynu dikleştirerek).",
      "Kamburluğu önlemek ve omuzları açmak için duvara yaslanıp 12 tekrar Wall Angel yap.",
      "Masa başında kısalan kalça kaslarını (psoas) germek için diz çökerek Hip Flexor Stretch yap (her bacak için 30 sn).",
      "Her hareketi acele etmeden, kaslarındaki gerilmeyi hissederek ve derin nefes alarak tamamla."
    ],
    science: "Saatlerce bilgisayar başında oturmak, göğüs kaslarını (pectoralis) ve kalça bükücü kasları (psoas) kısaltırken; üst sırt kaslarını (rhomboids) ve boyun stabilizatörlerini (deep cervical flexors) zayıflatır. Bu durum 'İleri Kafa Duruşu' (Forward Head Posture) ve kamburluğa (Kyphosis) neden olur. Bu 30 dakikalık kinesiyolojik egzersizler kısaltılmış kasları gerip zayıflamış kasları uyararak omurgayı doğal anatomik hizasına çeker, akciğer kapasiteni %30 artırır ve beyne giden oksijen miktarını maksimize eder."
  },
  { 
    id: "r_4", 
    time: "08:30 - 09:00", 
    title: "Bilişsel Beslenme & Planlama", 
    desc: "Düşük karbonhidratlı kahvaltı, hedeflerin gözden geçirilmesi.", 
    type: "other", 
    xp: 10,
    details: [
      "Sabah kahvaltısında insülin patlaması yaratacak şekerli gıdalar, ekmek, poğaça veya meyve sularını tamamen hayatından çıkar.",
      "Yumurta, avokado, zeytin, ceviz gibi sağlıklı yağlar ve kaliteli proteinler içeren düşük karbonhidratlı (Ketojenik/Low-Carb) bir menü seç.",
      "Yemek yerken gün içinde tamamlaman gereken en kritik 3 ana projeyi (Kanban) gözden geçir ve öncelik sıralamasını netleştir.",
      "Yemekten hemen sonra günlük hedeflerini gözden geçirip zihnini güne hazırla."
    ],
    science: "Sabahları yüksek karbonhidrat ve şeker tüketmek, kan şekerini hızla yükseltir ve buna bağlı olarak pankreastan yüksek miktarda insülin salgılanır. Kısa süre sonra kan şekeri aniden düşer (hipoglisemi) ve bu durum zihinsel bulanıklığa, uyku haline ve 'beyin sisi'ne yol açar. Sağlıklı yağlar ve proteinler ise keton cisimcikleri ve yavaş salınımlı enerji üreterek beynin 'Prefrontal Korteks' (karar verme ve odaklanma merkezi) bölgesine saatlerce stabil, temiz ve kesintisiz enerji sağlar."
  },
  { 
    id: "r_5", 
    time: "09:00 - 10:30", 
    title: "Deep Work: AI & Prompt Mühendisliği", 
    desc: "Yapay zeka araçları ve entegrasyon pratikleri (90 dk).", 
    type: "learning", 
    xp: 30,
    details: [
      "AI modellerini (Gemini, Claude vb.) kullanarak pratik yapacağın ana konuyu belirle.",
      "Gelişmiş prompt tekniklerini (Chain-of-Thought, System Instructions, Few-Shot) gerçek projelerde dene.",
      "Yapay zeka araçlarının API entegrasyonlarını yerelde kodlayarak pasif gelir projelerine dahil et.",
      "AI'ın ürettiği kodları ve mantığı detaylıca analiz ederek kendi yazılım yeteneklerini geliştir."
    ],
    science: "Prompt Mühendisliği, sadece yapay zekayla konuşmak değil, karmaşık mantık modellerini ve algoritmik düşünceyi dil yoluyla kodlama sanatıdır. AI araçlarını bir zihinsel kaldıraç olarak kullanmak, bilişsel hızını 10 katına çıkarır. Bu seans, geleceğin teknoloji dünyasında iş yapma yeteneğini ve pasif gelir projelerinin geliştirilme hızını üst seviyeye ulaştırır."
  },
  { 
    id: "r_6", 
    time: "10:30 - 12:00", 
    title: "Deep Work: Aktif Dil Öğrenimi", 
    desc: "İngilizce kelime ve kalıp çalışmaları (90 dk).", 
    type: "learning", 
    xp: 30,
    details: [
      "Yeni kelimeleri ve kalıpları SM-2 spaced repetition (aralıklı tekrar) destene ekle.",
      "Destendeki günü gelmiş (due) kartları Hızlı Test Modu kullanarak tekrar et.",
      "Yeni öğrendiğin kelimeleri sadece ezberleme; onları sesli telaffuz ederek 'Feynman Tekniği' ile kendi cümlelerin içinde kullan.",
      "İngilizce podcast veya makaleleri dinleyip okuyarak kelimelerin doğal kullanımlarına maruz kal."
    ],
    science: "Spaced Repetition (Aralıklı Tekrar) metodu, beynin doğal 'Unutma Eğrisi' (Forgetting Curve) grafiğini kırmak için tasarlanmış en etkili bilimsel yöntemdir. Bir bilgiyi tam unutmak üzereyken (sinapslar zayıflarken) tekrar calls, beyne 'bu bilgi hayati önem taşıyor' sinyali gönderir. Bu sinyal nöronlar arasındaki miyelin kılıfını kalınlaştırarak bilginin geçici bellekten (hipokampus) kalıcı uzun vadeli belleğe (neokorteks) transfer edilmesini sağlar."
  },
  { 
    id: "r_7", 
    time: "12:00 - 13:00", 
    title: "Fiziksel Antrenman (HIIT / Güç)", 
    desc: "Duruş düzeltici esnemelerle güç idmanı.", 
    type: "posture", 
    xp: 20,
    details: [
      "5 dakika hafif tempo hareketlerle (jumping jack, diz çekme vb.) vücut ısısını yükselt ve eklemlerini yağla.",
      "Bileşik (compound) vücut ağırlığı hareketleri (Şınav, Squat, Pull-up veya Plank) ile kas gruplarını uyar.",
      "Nabzını maksimum seviyeye çıkarıp yağ yakımını ve kondisyonu artırmak için 3-4 set kısa süreli HIIT (yüksek yoğunluklu interval) ekle.",
      "Antrenman sonunda kas boyunu uzatmak ve laktik asidi dağıtmak için 5 dakika statik esneme yap."
    ],
    science: "Günün bu saatinde (12:00 - 13:00) vücut sıcaklığın, akciğer kapasiten ve kas koordinasyonun biyolojik olarak zirve noktasındadır. Bu saatte yapılan yoğun fiziksel aktivite, büyüme hormonu (GH) ve testosteron salgılamasını tetikler. Ayrıca beynde 'Endorfin' ve 'BDNF' (Beyin Türevli Nörotrofik Faktör) salgılatarak yeni nöronların oluşumunu destekler ve zihinsel yorgunluğu sıfırlayarak günün geri kalanı için taze enerji pompalar."
  },
  { 
    id: "r_8", 
    time: "13:00 - 14:00", 
    title: "Beslenme & Zihinsel Dinlenme", 
    desc: "Yemek ve hafif yürüyüş.", 
    type: "other", 
    xp: 10,
    details: [
      "Öğle yemeğini ekranlardan uzak (telefon, televizyon kapalı), sadece yemeğin tadına, kokusuna odaklanarak ve yavaşça çiğneyerek ye.",
      "Yemek bittikten hemen sonra dışarı çıkıp 10-15 dakika hafif/orta tempoda yürüyüş yap.",
      "Yürüyüş esnasında zihnini serbest bırak, herhangi bir işle ilgili düşünmemeye çalış. Enstrümantal veya hafif müzikler dinleyebilirsin."
    ],
    science: "Yemekten sonra yapılan hafif yürüyüş, 'Glikoz Klirensi' adı verilen süreci başlatır; yani kan şekerinin hızla kaslar tarafından emilmesini sağlayarak insülin dalgalanmalarını ve yemek sonrası gelen o ağır uyku çömesini (postprandial somnolence) önler. Ayrıca ekransız dinlenme, beynin 'Varsayılan Mod Ağı'nı (Default Mode Network) aktif ederek sabah öğrenilen bilgilerin arka planda organize edilmesini ve yaratıcı fikirlerin filizlenmesini sağlar."
  },
  { 
    id: "r_9", 
    time: "14:00 - 17:30", 
    title: "Hafif İşler & İletişim", 
    desc: "E-postalar, sosyal hayat ve dopamin detoksu.", 
    type: "other", 
    xp: 15,
    details: [
      "E-postaları cevapla, mesajları kontrol et ve sosyal medya etkileşimlerini bu saat aralığında tamamla.",
      "Günün geri kalanındaki işleri organize et, fatura ödemeleri veya basit idari işleri aradan çıkar.",
      "Ucuz dopamin tuzaklarından (sonsuz kaydırma) uzak durmak için sosyal medya uygulamalarına süre sınırı koy.",
      "Zihinsel olarak yorucu olmayan ama yapılması gereken mekanik işleri bu saate yığ."
    ],
    science: "Öğleden sonra (14:00 - 17:30) biyolojik olarak zihinsel enerjinin ve odaklanma kapasitesinin en düşük olduğu dilimdir. Bu saatlerde yüksek odak gerektiren ağır işler yapmaya çalışmak zihinsel tükenmişliğe yol açar. Bu yüzden derin odaklanma gerektirmeyen hafif işleri, e-postaları ve iletişim işlerini bu saate planlamak bilişsel enerjiyi en yüksek verimle kullanmanı sağlar."
  },
  { 
    id: "r_10", 
    time: "17:30 - 18:30", 
    title: "Gün Batımı Işığı & Sirkadiyen Ritim", 
    desc: "Melatonin sentezi için gözlerin akşam ışığı alması.", 
    type: "sleep", 
    xp: 10,
    details: [
      "Akşamüstü güneş ufuk çizgisine yakınken (gün batımı saatinde) dışarı çık ve 10-15 dakika gökyüzüne bak.",
      "Güneş gözlüğü veya normal gözlük takmamaya çalış (kontakt lensler veya numaralı gözlükler ışık spektrumunu bozmazsa sorun olmaz).",
      "Gözlerine akşamın düşük açılı, kırmızı ve turuncu dalga boylarındaki ışınlarının girmesine izin ver."
    ],
    science: "Gün batımı ışığı, mavi ışık oranı düşük, kırmızı ve turuncu dalga boyları yüksek olan özel bir spektruma sahiptir. Gözdeki retina ganglion hücreleri bu spektrumu algıladığında beyndeki sirkadiyen merkeze (SCN) 'gün bitiyor' mesajı gönderir. Bu sinyal, beynin çam kozalağı bezinde (pineal gland) melatonin sentezini başlatır ve göz hücrelerini geceleri maruz kalacağın yapay mavi ışığın (ekranlar, ampuller) vereceği zararlara karşı biyolojik olarak koruma altına alır."
  },
  { 
    id: "r_11", 
    time: "19:00 - 21:00", 
    title: "Zihinsel Kapanış & Kitap Okuma", 
    desc: "Ekransız dinlenme.", 
    type: "other", 
    xp: 10,
    details: [
      "Saat 19:00 itibarıyla işle ilgili tüm bilgisayarları kapat ve işle alakalı düşünceleri zihninden uzaklaştır.",
      "Telefonunu gözünün önünden kaldır, bildirim seslerini kapat.",
      "Loş ve sarı bir ışık eşliğinde (tavan ışığı yerine masa lambası) kitap oku, meditasyon yap veya ailenle sohbet et.",
      "Ekransız geçirilen bu sürede zihninin yavaşlamasına izin ver."
    ],
    science: "Geceleri ekrana bakmak, beyne hala öğle vakti olduğunu düşündürür. Ekransız kalarak beynin dalgalarını yavaşlatır, Alfa ve Teta dalgalarına geçişi kolaylaştırırsın. Bu da uykuya geçiş süresini kısaltır ve derin uykuyu uzatır."
  },
  { 
    id: "r_12", 
    time: "21:00 - 22:00", 
    title: "Matthew Walker Uyku Hijyeni", 
    desc: "Mavi ışık yasağı, tavan ışıklarını kapatma.", 
    type: "sleep", 
    xp: 15,
    details: [
      "Odadaki tüm beyaz ve parlak tavan ışıklarını kapat. Sadece göz hizasının altında kalan loş zemin aydınlatmalarına geç.",
      "Yatak odasını uykudan önce iyice havalandır ve oda sıcaklığının 18-19 derece arasında olmasını sağla.",
      "Uyumadan önceki son 1 saat içinde kesinlikle telefon, tablet veya televizyon ekranına bakma.",
      "Yatağa sadece uykun geldiğinde gir, yatakta telefonla vakit geçirme."
    ],
    science: "Matthew Walker'ın bilimsel araştırmalarına göre, kaliteli uykunun iki temel tetikleyicisi Karanlık ve Serinliktir. Mavi ve parlak ışıklar uyku hormonu melatonini anında baskılar ve uyku kaliteni %50 düşürür. Vücudun uykuya dalabilmesi için çekirdek vücut sıcaklığının yaklaşık 1 santigrat derece düşmesi gerekir. Serin bir oda (18.3°C) bu düşüşü hızlandırarak derin uyku (NREM) evresini uzatır ve sabah dinç uyanmanı garanti eder."
  }
];

const EXERCISES = [
  {
    id: "ex_1",
    title: "Chin Tucks",
    target: "Hedef: Boyun Düzleşmesi & İleri Kafa Duruşu",
    desc: "Çenenizi geriye doğru çekerek boyun omurlarınızı hizalayın. Başınızı yukarı kaldırmadan çift çene oluşturmaya çalışın. Her tekrarda 5 saniye bekleyin.",
    sets: "3 Set x 10 Tekrar",
    time: 50,
    details: [
      "Sırtınızı ve omuzlarınızı dik tutun, karşıya bakın.",
      "Başınızı öne veya arkaya eğmeden, çenenizi sanki bir çekmeceyi kapatır gibi arkaya doğru çekin.",
      "Çift çene (double chin) görüntüsü elde etmelisiniz. En arkadaki noktada 5 saniye bekleyin.",
      "Yavaşça serbest bırakın ve başlangıç pozisyonuna dönün."
    ],
    science: "Boyun omurlarını (cervical spine) stabilize eden derin boyun bükücü kasları (deep cervical flexors) izometrik olarak güçlendirir. Masa başında çalışırken gerilen suboksipital kasları uzatarak ileri kafa duruşunun (forward head posture) yarattığı mekanik stresi nötralize eder ve servikal disk üzerindeki yükü dengeler.",
    svg: `<svg viewBox="0 0 200 200" width="100%" height="100%">
      <defs>
        <marker id="arrow-cy" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--cy)" />
        </marker>
      </defs>
      <!-- Arka Plan Kılavuz Grid -->
      <line x1="20" y1="170" x2="185" y2="170" stroke="rgba(255,255,255,0.05)" stroke-width="2" />
      <line x1="60" y1="20" x2="60" y2="180" stroke="rgba(255,255,255,0.03)" stroke-dasharray="3 3" />
      
      <!-- Torso / Sırt Üstü Sabit Kısım -->
      <path d="M 40 170 C 40 150, 50 130, 60 120" fill="none" stroke="var(--tx-secondary)" stroke-width="7" stroke-linecap="round" />
      
      <!-- Boyun (Esneyen/Doğrulan Kısım) -->
      <path class="chin-tucks-neck" d="M 60 120 Q 65 95, 75 75" fill="none" stroke="var(--tx-secondary)" stroke-width="6" stroke-linecap="round" />
      
      <!-- Derin Boyun Flexor Kası (Ön Kısım - Kasılma Efekti) -->
      <path class="chin-tucks-muscle-front" d="M 66 115 Q 70 95, 78 80" fill="none" stroke="var(--gr)" stroke-width="3" stroke-linecap="round" opacity="0.3" />

      <!-- Alt Kafatası Esneme Bölgesi (Suboksipital - Dalga Efekti) -->
      <circle class="chin-tucks-stretch-glow" cx="58" cy="72" r="8" fill="var(--rd)" opacity="0.1" />

      <!-- Hareketli Baş Grubu -->
      <g class="chin-tucks-head">
        <!-- Kafatası -->
        <circle cx="75" cy="55" r="24" fill="rgba(167, 139, 250, 0.1)" stroke="var(--pu)" stroke-width="3" />
        <!-- Çene, Ağız ve Burun Profili -->
        <path d="M 90 73 C 90 73, 98 70, 94 62 C 92 58, 99 56, 99 53 C 99 50, 92 48, 93 42 C 94 36, 88 33, 85 32" fill="none" stroke="var(--pu)" stroke-width="3" stroke-linecap="round" />
        <!-- Göz -->
        <circle cx="85" cy="48" r="2" fill="var(--cy)" />
        <!-- Kulak -->
        <circle cx="72" cy="56" r="5" fill="none" stroke="var(--tx-muted)" stroke-width="2" />
      </g>

      <!-- Yönlendirici Neon Ok -->
      <path class="chin-tucks-arrow" d="M 125 55 L 102 55" fill="none" stroke="var(--cy)" stroke-width="3.5" stroke-linecap="round" marker-end="url(#arrow-cy)" />
    </svg>`
  },
  {
    id: "ex_2",
    title: "Wall Angels",
    target: "Hedef: Üst Sırt / Omuz Mobilitesi & Kamburluk (Kyphosis)",
    desc: "Sırtınızı, kalçanızı ve dirseklerinizi duvara tamamen yaslayın. Kollarınızı duvardan ayırmadan yavaşça yukarı kaldırıp aşağı indirin.",
    sets: "3 Set x 12 Tekrar",
    time: 60,
    details: [
      "Duvara yaslanın; topuklar, kalça, sırt ve baş duvara temas etmelidir.",
      "Kollarınızı 90 derece bükerek dirseklerinizi ve ellerinizin arkasını duvara yaslayın (W pozisyonu).",
      "Duvardan temasını kesmeden, kollarınızı yukarı doğru uzatıp düzleştirin (Y pozisyonu).",
      "Yavaşça dirseklerinizi kaburgalarınıza doğru indirerek başlangıç pozisyonuna dönün. Kürek kemiklerinizi sıkıştırın."
    ],
    science: "Pektoral (göğüs) kasları esnetirken rhomboid ve alt trapezius kaslarını aktive eder. Torasik (üst sırt) mobilitesini artırarak masa başı çalışanlarda sıkça görülen torasik kifozu (kamburluğu) düzeltir ve omuz ekleminin subakromiyal alanını genişleterek sıkışma sendromunu önler.",
    svg: `<svg viewBox="0 0 200 200" width="100%" height="100%">
      <defs>
        <marker id="arrow-up" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 5 0 L 10 10 L 0 10 z" fill="var(--cy)" />
        </marker>
      </defs>
      <!-- Duvar Kılavuzu (Arka Duvar Izgarası) -->
      <rect x="25" y="20" width="150" height="160" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.05)" stroke-width="1.5" />
      <line x1="100" y1="20" x2="100" y2="180" stroke="rgba(255,255,255,0.03)" />

      <!-- Sabit Baş ve Gövde -->
      <circle cx="100" cy="50" r="14" fill="rgba(167, 139, 250, 0.1)" stroke="var(--tx-secondary)" stroke-width="3" />
      <path d="M 75 80 L 125 80 L 115 150 L 85 150 z" fill="rgba(255, 255, 255, 0.02)" stroke="var(--tx-secondary)" stroke-width="4.5" stroke-linejoin="round" />
      <line x1="100" y1="80" x2="100" y2="150" stroke="rgba(255,255,255,0.1)" stroke-width="2" /> <!-- Omurga -->

      <!-- Sıkışan Kürek Kemikleri (Rhomboids - Kasılma Parıltısı) -->
      <path class="wall-angels-muscle-left" d="M 82 90 Q 90 105, 96 90" fill="none" stroke="var(--rd)" stroke-width="4.5" stroke-linecap="round" opacity="0.2" />
      <path class="wall-angels-muscle-right" d="M 118 90 Q 110 105, 104 90" fill="none" stroke="var(--rd)" stroke-width="4.5" stroke-linecap="round" opacity="0.2" />

      <!-- Sol Kol Grubu (Rotasyonlu) -->
      <g class="wall-angels-arm-left">
        <!-- Omuzdan Dirseğe -->
        <line x1="75" y1="85" x2="48" y2="105" stroke="var(--pu)" stroke-width="5" stroke-linecap="round" />
        <!-- Dirsekten Ele -->
        <line x1="48" y1="105" x2="38" y2="62" stroke="var(--cy)" stroke-width="4.5" stroke-linecap="round" />
        <!-- El Noktası -->
        <circle cx="38" cy="62" r="4" fill="#fff" />
      </g>

      <!-- Sağ Kol Grubu (Rotasyonlu) -->
      <g class="wall-angels-arm-right">
        <!-- Omuzdan Dirseğe -->
        <line x1="125" y1="85" x2="152" y2="105" stroke="var(--pu)" stroke-width="5" stroke-linecap="round" />
        <!-- Dirsekten Ele -->
        <line x1="152" y1="105" x2="162" y2="62" stroke="var(--cy)" stroke-width="4.5" stroke-linecap="round" />
        <!-- El Noktası -->
        <circle cx="162" cy="62" r="4" fill="#fff" />
      </g>

      <!-- Hareket Yönü Okları -->
      <path class="wall-angels-arrow-l" d="M 32 105 Q 22 85, 30 65" fill="none" stroke="var(--cy)" stroke-width="2" stroke-dasharray="3 3" marker-end="url(#arrow-up)" />
      <path class="wall-angels-arrow-r" d="M 168 105 Q 178 85, 170 65" fill="none" stroke="var(--cy)" stroke-width="2" stroke-dasharray="3 3" marker-end="url(#arrow-up)" />
    </svg>`
  },
  {
    id: "ex_3",
    title: "Hip Flexor Lunge Stretch",
    target: "Hedef: Pelvik Hizalama (Anterior Pelvic Tilt)",
    desc: "Bir diziniz yerde olacak şekilde lunge pozisyonu alın. Kalçanızı öne doğru iterek arka bacağın ön kısmındaki (psoas) gerilmeyi hissedin. Omurganızı dik tutun.",
    sets: "Her Bacak İçin 30 Saniye Bekle",
    time: 30,
    details: [
      "Yerde lunge pozisyonu alın: Sağ diziniz 90 derece bükülü önde ayak yerde olsun, sol diziniz geride yerde olsun.",
      "Omurganızı dik tutarak kalçanızı hafifçe öne ve aşağı doğru itin.",
      "Sol bacağınızın ön-üst kısmındaki (kalça bükücü) gerilmeyi hissedin. Bu pozisyonda 30 saniye bekleyin.",
      "Nefes vererek pozisyonu koruyun, ardından diğer bacağa geçin."
    ],
    science: "Saatlerce oturma pozisyonunda kalmak, kalça bükücü (psoas ve iliacus) kaslarının kronik olarak kısalmasına yol açar. Bu kısalık pelvik yapıyı öne doğru çekerek anterior pelvik tilt (ördek popo) duruşuna ve bel (lumbar) lordozunun artmasına, dolayısıyla bel ağrılarına neden olur. Bu germe egzersizi psoas kasının boyunu uzatarak pelvik halkayı nötr hizasına getirir.",
    svg: `<svg viewBox="0 0 200 200" width="100%" height="100%">
      <defs>
        <marker id="arrow-right" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--cy)" />
        </marker>
      </defs>
      <!-- Yer Tabanı -->
      <line x1="15" y1="165" x2="185" y2="165" stroke="rgba(255,255,255,0.08)" stroke-width="2.5" />

      <!-- Hareket Eden Tüm Vücut Grubu (Kalça İtilmesi ile) -->
      <g class="lunge-stretch-body">
        <!-- Baş ve Gövde -->
        <circle cx="85" cy="50" r="13" fill="rgba(167, 139, 250, 0.1)" stroke="var(--tx-secondary)" stroke-width="3" />
        <path d="M 85 63 C 85 63, 83 95, 83 105" fill="none" stroke="var(--tx-secondary)" stroke-width="5.5" stroke-linecap="round" />
        
        <!-- Arka Bacak (Esneme Açısı Değişen) -->
        <!-- Kalçadan Dize (Uyluk) -->
        <line x1="83" y1="105" x2="55" y2="135" stroke="var(--pu)" stroke-width="5" stroke-linecap="round" />
        <!-- Dizden Ayağa (Kaval) -->
        <path d="M 55 135 L 55 165 L 35 165" fill="none" stroke="var(--tx-secondary)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
        
        <!-- Ön Bacak (Destek) -->
        <!-- Kalçadan Dize -->
        <line x1="83" y1="105" x2="115" y2="115" stroke="var(--tx-secondary)" stroke-width="5" stroke-linecap="round" />
        <!-- Dizden Ayak Bileğine -->
        <line x1="115" y1="115" x2="115" y2="165" stroke="var(--tx-secondary)" stroke-width="4.5" stroke-linecap="round" />
        <!-- Ayak -->
        <line x1="115" y1="165" x2="135" y2="165" stroke="var(--tx-secondary)" stroke-width="4.5" stroke-linecap="round" />

        <!-- Psoas / Kalça Bükücü Kas (Esneme Bölgesi) -->
        <path class="lunge-psoas-muscle" d="M 82 92 Q 74 110, 58 132" fill="none" stroke="var(--rd)" stroke-width="4.5" stroke-linecap="round" opacity="0.2" />
        <circle class="lunge-psoas-glow" cx="68" cy="120" r="10" fill="var(--rd)" opacity="0.05" />
      </g>

      <!-- Kalçayı Öne İten Yönlendirici Neon Ok -->
      <path class="lunge-force-arrow" d="M 45 95 L 72 95" fill="none" stroke="var(--cy)" stroke-width="3.5" stroke-linecap="round" marker-end="url(#arrow-right)" />
    </svg>`
  },
  {
    id: "ex_4",
    title: "Glute Bridges",
    target: "Hedef: Bel / Kalça Aktivasyonu (Pelvik Stabilizasyon)",
    desc: "Sırt üstü uzanın, dizlerinizi bükün. Kalça kaslarınızı sıkarak kalçanızı yukarı kaldırın. Vücudunuz omuzlardan dizlere kadar düz bir çizgi oluşturmalıdır.",
    sets: "3 Set x 15 Tekrar",
    time: 45,
    details: [
      "Sırt üstü uzanın, dizlerinizi bükün ve ayak tabanlarınızı omuz genişliğinde yere basın.",
      "Kollarınızı yanlarda yere bırakın. Topuklarınızdan güç alarak kalçanızı yerden kaldırın.",
      "En üst noktada kalça kaslarınızı (gluteus maximus) maksimum derecede sıkın ve vücudunuz omuzdan dize düz bir hat olana kadar yükselin.",
      "2 saniye bekleyin ve yavaşça kalçanızı yere indirin."
    ],
    science: "Oturarak geçirilen uzun saatler kalça kaslarında 'gluteal amnezi'ye (ölü kalça sendromu) yol açar. Kalça aktifleşmediğinde, vücut yükü bel ve hamstrig kaslarına yükler. Glute bridge egzersizi kalça kaslarını izole ederek aktive eder, pelvik stabilizasyonu artırır ve lumbar omurga üzerindeki mekanik baskıyı azaltarak alt sırtı korur.",
    svg: `<svg viewBox="0 0 200 200" width="100%" height="100%">
      <defs>
        <marker id="arrow-up-bridge" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 5 0 L 10 10 L 0 10 z" fill="var(--cy)" />
        </marker>
      </defs>
      <!-- Yer Zemin Çizgisi -->
      <line x1="15" y1="160" x2="185" y2="160" stroke="rgba(255,255,255,0.08)" stroke-width="2" />

      <!-- Sabit Baş, Omuzlar ve Kollar -->
      <circle cx="45" cy="148" r="10" fill="rgba(167, 139, 250, 0.1)" stroke="var(--tx-secondary)" stroke-width="3" />
      <path d="M 45 155 L 70 155" fill="none" stroke="var(--tx-secondary)" stroke-width="5" stroke-linecap="round" />
      <path d="M 40 158 L 85 158" fill="none" stroke="var(--tx-muted)" stroke-width="3" stroke-linecap="round" /> <!-- Kol -->

      <!-- Sabit Ayaklar -->
      <path d="M 145 160 L 155 160" fill="none" stroke="var(--tx-secondary)" stroke-width="5.5" stroke-linecap="round" />

      <!-- Kaldırılan Kalça Grubu -->
      <g class="glute-bridge-hips">
        <!-- Sırt ve Uyluk Birleşimi -->
        <line x1="70" y1="155" x2="105" y2="145" stroke="var(--tx-secondary)" stroke-width="5" stroke-linecap="round" class="bridge-spine" />
        <!-- Kalça -->
        <circle cx="105" cy="145" r="9" fill="none" stroke="var(--tx-secondary)" stroke-width="4.5" />
        <!-- Uyluk (Kalçadan Dize) -->
        <line x1="105" y1="145" x2="140" y2="115" stroke="var(--tx-secondary)" stroke-width="5.5" stroke-linecap="round" class="bridge-thigh" />
        <!-- Kaval (Dizden Ayak Bileğine) -->
        <line x1="140" y1="115" x2="148" y2="160" stroke="var(--tx-secondary)" stroke-width="5" stroke-linecap="round" />

        <!-- Gluteus Maximus Kası (Kalça Kasılması - Aktifleşme Efekti) -->
        <path class="bridge-glute-muscle" d="M 98 152 A 8 8 0 0 0 112 140" fill="none" stroke="var(--gr)" stroke-width="5" stroke-linecap="round" opacity="0.3" />
        <!-- Hamstring Kası (Arka Uyluk) -->
        <path class="bridge-hamstring-muscle" d="M 112 140 L 132 122" fill="none" stroke="var(--gr)" stroke-width="3.5" stroke-linecap="round" opacity="0.2" />
      </g>

      <!-- Yönlendirici Yukarı Ok -->
      <path class="bridge-arrow" d="M 105 158 L 105 125" fill="none" stroke="var(--cy)" stroke-width="3" stroke-linecap="round" marker-end="url(#arrow-up-bridge)" />
    </svg>`
  },
  {
    id: "ex_5",
    title: "Prone Cobra (YTWL)",
    target: "Hedef: Postür Düzeltici Kaslar & Omuz Stabilizasyonu",
    desc: "Yüz üstü uzanın. Göğsünüzü ve ellerinizi yerden kaldırın. Kürek kemiklerinizi birbirine doğru sıkarak kollarınızla sırasıyla Y, T, W ve L harfleri oluşturun.",
    sets: "3 Set x 10 Tekrar (Her pozisyonda 3 sn bekle)",
    time: 30,
    details: [
      "Mat üzerine yüz üstü uzanın, alnınızı yere koyun.",
      "Kollarınızı yanlara açarak kürek kemiklerinizi birbirine yaklaştırın ve göğsünüzü hafifçe yerden kaldırın.",
      "Kollarınızı sırasıyla Y, T, W ve L harfleri çizecek şekilde konumlandırıp her pozisyonda kürek kemiklerinizi sıkarak 3 saniye tutun.",
      "Başınızı aşırı arkaya bükmeyin, boynunuz omurganın devamı olarak düz kalsın."
    ],
    science: "Üst sırt ekstansör kaslarını (erector spinae) ve kürek kemiği stabilizatörlerini (trapezius ve rhomboids) güçlendirir. Yerçekiminin ve masa başı pozisyonunun omuzları öne çekmesini engelleyen bu egzersiz, omuz kuşağını geriye çekerek torasik omurgayı dikleştirir ve postüral dayanıklılığı artırır.",
    svg: `<svg viewBox="0 0 200 200" width="100%" height="100%">
      <line x1="20" y1="150" x2="180" y2="150" stroke="rgba(255, 255, 255, 0.1)" stroke-width="2" />
      <g class="prone-cobra-chest">
        <path d="M 50 148 L 130 140 L 160 148" fill="none" stroke="var(--tx-secondary)" stroke-width="5" />
        <circle cx="140" cy="125" r="10" fill="var(--bg-card-hover)" stroke="var(--pu)" stroke-width="4" />
      </g>
    </svg>`
  }
];

const DOPAMIN_ITEMS = [
  { 
    id: "d_1", 
    text: "Sosyal Medya Kaydırma", 
    desc: "Instagram, TikTok vb. ucuz dopamin tetikleyicileri.", 
    penalty: 15,
    details: [
      "Çalışma saatlerinde telefonu fiziksel olarak başka bir odaya koyun veya kapatın.",
      "Sosyal medya uygulamalarına günlük 15-20 dakika kullanım sınırı koyun.",
      "Tüm anlık bildirimleri tamamen kapatın veya 'Rahatsız Etmeyin' moduna alın."
    ],
    science: "Sonsuz kaydırma (infinite scroll) algoritmaları, beynin ödül merkezine öngörülemez aralıklarla küçük dopamin paketleri gönderir (değişken oranlı ödüllendirme). Bu durum, beynin prefrontal korteksteki dikkat ağlarını bozarak odaklanma süresini kısaltır ve normal, çaba gerektiren işlerden alınan doyumu (dopamin baseline) düşürür."
  },
  { 
    id: "d_2", 
    text: "Şekerli Gıda & Fast Food", 
    desc: "Basit şekerler ve insülin dalgalanmaları.", 
    penalty: 10,
    details: [
      "Evdeki tüm abur cuburları, paketli şekerli gıdaları ve gazlı içecekleri tamamen uzaklaştırın.",
      "Açlık krizlerinde kuru yemiş (ceviz, badem) veya bol su tüketin.",
      "Alışverişe kesinlikle aç karnına çıkmayın, önceden planlı bir liste hazırlayın."
    ],
    science: "Rafine şekerler ve yüksek glisemik indeksli gıdalar, kan şekerini aniden yükseltip insülin patlamasına sebep olur. Bunu takip eden hızlı şeker düşüşü (hipoglisemi), beyne giden enerji akışını keserek beyin sisi (brain fog), konsantrasyon kaybı ve uyku haline yol açar."
  },
  { 
    id: "d_3", 
    text: "Çalışırken Müzik Dinleme", 
    desc: "Zorlu Deep Work seanslarında pasif uyaranlar.", 
    penalty: 5,
    details: [
      "Zorlu analitik veya kodlama işleri yaparken sözlü müzik dinlemeyin.",
      "Eğer sessizlik rahatsuz ediyorsa, sadece enstrümantal, klasik müzik, brown noise veya lo-fi ritimler tercih edin.",
      "Mümkünse tamamen sessiz bir ortamda çalışmayı alışkanlık haline getirin."
    ],
    science: "Sözlü müzik dinlemek, beynin dil işleme merkezlerini (Wernicke ve Broca alanları) meşgul eder. Yazılı veya mantıksal bir işle uğraşırken beyniniz iki dil girdisini aynı anda işlemeye çalışır, bu da bilişsel yükü (cognitive load) artırır ve çalışma belleğinin (working memory) kapasitesini azaltarak hata yapma payını yükseltir."
  },
  { 
    id: "d_4", 
    text: "Porno & Mastürbasyon", 
    desc: "Dopamin reseptörlerini tamamen körelten en büyük kaynak.", 
    penalty: 30,
    details: [
      "Tarayıcınızda yetişkin içerikli siteleri engelleyen filtreler kullanın.",
      "Yalnız kaldığınızda ve sıkıldığınızda tetiklenmemek için kendinize fiziksel aktiviteler veya hobiler bulun.",
      "Gece yatağa telefonla girmeyin."
    ],
    science: "Doğal olmayan, aşırı uyarılmış görsel girdiler ve yüksek hızlı dopamin salınımı, dopamin reseptörlerinin (D2 reseptörleri) downregulation (sayıca azalması) yaşamasına neden olur. Bu durum, beynin hayattaki normal başarılardan (kod yazmak, spor yapmak, öğrenmek) zevk alamamasına, motivasyon kaybına (anhedoni) ve genel bir iradesizliğe yol açar."
  },
  { 
    id: "d_5", 
    text: "Lüzumsuz Oyun / Video İzleme", 
    desc: "Çalışma saatleri arasında YouTube/Netflix döngüsü.", 
    penalty: 15,
    details: [
      "Çalışma bilgisayarınızdan oyunları tamamen silin.",
      "YouTube veya Netflix gibi platformları sadece gün sonundaki dinlenme saatinde (19:00 - 21:00) açın.",
      "Çalışırken tarayıcınızda eğlence sekmelerini tamamen kapatın."
    ],
    science: "Oyunlar ve hızlı kurgulu videolar, beyni sürekli uyarılmış (hyper-arousal) durumda tutar. Bu durum prefrontal korteksin mantıklı karar verme mekanizmasını devre dışı bırakarak dürtüsel (impulsive) davranışı tetikler ve çalışmaya geri dönmeyi imkansız hale getiren bir 'dopamin döngüsü' yaratır."
  }
];

const QUOTES = [
  "Deep Work, dikkatinizi dağıtmadan bilişsel olarak zorlayıcı bir göreve odaklanma yeteneğidir. - Cal Newport",
  "Uykudan feragat etmek, gelecekteki bilişsel performansınızdan tefeci faiziyle borç almaktır. - Matthew Walker",
  "Sabah gün ışığı, sirkadiyen ritminizin ana anahtarıdır. Onu asla kaçırmayın. - Andrew Huberman",
  "Dopamin detoksu, sıkılma eşiğinizi yükseltir. Sıkılmayı öğrenen insan, odaklanmayı öğrenir.",
  "Mükemmellik bir eylem değil, bir alışkanlıktır. Her gün siber disiplini koruyun."
];

// ==========================================================================
// 2. STATE YÖNETİMİ & LOCALSTORAGE SENKRONİZASYONU
// ==========================================================================
let S = {
  date: "",
  completedTasks: [], // Bugünün tamamlanan saatlik rutin ID'leri
  dopaminViolations: [], // Bugün çiğnenen dopamin kuralları
  history: {}, // Geçmiş günlerin istatistikleri { "YYYY-MM-DD": { score: 80 } }
  srsCards: [], // Spaced Repetition kartları
  projects: [], // Kanban projeleri
  feynmanNotes: "",
  totalXp: 0,
  circadianChecks: []
};

let expandedRoutines = [];
let expandedLevers = [];
let expandedDopaminItems = [];

const $ = id => document.getElementById(id);
function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }

function getTodayStr() {
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

function loadState() {
  const data = localStorage.getItem("perf_hub_state");
  const currentToday = getTodayStr();

  if (data) {
    try {
      S = JSON.parse(data);
    } catch (e) {
      console.warn("State bozuk, sıfırlanıyor.");
      resetState(currentToday);
      return;
    }
  } else {
    resetState(currentToday);
    return;
  }

  // Tüm kritik dizileri ve objeleri güvenli varsayılanlarla sarmala (eski localStorage sürüm göçleri için)
  if (!S.date) S.date = currentToday;
  if (!Array.isArray(S.completedTasks)) S.completedTasks = [];
  if (!Array.isArray(S.dopaminViolations)) S.dopaminViolations = [];
  if (!S.history || typeof S.history !== "object") S.history = {};
  if (!Array.isArray(S.srsCards)) {
    S.srsCards = [
      { id: "s_1", cat: "İngilizce", front: "In the long run", answer: "Uzun vadede, eninde sonunda", ex: "We will win in the long run.", next: 0, interval: 0, rep: 0, ef: 2.5 },
      { id: "s_2", cat: "AI / Prompting", front: "Few-Shot Prompting", answer: "Modelle örnekler (1-5 adet) vererek çıktıyı biçimlendirme tekniği.", ex: "Input: A -> Output: B yapısını prompt içinde göstermek.", next: 0, interval: 0, rep: 0, ef: 2.5 }
    ];
  }
  if (!Array.isArray(S.projects)) {
    S.projects = [
      { id: "p_1", name: "AI Posture Analyzer App", type: "Mikro SaaS", desc: "Webcam üzerinden duruş kontrolü yapan mikro uygulama.", status: "dev" },
      { id: "p_2", name: "CEFR Word Booster Deck", type: "Dijital Ürün", desc: "A1-B1 seviyeleri için kelime destesi.", status: "idea" }
    ];
  }
  if (S.feynmanNotes === undefined) S.feynmanNotes = "";
  if (S.totalXp === undefined) S.totalXp = 0;
  if (!Array.isArray(S.circadianChecks)) S.circadianChecks = [];

  // Gün değiştiyse, bugünün verilerini sıfırla ama geçmişi kaydet
  if (S.date !== currentToday) {
    if (S.date) {
      // Geçmişe kaydet
      const score = calculateProgressPct();
      S.history[S.date] = { score };
    }
    
    S.date = currentToday;
    S.completedTasks = [];
    S.dopaminViolations = [];
    S.circadianChecks = [];
    saveState();
  }
}

function resetState(todayDate) {
  S = {
    date: todayDate,
    completedTasks: [],
    dopaminViolations: [],
    history: {},
    srsCards: [
      { id: "s_1", cat: "İngilizce", front: "In the long run", answer: "Uzun vadede, eninde sonunda", ex: "We will win in the long run.", next: 0, interval: 0, rep: 0, ef: 2.5 },
      { id: "s_2", cat: "AI / Prompting", front: "Few-Shot Prompting", answer: "Modelle örnekler (1-5 adet) vererek çıktıyı biçimlendirme tekniği.", ex: "Input: A -> Output: B yapısını prompt içinde göstermek.", next: 0, interval: 0, rep: 0, ef: 2.5 }
    ],
    projects: [
      { id: "p_1", name: "AI Posture Analyzer App", type: "Mikro SaaS", desc: "Webcam üzerinden duruş kontrolü yapan mikro uygulama.", status: "dev" },
      { id: "p_2", name: "CEFR Word Booster Deck", type: "Dijital Ürün", desc: "A1-B1 seviyeleri için kelime destesi.", status: "idea" }
    ],
    feynmanNotes: "",
    totalXp: 0,
    circadianChecks: []
  };
  saveState();
}

// XP & Level Widget logic
function gainXp(amount, message) {
  const oldLevel = Math.floor(S.totalXp / 200) + 1;
  S.totalXp = Math.max(0, S.totalXp + amount);
  const newLevel = Math.floor(S.totalXp / 200) + 1;
  
  saveState();
  updateProfileUI();

  if (newLevel > oldLevel) {
    playSound("success");
    setTimeout(() => playSound("alarm"), 300);
    showToast(`⚡ SEVİYE ATLADINIZ! Seviye ${newLevel} oldunuz! 🎉`);
  } else if (amount > 0) {
    showToast(`⚡ +${amount} XP Kazandınız! ${message || ""}`);
  } else if (amount < 0) {
    showToast(`⚠️ ${amount} XP Kaybettiniz! ${message || ""}`);
  }
}

function updateProfileUI() {
  if (S.totalXp === undefined) S.totalXp = 0;
  const level = Math.floor(S.totalXp / 200) + 1;
  const xpInLevel = S.totalXp % 200;
  const pct = Math.min(100, Math.round((xpInLevel / 200) * 100));

  // Rank belirleme
  let rank = "Bilişsel Çırak";
  if (level >= 3 && level < 5) rank = "Postür Savaşçısı";
  else if (level >= 5 && level < 7) rank = "Odak Uzmanı";
  else if (level >= 7 && level < 10) rank = "Sirkadiyen Şaman";
  else if (level >= 10) rank = "Limitless / Ultra İnsan";

  const pRank = $("profileRank");
  const pLevel = $("profileLevel");
  const pBar = $("profileXpBar");
  const pText = $("profileXpText");

  if (pRank) pRank.textContent = rank;
  if (pLevel) pLevel.textContent = `Lvl ${level}`;
  if (pBar) pBar.style.width = `${pct}%`;
  if (pText) pText.textContent = `${xpInLevel} / 200 XP (Toplam: ${S.totalXp})`;

  // Mobil Profil Elemanları
  const mRank = $("mobileProfileRank");
  const mLevel = $("mobileProfileLevel");
  const mBar = $("mobileProfileXpBar");
  const mText = $("mobileProfileXpText");

  if (mRank) mRank.textContent = rank;
  if (mLevel) mLevel.textContent = `Lvl ${level}`;
  if (mBar) mBar.style.width = `${pct}%`;
  if (mText) mText.textContent = `${xpInLevel} / 200 XP`;
}

function saveState() {
  localStorage.setItem("perf_hub_state", JSON.stringify(S));
}

// ==========================================================================
// 3. SEKMELER ARASI NAVİGASYON MANTIĞI
// ==========================================================================
function initNavigation() {
  document.querySelectorAll(".side-nav .nav-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".side-nav .nav-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll("main .sec-tab").forEach(sec => sec.classList.remove("active"));
      
      btn.classList.add("active");
      const tabId = btn.dataset.t;
      $(`sec-${tabId}`).classList.add("active");
      
      // Sekmeye özel güncellemeler
      if (tabId === "dashboard") {
        renderDashboard();
      } else if (tabId === "deepwork") {
        renderDeepWork();
      } else if (tabId === "learning") {
        renderLearning();
      } else if (tabId === "posture") {
        renderPosture();
      } else if (tabId === "kanban") {
        renderKanban();
      }
    };
  });
}

// ==========================================================================
// 4. RETRO AUDIO SYNTH (WEB AUDIO API)
// ==========================================================================
function playSound(type) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (type === "success") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.setValueAtTime(1200, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } else if (type === "fail") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(180, ctx.currentTime);
      osc.frequency.setValueAtTime(120, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } else if (type === "alarm") {
      // Premium 8-bit alarm melodi döngüsü
      const notes = [523.25, 659.25, 523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.1, ctx.currentTime + idx * 0.15);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.15 + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.15);
        osc.stop(ctx.currentTime + idx * 0.15 + 0.3);
      });
    }
  } catch (e) {
    console.warn("Ses sentezlenemedi:", e);
  }
}

let toastT = null;
function showToast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove("show"), 2500);
}

// ==========================================================================
// 5. DASHBOARD & TIMELINE MANTIĞI
// ==========================================================================
function renderDashboard() {
  // Gün başlığı
  $("currentDate").textContent = new Date().toLocaleDateString("tr-TR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  
  // Timeline listesi
  const list = $("timelineList");
  list.innerHTML = "";

  const now = new Date();
  const currentHour = now.getHours();
  const currentMin = now.getMinutes();
  const totalMinutesNow = currentHour * 60 + currentMin;

  DAILY_ROUTINE.forEach(r => {
    // Aktif saat kontrolü
    const timeParts = r.time.split(" - ");
    const startParts = timeParts[0].split(":");
    const endParts = timeParts[1].split(":");
    
    const startMins = parseInt(startParts[0]) * 60 + parseInt(startParts[1]);
    const endMins = parseInt(endParts[0]) * 60 + parseInt(endParts[1]);

    const isActive = totalMinutesNow >= startMins && totalMinutesNow < endMins;
    const isDone = S.completedTasks.includes(r.id);
    const isExpanded = expandedRoutines.includes(r.id);

    const div = document.createElement("div");
    div.className = `time-item ${isActive ? "active" : ""} ${isDone ? "done" : ""} ${isExpanded ? "expanded" : ""}`;
    div.onclick = () => toggleRoutineExpand(r.id);

    if (isExpanded) {
      let stepsHtml = "";
      if (r.details && r.details.length > 0) {
        stepsHtml = r.details.map(step => `<li><span class="bullet">⚡</span> <span class="step-text">${esc(step)}</span></li>`).join("");
      } else {
        stepsHtml = `<li><span class="bullet">⚡</span> <span class="step-text">${esc(r.desc)}</span></li>`;
      }

      div.innerHTML = `
        <div class="card-header-panel" style="display:flex; justify-content:space-between; align-items:center; width:100%;">
          <div style="display:flex; align-items:center; gap:12px;">
            <div class="hour" style="font-family:var(--font-mono); font-weight:700; color:var(--pu);">${r.time}</div>
            <strong>${esc(r.title)}</strong>
            <span class="sheet-type-badge ${r.type}" style="font-size:0.6rem; padding:2px 8px;">${r.type.toUpperCase()}</span>
          </div>
          <div class="expand-indicator" style="font-size:0.75rem; color:var(--pu);">▲ Kapat</div>
        </div>
        
        <div class="card-details-panel" onclick="event.stopPropagation()" style="margin-top:15px; width:100%; display:flex; flex-direction:column; gap:15px;">
          <div class="details-section">
            <h4 style="font-family:var(--font-display); font-size:0.9rem; color:var(--tx-primary); margin-bottom:8px;">📋 Nasıl Yapılır? (Adım Adım Plan)</h4>
            <ul class="expanded-steps" style="list-style:none; display:flex; flex-direction:column; gap:8px; padding-left:0;">
              ${stepsHtml}
            </ul>
          </div>
          
          <div class="details-section science-box" style="margin-bottom:10px;">
            <h4 style="font-family:var(--font-display); font-size:0.9rem; color:var(--tx-primary); margin-bottom:8px;">🔬 Bilimsel Gerekçesi (Biyolojik Süreç)</h4>
            <p class="expanded-science" style="font-size:0.88rem; color:var(--tx-secondary); line-height:1.5; margin:0;">${esc(r.science)}</p>
          </div>
          
          <div class="details-action-row" style="display:flex; justify-content:space-between; align-items:center;">
            <div class="xp-badge" style="font-family:var(--font-mono); font-size:0.8rem; color:var(--cy); font-weight:700;">💰 Ödül: +${r.xp} XP</div>
            <button class="complete-action-btn ${isDone ? 'done' : ''}" onclick="event.stopPropagation(); toggleTask('${r.id}')">
              ${isDone ? '↺ Tamamlamayı Geri Al' : '✔ Yapıldı Olarak İşaretle'}
            </button>
          </div>
        </div>
      `;
    } else {
      div.innerHTML = `
        <div class="hour">${r.time}</div>
        <div class="desc-col">
          <strong>${esc(r.title)}</strong>
          <p class="sub" style="margin-top: 2px">${esc(r.desc)}</p>
        </div>
        <div style="display:flex; align-items:center; gap:12px;">
          <div class="expand-indicator" style="font-size:0.75rem; color:var(--tx-muted)">▼ Detay</div>
          <div class="chk-box">${isDone ? "✔" : ""}</div>
        </div>
      `;
    }
    list.appendChild(div);
  });

  // quote
  const dayIdx = Math.floor(new Date().getTime() / 86400000);
  $("dailyQuote").textContent = QUOTES[dayIdx % QUOTES.length];

  updateProgressCircle();
}

function toggleTask(id) {
  const idx = S.completedTasks.indexOf(id);
  const routineItem = DAILY_ROUTINE.find(r => r.id === id);
  const taskXp = routineItem ? routineItem.xp : 10;

  if (idx >= 0) {
    S.completedTasks.splice(idx, 1);
    playSound("fail");
    gainXp(-taskXp, "Görev iptal edildi.");
  } else {
    S.completedTasks.push(id);
    playSound("success");
    gainXp(taskXp, "Görev tamamlandı.");
  }
  saveState();
  renderDashboard();
}

function calculateProgressPct() {
  let totalXp = 0;
  let earnedXp = 0;
  
  DAILY_ROUTINE.forEach(r => {
    totalXp += r.xp;
    if (S.completedTasks.includes(r.id)) {
      earnedXp += r.xp;
    }
  });

  // Sirkadiyen kaldıraçların da verimlilik puanına etki etmesi
  CIRCADIAN_LEVERS.forEach(l => {
    totalXp += l.xp;
    if (S.circadianChecks && S.circadianChecks.includes(l.id)) {
      earnedXp += l.xp;
    }
  });

  // Dopamin cezası
  let penaltyXp = 0;
  S.dopaminViolations.forEach(vId => {
    const vItem = DOPAMIN_ITEMS.find(d => d.id === vId);
    if (vItem) penaltyXp += vItem.penalty;
  });

  if (totalXp === 0) return 0;
  const finalScore = Math.max(0, Math.round(((earnedXp - penaltyXp) / totalXp) * 100));
  return finalScore;
}

function updateProgressCircle() {
  const score = calculateProgressPct();
  $("progressPct").textContent = score + "%";
  
  // Circular progress stroke calculation
  // Radius: 45, Circumference: 2 * PI * 45 = 283
  const circle = $("circularBar");
  const offset = 283 - (score / 100) * 283;
  circle.style.strokeDashoffset = offset;

  // Skor özet alanları
  $("completedTasksCount").textContent = S.completedTasks.length;
  $("totalTasksCount").textContent = DAILY_ROUTINE.length;
}

// ==========================================================================
// 6. DEEP WORK & POMODORO MANTIĞI
// ==========================================================================
let pomoInterval = null;
let pomoSecs = 5400; // 90 dakika (varsayılan)
let isPomoRunning = false;
let pomoMode = "work"; // work veya break
let workPresetMins = 90;
let breakPresetMins = 20;

function renderDeepWork() {
  const dList = $("dopaminList");
  dList.innerHTML = "";

  DOPAMIN_ITEMS.forEach(d => {
    const isViolated = S.dopaminViolations.includes(d.id);
    const isExpanded = expandedDopaminItems.includes(d.id);
    const div = document.createElement("div");
    div.className = `dop-item ${isViolated ? "violated" : ""} ${isExpanded ? "expanded" : ""}`;
    div.onclick = () => toggleDopaminExpand(d.id);
    
    if (isExpanded) {
      const stepsHtml = d.details.map(step => `<li><span class="bullet">🚫</span> <span class="step-text">${esc(step)}</span></li>`).join("");
      
      div.innerHTML = `
        <div class="card-header-panel" style="display:flex; justify-content:space-between; align-items:center; width:100%;">
          <div class="text-side">
            <strong>${esc(d.text)}</strong>
            <span class="sub" style="color:var(--rd)">Ceza: -${d.penalty} verimlilik</span>
          </div>
          <div class="expand-indicator" style="font-size:0.75rem; color:var(--pu);">▲ Kapat</div>
        </div>
        
        <div class="card-details-panel" onclick="event.stopPropagation()" style="margin-top:15px; width:100%; display:flex; flex-direction:column; gap:15px;">
          <div class="details-section">
            <h4 style="font-family:var(--font-display); font-size:0.9rem; color:var(--tx-primary); margin-bottom:8px;">📋 Kaçınma Stratejisi (Adım Adım Plan)</h4>
            <ul class="expanded-steps" style="list-style:none; display:flex; flex-direction:column; gap:8px; padding-left:0;">
              ${stepsHtml}
            </ul>
          </div>
          
          <div class="details-section science-box" style="margin-bottom:10px;">
            <h4 style="font-family:var(--font-display); font-size:0.9rem; color:var(--tx-primary); margin-bottom:8px;">🔬 Nörobiyolojik Etkisi (Biyolojik Süreç)</h4>
            <p class="expanded-science" style="font-size:0.88rem; color:var(--tx-secondary); line-height:1.5; margin:0;">${esc(d.science)}</p>
          </div>
          
          <div class="details-action-row" style="display:flex; justify-content:space-between; align-items:center;">
            <button class="btn ${isViolated ? 'green' : 'red'} small" onclick="event.stopPropagation(); toggleDopamin('${d.id}')">
              ${isViolated ? 'Düzeltildi' : 'Çiğnedim'}
            </button>
          </div>
        </div>
      `;
    } else {
      div.innerHTML = `
        <div class="text-side">
          <strong>${esc(d.text)}</strong>
          <span class="sub">${esc(d.desc)} (Ceza: -${d.penalty} verimlilik)</span>
        </div>
        <div style="display:flex; align-items:center; gap:12px;">
          <div class="expand-indicator" style="font-size:0.75rem; color:var(--tx-muted)">▼ Detay</div>
          <button class="btn ${isViolated ? 'green' : 'red'} small" onclick="event.stopPropagation(); toggleDopamin('${d.id}')">
            ${isViolated ? 'Düzeltildi' : 'Çiğnedim'}
          </button>
        </div>
      `;
    }
    dList.appendChild(div);
  });
}

function toggleDopaminExpand(id) {
  const idx = expandedDopaminItems.indexOf(id);
  if (idx >= 0) {
    expandedDopaminItems.splice(idx, 1);
  } else {
    expandedDopaminItems.push(id);
  }
  renderDeepWork();
}

function toggleDopamin(id) {
  const idx = S.dopaminViolations.indexOf(id);
  const dopItem = DOPAMIN_ITEMS.find(d => d.id === id);
  const penalty = dopItem ? dopItem.penalty : 10;

  if (idx >= 0) {
    S.dopaminViolations.splice(idx, 1);
    playSound("success");
    gainXp(penalty, "Dopamin kontrolü sağlandı.");
  } else {
    S.dopaminViolations.push(id);
    playSound("fail");
    gainXp(-penalty, "Dopamin ihlali cezası.");
  }
  saveState();
  renderDeepWork();
}

function updatePomoUI() {
  const m = String(Math.floor(pomoSecs / 60)).padStart(2, "0");
  const s = String(pomoSecs % 60).padStart(2, "0");
  $("pomoTime").textContent = `${m}:${s}`;
}

function togglePomo() {
  if (isPomoRunning) {
    clearInterval(pomoInterval);
    isPomoRunning = false;
    $("pomoBtn").textContent = "▶ Başlat";
    $("pomoBtn").className = "btn primary";
  } else {
    isPomoRunning = true;
    $("pomoBtn").textContent = "⏸ Duraklat";
    $("pomoBtn").className = "btn red";
    
    pomoInterval = setInterval(() => {
      pomoSecs--;
      if (pomoSecs <= 0) {
        clearInterval(pomoInterval);
        isPomoRunning = false;
        playSound("alarm");
        
        if (pomoMode === "work") {
          showToast("🎉 Tebrikler! Seans bitti. Mola zamanı.");
          pomoMode = "break";
          pomoSecs = breakPresetMins * 60;
          $("pomoPhase").textContent = "Mola Turu";
          const xpReward = Math.round(workPresetMins * 0.55);
          gainXp(xpReward, `${workPresetMins} dakikalık odak seansı tamamlandı!`);
        } else {
          showToast("🧠 Mola bitti! Derin odaklanma başlıyor.");
          pomoMode = "work";
          pomoSecs = workPresetMins * 60;
          $("pomoPhase").textContent = "Odak Turu";
        }
        
        $("pomoBtn").textContent = "▶ Başlat";
        $("pomoBtn").className = "btn primary";
        updatePomoUI();
      } else {
        updatePomoUI();
      }
    }, 1000);
  }
}

function resetPomo() {
  clearInterval(pomoInterval);
  isPomoRunning = false;
  pomoMode = "work";
  pomoSecs = workPresetMins * 60;
  $("pomoPhase").textContent = "Odak Turu";
  $("pomoBtn").textContent = "▶ Başlat";
  $("pomoBtn").className = "btn primary";
  updatePomoUI();
}

function setPomoPreset(wMins, bMins) {
  workPresetMins = wMins;
  breakPresetMins = bMins;
  resetPomo();
  showToast(`⏱️ Süre optimize edildi: ${wMins} dk Odak / ${bMins} dk Mola`);
}

// ==========================================================================
// 7. ARALIKLI TEKRAR (SPACED REPETITION) MANTIĞI
// ==========================================================================
let activeSrsCard = null;
let currentSrsTab = "review";

let customStudyCards = [];
let customStudyIdx = 0;
let isCustomStudyActive = false;

function renderLearning() {
  const now = Date.now();
  let due = S.srsCards.filter(c => c.next <= now);
  
  $("dueSrsCount").textContent = due.length;
  
  if (isCustomStudyActive) {
    if (customStudyIdx >= customStudyCards.length) {
      isCustomStudyActive = false;
      showToast("🎉 Tüm desteyi çalışmayı tamamladınız!");
      renderLearning();
      return;
    }
    activeSrsCard = customStudyCards[customStudyIdx];
    $("btnCustomStudy").style.display = "none";
  } else {
    if (due.length === 0) {
      $("activeFlashcard").innerHTML = `
        <div class="fc-front" style="color: var(--gr)">🎉 Harika! Bugünkü tüm tekrar kartlarını tamamladın.</div>
      `;
      $("fcGrades").style.display = "none";
      $("btnCustomStudy").style.display = S.srsCards.length > 0 ? "inline-block" : "none";
      activeSrsCard = null;
      return;
    }
    $("btnCustomStudy").style.display = "none";
    activeSrsCard = due[0];
  }

  $("fcCategory").textContent = activeSrsCard.cat;
  $("fcFront").textContent = activeSrsCard.front;
  $("fcAnswer").textContent = activeSrsCard.answer;
  $("fcExample").textContent = activeSrsCard.ex || "";
  
  // Reset card view
  $("fcBack").style.display = "none";
  $("fcGrades").style.display = "none";
  $("fcFront").style.display = "block";
}

function startCustomStudy() {
  if (S.srsCards.length === 0) {
    showToast("Deste boş, önce yeni kart ekleyin.");
    return;
  }
  customStudyCards = [...S.srsCards];
  customStudyIdx = 0;
  isCustomStudyActive = true;
  switchSrsTab("review");
}

function revealFlashcard() {
  if (!activeSrsCard) return;
  $("fcBack").style.display = "block";
  $("fcGrades").style.display = "flex";
}

// SM-2 Algoritması Uygulaması
function gradeFlashcard(q) {
  if (!activeSrsCard) return;

  const card = S.srsCards.find(c => c.id === activeSrsCard.id);
  if (!card) return;

  const isFastMode = $("srsFastMode") && $("srsFastMode").checked;
  const multiplier = isFastMode ? 1000 : 24 * 60 * 60 * 1000;

  if (q >= 3) {
    if (card.rep === 0) {
      card.interval = isFastMode ? 10 : 1;
    } else if (card.rep === 1) {
      card.interval = isFastMode ? 30 : 3;
    } else {
      card.interval = isFastMode ? Math.round(card.interval * card.ef) : Math.round(card.interval * card.ef);
    }
    card.rep++;
  } else {
    card.rep = 0;
    card.interval = isFastMode ? 5 : 1;
  }

  // Easy Factor Güncelleme
  card.ef = card.ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  if (card.ef < 1.3) card.ef = 1.3;

  // Bir sonraki gösterim
  card.next = Date.now() + card.interval * multiplier;

  playSound("success");
  gainXp(5, "Bilgi kartı tekrar edildi.");
  
  if (isCustomStudyActive) {
    customStudyIdx++;
  }
  
  saveState();
  renderLearning();
}

function addFlashcard() {
  const cat = $("newFcCategory").value;
  const front = $("newFcFront").value.trim();
  const answer = $("newFcAnswer").value.trim();
  const ex = $("newFcExample").value.trim();

  if (!front || !answer) {
    showToast("Lütfen ön ve arka yüzleri doldurun.");
    playSound("fail");
    return;
  }

  const newCard = {
    id: "s_" + Date.now(),
    cat,
    front,
    answer,
    ex,
    next: 0,
    interval: 0,
    rep: 0,
    ef: 2.5
  };

  S.srsCards.push(newCard);
  saveState();
  
  // Formu temizle
  $("newFcFront").value = "";
  $("newFcAnswer").value = "";
  $("newFcExample").value = "";

  showToast("🃏 Yeni bilgi kartı aralıklı tekrar destesine eklendi!");
  playSound("success");
  switchSrsTab("review");
}

function switchSrsTab(tab) {
  currentSrsTab = tab;
  $("btnSrsReview").classList.toggle("active", tab === "review");
  $("btnSrsAdd").classList.toggle("active", tab === "add");
  $("btnSrsList").classList.toggle("active", tab === "list");
  
  $("srsReviewArea").style.display = tab === "review" ? "block" : "none";
  $("srsAddArea").style.display = tab === "add" ? "block" : "none";
  $("srsListArea").style.display = tab === "list" ? "block" : "none";
  
  if (tab === "list") {
    renderSrsList();
  } else {
    renderLearning();
  }
}

function renderSrsList() {
  const tbody = $("srsTableBody");
  tbody.innerHTML = "";
  
  if (S.srsCards.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--tx-muted)">Henüz eklenmiş kelime kartı yok.</td></tr>`;
    return;
  }

  S.srsCards.forEach(c => {
    const nextDate = c.next > 0 ? new Date(c.next).toLocaleDateString("tr-TR") : "Hemen";
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${esc(c.cat)}</strong></td>
      <td>${esc(c.front)}</td>
      <td>${esc(c.answer)} ${c.ex ? `<br><small style="color:var(--tx-muted)">${esc(c.ex)}</small>` : ""}</td>
      <td><span class="badge" style="font-family:var(--font-mono); font-size:0.75rem; color:var(--cy)">${nextDate}</span></td>
      <td><button onclick="deleteSrsCard('${c.id}')">🗑️ Sil</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function deleteSrsCard(id) {
  if (confirm("Bu kelime kartını silmek istediğinizden emin misiniz?")) {
    S.srsCards = S.srsCards.filter(c => c.id !== id);
    saveState();
    renderSrsList();
    playSound("fail");
    showToast("🃏 Kelime kartı silindi.");
  }
}

// Feynman Not Kaydı
function saveFeynmanNotes() {
  S.feynmanNotes = $("feynmanNotes").value;
  saveState();
  
  const status = $("feynmanStatus");
  status.classList.add("show");
  setTimeout(() => status.classList.remove("show"), 1000);
}

// ==========================================================================
// 8. POSTÜR & DURUŞ EGZERSİZLERİ MANTIĞI
// ==========================================================================
let activeExerciseIdx = 0;
let exerciseTimer = null;
let exerciseSecs = 30;
let isExerciseTimerRunning = false;

function renderPosture() {
  const list = $("postureList");
  list.innerHTML = "";

  EXERCISES.forEach((ex, idx) => {
    const btn = document.createElement("button");
    btn.className = `post-nav-item ${activeExerciseIdx === idx ? "active" : ""}`;
    btn.innerHTML = esc(ex.title);
    btn.onclick = () => selectExercise(idx);
    list.appendChild(btn);
  });

  // Aktif egzersizi ekrana yükle
  const activeEx = EXERCISES[activeExerciseIdx];
  $("postureTitle").textContent = activeEx.title;
  $("postureTarget").textContent = activeEx.target;
  $("postureDesc").textContent = activeEx.desc;
  $("postureSets").textContent = activeEx.sets;
  $("postureSvgContainer").innerHTML = activeEx.svg;

  // Adım adım rehber ve bilimsel açıklamayı doldur
  const detailsList = $("postureDetailsList");
  const scienceText = $("postureScienceText");
  
  if (detailsList && scienceText) {
    if (activeEx.details && activeEx.details.length > 0) {
      detailsList.innerHTML = activeEx.details.map(step => `<li><span class="bullet">💪</span> <span class="step-text">${esc(step)}</span></li>`).join("");
    } else {
      detailsList.innerHTML = `<li><span class="bullet">💪</span> <span class="step-text">${esc(activeEx.desc)}</span></li>`;
    }
    scienceText.textContent = activeEx.science || "Bu egzersiz için bilimsel gerekçe yükleniyor...";
  }
}

function selectExercise(idx) {
  activeExerciseIdx = idx;
  resetExerciseTimer();
  renderPosture();
}

function updateExerciseTimerUI() {
  const m = String(Math.floor(exerciseSecs / 60)).padStart(2, "0");
  const s = String(exerciseSecs % 60).padStart(2, "0");
  $("exerciseTimerDisplay").textContent = `${m}:${s}`;
}

function toggleExerciseTimer() {
  if (isExerciseTimerRunning) {
    clearInterval(exerciseTimer);
    isExerciseTimerRunning = false;
    $("exerciseTimerBtn").textContent = "▶ Başlat";
  } else {
    isExerciseTimerRunning = true;
    $("exerciseTimerBtn").textContent = "⏸ Duraklat";
    
    exerciseTimer = setInterval(() => {
      exerciseSecs--;
      if (exerciseSecs <= 0) {
        clearInterval(exerciseTimer);
        isExerciseTimerRunning = false;
        playSound("alarm");
        showToast("💪 Egzersiz tamamlandı!");
        gainXp(15, "Postür egzersizi tamamlandı.");
        resetExerciseTimer();
      } else {
        updateExerciseTimerUI();
      }
    }, 1000);
  }
}

function resetExerciseTimer() {
  clearInterval(exerciseTimer);
  isExerciseTimerRunning = false;
  const activeEx = EXERCISES[activeExerciseIdx];
  exerciseSecs = activeEx.time || 30; // Egzersize özel süre
  $("exerciseTimerBtn").textContent = "▶ Başlat";
  updateExerciseTimerUI();
}

function setExerciseTimerPreset(secs) {
  resetExerciseTimer();
  exerciseSecs = secs;
  updateExerciseTimerUI();
}

// ==========================================================================
// 9. KANBAN PROJE TAKİBİ
// ==========================================================================
function renderKanban() {
  const columns = ["idea", "dev", "live", "money"];
  columns.forEach(col => {
    const list = $(`cards-${col}`);
    list.innerHTML = "";
    
    const filtered = S.projects.filter(p => p.status === col);
    filtered.forEach(p => {
      const card = document.createElement("div");
      card.className = "kanban-card";
      card.draggable = true;
      card.ondragstart = (e) => drag(e, p.id);
      
      card.innerHTML = `
        <strong>${esc(p.name)}</strong>
        <div class="desc">${esc(p.desc)}</div>
        <div class="tag">${esc(p.type)}</div>
        <div class="card-footer">
          <button onclick="deleteProject('${p.id}')">🗑️ Sil</button>
          <div style="display:flex; gap:4px">
            ${col !== "idea" ? `<button style="color:var(--cy)" onclick="moveProject('${p.id}', '${columns[columns.indexOf(col)-1]}')">◀</button>` : ""}
            ${col !== "money" ? `<button style="color:var(--cy)" onclick="moveProject('${p.id}', '${columns[columns.indexOf(col)+1]}')">▶</button>` : ""}
          </div>
        </div>
      `;
      list.appendChild(card);
    });
  });
}

function moveProject(id, newStatus) {
  const project = S.projects.find(p => p.id === id);
  if (project) {
    project.status = newStatus;
    saveState();
    renderKanban();
    playSound("success");
    showToast(`💼 Proje taşıma: ${project.name}`);
  }
}

function deleteProject(id) {
  if (confirm("Bu projeyi silmek istediğinizden emin misiniz?")) {
    S.projects = S.projects.filter(p => p.id !== id);
    saveState();
    renderKanban();
    playSound("fail");
  }
}

function showNewProjectModal() {
  $("projectModal").style.display = "flex";
}

function hideNewProjectModal() {
  $("projectModal").style.display = "none";
}

function toggleRoutineExpand(id) {
  const idx = expandedRoutines.indexOf(id);
  if (idx >= 0) {
    expandedRoutines.splice(idx, 1);
  } else {
    expandedRoutines.push(id);
  }
  renderDashboard();
}

function toggleLeverExpand(id) {
  const idx = expandedLevers.indexOf(id);
  if (idx >= 0) {
    expandedLevers.splice(idx, 1);
  } else {
    expandedLevers.push(id);
  }
  renderCircadianLevers();
}

function addProject() {
  const name = $("projName").value.trim();
  const type = $("projType").value;
  const desc = $("projDesc").value.trim();

  if (!name) {
    showToast("Lütfen proje adını doldurun.");
    return;
  }

  const newProj = {
    id: "p_" + Date.now(),
    name,
    type,
    desc,
    status: "idea"
  };

  S.projects.push(newProj);
  saveState();
  renderKanban();
  hideNewProjectModal();
  
  // Temizle
  $("projName").value = "";
  $("projDesc").value = "";
  
  playSound("success");
  showToast("💼 Yeni proje Kanban tablosuna eklendi!");
}

// Sürükle Bırak Desteği
let draggedCardId = null;

function drag(e, id) {
  draggedCardId = id;
}

function allowDrop(e) {
  e.preventDefault();
}

function drop(e, colId) {
  e.preventDefault();
  const column = e.currentTarget.closest(".kanban-column");
  if (column) column.classList.remove("drag-over");
  if (draggedCardId) {
    moveProject(draggedCardId, colId);
    draggedCardId = null;
  }
}

function initKanbanEvents() {
  document.querySelectorAll(".kanban-cards").forEach(el => {
    el.addEventListener("dragenter", (e) => {
      const col = e.currentTarget.closest(".kanban-column");
      if (col) col.classList.add("drag-over");
    });
    el.addEventListener("dragleave", (e) => {
      const col = e.currentTarget.closest(".kanban-column");
      if (col) col.classList.remove("drag-over");
    });
  });
}

// Sirkadiyen Ritim Kadranı Çizim Yardımcıları
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M", start.x, start.y, 
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(" ");

  return d;       
}

const CIRCADIAN_LEVERS = [
  { 
    id: "l_1", 
    title: "Sabah Gün Işığı", 
    time: "06:00 - 06:30", 
    desc: "Uyanışta ilk 30 dk içinde en az 10-15 dk doğrudan güneş ışığı alımı.", 
    xp: 10, 
    badge: "sun",
    details: [
      "Uyanır uyanmaz ilk 30 dakika içinde dışarı çık veya balkona geç.",
      "En az 10-15 dakika doğrudan gökyüzüne bak (bulutlu havalarda 20-30 dakika).",
      "Cam arkasından bakma, çünkü cam dalga boylarını filtreler."
    ],
    science: "Sabah ışığı gözden girerek beyindeki sirkadiyen saati kurar. Bu sayede gün boyu enerjik olur, gece ise tam saatinde uykun gelerek derin uyursun. Huberman'ın 1 numaralı sağlık protokolüdür."
  },
  { 
    id: "l_2", 
    title: "Derin Hidrasyon", 
    time: "06:30", 
    desc: "Sabah kalkınca mineralli (bir çimdik tuzlu) su tüketimi.", 
    xp: 10, 
    badge: "water",
    details: [
      "Sabah ilk iş 500ml temiz su iç.",
      "Suyun içine bir çimdik kaya tuzu veya deniz tuzu ekle (hücresel hidrasyon için).",
      "Suyu yavaş yavaş, yudumlayarak tüket."
    ],
    science: "Gece uyurken terleme ve nefes yoluyla yaklaşık 1 litre su kaybedersin. Sabah kalktığında hücrelerin susuzdur ve bu halsizlik yaratır. Mineralli su, hücrelerin elektriksel dengesini hızla kurarak beyin sisini anında dağıtır."
  },
  { 
    id: "l_3", 
    title: "Kafein Geciktirme", 
    time: "09:00", 
    desc: "Kafein alımını uyanıştan 90-120 dakika sonraya erteleme.", 
    xp: 10, 
    badge: "coffee",
    details: [
      "Uyanır uyanmaz hemen kahve veya çay içme.",
      "İlk kafein alımını uyanışından en az 90-120 dakika sonraya ertele.",
      "Bu sürede su ve mineral alımına odaklan."
    ],
    science: "Vücutta 'Adenozin' adı verilen bir uyku kimyasalı birikir. Sabah uyandığında kalan adenozinler doğal olarak temizlenir. Eğer hemen kahve içersen kafein adenozini bloke eder ama yok etmez. Kahvenin etkisi geçince (öğleden sonra) biriken tüm adenozinler hücum eder ve 'crash' yaşarsın (çöküş). 90 dk beklemek bunu önler."
  },
  { 
    id: "l_4", 
    title: "Gün Batımı Işığı", 
    time: "17:30 - 18:30", 
    desc: "Akşam saatlerinde gün batımı ışığı alarak melatonini tetikleme.", 
    xp: 10, 
    badge: "evening",
    details: [
      "Akşamüstü (17:30 - 18:30 arası) açık havaya çık.",
      "Gözlüksüz şekilde gün batımı renklerini 10-15 dakika izle."
    ],
    science: "Akşamüstü güneşin düşük açılı ışıkları, melatonin salgılanma zamanlamasını kalibre eder. Bu sayede sirkadiyen ritmin tam 24 saatlik bir döngüde stabil kalır ve mevsim geçişlerindeki yorgunlukları önler."
  },
  { 
    id: "l_5", 
    title: "Mavi Işık Kısıtlaması", 
    time: "21:00", 
    desc: "Uykudan 2 saat önce tüm parlak tavan ışıklarını ve ekranları kapatma.", 
    xp: 15, 
    badge: "dark",
    details: [
      "Saat 21:00'den sonra tüm tavan ışıklarını kapat.",
      "Sadece göz hizasının altında kalan loş sarı/kırmızı zemin lambalarını kullan.",
      "Telefon ve televizyon kullanımını minimuma indir veya mavi ışık filtresini aç."
    ],
    science: "Tavan ışıkları beynimiz için 'güneş tam tepede' anlamına gelir ve melatonini anında sıfırlar. Loş ve kırmızımsı ışıklar ise ilkel dönemdeki kamp ateşi etkisi yaratarak beyni dinlenme ve uyku fazına sokar."
  }
];

const DIAL_PHASES = [
  { name: "Sirkadiyen Uyku", color: "var(--rd)", startOff: -8, endOff: 0, desc: "Derin hücresel yenilenme ve melatoninin zirve yaptığı uyku evresi." },
  { name: "Kortizol & Sabah Işığı", color: "var(--yl)", startOff: 0, endOff: 3, desc: "Kortizol hormonu salınımı ve sabah ışığıyla sirkadiyen saatin kurulması." },
  { name: "Yüksek Bilişsel Odak", color: "var(--cy)", startOff: 3, endOff: 6, desc: "En verimli ilk zihinsel çalışma penceresi (Deep Work)." },
  { name: "Zihinsel Dip & Dinlenme", color: "var(--gr)", startOff: 6, endOff: 9, desc: "Yemek sonrası bilişsel yavaşlama, hafif işler ve dinlenme evresi." },
  { name: "Fiziksel Zirve & Spor", color: "var(--or)", startOff: 9, endOff: 13, desc: "Vücut ısısının zirve yaptığı, spor ve düzeltici postür egzersiz penceresi." },
  { name: "Kapanış & Gevşeme", color: "var(--pu)", startOff: 13, endOff: 16, desc: "Melatonin sentezine hazırlık, mavi ışık kısıtlaması ve dinlenme." }
];

function drawCircadianDial() {
  const wakeTime = $("wakeTime").value || "06:00";
  const parts = wakeTime.split(":");
  const W = parseInt(parts[0]) + (parseInt(parts[1]) / 60);

  const container = $("dialSectors");
  if (!container) return;
  container.innerHTML = "";

  const now = new Date();
  const currentHour = now.getHours() + (now.getMinutes() / 60);

  let activePhaseName = "Bilişsel Odak";
  let activePhaseColor = "var(--cy)";

  DIAL_PHASES.forEach(p => {
    let startHour = W + p.startOff;
    let endHour = W + p.endOff;
    
    let sH = (startHour + 24) % 24;
    let eH = (endHour + 24) % 24;
    
    let startAngle = sH * 15;
    let endAngle = eH * 15;
    if (endAngle <= startAngle) {
      endAngle += 360;
    }

    const pathD = describeArc(100, 100, 80, startAngle, endAngle);
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathD);
    path.setAttribute("class", "circadian-sector");
    path.setAttribute("stroke", p.color);
    
    let isActive = false;
    if (sH < eH) {
      isActive = currentHour >= sH && currentHour < eH;
    } else {
      isActive = currentHour >= sH || currentHour < eH;
    }

    if (isActive) {
      path.setAttribute("stroke-width", "14");
      path.setAttribute("style", `filter: drop-shadow(0 0 5px ${p.color});`);
      activePhaseName = p.name;
      activePhaseColor = p.color;
    } else {
      path.setAttribute("stroke-width", "9");
      path.setAttribute("opacity", "0.45");
    }

    path.onclick = () => {
      showToast(`⏰ ${p.name} Fazı: ${p.desc}`);
      playSound("success");
    };

    container.appendChild(path);
  });

  const phaseEl = $("currentDialPhase");
  if (phaseEl) {
    phaseEl.textContent = activePhaseName;
    phaseEl.style.color = activePhaseColor;
  }

  const timeEl = $("currentDialTime");
  if (timeEl) {
    const minStr = String(now.getMinutes()).padStart(2, "0");
    timeEl.textContent = `${now.getHours()}:${minStr}`;
    timeEl.style.color = activePhaseColor;
  }

  const pointer = $("dialPointer");
  if (pointer) {
    const angle = currentHour * 15;
    pointer.setAttribute("transform", `rotate(${angle} 100 100)`);
    pointer.setAttribute("stroke", activePhaseColor);
  }
}

function renderCircadianLevers() {
  const list = $("circadianLeversList");
  if (!list) return;
  list.innerHTML = "";
  CIRCADIAN_LEVERS.forEach(l => {
    const isChecked = S.circadianChecks && S.circadianChecks.includes(l.id);
    const isExpanded = expandedLevers.includes(l.id);
    
    const div = document.createElement("div");
    div.className = `protocol-item ${isChecked ? "checked" : ""} ${isExpanded ? "expanded" : ""}`;
    div.onclick = () => toggleLeverExpand(l.id);
    
    if (isExpanded) {
      let stepsHtml = "";
      if (l.details && l.details.length > 0) {
        stepsHtml = l.details.map(step => `<li><span class="bullet">⚡</span> <span class="step-text">${esc(step)}</span></li>`).join("");
      } else {
        stepsHtml = `<li><span class="bullet">⚡</span> <span class="step-text">${esc(l.desc)}</span></li>`;
      }

      div.innerHTML = `
        <div class="card-header-panel" style="display:flex; justify-content:space-between; align-items:center; width:100%;">
          <div style="display:flex; align-items:center; gap:12px;">
            <div class="badge ${l.badge}">${l.time}</div>
            <strong>${esc(l.title)}</strong>
          </div>
          <div class="expand-indicator" style="font-size:0.75rem; color:var(--pu);">▲ Kapat</div>
        </div>
        
        <div class="card-details-panel" onclick="event.stopPropagation()" style="margin-top:15px; width:100%; display:flex; flex-direction:column; gap:15px;">
          <div class="details-section">
            <h4 style="font-family:var(--font-display); font-size:0.9rem; color:var(--tx-primary); margin-bottom:8px;">📋 Nasıl Yapılır? (Adım Adım Plan)</h4>
            <ul class="expanded-steps" style="list-style:none; display:flex; flex-direction:column; gap:8px; padding-left:0;">
              ${stepsHtml}
            </ul>
          </div>
          
          <div class="details-section science-box" style="margin-bottom:10px;">
            <h4 style="font-family:var(--font-display); font-size:0.9rem; color:var(--tx-primary); margin-bottom:8px;">🔬 Bilimsel Gerekçesi (Biyolojik Süreç)</h4>
            <p class="expanded-science" style="font-size:0.88rem; color:var(--tx-secondary); line-height:1.5; margin:0;">${esc(l.science)}</p>
          </div>
          
          <div class="details-action-row" style="display:flex; justify-content:space-between; align-items:center;">
            <div class="xp-badge" style="font-family:var(--font-mono); font-size:0.8rem; color:var(--cy); font-weight:700;">💰 Ödül: +${l.xp} XP</div>
            <button class="complete-action-btn ${isChecked ? 'done' : ''}" onclick="event.stopPropagation(); toggleCircadianCheck('${l.id}')">
              ${isChecked ? '↺ Tamamlamayı Geri Al' : '✔ Yapıldı Olarak İşaretle'}
            </button>
          </div>
        </div>
      `;
    } else {
      div.innerHTML = `
        <div class="badge ${l.badge}">${l.time}</div>
        <div style="flex-grow: 1; margin-right: 8px;">
          <strong>${esc(l.title)} (+${l.xp} XP)</strong>
          <p class="sub">${esc(l.desc)}</p>
        </div>
        <div style="display:flex; align-items:center; gap:12px;">
          <div class="expand-indicator" style="font-size:0.75rem; color:var(--tx-muted)">▼ Detay</div>
          <div class="chk-box">${isChecked ? "✔" : ""}</div>
        </div>
      `;
    }
    list.appendChild(div);
  });
}

function toggleCircadianCheck(id) {
  const idx = S.circadianChecks.indexOf(id);
  const lever = CIRCADIAN_LEVERS.find(l => l.id === id);
  const xpVal = lever ? lever.xp : 10;

  if (idx >= 0) {
    S.circadianChecks.splice(idx, 1);
    playSound("fail");
    gainXp(-xpVal, "Sirkadiyen kaldıraç iptal edildi.");
  } else {
    S.circadianChecks.push(id);
    playSound("success");
    gainXp(xpVal, "Sirkadiyen kaldıraç uygulandı.");
  }
  saveState();
  renderCircadianLevers();
  updateProgressCircle();
}

function calculateWakeTimesFromNow() {
  const results = $("sleepResults");
  results.innerHTML = "";

  const now = new Date();
  const cycles = [4, 5, 6];
  
  cycles.forEach(c => {
    const totalMinutesToAdd = 14 + c * 90;
    const wakeDate = new Date(now.getTime() + totalMinutesToAdd * 60 * 1000);

    const wakeHour = String(wakeDate.getHours()).padStart(2, "0");
    const wakeMin = String(wakeDate.getMinutes()).padStart(2, "0");

    const div = document.createElement("div");
    div.className = `sleep-option ${c === 5 ? "best" : ""}`;
    div.innerHTML = `
      <div>
        <strong>Şimdi Yatarsan: ${c} Döngü (${c * 1.5} Saat Uyku)</strong>
        <p class="sub">${c === 5 ? "⭐ Önerilen uyanış zamanı." : "Uyanış saati."}</p>
      </div>
      <div class="time">${wakeHour}:${wakeMin}</div>
    `;
    results.appendChild(div);
  });

  drawCircadianDial();
  playSound("success");
  showToast("🌙 İleri yönlü uyku döngüleri hesaplandı.");
}

// ==========================================================================
// 10. UYKU & SİRKADİYEN RİTİM HESAPLAYICI
// ==========================================================================
function calculateSleepTimes() {
  const wakeTime = $("wakeTime").value;
  if (!wakeTime) return;

  const parts = wakeTime.split(":");
  let wakeHour = parseInt(parts[0]);
  let wakeMin = parseInt(parts[1]);

  const results = $("sleepResults");
  results.innerHTML = "";

  // 90 dakikalık sirkadiyen uyku döngüleri (geriye doğru)
  // Optimal döngüler: 5 döngü (7.5 saat), 6 döngü (9 saat), 4 döngü (6 saat)
  const cycles = [6, 5, 4];
  
  cycles.forEach(c => {
    const totalMinutes = c * 90 + 14; // 14 dk uykuya dalma süresi
    let sleepTotalMins = (wakeHour * 60 + wakeMin - totalMinutes);
    if (sleepTotalMins < 0) {
      sleepTotalMins += 24 * 60; // bir önceki güne sar
    }

    const sleepHour = String(Math.floor(sleepTotalMins / 60) % 24).padStart(2, "0");
    const sleepMin = String(sleepTotalMins % 60).padStart(2, "0");

    const div = document.createElement("div");
    div.className = `sleep-option ${c === 5 ? "best" : ""}`;
    div.innerHTML = `
      <div>
        <strong>${c} Döngü (${c * 1.5} Saat Uyku)</strong>
        <p class="sub">${c === 5 ? "⭐ En ideal yüksek performans uyku süresi." : "Seçenek."}</p>
      </div>
      <div class="time">${sleepHour}:${sleepMin}</div>
    `;
    results.appendChild(div);
  });
  
  drawCircadianDial();
  playSound("success");
  showToast("🌙 Sirkadiyen uyku döngüleri hesaplandı.");
}

// ==========================================================================
// 11. BAŞLANGIÇ & INIT
// ==========================================================================
window.onload = () => {
  loadState();
  initNavigation();
  initKanbanEvents();
  updateProfileUI();
  
  // Feynman notlarını yükle
  $("feynmanNotes").value = S.feynmanNotes || "";
  
  renderDashboard();
  renderCircadianLevers();
  calculateSleepTimes(); // Bu fonksiyon içinde drawCircadianDial çağrılır
  
  setInterval(drawCircadianDial, 30000);
};
