//make the jump link smoothly scroll to their respective sections
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

//set the minimum height of the hero to match the height of the user's browser window
//this ensures that the hero fills the whole screen when the page loads
function heroHeight() {
    let windowHeight = $(window).height();
    let navHeight = $('nav').height();
    let heroHeight = windowHeight - navHeight;
    let heroHeightText = heroHeight + "px";
    $('header').css("min-height", heroHeightText);
}

//adjust the height of the hero if the window is resized after the page is loaded
function windowResize() {
    window.addEventListener("resize", heroHeight);
}

//ready
function loadPortfolio() {
    smoothScroll();
    heroHeight();
    windowResize();
}

$(loadPortfolio);