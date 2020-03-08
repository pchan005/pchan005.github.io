$(document).ready(function() {

    $('#hero').addClass("visible")
    $('#intro').addClass("visible")
    
    /* Every time the window is scrolled ... */
    $(document).on("scroll", function () {
        var pageTop = $(document).scrollTop()
        var pageBottom = pageTop + $(window).height()
        var tags = $(".hideme")

        for (var i = 0; i < tags.length; i++) {
            var tag = tags[i]
            if ($(tag).position().top < pageBottom) {
                $(tag).addClass("visible")
            } else {
                $(tag).removeClass("visible")
            }
        }
    })
})