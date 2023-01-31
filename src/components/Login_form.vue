<template>
    <div  class="container_login">   
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <h1 style="font-size:40px;font-family:cursive ; color:black;margin-top: 60px;"> User login </h1>
        <div>   
            <!-- <img  class="des" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd-rB1So-F12GjOvdduzIy6VVpL4J0JpJFmQmYtAAf5f13t67kND3jJPos0p-KJxa7NII&usqp=CAU" width="100px" height="100px;"> <br/><br/> -->
            <i class="fa fa-user" aria-hidden="true" style="font-size:70px;color:black;"></i>
        <form>
            <b><label for="email" type="email" style="color:grey;font-size:20px;margin-right:10px;font-family:cursive;" > Username </label></b><br/><br/>
            <i class="fa fa-envelope" style="font-size:30px;color:black;"></i>
            &nbsp;
            <input  placeholder="                     Enter username" type="email" class="info" v-model="PostData.email"/><br/><br/>
            <b><label for="password" type="password" style="color:grey;font-size:20px;margin-right:10px;font-family:cursive;" > password </label></b><br/><br/>
            <i class="fa fa-key" aria-hidden="true" style="font-size:30px;color:black;"></i>
            &nbsp;
            <input  placeholder="                     Enter password" type="password" class="info" v-model="PostData.password"/><br/><br/>
            <input type="checkbox"/> 
            <label style="font-family:cursive;"> Remember Me</label><br/><br/>
            <button type="button" id="btn" @click="post_credentials()"   style="font-family:cursive;"> LOGIN </button>
        </form>
        </div>    
    </div>
</template>

<script src="./Login_form.js"> 
</script>

<style scoped>
       @import './Login_form.css'
</style>