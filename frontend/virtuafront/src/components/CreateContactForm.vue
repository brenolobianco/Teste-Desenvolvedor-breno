<template>
  <div>
    <form class="contact-form" method="POST" @submit="createContact">
      <h2>Cadastrar contato</h2>
      
      <label
        ><input type="text" placeholder="Nome" v-model="name" />
      </label>
      <label
        ><input placeholder="telefone" type="tel" v-model="contact" />
      </label>
      <label
        ><input type="text" placeholder="foto" v-model="image" />
      </label>
      <label
        > <input type="email" placeholder="Email" v-model="email"
      /></label>
      <input class="submit-btn" type="submit" value="Criar Contato!" />Criar
      Contato
    </form>
  </div>
</template>
<style>
.contact-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 350px;
  height: 500px;
  border-radius: 12px;
  background: rgb(249, 247, 244);
}
.contact-form label {
  display: flex;
  flex-direction: column;
  color: black;
  justify-content: center;
  align-items: center;
}
.contact-form input {
  width: 250px;
  height: 50px;
  border-radius: 8px;
  font-size: 16px;
  padding: 15px;
}
.contact-form h2 {
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
export default {
  name: "CreateContactForm",
  data() {
    return {};
  },


  methods: {
    // Funçao responsavel por criar um contado
    // È passado em seu header o token de us uario gerado no login, concedendo permissao para a requisiçao ser efetuada
    
    async createContact(e) {
      e.preventDefault();
      const data = {
        name: this.name,
        contact: this.contact,
        email: this.email,
        image: this.image,
      };
      const dataJson = JSON.stringify(data);
     
      const token =localStorage.getItem("@UserToken")
  
      const req = await fetch("http://localhost:8000/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          token: token
        },
        body: dataJson,
      });
  console.log(req)
    
      
    },
  },
  

};
</script>
