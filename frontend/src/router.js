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

  //trainer path
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

  //Client path
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
    name: "addClients",
    component: () => import("./components/AddClient"),
  },
  {
    path: "/addAppointment",
    name: "addAppointment",
    component: () => import("./components/AddAppointment"),
  },
  {
    path: "/appointments",
    alias: "/appointments",
    name: "appointments",
    component: () => import("./components/AppointmentList"),
  },
  {
    path: "/service",
    name: "service",
    component: () => import("./views/Service"),
  },
  //Feedback
  {
    path: "/addFeedback",
    name: "addFeedback",
    component: () => import("./components/AddFeedback"),
  },
  {
    path: "/feedbacks",
    alias: "/feedbacks",
    name: "feedbacks",
    component: () => import("./components/FeedbackList"),
  },
  {
    path: "/feedbacks/:id",
    name: "feedback-details",
    component: () => import("./components/Feedback"),
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