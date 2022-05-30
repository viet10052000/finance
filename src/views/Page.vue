<template>
  <div class="container">
    <div class="row">
      <h5 style="font-weight: bold; font-size: 30px" class="text-start">
        All News
      </h5>
      <hr />
      <div class="col-12" v-for="(item, index) in pages" :key="index">
        <div>
          <div
            class="title text-start"
            style="font-weight: bold; font-size: 25px;"
          >
            <router-link :to="'/pages/' + item.id" style="text-decoration: none;color: black;cursor: pointer">
              {{ item.title }}
            </router-link>
          </div>
          <div class="content text-start d-flex">
            <img src="@/assets/new.png" alt="" />
            <span style="margin: 0.5rem">{{ item.content.slice(0, 500) }}</span>
          </div>
          <div class="time text-end">{{ item.created_at }}</div>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
const pages = ref();
onMounted(async () => {
  try {
    let response = await axios.get("http://127.0.0.1:8000/api/pages");
    pages.value = response.data.pages;
  } catch (error) {
    console.error(error);
  }
});
</script>
<style></style>
