<template>
    <div>   
      <!-- {{ retrieveFlag }}     -->
        <header class="header"> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>   
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
     -->
     <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"/>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-multiselect/0.9.13/css/bootstrap-multiselect.css"/> -->
     <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->
     <link rel="stylesheet" href="https://unpkg.com/vue-multiselect@2.1.6/dist/vue-multiselect.min.css">
     <i class="fa fa-user" id="user" aria-hidden="true" style="font-size:20px;color:black;text-align: center;">&nbsp;<button class="btn" @click="logout()">Logout</button> </i>
       <p style="font-family:cursive;font-size:40px;"><b>Claims</b> </p>
       <p style="font-family:cursive;"><b> Employee login</b></p>
       <div class="topnav">           
  <a class="active" href="#open" @click="open()">Open</a>
  <a href="#completed"  iscompleted='true' @click="completed()">Completed</a>
  <a href="#rejected"  isRejected='true' @click="Rejected()">Rejected</a>    
</div>      
<!-- <button id="newclaim"  class="button" href="#popup1"> Newcliam </button> -->

<a class="button" id="ss" href="#popup1">New claim</a>
       </header>      
       <div class="sidenav">
        <br/>
        <br/>
  <a href="http://localhost:8080/home" style="font-family:cursive;margin-right:20px;font-size:20px;color:white;">Your Claims and its details is avaliable in this page..!</a>
  <br/>
  <br/>
  <!-- <a href="#" style="font-family:cursive;margin-right:50px;font-size:20px;color:white">Employee Claims</a> -->
  
</div>


<div class="container">
  <p style="font-family:cursive;font-size:20px;color:black"><b>Pending claims..!</b></p>
  <!-- {{ retrieveFlag }} -->
  <table class="table table-striped table-dark">
   <thead>
      <tr>
      <!-- <th scope="col"> employee id </th> -->
      <th scope="col">Claim I'd</th>      
      <th scope="col">Claim Category</th>
      <th scope="col">Description</th>       
      <th scope="col">Amount to be claimed</th>
      <th scope="col">Status by Manager</th>
      <th scope="col">Status by Finance</th>
      </tr>
    </thead>
  <tbody>
       <tr>
        <!-- <td> {{ users.data.data[0].employee }} </td>  -->
         <td id="coll"> {{ users.data.data[0].id }} </td>
        <td> {{ users.data.data[0].claimCategory?.name }}</td>       
        <td> {{ users.data.data[0].description }} </td>         
        <td> {{ users.data.data[0].claim_amount }} </td>                
        <td>{{ statusMan }} </td>
        <td> {{ statusFin }} &nbsp; <button
          class="btn btn-primary" id="coll1" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">expand</button></td>
      </tr> 
      <div id="collapseExample1" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card card-body"  id="coll1" >
        Claim I'd : {{ users.data.data[0].id }}<br/>
        Claim category : {{ users.data.data[0].claimCategory.name }}<br/>    
        Claim Description : {{ users.data.data[0].description }}<br/>
        Claim Amount : {{ users.data.data[0].claim_amount }}<br/>
        From Date : {{ users.data.data[0].from_date }}<br/>
        To Date :{{ users.data.data[0].to_date }}<br/>
      </div>
    </div>
      
      <tr>
        <!-- <td> {{ users.data.data[1].employee }} </td>  -->
         <td> {{ users.data.data[1].id }} </td>
        <td> {{ users.data.data[1].claimCategory?.name }}</td>    
        <td> {{ users.data.data[1].description }} </td>
        <td> {{ users.data.data[1].claim_amount }} </td>     
        <td> {{ statusMan }} </td>
        <td> {{ statusFin }} &nbsp; <button
          class="btn btn-primary" id="coll2" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">expand</button></td>
      </tr> 
      <div id="collapseExample2" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card card-body"  id="coll2">
        Claim I'd :{{ users.data.data[1].id }}<br/>
        Claim category :{{ users.data.data[1].claimCategory.name }}<br/>
        Claim Description :{{ users.data.data[1].description }}<br/>
        Claim Amount :{{ users.data.data[1].claim_amount }}<br/>
        From Date : {{ users.data.data[1].from_date }}<br/>
        To Date :{{ users.data.data[1].to_date }}<br/>
      </div>
    </div>
