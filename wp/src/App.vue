<template>
  <div class="container">
    <div class="topbar">
      <div class="brand">
        <b>WEBPROG — MobProg Inspired</b>
        <span>Game Profile Website</span>
      </div>
      <div class="row">
        <span class="badge">✅ Vue + Supabase (GET + POST)</span>
        <button class="btn secondary" @click="showToastNow">Random Toast</button>
      </div>
    </div>

    <div class="grid">
      <MobprogProfile
        name="Zaina Cassandra"
        bio="Human in progress · IT Student · Creative Soul"
        :level="19"
        @toast="showToastNow"
      />

      <div class="card glow" style="padding:16px;">
        <div class="sectionTitle">Project Features</div>
        <div class="hr"></div>
        <div class="pills">
          <span class="pill">Responsive UI</span>
          <span class="pill">Main Character Profile</span>
          <span class="pill">RPG Popups</span>
          <span class="pill">Funny Toast</span>
          <span class="pill">Guestbook (Supabase)</span>
          <span class="pill">GET + POST</span>
        </div>
        <div class="hr"></div>
        <p class="p">
          This website mirrors my Mobile Programming app UI using web layout + RPG-like sections.
          Guestbook uses Supabase for saving and displaying comments.
        </p>
        <div class="hr"></div>
        <div class="small">
          If posting fails, check Supabase RLS policy for table <b>guestbook</b>.
        </div>
      </div>
    </div>

    <div style="height:16px;"></div>
    <Guestbook />

    <Toast
      :show="toast.show"
      :title="toast.title"
      :message="toast.message"
      :duration="toast.duration"
    />
  </div>
</template>

<script setup>
import { reactive } from "vue";
import Toast from "./components/Toast.vue";
import Guestbook from "./components/Guestbook.vue";
import MobprogProfile from "./components/MobprogProfile.vue";

const toast = reactive({
  show: false,
  title: "System Message",
  message: "",
  duration: 2800,
});

const toasts = [
  "Welcome back, Zai. Your motivation is… loading…",
  "Reminder: hydration buff available 💧",
  "You have 99 problems and 98 are deadlines 😭",
  "If this deploy works, you pass. (manifesting)",
  "Main character energy detected. Proceed. ✨",
];

function showToastNow(){
  toast.title = "System Message";
  toast.message = toasts[Math.floor(Math.random() * toasts.length)];
  toast.duration = 2800;

  toast.show = false;
  setTimeout(() => (toast.show = true), 10);
}

showToastNow();
</script>