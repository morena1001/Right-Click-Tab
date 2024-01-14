window.addEventListener("mousedown", function(event) {
    window.oncontextmenu = function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    }

    if (event.button == 2) {
        $('.tab').css({
            top: event.pageY,
            left: event.pageX,
        });

        $('.tab').fadeIn();
        return false;
    }
    $('.tab').fadeOut("fast");
});
