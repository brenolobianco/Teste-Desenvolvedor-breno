<template>
  <div>
    <header>
      <RouterLink to="/cadastro">Cadastrar</RouterLink>
    </header>
    <div class="container">
      <form class="login-form" method="POST"  @submit="login">
        <h2>Login</h2>
        <input type="email" placeholder="Digite seu Email"  v-model="email"/>Email
        <input type="password" placeholder="Digite sua senha"  v-model="password"/>Password
        <button type="submit" value="Login"></button>
      </form>
    </div>
  </div>
</template>

<style>
.header-box {
  width: 100vw;
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
  width: 400px;
  height: 300px;
  border-radius: 8px;
  background: rgb(249, 247, 244);
}
.login-form h2 {
  color: black;
  font-size: 25px;
  margin-bottom: 15px;
}
.submit-btn {
  width: 250px;
  height: 50px;
}
.login-form input {
  width: 320px;
  height: 50px;
  border-radius: 8px;
  padding: 15px;
  font-size: 16px;
}
.login-form button {
  background: rgb(218, 138, 18);
  width: 120px;
  height: 50px;
  height: 29px;
  color: white;
  cursor: pointer;
}
.btn-ircadastro {
  font-size: 18px;
  color: white;
  cursor: pointer;
  width: 600px;
  height: 10px;
  border: 1px solid black;
  background: rgb(218, 138, 18);
}
</style>
<script>
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
      console.log(dataJson);
      
        const req = await fetch("http://localhost:8000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: dataJson,
        });
        
        const res = await req.json();
        localStorage.setItem("@UserLogin:token",res.token);
        this.$router.replace(this.$route.query.redirect || '/dashboard')
        
        console.log("Login realizado");
       
    
    },
  },
};
</script>
