import axios from "axios"

export default
{
    Login_response({success, failure})
    {
        axios.get(``)   
        .then(
            (data)=>           
            {      
                success(data)                                               
            }      
        )
        .catch((error) => {
            failure(error)
        }                
        )
    }    
}