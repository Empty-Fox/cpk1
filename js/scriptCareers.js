     
    document.getElementById("year").innerHTML = new Date().getFullYear();
    //////////////////////////////////////////////////////////////////////////

    
    const navbar_advertisers = document.querySelector('#nav86235111_careers');
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