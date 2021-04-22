$(document).ready(function() {
    $(".hamburger").click(function() {
        $("nav ul").toggleClass("active");
        $(".line-3").toggleClass("rotate-1");
        $(".line-2").toggleClass("remove-line");
        $(".line-1").toggleClass("rotate-2");
    });
});