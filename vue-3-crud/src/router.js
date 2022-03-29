import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/trainers",
    name: "get trainer",
    component: () => import("./components/TrainerList")
  },
  {
    path: "/trainers/:id",
    name: "update trainer",
    component: () => import("./components/EditTrainer")
  },
  {
    path: "/trainer",
    name: "add trainer",
    component: () => import("./components/AddTrainer")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;