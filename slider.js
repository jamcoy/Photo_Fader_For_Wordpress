var bottomImage = "https://jamcoy.com/img/readme_images/chart.png";
var topImage = "https://jamcoy.com/img/readme_images/Refuel_history.png";

var imgBottom = new Image;

imgBottom.src = bottomImage;

var c = document.getElementById("fader-canvas-bottom");
var ctx = c.getContext("2d");

ctx.canvas.height = imgBottom.height;
ctx.canvas.width = imgBottom.width;

ctx.drawImage(imgBottom, 0, 0);

var imgTop = new Image;

imgTop.src = topImage;

var c = document.getElementById("fader-canvas-top");
var ctx = c.getContext("2d");

ctx.canvas.height = imgTop.height;
ctx.canvas.width = imgTop.width;

ctx.drawImage(imgTop, 0, 0);

resizeContainer();

$( function() {
    $("#slider-control" ).slider();
    $("#fader-canvas-top").css('opacity', 0);
} );

$( "#slider-control" ).on( "slide", function() {
    var value = $( "#slider-control" ).slider( "option", "value" );
    $("#fader-canvas-top").css('opacity', (value/100));
} );

window.onresize = function() {
    resizeContainer();
};

$(window).on("orientationchange",function(){
    resizeContainer();
});

function resizeContainer(){
    var top_height = $("#fader-canvas-top").height();
    var bottom_height = $("#fader-canvas-bottom").height();
    if (top_height > bottom_height) {
        $("#expanding-container").height(top_height);
    } else {
        $("#expanding-container").height(bottom_height);
    }
}