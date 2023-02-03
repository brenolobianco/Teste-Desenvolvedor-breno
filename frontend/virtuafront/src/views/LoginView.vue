<template>
  <div>
  
    <RouterLink class="btn-ircadastro" to="/cadastro">ir para Cadastro</RouterLink>
    <form class="login-form">
      <h2>Login</h2>
      
      <input type="email" placeholder="Digite seu Email" />Email 
      <input type="password" placeholder="Digite sua senha"/>Password
      <button class="submit-btn" type="submit" value="Login" ><RouterLink to="/dashboard">Login</RouterLink></button>
      
    </form>
  </div>
  
</template>

<style>
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background: rgb(249, 247, 244)
}
.login-form h2 {
  color: black;
}
.login-form input {
  width: 250px;
  height: 40px;
  border: 2px solid black;
}
.login-form button{
  background: rgb(218, 138, 18);
  width: 120px;
  height: 29px;
  color:black;
  cursor: pointer;
}
.btn-ircadastro{

color: white;
cursor: pointer;
}
</style>
