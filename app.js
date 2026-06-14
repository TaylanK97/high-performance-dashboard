"use strict";

// ==========================================================================
// 1. STATİK BİLGİ VE EGZERSİZ VERİLERİ
// ==========================================================================
const DAILY_ROUTINE = [
  { id: "r_1", time: "06:00 - 06:30", title: "Sirkadiyen Ritim Uyanış", desc: "10 dk güneş ışığı, hidrasyon, esneme.", type: "sleep", xp: 10 },
  { id: "r_2", time: "06:30 - 08:00", title: "Deep Work: Pasif Gelir Geliştirme", desc: "Mikro SaaS / yan proje odaklı 90 dk çalışma.", type: "deepwork", xp: 30 },
  { id: "r_3", time: "08:00 - 08:30", title: "Duruş Düzeltme & Omurga Sağlığı", desc: "Biyomekanik egzersiz rutini (30 dk).", type: "posture", xp: 20 },
  { id: "r_4", time: "08:30 - 09:00", title: "Bilişsel Beslenme & Planlama", desc: "Düşük karbonhidratlı kahvaltı, hedeflerin gözden geçirilmesi.", type: "other", xp: 10 },
  { id: "r_5", time: "09:00 - 10:30", title: "Deep Work: AI & Prompt Mühendisliği", desc: "Yapay zeka araçları ve entegrasyon pratikleri (90 dk).", type: "learning", xp: 30 },
  { id: "r_6", time: "10:30 - 12:00", title: "Deep Work: Aktif Dil Öğrenimi", desc: "İngilizce kelime ve kalıp çalışmaları (90 dk).", type: "learning", xp: 30 },
  { id: "r_7", time: "12:00 - 13:00", title: "Fiziksel Antrenman (HIIT / Güç)", desc: "Duruş düzeltici esnemelerle güç idmanı.", type: "posture", xp: 20 },
  { id: "r_8", time: "13:00 - 14:00", title: "Beslenme & Zihinsel Dinlenme", desc: "Yemek ve hafif yürüyüş.", type: "other", xp: 10 },
  { id: "r_9", time: "14:00 - 17:30", title: "Hafif İşler & İletişim", desc: "E-postalar, sosyal hayat ve dopamin detoksu.", type: "other", xp: 15 },
  { id: "r_10", time: "17:30 - 18:30", title: "Gün Batımı Işığı & Sirkadiyen Ritim", desc: "Melatonin sentezi için gözlerin akşam ışığı alması.", type: "sleep", xp: 10 },
  { id: "r_11", time: "19:00 - 21:00", title: "Zihinsel Kapanış & Kitap Okuma", desc: "Ekransız dinlenme.", type: "other", xp: 10 },
  { id: "r_12", time: "21:00 - 22:00", title: "Matthew Walker Uyku Hijyeni", desc: "Mavi ışık yasağı, tavan ışıklarını kapatma.", type: "sleep", xp: 15 }
];

