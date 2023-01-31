import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './components/router'
import Login_Credentials from './components/store/Login_Credentials'
import categorydata from './components/store/categorydata' 
import Employee_information from './components/store/Employee_information'
import All_claims from './components/store/All_claims'
import completedclaims from './components/store/completedclaims'
import Rejectedclaims from './components/store/Rejectedclaims'
import pending_manager_claims from './components/store/pending_manager_claims'
import completed_manager_store from './components/store/completed_manager_store'
import pending_finance from './components/store/pending_finance'
import finance_completed_store from './components/store/finance_completed_store'

Vue.config.productionTip = false
Vue.use(Vuex)

const store=new Vuex.Store({
  modules:
  {
      Login_Credentials,categorydata,Employee_information,All_claims,completedclaims,Rejectedclaims,pending_manager_claims,
      completed_manager_store,pending_finance,finance_completed_store
  }
})
new Vue({
  render: h => h(App),
  store,router
}).$mount('#app')
