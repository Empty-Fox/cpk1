// Background manu при скролі
const navbar = document.querySelector('#nav86235111');
window.onscroll = () => {
    if (window.scrollY > 300) {
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


// ............................................
// Counter
var counter = 0;
var c = 12000000;
c1 = 10;
var i = setInterval(function () {
    $(".counter h1").html(numberWithSpaces(c) + "$");
    $(".counter hr").css("width", c1 / 2 + "%");
    counter++;
    c1++;
    c++;
    if (counter == 101) {
        clearInterval(i);
    }
}, 10);


var counterz = 0;
var cz = 12000100;
var iz = setInterval(function () {
    var counterNumber = Math.floor(Math.random() * 1200000) + 500;
    var timerCount = Math.floor(Math.random() * 10000) + 5000
    $(".counter h1").html(numberWithSpaces(cz) + "$");
    counterz++;
    cz = cz + counterNumber;
}, 10000);

function numberWithSpaces(с) {
    return с.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

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
    let overlay = menu.find('.burger-menu_overlay');
    
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu(){
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
 
  window.onclick = function(event) {
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

  $( ".t708__btn" ).click(function() {
    $(this).parent().find(".t708__wrapper").fadeToggle();           
    $( ".t708__btn" ).toggleClass( "t708__btn_active" );      
});


///////////////first page write text
function nextMsg(i) {
  if (messages.length == i) {
      i = 0;
  }
  $('#message').html(messages[i]).fadeIn(1000).delay(5000).fadeOut(1000, function() {
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
//////////////////////////////////////////////
