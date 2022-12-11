<template>
  <div class="card" >
  <div class="card-body">
<div  class="doctors" id="doctors">
<h1 class="heading"> our <span>doctors</span> </h1>
<div  class="box-container" >
    <div class="box">
        <img :src="Imageservise6" alt="" >
        <h3>john deo</h3>
        <span>expert doctor</span>
        <div class="share">
            <font-awesome-icon class="px-2" icon="fa-brands fa-facebook" />
            <font-awesome-icon class="px-2" icon="fa-brands fa-twitter" />
            <font-awesome-icon  class="px-2" icon="fa-brands fa-instagram" />
            <font-awesome-icon  icon="fa-brands fa-linkedin" />
        </div>
    </div>

    <div class="box">
        <img :src="Imageservise5" alt="">
        <h3>john deo</h3>
        <span>expert doctor</span>
        <div class="share">
            <font-awesome-icon class="px-2" icon="fa-brands fa-facebook" />
            <font-awesome-icon class="px-2" icon="fa-brands fa-twitter" />
            <font-awesome-icon  class="px-2" icon="fa-brands fa-instagram" />
            <font-awesome-icon class="px-2" icon="fa-brands fa-linkedin" />
        </div>
    </div>

    <div class="box">
        <img :src="Imageservise4" alt="">
        <h3>john deo</h3>
        <span>expert doctor</span>
        <div class="share">
            <font-awesome-icon class="px-2" icon="fa-brands fa-facebook" />
            <font-awesome-icon class="px-2" icon="fa-brands fa-twitter" />
            <font-awesome-icon  class="px-2" icon="fa-brands fa-instagram" />
            <font-awesome-icon  class="px-2" icon="fa-brands fa-linkedin" />
        </div>
    </div>

    <div class="box">
        <img :src="Imageservise3" alt="">
        <h3>john deo</h3>
        <span>expert doctor</span>
        <div class="share">
            <font-awesome-icon class="px-2" icon="fa-brands fa-facebook" />
            <font-awesome-icon class="px-2" icon="fa-brands fa-twitter" />
            <font-awesome-icon class="px-2" icon="fa-brands fa-instagram" />
            <font-awesome-icon class="px-2" icon="fa-brands fa-linkedin" />
        </div>
    </div>

    <div class="box">
        <img :src=" Imageservise2" alt="">
        <h3>john deo</h3>
        <span>expert doctor</span>
        <div class="share">
            <font-awesome-icon class="px-2" icon="fa-brands fa-facebook" />
            <font-awesome-icon class="px-2" icon="fa-brands fa-twitter" />
            <font-awesome-icon class="px-2" icon="fa-brands fa-instagram" />
            <font-awesome-icon class="px-2" icon="fa-brands fa-linkedin" />
        </div>
    </div>

    <div class="box">
        <img :src="Imagesservise1" alt="">
        <h3>john deo</h3>
        <span>expert doctor</span>
        <div class="share">
            <font-awesome-icon class="px-2" icon="fa-brands fa-facebook" />
            <font-awesome-icon class="px-2" icon="fa-brands fa-twitter" />
            <font-awesome-icon class="px-2" icon="fa-brands fa-instagram" />
            <font-awesome-icon class="px-2" icon="fa-brands fa-linkedin" />
        </div>
      </div>
    </div>
</div>
</div>
</div>

</template>
<script>

export default {
  name: "Our Gallery",
  data() {
    return {
        Imagesservise1:require('../assets/images/doctors/doc-1.jpg'),
        Imageservise2:require('../assets/images/doctors/doc-2.jpg'),
        Imageservise3:require('../assets/images/doctors/doc-3.jpg'),
        Imageservise4:require('../assets/images/doctors/doc-4.jpg'),
        Imageservise5:require('../assets/images/doctors/doc-5.jpg'),
        Imageservise6:require('../assets/images/doctors/doc-6.jpg')

    };
  },
};
</script>
<style scoped>

.doctors .box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap:2rem;
  
}

.doctors .box-container .box{
    text-align: center;
    background:#fff;
    border-radius: 0.5rem;
    border:0.2rem solid #16a085;
    box-shadow: 0.5rem 0.5rem 0 rgba(22, 160, 133,0.2);
    padding:2rem;
}

.doctors .box-container .box img{
    height: 20rem;
    border: 0.2rem solid  #16a085;
    border-radius: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    text-transform: capitalize;
    transition: all .2s ease-out;
}

.doctors .box-container .box h3{
    color:#444;
    font-size: 2.5rem;
}

.doctors .box-container .box span{
    color: #16a085;
    font-size: 1.5rem;
}

.doctors .box-container .box .share{
    padding-top: 2rem;
}

.doctors .box-container .box .share a{
    height: 5rem;
    width: 5rem;
    line-height: 4.5rem;
    font-size: 2rem;
    color: #16a085;
    border-radius: .5rem;
    border: #16a085;
    margin:0.3rem;
}

.doctors .box-container .box .share a:hover{
    background: #16a085;
    color:#fff;
    box-shadow: 0.5rem 0.5rem 0 rgba(22, 160, 133, 0.2); }
    .heading{
    text-align: center;
    padding-bottom: 2rem;
    text-shadow:  .4rem .4rem 0 rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    color: #444;
    font-size: 5rem;
    letter-spacing: 0.4rem;
}
</style>
