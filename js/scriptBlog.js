document.getElementById("year").innerHTML = new Date().getFullYear();
//////////////////////////////////////////////////////////////////////
/////////menu dark phone
const navbar_advertisers = document.querySelector('#nav86235111');
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

////////////////////////////////////////////////////////////////////////////////////////



function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  const $result_good = $("#result_good");
  const $blogForm = $("#blogForm");
  const $result_wrong = $("#result_wrong");
  const $email_border = $("#email");
  const subscribe_email = $("#email").val();


  if (validateEmail(subscribe_email)) {
    $result_good.fadeIn();
    $blogForm.css("display", "none");
  } else {
    $result_wrong.fadeIn();
    $email_border.css("border", "1px solid red");
    setTimeout(function () { $result_wrong.fadeOut() }, 2000);
  }
  return false;

}

function validate2() {
  const $result_good2 = $("#result_good2");
  const $blogForm2 = $("#blogForm2");
  const $result_wrong2 = $("#result_wrong2");
  const $email_border2 = $("#email2");
  const subscribe_email = $("#email2").val();


  if (validateEmail(subscribe_email)) {
    $result_good2.fadeIn();
    $blogForm2.css("display", "none");
  } else {
    $result_wrong2.fadeIn();
    $email_border2.css("border", "1px solid red");
    setTimeout(function () { $result_wrong2.fadeOut() }, 2000);
  }
  return false;
}

$("#validate").on("click", validate);
$("#validate2").on("click", validate2);