/*
 * ARTICLE_HEADER_SCROLL
 */
var 
	h_scroll,
	last_scroll,
	headerHeight,
	object = $("#header");

$(document).scroll(function() {
	h_scroll = window.pageYOffset;
	headerHeight = header.offsetHeight;

	if(headerHeight < h_scroll){
		if(headerHeight < h_scroll + 100){
			if( last_scroll > h_scroll )
				object.css({"opacity": "1"});
			else
				object.css({"opacity": "0"});
		}
	}

	last_scroll = h_scroll;
});