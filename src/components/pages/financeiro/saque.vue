<template>
    <div class="main">
    
    <h1>Saque</h1>


        <form action="" class="cleanForm" method="POST" @submit.prevent.stop="save" >
         
       
        <br>

         <input type="number" name="retirada"  placeholder="R$ 0,00" required v-model="retirada" autocomplete="off"> <br> <br> <br>
        <input type="text" class="descr" name="motivo" placeholder="Justificativa" required v-model="motivo" autocomplete="off"><br>   
            <button type="submit"  >Saque</button>
    
        </form>
    
    </div>
</template>

<script>
export const baseURL = process.env.VUE_APP_SERVER

export default {
    name: 'Saque',
    
    data() {
        return {
            motivo: '',
            retirada: '',
            nome: '',
            email: '',
            senha: '',
            listUsuario: []

        }
    },


    methods: {


        save () {
            const self = this
           
            fetch(baseURL+'/retirada', {
                method: 'POST',
                 headers: new Headers([
                    ['Authorization', `Bearer ${ localStorage.toke}`],
                     ['Content-Type', 'application/json']
           
                   
                ]),
                body: JSON.stringify({ motivo: this.motivo, retirada: this.retirada}),
                mode: 'cors'
                
            })
                .then(function () {
                    
                    self.menssage = alert("Saque Realizado com sucesso!")
                    self.motivo = ''
                    self.retirada = ''
                    
                    //location.reload();
                    // self.message = 'Sucesso'
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

<style>

.main {
    margin-top: 30px;
}

.descr {
    height: 40px;
    width: 300px;
    background-color: rgb(245, 245, 245);

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