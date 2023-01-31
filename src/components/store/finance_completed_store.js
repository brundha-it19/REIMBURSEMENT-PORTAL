import completed_finance from "../service/completed_finance";
export default                  
{        
        state:{  
            finance_data_comp: [],         
        },
        mutations:{
            pending(state,finance_data_comp)
            {
                state.finance_data_comp=finance_data_comp;    
            },
            // setFlag(state,data){
            //     state.is_completed=data
            // }
        },
        actions:{   
            COMPLETED_FINANCE_STORE:({commit},{success,fail}) =>
            {
                completed_finance.completed_fin({                                                              
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
            retrieve_completed(state){
                console.log(state.finance_data_comp)
                return state.finance_data_comp
             }
        },
        namespaced: true      
    }