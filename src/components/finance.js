import axios from "axios"
import { mapActions } from "vuex"
import { mapGetters } from "vuex"

export default{
    data()
    {
        return{
            users:[],
            users1:[],
            comments:"",
            claim_details:[]
        }
    },
    mounted()
    {
        this.PENDING_FINANCE_STORE(
            {success: this.onSuccess,       
            fail:this.onFail}),
            this.COMPLETED_FINANCE_STORE(
                {success: this.onSuccesscom,       
                fail:this.onFailcom})
    },
    computes:{
        ...mapGetters('pending_finance',['retrieve_pending']),
        ...mapGetters('finance_completed_store',['retrieve_completed'])
    },
    methods:{
        ...mapActions('pending_finance',['PENDING_FINANCE_STORE']),
        ...mapActions('finance_completed_store',['COMPLETED_FINANCE_STORE']),
        logout(){
            this.$router.push({path:'/'})
        },
        onSuccess(data){
            this.users= data;      
            console.log(this.users)       
        } ,
        onSuccesscom(data){
            this.users1= data;      
            console.log(this.users1)       
        } ,
        onSuccess_details(data)
        {
            this.claim_details=data;
            console.log(this.claim_details)  
        },
        approved()
        {
            alert("Claim is approved..!")
            axios.post(``,this.comments)
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
            axios.post(``,this.comments)
            .then((res) =>
                    {
                        console.log(res)  
                    })
            .catch((error) =>
                    {
                        console.log(error)  
                    })      
        },
        claim_details()
        {
            this.claim_details({success: this.onSuccess_details,       
                fail:this.onFail_details})        
        }
        },
        
        
        
    }
