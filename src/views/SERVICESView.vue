<template>
    <div class="card">
      <div class="card-body">
        <section id="popular-destination">
          <h1 class="title">Our Services</h1>
          <div class="content">
            <div class="box">
              <img :src="Imageservise1" alt="imageservise" />
              <div class="content">
                <div>
                  <h4>Dentist Treatment</h4>
                  <p>Permanent teeth can last a lifetime with good care.</p>
                  <p>
                    The risk of tooth decay, gum disease and tooth loss can be
                    reduced with good.
                  </p>
                  <a
                   :href="link1">{{Lire}}</a
                  >
                </div>
              </div>
            </div>
            <div class="box">
              <img :src="Imageservise2" alt="imageservise"/>
              <div class="content">
                <div>
                  <h4>Limbs Treatment</h4>
                  <p>
                    A limb injury is any injury to a limb, either a leg or arm,
                    or to the toes and fingers.
                  </p>
                  <p>
                    Limb injuries include broken bones, dislocations, sprain,
                    strains, injuries to the nail, and bruising.
                  </p>
                  <a :href="link2"
                    >{{Lire }}</a
                  >
                </div>
              </div>
            </div>
            <div class="box">
              <img :src="Imageservise3" alt="imageservise" />
              <div class="content">
                <div>
                  <h4>Chronic Treatment</h4>
                  <p>
                    reatment of chronic illness comes in many forms including
                    surgery, physical therapy, psychological therapy and
                    radiotherapy.
                  </p>
                  <p>
                    However, one of the most common treatment forms is the use
                    of medication.
                  </p>
                  <a :href="link3">{{Lire}}</a>
                </div>
              </div>
            </div>
            <div class="box">
              <img :src="Imageservise4" alt="imageservise" />
              <div class="content">
                <div>
                  <h4>Pediatric Treatment</h4>
                  <p>
                    Pediatrics is the branch of medicine that involves the
                    medical care of infants, children, adolescents, and young
                    adults. In the United Kingdom.
                  </p>
                  <p>
                    paediatrics covers many of their youth until the age of 18.
                  </p>
                  <a :href="link4"
                    >{{Lire}}</a
                  >
                </div>
              </div>
            </div>
            <div class="box">
              <img :src="Imageservise5" alt="imageservise" />
              <div class="content">
                <div>
                  <h4>Heart Treatment</h4>
                  <p>
                    Heart disease refers to any condition affecting the
                    cardiovascular system.
                  </p>
                  <p>
                    There are several different types of heart disease, and they
                    affect the heart and blood vessels in different ways.
                  </p>
                  <a
                    :href="link5"
                    >{{Lire}}</a
                  >
                </div>
              </div>
            </div>
            <div class="box">
              <img :src="Imageservise6" alt="imageservise"/>
              <div class="content">
                <div>
                  <h4>Surgery Treatment</h4>
                  <p>
                    Surgery is an invasive technique with the fundamental
                    principle of physical intervention on organs/organ
                    systems/tissues for diagnostic or therapeutic reasons.
                  </p>
                  <p>
                    As a general rule, a procedure is considered surgical when
                    it involves cutting of a person's tissues or closure of a
                    previously sustained wound.
                  </p>
                  <a :href="link6">{{Lire}}</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="ourstaff bg-success p-2 text-dark bg-opacity-25">
          <div class="ourstaffinside">
            <h1 class="text">Our Staff</h1>
            <p class="badge bg-primary text-wrap" style="height: 2rem">
              We can talk for a long time about advantages of our Dental clinic
              before other medical treatment facilities. But you can read the
              following facts in order to make sure of all pluses of our clinic:
            </p>
            <section class="icons-container">

<div class="icons">
  <i  class="material-icons mx-1 mt-2">medical_services</i>
    <h3>140+</h3>
    <p>doctors at work</p>
</div>

