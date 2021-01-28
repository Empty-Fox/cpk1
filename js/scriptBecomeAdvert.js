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
