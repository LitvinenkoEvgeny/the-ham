import Accordion from './accordion';
let accordion = new Accordion();


const $ = require("jquery");
require("slick-carousel/slick/slick.js");

$(".about_us_list").slick({
  slidesToShow: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '.prev_button',
  nextArrow: '.next_button'
});

