<template>
    <div id="NovoGrupo">
        <form action="" class="cleanForm" method="POST" @submit.prevent.stop="save">
            <input type="text" name="nome" placeholder="Nome" required v-model="nome" autocomplete="off">
            <input type="text" name="diocese"  placeholder="Diocese" required v-model="diocese" autocomplete="off"> <br> <br> <br>
            <input type="text" name="coordenador" placeholder="Coordenador" required v-model="coordenador" autocomplete="off">
            <input type="text" name="tesoureiro"  placeholder="Tesoureiro" required v-model="tesoureiro" autocomplete="off"> <br> <br> <br>
            <input type="email" name="email" placeholder="Email" required v-model="email" autocomplete="off">
            <input type="text" name="celcoordenador"  placeholder="Contato do coordenador" required v-model="celcoordenador" autocomplete="off"> <br> <br> <br>
            <input type="text" name="celtesoureiro" placeholder="Contato do tesoureiro" required v-model="celtesoureiro" autocomplete="off">
            <input type="text" name="paroquia"  placeholder="Paroquia" required v-model="paroquia" autocomplete="off"> <br> <br> <br>          

            {{ message }}
            <br> 
                <input type="submit" value="Grava" class="btn">
            <br> <br> <br> 
        </form>
    
    </div>       
</template>

<script>


export default {
    name: "novogrupo",

    data () {
        return {
            nome: '',
            diocese: '',
            coordenador: '',
            tesoureiro: '',            
            email: '',
            celcoordenador: '',
            celtesoureiro: '',
            paroquia: '',            
            message: '',
            listaClientes: []
        }
    },
    
    methods: {


        save () {
            
            const self = this

            fetch('https://api-rcc.herokuapp.com/grupos', {
                method: 'POST',
                    headers: new Headers([                       
                    ['Authorization', `Bearer ${ localStorage.toke}`],              
                    ['Content-Type', 'application/json']
                ]),
                body: JSON.stringify({ nome: this.nome, diocese: this.diocese, coordenador: this.coordenador, tesoureiro: this.tesoureiro , email: this.email, celcoordenador: this.celcoordenador, celtesoureiro: this.celtesoureiro, paroquia: this.paroquia }),
                mode: 'cors'
                
            })
                .then(function () {
                    
                    self.menssage = alert("Cadastro Realizado!")
                    self.nome = ''
                    self.diocese = ''
                    self.coordenador = ''
                    self.tesoureiro = ''
                    self.email = ''
                    self.celcoordenador = ''
                    self.celtesoureiro = ''
                    self.paroquia = ''                
                })
                .catch(function (ex) {
                    console.error(ex)
                    console.log(self)
                    self.message = 'Erro'
                })
        },

    


        
   
    }
    
}

</script>

<style scoped>


form.cleanForm {
    width:700px;
    margin:50px auto;
}

form.cleanForm p {
    margin-bottom:15px;
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
form.cleanForm em {
    font-size:12px;
}

.alert-box {
	padding: 15px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    border-radius: 4px;  
}

.success {
    color: #3c763d;
    background-color: #dff0d8;
    border-color: #d6e9c6;
    display: none;
}

.failure {
    color: #a94442;
    background-color: #f2dede;
    border-color: #ebccd1;
    display: none;
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
.warning {
    color: #8a6d3b;
    background-color: #fcf8e3;
    border-color: #faebcc;
    display: none;
}

</style>