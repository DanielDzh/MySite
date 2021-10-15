
function slowScroll(id) {
   $('html, body').animate({
      scrollTop: $(id).offset().top
   }, 500);
}

$(document).on("scroll", function () {
   if ($(window).scrollTop() === 0)
      $("header").removeClass("fixed");
   else
      $("header").attr("class", "fixed");
});
const time_html = 5000;
const step_html = 1;
function outNum_html(num, elem) {
   let e = document.querySelector('#out_html');
   var n = 0;
   let t = Math.round(time_html / (num / step_html));
   let interval = setInterval(() => {
      n = n + step_html;
      if (n == num) {
         clearInterval(interval);
      }
      e.innerHTML = n + " %";
   },
      t);
};
// outNum_1(100, '#out_1');

const time_css = 5000;
const step_css = 1;
function outNum_css(num, elem) {
   let e = document.querySelector('#out_css');
   var n = 0;
   let t = Math.round(time_css / (num / step_css));
   let interval = setInterval(() => {
      n = n + step_css;
      if (n == num) {
         clearInterval(interval);
      }
      e.innerHTML = n + " %";
   },
      t);
};
// outNum_2(50, '#out_2');

const time_js = 5000;
const step_js = 1;
function outNum_js(num, elem) {
   let e = document.querySelector('#out_js');
   var n = 0;
   let t = Math.round(time_js / (num / step_js));
   let interval = setInterval(() => {
      n = n + step_js;
      if (n == num) {
         clearInterval(interval);
      }
      e.innerHTML = n + " %";
   },
      t);
};

const time_jq = 5000;
const step_jq = 1;
function outNum_jq(num, elem) {
   let e = document.querySelector('#out_jq');
   var n = 0;
   let t = Math.round(time_jq / (num / step_jq));
   let interval = setInterval(() => {
      n = n + step_jq;
      if (n == num) {
         clearInterval(interval);
      }
      e.innerHTML = n + " %";
   },
      t);
};

const time_react = 5000;
const step_react = 1;
function outNum_react(num, elem) {
   let e = document.querySelector('#out_react');
   var n = 0;
   let t = Math.round(time_react / (num / step_react));
   let interval = setInterval(() => {
      n = n + step_react;
      if (n == num) {
         clearInterval(interval);
      }
      e.innerHTML = n + " %";
   },
      t);
};

const time_bs = 5000;
const step_bs = 1;
function outNum_bs(num, elem) {
   let e = document.querySelector('#out_bs');
   var n = 0;
   let t = Math.round(time_bs / (num / step_bs));
   let interval = setInterval(() => {
      n = n + step_bs;
      if (n == num) {
         clearInterval(interval);
      }
      e.innerHTML = n + " %";
   },
      t);
};
// outNum_3(75, '#out_3');

// $(document).on("scroll", function () {
//    let z = $('#out_3').offset().top;
//    console.log("z: " + z);

//    if (($(window).scrollTop()) === 100) {
//       outNum_3(75, '#out_3');
//    }
// });
// // console.log(z);
// console.log($(window).scrollTop());
var space = window.innerHeight - document.querySelector('#out_html').offsetTop;
console.log(space);
$(function () {
   $(window).scroll(function () {
      let z = $('#out_html').offset().top;
      // console.log(z);
      if ($(this).scrollTop() > z / 5) {
         console.log($(this).scrollTop());
         outNum_html(70, '#out_html');
         outNum_css(75, '#out_css');
         outNum_js(75, '#out_js');
         outNum_jq(30, '#out_jq');
         outNum_bs(45, '#out_bs');
         outNum_react(30, '#out_react');
         $(window).off('scroll');

         // $('.background_1').css('stroke', 'transparent');
         $('.foreground_html').css('stroke-dashoffset', '110');
         $('.foreground_react').css('stroke-dashoffset', '270');
         $('.foreground_bs').css('stroke-dashoffset', '198');
         $('.foreground_jq').css('stroke-dashoffset', '270');
         // $('.background_2').css('stroke', 'transparent');
         $('.foreground_css').css('stroke-dashoffset', '95');
         // $('.foreground_22').css('stroke-dashoffset', '0');

         // $('.background_3').css('stroke', 'transparent');
         $('.foreground_js').css('stroke-dashoffset', '95');
         // $('.foreground').css('transform', 'rotate(-90deg)');

      }
   });
});