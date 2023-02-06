<template>
  <div>
    <div class="listar-contact-box">
      <h1>Lista de Contatos</h1>
      <p>Ordenado por mes de criação</p>
      <ul>
        <h2>Janeiro</h2>
        <li
          v-for="contact in contacts"
          :key="contact.name"
          v-show="new Date(contact.created_at).getMonth(date) + 1 == 1"
        >
          <img src="img" alt="foto" />
          <h3>{{ contact.name }}</h3>
          <h4>Telefone:{{ contact.contact }}</h4>
          <h5>Email: {{ contact.email }}</h5>
          <button class="delete-btn" @click="deleteContact(contact.id)">
            Deletar
          </button>
        </li>
      </ul>
      <ul>
        <h2>Fevereiro</h2>
        <li
          v-for="contact in contacts"
          :key="contact.name"
          v-show="new Date(contact.created_at).getMonth(date) + 1 == 2"
        >
          <img src="img" alt="aki" srcset="" />
          <h3>{{ contact.name }}</h3>
          <h4>Telefone:{{ contact.contact }}</h4>
          <h5>Email: {{ contact.email }}</h5>
          <button class="delete-btn" @click="deleteContact(contact.id)">
            Deletar
          </button>
        </li>
      </ul>
      <ul>
        <h2>Março</h2>
        <li
          v-for="contact in contacts"
          :key="contact.name"
          v-show="new Date(contact.created_at).getMonth(date) + 1 == 3"
        >
          <h3>{{ contact.name }}</h3>
          <h4>Telefone:{{ contact.contact }}</h4>
          <h5>Email: {{ contact.email }}</h5>
          <button class="delete-btn" @click="deleteContact(contact.id)">
            Deletar
          </button>
        </li>
      </ul>
      <ul>
        <h2>Abril</h2>
        <li
          v-for="contact in contacts"
          :key="contact.name"
          v-show="new Date(contact.created_at).getMonth(date) + 1 == 4"
        >
          <h3>{{ contact.name }}</h3>
          <h4>Telefone:{{ contact.contact }}</h4>
          <h5>Email: {{ contact.email }}</h5>
          <button class="delete-btn" @click="deleteContact(contact.id)">
            Deletar
          </button>
        </li>
      </ul>
      <ul>
        <h2>Maio</h2>
        <li
          v-for="contact in contacts"
          :key="contact.name"
          v-show="new Date(contact.created_at).getMonth(date) + 1 == 5"
        >
          <h3>{{ contact.name }}</h3>
          <h4>Telefone:{{ contact.contact }}</h4>
          <h5>Email: {{ contact.email }}</h5>
          <button class="delete-btn" @click="deleteContact(contact.id)">
            Deletar
          </button>
        </li>
      </ul>
      <ul>
        <h2>Junho</h2>
        <li
          v-for="contact in contacts"
          :key="contact.name"
          v-show="new Date(contact.created_at).getMonth(date) + 1 == 6"
        >
          <h3>{{ contact.name }}</h3>
          <h4>Telefone:{{ contact.contact }}</h4>
          <h5>Email: {{ contact.email }}</h5>
          <button class="delete-btn" @click="deleteContact(contact.id)">
            Deletar
          </button>
        </li>
      </ul>
      <ul>
        <h2>Julho</h2>
        <li
          v-for="contact in contacts"
          :key="contact.name"
          v-show="new Date(contact.created_at).getMonth(date) + 1 == 7"
        >
          <h3>{{ contact.name }}</h3>
          <h4>Telefone:{{ contact.contact }}</h4>
          <h5>Email: {{ contact.email }}</h5>
          <button class="delete-btn" @click="deleteContact(contact.id)">
            Deletar
          </button>
        </li>
      </ul>
      <ul>
        <h2>Agosto</h2>
        <li
          v-for="contact in contacts"
          :key="contact.name"
          v-show="new Date(contact.created_at).getMonth(date) + 1 == 8"
        >
          <h3>{{ contact.name }}</h3>
          <h4>Telefone:{{ contact.contact }}</h4>
          <h5>Email: {{ contact.email }}</h5>
          <button class="delete-btn" @click="deleteContact(contact.id)">
            Deletar
          </button>
        </li>
      </ul>
      <ul>
        <h2>Setembro</h2>
        <li
          v-for="contact in contacts"
          :key="contact.name"
          v-show="new Date(contact.created_at).getMonth(date) + 1 == 9"
        >
          <h3>{{ contact.name }}</h3>
          <h4>Telefone:{{ contact.contact }}</h4>
          <h5>Email: {{ contact.email }}</h5>
          <button class="delete-btn" @click="deleteContact(contact.id)">
            Deletar
          </button>
        </li>
      </ul>
      <ul>
        <h2>Outubro</h2>
        <li
          v-for="contact in contacts"
          :key="contact.name"
          v-show="new Date(contact.created_at).getMonth(date) + 1 == 10"
        >
          <h3>{{ contact.name }}</h3>
          <h4>Telefone:{{ contact.contact }}</h4>
          <h5>Email: {{ contact.email }}</h5>
          <button class="delete-btn" @click="deleteContact(contact.id)">
            Deletar
          </button>
        </li>
      </ul>
      <ul>
        <h2>Novembro</h2>
        <li
          v-for="contact in contacts"
          :key="contact.name"
          v-show="new Date(contact.created_at).getMonth(date) + 1 == 11"
        >
          <h3>{{ contact.name }}</h3>
          <h4>Telefone:{{ contact.contact }}</h4>
          <h5>Email: {{ contact.email }}</h5>
          <button class="delete-btn" @click="deleteContact(contact.id)">
            Deletar
          </button>
        </li>
      </ul>
      <ul>
        <h2>Novembro</h2>
        <li
          v-for="contact in contacts"
          :key="contact.name"
          v-show="new Date(contact.created_at).getMonth(date) + 1 == 12"
        >
          <h3>{{ contact.name }}</h3>
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
<script>
import axios from "axios";
export default {
  name: "ListContact",
  data() {
    return {
      contacts: {},
    };
  },
  mounted() {
    this.getContacts();
  },
  // Observa mudancas no contact, caso ocorra atualiza a lista
  watch: {
    contacts: {
      handler() {
        this.getContacts();
      },
      immediate: true,
    },
  },
  methods: {
    // Função responsavel por listar todas os contatos cadastrados
    async getContacts() {
      axios.get("http://localhost:8000/api/contacts").then((res) => {
        this.contacts = res.data;
      });
    },
    // Função responsavel por deletar um contato especifico, recebendo o id como parametro.
    // È passado em seu header o token de us uario gerado no login, concedendo permissao para a requisiçao ser efetuada
    async deleteContact(id) {
      const token = localStorage.getItem("@UserToken");
      try {
        const req = await fetch(`http://localhost:8000/api/contacts/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            token: token,
          },
        });
        this.$toast.success(`Contato deletado com sucesso`);
      } catch (error) {
        this.$toast.error(`Contato não deletado`);
      }
    },
  },
};
</script>
<style>
.listar-contact-box {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 65vw;
  height: 600px;
  border-radius: 12px;
  background: rgb(249, 247, 244);
  overflow: scroll;
}
.listar-contact-box h1 {
  color: black;
  margin-left: 40px;
  font-size: 40px;
}
.listar-contact-box p {
  color: black;
  margin-left: 40px;
  font-size: 20px;
}
.delete-btn {
  font-size: 15px;
  color: white;
  cursor: pointer;
  height: 22px;
  border: 1px solid black;
  background: rgb(218, 138, 18);
}
.listar-contact-box ul {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border-top: 1px solid rgb(22, 15, 15);
}
.listar-contact-box ul li {
  color: black;
  background: rgb(224, 224, 217);
  border-radius: 8px;
  height: 100px;
  width: 60vw;
  padding: 0px 29px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.listar-contact-box ul li h3 {
  font-size: 25px;
  color: black;
}
.listar-contact-box ul h2 {
  font-size: 25px;
  width: 55vw;
  display: flex;
  justify-content: center;
  height: 50px;
  align-items: center;
  color: black;
}
.listar-contact-box h4 {
  font-size: 18px;
}
.listar-contact-box h5 {
  font-size: 18px;
}
@media (max-width: 480px) {
  .listar-contact-box {
    width: 350px;
  }
  .listar-contact-box ul li {
    height: 260px;
    flex-direction: column;
  }
}
</style>
