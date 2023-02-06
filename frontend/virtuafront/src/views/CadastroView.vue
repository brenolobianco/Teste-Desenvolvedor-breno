<template>
  <div>
    <header>
      <RouterLink class="btn-irlogin" to="/">Login</RouterLink>
    </header>
    <div class="container">
      <form class="cadastro-form" method="POST" @submit="createUser">
        <h2>Cadastro</h2>
        <label><input type="text" placeholder="Nome" v-model="name" /></label>
        <label>
          <input placeholder="Email" v-model="email" type="email"
        /></label>
        <label>
          <input placeholder="Senha" v-model="password" type="password"
        /></label>
        <button type="submit" value="cadastrar">Cadastrar</button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Cadastro",
  data() {
    return {};
  },
  methods: {
    async createUser(e) {
      e.preventDefault();
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      const dataJson = JSON.stringify(data);
      axios
        .post(`http://localhost:8000/api/register`, dataJson, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          this.$toast.success(`Cadastro efetuado com sucesso`);
          this.$router.replace(this.$route.query.redirect || "/");
        })
        .catch(() => {
          this.$toast.error(
            `Cadastro não efetuado, verifique suas informaçoes`
          );
        });
    },
  },
};
</script>
<style>
.cadastro-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 420px;
  height: 520px;
  gap: 25px;
  border-radius: 8px;
  background: rgb(249, 247, 244);
}
.cadastro-form h2 {
  color: black;
  margin-bottom: 30px;
  font-size: 40px;
}
.cadastro-form input {
  width: 320px;
  height: 55px;
  border-radius: 8px;
  font-size: 19px;
  padding: 15px;
}
.cadastro-form button {
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
header {
  height: 100px;
  justify-content: flex-end;
}
.btn-irlogin {
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
</style>
