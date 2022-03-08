<template>
    <div id="alt">
        <form action="" class="cleanForm" method="PUT" @submit.prevent.stop="update">
            <input type="text" name="nome" placeholder="Nome" required v-model="nome" autocomplete="off">
            <input type="text" name="diocese"  placeholder="Diocese" required v-model="diocese" autocomplete="off"> <br> <br> <br>
            <input type="text" name="coordenador" placeholder="Coordenador" required v-model="coordenador" autocomplete="off">
            <input type="text" name="tesoureiro"  placeholder="Tesoureiro" required v-model="tesoureiro" autocomplete="off"> <br> <br> <br>
            <input type="email" name="email" placeholder="Email" required v-model="email" autocomplete="off">
            <input type="text" name="celcoordenador"  placeholder="Contato do coordenador" required v-model="celcoordenador" autocomplete="off"> <br> <br> <br>
            <input type="text" name="celtesoureiro" placeholder="Contato do tesoureiro" required v-model="celtesoureiro" autocomplete="off">
            <input type="text" name="paroquia"  placeholder="Paroquia" required v-model="paroquia" autocomplete="off"> <br> <br> <br> 
                     
           <br> 
                <button type="submit" >Salvar</button>
            <br> <br> <br> <br> <br>  
        </form>     

    </div>       
</template>


<script>



export default {
    name: "editargrupo",

    data () {
        return {
            id: '',
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

    mounted () {
        const id = this.$route.query.grupo
        const self = this

        fetch(`https://api-rcc.herokuapp.com/grupos/${id}`, {
                 headers: new Headers([
                    ['Authorization', `Bearer ${ localStorage.toke}`],
                    ['Content-Type', 'application/json']
            ]),
            mode: 'cors'
        })
        .then((result) => result.json())
        .then((grupo) => {
            self.nome = grupo.nome,
            self.diocese = grupo.diocese,
            self.coordenador = grupo.coordenador,
            self.tesoureiro = grupo.tesoureiro,
            self.email = grupo.email,
            self.celcoordenador = grupo.celcoordenador,
            self.celtesoureiro = grupo.celtesoureiro,
            self.paroquia = grupo.paroquia
        }).catch((error) => {
            console.error(error)
        })
    },
   
    methods: {
            
            update () {
                const id = this.$route.query.grupo
               
                 const self = this  
           if (confirm( 'Deseja realmente alter o grupo ' + this.nome + '?')) {
                         
                fetch(`https://api-rcc.herokuapp.com/grupos/${id}` , 
                    {
                        method: 'PUT',
                             headers: new Headers([
                    ['Authorization', `Bearer ${ localStorage.toke}`],
                    ['Content-Type', 'application/json']
                        ]),
                        body: JSON.stringify({ nome: this.nome, diocese: this.diocese, coordenador: this.coordenador, tesoureiro: this.tesoureiro , email: this.email, celcoordenador: this.celcoordenador, celtesoureiro: this.celtesoureiro, paroquia: this.paroquia }),
                        mode: 'cors'
                    })
                    .then(function () {
                        alert("Grupo alterado!")
                        window.location.href = '/grupo/buscagrupo'
                        })
                .catch(function (ex) {
                    console.error(ex)
                    self.message = 'Erro'
                })
            }
        },
 
    }
}

</script>

<style>

#alt {
    margin-top: 40px;
}
button:hover {
    background: #001dc2;
		color: rgb(255, 255, 255);
    transition: .3s ;

}

.link:hover {
background: #001dc2;
color: rgb(255, 255, 255);
        
        transition: .3s ;

}

button {
position: relative;
border: 5px ;
border-radius:5px ;
margin: 4px;
background: rgb(214, 214, 241);
height: 30px;
width: 100px;
top: 15px;
}
</style>