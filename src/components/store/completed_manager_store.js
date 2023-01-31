
import completed_manager_claims from "../service/completed_manager_claims";

export default                  
{        
        state:{  
            completed_manager_data: [],         
        },
        mutations:{
            completed(state,completed_manager_data)
            {
                state.completed_manager_data=completed_manager_data;    
            },
            // setFlag(state,data){
            //     state.is_completed=data
            // }
        },
        actions:{   
            COMPLETED_MANAGER_STORE:({commit},{success,fail}) =>
            {
                completed_manager_claims.completed_man({                                                              
                    success: (detail)=>  
                    {                 
                     console.log(detail)  
                     commit('completed',detail) 
                     success(detail)                            
                    },
                    failure: (error) => {  
                      commit('completed',[])         
                      fail(error)
                    }     
                   })
            }    
            // getFlag({commit},{success,fail})                    
            // {
                
            // }     
        },
        getters:{
            retrieve_completed_man(state){
                console.log(state.completed_manager_data)
                return state.completed_manager_data
             }
        },
        namespaced: true      
    }