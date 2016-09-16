$(function(){ //same as window onload

    $("#firstPage").hide();
    $("#secondPage").hide();
    $("#thirdPage").hide();

    $("#firstButton").click(function(){
        $("#firstPage").show();
        $("#secondPage").hide();
        $("#thirdPage").hide();
    });

    $("#secondButton").click(function(){
        $("#firstPage").hide();
        $("#secondPage").show();
        $("#thirdPage").hide();
    });

    $("#thirdButton").click(function(){
        $("#firstPage").hide();
        $("#secondPage").hide();
        $("#thirdPage").show();
    });


    // alert("hello");
});
