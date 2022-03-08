<template>
<div class="user">
 

<div class="result">
        <table id="usuarios" >
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Cargo</th>
             
              
            </tr>     
         

            
            <tr v-for="user in lista" :key="user.id">    
                <td>{{ user.nome }}</td>
                <td>{{ user.email }}</td>             
                <td>{{ user.ocupacao }}</td>
              
              

                
               
                
            </tr>
            

            
        </table>


</div>




</div>

</template>

<script>
export default {
    name: 'Usuarios',

    data() {
        return {
            nome: '',
            email: '',
            senha: '',
            ocupacao: '',
            
            lista: []        
        }
        
    },
     mounted() {

                  const self = this
                  

                  fetch('https://api-rcc.herokuapp.com/users', {
                     headers: new Headers([
                    ['Authorization', `Bearer ${ localStorage.toke}`]
                    ])
                  })
                     .then(res => res.json()) 
                     .then(function(res){
                         self.lista = res                      
                      })
                  .catch(function(ex) {
                      console.error(ex)
                      self.message = 'Erro'
                })
                },
        
      
                 
}

</script>

<style scoped>


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

}

.result {
    border: 1px solid black;
    border-radius: 5px;
    position: absolute;
    overflow: auto;
    height: 395px;
    width: 960px;
    margin-top: 70px


        
  
}



#usuarios { 
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  border-collapse: collapse;
  width: 940px;
 
  
}


#usuarios td, #grupos th {
  border: 1px solid #ddd;
  padding: 8px;


}

#usuarios tr:nth-child(even){background-color: #f2f2f2;}

#usuarios tr:hover {background-color: #ddd; }

#usuarios th {
  
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: rgb(40, 39, 71);
  color: white;
}

</style>