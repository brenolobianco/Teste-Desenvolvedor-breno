<template>
  <div>
    <form class="contact-form" method="POST" @submit="createContact">
      <h2>Cadastrar contato</h2>
      <input type="text" placeholder="Nome" v-model="name"/>Nome
      <input placeholder="telefone" type="tel" v-model="contact"/>Telefone
      <input type="text" placeholder="foto" v-model="image" />Foto
      <input type="email" placeholder="Email" v-model="email" />Email
      <input class="submit-btn" type="submit"  value="Criar Contato!" />Criar Contato
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
    return {
      
    };
  },
  methods: {
    async createContact(e) {
      e.preventDefault(); 
      const data = {
        name: this.name,
        contact: this.contact,
        email: this.email,
        image: this.image
      };
      const dataJson = JSON.stringify(data);
      console.log(dataJson)
      const req = await fetch("http://localhost:8000/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept":"application/json"},
        body: dataJson,
      });
      console.log
      const res = await req.json();
      console.log(res);

      // clear message
      setTimeout(() => (this.msg = ""), 100000);
      // limpar campos
      this.name = "";
      this.telefone = "";
      this.email = "";
      this.imagem = "";
    },
  },
};
</script>
