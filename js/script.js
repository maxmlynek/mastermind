/**
 * Created by Max on 6/5/2016.
 */

var colorArray = [];

var setColorArray = function(){
    colorArray[0] = $('#lastOne > .guess > #guess1').css("background-color"); //default black
    colorArray[1] = $('#color1').css("background-color");
    colorArray[2] = $('#color2').css("background-color");
    colorArray[3] = $('#color3').css("background-color");
    colorArray[4] = $('#color4').css("background-color");
    colorArray[5] = $('#color5').css("background-color");
    colorArray[6] = $('#color6').css("background-color");
};

var draggerFunction = function(){


    $('.colorBox').draggable({
        revert: true
    });
    $('#lastOne > .guess > .guessBox').droppable({
        accepts: '.colorBox',
        drop: function(event, ui) {
            var bgColor = $(ui.draggable).css('backgroundColor');
            $(this).css('backgroundColor', bgColor);
        }
    });
    $('#normalRow > .guess > .guessBox').droppable('disable');
}

var areAllFilled = function(){
    var guess1 = $('#lastOne > .guess > #guess1').css("background-color");
    var guess2 = $('#lastOne > .guess > #guess2').css("background-color");
    var guess3 = $('#lastOne > .guess > #guess3').css("background-color");
    var guess4 = $('#lastOne > .guess > #guess4').css("background-color");
    var x = colorArray[0];
    if(x === guess1 || x === guess2 || x === guess3 || x === guess4 ) {
        return false;
    } 
    return true;
}