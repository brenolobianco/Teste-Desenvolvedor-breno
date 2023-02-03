<template>
  <div>
    <div class="deletar-box">
      <h1>Deletar contato</h1>
      <div class="listar-box">
        <h1>listar contato</h1>
        <ul>
          <li>dsa</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.deletar-box {
  background: rgb(249, 247, 244);
  width: 300px;
  height: 400px;
}
</style>
<script>
export default {
  name: "DeleteContactForm",
  data() {
    return {};
  },
  methods: {
    async getContacts() {
      const req = await fetch("http://localhost:8000/api/contacts");
      const data = await req.json();
      this.contacts = data;
    },
    async deleteContact(id) {
      const req = await fetch(`http://localhost:8000/api/contacts/${id}`, {
        method: "DELETE",
      });
      console.log(id);
      const res = await req.json();
      
    },
  },
};
</script>
