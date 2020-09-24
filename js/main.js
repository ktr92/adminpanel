

$(document).ready(function() {
	
	$('.myaccount-down').on('click', function() {
		$('.myaccount-dropdown').toggle();
		$(this).toggleClass('active');
	});
	
	
	
  $("#btn-mobile").click(function() {
    $(".leftcol").toggleClass("show");
  });
  
  $("#mobsearch").click(function() {
    $(".panelsearch").toggleClass("show");
  });
  
  /*$('#btn-mobile').on('click', function() {
		$('.leftcol').toggle("slide", { direction: "left" }, 150);
		
		if ($('div.panelsearch').is(':visible')) {
			$('div.panelsearch').toggle("slide", { direction: "top" }, 0);
		}

	});
	$('#mobsearch').on('click', function() {
			$('div.panelsearch').toggle("slide", { direction: "top" }, 150);
			if ($('.leftcol').is(':visible')) {
				$('.leftcol').toggle("slide", { direction: "top" }, 0);
			}

	});*/
});



