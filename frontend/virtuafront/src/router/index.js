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
// Verifica se o usuario esta logado, caso exista um token no loçalstorage, é direcionado para a dashboard.
// Caso nao exista, significa que o usuario nao esta logado, logo nao podera acessar a dashboard, sendo assim redirecinado para o login
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
