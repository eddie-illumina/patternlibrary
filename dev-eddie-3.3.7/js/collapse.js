$(document).ready(function () {


    $('.accordion-default').find('.panel-title').find('a').on('click', function (e) {
    	e.preventDefault();
    	

        $('.accordion-default').find('.btn-icon-expand').removeClass('btn-icon-expand').addClass('btn-icon-collapse');
        if($(this).hasClass('collapsed')) {
            $(this).toggleClass('btn-icon-collapse btn-icon-expand');
        }


        $('.accordion-default').on('show.bs.collapse', function () {
    		$('.accordion-default .in').collapse('hide');
		});


		$('.accordion-default').on('shown.bs.collapse', function () {
			var offset = $(this).find('.collapse.in').prev('.panel-heading');
        		if(offset) {
            		$('html,body').animate({
                		scrollTop: $(offset).offset().top -60
            	}, 500); 
        	}
    	}); 
  

    });



});