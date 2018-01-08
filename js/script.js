// alert("jQuery is working!");

// selector.action

$("ul").on("click", "p", function() {
	// $(this).css("color","grey");
	// $(this).css("text-decoration", "line-through");

	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function() {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
});

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) { // 13 == ENTER key in ASCII
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + "<p>" + todoText + "</p>" + "</li>");
	}
});
