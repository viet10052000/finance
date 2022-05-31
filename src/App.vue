<template>
  <Header />
  <hr />
  <HeaderBottom :data="data" />
  <hr />
  <router-view />
  <hr />
  <Footer />
</template>
<script setup>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeaderBottom from "@/views/HeaderBottom";
import { onMounted, ref } from "vue";
import axios from "axios";
const data = ref([]);
const data3 = ["IBM", "FB", "GOOG"];
onMounted(async () => {
  try {
    for (let i = 0; i < data3.length; i++) {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${data3[i]}&apikey=AAU4YUX6JIL4WO32`
      );
      let data1 = response.data["Global Quote"];
      data.value.push(data1);
    }
  } catch (error) {
    console.error(error);
  }
});
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
