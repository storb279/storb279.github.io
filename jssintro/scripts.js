var numOfClicks = 0;

$(".button").mousemove(function() {
    // do stuff...
    numOfClicks++;
    $("mark").html(numOfClicks);
    $("body").toggleClass("lime");
    
});