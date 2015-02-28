jQuery(function($){ /* $ = jQuery */
	$(".gnb>button").on("click", function(){
		$(".gnb>ul").slideToggle(200);/*default setting 400 (0.4초)*/
		/* $(this).net("ul"). this : clicked button element / $(".gnb>ul")와 같음*/
	});
});
