import claims from "../service/claims";
export default                  
{        
        state:{
         pro_data: {}                            
        },
        mutations:{
         setProd(state,pro_data){         
           state.pro_data=pro_data;       
         },
        },       
       actions:{                              
         getProd:({commit},{success,fail})=>
         {                          
           claims.getProducts({                                                              
            success: (detail)=>  
            {
             console.log(detail)  
             commit('setProd',detail) 
             success(detail)                            
            },
            failure: (error) => {  
              commit('setProd',[])    
              fail(error)
            }
           })
         }
       },
       getters:{      
         retrieve(state){
            console.log(state.pro_data)
            return state.pro_data
         }             
       },
       namespaced: true         
}