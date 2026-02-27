<template>
  <div :class="['app', dark ? 'dark' : 'light']">
    <header class="topbar">
      <div>
        <h1 class="title">Main Character Profile</h1>
        <p class="subtitle">WebProg Edition (Vue + Supabase)</p>
      </div>

      <button class="btn ghost" @click="toggleTheme">
        {{ dark ? "🌙 Dark" : "☀️ Light" }}
      </button>
    </header>

    <main class="grid">
      <section class="card hero">
        <div class="hero-bg"></div>

        <div class="hero-content">
          <img class="avatar" src="/avatar.jpg" alt="avatar" />

          <div class="hero-text">
            <h2 class="name">Zaina Cassandra</h2>
            <p class="bio">Human in progress · IT Student · Creative Soul</p>

            <div class="xp">
              <div class="xp-head">
                <span>XP Progress</span>
                <span>49%</span>
              </div>
              <div class="bar">
                <div class="fill" style="width:49%"></div>
              </div>
              <p class="hint">Next Level: College Arc+ (keep surviving 😭)</p>
            </div>
          </div>
        </div>
      </section>

      <section class="card">
        <h3 class="section-title">Favorites Gallery</h3>
        <p class="section-sub">Swipe to see your current aesthetic arc ✨</p>

        <div class="gallery">
          <div class="tile">
            <img src="/fav1.jpg" alt="fav1" />
            <span class="cap">Matcha</span>
          </div>
          <div class="tile">
            <img src="/fav2.jpg" alt="fav2" />
            <span class="cap">I love cats!</span>
          </div>
          <div class="tile">
            <img src="/fav3.jpg" alt="fav3" />
            <span class="cap">Sinigang na Hotdog</span>
          </div>
        </div>
      </section>

      <section class="card">
        <h3 class="section-title">Skills</h3>
        <p class="section-sub">Tap to inspect 👀</p>

        <div class="chips">
          <button class="chip" @click="openPop('Flutter UI Tinkerer')">🎨 Flutter UI Tinkerer</button>
          <button class="chip" @click="openPop('Brand Visionary')">👁️ Brand Visionary</button>
          <button class="chip" @click="openPop('Lab Survivor')">🐛 Lab Survivor</button>
        </div>
      </section>

      <section class="card full">
        <Guestbook :dark="dark" />
      </section>
    </main>

    <!-- RPG Modal -->
    <div v-if="modal.open" class="modal-backdrop" @click.self="modal.open=false">
      <div class="modal">
        <div class="modal-img">
          <img :src="modal.img" alt="modal" />
        </div>
        <h3 class="modal-title">{{ modal.title }}</h3>
        <p class="modal-desc">{{ modal.desc }}</p>
        <button class="btn" @click="modal.open=false">CLOSE</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import Guestbook from "./components/Guestbook.vue";

const dark = ref(true);
const toggleTheme = () => (dark.value = !dark.value);

const modal = reactive({
  open: false,
  title: "",
  desc: "",
  img: "",
});

const popData = {
  "Flutter UI Tinkerer": {
    img: "/skill_flutter.jpg",
    desc: "Faced 99 errors, fixed 3, cried 1 time. Still a win.",
  },
  "Brand Visionary": {
    img: "/skill_brand.jpg",
    desc: "You see the vibe before it exists. Brand lore unlocked.",
  },
  "Lab Survivor": {
    img: "/skill_lab.jpg",
    desc: "You’ve fought bugs, configs, and timeouts… and still passed.",
  },
};

function openPop(key) {
  const d = popData[key];
  if (!d) return;
  modal.title = key;
  modal.desc = d.desc;
  modal.img = d.img;
  modal.open = true;
}

const toasts = [
  "Welcome back, Zai. Your motivation is… loading…",
  "Reminder: hydration buff available 💧",
  "You have 99 problems and 98 are deadlines 😭",
];

onMounted(() => {
  // simple funny toast
  alert(toasts[Math.floor(Math.random() * toasts.length)]);
});
</script>