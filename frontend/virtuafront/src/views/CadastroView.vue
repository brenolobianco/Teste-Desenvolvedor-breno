<template>
  <div>
    <header>
      <RouterLink class="btn-irlogin" to="/">Login</RouterLink>
    </header>
    <div class="container">
      <form class="cadastro-form" method="POST" @submit="createUser">
        <h2>Cadastro</h2>

        <input type="text" placeholder="nome" v-model="name" />Nome
        <input placeholder="email" v-model="email" type="email" />Email
        <input
          placeholder="password"
          v-model="password"
          type="password"
        />password
        <button class="submit-btn" type="submit" value="cadastrar" > Cadastrar </button>
      </form>
    </div>
  </div>
</template>

<style>
.cadastro-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 450px;
  border-radius: 8px;
  background: rgb(249, 247, 244);
}
.cadastro-form h2 {
  color: black;
  margin-bottom: 40px;
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
  background: rgb(218, 138, 18);
  font-size: 19px;
  width: 120px;
  height: 50px;

  color: white;
  cursor: pointer;
 
}
header {
  height: 100px;
  justify-content: flex-end;
  
}
.btn-irlogin {
  background: rgb(218, 138, 18);
  font-size: 26px;
  width: 140px;
  height: 50px;
  
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items:center ;
}
</style>
<script>
export default {
  name: "Dashboard",
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
      console.log(dataJson);
      const req = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: dataJson,
      });
      const res = await req.json();
      this.$toast.success(`Cadastro realizado com sucesso`);
      this.$router.replace(this.$route.query.redirect || '/')
      console.log(res);
    },
  },
};
</script>
