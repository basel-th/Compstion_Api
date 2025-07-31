<template>
  <dev class="comp">
    <h2>Thus is commpenet</h2>
    <!-- <p>name is {{ props.userName }} , age is {{ props.userAge }}</p> -->
    <button @click="emits('handelCilck')">Emit Event</button>
  </dev>
</template>

<script setup>
//import { defineProps } from "vue";
// const props = defineProps({
//   userName: {
//     type: String,
//     required: true,
//   },
//   userAge: {
//     type: Number,
//     required: true,
//   },
// });

import { defineEmits } from "vue";

const emits = defineEmits(["handelCilck"]);
</script>
