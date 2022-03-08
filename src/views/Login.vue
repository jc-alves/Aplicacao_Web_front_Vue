<template>
    
<main>
  
         
     

    <div class="background">
          
    </div>


  <form method="POST" @submit.prevent="handleSubmit()">
        <h3>Login</h3>

        <label for="email">Email</label>
        <input type="email" placeholder="Email" name="email" required autocomplete="off" v-model="email" >

        <label for="senha">Senha</label>
        <input type="password" placeholder="Digita a senha" name="senha" required autocomplete="off" v-model="senha">

        <button>Entrar</button>
    </form>


</main>

</template>

<script >


import global from '../global'
import axios from 'axios'

export default {
    name: 'login',
    data() {
        return {
           email: '',
           senha: ''
        }
    },
    methods: {
       
       async handleSubmit() {
         try {
             const response = await axios.post(global.userCredential, {
              email: this.email,
              senha: this.senha              
              })
              localStorage.setItem('toke', response.data.toke)  
            //    <router-link to="/usuarios"></router-link>                    
              this.$router.push('/home')
         } catch {
             alert('Erro na autenticação!')
         }
          

          
       }
       
      
    }
}

</script>

<style scoped> 
body{
    background-color: #ffffff;
}
.background{
    width: 430px;
    height: 520px;
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
}

.shape:first-child{
    background: linear-gradient(
        #1845ad,
        #23a2f6
    );
    left: -80px;
    top: -80px;
}

form{
    height: 470px;
    width: 350px;
    background-color: rgba(255,255,255,0.13);
    position: absolute;
    transform: translate(-50%,-50%);
    top: 59%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    padding: 50px 35px;
}
form *{
    font-family: 'Poppins',sans-serif;
    color: #000000;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
}
form h3{
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
}

label{
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
    margin-left: 40%;
}
input{
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(202, 192, 192, 0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
}
::placeholder{
    color: #000000;
}
button{
    margin-top: 50px;
    width: 100%;
    background-color: #cbd7ee;
    color: #080710;
    padding: 5px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
}
  .auth-modal {
        background-color: #fff;
        width: 400px;
        padding: 25px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
        display: flex;
        flex-direction: column;
        align-items: center;
    }    
    .auth-title {
        font-size: 1.2rem;
        font-weight: 100;
        margin-bottom: 15px;
    }
    .auth-modal input {
        border: 1px solid #bbb;
        width: 100%;
        margin-bottom: 15px;
        padding: 3px 8px;
    }
    .auth-modal button {
        align-self: center;
        margin-top: 10px;
        padding: 5px 15px;
        cursor: pointer;
    }
    .auth-modal a {
        margin-top: 15px;
    }
    .auth-modal hr {
        border: 0;
        width: 100%;
        height: 1px;
        background-image: linear-gradient(to right,
            rgba(120, 120, 120, 0),
            rgba(120, 120, 120, 0.75),
            rgba(120, 120, 120, 0));
    }
</style>