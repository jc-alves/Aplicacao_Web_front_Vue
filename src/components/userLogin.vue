<template>
    <div id="main">
        <div class="box">
     
            <div>
                <p>Usuario Logado</p>

            </div>
            <div class="calendario">
                <div class="data">
                    09/11/2022
                </div>

                
            </div>
            <div class="out">
                <li><i class="pi pi-sign-out" iconPos="right" @click="outSubmit"  />Sair</li> 


            </div>

        </div>

    </div>

</template>

<script>
import { signOut } from './auth/auth'

export default {
name: 'userLogin',

methods: {
      async outSubmit () {
        await signOut();
        this.$router.push('/');
      }
    }


}
</script>

<style scoped>

#main {
    width: 190px;
    height: 150px;
    background: rgb(235, 235, 243);
}

.foto {
    height: 60px;
    width:  60px;
    border-radius: 60px 60px 60px;
    background-color: blue;
}


</style>