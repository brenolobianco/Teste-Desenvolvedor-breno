<template>
  <div class="edit-contact-box">
    <form class="edit-contact-form">
      <select
        name="status"
        class="status"
        @submit="updateContact($event, contact.id)"
      >
        <option
          :value="contact.name"
          v-for="contact in contacts"
          :key="contact.id"
        >
          {{ contact.name }}
        </option>
      </select>

      <h2>Editar contato</h2>
      <label
        ><input type="text" placeholder="Nome" v-model="name" />
      </label>
      <label
        ><input placeholder="telefone" type="tel" v-model="contact" />
      </label>
      <label
        ><input type="text" placeholder="foto" v-model="foto" />
      </label>
      <label
        > <input type="email" placeholder="Email" v-model="email"
      /></label>

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
  gap: 20px;
  width: 350px;
  height:500px;
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
  margin-bottom: 10px;
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
<script>
import axios from "axios";
export default {
  name: "EditContactForm",
  data() {
    return { contacts: {} };
  },
  methods: {
    async getContacts() {
      axios
        .get("http://localhost:8000/api/contacts")
        .then((res) => {
          this.contacts = res.data;
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async updateContact(event, id) {
      const option = event.target.value;

      const dataJson = JSON.stringify({ status: option });
      const req = await fetch(`http://localhost:3000/contacts/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });
      auth.setToken(data.token);
      const res = await req.json();
      console.log(res);
    },
  },
  mounted() {
    this.getContacts();
  },
};
</script>
