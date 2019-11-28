$(document).ready(function(){

	$(".nav>li").mouseover(function(){
	$(this).children(".submenu").stop().slideDown();
	});

	$(".nav>li").mouseleave(function(){
	$(this).children(".submenu").stop().slideUp();
	});


	$('.carousel').carousel({
		interval: 2500
	});
});
function Change_Info(){
	alert("정보수정이 완료되었습니다.");
	location.replace("index.html");
};