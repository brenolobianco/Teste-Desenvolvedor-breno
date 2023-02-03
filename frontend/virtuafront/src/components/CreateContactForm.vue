<template>
    <div class="cadastro-box">
    <h1>Cadastrar contato</h1>
    <form method="POST" @submit="createContact">
        <input type="text" />Nome <input type="tel" />Telefone
        <input type="text" />Foto <input type="email" />Email
    </form>
</div>
</template>
<style>
form {
    background: white;
    width: 300px;
    height: 200px;
  }

</style>
<script>
 export default {
  name: "CreateContactForm",
  data() {
    return {
 
    }
  },
  methods: {
 
    async createContact(e) {
      e.preventDefault()
      const data = {
        nome: this.nome,
        telefone: this.telefone,
        email: this.email,
        image: this.image
      }
      const dataJson = JSON.stringify(data)    
      const req = await fetch("http://localhost:8000/api/contacts", {
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: dataJson
      });
      const res = await req.json()
      console.log(res)
      
      // clear message
      setTimeout(() => this.msg = "", 3000)
      // limpar campos
      this.nome = ""
      this.telefone = ""
      this.email = ""
      this.imagem = ""
      
    }
  },

}
</script>

  



