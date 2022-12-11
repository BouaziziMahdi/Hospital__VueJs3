<template>
     <div class="review" id="review">
    
    <h1 class="heading"> client's <span>review</span> </h1>

    <div class="box-container">

        <div class="box">
            <img src="@/assets/images/review/pic-1.png" alt="">
            <h3>john deo</h3>
            <div class="stars-rating_current">
              <div class="rating">
      <ul class="list">
        <li :key="star" v-for="star in maxStars" :class="{ 'active': star <= stars }" @click="rate(star)" class="star">
           <font-awesome-icon icon="fa-solid fa-star"  scale="2" :name="star <= stars ? 'star' : 'star-o'"/>
        </li>
      </ul>
     
    </div>
            </div>
            <p class="text">Extremely courteous, patient and friendly staff. Attentive to patient needs.Deapite preaaures, admission desk staff is extremely calm, friendly and respectful. Megha Jaiswal is very impressive. Apart from being extremely efficient her personal attention to each person is laudable. Does her work with a smile at all times. Understanding, pleasant and efficient - a fantastic asset to the hospital.</p>
        </div>

        <div class="box">
            <img src="@/assets/images/review/pic-2.png" alt="">
            <h3>ice spice</h3>
            <div class="stars-rating_current">
              <div class="rating">
      <ul class="list">
        <li :key="star" v-for="star in maxStars" :class="{ 'active': star <= stars }" @click="rate(star)" class="star">
           <font-awesome-icon icon="fa-solid fa-star"  scale="2" :name="star <= stars ? 'star' : 'star-o'"/>
        </li>
      </ul>
     
    </div>
            </div>
            <p class="text">Extremely courteous, patient and friendly staff. Attentive to patient needs.Deapite preaaures, admission desk staff is extremely calm, friendly and respectful. Megha Jaiswal is very impressive. Apart from being extremely efficient her personal attention to each person is laudable. Does her work with a smile at all times. Understanding, pleasant and efficient - a fantastic asset to the hospital.</p>
        </div>

        <div class="box">
            <img src="@/assets/images/review/pic-3.png" alt="">
            <h3>taher gharbi</h3>
            <div class="stars-rating_current">
              <div class="rating">
      <ul class="list">
        <li :key="star" v-for="star in maxStars" :class="{ 'active': star <= stars }" @click.prevent="rate(star)" class="star">
           <font-awesome-icon icon="fa-solid fa-star"  scale="2" :name="star <= stars ? 'star' : 'star-o'"/>
        </li>
      </ul>
     
    </div>
            </div>
            <p class="text">Extremely courteous, patient and friendly staff. Attentive to patient needs.Deapite preaaures, admission desk staff is extremely calm, friendly and respectful. Megha Jaiswal is very impressive. Apart from being extremely efficient her personal attention to each person is laudable. Does her work with a smile at all times. Understanding, pleasant and efficient - a fantastic asset to the hospital.</p>
        </div>

    </div>
  </div>
  </template>
  
  <script>
  
    export default {
        name:'Rating',
      props: {
        grade: {
          type: Number,
          required: true
        },
        maxStars: {
          type: Number,
          default: 5
        },
        maxStars: {
          type: Number,
          default: 5
        },
        hasCounter: {
          type: Boolean,
          default: true
        }
      },
      data() {
        return {
          stars: this.grade
        }
      },
      methods: {
        rate(star) {
          if (
            typeof star === 'number' &&
            star <= this.maxStars &&
            star >= 0
          )
            this.stars = this.stars === star ? star - 1 : star
        }
      }
    }
  </script>
  
  <style scoped lang="scss">
    $active-color: #f3d23e;
  
    .rating {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      font-size: 22px;
      color: #a7a8a8;
    }
    .list {
      margin: 0 0 5px 0;
      padding: 0;
      list-style-type: none;
      &:hover {
        .star {
          color: $active-color;
        }
      }
    }
    .liste{
      margin: 0 0 5px 0;
      padding: 0;
      list-style-type: none;
    }
    .star {
      display: inline-block;
      cursor: pointer;
      &:hover {
        &~.star {
          &:not(.active) {
            color: inherit;
          }
        }
      }
    }
    .active {
      color: $active-color;
    }
  
.heading{
    text-align: center;
    padding-bottom: 2rem;
    text-shadow: 0.5rem 0.5rem 0 rgba(22, 160, 133, 0.2); 
    text-transform: uppercase;
    color:#444;
    font-size: 5rem;
    letter-spacing: .4rem;
}

.heading span{
    text-transform: uppercase;
    color:#16a085;
}
.review .box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap:1rem;
}

.review .box-container .box{
    border: 0.2rem solid  #16a085;;
    box-shadow: 0.5rem 0.5rem 0 rgba(22, 160, 133, 0.2); 
    border-radius: 0.5rem;
    padding:2.5rem;
    background: #fff;
    text-align: center;
    position: relative;
    overflow: hidden;
    z-index: 0;
}

.review .box-container .box img{
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    object-fit: cover;
    border:0.5rem solid #fff;
}

.review .box-container .box h3{
    color:#fff;
    font-size: 2.2rem;
    padding:0.5rem 0;
}

.review .box-container .box .stars i{
    color:#fff;
    font-size: 1.5rem;
}

.review .box-container .box .text{
    color:#777;
    line-height: 1.8;
    font-size: 1.5rem;
    padding-top: 6rem;
}

.review .box-container .box::before{
    content: '';
    position: absolute;
    top:-4rem; left: 40%;
    transform:translateX(-50%);
    background:#16a085;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    height: 25rem;
    width: 120%;
    z-index: -1;
}

  </style>
  