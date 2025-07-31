<template>
  <div class="home">
    <h1>This Is Home Page</h1>
    <!-- <h2>My Name is {{ name }} - {{ LastName }}</h2> -->
    <!-- <p>bleain is {{ active }}</p> -->
    <!-- <p>object {{ object }}</p> -->
    <!-- <p>array is {{ array }}</p> -->
    <!-- <p>age is {{ age }}</p> -->
    <!-- <button @click="increAge">click</button> -->
    <p ref="wlecE1">{{ UserWelcome }}</p>
    <p>{{ ageAfter5Years }}</p>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
// const name = ref("basel");
// const LastName = ref("alqureapy");
// const active = ref(true);
// const object = ref({
//   name: "basel",
//   age: 25,
//   active: true,
// });
// const array = ref(["basel", "alqureapy", 25, true]);
// function increAge() {
//   age.value++;
// }
const name = ref("Basel Ahmed");
const age = ref(25);

const wlecE1 = ref(null);

setTimeout(() => {
  console.log(wlecE1.value);
}, 2000);

const UserWelcome = computed(
  () => `Heollo ${name.value}, youre age is ${age.value}`
);

const ageAfter5Years = computed(() => {
  return `your age after 5 years will be ${age.value + 5}`;
});
</script>
