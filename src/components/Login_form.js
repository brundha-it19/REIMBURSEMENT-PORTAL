import axios from "axios"

// import router from "./router"
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default
{
    name:"Login_form",
    data()
    {                    
        return{
            PostData:{
                email:"",                     
                password:""
            },
            status:null,
            users: null,
            Employee_info:{
            },
            role: null,
            // Login_credentials:[  
            //     {username:"Brundha",password:"12345"},
            //     {username:"abinaya",password:"12345"},
            //     {username:"anu",password:"12345"},
            //     {username:"admin",password:"admin"}
            // ] 
            Login_status:[]
        }
    },
    computed:
    {
        ...mapGetters('Employee_Information',['retrieve']),
    },
   mounted()
   {
        this.getEmpdetails(
            {       
                success:this.onsuccess,
                fail:this.onfail
            }     
        )
   },
    methods:
    {
        ...mapActions('Employee_Information',['getEmpdetails']),
        onsuccess(data)
        {
          this.Employee_info=data;
          console.log(this.Employee_info)
        },
        // verify()     
        // {           
        //      let val=this.Login_status.find(item =>  
        //     this.PostData.username === item.username  &&
        //      this.PostData.password === item.password);
        //     if(val)   
        //     {  
        //         console.log(val)                   
        //     alert("Login successfull");
        //     this.$router.push({name:"claim_details"});
        //     }
        //     else{    
        //     alert("Login failed");
        //     }      
        // }
        post_credentials()                                       
        {
            console.log("login post data")     
            
            // axios.post(`http://10.30.1.5:8000/employee/api/auth`,this.PostData)
            axios.post(`http://10.30.1.5:8000/employee/api/auth`,this.PostData)
            .then((res) =>      
            {         
                console.log(res);            
                if(res.data.status == 200)       
                {
                    alert("Login successful..!"); 
                    axios.get(`http://10.30.1.5:8000/employee/api/getEmployeeDetailsByEmail?emailId=`+this.PostData.email)
                    .then((res)=>
                    {             
                        console.log(res)          
                        // this.users = res;
                        // this.$store.commit("setemployee", this.users);
                        this.role=res.data.data.role;        
                        if(res.data.data.role=="EMPLOYEE")    
                        {     
                            console.log("routed")
                            this.$router.push({path:"/home"});          
                        }
                        else if(res.data.data.role=="MANAGER")
                        {
                            console.log("routed")
                            this.$router.push({path:"/manager"}); 
                        }
                        else if(res.data.data.role=="FINANCIER")
                        {
                            console.log("routed")
                            this.$router.push({path:"/finance"}); 
                        }
                    })              
                    .catch((error) =>      
                    {
                        console.log(error)
                    })
                }
            }) 
            .catch((error) =>
            {
                console.log(error)
                alert("Login failed..!")
            }
            )
        },
            
        
    }
}

