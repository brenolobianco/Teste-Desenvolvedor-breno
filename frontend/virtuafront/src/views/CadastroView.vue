<template>
  <div>
    <header>
      <RouterLink to="/">Login</RouterLink>
    </header>

    <form class="cadastro-form">
      <h2>Cadastro</h2>
      <RouterLink class="btn-ircadastro" to="/">ir para Cadastro</RouterLink>
      <input type="text" placeholder="nome" />Nome <input placeholder="email" type="tel" />Telefone
      <input type="text" placeholder="foto" />Foto <input placeholder="email" type="email" />Email
      <button class="submit-btn" type="submit" value="cadastrar" >Cadastrar</button>
    </form>
  </div>
  
</template>

<style>

.cadastro-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background: rgb(249, 247, 244)
}
.cadastro-form h2 {
  color: black;
}
.cadastro-form input {
  width: 230px;
  height: 30px;
  border-radius: 2px;
}
.cadastro-form button{
  background: rgb(218, 138, 18);
  width: 120px;
  height: 29px;
  color: black;
  cursor: pointer;
}

</style>
