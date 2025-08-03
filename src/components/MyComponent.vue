<template>
  <dev class="comp">
    <h2>Thus is commpenet</h2>
    <h2>the name is {{ userName }}</h2>
    <h3>the Age is {{ userAge }}</h3>

    <button @click="sayHollew">click</button>
    <!-- <p>name is {{ props.userName }} , age is {{ props.userAge }}</p> -->
    <!-- <button @click="emits('handelCilck')">Emit Event</button> -->
  </dev>
</template>

<script setup>
import { inject } from "vue";
const userName = inject("name");
const userAge = inject("userage");
const sayHollew = inject("sayHollew");
// export default {
//   mounted() {
//     console.log("this router from MyComponent", this.$router);
//     console.log("this route from MyComponent", this.$route);
//   },
// };

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

// import { defineEmits } from "vue";

// const emits = defineEmits(["handelCilck"]);
</script>
