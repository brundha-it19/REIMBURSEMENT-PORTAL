
import Login_details_api from '../service/Login_details_api';

export default                  
{        
        state:{
            Login_data: {}                            
        },
        mutations:{
            setcredentials(state,Login_data){         
           state.Login_data=Login_data;       
         },
        },       
       actions:{                              
        Login_response:({commit},{success,fail})=>
         {                          
           Login_details_api.Login_response({                                                              
            success: (detail)=>  
            {                                
             console.log(detail)  
             commit('setcredentials',detail) 
             success(detail)                            
            },
            failure: (error) => {  
              commit('setcredentials',[])    
              fail(error)
            }
           })
         }
       },
       getters:{      
         retrieve(state){
            console.log(state.Login_data)
            return state.Login_data
         }
       },
       namespaced: true         
}
