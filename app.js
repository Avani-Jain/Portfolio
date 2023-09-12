$(document).ready(function(){
    // navbar animation
    $(window).on('scroll', function(){
        var scroll = $(window).scrollTop();
        if(scroll>=50){
            $(".sticky").addClass("stickyadd");
        }
        else{
            $(".sticky").removeClass("stickyadd");
        }
    })

    // to add the typing effect to name
    var typed = new Typed(".element", {strings: ["Avani Jain", "a developer", "a designer"], smartBackspace:true, typeSpeed:100, backSpeed:100, loop:true, loopCount:Infinity, startDelay: 1000});

    // progress bars   
    var waypoint = new Waypoint({
        element: document.getElementById('experience'),
        handler: function() {
          var p = document.querySelectorAll('.progress-bar');
          p[0].setAttribute("style", "width:80%; transition:1s all")
          p[1].setAttribute("style", "width:60%; transition: 1.5s all")
          p[2].setAttribute("style", "width:70%;transition:1.7s all;");
          p[3].setAttribute("style", "width:85%;transition:2s all;");
          p[4].setAttribute("style", "width:50%;transition:2.3s all;");
          p[5].setAttribute("style", "width:30%;transition:2.5s all;");
          p[6].setAttribute("style", "width:40%;transition:2.5s all;");
          p[7].setAttribute("style", "width:50%;transition:2.5s all;");
          p[8].setAttribute("style", "width:70%;transition:2.5s all;");
          p[9].setAttribute("style", "width:80%;transition:2.5s all;");      
        },
         offset: '90%'
      });

});