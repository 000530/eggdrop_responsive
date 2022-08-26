$('.appbarCloseBt').click(function(){
    $('.appbar-line').toggleClass('add');
    $('.mobileNav').toggleClass('add');

});

// 메인슬라이드 스와이퍼
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
});

var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 2,
    spaceBetween: 20,
    autoplay:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
    breakpoints: {
      // when window width is >= 320px
      900: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      // when window width is >= 480px
      1400: {
        slidesPerView: 5,
        spaceBetween: 30
      }
    }
  });

//  탭
const tab=$('.tabMenu ul li');
const tabContent=$('.tabContents >.tabContent');
tab.click(function(e){
  e.preventDefault();
  let tg=$(this);
  let tgIdx=tg.index();
  //console.log(tgIdx)
  tab.removeClass('active');
  tg.addClass('active');

  tabContent.css('display','none')
  tabContent.eq(tgIdx).css('display','block')

});

$('.site-top').click(function(){
  $('html, body').animate({scrollTop:0},400);
  return false;
});

