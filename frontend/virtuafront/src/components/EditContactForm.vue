<template>
 
    <div >
      
        <form class="edit-contact-form" method="POST" @submit="updateContact">
        <h2>Editar contato</h2>
        <input type="text" placeholder="Nome" />Nome
        <input placeholder="telefone" type="tel" />Telefone
        <input type="text" placeholder="foto" />Foto
        <input type="email" placeholder="Email" />Email
        <input class="submit-btn" type="submit" value="Editar Contato!" />Editar
        Contato
      </form>
    
  </div>
</template>
<style>
.edit-contact-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 400px;
  background: rgb(249, 247, 244);
}
.edit-contact-form input {
  width: 250px;
  height: 40px;
  border: 1px solid black;
  border-radius:5px ;
}
.edit-contact-form h2 {
  color: black;
  font-size: 25px;
}
form .submit-btn {
  background: rgb(218, 138, 18);
  width: 130px;
  height: 45px;
  color: white;
}
</style>
<script>
export default {
  name: "EditContactForm",
  data() {
    return {};
  },
  methods: {
    async getContacts() {
      const req = await fetch("http://localhost:8000/api/contacts");
      const data = await req.json();
      this.contacts = data;
    },

    async updateContact(event, id) {
      const option = event.target.value;
      const dataJson = JSON.stringify({ status: option });
      const req = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });
      auth.setToken(data.token);
      const res = await req.json();
      console.log(res);
    },
  },
};
</script>
