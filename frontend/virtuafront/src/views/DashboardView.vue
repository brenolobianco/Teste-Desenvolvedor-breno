<template>
  <div class="container">
    <header>
      <RouterLink to="/">Login</RouterLink>
    </header>
    <div class="dashboard">
      <CreateContactForm />
      <EditContactForm />
      <DeleteContactForm />
      <ListContact />
    </div>
  </div>
</template>

<style></style>
<script>
import CreateContactForm from "../components/CreateContactForm.vue";
import DeleteContactForm from "../components/deleteContactForm.vue";
import EditContactForm from "../components/EditContactForm.vue";
import ListContact from "../components/ListContact.vue";

export default {
  name: "Dashboard",
  components: {
    EditContactForm,
    CreateContactForm,
    DeleteContactForm,
    ListContact,
  },
};
</script>
<style>
.container {
  background: rgb(44, 36, 36);

  gap: 35px;

  width: 95vw;
  font-weight: normal;
  height: 100vh;
}

.dashboard {
  display: flex;
  gap: 30px;
}
</style>
