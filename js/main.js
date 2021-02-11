document.getElementById("year").innerHTML = new Date().getFullYear();

// Background manu при скролі
const navbar = document.querySelector('#nav86235111');
window.onscroll = () => {
  if (window.scrollY > 50) {
    navbar.classList.add('nav-active');
  } else {
    navbar.classList.remove('nav-active');
  }
};

// ............................................
// dropdawn menu
$('li.dropdown').hover(function () {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function () {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});



// ......................................................................
// Style for button readmore on SVGCursorElement
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 400) {
    $('.btn1').fadeIn('slow', 'linear');
  } else {
    $(".btn1").fadeOut('fast', 'swing');;
  }
});


// ......................................................................
//Burger menu 
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


// ......................................................................
//Form contact us

$(".t708__btn").click(function () {
  $('.t-form__inputsbox').show();
  $('.t708__popup-container').show();
  $('.js-successbox').hide();
  $(this).parent().find(".t708__wrapper").fadeToggle();
  $(".t708__btn").toggleClass("t708__btn_active");
});


///////////////first page write text
function nextMsg(i) {
  if (messages.length == i) {
    i = 0;
  }
  $('#message').html(messages[i]).fadeIn(1000).delay(5000).fadeOut(1000, function () {
    nextMsg(i + 1);
  });
};

var messages = [
  "Meet your revenue potential",
  "Get higher results",
  "Make every interaction more meaningful"
];

$('#message').hide();

nextMsg(0);

/////////////////
//////////////////////////////////////////////


function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateName(name) {
  return /^[A-Za-z ]+$/.test(name);
}

function validate(name, email, subject) {

  const $wrongName = $("#error_name");
  const $wrongEmail = $("#error_email");
  const $wrongMessage = $("#error_message");

  const $name_border = $("#name_contactUs_mainPage");
  const $email_border = $("#email_contactUs_mainPage");
  const $message_border = $("#message_contactUs_mainPage");

  if (validateName(name) && validateEmail(email) && subject.length != 0) {
    $('#name_contactUs_mainPage').val('');
    $('#email_contactUs_mainPage').val('');
    $('#message_contactUs_mainPage').val('');

    $('.t-form__inputsbox').hide();
    $('.js-successbox').show();
    setTimeout(function () {
      $(".t708__btn").click();
      $('.t-form__inputsbox').hide();
      $('.t708__popup-container').hide();
    }, 2000);
  } else {

    if (!validateName(name)) {
      $name_border.css("border", "1px solid red");
      $wrongName.css("display", "block");
      $("#name_contactUs_mainPage").focus(function () {
        $('#name_contactUs_mainPage').val('');
        $wrongName.css("display", "none");
        $name_border.css("border", "none");
      });

    }
    if (!validateEmail(email)) {
      $email_border.css("border", "1px solid red");
      $wrongEmail.css("display", "block");
      $("#email_contactUs_mainPage").focus(function () {
        $('#email_contactUs_mainPage').val('');
        $wrongEmail.css("display", "none");
        $email_border.css("border", "none");
      });

    }
    if (subject.length == 0) {
      $message_border.css("border", "1px solid red");
      $wrongMessage.css("display", "block");
      $("#message_contactUs_mainPage").focus(function () {
        $('#message_contactUs_mainPage').val('');
        $wrongMessage.css("display", "none");
        $message_border.css("border", "none");
      });

    }
  }
  return (name, email, subject);
}

/////////////////////////////SEND MAIN PAGE FORM CONTACT US///////////////////////////////////
var mainPage_contactUs_click = document.getElementById("click_contactForm_main");

mainPage_contactUs_click.addEventListener("click", function () {
  var name = $("#name_contactUs_mainPage").val();
  var email = $("#email_contactUs_mainPage").val();
  var subject = $("#message_contactUs_mainPage").val();
  if (validate(name, email, subject)) {

    console.log('validate')
  } else {

    console.log('not validate')
  }

  return false;
});

