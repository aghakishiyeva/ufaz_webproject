$(function () {
    $('.sec[value=1]').click(function () {
        var isChecked = $(this).is(':checked');
        if (isChecked) {
            $('.box').show();
        } else {
            $('.box').hide();
        }
    });

    $('.sec[value=0]').click(function () {
        var isChecked = $(this).is(':checked');
        if (isChecked) {
            $('.box').hide();
        } else {
            $('.box').show();
        }
    });


    $('#first-form').submit(function () {
        $('#nav-profile-tab').click();
        return false;
    });
    $('#second-form').submit(function () {
        $('#nav-contact-tab').click();
        return false;
    });

    $('#last-form').submit(function () {
        let data = $('#first-form').serialize() + $('#second-form').serialize() + $('#last-form').serialize();
        $.ajax({
            url: 'post.php',
            type: 'POST',
            dataType: 'json',
            data : data,
            success: function () {

            }

        });
        return false;
    })
});