<tr>
        <!-- <td> {{ users.data.data[2].employee }} </td>  -->
         <td> {{ users.data.data[2].id }} </td>
        <td> {{ users.data.data[2].claimCategory?.name }}</td>    
        <td> {{ users.data.data[2].description }} </td>
        <td> {{ users.data.data[2].claim_amount }} </td>
        <td> {{ statusMan }} </td>
        <td>{{ statusFin }} &nbsp; <button
          class="btn btn-primary" id="coll3" data-toggle="collapse" data-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">expand</button></td>
      </tr> 
      <div id="collapseExample3" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card card-body"  id="coll3" >
        Claim I'd :{{ users.data.data[2].id }}<br/>
        Claim category :{{ users.data.data[2].claimCategory.name }}<br/>
        Claim Description :{{ users.data.data[2].description }}<br/>
        Claim Amount : {{ users.data.data[2].claim_amount }}<br/>
        From Date :{{ users.data.data[2].from_date }}<br/>
        To Date :{{ users.data.data[2].to_date }}<br/>
      </div>
    </div>
      <tr>

         <td> {{ users.data.data[3].id }} </td>
        <td> {{ users.data.data[3].claimCategory.name }}</td>        
        <td> {{ users.data.data[3].description }} </td>
        <td> {{ users.data.data[3].claim_amount }} </td>    
        <td> {{ statusMan }}</td>   
        <td> {{ statusFin }}  &nbsp; <button
          class="btn btn-primary" id="coll4" data-toggle="collapse" data-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">expand</button></td> 
      </tr>  
      <div id="collapseExample4" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card card-body"  id="coll4" >
        Claim I'd :{{ users.data.data[3].id }}<br/>
        Claim category :{{ users.data.data[3].claimCategory.name }}<br/>
        Claim Description :{{ users.data.data[3].description }}<br/>
        Claim Amount : {{ users.data.data[3].claim_amount }}<br/>
        From Date :{{ users.data.data[3].from_date }}<br/>
        To Date :{{ users.data.data[3].to_date }}<br/>
      </div>
    </div>
       
          
   
</tbody>
</table>
<p style="font-family:cursive;font-size:20px;color:black"><b>Completed claims..!</b></p>
<table v-if="true" class="table table-striped table-dark">
  <tr>
      <td> <b>claim id</b> </td>
      <td> <b>claim category</b></td>
      <td> <b>Description</b></td>
      <td> <b>Claim amount</b> </td>
      <td> <b>Status by Manager</b></td>
      <td> <b>Status by Finance</b></td>
    </tr>
    <tr> 
        <td> {{  users1.data.data[0].claimId }}</td>
        <td> {{  users1.data.data[0].category }}</td>
        <td> {{  users1.data.data[0].description }}</td>
        <td> {{  users1.data.data[0].amount }}</td>
        <td> {{ users1.data.data[0].statusOfApprovers[0].status }}</td>
        <td> {{ users1.data.data[0].statusOfApprovers[1].status }}</td>

    </tr>
    <!-- <tr> 
        <td> {{  users1.data.data[1].claimId }}</td>
        <td> {{  users1.data.data[1].category }}</td>
        <td> {{  users1.data.data[1].description }}</td>
        <td> {{  users1.data.data[1].amount }}</td>
        <td> {{ users1.data.data[1].statusOfApprovers[0].status }}</td>
        <td> {{ users1.data.data[1].statusOfApprovers[1].status }}</td>

    </tr> -->
    </table>
    <p style="font-family:cursive;font-size:20px;color:black"><b>Rejected claims..!</b></p>
    <table v-if="true" class="table table-striped table-dark">
      <tr>
      <td> <b>claim id</b> </td>
      <td> <b>claim category</b> </td>
      <td> <b>Description</b></td>
      <td> <b>Claim amount</b> </td>
      <td> <b>Status by Manager</b></td>
      <td> <b>Status by Finance</b></td>
      </tr>         
    <tr id="rec"> 
      {{ rejclaims }} 
    </tr>
  </table>     
</div>


<div class="cont">
<div id="popup1" class="overlay" >
	<div class="popup">
		<h2 style="font-family:cursive">Add New Claim</h2>
    &nbsp;
		<a class="close" href="#">&times;</a>
		<div class="content">                          
			<label for="category" style="font-family:cursive">Choose Claim Category:</label><br/><br/>
  <select name="claim category" id="category" v-model="claimCategory" placeholder="select"  @click="getcatdata()">
    <option value="travel"> {{ users2?.data?.data[0]?.name }}</option>
    <option value="Office stationery"> {{ users2?.data?.data[1]?.name }} </option>
    <option value="others"> {{ users2?.data?.data[2]?.name }} </option>
    &nbsp;
 </select>
 <br/>
 <br/>
 <div v-if="claimCategory.toLowerCase()=='travel'">
 <label id="travel"  for="From Date" style="font-family:cursive;">From Date:</label>
 <!-- <label> From Date:</label> -->
 <br/>           
 <br/>
  <input id="travel" type="date" v-model="newclaim.FromDate" style="font-family:cursive;" name="From Date" />
  <br/><br/>
  <label id="travel" for="To Date" style="font-family:cursive">To Date:</label><br/><br/>
  <input id="travel" type="date" v-model="newclaim.ToDate" style="font-family:cursive" name="To Date" max="2023-01-29"/>
  <br/>
  <br/>
  <label id="travel" for="Amount"  style="font-family:cursive;"> Amount: </label><br/><br/>
  <input id="travel" v-model="newclaim.Amount" style="font-familt:cursive;width:100px;"/>
  <br/>
  <br/>
  
  <label id="travel" for="Image" style="font-family:cursive;"> Bill image: </label><br/><br/>
  <input id="travel"  style="font-family:cursive;margin-left: 110px;" type="file" multiple name="filename"><br/><br/>
  <button style="font-family:cursive;border:2px solid black;border-radius:5px;"  @click="newclaimpost()"> Submit </button>
  </div>
 <div id="office" v-else-if="claimCategory.toLowerCase()=='office stationery'"> 
  <label style="font-family:cursive;">Stationery products name:</label><br/><br/>
  <div>
  <multiselect v-model="value" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick some" label="name" track-by="name" :preselect-first="true">
    <template slot="selection" slot-scope="{ values,  isOpen }"><span class="multiselect__single" v-if="values.length" v-show="!isOpen">{{ values.length }} options selected</span></template>
  </multiselect>
  <!-- <pre class="language-json"><code> {{ options[0].name }} </code></pre> -->
