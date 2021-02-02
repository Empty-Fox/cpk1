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
  
 function validateWebname (website) { 
     return /^(https?:\/\/)?((?:[a-z0-9-]+\.)+([a-z]{2,}))(?:\/|$)/.test(website);
    }

 
   function validate(company_name, user_name, website, he_is, verticals, messenger) {    

    const $company_name_border = $("#company_name");
    const $user_name_border = $("#user_name");
    const $website_border = $("#website");
    //  const $company_name_border = $("#companyName");
    // const $company_name_border = $("#companyName");
    // const $company_name_border = $("#companyName");
    

    var company_name = $("#company_name").val();
    var user_name = $("#user_name").val();
    var website = $("#website").val();

    if (validateName(company_name) && validateName(user_name) && validateWebname(website)) {
        $('#company_name').val('');
        $('#user_name').val('');
        $('#website').val('');

        console.log(website)    
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
      }
    return (company_name, user_name, website);
}
  
  /////////////////////////////SEND MAIN PAGE FORM CONTACT US///////////////////////////////////
  var sendFormBecameAdvertiser = document.getElementById("sendFormBecameAdvertiser");
  
  sendFormBecameAdvertiser.addEventListener("click", function () {
    var company_name = $("#company_name").val();
    // var user_name = $("#email_contactUs_mainPage").val();
    // var website = $("#message_contactUs_mainPage").val();
    // var he_is = $("#name_contactUs_mainPage").val();
    // var verticals = $("#email_contactUs_mainPage").val();
    // var messenger  = $("#message_contactUs_mainPage").val();

    if (validate(company_name)) {
  
      console.log('validate '+company_name)
    } else {
      
      console.log('not validate ' +company_name)
    }
  
    return false;
  });