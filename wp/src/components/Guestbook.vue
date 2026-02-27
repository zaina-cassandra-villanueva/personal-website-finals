<template>
  <div class="card glow">
    <div style="padding:16px;">
      <div class="header">
        <div>
          <div class="sectionTitle">Guestbook</div>
          <div style="font-size:18px; font-weight:900;">Leave a comment ✍️</div>
          <p class="p">Be nice… or at least be funny.</p>
        </div>
        <span class="badge">💬 <span>{{ items.length }} messages</span></span>
      </div>

      <div class="hr"></div>

      <form @submit.prevent="submit">
        <div class="row">
          <input
            class="input"
            v-model="name"
            placeholder="Your name (required)"
            maxlength="40"
          />
        </div>
        <div style="height:10px;"></div>
        <textarea
          class="input"
          v-model="message"
          placeholder="Your message (required)"
          maxlength="240"
        ></textarea>

        <div class="row" style="justify-content:space-between; margin-top:10px;">
          <span class="small">
            {{ message.length }}/240 · {{ status }}
          </span>
          <button class="btn" :disabled="loading">
            {{ loading ? "Summoning..." : "Post Comment" }}
          </button>
        </div>
      </form>
    </div>

    <div class="hr"></div>

    <div class="list">
      <div v-if="fetching" class="small">Loading messages…</div>
      <div v-else-if="items.length === 0" class="small">
        No messages yet. Be the first (main character behavior).
      </div>

      <div v-for="it in items" :key="it.id" class="item fadeIn">
        <div style="flex:1;">
          <div style="font-weight:900;">
            {{ it.name }}
          </div>
          <div class="p" style="margin-top:6px; color:rgba(255,255,255,.86);">
            {{ it.message }}
          </div>
          <div class="meta">
            <div class="dot"></div>
            <span>{{ formatDate(it.created_at) }}</span>
          </div>
        </div>

        <!-- optional delete button (off by default) -->
        <!--
        <button class="btn secondary" @click="remove(it.id)">Delete</button>
        -->
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
  "Currently powered by coffee ☕",
  "No bugs were harmed (yet).",
  "This is your sign to submit early (jk).",
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
    status.value = "Post failed. Check Supabase RLS / policies.";
    console.error(error);
    return;
  }

  name.value = "";
  message.value = "";
  status.value = "Posted! Slay ✅";

  await fetchMessages();
}

// Optional delete (only if you enable + policy allows)
// async function remove(id) {
//   await supabase.from("guestbook").delete().eq("id", id);
//   await fetchMessages();
// }

onMounted(fetchMessages);
</script>