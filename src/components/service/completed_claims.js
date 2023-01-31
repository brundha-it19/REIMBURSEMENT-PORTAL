import axios from "axios"

export default
{
    completed({success, failure})     
    {
        axios.get(`http://10.30.1.5:8000/claim/api/getClaimsByEmployeeId/50?status=APPROVED&role=EMPLOYEE`)   
        .then(
            (data)=>           
            {      
                success(data)                                                            
            }      
        )
        .catch((error) => {
            failure(error)
        })
    }   
}