!function(){
  var view=document.querySelector('.swiper-container')
  var controller={
    view:null,
    mySwiper:null,
    swiperOptions:{
      // Optional parameters
      loop: true, 
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    },
    init:function(){
      this.view=view
      this.Swiper=this.initSwiper(this.view,this.swiperOptions)
    },
    initSwiper:function(view,swiperOptions){
      this.mySwiper=new Swiper(view, swiperOptions)
    }
  }
  controller.init(view)

}.call()
