<template>

<router-view />
       

 
</template>

<script>


export default {
    name: "app",

}
</script>


<style>
#app {
    width: 800px;
    margin: 0 auto;
}
.inputText {
    display: block;
    border-bottom: groove;
    border-top: none; 
    text-transform: uppercase;
  }
  .line {
    display: flex;
    padding: 10px 0 10px;
  }
  label {
    box-sizing: border-box;
    margin-inline: 10px;
  }
  #grupos {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    border-collapse: collapse;
    width: 940px;
    text-align-last: center;
  }
  #grupos td,
#grupos th {
  border: 1px solid #ddd;
  padding: 8px;
}

#grupos tr:nth-child(even) {
  background-color: #f2f2f2;
}

#grupos tr:hover {
  background-color: #ddd;
}

#grupos th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: rgb(40, 39, 71);
  color: white;
}

</style>