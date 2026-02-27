<template>
  <div class="card glow" style="padding:16px;">
    <div class="topbar" style="margin:0;">
      <div class="brand">
        <b>MAIN PROFILE</b>
        <span>{{ name }}</span>
      </div>

      <div class="row">
        <span class="badge">✨ Level {{ level }} — College Arc</span>
        <button class="btn secondary" @click="$emit('toast')">Random Toast</button>
      </div>
    </div>

    <p class="p" style="margin-top:6px;">{{ bio }}</p>

    <div class="progressWrap" title="XP Progress (fake)">
      <div class="progress"></div>
    </div>
    <div class="small" style="margin-top:8px;">
      Next Level: College Arc+ (keep surviving 😭)
    </div>

    <div class="hr"></div>

    <div class="row">
      <span class="badge">📷 Favorites Gallery</span>
      <span class="small">Swipe to see your current aesthetic arc ✨</span>
    </div>

    <!-- simple fake carousel (no images needed) -->
    <div class="row" style="margin-top:10px; gap:10px;">
      <div class="tapCard" style="flex:1;" @click="openModal('Favorites: Matcha', 'Mood: calm but deadlines are loud.', 'MATCHA ARC', 'SLAY')">
        <div class="tapTop">
          <div class="tapTitle">Matcha</div>
          <span class="pill">favorite</span>
        </div>
        <div class="tapSub">Soft aesthetic. Strong caffeine.</div>
      </div>

      <div class="tapCard" style="flex:1;" @click="openModal('Favorites: Cats', 'Happiness buff activated.', 'CAT ENERGY', 'MEOW')">
        <div class="tapTop">
          <div class="tapTitle">I love cats!</div>
          <span class="pill">buff</span>
        </div>
        <div class="tapSub">+10 joy, -2 productivity (worth it)</div>
      </div>

      <div class="tapCard" style="flex:1;" @click="openModal('Favorites: Sinigang Hotdog', 'Questionable combo. Elite taste.', 'SINIGANG HOTDOG', 'CONFIRM')">
        <div class="tapTop">
          <div class="tapTitle">Sinigang na Hotdog</div>
          <span class="pill">chaos</span>
        </div>
        <div class="tapSub">Your taste is a plot twist.</div>
      </div>
    </div>

    <div class="hr"></div>

    <!-- Sections like MobProg -->
    <div class="grid" style="grid-template-columns: 1fr 1fr;">
      <div class="card" style="padding:14px; box-shadow:none;">
        <div class="sectionTitle">STATS</div>
        <div class="row" style="margin-top:10px;">
          <div class="kpi"><b>INT</b><span>Problem-Solving ★★★★☆</span></div>
          <div class="kpi"><b>DEX</b><span>Multitasking ★★★★★</span></div>
          <div class="kpi"><b>CHA</b><span>Relatable Energy ★★★★★</span></div>
          <div class="kpi"><b>STR</b><span>Consistency ★★★☆☆</span></div>
        </div>
        <div class="small" style="margin-top:10px;">Stats may drop during finals week 😭</div>
      </div>

      <div class="card" style="padding:14px; box-shadow:none;">
        <div class="sectionTitle">BUFFS</div>
        <div class="row" style="margin-top:10px;">
          <span class="pill">Coffee Boost ☕ (+10 Focus)</span>
          <span class="pill">Deadline Pressure ⏳ (+5 Speed)</span>
          <span class="pill">Creative Rush 🎨 (+7 CHA)</span>
          <span class="pill">Hydration 💧 (available)</span>
        </div>
      </div>
    </div>

    <div class="hr"></div>

    <div class="quickGrid">
      <!-- Skills -->
      <div class="tapCard" @click="openModal('Flutter UI Tinkerer', 'Faced 99 errors. Fixed 3. Still iconic.', 'UI TINKERER', 'EQUIP (jk)')">
        <div class="tapTop">
          <div class="tapTitle">SKILLS</div>
          <span class="badge">tap</span>
        </div>
        <div class="tapSub">Flutter UI Tinkerer · Brand Visionary · Lab Survivor</div>
      </div>

      <!-- Inventory -->
      <div class="tapCard" @click="openModal('Laptop of Academic Suffering', 'Runs on hope, RAM, and panic. Fan speed = emotional state.', 'LAPTOP ITEM', 'OK')">
        <div class="tapTop">
          <div class="tapTitle">INVENTORY</div>
          <span class="badge">tap</span>
        </div>
        <div class="tapSub">Laptop · Coffee + Sweet Treats · Street Food · Gaming</div>
      </div>

      <!-- Quests -->
      <div class="tapCard" @click="openModal('Finals Dungeon', 'Boss fight: deadlines. Reward: survival + character development.', 'QUEST LORE', 'ACCEPT 😈')">
        <div class="tapTop">
          <div class="tapTitle">QUESTS</div>
          <span class="badge">tap</span>
        </div>
        <div class="tapSub">Finals Dungeon · IT Ascension · Hustler’s Path</div>
      </div>

      <!-- Achievements -->
      <div class="tapCard" @click="openModal('Deadline Demon', 'You submit at 11:58 PM with 2% battery. Legendary.', 'BADGE', 'FLEX 💅')">
        <div class="tapTop">
          <div class="tapTitle">ACHIEVEMENTS</div>
          <span class="badge">tap</span>
        </div>
        <div class="tapSub">Flutter Fighter · Deadline Demon · Crea-Tech Hybrid</div>
      </div>
    </div>

    <RpgModal
      v-if="modal.open"
      :title="modal.title"
      :description="modal.description"
      :artText="modal.artText"
      :actionText="modal.actionText"
      @close="modal.open=false"
    />
  </div>
</template>

<script setup>
import { reactive } from "vue";
import RpgModal from "./RpgModal.vue";

defineProps({
  name: { type: String, default: "Zaina Cassandra" },
  bio: { type: String, default: "Human in progress · IT Student · Creative Soul" },
  level: { type: Number, default: 19 },
});
defineEmits(["toast"]);

const modal = reactive({
  open: false,
  title: "",
  description: "",
  artText: "",
  actionText: "OK",
});

function openModal(title, description, artText, actionText="OK"){
  modal.open = true;
  modal.title = title;
  modal.description = description;
  modal.artText = artText;
  modal.actionText = actionText;
}
</script>