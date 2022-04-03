import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("./views/Home"),
  },
  {
    path: "/trainers",
    alias: "/trainers",
    name: "trainers",
    component: () => import("./components/TrainersList"),
  },
  {
    path: "/trainers/:id",
    name: "trainer-details",
    component: () => import("./components/Trainer"),
  },
  {
    path: "/addTrainer",
    name: "addTrainer",
    component: () => import("./components/AddTrainer"),
  },
  {
    path: "/clients",
    alias: "/clients",
    name: "clients",
    component: () => import("./components/ClientsList"),
  },
  {
    path: "/clients/:id",
    name: "client-details",
    component: () => import("./components/Client"),
  },
  {
    path: "/addClient",
    name: "Register",
    component: () => import("./components/AddClient"),
  },
  {
    path: "/service",
    name: "service",
    component: () => import("./views/Service"),
  },
  {
    path: "/addLogin",
    name: "addLogin",
    component: () => import("./components/AddLogin"),
  },
  {
    path: "/addAppointment",
    name: "addAppointment",
    component: () => import("./components/AddAppointment"),
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;