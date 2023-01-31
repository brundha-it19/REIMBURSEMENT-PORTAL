<template>
    <div>
      <header class="header"> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>   
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://unpkg.com/vue-multiselect@2.1.6/dist/vue-multiselect.min.css">
        <i class="fa fa-user" id="user" aria-hidden="true" style="font-size:20px;color:black;text-align: center;">&nbsp;<button class="btn" @click="logout()">Logout</button> </i>
       <p style="font-family:cursive;font-size:40px;"><b>Claims</b> </p>
       <p style="font-family:cursive;"><b> Manager login</b></p>
       <div class="topnav">
  <a class="active" href="#open" @click="open()">Open</a>
  <a href="#completed"  iscompleted='true' @click="completed()">Completed</a>
  <a href="#rejected"  isRejected='true' @click="Rejected()">Rejected</a>   
</div>      
<a class="button" id="ss" href="#popup1">New claim</a>    
        </header>
    <div class="sidenav">   
        <br/>                  
        <br/>
  <a href="http://localhost:8080/manager" style="font-family:cursive;margin-right:50px;font-size:20px;color:white">Your Employee Claims will be displayed in this page..!</a>
  <br/>
  <br/>
  <!-- <a href="#" style="font-family:cursive;margin-right:50px;font-size:20px;color:white">Employee Claims</a> -->
  
</div>

<div class="cont">
<div id="popup1" class="overlay" >
	<div class="popup">
		<h2 style="font-family:cursive">Add New Claim</h2>
    &nbsp;
		<a class="close" href="#">&times;</a>   
		<div class="content">
			<label for="category" style="font-family:cursive">Choose Claim Category:</label><br/><br/>
  <select name="claim category" id="category" v-model="claimCategory" placeholder="select"   @click="getcatdata()">
    <option value="Travel" id="travel"> Travel</option>
    <option value="Office stationery"> Office stationery</option>
    <option value="others"> Others</option>
    &nbsp;
 </select>
 <br/>
 <br/>
 <div id="travel" v-if="claimCategory=='Travel'">
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
 <div id="office" v-if="claimCategory=='Office stationery'"> 
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
 <div id="others" v-if="claimCategory=='others'"> 
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

<div class="container">
  <p style="font-family:cursive;font-size:20px;color:black"><b>Pending claims..!</b></p>
  <table class="table table-striped table-dark">
   <thead>
      <tr>
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
      <td> {{ users.data.data[0].claimId }} </td>   
      <td> {{ users.data.data[0].category }} </td>
      <td> {{ users.data.data[0].description }} </td>
      <td> {{  users.data.data[0].amount}}</td>
      <td> {{  users.data.data[0].statusOfApprovers[0].status }}</td>
      <td> {{  users.data.data[0].statusOfApprovers[1].status }} &nbsp; <button
          class="btn btn-primary" id="coll1" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">expand</button></td>
    </tr>
    <div id="collapseExample2" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card card-body"  id="coll2">
        Claim I'd : {{ users.data.data[0].claimId }}<br/>
        Employee name: {{ users.data.data[0].employeeName }}<br/>     
        Claim category :{{ users.data.data[0].category  }}<br/>
        Claim Description :{{ users.data.data[0].description }}<br/>
        Claim Amount :{{ users.data.data[0].amount }}<br/>
        From Date : {{ users.data.data[0].statusOfApprovers[0].status }}<br/>
        To Date :{{ users.data.data[0].statusOfApprovers[1].status }}
        <label> Comments: </label>
        <input type="text" id="inp" v-model="comments" @click="comments()"/>
        <button id="Approved" @click="approved()"> Approved </button>
        <button id="Rejected" @click="Reject()"> Rejected</button>
        <button id="Approved" > </button>
       
        <!-- Approver Id: {{ users.data.data[0].statusOfApprovers[0].approverid }} -->
      </div>
    </div>
    <tr>
      <td> {{ users.data.data[1].claimId }} </td>         
      <td> {{ users.data.data[1].category }} </td>
      <td> {{ users.data.data[1].description }} </td>
      <td> {{  users.data.data[1].amount}}</td>
      <td> {{  users.data.data[1].statusOfApprovers[0].status }}</td>
      <td> {{  users.data.data[1].statusOfApprovers[1].status }} &nbsp; <button
          class="btn btn-primary" id="coll2" data-toggle="collapse" data-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">expand</button></td>
    </tr>
    <div id="collapseExample3" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card card-body"  id="coll2">
        Claim I'd : {{ users.data.data[1].claimId }}<br/>
        Employee name: {{ users.data.data[1].employeeName }}<br/>
        Claim category :{{ users.data.data[1].category  }}<br/>
        Claim Description :{{ users.data.data[1].description }}<br/>
        Claim Amount :{{ users.data.data[1].amount }}<br/>
        From Date : {{ users.data.data[1].statusOfApprovers[0].status }}<br/>
        To Date :{{ users.data.data[1].statusOfApprovers[1].status }}<br/>
        <label> Comments: </label>
        <input type="text" id="inp"/>
        <button id="Approved" @click="approved()"> Approved </button>
        <button id="Rejected" @click="Reject()"> Rejected</button>
        <!-- Approver Id: {{ users.data.data[1].statusOfApprovers[1].approverid }} -->
      </div>
    </div>
    </tbody>
    </table>
    <p style="font-family:cursive;font-size:20px;color:black"><b>Completed claims..!</b></p>
    <table class="table table-striped table-dark">         
   <thead>
      <tr>
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
      <td> {{ users1.data.data[0].claimId }} </td>
      <td> {{ users1.data.data[0].category }}  </td> 
      <td> {{ users1.data.data[0].description }} </td>        
      <td> {{  users1.data.data[0].amount}}</td>
      <td> {{  users1.data.data[0].statusOfApprovers[0].status }}</td>
      <td> {{  users1.data.data[0].statusOfApprovers[1].status }} </td>
      </tr> 
    </tbody>
    </table>
    <p style="font-family:cursive;font-size:20px;color:black"><b>Rejected claims..!</b></p>
  <table class="table table-striped table-dark">
   <thead>
      <!-- <tr>
      <th scope="col">Claim I'd</th>      
      <th scope="col">Claim Category</th>
      <th scope="col">Description</th>       
      <th scope="col">Amount to be claimed</th>
      <th scope="col">Status by Manager</th>
      <th scope="col">Status by Finance</th>
      </tr> -->
    </thead>
  <tbody>
    <td> {{ rej_man }}</td>
    </tbody>
    </table>
    </div>

</div>
</template>      

<script src="./manager_claim.js"> 
</script>
<style scoped>
@import '/Users/brundha/Documents/vue/project/my-project/src/components/manager_claim.css'
</style>
