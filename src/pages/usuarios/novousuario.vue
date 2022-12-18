<template>

<main>

<div class="novo">

 <form class="cleanForm" method="POST" @submit.prevent.stop="save">
            <input type="text" name="nome" placeholder="Nome" required v-model="nome" autocomplete="off">
            <input type="email" name="email"  placeholder="Email" required v-model="email" autocomplete="off"> <br> <br> <br>
            <input type="text" name="ocupacao" placeholder="Cargo" required v-model="ocupacao" autocomplete="off">
            <input type="password" name="senha"  placeholder="Senha" required v-model="senha" autocomplete="off"> <br> <br> <br>
            <input type="password" name="confirsenha"  placeholder="Confirme a senha" required v-model="confirsenha" autocomplete="off"> <br> <br> <br> 


           
            <br> 
                <input type="submit" class="btn" value="Grava">

            <br> <br> <br> 
        </form>


</div>


</main>



</template>

<script>
export default {
    name: 'novousuario',


    data() {
        return {

            nome: '',
            email: '',
            ocupacao: '',
            senha: '',
            confirsenha: '',

        }

    },

    methods: {
        
        
        save () {           

            const senha = this.senha
            const confirsenha = this.confirsenha                   
            const self = this
            if (senha == confirsenha) {
                fetch('http://localhost:3000/newuser', {
                method: 'POST',
                 headers: new Headers([
                    ['Authorization', `Bearer ${ localStorage.toke}`],
                    ['Content-Type', 'application/json']
                ]),
                body: JSON.stringify({ nome: this.nome, email: this.email, senha: this.senha, confirsenha: this.confirsenha ,ocupacao: this.ocupacao}),
                mode: 'cors'
                
            })
                .then(function () {
                    
                    self.menssage = alert("Usuario cadastrado!")
                    self.nome = ''
                    self.email = ''
                    self.senha = ''
                    self.confirsenha = ''
                    self.ocupacao = ''                
                })
                .catch(function (ex) {
                    console.error(ex)
                    console.log(self)
                    
                })
            }else {
                alert("Senhas não conferi. Tente novamente!")
                self.senha = ''
                self.confirsenha = ''
            }
                       
            
        },
    }

}
</script>

<style scoped>

main {
 margin-top:  0%;

}

.novo {
    margin-top: 60px
}


input[type="email"], input[type="password"], input[type="text"]  {
    font-family: Arial, Sans-Serif;
    font-size: 18px;
    color: #adadad;
    margin-left: 40px;
    padding: 10px;
    outline:none;   
    float:left;
    border: solid 1px #adadad;
    width: 230px;
    transition: all 2s ease-in-out;
    -webkit-transition: all 2s ease-in-out;
    -moz-transition: all 2s ease-in-out;
    -moz-border-radius: 8px;
    -webkit-border-radius: 8px;
    border-radius: 8px;
    -moz-box-shadow:inset 0 0 5px 5px #E6E6E6;
    -webkit-box-shadow:inset 0 0 5px 5px #E6E6E6;
    box-shadow:inset 0 0 5px 5px #E6E6E6;
    clear: right;
}

input[type="email"]:focus, input[type="email"]:hover, input[type="password"]:focus,
input[type="password"]:hover, input[type="text"]:focus, input[type="text"]:hover {
    border:1px solid #FF003F;   
}
.btn {
 color: white;
 font-size: 25px;
 height: 50px;
 width: 180px;
 border-radius: 5px;
 background-color: blue;
 margin-left: -470px;
}
</style>