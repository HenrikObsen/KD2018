var pause = 4000; //Pause inden nyt billede vises. Angives i millisekunder. 
var img;
var imgID = 0;

function loadImages(images) {

    img = images.split(",");
    imgID = Math.round(Math.random() * (img.length - 1));
    rotator();
}

function rotator() {
    var imgString = "";

    imgString = 'SliderImg/' + img[imgID];

    if (imgID == img.length - 1) {
        imgID = 0;
    }
    else {
        imgID++;
    }


    $("#slider").fadeTo(700, 0, function () {
        $("#slider").attr("alt", imgString);
        $("#slider").attr("src", imgString);
        $("#slider").fadeTo(700, 1, function () {

        });

    });


    setTimeout('rotator()', pause);
}
