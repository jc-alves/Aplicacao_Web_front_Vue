<template>

    <div class="main">
    
        <h3>Cadastro nova Ordem de Serviço</h3>
        <form action="" class="cleanForm" method="POST" @submit.prevent.stop="save" >
    <div>
        <label>Informações do Cliente</label>
        <div class="super">
           
            <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText type="text"  placeholder="Cliente" style="width: 350px;"/>

            </span>
            <span>
                <InputText type="text"  placeholder="CPF/CNPJ"  /> 
            </span>
            <span>
                <InputText type="text"  placeholder="Telefone"  /> 
            </span>

        </div>

        <div class="super">
            <span>
                <InputText type="text"  placeholder="RUA" style="width: 300px;"/> 
            </span>

            <span>
                <InputText type="text"  placeholder="Nº" style="width: 80px;" /> 
            </span> 
            <span>
                <InputText type="text"  placeholder="BAIRRO" /> 
            </span> 
            <span>
                <InputText type="text"  placeholder="CEP" /> 
            </span> 

        </div>
        <label>Informações Veículo</label>
        <div class="super">
            <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText type="text"  placeholder="PLACA" style="width: 250px;"/>

            </span>

            <span>
                <InputText type="text"  placeholder="FABRICANTE" style="width: 150px;" /> 
            </span> 
            <span>
                <InputText type="text"  placeholder="MODELO" /> 
            </span> 
            <span>
                <InputText type="text"  placeholder="ANO" /> 
            </span> 

        </div>
        <div class="center">

            <Textarea v-model="value" :autoResize="true" placeholder="Informar o problema" rows="3" cols="70" />
        </div>
        <Button label="Save" icon="pi pi-check" />
        <Button label="Limpar" class="p-button-secondary" style="margin-left: 30px"/>
        

       
    </div>
        
      
      

    
          
<!--       
            <form action="" class="cleanForm" method="POST" @submit.prevent.stop="save" >
             
               
                <InputNumber v-model="value1" mode="currency" currency="USD" locale="en-US" />

             
            <br>
           
             <input type="number" name="retirada"  placeholder="R$ 0,00" required v-model="retirada" autocomplete="off"> <br> <br> <br>
            <input type="text" class="descr" name="motivo" placeholder="Justificativa" required v-model="motivo" autocomplete="off"><br>   
                <button type="submit"  >Saque</button>
           
                <Button label="Save" icon="pi pi-check" />
            </form> -->
        
    </form> 
        </div>
    
</template>

<script>
import { ref } from 'vue';



export default {
    name: 'novaOS',
    setup() {
        const value1 = ref(42723);
        const value2 = ref(58151);
        const value3 = ref(2351.35);
        const value4 = ref(50);
        const value5 = ref(151351);
        const value6 = ref(115744);
        const value7 = ref(635524);
        const value8 = ref(732762);
        const value9 = ref(1500);
        const value10 = ref(2500);
        const value11 = ref(4250);
        const value12 = ref(5002);
        const value13 = ref(20);
        const value14 = ref(50);
        const value15 = ref(10);
        const value16 = ref(20);
        const value17 = ref(20);
        const value18 = ref(10.50);
        const value19 = ref(25);
        const value20 = ref(50);

        return { value1, value2, value3, value4, value5, value6, value7, value8, value9, value10,
            value11, value12, value13, value14, value15, value16, value17, value18, value19, value20 }
        }
    
}
</script>

<style scoped>

.main {


    width: 100%;
    min-width: 1000px;
    align-content: flex-start;
    justify-content: end;
    justify-items: end;
    justify-self: end;

}
.super {

    margin: 0 auto;
    height: 60px;
    width: 80%;
    max-width: 1000px;
    min-width: 800px;


    display: flex;
    align-items: center
    

 
}
span {
    margin-left: 30px;
}

.cliente {
    width: 100px;
}
.center {
    margin-top: 20px ;
}

</style>