import finance_pending from "../service/finance_pending";
export default                  
{        
        state:{  
            finance_data: [],         
        },
        mutations:{
            pending(state,finance_data)
            {
                state.finance_data=finance_data;    
            },
            // setFlag(state,data){
            //     state.is_completed=data
            // }
        },
        actions:{   
            PENDING_FINANCE_STORE:({commit},{success,fail}) =>
            {
                finance_pending.pending_fin({                                                              
                    success: (detail)=>  
                    {
                     console.log(detail)  
                     commit('pending',detail) 
                     success(detail)                            
                    },
                    failure: (error) => {  
                      commit('pending',[])         
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
                console.log(state.finance_data)
                return state.finance_data
             }
        },
        namespaced: true      
    }