$(document).ready(function (){
  $("#AboutButton").click(function(){                
         $('html, body').animate({
              scrollTop: $("#AboutSection").offset().top - 50
        }, 700);               
    });
  $("#HomeButton").click(function(){                
         $('html, body').animate({
              scrollTop: 0
        }, 700);               
    });
  $("#ContactButton").click(function(){                
         $('html, body').animate({
              scrollTop: $("#ContactSection").offset().top - 50
        }, 700);               
    });
  $("#ProjectsButton").click(function(){                
         $('html, body').animate({
              scrollTop: $("#ProjectsSection").offset().top - 50
        }, 700);               
    });
});