import { createRouter, createWebHistory } from "vue-router";
import Todos from "./components/todos/Todos";
import Agenda from "./components/agenda/Agenda";
import Donasi from "./components/donasi/Donasi";
import Counter from "./components/Counter";
const routes = [
  { path: "/", component: Todos },
  { path: "/agenda", component: Agenda },
  { path: "/donasi", component: Donasi },
  { path: "/counter", component: Counter },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
