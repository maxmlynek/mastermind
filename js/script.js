/**
 * Created by Max on 6/5/2016.
 */

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
