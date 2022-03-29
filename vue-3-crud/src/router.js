import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/trainerlist",
    name: "get trainer",
    component: () => import("./components/TrainerList")
  },
  {
    path: "/edittrainers/:id",
    name: "update trainer",
    component: () => import("./components/EditTrainer")
  },
  {
    path: "/addtrainer",
    name: "add trainer",
    component: () => import("./components/AddTrainer")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;