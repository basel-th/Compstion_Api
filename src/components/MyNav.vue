<template>
  <div class="nav">
    <ul>
      <li v-for="route in router.options.routes" :key="route.name">
        <router-link :to="route.path">{{ route.meta.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style scoped>
ul {
  background-color: #3d932e;
  color: white;
  list-style: none;
  padding: 10px 10px;
  margin: 0;
  display: flex;
  justify-content: center;
}
ul li a {
  color: white;
  padding: 10px;
  text-decoration: none;
}
</style>
