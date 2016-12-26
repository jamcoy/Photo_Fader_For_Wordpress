$( function() {
    $( "#slider" ).slider();
    $("#myCanvas2").css('opacity', 0);
} );

$( "#slider" ).on( "slide", function() {
    var value = $( "#slider" ).slider( "option", "value" );
    $("#myCanvas2").css('opacity', (value/100));
} );


$("#file_input1").change(function(e){

    var URL = window.URL;
    var url = URL.createObjectURL(e.target.files[0]);
    var img = new Image();
    img.src = url;

    img.onload = function() {

        img_width = img.width;
        img_height = img.height;

        var new_x = 0;
        var new_y = 0;

        if (img_width > img_height) {
            new_x = 600;
            new_y = (600*img_height)/img_width;
        }

        else if (img_height > img_width) {
            new_x = (600*img_width)/img_height;
            new_y = 600;
        }

        else {
            new_x = 600;
            new_y = 600;
        }

        var c = document.getElementById("myCanvas1");
        var ctx = c.getContext("2d");

        ctx.drawImage(img, 0, 0, new_x, new_y);

    }

});

$("#file_input2").change(function(e){

    var URL = window.URL;
    var url = URL.createObjectURL(e.target.files[0]);
    var img = new Image();
    img.src = url;

    img.onload = function() {

        img_width = img.width;
        img_height = img.height;

        var new_x = 0;
        var new_y = 0;

        if (img_width > img_height) {
            new_x = 600;
            new_y = (600*img_height)/img_width;
        }

        else if (img_height > img_width) {
            new_x = (600*img_width)/img_height;
            new_y = 600;
        }

        else {
            new_x = 600;
            new_y = 600;
        }

        var c = document.getElementById("myCanvas2");
        var ctx = c.getContext("2d");

        ctx.drawImage(img, 0, 0, new_x, new_y);

    }

});
