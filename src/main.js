import { createApp } from "vue";
import App from "./App.vue";
import "tailwindcss/tailwind.css";
import store from "./store";
import router from "./router.js";

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
