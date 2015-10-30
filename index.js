$(document).ready(function(){
	$("#btnLetter").click(function(){randomLetter();});
});

function randomLetter() {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    result = chars[Math.round(Math.random() * (chars.length - 1))];
    $("#letter").text(result);
}
