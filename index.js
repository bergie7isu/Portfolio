function smoothScroll() {
    $('nav a').click(function(event) {
        event.preventDefault();
        let anchorTarget = $(this).attr("href");
        let targetLocation = $(anchorTarget).offset().top;
        $("html, body").animate({
            scrollTop: targetLocation
        }, 500);
    });
}

$(smoothScroll);