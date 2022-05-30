import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import '@fortawesome/fontawesome-free'
library.add(faPhone);
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import App from './App.vue'
import router from './router'
import store from './store'
createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(store).use(router).mount('#app')
