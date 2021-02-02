document.getElementById("year").innerHTML = new Date().getFullYear();
////////////////////////////////////////////////////////////////////////


$(function () { // DOM ready


    $(".cselect").each(function () {

        var $input = $(this).find("p");
        var $dropDown = $(this).find("ul");

        $(this).on("click", function () {
            $dropDown.toggle();

        });
        $(document).on('click', function (e) {
            if (!$(e.target).closest(".drzuZL").length) {
                $('.toggled_block').hide();
            }
            e.stopPropagation();
        });

        $dropDown.on("click", "li", function () {
            $('.text_div > span').text($(this).text());
            $('.toggled_block li').removeClass('activeChoice');
            $(this).addClass("activeChoice");
            $input.val($(this).text());
        });

    });

    $(".cselect2").each(function () {

        var $input = $(this).find("p");
        var $dropDown = $(this).find("ul");

        $(this).on("click", function () {
            $dropDown.toggle();

        });
        $(document).on('click', function (e) {
            if (!$(e.target).closest(".drzuZL").length) {
                $('.toggled_block2').hide();
            }
            e.stopPropagation();
        });

        $dropDown.on("click", "li", function () {
            $('.text_div2 > span').text($(this).text());
            $('.toggled_block2 li').removeClass('activeChoice');
            $(this).addClass("activeChoice");
            $input.val($(this).text());
        });

    });

    $(".cselect3").each(function () {

        var $input = $(this).find("p");
        var $dropDown = $(this).find("ul");

        $(this).on("click", function () {
            $dropDown.toggle();

        });
        $(document).on('click', function (e) {
            if (!$(e.target).closest(".drzuZL").length) {
                $('.toggled_block3').hide();
            }
            e.stopPropagation();
        });

        $dropDown.on("click", "li", function () {
            $('.text_div3 > span').text($(this).text());
            $('.toggled_block3 li').removeClass('activeChoice');
            $(this).addClass("activeChoice");
            $input.val($(this).text());
        });

    });
});


$(document).ready(function () {
    $('#select1').multiselect({
        nonSelectedText: 'Traffic types*',
        includeSelectAllOption: true

    });

    $('#select2').multiselect({
        nonSelectedText: 'Which verticals are you promoting?*',
        includeSelectAllOption: true
    });

});



/////////////////
//////////////////////////////////////////////

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function checkPassword(password) {
    var pattern = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
    if (pattern.test(password)) {
        return true;
    } else {
        return false;
    }
}

function checkCkecked1() {
    if ($("#29cc8o9r6f8g").is(":checked")) {
        return true;
    } else { }
    return false;
}

function checkCkecked2() {
    if ($("#8otrbbqgo44").is(":checked")) {
        return true;
    } else { }
    return false
}

var email = $("#emailSignUp").val();
var password = $("#passwordSignUp").val();
var skype = $("#skype").val();
var traffic_types = $("#select1").val();
var verticals = $("#select2").val();
var budget = $("#budget .multiselect-selected-text").text();
var experience_years = $("#exper_year .multiselect-selected-text").text();
var where_find_us = $("#where_find_us").val();
var country = $("#country").val();
var he_is = $("#he_is .multiselect-selected-text").text();
var some_information = $("#some_information").val();

