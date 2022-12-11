<template>
    <div class="blogs" id="blogs">

<h1 class="heading"> our <span>blogs</span>   </h1>


<div class="box-container p-2" > 
    <div v-for="blog in blogs" :key="blog.id" class="box">
        <div class="image">
            <img :src="blog.image" alt="">
        </div>
        <div class="content">
            <div class="icon">
                <a href="#"> <i  class="material-icons mx-1 mt-2">calendar_month</i> {{blog.date}}</a>
                <a href="#"> <i  class="material-icons mx-1 mt-2">account_circle</i>by admin </a>
            </div>
            <h3>{{blog.titre}}</h3>
            <p>{{blog.description}}</p>
        </div>
        <div class="d-flex justify-content-around">
             <p   style=" cursor: pointer;"  :class="blog.like==1 ? ' like' : ''   " @click="changer_like(blog)"><i  class="material-icons mx-1 mt-2">thumb_up</i></p>
             <p   style=" cursor: pointer;"  :class="blog.like==0 ? ' dislike' : '' " @click="changer_like(blog)" ><i  class="material-icons mx-1 mt-2">thumb_down</i></p>
        </div>
    </div>
</div>

</div>
</template>
<script>
export default {
    name:"Blog", 
    data(){
        return {
             blogs:[
                {id:1,image:require('../assets/images/doctors/blog-1.jpg'),date:'15 avril,2022',titre:'stay healthy',description:'Heart Association',like:1},
                {id:1,image:require('../assets/images/doctors/blog-2.jpg'),date:'15 décembre,2021',titre:'heartbeat',description:'A heartbeat is a two-part pumping action.',like:1},
                {id:1,image:require('../assets/images/doctors/blog-3.jpg'),date:'15 avril,2022',titre:'Healthy Life',description:'Strategies for Better Living.',like:0},
             ]

        }
    },
    methods:{
        changer_like(blog){
            if(blog.like==1){
                blog.like=0
            }else{
                blog.like=1;
            }
        }
    }
}
</script>
<style scoped>
.choice{
    cursor: pointer;
}
.like{
    font-size: 18px;
   
    color: blue;
}
.dislike{
    font-size: 18px;
   
    color: red;
}
.material-icons{

    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
}
.heading  {
    text-align: center;
    padding-bottom: 10px;
    text-shadow:  0.4rem .4rem 0 rgba(0, 0, 0, 0.2);;
    text-transform: uppercase;
    color: #777;
    font-size: 50px;
    letter-spacing: .4rem;
} 
.heading span {
    text-transform: uppercase;
    color: #16a085;
}
.blogs .box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 3fr));
    gap:3rem;
}

.blogs .box-container .box{
    border:0.2rem solid #16a085;
    box-shadow:  0.4rem .4rem 0 rgba(0, 0, 0, 0.2);
    border-radius:0.5rem;
    padding: 2rem;
}

.blogs .box-container .box .image{
    height: 250px;
    overflow:hidden;
    border-radius: 0.5rem;
    cursor: pointer;
}

.blogs .box-container .box .image img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.blogs .box-container .box:hover .image img{
    transform:scale(1.2);
}

.blogs .box-container .box .content{
    padding-top: 1rem;
}

.blogs .box-container .box .content .icon{
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.blogs .box-container .box .content .icon a{
    font-size: 18px;
    color: #777;
    text-decoration: none;
}

.blogs .box-container .box .content .icon a:hover{
    color:#16a085;
}

.blogs .box-container .box .content .icon a i{
    padding-right: 0.5rem;
    color: #16a085;
}

.blogs .box-container .box .content h3{
    color:#444;
    font-size: 35px;
}

.blogs .box-container .box .content p{
    color:#777;
    font-size: 20px;
    line-height: 1.8;
    padding:1rem 0;
} 

</style>