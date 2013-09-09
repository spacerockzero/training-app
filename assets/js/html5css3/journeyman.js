// highlight currently active page nav
$(document).ready(function(){
	var pageName = $('#main').data('page-name');
	$('.nav-item.'+pageName).addClass('active');
});