<template>
  <div>
    <header>
      <RouterLink to="/cadastro">Cadastro</RouterLink>
    </header>

    <form class="login-form">
      <h2>Login</h2>
      <input type="email" placeholder="Digite seu Email" />Email 
      <input type="password" placeholder="Digite sua senha"/>Password
      
    </form>
  </div>
  <RouterLink to="/dashboard">Dashboard</RouterLink>
</template>

<style>
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 300px;
  background: rgb(249, 247, 244);
}
.login-form h2 {
  color: black;
}
.login-form input {
  width: 230px;
  height: 30px;
  border-radius: 2px;
}
</style>
