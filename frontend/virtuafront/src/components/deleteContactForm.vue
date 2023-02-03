<template>
  <div>
    <div class="deletar-box">
      <h2>Deletar contato</h2>
      <div class="listar-box">
        <h2>listar contato</h2>
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
.deletar-box h2{
  color: black;
}
</style>
<script>
export default {
  name: "deleteContactForm",
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
