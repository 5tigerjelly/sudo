$(function(){
	//intro();
	main();
});
function main(){
	$.get('./intro.txt', function(data){
		var cardRules = [data];
		typed(cardRules);
	});
}
function typed(content){
	$("#content").typed({
	    strings: content,
	    contentType: 'text',
	    loop: false
	});
}

function intro(){
	$("#intro").typed({
	    strings: ['user$'],
	    contentType: 'text',
	    loop: false
	});
}

