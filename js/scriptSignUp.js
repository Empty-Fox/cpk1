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


    $('#select5').multiselect({
        nonSelectedText: 'I am*'
    })
});


