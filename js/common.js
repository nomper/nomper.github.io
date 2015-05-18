
//menu size
$(function() {
	var menuW = eval(($(this).find('#Menu').css('width')).replace(/px/ig,''));
	var livol_ul = $('#Menu ul li').size();
	var livol_ol = $('#Menu ol li').size(); 
	var livol =  eval(livol_ul-livol_ol);
	if (menuW >= 500){
		var menuLiW =  parseInt(eval(menuW)/eval(livol));
		$('#Menu ul li').width(menuLiW);
	}
	$('#Menu ul').fadeIn("fast");
});

$(function() {
	$("#Menu li:last-child").addClass('last');
  });
  


//Menu Mouse Over
$(function(){
	$('#Menu ul li').mouseover(function(){
		$(this).addClass('on');
	});
	$('#Menu ul li').mouseout(function(){
		$(this).removeClass('on');
	});
});	

	
	
//Drop Down Menu	
$(function(){
	$('#Menu ol li:last-child').addClass('last');
	$('#Menu ul li').hover(function(){
		$("> ol:not(:animated)" , this).animate({
			height : "toggle",
			opacity : "toggle"
		}, 200 );
	},
	function(){
		$("> ol" , this).fadeOut("fast");
	});
});

//Scroll
jQuery.easing.quart = function (x, t, b, c, d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
};
$(function(){
   $('a[href^=#]').click(function() {
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, 1000, 'quart');
      return false;
   });
});

//photo_list
$(function() {
	$('ul.photo_list li:last-child').addClass(".last");
  });

//Form input
$(function(){
	$('#contact input[type=text],#contact textarea').focus(function(){
		$(this).addClass('focus');
	}).blur(function(){
		$(this).removeClass('focus');
	});
});


//Copyright year
function displayYear() {
   var now = new Date();
   var year = now.getFullYear();
   document.write(year);
}


