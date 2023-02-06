import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import CadastroView from "../views/CadastroView.vue";
import DashboardView from "../views/DashboardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
      meta: {
        isAuth: false,
      },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
      meta: {
        isAuth: true,
      },
    },
    {
      path: "/cadastro",
      name: "cadastro",
      component: CadastroView,
      meta: {
        isAuth: false,
      },
    },
  ],
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.isAuth)) {
    const user = localStorage.getItem("@UserToken");

    if (!user) {
      next("/");
    }
  }
  next();
});

export default router;
