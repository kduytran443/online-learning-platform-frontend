import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUpView from "../views/SignUpView.vue";
import urlConstant from "@/constants/urlConstant";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "/",
      meta: { layout: "main-layout" },
      component: HomeView
    },
    {
      path: "/home",
      name: "home",
      meta: { layout: "main-layout" },
      component: HomeView
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue")
    },
    {
      path: urlConstant.SIGN_UP,
      name: "sign up",
      meta: { layout: "main-layout" },
      component: SignUpView
    }
  ]
});

export default router;
