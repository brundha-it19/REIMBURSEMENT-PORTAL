
import axios from "axios"

export default
{
    getProducts({success, failure})     
    {
        axios.get(`http://10.30.1.5:8000/claim/api/getAllCategories`)   
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