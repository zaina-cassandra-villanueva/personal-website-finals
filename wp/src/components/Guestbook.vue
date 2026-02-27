<template>
  <div>
    <h3>Guestbook</h3>

    <form @submit.prevent="submit" class="form">
      <input
        v-model="name"
        type="text"
        placeholder="Your name"
        required
      />

      <textarea
        v-model="message"
        placeholder="Leave a message..."
        required
      ></textarea>

      <button type="submit" :disabled="loading">
        {{ loading ? "Posting..." : "Post Message" }}
      </button>
    </form>

    <div class="messages">
      <div v-if="loadingList">Loading messages...</div>

      <div v-for="m in items" :key="m.id" class="message">
        <strong>{{ m.name }}</strong>
        <span class="date">{{ formatDate(m.created_at) }}</span>
        <p>{{ m.message }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "/wp/src/lib/supabase";

const name = ref("");
const message = ref("");
const items = ref([]);
const loading = ref(false);
const loadingList = ref(false);

function formatDate(date) {
  return new Date(date).toLocaleString();
}

async function fetchMessages() {
  loadingList.value = true;

  const { data, error } = await supabase
    .from("guestbook")
    .select("*")
    .order("created_at", { ascending: false });

  if (!error) items.value = data;

  loadingList.value = false;
}

async function submit() {
  loading.value = true;

  const { error } = await supabase.from("guestbook").insert([
    {
      name: name.value.trim(),
      message: message.value.trim(),
    },
  ]);

  loading.value = false;

  if (!error) {
    name.value = "";
    message.value = "";
    fetchMessages();
  } else {
    alert(error.message);
  }
}

onMounted(fetchMessages);
</script>