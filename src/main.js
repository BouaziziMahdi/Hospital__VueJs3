import {createApp} from "vue"
import App from "./App.vue";
import Vue from "vue";
import router from "./router";
import store from "./store";
import vue3StarRatings from "vue3-star-ratings";

import './scss/main.scss';
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css" ;
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/js/dist/carousel";
import "bootstrap/js/dist/modal";   
import "normalize.css" ;

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeartPulse ,faPhone,faLocationDot,faCopyright,faEnvelope,faChevronRight,faStar} from "@fortawesome/free-solid-svg-icons";
import { faTwitter,faFacebook,faInstagram,faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faTwitter,faFacebook,faInstagram,faLinkedin ,faHeartPulse,faPhone,faLocationDot,faCopyright,faEnvelope,faChevronRight,faStar);


createApp(App).use(store).component("font-awesome-icon", FontAwesomeIcon ,"vue3-star-ratings", vue3StarRatings).use(router).mount("#app");
