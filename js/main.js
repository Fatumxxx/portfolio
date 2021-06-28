$(function () {
    $(document).ready(function () {

        //E-mail Ajax Send
        $("form").submit(function () { //Change
            var th = $(this);
            $.ajax({
                type: "POST",
                url: "mail.php", //Change
                data: th.serialize()
            }).done(function () {
                alert("Дякую!");
                setTimeout(function () {
                    // Done Functions
                    th.trigger("reset");
                }, 1000);
            });
            return false;
        });

    });
    
    $('.ru').on('click', function () {
        $('.ru').addClass('active');
        $('.ua, .en').removeClass('active');
    });
    $('.ua').on('click', function () {
        $('.ua').addClass('active');
        $('.ru, .en').removeClass('active');
    });
    $('.en').on('click', function () {
        $('.en').addClass('active');
        $('.ru, .ua').removeClass('active');
    });

    new WOW().init();

});
