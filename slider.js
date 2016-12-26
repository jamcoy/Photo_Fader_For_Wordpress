$( function() {
    $("#slider-control" ).slider();
    $("#fader-canvas-top").css('opacity', 0);
} );

$( "#slider-control" ).on( "slide", function() {
    var value = $( "#slider-control" ).slider( "option", "value" );
    $("#fader-canvas-top").css('opacity', (value/100));
} );


$("#file_input1").change(function(e){

    var URL = window.URL;
    var url = URL.createObjectURL(e.target.files[0]);
    var img = new Image();
    img.src = url;

    img.onload = function() {

        var c = document.getElementById("fader-canvas-bottom");
        var ctx = c.getContext("2d");

        ctx.canvas.height = img.height;
        ctx.canvas.width = img.width;

        ctx.drawImage(img, 0, 0);

        resizeContainer();

    }

});

$("#file_input2").change(function(e){

    var URL = window.URL;
    var url = URL.createObjectURL(e.target.files[0]);
    var img = new Image();
    img.src = url;

    img.onload = function() {

        var c = document.getElementById("fader-canvas-top");
        var ctx = c.getContext("2d");

        ctx.canvas.height = img.height;
        ctx.canvas.width = img.width;

        ctx.drawImage(img, 0, 0);

        resizeContainer();

    }

});

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