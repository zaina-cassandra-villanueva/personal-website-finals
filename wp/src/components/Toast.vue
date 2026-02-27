<template>
  <div class="toastWrap" v-if="open">
    <div class="toast fadeIn">
      <div>
        <b>{{ title }}</b>
        <div><span>{{ message }}</span></div>
      </div>
      <button class="btn secondary" @click="open=false">OK</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";

const props = defineProps({
  title: { type: String, default: "Heads up" },
  message: { type: String, default: "" },
  show: { type: Boolean, default: false },
  duration: { type: Number, default: 2800 },
});

const open = ref(false);

watchEffect(() => {
  if (props.show) {
    open.value = true;
    setTimeout(() => (open.value = false), props.duration);
  }
});
</script>