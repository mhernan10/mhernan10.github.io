$(function() {
	$('.sub-menu ul').hide();
	$('.sub-menu a').click(function () {
		$(this).parent(".sub-menu").children("ul").slideToggle("slow");
		$(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
	});
});