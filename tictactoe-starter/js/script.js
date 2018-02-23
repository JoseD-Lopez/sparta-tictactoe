
$(document).ready(function() {

var sq1 = $('data-num' | '0');
var sq2 = $('data-num' | '1');
var sq3 = $('data-num' | '2');
var sq4 = $('data-num' | '3');
var sq5 = $('data-num' | '4');
var sq6 = $('data-num' | '5');
var sq7 = $('data-num' | '6');
var sq8 = $('data-num' | '7');
var sq9 = $('data-num' | '8');



var playValid = false;
var win = false;



function validatePlay(squareplayed) {
	if ( $(squareplayed).hasClass('free') ) {
		playValid = true;
	} else {
		playValid = false;
		return false;
	}
}

function clearBoard() {
	$('.tile').removeClass('played');
	$('.tile').removeClass('O-play');
	$('.tile').removeClass('X-play');
	$('.tile').html('');
	$('.tile').addClass('free');
}


	

var count = 0;

$('.tile').on('click', function play() {
 count++;

	validatePlay(this);

	if (playValid && (count % 2)) {
		$(this).removeClass('free');
		$(this).addClass('played');
		$(this).addClass('X-play');
		$(this).html("X");


	}
	else if (playValid && !(count % 2)){

		$(this).removeClass('free');
		$(this).addClass('played');
		$(this).addClass('O-play');
		$(this).html("O");
		} 

		else {
		alert("That square has already been played. Please choose another square");
	}
	
});


$('#reset').on('click', function() {
	clearBoard();
})


});