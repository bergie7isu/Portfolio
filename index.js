function smoothScroll() {
    $('.nav-anchor, .hero-anchor').click(function(event) {
        event.preventDefault();
        let anchorTarget = $(this).attr("href");
        let targetLocation = $(anchorTarget).offset().top;
        $("html, body").animate({
            scrollTop: targetLocation
        }, 500);
    });
}

function heroHeight() {
    let windowHeight = $( window ).height();
    let navHeight = $('nav').height();
    let heroHeight = windowHeight - navHeight + "px";
    $('header').css("min-height", heroHeight);
}

function windowResize() {
    window.addEventListener("resize", heroHeight);
}

function loadPortfolio() {
    smoothScroll();
    heroHeight();
    windowResize();
}

$(loadPortfolio);