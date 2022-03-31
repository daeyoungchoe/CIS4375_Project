import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/trainers",
    name: "trainers",
    component: () => import("./components/TrainersList")
  },
  {
    path: "/trainers/:id",
    name: "trainer-details",
    component: () => import("./components/Trainer")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddTrainer")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;