// import Vue from "Vue"
import axios from "axios"
import Multiselect from 'vue-multiselect'
import { mapActions } from "vuex"
import { mapGetters } from "vuex"
// Vue.component('multiselect', Multiselect)

export default{
    components: { Multiselect },
    data()
    {
        return{
            catdata:null,
            claimCategory:"",
            rejclaims:null,
            showTable:false,
            // users:[
            // {
            //     claimid:1,
            //     claimcategory:"travel",
            //     Amount :4000,
            //     StatusbyManager:"approved",
            //     StatusbyFinance:"approved",
                
            // },
            // {
            //     claimid:2,
            //     claimcategory:"officestatonery",
            //     Amount :5000,
            //     StatusbyManager:"approved",
            //     StatusbyFinance:"approved"
            // },
            // {
            //     claimid:1,
            //     claimcategory:"travel",
            //     Amount :4000,
            //     StatusbyManager:"approved",
            //     StatusbyFinance:"approved"
            // },
            // {
            //     claimid:1,
            //     claimcategory:"travel",
            //     Amount :4000,
            //     StatusbyManager:"approved",
            //     StatusbyFinance:"approved"
            // }],
            users:[],
            users1:[],
            users2:[],
            statusMan:"PENDING",
            statusFin:"PENDING",
            newclaim:
                    {
                    FromDate: " ",
                    ToDate:" ",         
                    Amount: " ",
                    office_stationary_type:" ",
                    Description:""                                     
                    },
                category:[],
                value: [],
                options: [
                    { name: 'Markers' },
                    { name: 'Dusters' },
                    { name: 'Office chairs' },
                    { name: 'Tables' },
                    { name: 'Dustbins' },
                  ]
        }
    },
    computed:
    {
        ...mapGetters('Employee_information',['retrieve']),
        ...mapGetters('All_claims',['retrieve']),
        ...mapGetters('categorydata',['retrieve_cat']),
        ...mapGetters('completedclaims',['retrieve1','retrieveFlag']),
        ...mapGetters('Rejectedclaims',['retrieve2','retrieveFlag1']) ,  
        ...mapGetters('categorydata',['retrieve_cat'])
    },
    mounted()           
         {           
        this.getProd({                 
            success: this.onSuccess,       
            fail:this.onFail          
        }),   
        this.COMPLETED_STORE({
            success: this.onSuccesscomp,       
            fail:this.onFailcomp
        })
    },
    methods:{
        ...mapActions('Employee_information',['get_emp']),
        ...mapActions('All_claims',['getProd']),
        ...mapActions('categorydata',['CATEGORY_STORE']),
        ...mapActions('completedclaims',['COMPLETED_STORE','getFlag']),    
        ...mapActions('Rejectedclaims',['REJECTED_STORE','getFlag1']),   
        ...mapActions('categorydata',['CATEGORY_STORE'])   ,
        onSuccess(data) {               
            this.users= data;      
            console.log(this.users)   
            console.log(this.users.data.data[0].claim_amount)
        },
        onSuccesscomp(data) {               
            this.users1= data;      
            console.log(this.users1)   
            // console.log(this.users.data.data[0].claim_amount)
        },
        onSuccesscat(data)
        {
            this.users2= data;      
            console.log(this.users2) 
        },
        // onSuccesscomp(data)
        // {
        //     this.comp=data;
        // },
        getclaims()
        {
            axios.get(``)
            .then((res) =>
            {
                console.log(res);
                this.users=res.data;
            })
            .catch((error) =>
            {
                console.log(error);      
            })                   
        },   
        getcatdata() 
        // http://10.30.1.5:8000/claim/api/getAllCategories
        {
            // axios.get(`http://10.30.1.5:8000/employee/api/getAllCategories`)
            //         .then((res) =>
            //         {            
            //             console.log(res)
                          
            //             // console.log(res.data.data[0].name) ;
            //             // res.data.data.map(s =>{
            //             //     this.category.push(s.name)
            //             //     console.log(s.name);   
            //             //     this.catdata = res;
            //             //     this.$store.commit("setcatdata", this.catdata);
                        
            //             // v-for="(item,index) in res.data.data" :key="index"
            //         })
            //         .catch((error) =>
            //         {
            //             console.log(error)  
                        
            //         })       
            this.CATEGORY_STORE({success: this.onSuccesscat,       
                fail:this.onFailcat})
        },
        newclaimpost(){
            if(this.FromDate==null || this.ToDate==null || this.office_stationary_type==null || this.Amount==null || this.Description==null)
            {
                alert("Please provide your information..!")
            }
            else{      
            alert("You have submitted Succesfully..!");   
            }
            
            
        },
        completed(){
            this.showTable=true
            this.COMPLETED_STORE({success: this.onSuccess,       
                fail:this.onFail}),
                this.getFlag(true)                
        },
        Rejected(){      
            this.REJECTED_STORE({success: this.onSuccess,       
                fail:this.onFail}) ,
                this.getFlag1(true)      
                if(this.retrieve2.data==null)
                {
                    this.rejclaims="No Records Found";     
                }    
        },
        logout(){
            this.$router.push({path:'/'})
        },
        
       open(){        
            this.getProd({success: this.onSuccess,       
                fail:this.onFail})                    
        }           
        // getselectedvalue(select)     
        // {
        //     console.log(select)
        //     var selectedvalue=document.getElementById("category").value
        //     console.log(selectedvalue);
        //     // if(selectedvalue.value!="Travel"){
        //         // document.getElementById(divId).style.display = category.value == "Travel" ? 'block' : 'none';
        //     //    }
        //     if (select.value == 'Travel') { 
        //     document.getElementById('travel').style.display = 'block';
        //     document.getElementById('office').style.display = 'none';
        //     document.getElementById('others').style.display = 'none';
        // }   
        // else if (select.value == 'Office stationery') {
        //     document.getElementById('travel').style.display = 'none';
        //     document.getElementById('office').style.display = 'block';
        //     document.getElementById('others').style.display = 'none';
        // }
        
    },
    watch:{
        retrieve(newvalue)
        {
            this.users=newvalue
            console.log(this.users)
        },
        retrieve1(newvalue)            
        {      
            this.users1=newvalue
            console.log(this.users1)
        },
        // retrieve1(newvalue)   
        // {
        //     this.users1=newvalue
        //     console.log(this.users1)        
        // }
    }
}      
