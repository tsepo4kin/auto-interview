import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/interview",
    name: "Interview",
    component: () => import("../views/Interview.vue"),
  },
  {
    path: "/questionsList",
    name: "QuestionsList",
    component: () => import("../views/QuestionsList.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
