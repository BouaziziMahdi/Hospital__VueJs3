<template>
    <div class="HomeView">
       <Carousel :image1="image1" :images="images"></Carousel>
    </div>    
</template>
 <script> 

import Carousel from '@/components/Carousel/Carousel.vue';
export default {
    name: "HomeView", 
    data(){
        return {
            image1:require('/public/hopital/360_F_175973942_JJUsfcB65yWE0hpVbaHQMFEipKwSwBL6.jpg'),
            images:[
                {src:require('/public/hopital/360_F_467371208_2cBvWthKecbY7PPW7rxmz99pKSkJPDPm.jpg')},
                {src:require('/public/hopital/716d91a925a17ce4cef2530d390288ce.jpg')},
                {src:require('/public//hopital/thumb-1920-1010294.jpg')},
            ]
        }
    },
    components : {
        Carousel ,
        
    }
}

</script>
<style>

    
</style>


