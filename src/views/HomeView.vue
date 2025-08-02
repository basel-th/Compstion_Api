<template>
  <div class="home">
    <h1>This Is Home Page</h1>
    <p>the counter is {{ counter }}</p>
    <button @click="counter++">incress</button>
    <button @click="myArr.push(counter)">Push Counter Value</button>
    <!-- <p>counter is {{ counter }}</p>
    <button @click="increase">increase</button>
    <button @click="decrease">decrease</button> -->
    <!-- <h1 v-colorize="'red'">This Is Home Page</h1>
    <p v-colorize="'red'">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ullam
      error, eos nemo inventore minima ab et voluptas! Quasi harum consectetur
      dolorem minima mollitia quas eos culpa aut nulla ipsam.
    </p> -->
    <!-- <h2>My Name is {{ name }} - {{ LastName }}</h2> -->
    <!-- <p>bleain is {{ active }}</p> -->
    <!-- <p>object {{ object }}</p> -->
    <!-- <p>array is {{ array }}</p> -->
    <!-- <p>age is {{ age }}</p> -->
    <!-- <button @click="increAge">click</button> -->
    <!-- <p>{{ UserWelcome }}</p>
    <p>{{ ageAfter5Years }}</p> -->
    <!-- <the-comp @handel-cilck="excuteFunction"></the-comp> -->
    <!-- <the-comp></the-comp> -->
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const counter = ref(0);
const myArr = ref([]);

// watch

watch(
  () => counter.value,
  (newvel, oldvel) => {
    console.log(oldvel);
    console.log(newvel);
  }
);

watch(
  () => myArr.value,
  (newvel) => {
    console.log(newvel);
  },
  {
    deep: true,
  }
);

// import counterFunction from "@/mixins/conter";
// const { counter, increase, decrease } = counterFunction();
// const vColorize = {
//   mounted: (el, data) => {
//     el.style.color = data.value;
//   },
// };
// import { ref } from "vue";
// import TheComp from "@/components/MyComponent.vue";
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
// const name = ref("Basel Ahmed");
// const age = ref(25);

// const UserWelcome = computed(
//   () => `Heollo ${name.value}, youre age is ${age.value}`
// );

// const ageAfter5Years = computed(() => {
//   return `your age after 5 years will be ${age.value + 5}`;
// });
// const excuteFunction = () => {
//   console.log("Exuected Function");
// };
// import { useRouter, useRoute } from "vue-router";

// const router = useRouter();
// const route = useRoute();
// console.log("this router from HomeView", router.push);
// console.log("this route from HomeView", route.name);
</script>
