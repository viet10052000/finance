<template>
  <div class="container news">
    <div class="row">
      <div class="col-8">
        <h5 style="font-weight: bold; font-size: 30px" class="text-start">
          Last News
        </h5>
        <hr />
        <div class="col-12" v-for="(item, index) in pages" :key="index">
          <div v-if="index < 6">
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
        <router-link to="/pages" class="pages-item">Xem thêm >></router-link>
      </div>
      <div class="col-4">
        <div class="col-12">
          <h5 style="font-weight: bold; font-size: 30px" class="text-start">
            <router-link to="/currency" style="text-decoration: none;color: black">Currencies</router-link>
          </h5>
          <hr />
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Currency</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>USD/JPY</td>
                <td style="color: #2ecc71;cursor: pointer;font-weight: bold">+0.01%</td>
              </tr>
              <tr>
                <td>GBP/USD</td>
                <td style="color: red;cursor: pointer;font-weight: bold">-0.01%</td>
              </tr>
              <tr>
                <td>USD/EUR</td>
                <td style="color: red;cursor: pointer;font-weight: bold">-0.01%</td>
              </tr>
              <tr>
                <td>AUD/USD</td>
                <td style="color: red;cursor: pointer;font-weight: bold">-0.00%</td>
              </tr>
              <tr>
                <td>CAD/JPY</td>
                <td style="color: #2ecc71;cursor: pointer;font-weight: bold">+0.01%</td>
              </tr>
              <tr>
                <td>CHF/JPY</td>
                <td style="color: #2ecc71;cursor: pointer;font-weight: bold">+0.01%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-12">
          <h5 style="font-weight: bold; font-size: 30px" class="text-start">
            <router-link to="/cryptocurrency" style="text-decoration: none;color: black">Cryptocurrency</router-link>
          </h5>
          <hr />
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Cryptocurrency</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TTT</td>
                <td style="color: red;cursor: pointer;font-weight: bold">-0.01%</td>
              </tr>
              <tr>
                <td>VBNB</td>
                <td style="color: red;cursor: pointer;font-weight: bold">-0.51%</td>
              </tr>
              <tr>
                <td>CHESS</td>
                <td style="color: red;cursor: pointer;font-weight: bold">-5.30%</td>
              </tr>
              <tr>
                <td>HNT</td>
                <td style="color: #2ecc71;cursor: pointer;font-weight: bold">+7.20%</td>
              </tr>
              <tr>
                <td>BHD</td>
                <td style="color: #2ecc71;cursor: pointer;font-weight: bold">+9.66%</td>
              </tr>
              <tr>
                <td>DAI</td>
                <td style="color: #2ecc71;cursor: pointer;font-weight: bold">+0.02%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-12">
          <h5 style="font-weight: bold; font-size: 30px" class="text-start">
            Most Searched
          </h5>
          <hr />
          <table class="table table-hover">
            <thead>
            <tr>
              <th>Currencies</th>
              <th>Exchange Rate</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>USD/JPY</td>
              <td>128.078</td>
            </tr>
            <tr>
              <td>USD/VND</td>
              <td>128.078</td>
            </tr>
            <tr>
              <td>USD/EUR</td>
              <td>128.078</td>
            </tr>
            <tr>
              <td>USD/SGP</td>
              <td>128.078</td>
            </tr>
            <tr>
              <td>USD/LAO</td>
              <td>128.078</td>
            </tr>
            <tr>
              <td>USD/CHINA</td>
              <td>128.078</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="col-12">
          <h5 style="font-weight: bold; font-size: 30px" class="text-start">
            Currency
          </h5>
          <hr />
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Currencies</th>
                <th>Exchange Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>USD/JPY</td>
                <td>128.078</td>
              </tr>
              <tr>
                <td>USD/VND</td>
                <td>128.078</td>
              </tr>
              <tr>
                <td>USD/EUR</td>
                <td>128.078</td>
              </tr>
              <tr>
                <td>USD/SGP</td>
                <td>128.078</td>
              </tr>
              <tr>
                <td>USD/LAO</td>
                <td>128.078</td>
              </tr>
              <tr>
                <td>USD/CHINA</td>
                <td>128.078</td>
              </tr>
            </tbody>
          </table>
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
const changePageContent = (content) => {
  return content.slice(0, 500);
};
</script>
<style lang="scss">
.pages-item {
  text-decoration: none;
  color: black;
  margin-left: 88%;
}
</style>
