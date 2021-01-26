$('#block_two').addClass('active');
$('#block_one').removeClass('active');

$('#block_one').hover(function () {
    $('#block_one').addClass('active');
    $('#block_two').removeClass('active');
})

$('#block_two').hover(function () {
    $('#block_two').addClass('active');
    $('#block_one').removeClass('active');
})

$("#block_one").on("mouseleave", function () {
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
// navBar
const navbar_advertisers = document.querySelector('#nav86235111_publishers');
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


// ............................................
// Counter
var counter = 0;
var c = 4000000;
c1 = 10;
var i = setInterval(function () {
    $(".counter h1").html("$ " + numberWithSpaces(c));
    $(".counter hr").css("width", c1 / 2 + "%");
    counter++;
    c1++;
    c++;
    if (counter == 101) {
        clearInterval(i);
    }
}, 10);

var cz = 4000100;
var timerCount = Math.floor(Math.random() * 10000) + 5000;
function counterTimer() {
    var counterz = 0;
    if (cz <= 6000000) {
        var iz = setInterval(function () {
            var counterNumber = Math.floor(Math.random() * 100);
            cz1 = cz + counterNumber;
            var izz = setInterval(function () {
                $(".counter h1").html("$ " + numberWithSpaces(cz));

                counterz++;

                cz++;
                if (cz == cz1) {
                    clearInterval(izz);
                    cz == cz1;
                }

            }, 100);

            clearInterval(iz);

        }, 500);
    }

}

setInterval(counterTimer, timerCount);



function numberWithSpaces(с) {
    return с.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}


/////////////// page write text
// function nextMsg(i) {
//     if (messages.length == i) {
//       i = 0;
//     }
//     $('#message').html(messages[i]).fadeIn(1000).delay(5000).fadeOut(1000, function () {
//       nextMsg(i + 1);
//     });
//   };

//   var messages = [
//     "Meet your revenue potential",
//     "Get higher results",
//     "Make every interaction more meaningful"
//   ];

//   $('#message').hide();

//   nextMsg(0);
  //////////////////////////////////////////////