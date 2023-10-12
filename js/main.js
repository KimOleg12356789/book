$(document).ready(function(){


$('.blog_page_sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        },
          {
          breakpoint: 661,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            }
          }
      ]
  });


    $('.slidss').slick({
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows:false,
                      dots: true,
                      fade: false,
                      centerMode:true,
                      autoplay:true,
                      autoplaySpeed: 5000,
                      centerPadding: '180px',
                      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows:false,
            centerMode:true,
            centerPadding: '180px',
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows:false,
            centerMode:false,
            centerPadding: '180px',
          }
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows:false,
            centerMode:true,
            centerPadding: '180px',
          }
        },


          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              dots:false,
              slidesToScroll: 1,
              dots: true,
              arrows:false,
              centerMode:true,
            centerPadding: '180px',
            }
          }
      ]

});

$('.prev-arrow').on('click', function() {
  $('.slidss').slick('slickNext');
});

$('.next-arrow').on('click', function() {
  $('.slidss').slick('slickPrev');
});

 $('.slids').slick({
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows:false,
                      dots: true,
                      fade: false,
                      centerMode:true,
                      centerPadding: '300px',
                      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows:false,
            centerMode:true,
            centerPadding: '300px',
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows:false,
            centerMode:true,
            centerPadding: '300px',
          }
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows:false,
            centerMode:true,
            centerPadding: '300px',
          }
        },


          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              dots:false,
              slidesToScroll: 1,
              dots: true,
              arrows:false,
              centerMode:false,
            centerPadding: '300px',
            }
          }
      ]

});

$('.prev-arrow').on('click', function() {
  $('.slids').slick('slickNext');
});

$('.next-arrow').on('click', function() {
  $('.slids').slick('slickPrev');
});


let select = document.querySelector('.select');
let deploy_btn = document.getElementById('deploy-btn');
let options_list = document.querySelector('.options-list');
let value_wrap = document.querySelector('.value-wrap');

let options = document.querySelectorAll('.option');
let input = document.getElementById('country');

for (let option of options){
    option.onclick = selectOption;
}


//console.log(deploy_btn);
deploy_btn.onclick = function(){

    if ( deploy_btn.getAttribute('data-state') == 'rolled' ){
        options_list.style.display = 'flex';
        options_list.style.opacity = 1;
        deploy_btn.setAttribute('data-state', 'deployed');
        deploy_btn.style.rotate = '180deg';
    } else{
        options_list.style.opacity = 0;
        options_list.style.display = 'none';
        deploy_btn.setAttribute('data-state', 'rolled');
        deploy_btn.style.rotate = '360deg';
    }
}

function selectOption(){
    let current = options_list.querySelector('.current');
    current.classList.remove('current');
    this.classList.add('current');
    deploy_btn.setAttribute('data-state', 'rolled');
    options_list.style.opacity = 0;
    options_list.style.display = 'none';
    deploy_btn.style.rotate = '360deg';

    let country = this.querySelector('span').innerHTML;
    let flag = this.querySelector('img').src;
    
    let event = new CustomEvent("optionSelected", {detail: { country: country, flag: flag } });
    select.dispatchEvent(event);

}

select.addEventListener("optionSelected", setNewCurentOpton);

function setNewCurentOpton(event){
    value_wrap.querySelector('img').src = event.detail.flag;
    value_wrap.querySelector('span').innerHTML = event.detail.country;
    country.value = event.detail.country;
}

//deploy_btn.getAttribute('data-state');


const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});



});