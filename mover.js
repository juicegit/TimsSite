// JavaScript Document

// define an array of images
var imgs = new Array("images/home_off.jpg", "images/flights_off.jpg");

// preload the images by iterating the array
for (var i = 0; i < imgs.length; i++)
{
    var obj = new Image();
    obj.src = imgs[i];
}

// initialize the onmouseover and onmouseout events
function init()
{
    // get all the <img> tags in the HTML document as an array
    var imgArray = document.getElementsByTagName("img");
    // loop through the array and bind the
    // onmouseout and onmouseover events
    console.log("Found " + imgArray.length + " images");
    for (var i = 0; i < imgArray.length; i++)
    {
        var img = imgArray[i];
        img.onmouseover = doMouseOver;
        img.onmouseout = doMouseOut;
    }
}

// define the function for the onmouseover event
function doMouseOver(e)
{
    var img;

    if (!e)  // for IE
    {
        e = window.event;
        // get the <img> element for IE that triggered the event
        img = e.srcElement;
    }
    else
    {
        // get the <img> element for FF that triggered the event
        img = e.target;
    }

    // extract the digit only from the "id" attribute value and
    // concatenate it to the image src for a result of
    // "images/pic1.gif", "images/pic2.gif" or "images/pic3.gif"
    img.src = "images/" + img.id + "_on.jpg";
}

// define the function for the onmouseout event
function doMouseOut(e)
{
    var img;

    if (!e)  // for IE
    {
        e = window.event;
        // get the <img> element for IE that triggered the event
        img = e.srcElement;
    }
    else
    {
        // get the <img> element for FF that triggered the event
        img = e.target;
    }

    // this is one way to do it but I think it would be better if that for each button use a convention of
    // <name>_[on|off].jpg  So there fore you would take the img id to get the name (e.g. "flight", "vacation")
    // and then in the mouse over append "on" and in the mouseOut, append "off"
    // The reason is that there will be less guessing about the magic numbers AND the names just make it more readable
    // since you already had
    // once this is done, you could remove the if statement and stick with a one-liner for finding the right image
    img.src = "images/" + img.id + "_off.jpg";
}

// call the "init" function to initialize the event binding
window.onload = init;