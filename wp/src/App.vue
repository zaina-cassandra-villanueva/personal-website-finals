<template>
  <div class="container">
    <div class="header" style="margin-bottom:14px;">
      <div class="badge">🟣 <span>WEBPROG Finals · Vue + Supabase</span></div>
      <a class="badge" href="#" @click.prevent="showToastNow">
        🎭 <span>Random Toast</span>
      </a>
    </div>

    <div class="grid">
      <ProfileCard
        name="Zaina Cassandra"
        bio="Human in progress · IT Student · Creative Soul"
        role="BSIT Student"
        build="Main Character Build"
        arc="Finals Survival Mode 😭"
      />

      <div class="card glow" style="padding:16px;">
        <div class="sectionTitle">About this project</div>
        <div style="font-size:18px; font-weight:900; margin-top:6px;">Features</div>
        <div class="hr"></div>

        <div class="row" style="flex-direction:column; align-items:flex-start; gap:8px;">
          <div class="badge">✅ GET: Fetch guestbook messages</div>
          <div class="badge">✅ POST: Add new guestbook message</div>
          <div class="badge">✅ Responsive UI (mobile + desktop)</div>
          <div class="badge">✅ Supabase connected using env variables</div>
          <div class="badge">✅ Funny microcopy for engagement</div>
        </div>

        <div class="hr"></div>

        <div class="small">
          Tip: If insert/select fails, check Supabase RLS policy for table <b>guestbook</b>.
        </div>
      </div>
    </div>

    <div style="height:18px;"></div>

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
import ProfileCard from "./components/ProfileCard.vue";
import Guestbook from "./components/Guestbook.vue";
import Toast from "./components/Toast.vue";

const toast = reactive({
  show: false,
  title: "Welcome back",
  message: "",
  duration: 2800,
});

const toasts = [
  "Welcome back, Zai. Your motivation is… loading…",
  "Reminder: hydration buff available 💧",
  "You have 99 problems and 98 are deadlines 😭",
  "If this site loads, you pass. (manifesting)",
  "Vue is cute, but deadlines are cuter… NOT 😭",
];

function showToastNow() {
  toast.title = "System Message";
  toast.message = toasts[Math.floor(Math.random() * toasts.length)];
  toast.duration = 2800;

  // trigger
  toast.show = false;
  setTimeout(() => (toast.show = true), 10);
}

// Auto toast once on load
showToastNow();
</script>