function validate(email, password, skype, traffic_types, verticals, budget, experience_years,
    where_find_us, country, he_is, some_information) {


    const $email_border = $("#emailSignUp");
    const $password_border = $("#passwordSignUp");
    const $passwordRepeat_border = $("#repeat_pasword");
    const $skype_border = $("#skype");
    const $traffic_border = $(".types");
    const $verticals_border = $(".verticals");
    const $budget_border = $(".cselect");
    const $experience_years_border = $(".cselect2");
    const $where_find_us_border = $("#where_find_us");
    // const $country_border = $("#country");
    const $he_is_border = $(".cselect3");
    // const $some_information_border = $("#some_information");
    const $checked1_border = $("#ckecked1");
    const $checked2_border = $("#ckecked2");


    var email = $("#emailSignUp").val();
    var password = $("#passwordSignUp").val();
    var repeat_pasword = $("#repeat_pasword").val();
    var skype = $("#skype").val();
    var traffic_types = $(".types .multiselect-container.dropdown-menu .active").text();
    var verticals = $(".verticals .multiselect-container.dropdown-menu .active").text();
    var budget = $("#budget .multiselect-selected-text").text();
    var experience_years = $("#exper_year .multiselect-selected-text").text();
    var where_find_us = $("#where_find_us").val();
    var country = $("#country").val();
    var he_is = $("#he_is .multiselect-selected-text").text();
    var some_information = $("#some_information").val();


    console.log('some_information: ' + some_information.length);

    if (validateEmail(email) && checkPassword(password) && password == repeat_pasword && skype.length > 3
        && traffic_types.length > 3 && verticals.length > 3 && budget.length != 29 && experience_years.length != 94 && where_find_us.length > 2
        && he_is.length != 5 && checkCkecked1() == true && checkCkecked2() == true) {
        $('#emailSignUp').val('');
        $('#passwordSignUp').val('');
        $('#repeat_pasword').val('');
        $('#skype').val('');
        $(".types .multiselect.dropdown-toggle.btn.btn-default span").text("Traffic types*");
        $(".verticals .multiselect.dropdown-toggle.btn.btn-default span").text('Which verticals are you promoting?*');
        $('.cselect .multiselect.dropdown-toggle.btn.btn-default span').text('What is your regular budget?*');
        $('.cselect2 .multiselect.dropdown-toggle.btn.btn-default span').text('How many years of experience do you have in the industry?*');
        $('#where_find_us').val('');
        $("#country").val('');
        $('.cselect3 .multiselect.dropdown-toggle.btn.btn-default span').text('I am*');
        $("#some_information").val('');
    }
    else {
        if (!validateEmail(email)) {
            $email_border.css("border", "1px solid red");
            $("#emailSignUp").focus(function () {
                $('#emailSignUp').val('');
                $email_border.css("border", "none");
            });
        }


        if (!checkPassword(password)) {
            $password_border.css("border", "1px solid red");
            $("#passwordSignUp").focus(function () {
                $('#passwordSignUp').val('');
                $password_border.css("border", "none");
            });
        }

        if (password != repeat_pasword) {
            $passwordRepeat_border.css("border", "1px solid red");
            $("#repeat_pasword").focus(function () {
                $('#repeat_pasword').val('');
                $passwordRepeat_border.css("border", "none");
            });
        }

        if (skype.length <= 3) {
            $skype_border.css("border", "1px solid red");
            $("#skype").focus(function () {
                $('#skype').val('');
                $skype_border.css("border", "none");
            });
        }

        if (traffic_types.length <= 3) {
            $traffic_border.css("border", "1px solid red");
            $(".types .multiselect.dropdown-toggle.btn.btn-default").focus(function () {

                $traffic_border.css("border", "none");
            });
        }

        if (verticals.length <= 3) {
            $verticals_border.css("border", "1px solid red");
            $(".verticals .multiselect.dropdown-toggle.btn.btn-default").focus(function () {
                $verticals_border.css("border", "none");
            });
        }

        if (budget.length == 29) {
            $budget_border.css("border", "1px solid red");
            $("#budget").focus(function () {
                $('#budget').val('');
                $budget_border.css("border", "none");
            });
        }

        if (experience_years.length == 94) {
            $experience_years_border.css("border", "1px solid red");
            $("#exper_year").focus(function () {
                $('#exper_year').val('');
                $experience_years_border.css("border", "none");
            });
        }

        if (where_find_us.length <= 2) {
            $where_find_us_border.css("border", "1px solid red");
            $("#where_find_us").focus(function () {
                $('#where_find_us').val('');
                $where_find_us_border.css("border", "none");
            });
        }

        // if (country.length<=2){
        //     $country_border.css("border", "1px solid red");
        //     $("#country").focus(function () {   
        //         $('#country').val('');           
        //       $country_border.css("border", "none");
        //     });
        // }

        if (he_is.length == 5) {
            $he_is_border.css("border", "1px solid red");
            $("#he_is").focus(function () {
                $('#he_is').val('');
                $he_is_border.css("border", "none");
            });
        }

        //   if (!validateName(company_name)) {
        //     $company_name_border.css("border", "1px solid red");
        //     $("#company_name").focus(function () {
        //       $('#company_name').val('');
        //       $company_name_border.css("border", "none");
        //     });

        //   }
        //   if (!validateName(user_name)) {
        //     $user_name_border.css("border", "1px solid red");
        //     $("#user_name").focus(function () {
        //       $('#user_name').val('');
        //       $user_name_border.css("border", "none");
        //     });

        //   }
        //   if (!validateWebname(website)) {
        //     $website_border.css("border", "1px solid red");
        //     $("#website").focus(function () {
        //       $('#website').val('');
        //       $website_border.css("border", "none");
        //     });

        //   }
        //   if (he_is.length == 9) {
        //     $he_is_border.css("border", "1px solid red");
        //     $("#he_is").focus(function () {
        //       $('#he_is').val('');
        //       $he_is_border.css("border", "none");
        //     });

        //   }
        //   if (verticals.length == 0) {
        //     $verticals_border.css("border", "1px solid red");
        //     $("#verticals").focus(function () {
        //       $('#verticals').val('');
        //       $verticals_border.css("border", "none");
        //     });
        //   }
        //   if (messenger.length == 17) {
        //     $messenger_border.css("border", "1px solid red");
        //     $("#messenger").focus(function () {
        //       $('#messenger').val('');
        //       $messenger_border.css("border", "none");
        //     });

        //   }
        if (checkCkecked1() == false) {
            $checked1_border.css("border", "1px solid red");
            $("#29cc8o9r6f8g").focus(function () {
                $checked1_border.css("border", "none");
            });

        }
        if (checkCkecked2() == false) {
            $checked2_border.css("border", "1px solid red");
            $("#8otrbbqgo44").focus(function () {
                $checked2_border.css("border", "none");
            });

        }

    }
    return (email, password, skype, traffic_types, verticals, budget, experience_years, where_find_us, country, he_is, some_information);
}

/////////////////////////////SEND MAIN PAGE FORM CONTACT US///////////////////////////////////
var sendFormBecameAdvertiser = document.getElementById("sendFormregistration");

sendFormBecameAdvertiser.addEventListener("click", function () {
    validate(email, password, skype, traffic_types, verticals, budget, experience_years, where_find_us, country, he_is, some_information);


});