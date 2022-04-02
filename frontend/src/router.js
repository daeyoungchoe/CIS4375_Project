import { createWebHistory, createRouter } from "vue-router";
import HomePage from "./components/HomePage.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
// lazy-loaded
const Profile = () => import("./components/Profile.vue");
const BoardAdmin = () => import("./components/BoardAdmin.vue");
const BoardModerator = () => import("./components/BoardModerator.vue");
const BoardUser = () => import("./components/BoardUser.vue");
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
  //Test User authenticate
  {
      path: "/home",
    component: HomePage,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/admin",
    name: "admin",
    // lazy-loaded
    component: BoardAdmin,
  },
  {
    path: "/mod",
    name: "moderator",
    // lazy-loaded
    component: BoardModerator,
  },
  {
    path: "/user",
    name: "user",
    // lazy-loaded
    component: BoardUser,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;