const EXERCISES = [
  {
    id: "ex_1",
    title: "Chin Tucks",
    target: "Hedef: Boyun Düzleşmesi & İleri Kafa Duruşu",
    desc: "Çenenizi geriye doğru çekerek boyun omurlarınızı hizalayın. Başınızı yukarı kaldırmadan çift çene oluşturmaya çalışın. Her tekrarda 5 saniye bekleyin.",
    sets: "3 Set x 10 Tekrar",
    time: 50,
    svg: `<svg viewBox="0 0 200 200" width="100%" height="100%">
      <!-- Omurga ve Baş Profili -->
      <path d="M 60 170 L 60 120 Q 60 90 90 90" fill="none" stroke="var(--tx-secondary)" stroke-width="6" />
      <g class="chin-tucks-head">
        <circle cx="100" cy="70" r="30" fill="var(--bg-card-hover)" stroke="var(--pu)" stroke-width="4" />
        <path d="M 100 100 Q 115 100 115 90 L 120 70" fill="none" stroke="var(--pu)" stroke-width="4" />
        <!-- Göz -->
        <circle cx="115" cy="65" r="2" fill="var(--cy)" />
      </g>
      <!-- Sabit Kılavuz Çizgisi -->
      <line x1="125" y1="30" x2="125" y2="130" stroke="rgba(255, 255, 255, 0.05)" stroke-dasharray="4 4" />
    </svg>`
  },
  {
    id: "ex_2",
    title: "Wall Angels",
    target: "Hedef: Üst Sırt / Omuz Mobilitesi & Kamburluk (Kyphosis)",
    desc: "Sırtınızı, kalçanızı ve dirseklerinizi duvara tamamen yaslayın. Kollarınızı duvardan ayırmadan yavaşça yukarı kaldırıp aşağı indirin.",
    sets: "3 Set x 12 Tekrar",
    time: 60,
    svg: `<svg viewBox="0 0 200 200" width="100%" height="100%">
      <!-- Duvar -->
      <line x1="80" y1="20" x2="80" y2="180" stroke="rgba(255, 255, 255, 0.1)" stroke-width="4" />
      <!-- Gövde -->
      <line x1="84" y1="80" x2="84" y2="150" stroke="var(--tx-secondary)" stroke-width="6" />
      <circle cx="84" cy="60" r="12" fill="var(--bg-card-hover)" stroke="var(--pu)" stroke-width="4" />
      <!-- Hareketli Kollar -->
      <g class="wall-angels-arms">
        <path d="M 84 80 Q 110 90 120 70 Q 130 50 110 30" fill="none" stroke="var(--cy)" stroke-width="4" />
      </g>
    </svg>`
  },
  {
    id: "ex_3",
    title: "Hip Flexor Lunge Stretch",
    target: "Hedef: Pelvik Hizalama (Anterior Pelvic Tilt)",
    desc: "Bir diziniz yerde olacak şekilde lunge pozisyonu alın. Kalçanızı öne doğru iterek arka bacağın ön kısmındaki (psoas) gerilmeyi hissedin. Omurganızı dik tutun.",
    sets: "Her Bacak İçin 30 Saniye Bekle",
    time: 30,
    svg: `<svg viewBox="0 0 200 200" width="100%" height="100%">
      <!-- Yer -->
      <line x1="20" y1="160" x2="180" y2="160" stroke="rgba(255, 255, 255, 0.1)" stroke-width="2" />
      <g class="lunge-stretch-body">
        <!-- Gövde ve Bacaklar -->
        <circle cx="90" cy="60" r="12" fill="var(--bg-card-hover)" stroke="var(--pu)" stroke-width="4" />
        <path d="M 90 72 L 90 110 L 130 160 M 90 110 L 60 120 L 60 160" fill="none" stroke="var(--tx-secondary)" stroke-width="5" />
      </g>
    </svg>`
  },
  {
    id: "ex_4",
    title: "Glute Bridges",
    target: "Hedef: Bel / Kalça Aktivasyonu (Pelvik Stabilizasyon)",
    desc: "Sırt üstü uzanın, dizlerinizi bükün. Kalça kaslarınızı sıkarak kalçanızı yukarı kaldırın. Vücudunuz omuzlardan dizlere kadar düz bir çizgi oluşturmalıdır.",
    sets: "3 Set x 15 Tekrar",
    time: 45,
    svg: `<svg viewBox="0 0 200 200" width="100%" height="100%">
      <!-- Yer -->
      <line x1="20" y1="150" x2="180" y2="150" stroke="rgba(255, 255, 255, 0.1)" stroke-width="2" />
      <g class="glute-bridge-hips">
        <!-- Yatan Gövde -->
        <path d="M 50 145 L 80 145 Q 120 120 150 145" fill="none" stroke="var(--tx-secondary)" stroke-width="5" />
        <circle cx="40" cy="140" r="10" fill="var(--bg-card-hover)" stroke="var(--pu)" stroke-width="4" />
      </g>
    </svg>`
  },
  {
    id: "ex_5",
    title: "Prone Cobra (YTWL)",
    target: "Hedef: Postür Düzeltici Kaslar & Omuz Stabilizasyonu",
    desc: "Yüz üstü uzanın. Göğsünüzü ve ellerinizi yerden kaldırın. Kürek kemiklerinizi birbirine doğru sıkarak kollarınızla sırasıyla Y, T, W ve L harfleri oluşturun.",
    sets: "3 Set x 10 Tekrar (Her pozisyonda 3 sn bekle)",
    time: 30,
    svg: `<svg viewBox="0 0 200 200" width="100%" height="100%">
      <line x1="20" y1="150" x2="180" y2="150" stroke="rgba(255, 255, 255, 0.1)" stroke-width="2" />
      <g class="prone-cobra-chest">
        <!-- Yüzüstü Gövde -->
        <path d="M 50 148 L 130 140 L 160 148" fill="none" stroke="var(--tx-secondary)" stroke-width="5" />
        <circle cx="140" cy="125" r="10" fill="var(--bg-card-hover)" stroke="var(--pu)" stroke-width="4" />
      </g>
    </svg>`
  }
];

