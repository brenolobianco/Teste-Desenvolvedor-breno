<template>
  <div>
    <form class="contact-form" method="POST" @submit="createContact">
      <h2>Cadastrar contato</h2>
      <input type="text" placeholder="Nome" v-model="name" />Nome
      <input placeholder="telefone" type="number" v-model="contact" />Telefone
      <input type="text" placeholder="foto" v-model="image" />Foto
      <input type="email" placeholder="Email" v-model="email" />Email
      <input class="submit-btn" type="submit" value="Criar Contato!" />Criar
      Contato
    </form>
  </div>
</template>
<style>
.contact-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 450px;
  border-radius:12px ;
  
  background: rgb(249, 247, 244);
}
.contact-form input {
  width: 250px;
  height: 50px;
  border-radius: 8px;
  font-size: 16px;
  padding: 15px;
}
.contact-form h2 {
  color: black;
  font-size: 30px;
  margin-bottom: 10px;
}
form .submit-btn {
  background: rgb(218, 138, 18);
  width: 130px;
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
        name: this.name,
        contact: this.contact,
        email: this.email,
        image: this.image,
      };
      const dataJson = JSON.stringify(data);
      console.log(dataJson);
      const token =localStorage.getItem("@UserToken")
      console.log(token)
      const req = await fetch("http://localhost:8000/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          token: token
        },
        body: dataJson,
      });
      this.$toast.success(`Cadastro realizado com sucesso`);
      const res = await req.json();
      console.log(res);
    },
  },
  

};
</script>
