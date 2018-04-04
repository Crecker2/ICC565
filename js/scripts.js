$(document).ready(function(){

	window.sr = ScrollReveal();
	// sr.reveal('.cell', {origin: 'right', distance: '200px',});


	 $(".button-collapse").sideNav();
	 
	// var source = document.getElementById('entry-template').innerHTML;
	// var template = Handlebars.compile(source);

	// function makeprofiles(){
	// 	$(guydata).each(function(){
	// 		var context = {name: this.name, bio: this.bio, picture: this.picture, part: this.part};
	// 		var html = template(context);
	// 		$('.guys').append(html);
	// 	});

	// }

	// tab selector
	$('.sections li').click(function(){
		$('.sections li').removeClass('active');
		$(this).addClass('active');

		$('.content').addClass('hide');
		$($(this).data('toggle')).removeClass('hide');
	});
	// activation for next button dropdown
	$('.dropdown-button').dropdown();
	$('.movetoquiz').click(function(){
		$('.content').addClass('hide');
		$('.sections').hide();

		$('#quizzes').removeClass('hide');

		$('#nextdropdown .movetoquiz').remove()

	});
	//quiz functionality
	var answers = {
		"question_1": "B"
	}

	 $('button.answer').click(function(){
	 	$('fieldset.' + this.name).attr('disabled','disabled');
		$('fieldset.' + this.name + ' button').css('background-color','grey');
	 	var input = $(this).attr('value');

	 	if(answers[this.name] == this.value){
	 		$(this).css('background-color','#a2fba2');
	 		$('.card-block.' + $(this).attr('name')).append('<p>Correct!</p>');
	 	} else {
	 		$(this).css('background-color','#FFD1D1')
	 		$('.card-block.' + $(this).attr('name')).append('<p>Incorrect! Correct answer: ' + answers[this.name] + '</p>');
	 	}
	 });
});