var topImage = "https://jamcoy.com/img/readme_images/chart.png";
var bottomImage = "https://jamcoy.com/img/readme_images/Refuel_history.png";

$("#photo-fader").append('<div id="slider-control"></div>' +
    '<div id="expanding-container">' +
        '<canvas class="fader-canvasses" id="fader-canvas-top"></canvas>' +
        '<canvas class="fader-canvasses" id="fader-canvas-bottom"></canvas>' +
    '</div>');

var $sliderControl = $("#slider-control");
var $faderCanvasTop = $("#fader-canvas-top");

var imgBottom = new Image;

imgBottom.src = bottomImage;

var c = document.getElementById("fader-canvas-bottom");
var ctx = c.getContext("2d");

ctx.canvas.height = imgBottom.height;
ctx.canvas.width = imgBottom.width;

ctx.drawImage(imgBottom, 0, 0);

var imgTop = new Image;

imgTop.src = topImage;

c = document.getElementById("fader-canvas-top");
ctx = c.getContext("2d");

ctx.canvas.height = imgTop.height;
ctx.canvas.width = imgTop.width;

ctx.drawImage(imgTop, 0, 0);

resizeContainer();

$(function() {
    $sliderControl.slider();
    $faderCanvasTop.css('opacity', 0);
});

$sliderControl.on( "slide", function() {
    var value = $sliderControl.slider( "option", "value" );
    $faderCanvasTop.css('opacity', (value/100));
});

window.onresize = function() {
    resizeContainer();
};

$(window).on("orientationchange",function(){
    resizeContainer();
});

function resizeContainer(){
    var top_height = $faderCanvasTop.height();
    var bottom_height = $("#fader-canvas-bottom").height();
    if (top_height > bottom_height) {
        $("#expanding-container").height(top_height);
    } else {
        $("#expanding-container").height(bottom_height);
    }
}