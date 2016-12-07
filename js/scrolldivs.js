$(document).ready(function (){
  $("#AboutButton").click(function(){                
         $('html, body').animate({
              scrollTop: $("#AboutSection").offset().top - 49
        }, 1000);   
        return false;            
    });
  $("#HomeButton").click(function(){                
         $('html, body').animate({
              scrollTop: 0
        }, 1000);      
        return false;         
    });
  $("#ContactButton").click(function(){                
         $('html, body').animate({
              scrollTop: $("#ContactSection").offset().top - 49
        }, 1000);        
        return false;       
    });
  $("#ProjectsButton").click(function(){                
         $('html, body').animate({
              scrollTop: $("#ProjectsSection").offset().top - 49
        }, 1000);   
        return false;            
    });
  $("#LearnMoreButton").click(function(){                
         $('html, body').animate({
              scrollTop: $("#AboutSection").offset().top - 49
        }, 1000);    
        return false;           
    });
  $("#HomeButton2").click(function(){                
         $('html, body').animate({
              scrollTop: 0
        }, 1000);    
        return false;           
    });
});