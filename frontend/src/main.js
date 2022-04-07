import {createApp} from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import store from "./store";
import {
    FontAwesomeIcon
} from "./plugins/font-awesome";

library.add(fas);

/* eslint-disable no-new */
import setupInterceptors from "./services/setupInterceptors";
import "./assets/css/style.css";
setupInterceptors(store);
createApp(App)
    .use(router)
    .use(store)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')