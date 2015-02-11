$(document).ready(function() {
	var head = "#header h1";
	/*
		***** Header section *****
		jQuery functions used:
		.click, .css, .fadeIn, .fadeOut, .hover, .text
	*/
	$("#header img:first-child").hover(function() {
		$(head).text("NFC Rocks!").css({"color":"blue","font-size":"50px"});
	}, function() {
		$(head).text("NFL Teams").css({"color":"black","font-size":"40px"}).removeClass("backgroundcolor");
	});

	$("#header *").click(function() {
		$(this).fadeOut(1000, function() {
			$(this).fadeIn("linear", function() {
				$(this).fadeOut("slow", function() {
					$(this).fadeIn("fast");
				});
			});
		});
	});

	$("#header img:last-child").hover(function() {
		$(head).text("AFC sucks!").css({"color":"red","font-size":"30px"});
	}, function() {
		$(head).text("NFL Teams").css({"color":"black","font-size":"40px"}).removeClass("backgroundcolor");
	});
	
	$("#nfc").attr("alt","NFC Logo");
	$("#afc").attr("alt","AFC Logo");

	/*
		***** Menu section *****
		jQuery functions used:
		.addClass, .after, .before, .click, .change, .css, .hide, .html, .show, .slideToggle, .text, .val
	*/
	$("#menu form label input").click(function() {
		$(this).val("");
	});

	$("#menu form select[name=title_option]").change(function() {
		if($(this).val() == "text")
			$(head).text($("#menu form label input").val());
		else if($(this).val() == "html")
			$(head).html($("#menu form label input").val());
		else
			$(head).html("NFL Teams").css({"color":"black",
										"font-size":"40px"}).addClass("backgroundcolor");
	});

	$("#menu form button").click(function() {
		var team_name = $("#menu form select[name=team]").val();
		if(team_name == "San Francisco 49ers") {
		//	also works, identifies the first css style for the first p element
		// if($("#san_francisco>p")[0].style.cssText == "display: block;")
			if($("#san_francisco p").css("display") == "block")
				$("#san_francisco").append("<p style='display:block;'>" + $("#new_name").val() + "</p>");
			else
				$("#san_francisco").append("<p style='display:none;'>" + $("#new_name").val() + "</p>");
		}
		else if (team_name == "Seattle Seahawks") {
			if($("#seattle p").css("display") == "block")
				$("#seattle").append("<p style='display:block;'>" + $("#new_name").val() + "</p>");
			else
				$("#seattle").append("<p style='display:none;'>" + $("#new_name").val() + "</p>");
		}
		else if (team_name == "New England Patriots") {
			if($("#patriots p").css("display") == "block")
				$("#patriots").append("<p style='display:block;'>" + $("#new_name").val() + "</p>");
			else
				$("#patriots").append("<p style='display: none;'>" + $("#new_name").val() + "</p>");
		}
		else if (team_name == "Denver Broncos") {
			if($("#broncos p").css("display") == "block")
				$("#broncos").append("<p style='display: block'>" + $("#new_name").val() + "</p>");
			else
				$("#broncos").append("<p style='display: none'>" + $("#new_name").val() + "</p>");
		}
		else if (team_name == "Arizona Cardinals") {
			if($("#arizona p").css("display") == "block")
				$("#arizona").append("<p style='display: block;'>" + $("#new_name").val() + "</p>");
			else
				$("#arizona").append("<p style='display: none;'>" + $("#new_name").val() + "</p>");
		}
		else if (team_name == "St. Louis Rams") {
			if($("#st_louis p").css("display") == "block")
				$("#st_louis").append("<p style='display: block;'>" + $("#new_name").val() + "</p>");
			else
				$("#st_louis").append("<p style='display: none;'>" + $("#new_name").val() + "</p>");
		}
		
	});


	$("#menu p:first-of-type").slideUp(0);

	$("#menu h5").click(function() {
		$("#menu ul li").show();
		$("#menu p:first-of-type").slideDown(function() {
			$(this).click(function() {
				$(this).slideUp();
			});
		});
	});

	$("#menu ul li").hover(function() {
		$(this).hide(100);
	});

	$("#add_team").click(function() {
		if($("#menu select[name=new_team]").val() == "Arizona Cardinals") {
			console.log("test");
			$("#san_francisco").before("<div id='arizona' class='nfc_team'><h2>Arizona Cardinals</h2></div>");
			$("#menu form select[name=team]").append("<option>Arizona Cardinals</option>");
			$("#arizona").click(function() {
				$( "#" + this.id + " p").toggle("fast");
			});
		}
		else if($("#menu select[name=new_team]").val() == "St. Louis Rams") {
			$("#seattle").after("<div id='st_louis' class='nfc_team'><h2>St. Louis Rams</h2></div>");
			$("#menu form select[name=team]").append("<option>St. Louis Rams</option>");
			$("#st_louis").click(function() {
				$( "#" + this.id + " p").toggle("fast");
			});		
		}
	});

	$("#menu p:last-of-type").click(function() {
		$("#menu p span").slideToggle("fast");
	})


	/*
		***** Content section *****
		jQuery functions used:
		.blur, .click, .focus, .toggle
	*/

	$(".nfc_team, .afc_team").click(function() {
		$( "#" + this.id + " p").toggle("fast");
	});

	$("select").focus(function() {
		$(this).css({"color":"blue"});
		$(this).blur(function() {
			$(this).css({"color":"black"});
		});
	});
});