import category from "../service/category";

export default                  
{ 
    state:{
        category_data: {}                            
    },
    mutations:{
        setcatdata(state,category_data)     
        {
            state.category_data=category_data;                   
        } 
    },
    actions:{
        CATEGORY_STORE:({commit},{success,fail}) =>
            {
                category.getProducts({                                                              
                    success: (detail)=>  
                    {                 
                     console.log(detail)  
                     commit('setcatdata',detail.data.data) 
                     success(detail)                            
                    },
                    failure: (error) => {  
                      commit('setcatdata',[])         
                      fail(error)
                    }     
                   })
            }    
    },
    getters:{
        retrieve_cat(state)
        {
            console.log(state.category_data)
            return state.category_data
        }
    },
    namespaced:true
}