$(document).ready(function() {
    $("#side-nav").hide();
    $("#sh-icon").click(function() {
        $("#side-nav").css("display", "block");
        console.log("opend");
    });

    $("#hd-icon").click(function() {
        $("#side-nav").hide()
        console.log("remove");
    });
});