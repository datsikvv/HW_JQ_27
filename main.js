
$("#showAll").click(function(){

    $("#one").show(2000);

    $("#two").slideDown( 3000 );
    
    $("#three").fadeIn( 3000 );
    
    $("#four").animate({ marginLeft: "0"}, 800, "swing");
    
    $("#five").animate({ marginLeft: "0"}, 800, "swing");
    
    $("#six").animate({ width: "300"}, 1000, "swing").delay(1500).animate({ width: "100"}, 2200, "swing");
    
    $("#seven").animate({ width: "100", height: "50"}, 1000, "swing");
    
    $("#eight").animate({ top: "308"}, 1200, "swing").animate({ height: "1000"}, 1200, "swing").animate({ height: "50"}, 900, "swing", function() {
        ($(this)).css("position", "unset")
    });
    
    $("#nine").delay(3000).show(2000).animate({  borderRadius: "0"},'slow','linear');
    
    $(".showT").slideDown( 3000 );
    
    $(".squareT").delay(3000).fadeIn( 2500 );
    
    $("#endS").show(2000).animate({  top: "458", left: "408"},'slow','linear');
    
    $("#twellwe").fadeIn(2000).animate({  top: "0", right: "0"},'slow','linear').animate({  top: "0", left: "0"},'slow','linear').fadeOut(2000, function() {
        ($(this)).css("position", "unset")
    });
    
    $("#twellwe").fadeIn(2000);


});

$("#hideAll").click(function(){

    $("div").fadeOut(5000);
});
