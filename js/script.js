$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });

  // Dark Mode

  $(".switch").click(function(){
    $("body").toggleClass("dark-mode");
    if($("body").hasClass("dark-mode"))
    {
      $(this).find("i").removeClass("fa-moon").addClass('fa-sun')
    }
    else{
      $(this).find("i").removeClass("fa-sun").addClass('fa-moon');
     }
  });

 