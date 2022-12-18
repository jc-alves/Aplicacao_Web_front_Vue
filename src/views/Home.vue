<template>
  <main id="main">
     
			<sidebar class="sidebar"/>
      <div class="lateral">
       
        <navbar class="nav"/>
        <pages  class="pages"/>
      </div>
   
     
    
  </main>
</template>

<script>
import Navbar from '../components/Navbar.vue';

import Pages from "../components/Pages.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
  name: 'Home',
  components: { Pages, Sidebar, Navbar},
  
  methods: {
      async outSubmit () {
        await signOut();
        this.$router.push('/');
      },
      
    },
 
  mounted () {
	  
  }

}
</script>

<style scoped>

#main {
  height: 100%;
  background: rgba(245, 245, 245, 0.925);
  display: flex;
  justify-content: center;

}
.lateral {
  position: relative;
  height: 500px; 


}
.sidebar {
  position: relative;
}
 .pages {

  position: relative;
  background: white;
  padding: 3px 3px 3px;
  left: 20px;
  min-width: 1200px; 
  height: 655px;

}
 .nav {
  position: relative;
 
 }

</style>
