/**
 * Created by Max on 6/5/2016.
 */

var colorArray = [];
var computerPlayerColors = [];

var checkCorrectness = function() {

    var redFields = 0;
    var whiteFields = 0;

    var guess1 = $('#lastOne > .guess > #guess1').css("background-color");
    var guess2 = $('#lastOne > .guess > #guess2').css("background-color");
    var guess3 = $('#lastOne > .guess > #guess3').css("background-color");
    var guess4 = $('#lastOne > .guess > #guess4').css("background-color");

    if(guess1 == computerPlayerColors[0]) {redFields++; whiteFields--;}
    if(guess2 == computerPlayerColors[1]) {redFields++; whiteFields--;}
    if(guess3 == computerPlayerColors[2]) {redFields++; whiteFields--;}
    if(guess4 == computerPlayerColors[3]) {redFields++; whiteFields--;}

    if(redFields === 4){
        $('#infoBox').html('<p style="color:green">You won!</p>');
        $('.colorBox').draggable('disable');
        $('#computerGuess').css("display", "initial");
        return true;
    }

    for(let i = 0; i < 4; i++){
        if(guess1 == computerPlayerColors[i]) {
            whiteFields++;
            break;
        }
    }
    for(let i = 0; i < 4; i++){
        if(guess2 == computerPlayerColors[i]) {
            whiteFields++;
            break;
        }
    }
    for(let i = 0; i < 4; i++){
        if(guess3 == computerPlayerColors[i]) {
            whiteFields++;
            break;
        }
    }
    for(let i = 0; i < 4; i++){
        if(guess4 == computerPlayerColors[i]) {
            whiteFields++;
            break;
        }
    }

    var correctFieldsCounter = 1;

    while(redFields>0){
        $('#lastOne > .correct > #correct'+correctFieldsCounter).css("background-color", " #ff6961");
        redFields--;
        correctFieldsCounter++;
    }
    while(whiteFields>0){
        $('#lastOne > .correct > #correct'+correctFieldsCounter).css("background-color", "navajowhite");
        whiteFields--;
        correctFieldsCounter++;
    }

    return false;

};

var fillComputerColorBoxes = function(){
    $('#computerGuess1').css("background-color", computerPlayerColors[0]);
    $('#computerGuess2').css("background-color", computerPlayerColors[1]);
    $('#computerGuess3').css("background-color", computerPlayerColors[2]);
    $('#computerGuess4').css("background-color", computerPlayerColors[3]);
}

var setColorArray = function(){
    colorArray[0] = $('#lastOne > .guess > #guess1').css("background-color"); //default black
    colorArray[1] = $('#color1').css("background-color");
    colorArray[2] = $('#color2').css("background-color");
    colorArray[3] = $('#color3').css("background-color");
    colorArray[4] = $('#color4').css("background-color");
    colorArray[5] = $('#color5').css("background-color");
    colorArray[6] = $('#color6').css("background-color");
};

var setComputerPlayerColors = function(){
    computerPlayerColors[0] = colorArray[Math.floor((Math.random() * 6) + 1)];
    computerPlayerColors[1] = colorArray[Math.floor((Math.random() * 6) + 1)];
    computerPlayerColors[2] = colorArray[Math.floor((Math.random() * 6) + 1)];
    computerPlayerColors[3] = colorArray[Math.floor((Math.random() * 6) + 1)];
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