<div class="icons">
  <i  class="material-icons mx-1 mt-2">medical_services</i>
    <h3>1040+</h3>
    <p>satisfied patients</p>
</div>

<div class="icons">
  <i  class="material-icons mx-1 mt-2">bed</i>
    <h3>500+</h3>
    <p>bed facility</p>
</div>

<div class="icons">
  <i  class="material-icons mx-1 mt-2"> home</i>

    <h3>80+</h3>
    <p>available hospitals</p>
</div>

</section>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Service",
  data() {
      return {
        Imageservise1:require('../assets/images/services/12.jpg'),
        Imageservise2:require('../assets/images/services/11.jpg'),
        Imageservise3:require('../assets/images/services/3.jpg'),
        Imageservise4:require('../assets/images/services/13.jpg'),
        Imageservise5:require('../assets/images/services/2.jpg'),
        Imageservise6:require('../assets/images/services/1.webp'),
        Lire: 'Lire Plus ',
        link1: 'https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/dental-treatment',
        link2:'https://www.healthdirect.gov.au/limb-injuries',
        link3:'https://www.jpeds.com/',
        link4:'https://www.ncbi.nlm.nih.gov/books/NBK6880/',
        link5:'https://www.medicalnewstoday.com/articles/237191#types/',
        link6:'https://www.mountstuarthospital.co.uk/treatments/general-surgery/general-surgery-treatments/'
      }
    },

};
</script>
<style scoped> 
.title {
  text-align: center;
    padding-bottom: 2rem;
    text-shadow:  0.4rem .4rem 0 rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    color: #444;
    font-size: 5rem;
    letter-spacing: 0.4rem;
} 
.text{
  text-align: center;
    padding-bottom: 2rem;
    text-shadow:  0.4rem .4rem 0 rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    color: #444;
    font-size: 5rem;
    letter-spacing: 0.4rem;
}

#popular-destination {
  padding: 0 10%;
  margin-bottom: 50px;
}
#popular-destination .content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}
#popular-destination .content .box {
  overflow: hidden;
  position: relative;
  height: 20rem;
  transition: 0.5s; 
  border-radius: 0.5rem;
  box-shadow: 0.5rem 0.5rem 0 rgba(22, 160, 133,0.2);
  border:0.2rem solid  #16a085;
  padding:2rem;
}
#popular-destination .content .box img {
  height: 100%;
  width: 100%;
  object-fit: cover;

}
.box .content {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #fff;
  text-align: center;
  align-items: center;
  transform: translateX(100%);
  transition: 0.5s;
}
.box .content h4 {
  font-size: 25px;
  margin-bottom: 10px;
}
.box .content p {
  padding: 2px;
  font-size: 12px;
}
.box .content p:nth-child(3) {
  margin-bottom: 25px;
}
.box .content a {
  margin-top: 60px;
  padding: 10px 60px;
  border: 2px solid #29d9d5;
  color: #29d9d5;
  font-weight: bold;
}
.box:hover {
  box-shadow: 0 0 10px #29d9d5;
}
.box:hover .content {
  transform: translateX(0);
}


.icons-container{
    display: grid;
    gap:2rem;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    padding-top: 5rem;
    padding-bottom: 5rem;
}

.icons-container .icons{
    border:0.2rem solid #16a085;
    box-shadow: 0.5rem 0.5rem 0 rgba(22, 160, 133,0.2);
    border-radius: 0.5rem;
    text-align: center;
    padding: 2.5rem;
}

.icons-container .icons i{
    font-size: 4.5rem;
    color:#16a085;
    padding-bottom: .7rem;
}

.icons-container .icons h3{
    font-size: 4.5rem;
    color:#444;
    padding: .5rem 0;
    text-shadow:  0.5rem 0.5rem 0 rgba(22, 160, 133,0.2);
}

.icons-container .icons p{
    font-size: 1.7rem;
    color:var(--light-color);
}
</style>
