<template>
  <div>
    <header>
      <RouterLink class="btn-ircadastro" to="/cadastro">Cadastrar</RouterLink>
    </header>
    <div class="container">
      <form class="login-form" method="POST" @submit="login">
        <h2>Login</h2>
        <label>
          <input placeholder="Email" v-model="email" type="email"
        /></label>
        <label>
          <input placeholder="Senha" v-model="password" type="password"
        /></label>
        <button type="submit" value="Login">Logar</button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {
    async login(e) {
      e.preventDefault();
      const data = {
        email: this.email,
        password: this.password,
      };
      const dataJson = JSON.stringify(data);
      axios
        .post(`http://localhost:8000/api/login`, dataJson, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          localStorage.setItem("@UserToken", res.data.token);
          this.$toast.success(`Login com sucesso`);
          this.$router.replace(this.$route.query.redirect || "/dashboard");
        })
        .catch((error) => {
          this.$toast.error(`Login não efetuado, verifique suas informaçoes`);
        });
    },
  },
};
</script>
<style>
header {
  justify-content: flex-end;
  margin-right: 40px;
  height: 80px;
  display: flex;
}
.container {
  background: rgb(44, 36, 36);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 95vw;
  font-weight: normal;
  height: 100vh;
}
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 420px;
  height: 380px;
  gap: 25px;
  border-radius: 8px;
  background: rgb(249, 247, 244);
}
.login-form h2 {
  color: black;
  margin-bottom: 40px;
  font-size: 40px;
}
.login-form input {
  width: 320px;
  height: 55px;
  border-radius: 8px;
  padding: 15px;
  font-size: 19px;
}
.login-form button {
  border-radius: 8px;
  background: rgb(129, 85, 19);
  font-size: 26px;
  width: 150px;
  height: 50px;
  margin-top: 10px;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-ircadastro {
  font-size: 26px;
  color: white;
  cursor: pointer;
  width: 150px;
  margin-top: 10px;
  height: 50px;
  border-radius: 8px;
  border: 1px solid black;
  background: rgb(129, 85, 19);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
