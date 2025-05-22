$(function(){
	var ne=$("#ulist a.active").find("img").attr("datas");
	$("#ulist a.active").find("img").attr("src",ne);
	$("#ulist a.active").mouseover(function(){
		$(this).css("color","#3ec7da");
	});
});