import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUpView from "../views/SignUpView.vue";
import urlConstant from "@/constants/urlConstant";
import ResendMailConfirmView from "@/views/ResendMailConfirmView.vue";
import LoginView from "@/views/LoginView.vue";
import CategoryView from "@/views/CategoryView.vue";

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
      name: "sign-up",
      meta: { layout: "main-layout" },
      component: SignUpView
    },
    {
      path: urlConstant.RESEND_REGISTRATION_CONFIRM,
      name: "resend-registration-confrm",
      meta: { layout: "main-layout" },
      component: ResendMailConfirmView
    },
    {
      path: urlConstant.LOGIN_URL,
      name: "login",
      meta: { layout: "main-layout" },
      component: LoginView
    },
    {
      path: urlConstant.CATEGORY_URL,
      name: "category",
      meta: { layout: "main-layout" },
      component: CategoryView
    }
  ]
});

export default router;
