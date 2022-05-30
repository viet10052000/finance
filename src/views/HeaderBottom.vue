<template>
  <div class="container">
    <div class="row">
      <div class="col-2 d-flex">
        <div class="left ms-4" style="font-weight: bold">
          <div class="d-flex">
            <div class="symbol" style="margin: 0.25rem">Symbol</div>
            <div class="price">Price</div>
          </div>
          <div class="change" style="color: #2ecc71;font-weight: bold">100(10%)</div>
        </div>
        <div class="right ms-4">
          <div class="image-right">
            <img src="@/assets/chart.jpeg" width="50" height="50" alt="">
          </div>
        </div>
      </div>
      <div class="col-2 d-flex">
        <div class="left ms-4" style="font-weight: bold">
          <div class="d-flex">
            <div class="symbol" style="margin: 0.25rem">Symbol</div>
            <div class="price">Price</div>
          </div>
          <div class="change" style="color: #2ecc71;font-weight: bold">100(10%)</div>
        </div>
        <div class="right ms-4">
          <div class="image-right">
            <img src="@/assets/chart.jpeg" width="50" height="50" alt="">
          </div>
        </div>
      </div>
      <div class="col-2 d-flex">
        <div class="left ms-4" style="font-weight: bold">
          <div class="d-flex">
            <div class="symbol" style="margin: 0.25rem">Symbol</div>
            <div class="price">Price</div>
          </div>
          <div class="change" style="color: #2ecc71;font-weight: bold">100(10%)</div>
        </div>
        <div class="right ms-4">
          <div class="image-right">
            <img src="@/assets/chart.jpeg" width="50" height="50" alt="">
          </div>
        </div>
      </div>
      <div class="col-2 d-flex">
        <div class="left ms-4" style="font-weight: bold">
          <div class="d-flex">
            <div class="symbol" style="margin: 0.25rem">Symbol</div>
            <div class="price">Price</div>
          </div>
          <div class="change" style="color: #2ecc71;font-weight: bold">100(10%)</div>
        </div>
        <div class="right ms-4">
          <div class="image-right">
            <img src="@/assets/chart.jpeg" width="50" height="50" alt="">
          </div>
        </div>
      </div>
      <div class="col-2 d-flex">
        <div class="left ms-4" style="font-weight: bold">
          <div class="d-flex">
            <div class="symbol" style="margin: 0.25rem">Symbol</div>
            <div class="price">Price</div>
          </div>
          <div class="change" style="color: #2ecc71;font-weight: bold">100(10%)</div>
        </div>
        <div class="right ms-4">
          <div class="image-right">
            <img src="@/assets/chart.jpeg" width="50" height="50" alt="">
          </div>
        </div>
      </div>
      <div class="col-2 d-flex">
        <div class="left ms-4" style="font-weight: bold">
          <div class="d-flex">
            <div class="symbol" style="margin: 0.25rem">Symbol</div>
            <div class="price">Price</div>
          </div>
          <div class="change" style="color: #2ecc71;font-weight: bold">100(10%)</div>
        </div>
        <div class="right ms-4">
          <div class="image-right">
            <img src="@/assets/chart.jpeg" width="50" height="50" alt="">
          </div>
        </div>
      </div>
<!--      <div class="col-2 d-flex" v-for="(item,index) in data" key="index">-->
<!--          <div class="left ms-4" style="font-weight: bold">-->
<!--            <div class="d-flex">-->
<!--              <div class="symbol" style="margin: 0.25rem">Symbol</div>-->
<!--              <div class="price">Price</div>-->
<!--            </div>-->
<!--            <div class="change" style="color: #2ecc71;font-weight: bold">100(10%)</div>-->
<!--          </div>-->
<!--          <div class="right ms-4">-->
<!--            <div class="image-right">-->
<!--              <img src="@/assets/chart.jpeg" width="50" height="50" alt="">-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  data : Object
})
</script>

<style scoped>

</style>