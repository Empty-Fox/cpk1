document.getElementById("year").innerHTML = new Date().getFullYear();
////////////////////////////////////////////////////////////////////////

$(".cselect_ba").each(function () {

  var $input = $(this).find("p");
  var $dropDown = $(this).find("ul");

  $(this).on("click", function () {
    $dropDown.toggle();

  });
  $(document).on('click', function (e) {
    if (!$(e.target).closest(".drzuZL").length) {
      $('.toggled_block_ba').hide();
    }
    e.stopPropagation();
  });

  $dropDown.on("click", "li", function () {
    $('.text_div_ba > span').text($(this).text());
    $('.toggled_block_ba li').removeClass('activeChoice');
    $(this).addClass("activeChoice");
    $input.val($(this).text());
  });

});

$(".cselect_sm").each(function () {

  var $input = $(this).find("p");
  var $dropDown = $(this).find("ul");

  $(this).on("click", function () {
    $dropDown.toggle();

  });
  $(document).on('click', function (e) {
    if (!$(e.target).closest(".drzuZL").length) {
      $('.toggled_block_sm').hide();
    }
    e.stopPropagation();
  });

  $dropDown.on("click", "li", function () {
    $('.text_div_sm > span').text($(this).text());
    $('.toggled_block_sm li').removeClass('activeChoice');
    $(this).addClass("activeChoice");
    $input.val($(this).text());
  });

});


/////////////////////////////////////////////////////////////////

/////////////////
//////////////////////////////////////////////


function validateName(name) {
  return /^[A-Za-z ]+$/.test(name);
}

function validateWebname(website) {
  return /^(https?:\/\/)?((?:[a-z0-9-]+\.)+([a-z]{2,}))(?:\/|$)/.test(website);
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


function validate(company_name, user_name, website, he_is, verticals, messenger) {

  const $company_name_border = $("#company_name");
  const $user_name_border = $("#user_name");
  const $website_border = $("#website");
  const $he_is_border = $(".cselect_ba");
  const $verticals_border = $("#verticals");
  const $messenger_border = $(".cselect_sm");
  const $checked1_border = $("#ckecked1");
  const $checked2_border = $("#ckecked2");

  var company_name = $("#company_name").val();
  var user_name = $("#user_name").val();
  var website = $("#website").val();
  var he_is = $("#he_is .multiselect-selected-text").text();
  var verticals = $("#verticals").val();
  var messenger = $("#messenger .multiselect-selected-text").text();

  console.log('value: ' + messenger.length);

  if (validateName(company_name) && validateName(user_name) && validateWebname(website) && he_is.length != 9 && verticals.length > 0 && messenger.length != 17 && checkCkecked1() == true && checkCkecked2() == true) {
    $('#company_name').val('');
    $('#user_name').val('');
    $('#website').val('');
    $("#verticals").val('');

    $(".cselect_ba .text_div_ba.multiselect.dropdown-toggle.btn.btn-default span").text("You are:*");
    $(".cselect_sm  .text_div_sm.multiselect.dropdown-toggle.btn.btn-default span").text("Select messenger*");

  } else {

    if (!validateName(company_name)) {
      $company_name_border.css("border", "1px solid red");
      $("#company_name").focus(function () {
        $('#company_name').val('');
        $company_name_border.css("border", "none");
      });

    }
    if (!validateName(user_name)) {
      $user_name_border.css("border", "1px solid red");
      $("#user_name").focus(function () {
        $('#user_name').val('');
        $user_name_border.css("border", "none");
      });

    }
    if (!validateWebname(website)) {
      $website_border.css("border", "1px solid red");
      $("#website").focus(function () {
        $('#website').val('');
        $website_border.css("border", "none");
      });

    }
    if (he_is.length == 9) {
      $he_is_border.css("border", "1px solid red");
      $("#he_is").focus(function () {
        $he_is_border.css("border", "none");
      });

    }
    if (verticals.length == 0) {
      $verticals_border.css("border", "1px solid red");
      $("#verticals").focus(function () {
        $('#verticals').val('');
        $verticals_border.css("border", "none");
      });
    }
    if (messenger.length == 17) {
      $messenger_border.css("border", "1px solid red");
      $("#messenger").focus(function () {
        $messenger_border.css("border", "none");
      });

    }
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
  return (company_name, user_name, website, he_is, verticals, messenger);
}

/////////////////////////////SEND MAIN PAGE FORM CONTACT US///////////////////////////////////
var sendFormBecameAdvertiser = document.getElementById("sendFormBecameAdvertiser");

sendFormBecameAdvertiser.addEventListener("click", function () {
  validate(company_name, user_name, website, he_is, verticals, messenger);
});