<template>
  <template v-if="$route.name !== 'login'">
    <header class="header">
      <NavBar />
    </header>
    <TheLayout>
      <router-view></router-view>
    </TheLayout>
  </template>
  <template v-else>
    <router-view></router-view>
  </template>
  <footer
    class="footer"
    :class="{ inside: $route.name === 'login' }"
  >
    Copyright © 2022 lrhhz<br><span>Built with Vue3.2</span>
  </footer>
</template>

<script setup>
import "./assets/base.css";
import NavBar from "./components/NavBar.vue";
import TheLayout from "./components/TheLayout.vue";
</script>

<!-- App.vue，注意 style 为 scoped -->
<style scoped>
.header {
  height: 80px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
}

.footer {
  margin-top: 50px;
  border-top: 1px #dcdcdc solid;
  text-align: center;
  padding: 38px 0;
  color: #828282;
  font-size: 18px;
}

.footer span {
  font-size: 14px;
}

.footer.inside {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
