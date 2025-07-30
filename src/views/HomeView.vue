<template>
  <div class="home">
    <h1>This Is Home Page</h1>
    <!-- <h2>My Name is {{ name }} - {{ LastName }}</h2> -->
    <!-- <p>bleain is {{ active }}</p> -->
    <!-- <p>object {{ object }}</p> -->
    <!-- <p>array is {{ array }}</p> -->
    <p>age is {{ age }}</p>
    <button @click="increAge">click</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
// const name = ref("basel");
// const LastName = ref("alqureapy");
// const active = ref(true);
// const object = ref({
//   name: "basel",
//   age: 25,
//   active: true,
// });
// const array = ref(["basel", "alqureapy", 25, true]);
const age = ref(25);
function increAge() {
  age.value++;
}
</script>
