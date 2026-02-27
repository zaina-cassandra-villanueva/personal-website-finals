<template>
  <div :class="['app', dark ? 'dark' : 'light']">
    <header class="topbar">
      <div>
        <h1>Personal Profile (WebProg)</h1>
        <p>Vue + Supabase Guestbook</p>
      </div>

      <button class="btn" @click="dark = !dark">
        {{ dark ? "🌙 Dark" : "☀️ Light" }}
      </button>
    </header>

    <main class="grid">
      <section class="card">
        <h2>Zaina Cassandra</h2>
        <p>Human in progress · IT Student · Creative Soul</p>

        <div class="stats">
          <p><strong>INT:</strong> Problem Solving ★★★★☆</p>
          <p><strong>DEX:</strong> Multitasking ★★★★★</p>
          <p><strong>CHA:</strong> Relatable Energy ★★★★★</p>
        </div>

        <p class="funny">Stats may drop during finals week 😭</p>
      </section>

      <section class="card full">
        <Guestbook />
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Guestbook from "./components/Guestbook.vue";

const dark = ref(true);
</script>