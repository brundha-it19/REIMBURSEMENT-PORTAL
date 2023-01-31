import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import axios from "axios"

export default{
    data()
    {
        return{
            newclaim:
                    {
                    FromDate: " ",
                    ToDate:" ",         
                    Amount: " ",
                    office_stationary_type:" ",
                    Description:""                                     
                    },
                    users:[],
                    users1:[],
                    claimCategory:"",
                    category:[],
                    rej_man:null,
                    status1:"",
            status:{
                    comments:" ",
                    status1:"",   
                    claimid:" ",
                    approverid:""

                }     

        }
        
    },
    mounted()
    {
        this.PENDING_MANAGER_STORE(
            {success: this.onSuccess,       
            fail:this.onFail}),
            this.COMPLETED_MANAGER_STORE({success: this.onSuccesscom,       
                fail:this.onFailcom})  
            // ,
            //     this.COMPLETED_MANAGER_STORE(
            //         {success: this.onSuccesscom,       
            //         fail:this.onFailcom})
        
    },
    computed:{
        ...mapGetters('pending_manager_claims',['retrieve_pending']),
        ...mapGetters('completed_manager_store',['retrieve_completed_man'])
    },
    methods:{  
        ...mapActions('pending_manager_claims',['PENDING_MANAGER_STORE']), 
        ...mapActions('completed_manager_store',['COMPLETED_MANAGER_STORE']),
        approved()
        {
            alert("Claim is approved..!")
            this.status1="approved";
            axios.put(`http://10.30.1.5:8000/claim/api/updateClaimStatus`,this.status)
            .then((res) =>
            {
                console.log(res)                
            })
            .catch((error) =>
            {
                console.log(error)
            })
        },
        Reject()
        {
            alert("Claim is Rejected..!")
            this.status1="Rejected";
            axios.put(`http://10.30.1.5:8000/claim/api/updateClaimStatus`,this.status)
            .then((res) =>
            {
                console.log(res)                
            })
            .catch((error) =>
            {
                console.log(error)
            })
        },
        open()
        { 
            this.PENDING_MANAGER_STORE({success: this.onSuccess,       
                fail:this.onFail})      

        },
        completed()
        {
            this.COMPLETED_MANAGER_STORE({success: this.onSuccesscom,       
                fail:this.onFailcom})  
        },
        Rejected()
        {
            axios.post(`http://10.30.1.5:8000/claim/api/getClaimsByEmployeeId/46?status=REJECTED&role=MANAGER`).then((data)=>           
                    {      
                        console.log(data)   
                        if(data==null)
                        {       
                            this.rej_man="No Records Found";
                            console.log(this.rej_man)
                        }                                                        
                    })
                    .catch((error) =>      
                    {
                        console.log(error)
                    })  
        },
        logout(){
            this.$router.push({path:'/'})
        },
        onSuccess(data){        
            this.users= data;              
            console.log(this.users)   
            this.claimid= this.users.data.data[0].claimId  
            // this.approverid=this.users.data.data[0].approverid  
        } ,
        onSuccesscom(data){
            this.users1= data;      
            console.log(this.users1)       
        } ,            
        getcatdata() 
        {
            axios.get(`http://10.30.1.5:8000/claim/api/getAllCategories`)
                    .then((res) =>
                    {         
                        console.log(res)
                        // console.log(res.data.data[0].name) ;
                        res.data.data.map(s =>{
                            this.category.push(s.name)       
                            console.log(s.name);   
                            this.catdata = res;
                            this.$store.commit("setcatdata", this.catdata);          
                        })
                        // v-for="(item,index) in res.data.data" :key="index"
                    })
                    .catch((error) =>
                    {
                        console.log(error)  
                    })       
        },
        // comments()
        // {
        //     axios.post(`http://10.30.1.5:8000/claim/api/updateClaimStatus`,this.status)
        //     .then((res) =>
        //     {
        //         console.log(res)                
        //     })
        //     .catch((error) =>
        //     {
        //         console.log(error)
        //     })
        // }

    },
    watch:{
        retrieve_pending(newvalue)
        {   
                this.users=newvalue
                console.log(this.users)
        },
        retrieve_completed_man(newvalue)
        {   
                this.users1=newvalue
                console.log(this.users1)
        }
    }
}

