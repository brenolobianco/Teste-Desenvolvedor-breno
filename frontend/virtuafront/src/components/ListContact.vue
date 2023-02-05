<template>
  <div>
    <div class="listar-contact-box">
      <h1>listar contato</h1>
      
      <ul>
        <li v-for="contact in contacts" :key="contact.name">
          <h3>{{ contact.name}}</h3>
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 450px;
  height: 450px;
  border-radius: 12px;
  background: rgb(249, 247, 244);
  overflow: auto;
}
.delete-btn {
  font-size: 15px;
  color: white;
  cursor: pointer;
  height: 21px;
  border: 1px solid black;
  background: rgb(218, 138, 18);
}
.listar-contact-box ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.listar-contact-box ul li {
  color: black;
  border: 1px solid black;
  border-radius: 8px;
  height: 150px;
  width: 350px;
  display: flex;
  gap: 6px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.listar-contact-box ul li h3 {
  font-size: 25px;
}
.listar-contact-box h4 {
  font-size: 18px;
}
.listar-contact-box h5 {
  font-size: 18px;
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

  created() {
    this.getContacts();
  },
  methods: {
    async getContacts() {
      axios
        .get("http://localhost:8000/api/contacts")
        .then((res) => {
          this.contacts = res.data;
          console.log(res.data)
        })
        .catch((error) => {
          console.log(error);
        });
       
    },
   

    async deleteContact(id) {
      const token =localStorage.getItem("@UserToken")
      const req = await fetch(`http://localhost:8000/api/contacts/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          token: token
        },
      });
      console.log("Contado deletado");
      const res = await req.json();
      this.$toast.success(`Contato deletado com sucesso`);
    },
  },
  
};
</script>
