
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

$(function() {
	
	
	$(document).on("click", "#mobile-menu", function() {
		if(isMobile) {
			var imgName = $(this).css("background-image");
			if (imgName.lastIndexOf("close-btn.png") > 0) {
				location.href = "intro.html";
			} else {
				var width = $("nav").css("width")
				if (width == "0px") {
					$("nav").css({width:"100%"});
				} else {
					$("nav").css({width:"0px"});
				}
			}
		}
	});
		
	$(document).on("click", "article h3", function() {
		if(isMobile) {
			var $this = $(this);
			$("article h3").each(function(i, obj) {
				if ($this.text() == $(obj).text()) {
					$(obj).next().show();
				} else {
					$(obj).next().hide();
				}
			});
		}
	});

	$(document).on("click", "a.img img", function(e) {
		var src = $(this).attr("src");
		$("#popImg img.img").attr("src", src);
		$("#popImg").show();
		return false;
	});
	$(document).on("click", "img.icon", function(e) {
		$("#popImg").hide();
	});
});