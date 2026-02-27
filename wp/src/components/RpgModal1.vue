<template>
  <div class="backdrop" @click.self="$emit('close')">
    <div class="modal fadeIn">
      <div class="modalInner">
        <div class="modalHeader">
          <b>{{ title }}</b>
          <button class="btn secondary" @click="$emit('close')">CLOSE</button>
        </div>

        <div class="hr"></div>

        <!-- Square “image” placeholder (no pics needed) -->
        <div class="squareArt">
          <span>{{ artText }}</span>
        </div>

        <p class="modalDesc">{{ description }}</p>

        <div class="row" style="justify-content:flex-end; margin-top:12px;">
          <button class="btn" @click="$emit('close')">{{ actionText }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: "" },
  description: { type: String, default: "" },
  artText: { type: String, default: "LORE IMAGE (NO PIC MODE)" },
  actionText: { type: String, default: "OK" },
});
defineEmits(["close"]);
</script>