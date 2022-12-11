<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="footer-about">
            <div class="footer-logo">
              <a href="#"><img src="@/assets/images/Footer.svg" alt="" /></a>
            </div>
            <p>
                stay safe, stay healthy
            </p>
          </div>
        </div>

        <div class="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
          <div class="footer-widget">
            <h6>follow us</h6>
            <ul>
              <li>
                <a :href="link1">
                  <font-awesome-icon class="px-2" icon="fa-brands fa-facebook"
                /></a>
              </li>
              <li>
                <a :href="link2">
                  <font-awesome-icon class="px-2" icon="fa-brands fa-twitter"
                /></a>
              </li>
              <li>
                <a :href="link3">
                  <font-awesome-icon class="px-2" icon="fa-brands fa-instagram"
                /></a>
              </li>
              <li>
                <a :href="link3">
                  <font-awesome-icon class="px-2" icon="fa-brands fa-linkedin"
                /></a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-2 col-md-3 col-sm-6">
          <div class="footer-widget">
            <h6>Links</h6>
            <ul>
              <li>
                <a href="/"
                  > home
                </a>
              </li>
              <li>
                <a href="/SERVICES"
                  >
                  Services</a>
              </li>
              <li>
                <a href="/OurDoctors"
                  >
                  Doctors
                </a>
              </li>
              <li>
                <a href="/Book"
                  > book
                </a>
              </li>
              <li>
                <a href="/Blog"
                  >blogs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
          <div class="footer-widget">
              <div>
                <a href="#"><img src="@/assets/images/Footer.svg" alt="" /></a>
                <a href="#"
                  ><font-awesome-icon
                    icon="fa-solid fa-location-dot"
                  />menzelbouarguiba -7050, Tunisie</a
                >
              </div>
            </div>
          </div>
        </div>


      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="footer-copyright-text">
            <p>
              <font-awesome-icon icon="fa-solid fa-copyright" />2022 All rights
              reserved | This site is made with
              <i class="fa fa-heart-o" arial-hidden="true"></i> by
              <a href="#">mr. Mahdi Bouazizi</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Appfooter", 
  data(){
    return {
        link1: 'https://www.facebook.com/',
        link2:'https://www.instagram.com/',
        link3:'https://twitter.com/',
        link4:'https://www.linkedin.com/',
        
    }
  }
};
</script>

<style scoped>
ul{
    padding-left: 0;
}

input:focus{
    outline: none;
}
a:hover,
a:focus{
    text-decoration: none;
    outline: none;
    color: #16a085;
}
.footer {
  background: #eaf7f4e3;
  padding-top: 70px;
 
}
.footer-about {
  margin-bottom: 30px;
}
.footer-about .footer-logo {
  margin-bottom: 30px;
}
.footer-about p {
  color: #b7b7b7;
  margin-bottom: 30px;
}
.footer-widget {
  margin-bottom: 30px;
}

.footer-widget h6 {
  color: #444;
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
}
.footer-widget ul li {
  line-height: 36px;
  list-style: none;
}
.footer-widget ul li a {
  color: #b7b7b7;
  font-size: 15px;
}
.footer-widget ul li a:hover {
  color: #16a085;
  list-style: none;
}
.footer-widget ul li{
    line-height: 36px;
    list-style: none;
}
.footer-widget ul li a{
    color: #b7b7b7;
    font-size: 15px;
}
.footer-widget ul li a:hover{
    color: #16a085;
}
.footer-copyright-text {
  border-top:0.5rem 0.5rem 0 rgba(22, 160, 133,0.2);
  padding: 20px 0;
  margin-top: 40px;
}
.footer-copyright-text p {
  color: #b7b7b7;
  margin-bottom: 0;
}
.footer-copyright-text p i {
  color: #16a085;
}
.footer-copyright-text p a {
  color:  #16a085;
}
</style>
