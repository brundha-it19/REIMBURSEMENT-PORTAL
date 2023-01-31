import VueRouter from 'vue-router'
import Login_form from '/Users/brundha/Documents/vue/project/my-project/src/components/Login_form.vue'
import claim_details from '/Users/brundha/Documents/vue/project/my-project/src/components/claim_details.vue'
import Manager_claim from '/Users/brundha/Documents/vue/project/my-project/src/components/Manager_claim.vue'
import finance_claim from '/Users/brundha/Documents/vue/project/my-project/src/components/finance_claim.vue'
import Vue from 'vue';

Vue.use(VueRouter);
const routes=[  
    {
        path:'/',        
        name:'Login_form',         
        component:Login_form  
    },
    {
        path:'/home',        
        name:'claim_details',         
        component:claim_details 
    },
    {
        path:'/manager',        
        name:'Manager_claim',         
        component:Manager_claim 
    },
    {
        path:'/finance',        
        name:'finance_claim',         
        component:finance_claim 
    }
]       
const router=new VueRouter(
    {                            
        mode:"history",      
        routes
    }
) 
export default router;
