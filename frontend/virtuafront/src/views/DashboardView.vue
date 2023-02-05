<template>
  <div>
   <header>
      <button @click="logout" class="btn-logout" >Logout</button>
    </header>
  <div class="container">
    
    <div class="dashboard">
      <CreateContactForm />
      <EditContactForm />
      
      <ListContact />
    </div>
  </div>
</div>
</template>

<style></style>
<script>
import CreateContactForm from "../components/createContactForm.vue";
import EditContactForm from "../components/EditContactForm.vue"
import ListContact from "../components/ListContact.vue";


  

export default {

 
  components: {
    EditContactForm,
    CreateContactForm,
    ListContact,
  },
  methods: {
    async logout(e) {
      e.preventDefault();
      const token =localStorage.getItem("@UserToken");
      const req = await fetch("http://localhost:8000/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          token: token
        },
      });
      localStorage.clear()
      this.$router.replace(this.$route.query.redirect || "/")
} } };

</script>
<style>
.container {
  background: rgb(44, 36, 36);

  gap: 35px;

  width: 90vw;
  font-weight: normal;
  height: 100vh;
}

.dashboard {
  display: flex;
  gap: 30px;
}

.btn-logout{
  font-size: 26px;
  color: white;
  cursor: pointer;
  width: 100px;
  height: 30px;
  border: 1px solid black;
  background: rgb(218, 138, 18);
  display: flex;
  justify-content: center;
  align-items:center ;
}
</style>
