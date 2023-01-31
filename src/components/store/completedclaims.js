import completed_claims from "../service/completed_claims";
export default                  
{        
        state:{  
            comp_data: [],  
            is_completed:false         
        },
        mutations:{       
            completed(state,comp_data)
            {
                state.comp_data=comp_data;    
            },                                
            setFlag(state,data){
                state.is_completed=data
            }
        },
        actions:{   
            COMPLETED_STORE:({commit},{success,fail}) =>    
            {
                completed_claims.completed({                                                              
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
            },
            getFlag({commit},data){
                commit('setFlag',data)
            }
            // getFlag({commit},{success,fail})
            // {
                
            // }
        },
        getters:{
            retrieve1(state){
                console.log(state.comp_data)
                return state.comp_data
             } ,
             retrieveFlag(state){
                return state.is_completed
             }
        },                
        namespaced: true      
    }