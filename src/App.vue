<template>
  <Header />
  <hr />
  <router-view />
  <hr />
  <Footer />
</template>
<script setup>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
