<template>
  <div class="container">
    <div class="row">
      <div class="text-start" style="font-weight: bold;font-size: 35px;margin: 1rem;">Summary</div>
      <div class="header text-start col-12">
        <span style="font-weight: bold; font-size: 20px"
          ><span style="font-size: 30px">IBM</span> 4158.24
          100.400<span style="color: rgb(46, 204, 113)"> (2.47%)</span></span
        >
      </div>
      <hr />
      <div class="col-6 info">
        <table class="table table-hover">
          <tbody>
            <tr>
              <td>Symbol</td>
              <td style="font-weight: bold">^GSPC</td>
            </tr>
            <tr>
              <td>Name</td>
              <td style="font-weight: bold">S&P 500</td>
            </tr>
            <tr>
              <td>Price</td>
              <td style="font-weight: bold">4158.24</td>
            </tr>
            <tr>
              <td>Change</td>
              <td style="font-weight: bold">100.40015</td>
            </tr>
            <tr>
              <td>Change %</td>
              <td style="font-weight: bold">2.4742262</td>
            </tr>
            <tr>
              <td>Market Cap</td>
              <td style="font-weight: bold">-</td>
            </tr>
            <tr>
              <td>Open</td>
              <td style="font-weight: bold">4077.43</td>
            </tr>
            <tr>
              <td>Volume</td>
              <td style="font-weight: bold">216,646,500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-6 chart">
        <LineChart :chartData="data" />
      </div>
      <div class="text-start" style="font-weight: bold;font-size: 35px;margin: 1rem;">Histories Data</div>
      <div class="col-12">
        <table class="table">
          <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Open</th>
            <th scope="col">Low</th>
            <th scope="col">High</th>
            <th scope="col">Close</th>
          </tr>
          </thead>
          <tbody>
           <tr>
             <td>Fri 27/05/2022</td>
             <td>4077.43</td>
             <td>4077.43</td>
             <td>4158.49</td>
             <td>4158.24</td>
           </tr>
           <tr>
             <td>Fri 27/05/2022</td>
             <td>4077.43</td>
             <td>4077.43</td>
             <td>4158.49</td>
             <td>4158.24</td>
           </tr>
           <tr>
             <td>Fri 27/05/2022</td>
             <td>4077.43</td>
             <td>4077.43</td>
             <td>4158.49</td>
             <td>4158.24</td>
           </tr>
           <tr>
             <td>Fri 27/05/2022</td>
             <td>4077.43</td>
             <td>4077.43</td>
             <td>4158.49</td>
             <td>4158.24</td>
           </tr>
           <tr>
             <td>Fri 27/05/2022</td>
             <td>4077.43</td>
             <td>4077.43</td>
             <td>4158.49</td>
             <td>4158.24</td>
           </tr>
           <tr>
             <td>Fri 27/05/2022</td>
             <td>4077.43</td>
             <td>4077.43</td>
             <td>4158.49</td>
             <td>4158.24</td>
           </tr>
           <tr>
             <td>Fri 27/05/2022</td>
             <td>4077.43</td>
             <td>4077.43</td>
             <td>4158.49</td>
             <td>4158.24</td>
           </tr>
           <tr>
             <td>Fri 27/05/2022</td>
             <td>4077.43</td>
             <td>4077.43</td>
             <td>4158.49</td>
             <td>4158.24</td>
           </tr>
           <tr>
             <td>Fri 27/05/2022</td>
             <td>4077.43</td>
             <td>4077.43</td>
             <td>4158.49</td>
             <td>4158.24</td>
           </tr>
           <tr>
             <td>Fri 27/05/2022</td>
             <td>4077.43</td>
             <td>4077.43</td>
             <td>4158.49</td>
             <td>4158.24</td>
           </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
import { LineChart } from 'vue-chart-3';
import axios from "axios";
import {onMounted, ref} from "vue";
const data1 = ref()
const data = {
  labels: [1,2,3,4,5,6,7,8,9,10,11,12],
  datasets: [{
    label: 'data',
    data: [65, 59, 80, 81, 56, 55, 40, 50, 60, 70, 68, 69],
    fill: true,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};
onMounted(async () => {
  try {
      const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=AAU4YUX6JIL4WO32`)
      console.log(response.data["Monthly Time Series"])
  } catch (error) {
    console.error(error);
  }
});
</script>
<style lang="scss">
td{
  font-weight: bold;
}
</style>
