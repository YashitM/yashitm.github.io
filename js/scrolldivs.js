$(document).ready(function (){
  $("#AboutButton").click(function(){                
         $('html, body').animate({
              scrollTop: $("#AboutSection").offset().top - 49
        }, 1000);               
    });
  $("#HomeButton").click(function(){                
         $('html, body').animate({
              scrollTop: 0
        }, 1000);               
    });
  $("#ContactButton").click(function(){                
         $('html, body').animate({
              scrollTop: $("#ContactSection").offset().top - 49
        }, 1000);               
    });
  $("#ProjectsButton").click(function(){                
         $('html, body').animate({
              scrollTop: $("#ProjectsSection").offset().top - 49
        }, 1000);               
    });
  $("#LearnMoreButton").click(function(){                
         $('html, body').animate({
              scrollTop: $("#AboutSection").offset().top - 49
        }, 1000);               
    });
});