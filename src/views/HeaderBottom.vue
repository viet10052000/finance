<template>
  <marquee>
    <div class="symbol" style="font-weight: bold">
      <span v-for="(item, index) in data" :key="index">
        <span>{{ item["01. symbol"] }}</span>
        <span style="margin: 0.25rem">{{ item["05. price"] }}</span>
        <span style="color: #2ecc71">{{ item["10. change percent"] }}</span>
        <span style="margin: 0.75rem"></span>
      </span>
      <span v-for="(item, index) in data" :key="index">
        <span>{{ item["01. symbol"] }}</span>
        <span style="margin: 0.25rem">{{ item["05. price"] }}</span>
        <span style="color: #2ecc71">{{ item["10. change percent"] }}</span>
        <span style="margin: 0.75rem"></span>
      </span>
      <span v-for="(item, index) in data" :key="index">
        <span>{{ item["01. symbol"] }}</span>
        <span style="margin: 0.25rem">{{ item["05. price"] }}</span>
        <span style="color: #2ecc71">{{ item["10. change percent"] }}</span>
        <span style="margin: 0.75rem"></span>
      </span>
    </div>
  </marquee>
  <hr />
  <div class="container">
    <div class="row">
      <div class="col-2 d-flex" v-for="(item, index) in data" :key="index">
        <div class="left ms-4" style="font-weight: bold">
          <div class="d-flex">
            <div class="symbol" style="margin: 0.25rem">
              {{ item["01. symbol"] }}
            </div>
            <div class="price">{{ item["05. price"] }}</div>
          </div>
          <div class="change" style="color: #2ecc71; font-weight: bold">
            {{ item["9. change"] }}({{ item["10. change percent"] }})
          </div>
        </div>
        <div class="right ms-4">
          <div class="image-right">
            <img src="@/assets/chart.jpeg" width="50" height="50" alt="" />
          </div>
        </div>
      </div>
      <div class="col-2 d-flex" v-for="(item, index) in data" :key="index">
        <div class="left ms-4" style="font-weight: bold">
          <div class="d-flex">
            <div class="symbol" style="margin: 0.25rem">
              {{ item["01. symbol"] }}
            </div>
            <div class="price">{{ item["05. price"] }}</div>
          </div>
          <div class="change" style="color: #2ecc71; font-weight: bold">
            {{ item["9. change"] }}({{ item["10. change percent"] }})
          </div>
        </div>
        <div class="right ms-4">
          <div class="image-right">
            <img src="@/assets/chart.jpeg" width="50" height="50" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  data: Object,
});
</script>

<style scoped></style>
