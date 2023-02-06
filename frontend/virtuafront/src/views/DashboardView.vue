<template>
  <div class="">
    <header>
      <button @click="logout" class="btn-logout">Logout</button>
    </header>
    <div class="container">
      <div class="dashboard">
        ]
        <div class="form-box">
          <CreateContactForm />
          <EditContactForm />
        </div>
        <div class="list-box"><ListContact /></div>
      </div>
    </div>
  </div>
</template>
<script>
import CreateContactForm from "../components/createContactForm.vue";
import EditContactForm from "../components/EditContactForm.vue";
import ListContact from "../components/ListContact.vue";
export default {
  components: {
    EditContactForm,
    CreateContactForm,
    ListContact,
  },
  methods: {
    // Função responsavel por fazer o logout na api, e limpa o localstorage. Em seguida, redireciona para o login
    async logout(e) {
      e.preventDefault();
      const token = localStorage.getItem("@UserToken");
      const req = await fetch("http://localhost:8000/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          token: token,
        },
      });
      localStorage.clear();
      this.$toast.success(`Logout com sucesso`);
      this.$router.replace(this.$route.query.redirect || "/");
    },
  },
};
</script>
<style>
.container {
  margin-right: 140px;
  width: 80vw;
  font-weight: normal;
}
.form-box {
  display: flex;
  justify-content: center;
  margin-top: 200px;
  gap: 100px;
}
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.btn-logout {
  border-radius: 8px;
  background: rgb(129, 85, 19);
  font-size: 26px;
  width: 150px;
  height: 50px;
  margin-top: 10px;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 480px) {
  .dashboard {
    display: flex;
    flex-direction: column;
  }
  .form-box {
    display: flex;
    flex-direction: column;
  }
}
</style>
