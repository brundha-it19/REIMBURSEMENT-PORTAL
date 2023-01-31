import axios from "axios"

export default
{
    completed_fin({success, failure})     
    {
        axios.get(`http://10.30.1.5:8000/claim/api/getClaimsByEmployeeId/86?status=APPROVED&role=FINANCIER`)   
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