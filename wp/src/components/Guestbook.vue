<template>
  <div class="card glow">
    <div style="padding:16px;">
      <div class="topbar" style="margin:0;">
        <div class="brand">
          <b>GUESTBOOK</b>
          <span>Leave a comment ✍️</span>
        </div>
        <span class="badge">💬 {{ items.length }} messages</span>
      </div>
 
      <p class="p" style="margin-top:6px;">Be nice… or at least be funny.</p>
      <div class="hr"></div>
 
      <!-- ✅ FORM (THIS IS THE PART YOU SAID NAWALA) -->
      <form @submit.prevent="submit">
        <input
          class="input"
          v-model="name"
          placeholder="Your name (required)"
          maxlength="40"
        />
        <div style="height:10px;"></div>
 
        <textarea
          class="input"
          v-model="message"
          placeholder="Your message (required)"
          maxlength="240"
        ></textarea>
 
        <div class="row" style="justify-content:space-between; margin-top:10px;">
          <span class="small">{{ message.length }}/240 · {{ status }}</span>
          <button class="btn" :disabled="loading">
            {{ loading ? "Summoning..." : "Post Comment" }}
          </button>
        </div>
      </form>
    </div>
 
    <div class="hr"></div>
 
    <!-- ✅ LIST -->
    <div class="list">
      <div v-if="fetching" class="small">Loading messages…</div>
      <div v-else-if="items.length === 0" class="small">
        No messages yet. Be the first (main character behavior).
      </div>
 
      <div v-for="it in items" :key="it.id" class="item fadeIn">
        <div style="flex:1;">
          <div style="font-weight:1000;">{{ it.name }}</div>
          <div class="p" style="margin-top:6px; color:rgba(255,255,255,.86);">
            {{ it.message }}
          </div>
          <div class="meta">
            <div class="dot"></div>
            <span>{{ formatDate(it.created_at) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../lib/supabase";
 
const name = ref("");
const message = ref("");
const items = ref([]);
const loading = ref(false);
const fetching = ref(true);
const status = ref("Ready.");
 
const funnyStatuses = [
  "Hydration check 💧",
  "Motivation: buffering…",
  "Powered by coffee ☕",
  "No bugs were harmed (yet).",
  "Manifesting full marks ✨",
];
 
function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
 
function formatDate(d) {
  try {
    return new Date(d).toLocaleString();
  } catch {
    return d;
  }
}
 
async function fetchMessages() {
  fetching.value = true;
  status.value = "Fetching guestbook…";
 
  const { data, error } = await supabase
    .from("guestbook")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(50);
 
  if (error) {
    status.value = "Error loading messages.";
    console.error(error);
  } else {
    items.value = data || [];
    status.value = rand(funnyStatuses);
  }
  fetching.value = false;
}
 
async function submit() {
  const n = name.value.trim();
  const m = message.value.trim();
  if (!n || !m) {
    status.value = "Name + message required bestie 😭";
    return;
  }
 
  loading.value = true;
  status.value = "Posting…";
 
  const { error } = await supabase.from("guestbook").insert({
    name: n,
    message: m,
  });
 
  loading.value = false;
 
  if (error) {
    status.value = "Post failed. Check RLS policies.";
    console.error(error);
    return;
  }
 
  name.value = "";
  message.value = "";
  status.value = "Posted! Slay ✅";
  await fetchMessages();
}
 
onMounted(fetchMessages);
</script>