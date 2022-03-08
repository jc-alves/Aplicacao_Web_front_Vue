<template>
  <main>
  		<div class="sidebar">

			<sidebar/>
		</div>

        <div class="pages">

			<pages />
		</div>

   
  </main>
</template>

<script>

import Pages from "../components/Pages.vue";
import Sidebar from "../components/Sidebar.vue";




export default {
  name: 'Home',
  components: { Pages, Sidebar },
  
  mounted () {
	  
  }

}
</script>

<style scoped>

main {
  height: 680px;
  
  display: block;  
}

.pages {

height: 500px;


}

.sidebar {

  margin-top: 0%;
}


</style>
