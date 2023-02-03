<template>
   <div class="container">
    <header>
      <RouterLink to="/">Login</RouterLink>
    </header>

    <form class="cadastro-form">
      <h2>Cadastro</h2>
      <input type="text" />Nome <input type="tel" />Telefone
      <input type="text" />Foto <input type="email" />Email
    </form>
  </div>
</template>

<style>
.container{
  max-width: 1200px;
  margin: 0 auto;
  background: red;
}
.cadastro-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 300px;
  background: rgb(249, 247, 244);
}
.cadastro-form h2 {
  color: black;
}
.cadastro-form input {
  width: 230px;
  height: 30px;
  border-radius: 2px;
}

</style>
