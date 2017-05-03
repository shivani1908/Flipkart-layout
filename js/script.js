$(".products li:nth-child(1) a").mouseenter(function () {
    $(".dropdown-appliances").fadeOut();
    $(".dropdown-men").fadeOut();
    $(".dropdown-women").fadeOut();
    $(".dropdown-kids").fadeOut();
    $(".dropdown-home").fadeOut();
    $(".dropdown-books").fadeOut();
    $(".dropdown-electronics").fadeIn(0, "linear");
    $(".products li:nth-child(1) span").removeClass("glyphicon-menu-down").addClass("glyphicon-menu-up");
});

$("header, #mycarousel, .trend-container").mouseenter(function () {
    $(".dropdown-electronics").fadeOut(0, "linear");
    $(".products li:nth-child(1) span").removeClass("glyphicon-menu-up").addClass("glyphicon-menu-down");
});

$(".products li:nth-child(2) a").mouseenter(function () {
    $(".dropdown-electronics").fadeOut();
     $(".dropdown-men").fadeOut();
     $(".dropdown-women").fadeOut();
     $(".dropdown-kids").fadeOut();
     $(".dropdown-home").fadeOut();
     $(".dropdown-books").fadeOut();
    $(".dropdown-appliances").fadeIn(0, "linear");
    $(".products li:nth-child(2) span").removeClass("glyphicon-menu-down").addClass("glyphicon-menu-up");
});

$("header, #mycarousel, .trend-container").mouseenter(function () {
    $(".dropdown-appliances").fadeOut(0, "linear");
    $(".products li:nth-child(2) span").removeClass("glyphicon-menu-up").addClass("glyphicon-menu-down");
});


$(".products li:nth-child(3) a").mouseenter(function () {
     $(".dropdown-electronics").fadeOut();
     $(".dropdown-women").fadeOut();
     $(".dropdown-kids").fadeOut();
    $(".dropdown-home").fadeOut();
    $(".dropdown-books").fadeOut();
     $(".dropdown-appliances").fadeOut();
    $(".dropdown-men").fadeIn(0, "linear");
    $(".products li:nth-child(3) span").removeClass("glyphicon-menu-down").addClass("glyphicon-menu-up");
});

$("header, #mycarousel, .trend-container").mouseenter(function () {
    $(".dropdown-men").fadeOut(0, "linear");
    $(".products li:nth-child(3) span").removeClass("glyphicon-menu-up").addClass("glyphicon-menu-down");
});

$(".products li:nth-child(4) a").mouseenter(function () {
    $(".dropdown-electronics").fadeOut();
    $(".dropdown-men").fadeOut();
    $(".dropdown-kids").fadeOut();
     $(".dropdown-home").fadeOut();
    $(".dropdown-books").fadeOut();
    $(".dropdown-appliances").fadeOut();
    $(".dropdown-women").fadeIn(0, "linear");
    $(".products li:nth-child(4) span").removeClass("glyphicon-menu-down").addClass("glyphicon-menu-up");
});

$("header, #mycarousel, .trend-container").mouseenter(function () {
    $(".dropdown-women").fadeOut(0, "linear");
    $(".products li:nth-child(4) span").removeClass("glyphicon-menu-up").addClass("glyphicon-menu-down");
});

$(".products li:nth-child(5) a").mouseenter(function () {
    $(".dropdown-electronics").fadeOut();
    $(".dropdown-men").fadeOut();
    $(".dropdown-women").fadeOut();
    $(".dropdown-home").fadeOut();
    $(".dropdown-books").fadeOut();
    $(".dropdown-appliances").fadeOut();
    $(".dropdown-kids").fadeIn(0, "linear");
    $(".products li:nth-child(5) span").removeClass("glyphicon-menu-down").addClass("glyphicon-menu-up");
});

$("header, #mycarousel, .trend-container").mouseenter(function () {
    $(".dropdown-kids").fadeOut(0, "linear");
    $(".products li:nth-child(5) span").removeClass("glyphicon-menu-up").addClass("glyphicon-menu-down");
});

$(".products li:nth-child(6) a").mouseenter(function () {
    $(".dropdown-electronics").fadeOut();
    $(".dropdown-men").fadeOut();
    $(".dropdown-women").fadeOut();
    $(".dropdown-kids").fadeOut();
    $(".dropdown-books").fadeOut();
    $(".dropdown-appliances").fadeOut();
    $(".dropdown-home").fadeIn(0, "linear");
    $(".products li:nth-child(6) span").removeClass("glyphicon-menu-down").addClass("glyphicon-menu-up");
});
$("header, #mycarousel, .trend-container").mouseenter(function () {
    $(".dropdown-home").fadeOut(0, "linear");
    $(".products li:nth-child(6) span").removeClass("glyphicon-menu-up").addClass("glyphicon-menu-down");
});

$(".products li:nth-child(7) a").mouseenter(function () {
    $(".dropdown-electronics").fadeOut();
    $(".dropdown-men").fadeOut();
    $(".dropdown-women").fadeOut();
    $(".dropdown-kids").fadeOut();
    $(".dropdown-home").fadeOut();
    $(".dropdown-appliances").fadeOut();
    $(".dropdown-books").fadeIn(0, "linear");
    $(".products li:nth-child(7) span").removeClass("glyphicon-menu-down").addClass("glyphicon-menu-up");
});
$("header, #mycarousel, .trend-container").mouseenter(function () {
    $(".dropdown-books").fadeOut(0, "linear");
    $(".products li:nth-child(7) span").removeClass("glyphicon-menu-up").addClass("glyphicon-menu-down");
});

var countDown = new Date("April 4, 2018 01:30:00").getTime();//date to count down to
var x = setInterval(function () {
        var now = new Date().getTime();//today's date and time
        var distance = countDown - now;//the distance between now an the count down date
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('demo').innerHTML =  hours + "h "+ minutes + "m " + seconds + "s ";

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }

    }, 1000);
