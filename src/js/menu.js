function init_admin(){
	// Dummy function
}



function init_menu(){
		/**
	 * Clicking on an item in the menu
	 */
	$("#menu a").click(function(){

		// Change selected item
		$(".menu .selected").removeClass("selected");
		$(this).parents(".menu_item").addClass("selected");			

		// Load page
		$(".panel").load($(this).attr("href")+"&j=Pan",init_panel);
		$(".infos").load($(this).attr("href")+"&j=Inf",init_infos);

		update_url($(this).attr("href"),$(this).text());
		return false;
	});

	init_menubar();
	init_admin();
}


function init_menubar(){
	$("#menubar a").unbind();

	$("#menubar a.login").click(function(){
		$(".panel").load("?j=Log",function(){
			$(".inline").first().click(function(){
				$(".panel").load("?j=Reg");
				return false;
			});
		});
		return false;
	});

	$("#menubar a.register").click(function(){
		$(".panel").load("?j=Reg");
		return false;
	});
}

function update_url(url,name){
	var stateObj = { foo: "bar" };
	history.pushState(stateObj, "PhotoShow - " + name, url);
}

$("document").ready(function(){
	init_menu();
	init_infos();
	init_panel();
});


