(function(){
    let navbar = document.getElementById('navbar');
    let offsetTop = navbar.offsetTop;
    window.onscroll = () => toglleStickyNavbar();

    function toglleStickyNavbar(){
        if (window.pageYOffset >= offsetTop) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
})()