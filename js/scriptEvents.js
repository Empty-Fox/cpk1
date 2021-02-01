const navbar_advertisers = document.querySelector('#nav86235111_events');
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

///////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////



function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validateName(name) {
    return /^[A-Za-z ]+$/.test(name);
}

function validate() {
    const $result_good = $("#result_good");
    const $wrongName = $("#error_name");
    const $wrongEmail = $("#error_email");
    const $email_border = $("#email");
    const $name_border = $("#name");
    const email = $("#email").val();
    const name = $("#name").val();


    if (validateEmail(email) && validateName(name)) {
        $result_good.fadeIn();
        setTimeout(function () { $result_good.fadeOut() }, 1500);
        $('#email').val('');
        $('#name').val('');

    } else {
        if (!validateEmail(email)) {           
            $email_border.css("border", "1px solid red");
            $wrongEmail.css("display", "block");
            $("#email").focus(function () {
                $('#email').val('');
                $wrongEmail.css("display", "none");
                $email_border.css("border", "none");
            });
        }
        if (!validateName(name)) {
            $name_border.css("border", "1px solid red");
            $wrongName.css("display", "block");
            $("#name").focus(function () {
                $('#name').val('');
                $wrongName.css("display", "none");
                $name_border.css("border", "none");
            });
        }       
    }
    return false;

}

////////////modal btn close
var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("result_good");
span.onclick = function () {
    modal.style.display = "none";
}
/////////////////

$("#validate").on("click", validate);