</div>

  <br/>
  <label id="travel" for="Amount"  style="font-family:cursive;"> Amount: </label><br/><br/>
  <input id="travel" v-model="newclaim.Amount" style="font-familt:cursive;width:100px;"/>
  <br/>
  <br/>
  
  <label id="travel" style="font-family:cursive;"> Description </label>
  <br/><br/>
  <input id="travel" style="font-familt:cursive;width:100px;"/><br/><br/>
  <label id="travel" for="Image" style="font-family:cursive;"> Bill image: </label><br/><br/>
  <input id="travel" style="font-family:cursive;margin-left: 110px;" type="file" multiple name="filename"><br/><br/>
  <button style="font-family:cursive;border:2px solid black;border-radius:5px;" @click="newclaimpost()"> Submit </button>
 </div>
 <div id="others" v-else-if="claimCategory.toLowerCase()=='others'">     
  <label id="travel" for="Amount" style="font-family:cursive;"> Amount: </label><br/><br/>
  <input id="travel" v-model="newclaim.Amount" style="font-familt:cursive;width:100px;"/>
  <br/>
  <br/>
  <label id="travel" style="font-family:cursive;"> Description </label>
  <br/><br/>
  <input id="travel" v-model="newclaim.Description" style="font-familt:cursive;width:100px;"/><br/><br/>
  <label id="travel" for="Image" style="font-family:cursive;"> Bill image: </label><br/><br/>
  <input id="travel" style="font-family:cursive;margin-left: 120px;" type="file" name="filename"><br/><br/>
  <button style="font-family:cursive;border:2px solid black;border-radius:5px;" @click="newclaimpost()"> Submit </button>
		</div>
	</div>
</div>
</div>
</div>
        <!-- <table :data="user" class="emp_table">
            <thead>
            <tr class="heading">
                <th>Claim Id</th>
                &nbsp;
                &nbsp;                      
                <th>Claim category</th>
                &nbsp;
                &nbsp;
                <th>Amount to be claimed</th>
                &nbsp;
                &nbsp;
                <th>Status by Manager</th>
                &nbsp;
                &nbsp;
                <th>Status by Finance</th>
                &nbsp;
                &nbsp;
            </tr>
        </thead>
        <tr class="heading" v-for="(user,index) in users" :key=index>
            <td> {{ user.claimid }}  </td>
            &nbsp;
            &nbsp;
            <td> {{ user.claimcategory }}  </td>
            &nbsp;
            &nbsp;
            <td> {{ user.amount }}  </td>
            &nbsp;
            &nbsp;
            <td> {{ user.statusbymanager }} </td>
            &nbsp;
            &nbsp;
            <td> {{ user.statusbyfinance }}</td>
            &nbsp;
            &nbsp;
        </tr> -->
            <!-- <tr v-for="(user,index) in users" :key="index" class="heading">
                <td {{user.claimid}}></td>
                &nbsp;
                &nbsp; 
                <td {{user.claimcategory}}></td>
                &nbsp;
                &nbsp; 
                <td {{user.amount}}></td>
                &nbsp;
                &nbsp; 
                <td {{user.statusbymanager}}></td>
                &nbsp;
                &nbsp; 
                <td {{user.statusbyfinance}}></td>
                &nbsp;
                &nbsp; 
            </tr>
         -->
        <!-- </table> -->
    <!-- </div> -->
    </div>
</template>

<script src="./claim_details.js"> 

</script>

<style scoped>
 @import '/Users/brundha/Documents/vue/project/my-project/src/components/claim_details.css'
</style>