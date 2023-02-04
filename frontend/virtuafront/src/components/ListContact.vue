<template>
  <div>
    <div class="listar-contact-box">
      <h1>listar contato</h1>
      <ul>
        <li v-for="contact in contacts" :key="contact.name">
          <h3>Nome:{{ contact.name }}</h3>
          <h4>Telefone:{{ contact.contact }}</h4>
          <h5>Email: {{ contact.email }}</h5>
          <button class="delete-btn" @click="deleteContact(contact.id)">
            Deletar
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.listar-contact-box {
  background: rgb(249, 247, 244);
  width: 300px;
  height: 400px;
  overflow-y: auto;
}
.delete-btn {
  cursor: pointer;
  color: black;
}

.listar-contact-box ul li {
  color: black;
  border: 1px solid black;
  height: 100px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

<script>
import axios from "axios";
export default {
  name: "ListContact",
  data() {
    return {
      contacts: {},
    };
  },

  methods: {
    async getContacts() {
      axios
        .get("http://localhost:8000/api/contacts")
        .then((res) => {
          this.contacts = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async deleteContact(id) {
      const req = await fetch(`http://localhost:8000/api/contacts/${id}`, {
        method: "DELETE",
      });
      console.log("Contado deletado");
      const res = await req.json();
    },
  },
  mounted() {
    this.getContacts();
  },
};
</script>
