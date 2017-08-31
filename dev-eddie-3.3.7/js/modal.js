$('.modal').on('hidden.bs.modal', function (e) {
	resetIframes($(this));
});

$('.modal.carousel').on('slid.bs.carousel', function() {
	var prev = $(this).find('.active').prev();
	var next = $(this).find('.active').next();
	resetIframes(prev);
	resetIframes(next);
});

function resetIframes(elem) {
    elem.find('iframe').each(function() {
    	var embedSrc = $(this).attr('src');
    	$(this).attr('src','');
    	$(this).attr('src', embedSrc);

        if(embedSrc.indexOf('gated=')>-1){
			$(this).parent().removeClass('embed-container');
        }
    });
}

// adding modalLink class for tracking
if (!$('a.btn-icon-video').hasClass('modalLink')) {
	$(this).addClass('modalLink')
}

$('.modal').on('show.bs.modal', function (e) {
	if($.cookie('ILMNGatedForm')){
        var gatedFormURL = $.cookie('ILMNGatedForm');
		$(this).find('iframe').each(function() {
            if(gatedFormURL == $(this).attr('src')){
                var embedSrc = $(this).attr('data-followupurl');
                $(this).attr('src','');
                $(this).attr('src', embedSrc);
        
                if(gatedFormURL.indexOf('gated=')>-1){
					$(this).removeAttr('style');
                    $(this).parent().addClass('embed-container');
                }
            }
        });

	}
});