/*global $*/

$(document).ready(function() {
    var colorOrig=$("body").css("background");
    $(".covernext").hover(
    function() {
        //mouse over
        $("body").css("background", "linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 69%,rgba(216,216,216,1) 84%,rgba(122,122,122,1) ")
    }, function() {
        //mouse out
        $("body").css("background", "white")
    });
});

$(document).ready(function() {
    var colorOrig=$("body").css("background");
    $(".next").hover(
    function() {
        //mouse over
        $("body").css("background", "linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 69%,rgba(216,216,216,1) 84%,rgba(122,122,122,1) ")
    }, function() {
        //mouse out
        $("body").css("background", "white")
    });
});
    
$(document).ready(function() {
    var colorOrig=$("body").css("background");
    $(".back").hover(
    function() {
        //mouse over
        $("body").css("background", "linear-gradient(to right, rgba(122,122,122,1) 0%,rgba(216,216,216,1) 16%,rgba(255,255,255,1) 31%,rgba(255,255,255,1) 100%)")
    }, function() {
        //mouse out
        $("body").css("background", "white")
    });
});