const DOPAMIN_ITEMS = [
  { id: "d_1", text: "Sosyal Medya Kaydırma", desc: "Instagram, TikTok vb. ucuz dopamin tetikleyicileri.", penalty: 15 },
  { id: "d_2", text: "Şekerli Gıda & Fast Food", desc: "Basit şekerler ve insülin dalgalanmaları.", penalty: 10 },
  { id: "d_3", text: "Çalışırken Müzik Dinleme", desc: "Zorlu Deep Work seanslarında pasif uyaranlar.", penalty: 5 },
  { id: "d_4", text: "Porno & Mastürbasyon", desc: "Dopamin reseptörlerini tamamen körelten en büyük kaynak.", penalty: 30 },
  { id: "d_5", text: "Lüzumsuz Oyun / Video İzleme", desc: "Çalışma saatleri arasında YouTube/Netflix döngüsü.", penalty: 15 }
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
      if (S.totalXp === undefined) S.totalXp = 0;
      if (S.circadianChecks === undefined) S.circadianChecks = [];
    } catch (e) {
      console.warn("State bozuk, sıfırlanıyor.");
      resetState(currentToday);
    }
  } else {
    resetState(currentToday);
  }

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

    const div = document.createElement("div");
    div.className = `time-item ${isActive ? "active" : ""} ${isDone ? "done" : ""}`;
    div.onclick = () => toggleTask(r.id);
    
    div.innerHTML = `
      <div class="hour">${r.time}</div>
      <div class="desc-col">
        <strong>${esc(r.title)}</strong>
        <p class="sub" style="margin-top: 2px">${esc(r.desc)}</p>
      </div>
      <div class="chk-box">${isDone ? "✔" : ""}</div>
    `;
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
    const div = document.createElement("div");
    div.className = `dop-item ${isViolated ? "violated" : ""}`;
    
    div.innerHTML = `
      <div class="text-side">
        <strong>${esc(d.text)}</strong>
        <span class="sub">${esc(d.desc)} (Ceza: -${d.penalty} verimlilik)</span>
      </div>
      <div class="btn-group">
        ${isViolated 
          ? `<button class="btn green small" onclick="toggleDopamin('${d.id}')">Düzeltildi</button>`
          : `<button class="btn red small" onclick="toggleDopamin('${d.id}')">Çiğnedim</button>`
        }
      </div>
    `;
    dList.appendChild(div);
  });
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
  { id: "l_1", title: "Sabah Gün Işığı", time: "06:00 - 06:30", desc: "Uyanışta ilk 30 dk içinde en az 10-15 dk doğrudan güneş ışığı alımı.", xp: 10, badge: "sun" },
  { id: "l_2", title: "Derin Hidrasyon", time: "06:30", desc: "Sabah kalkınca mineralli (bir çimdik tuzlu) su tüketimi.", xp: 10, badge: "water" },
  { id: "l_3", title: "Kafein Geciktirme", time: "09:00", desc: "Kafein alımını uyanıştan 90-120 dakika sonraya erteleme.", xp: 10, badge: "coffee" },
  { id: "l_4", title: "Gün Batımı Işığı", time: "17:30 - 18:30", desc: "Akşam saatlerinde gün batımı ışığı alarak melatonini tetikleme.", xp: 10, badge: "evening" },
  { id: "l_5", title: "Mavi Işık Kısıtlaması", time: "21:00", desc: "Uykudan 2 saat önce tüm parlak tavan ışıklarını ve ekranları kapatma.", xp: 15, badge: "dark" }
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
    const div = document.createElement("div");
    div.className = `protocol-item ${isChecked ? "checked" : ""}`;
    div.onclick = () => toggleCircadianCheck(l.id);
    div.innerHTML = `
      <div class="badge ${l.badge}">${l.time}</div>
      <div style="flex-grow: 1;">
        <strong>${esc(l.title)} (+${l.xp} XP)</strong>
        <p class="sub">${esc(l.desc)}</p>
      </div>
      <div class="chk-box">${isChecked ? "✔" : ""}</div>
    `;
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
