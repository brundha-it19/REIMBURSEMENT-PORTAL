<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Login_form/> -->
    <!-- <claim_details/> -->
    <!-- <Manager_claim/> -->
    <router-view/>
    <!-- <finance_claim/> -->
  </div>
</template>
<script>
// import finance_claim from './components/finance_claim.vue'
// import Manager_claim from './components/Manager_claim.vue'         
// import HelloWorld from './components/HelloWorld.vue'
// import Login_form from './components/Login_form.vue'
// import claim_details from './components/claim_details.vue'
export default {
  name: 'App',                               
  components: {
    // finance_claim
    // Manager_claim
    // Login_form
    // claim_details         
    // HelloWorld
  }
}
</script>
<style>       
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
