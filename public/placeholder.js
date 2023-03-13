function definePlaceholderBehavior() {
	$("input, textarea").each(function () {
		$(this).focus(function () {
			let placeholder = $(this).attr("placeholder");
			if (typeof placeholder !== "undefined" && typeof placeholder !== false) {
				$(this).attr("placeholder", "");
				$(this).blur(function () {
					$(this).attr("placeholder", placeholder);
				});
			}
		});
	});
}

definePlaceholderBehavior();
