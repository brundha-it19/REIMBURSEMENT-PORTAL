import axios from "axios"

export default
{
    rejected({success, failure})     
    {
        axios.get(`http://10.30.1.5:8000/claim/api/getClaimsByEmployeeId/50?status=REJECTED&role=EMPLOYEE`)   
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
    // rejected_man({success, failure})
    // {
    //     axios.get(`https://769b-103-224-35-103.ap.ngrok.io/claim/api/getClaimsByEmployeeId/46?status=REJECTED&role=MANAGER`)   
    //     .then(
    //         (data)=>           
    //         {      
    //             success(data)                                                             
    //         }      
    //     )
    //     .catch((error) => {
    //         failure(error)
    //     }                
    //         )
    // }
}