<template>
  <div class="edit-contact-box">
    <form class="edit-contact-form" method="PATCH" @submit="updateContact">
      <h2>Editar Contato</h2>
      <legend>Selecione o contato</legend>
      <select name="status" class="status" v-model="formEdit">
        <option
          :value="contact.id"
          v-for="contact in contacts"
          :key="contact.id"
        >
          {{ contact.name }}
        </option>
      </select>
      <label><input type="text" placeholder="Nome" v-model="name" /> </label>
      <label
        ><input placeholder="Telefone" type="tel" v-model="contact" />
      </label>
      <label><input type="text" placeholder="Foto" v-model="image" /> </label>
      <label> <input type="email" placeholder="Email" v-model="email" /></label>
      <input class="submit-btn" type="submit" value="Editar Contato!" />Editar
      Contato
    </form>
  </div>
</template>
<script>
import axios from "axios";
import { ref } from "vue";
const formEdit = ref("contact.id");
export default {
  name: "EditContactForm",
  data() {
    return { contacts: {}, formEdit };
  },
  created() {
    this.getContacts();
  },
  methods: {
    async getContacts() {
      axios.get("http://localhost:8000/api/contacts").then((res) => {
        this.contacts = res.data;
      });
    },
    async updateContact(e) {
      e.preventDefault();
      const id = formEdit.value;
      const data = {
        name: this.name,
        contact: this.contact,
        email: this.email,
        image: this.image,
      };
      const dataJson = JSON.stringify(data);
      const token = localStorage.getItem("@UserToken");
      axios
        .patch(`http://localhost:8000/api/contacts/${id}`, dataJson, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            token: token,
          },
        })
        .then(() => {
          this.$toast.success(`Contato editado com sucesso`);
        })
        .catch(() => {
          this.$toast.error(`Ops! Algo deu errado`);
        });
    },
  },
};
</script>
<style>
.edit-contact-form legend {
  color: black;
  font-size: 25px;
}
.edit-contact-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 350px;
  height: 500px;
  border-radius: 12px;
  background: rgb(249, 247, 244);
}
.edit-contact-form label {
  display: flex;
  flex-direction: column;
  color: black;
  justify-content: center;
  align-items: center;
}
.edit-contact-form input {
  width: 250px;
  height: 50px;
  border-radius: 8px;
  font-size: 16px;
  padding: 15px;
}
.edit-contact-form h2 {
  color: black;
  font-size: 30px;
  margin-top: 0px;
}
form .submit-btn {
  border-radius: 8px;
  background: rgb(129, 85, 19);
  font-size: 26px;
  width: 200px;
  height: 50px;
  margin-top: 10px;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
