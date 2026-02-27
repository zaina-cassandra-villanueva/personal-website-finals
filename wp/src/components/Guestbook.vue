<template>
  <div :class="['app', dark ? 'dark' : 'light']">
    <header class="topbar">
      <div>
        <h1 class="title">Main Character Profile (WebProg)</h1>
        <p class="subtitle">Vue + Supabase Guestbook (GET + POST)</p>
      </div>

      <button class="btn ghost" @click="dark = !dark">
        {{ dark ? "🌙 Dark" : "☀️ Light" }}
      </button>
    </header>

    <main class="grid">
      <section class="card hero">
        <h2 class="name">Zaina Cassandra</h2>
        <p class="bio">Human in progress · IT Student · Creative Soul</p>

        <div class="stats">
          <div class="stat">
            <span class="label">INT</span>
            <span class="value">Problem-Solving</span>
            <span class="stars">★★★★☆</span>
          </div>
          <div class="stat">
            <span class="label">DEX</span>
            <span class="value">Multitasking</span>
            <span class="stars">★★★★★</span>
          </div>
          <div class="stat">
            <span class="label">CHA</span>
            <span class="value">Relatable Energy</span>
            <span class="stars">★★★★★</span>
          </div>
        </div>

        <p class="funny">“Stats may drop during finals week 😭”</p>
      </section>

      <section class="card">
        <h3 class="section-title">Favorites Loadout</h3>
        <p class="section-sub">Swipe? wala muna. Pero vibes? meron. ✨</p>

        <div class="pill-row">
          <span class="pill">Matcha</span>
          <span class="pill">Cats</span>
          <span class="pill">Street Food</span>
          <span class="pill">Late-night coding</span>
        </div>
      </section>

      <section class="card full">
        <Guestbook />
      </section>
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Guestbook from "/wp/src/components/Guestbook.vue";

const dark = ref(true);

const toasts = [
  "Welcome back. Your motivation is… loading…",
  "Reminder: hydration buff available 💧",
  "You have 99 problems and 98 are deadlines 😭",
];

onMounted(() => {
  alert(toasts[Math.floor(Math.random() * toasts.length)]);
});
</script>