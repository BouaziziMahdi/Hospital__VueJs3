<template>
    <div>
 <div id="carouselExampleDark" class="carousel carousel-dark slide container-fluid " data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">

    <div class="carousel-item active" data-bs-interval="10000">
         <img :src="image1" class="d-block w-100" alt="...">
    </div>

    <div v-for="(image,index) in images" :key="index" class="carousel-item " data-bs-interval="10000">
         <img :src="image.src" class="d-block w-100" alt="...">
    </div>

  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>

  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

</div>
    </div> 
   
</template>


<script>
 export default{
    name:'Carousel',
    props:{
        image1:String,
        images:Array ,
    },  
    
 }
</script>
