document.getElementById("year").innerHTML = new Date().getFullYear();

////////////////////////////////////////////////////////////
$('#block_two').addClass('active');
$('#block_one').removeClass('active');

$('#block_one').hover(function() {
    $('#block_one').addClass('active');
    $('#block_two').removeClass('active');
  })

  $('#block_two').hover(function() {
    $('#block_two').addClass('active');
    $('#block_one').removeClass('active');
  })

 $("#block_one").on("mouseleave", function() {
    $('#block_two').addClass('active');
    $('#block_one').removeClass('active');
        });

            
// <!-- Initialize Swiper -->

if ($(window).width() < 820) {
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
        },
    });


    document.getElementById('block_one').classList.add('active');
    document.getElementById('block_two').classList.add('active');
    document.getElementById('block_one').onclick = function () {
        document.getElementById('block_one').classList.add('active');
        document.getElementById('block_two').classList.add('active');
    }
    document.getElementById('block_two').onclick = function () {

        document.getElementById('block_one').classList.add('active');
        document.getElementById('block_two').classList.add('active');
    }

} else {

}
//////////////////////////////////////////////////////////
         //carousel coments about us
         jQuery(document).ready(function ($) {
          "use strict";
          $("#testimonials-list").owlCarousel({
              loop: true,
              center: true,
              items: 1,
              margin: 0,
            //   autoplay: true,
              dots: true,
              autoplayTimeout: 8500,
              smartSpeed: 450,
              responsive: {
                  0: {
                      items: 1
                  },
                  768: {
                      items: 2
                  },
                  1170: {
                      items: 3
                  }
              }
          });
      });

      /////////////////////////////////


      // NavBar menu
      const navbar_advertisers = document.querySelector('#nav86235111_advertisers');
      window.onscroll = () => {
          if (window.scrollY > 50) {
              navbar_advertisers.classList.add('nav-active');
          } else {
              navbar_advertisers.classList.remove('nav-active');
          }
      };
  
      // dropdawn menu
      $('li.dropdown').hover(function () {
          $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
      }, function () {
          $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
      });
      //////////////////////////////////////////////////////////////////////////////////


      // BurgerMenu
      function burgerMenu(selector) {
        let menu = $(selector);
        let button = menu.find('.burger-menu_button', '.burger-menu_lines');
        let links = menu.find('.burger-menu_link');
        // let overlay = menu.find('.blackBackground');
      
        button.on('click', (e) => {
          e.preventDefault();
          toggleMenu();
        });
      
        links.on('click', () => toggleMenu());
        $('.blackBackground').on('click', () => toggleMenu());
      
        function toggleMenu() {
          menu.toggleClass('burger-menu_active');
      
          if (menu.hasClass('burger-menu_active')) {
            $('body').css('overlow', 'hidden');
            $('.blackBackground').css('display', 'block');
          } else {
            $('body').css('overlow', 'visible');
            $('.blackBackground').css('display', 'none');
          }
        }
      }

    burgerMenu('.burger-menu');

    function BurgerDropdownMenu() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    function BurgerDropdownMenu1() {
        document.getElementById("myDropdown1").classList.toggle("show");
      }
      
      window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    ///////////////////////////////////////////////////


    // $(".description").hover(function(){
    //     $(this).css("font-size", "22px");
    //     console.log('hover')
    //     }, function(){
    //         $(this).css("font-size", "18px");
    //   });