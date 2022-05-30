<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="title text-start" style="font-weight: 600; font-size: 50px">
          {{ page.title }}
        </div>
        <br>
        <div class="time text-start">
          <span class="m-3" style="font-weight: 600"
            >Time Publish : {{ page.created_at }}</span
          >
        </div>
        <br>
        <div class="content text-start">
          {{ page.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const pages = ref();
const page = ref([]);
onMounted(async () => {
  try {
    let response = await axios.get("http://127.0.0.1:8000/api/pages");
    pages.value = response.data.pages;
  } catch (error) {
    console.error(error);
  }
});
onMounted(async () => {
  try {
    let response = await axios.get("http://127.0.0.1:8000/api/pages?id=" + route.params.id);
    page.value = response.data.pages;
  } catch (error) {
    console.error(error);
  }
});
</script>

<style scoped></style>
