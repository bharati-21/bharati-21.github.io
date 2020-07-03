/*$('.nav-link').click(function (e) {
    $('.nav-link').removeClass('current_page_item');
    $(this).addClass('current_page_item');
});
*/


$(document).ready(() => {


    var i = 0;
    var w = window.matchMedia("(min-width: 768px)");
    var txt = 'Hello there, I am Bharati. Welcome to my space!';
    var speed = 50;
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("intro-head").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
        else {
            rep(w);
            w.addListener(rep);
        }
    }
    function rep(w) {
        if (w.matches) {
            setTimeout(function () {
                i = 0;
                speed = 40;
                document.getElementById("intro-head").innerHTML = '';
                setTimeout(typeWriter, speed);
            }, 5000);
        }
    }
    typeWriter();
})
