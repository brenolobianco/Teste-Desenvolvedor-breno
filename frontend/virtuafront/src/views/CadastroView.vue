<template>
  <div>
    <header>
      <RouterLink class="btn-ircadastro" to="/">Login</RouterLink>
    </header>
    <div class="container">
    <form class="cadastro-form" method="POST" @submit="createUser">
      <h2>Cadastro</h2>
     
      <input type="text" placeholder="nome" v-model="nome" />Nome 
       <input placeholder="email" v-model="email" type="email" />Email
       <input placeholder="password" v-model="password" type="password" />password
      <input class="submit-btn" type="submit" value="cadastrar" >Cadastrar
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
  background: rgb(249, 247, 244)
}
.cadastro-form h2 {
  color: black;
}
.cadastro-form input {
  width: 320px;
  height: 50px;
  border-radius: 8px;
  font-size: 16px;
  padding: 15px;
}
.cadastro-form button{
  background: rgb(218, 138, 18);
  width: 120px;
  height: 50px;
  height: 29px;
  color: white;
  cursor: pointer;
}
header{
  height: 100px;
  
  
}
.btn-ircadastro{
font-size:18px;
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
  name: "Dashboard",
  data() {
    return {
      
    };
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
      console.log(dataJson)
      const req = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept":"application/json"},
        body: dataJson,
      });
      console.log
      const res = await req.json();
      console.log(res);

   
     },
  },
};
</script>

