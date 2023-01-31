import Login_form from "../Login_form";
// import claim_details from "../claim_details";
export default                  
{ 
    state:{
        employee_data: {}                            
    },
    mutations:{
        setemployee(state,employee_data)     
        {
            state.employee_data=employee_data;                   
        } 
    },
    actions:{  
        getEmpdetails:({commit},{success,fail})=>
         {                          
           Login_form.getEmp({                                                                    
            success: (detail)=>  
            {                           
             console.log(detail)  
             commit('setemployee',detail) 
             success(detail)                            
            },                      
            failure: (error) => {  
              commit('setemployee',[])    
              fail(error)
            }
           })
         }
       
    },
    getters:{
        retrieve(state){
            console.log(state.employee_data)
            return state.employee_data
         }
    },
    namespaced: true
}