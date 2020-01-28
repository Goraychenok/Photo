
jQuery(window).scroll(function() { 
    var the_top = jQuery(document).scrollTop();
    if (the_top > 530) {
        jQuery('.navigation,.navigation-img,.navigation-arrow,.navigation-link').addClass('back');
    }
    else {
        jQuery('.navigation,.navigation-img,.navigation-arrow,.navigation-link').removeClass('back');
    }

    $('.projects-active').click(function(event) {
    	$('.projects').addClass('hide');
    	$('.work-first').addClass('hide-no');
    	slowScroll('#working').one(event);
    });

    $('.work-back-content').click(function(event) {
    	$('.projects').removeClass('hide');
    	$('.work-first').removeClass('hide-no');
    	slowScroll('#work').one(event);
    });
});


function slowScroll(id){
	var offset = 20;
	$('html,body').animate ({
		scrollTop: $(id).offset ().top - offset
	},1000);
	return false;
}



