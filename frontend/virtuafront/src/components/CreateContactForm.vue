<template>
  <div>
    <form class="contact-form" method="POST" @submit="createContact">
      <h2>Cadastrar contato</h2>
      <input type="text" placeholder="Nome" />Nome
      <input placeholder="telefone" type="tel" />Telefone
      <input type="text" placeholder="foto" />Foto
      <input type="email" placeholder="Email" />Email
      <input class="submit-btn" type="submit" value="Criar Contato!" />Criar Contato
    </form>
  </div>
</template>
<style>
.contact-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 400px;
  background: rgb(249, 247, 244);
}
.contact-form input {
  width: 200px;
  height: 25px;
}
.contact-form h2 {
  color: black;
  font-size: 20px;
}
form .submit-btn {
  background: rgb(218, 138, 18);
  width: 120px;
  height: 29px;
  color: white;
  cursor: pointer;
}
</style>
<script>
export default {
  name: "CreateContactForm",
  data() {
    return {};
  },
  methods: {
    async createContact(e) {
      e.preventDefault();
      const data = {
        nome: this.nome,
        telefone: this.telefone,
        email: this.email,
        image: this.image,
      };
      const dataJson = JSON.stringify(data);
      const req = await fetch("http://localhost:8000/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });
      const res = await req.json();
      console.log(res);

      // clear message
      setTimeout(() => (this.msg = ""), 3000);
      // limpar campos
      this.nome = "";
      this.telefone = "";
      this.email = "";
      this.imagem = "";
    },
  },
};
</script>
