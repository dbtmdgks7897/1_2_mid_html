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

function login(){
	var value1 = $('#input1').val();
	var value2 = $('#input2').val();
	if (value1 == "" || value2 == ""){
		alert("로그인 오류");
	}
	else{
		alert("로그인 성공");
		location.replace('Inlogin/index.html')
	}
};

function go_register(){
	alert("회원가입 창으로 이동합니다.");
	location.replace("register.html");
};

function register(){
	var value1 = $('#input1').val();
	var value2 = $('#input2').val();
	var value3 = $('#input3').val();
	var value4 = $('#input4').val();
	var value5 = $('#input5').val();
	var value6 = $('#input6').val();
	if (value1 == "" || value2 == "" || value3 == "" || value4 == "" || value5 == "" || value6 == ""){
		alert("빈 칸이 있습니다.");
	}
	else{
		alert("회원가입 성공");
		location.replace('login.html')
	}
};