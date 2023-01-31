
import axios from "axios"

export default
{
    completed_man({success, failure})     
    {
        axios.get(`http://10.30.1.5:8000/claim/api/getClaimsByEmployeeId/46?status=APPROVED&role=MANAGER`)   
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

