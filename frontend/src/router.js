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
    path: "/addTrainer",
    name: "addTrainer",
    component: () => import("./components/AddTrainer")
  }
  ,
  {
    path: "/addClient",
    name: "addClient",
    component: () => import("./components/AddClient")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;