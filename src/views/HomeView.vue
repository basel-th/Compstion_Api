<template>
  <div class="home">
    <h1>This Is Home Page</h1>
    <h2>My Name is {{ name }} - {{ LastName }}</h2>
    <p>age is {{ age }}</p>
    <p>bleain is {{ active }}</p>
    <p>object {{ object }}</p>
    <p>array is {{ array }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const name = ref("basel");
const LastName = ref("alqureapy");
const age = ref(25);
const active = ref(true);
const object = ref({
  name: "basel",
  age: 25,
  active: true,
});
const array = ref(["basel", "alqureapy", 25, true]);
</script>
