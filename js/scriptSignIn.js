     
    const navbar_advertisers = document.querySelector('#nav86235111_signIn');
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
        let overlay = menu.find('.burger-menu_overlay');

        button.on('click', (e) => {
            e.preventDefault();
            toggleMenu();
        });

        links.on('click', () => toggleMenu());
        overlay.on('click', () => toggleMenu());

        function toggleMenu() {
            menu.toggleClass('burger-menu_active');

            if (menu.hasClass('burger-menu_active')) {
                $('body').css('overlow', 'hidden');
            } else {
                $('body').css('overlow', 'visible');
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
    // SignIn form

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    
    
    function validateSignIn() {     
        const email = $("#emailSignIn").val();     
    
        if (validateEmail(email) ) {       
            $('#emailSignIn').val('');
           console.log('validateSignIn')
    
        } else { 
            $('#emailSignIn').val('');
            console.log('not validateSignIn')        
        }
    
        return false;   
    
    }
    
    $("#validateSignIN").on("click", validateSignIn);





    

 