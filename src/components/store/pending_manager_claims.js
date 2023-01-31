import pending_manager from "../service/pending_manager";
export default                  
{        
        state:{  
            pending_manager_data: [],         
        },
        mutations:{
            completed(state,pending_manager_data)
            {
                state.pending_manager_data=pending_manager_data;    
            },
            // setFlag(state,data){
            //     state.is_completed=data
            // }
        },
        actions:{   
            PENDING_MANAGER_STORE:({commit},{success,fail}) =>
            {
                pending_manager.pending_man({                                                              
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
            retrieve_pending(state){
                console.log(state.pending_manager_data)
                return state.pending_manager_data
             }
        },
        namespaced: true      
    }