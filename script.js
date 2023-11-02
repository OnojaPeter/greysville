$('.owl-carousel').on('mouseenter', '.owl-item', function () {
    // Show the left navigation arrow on hover
    $(this).closest('.owl-carousel').find('.owl-prev').show();
    $(this).closest('.owl-carousel').find('.owl-next').show();
  });
  
  $('.owl-carousel').on('mouseleave', '.owl-item', function () {
    // Hide the left navigation arrow when not hovering
    $(this).closest('.owl-carousel').find('.owl-prev').hide();
    $(this).closest('.owl-carousel').find('.owl-next').hide();
  });
  
  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        autoplayHoverPause: true,
        nav:true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
});
