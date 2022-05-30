<template>
  <HeaderBottom :data="data" />
  <hr />
  <div class="container news">
    <div class="row">
      <div class="col-8">
        <h5 style="font-weight: bold; font-size: 30px" class="text-start">
          Last News
        </h5>
        <hr />
        <div class="col-12" v-for="(item, index) in pages" :key="index">
          <div v-if="index < 8">
            <div
              class="title text-start"
              style="font-weight: bold; font-size: 25px"
            >
              <router-link
                :to="'/pages/' + item.id"
                style="text-decoration: none; color: black; cursor: pointer"
              >
                {{ item.title }}
              </router-link>
            </div>
            <div class="content text-start d-flex">
              <img src="@/assets/new.png" alt="" />
              <span class="m-3">{{ changePageContent(item.content) }}</span>
            </div>
            <div class="time text-end">{{ item.created_at }}</div>
            <hr />
          </div>
        </div>
        <router-link to="/pages" class="pages-item">xem thêm >></router-link>
      </div>
      <div class="col-4">
        <div class="col-12">
          <h5 style="font-weight: bold; font-size: 30px" class="text-start">
            Most Forex
          </h5>
          <hr />
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Larr</td>
                <td>Thornton</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderBottom from "@/views/HeaderBottom";
import { onMounted, ref } from "vue";
import axios from "axios";
const data = ref([]);
const data3 = ["IBM", "FB", "GOOG"];
const pages = ref();
onMounted(async () => {
  try {
    let response = await axios.get("http://127.0.0.1:8000/api/pages");
    pages.value = response.data.pages;
  } catch (error) {
    console.error(error);
  }
});
const changePageContent = (content) => {
  return content.slice(0, 500);
};
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
.pages-item {
  text-decoration: none;
  color: black;
}
</style>
