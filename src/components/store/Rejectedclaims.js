import rejected_claims from "../service/rejected_claims"
export default                  
{        
        state:{  
            rejected_data: [],  
            is_Rejected:false
        },
        mutations:{
            rejected(state,rejected_data)
            {
                state.rejected_data=rejected_data;    
            },
            setFlag(state,data){       
                state.is_Rejected=data     
            }
        },
        actions:{   
            REJECTED_STORE:({commit},{success,fail}) =>
            {
                rejected_claims.rejected({                                                              
                    success: (detail)=>  
                    {
                     console.log(detail)  
                     commit('rejected',detail) 
                     success(detail)                            
                    },
                    failure: (error) => {  
                      commit('rejected',[])    
                      fail(error)
                    }    
                   })
            },
            getFlag1({commit},data){
                commit('setFlag',data)
            }
            
        },
        getters:{
            retrieve2(state){
                console.log(state.rejected_data)
                return state.rejected_data
             } ,
             retrieveFlag1(state){
                return state.is_Rejected
             }
        },
        namespaced: true        
    }