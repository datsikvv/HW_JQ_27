
$("#showQ").click(function(){

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

$("#showAll").click(function(){

    $("div").fadeIn(5000);
});

$("#hideQ").click(function(){

    $("#one").hide(2000);

    $("#two").slideUp( 3000 );
    
    $("#three").fadeOut( 3000 );
    
    $("#four").animate({ marginLeft: "-400"}, 800, "swing");
    
    $("#five").animate({ marginLeft: "1800"}, 800, "swing");
    
    $("#six").animate({ width: "0"}, 1000, "swing").delay(1500).animate({ width: "0"}, 2200, "swing");
    
    $("#seven").animate({ width: "0", height: "0"}, 1000, "swing");
    
    $("#eight").animate({ top: "-200"}, 1200, "swing").animate({ height: "0"}, 1200, "swing").animate({ height: "0"}, 900, "swing", function() {
        ($(this)).css("position", "absolute")
    });
    
    $("#nine").delay(3000).hide(2000).animate({  borderRadius: "100"},'slow','linear');
    
    $(".showT").slideUp( 3000 );
    
    $(".squareT").delay(3000).fadeOut( 2500 );
    
    $("#endS").hide(2000).animate({  bottom: "550", right: "800"},'slow','linear');

 /* $("#twellwe").fadeTo(2000, function() {
       ($(this)).css("position", "absolute");
        ($(this)).css("display", "block")
    }).animate({  top: "0", left: "0"},'slow','linear');
    
    $("#twellwe").fadeIn(2000).animate({  top: "0", right: "0"},'slow','linear').fadeOut(2000);
  */  
    
    $("#twellwe").fadeOut(2000, function() {
        ($(this)).css("position", "absolute");
        ($(this)).css("display", "block")
    }).animate({  top: "0", left: "0"},'slow','linear', function() {
        ($(this)).css("left", "unset");
    });

    $("#twellwe").animate({  top: "0", right: "0"},'slow','swing', function() {
        ($(this)).css("top", "unset");
    }).animate({  bottom: "0", right: "0"},'slow','linear').fadeOut(2000);

});
