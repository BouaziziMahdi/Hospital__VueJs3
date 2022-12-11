<template>
  <div class="hello">

    <nav class="navbar navbar-expand-lg bg-light shadow-lg">
      <div class="container-fluid justify-content-start">
        <a class="navbar-brand" href="/"><font-awesome-icon icon="fa-solid fa-heart-pulse"/>Hopital </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ">
            <router-link to="/" tag="li" exact class="nav-item d-flex">
           <a class="nav-link active" aria-current="page" href="home" ><i  class="material-icons mx-1 mt-2">local_hospital</i>Home</a>
            </router-link>  
            <router-link to="/SERVICES" tag="li" class="nav-item">
              <a class="nav-link" href="SERVICES"><i  class="material-icons mx-1 mt-2">medical_services</i> SERVICES</a>
            </router-link>
            <router-link to="/OurDoctors" tag="li" class="nav-item">
              <a class="nav-link" href="OurDoctors"> <i  class="material-icons mx-1 mt-2">favorite</i>Doctors</a>
            </router-link>
            <router-link to="/Blog" tag="li" class="nav-item">
              <a class="nav-link" href="Blog"> <i  class="material-icons mx-1 mt-2">contact_support</i>Blog</a>
            </router-link>
            <router-link to="/book" tag="li" class="nav-item">
              <a class="nav-link" href="book"> <i  class="material-icons mx-1 mt-2">contact_support</i>Book</a>
            </router-link>
          </ul>
        
        </div>
        <p data-bs-toggle="modal" data-bs-target="#exampleModal" class="float-end mx-4 user"><i  class="material-icons mx-1 mt-2">account_circle</i></p>
      </div>
    </nav>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Login </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="Onsubmit">
             <div v-if="error!=''" class="alert alert-danger">
                {{error}}
             </div>
            <label >Email :</label>
            <input type="email" class="form-control mb-2" v-model="email">

            <label >Password :</label>
            <input type="password" class="form-control mb-2 " v-model="password">
             <div v-if="this.selectIndex==-1">
                <button  type="submit"  class="btn btn-outline-success"  >Send</button>
             </div>
              <div v-else>
                <button  type="submit"  class="btn btn-outline-success"  data-bs-toggle="modal" data-bs-target="#exampleModalee">Send</button>
              </div>
        </form>
      </div>
    </div>
  </div>
</div>

<div  class="modal fade" id="exampleModalee" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" >
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Your Test {{this.name_passion}}   </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <div :class="this.test_passion=='positive' ? 'text-danger' : 'text-success'">
             <div class="card text-center">
                 <div class="card-header">
                     email :{{this.email_passion}}
                 </div>
                 <div class="card-boody">
                     test :{{this.test_passion}}
                 </div>
             </div>
          </div>
      </div>
    </div>
  </div>
</div>
  </div>  
  

  
</template>
<script>
import axios from "axios";
import $ from 'jquery' ;
export default {

  name: "Appheader", 
  data(){
    return{
      email:'',
      password:'',
      error:'',
      passion:[],
      selectIndex:-1,
      name_passion:'',
      test_passion:'',
      email_passion:'',
      isToggled: false
    }
  },
  created(){
    axios.get("https://my-json-server.typicode.com/BouaziziMahdi/api_passion/passion")
     .then((r)=>{
        this.passion=r.data;
     })
  },
  methods:{
    search(email,password){
      let trouve=0;
      this.passion.forEach((p,index)=>{
           if(email==p.email && password==p.password){
              this.selectIndex=index;
              this.name_passion=this.passion[this.selectIndex].name;
              this.test_passion=this.passion[this.selectIndex].test;
              this.email_passion=this.passion[this.selectIndex].email;
              trouve=1;
           }
      })
      return trouve;
    },
    Onsubmit(){
      if(this.email=='' || this.password==''){
         this.error="all required";
      }else{
         let verify= this.search(this.email,this.password);
         if(verify==false){
          this.error="dosen't exit";
         }else{
            $("[data-bs-dismiss=modal]").trigger({type:'click'});           
         }
      }
    },
   
  }
};
</script>

<style lang="scss" scoped>

.user{
  cursor: pointer;
}
a {
padding: 10px 30px;
  color: rgb(43, 104, 68);
  font-weight: bolder;
  text-decoration: none;
}
</style>
