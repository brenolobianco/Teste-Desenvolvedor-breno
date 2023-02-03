

<template>
  <div class="dashboard">
    <header>
      <RouterLink to="/">Login</RouterLink>
    </header>
    <CreateContactForm />
    <EditContactForm />
    <DeleteContactForm />
  </div>
</template>

<style>
</style>
<script>
import CreateContactForm from "../components/createContactForm.vue";
import DeleteContactForm from "../components/deleteContactForm.vue";
import EditContactForm from "../components/EditContactForm.vue";

export default {
  name: "Dashboard",
  components: {
    EditContactForm,
    CreateContactForm,
    DeleteContactForm,
  },
};
</script>
<style>
.dashboard{
display: flex;
gap:83px;
}
</style>