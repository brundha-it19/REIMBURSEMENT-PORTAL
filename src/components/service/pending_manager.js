import axios from "axios"

export default
{
    pending_man({success, failure})     
    {
        axios.get(`http://10.30.1.5:8000/claim/api/getClaimsByEmployeeId/46?status=PENDING&role=MANAGER`)   
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