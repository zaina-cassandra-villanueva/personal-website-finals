<template>
  <div class="card glow" style="padding:16px;">
    <div class="header">
      <div>
        <div class="sectionTitle">Soft Launch: Main Character</div>
        <div class="h1">{{ name }}</div>
        <p class="p">{{ bio }}</p>
      </div>
      <div class="badge">
        ✨ <span>Stats may drop during finals week</span>
      </div>
    </div>

    <div class="hr"></div>

    <div class="row">
      <div class="kpi">
        <b>Role</b>
        <span>{{ role }}</span>
      </div>
      <div class="kpi">
        <b>Build</b>
        <span>{{ build }}</span>
      </div>
      <div class="kpi">
        <b>Current Arc</b>
        <span>{{ arc }}</span>
      </div>
    </div>

    <div class="hr"></div>

    <div class="row">
      <span class="pill">Vue.js</span>
      <span class="pill">Supabase</span>
      <span class="pill">GET + POST</span>
      <span class="pill">Responsive</span>
      <span class="pill">Guestbook</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: { type: String, default: "Zaina Cassandra" },
  bio: { type: String, default: "Human in progress · IT Student · Creative Soul" },
  role: { type: String, default: "IT Student / Developer" },
  build: { type: String, default: "Creative-Technical Hybrid" },
  arc: { type: String, default: "Deadline Survival Mode 😭" },
});
</script>