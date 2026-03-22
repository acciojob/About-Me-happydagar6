

document.addEventListener("DOMContentLoaded", () => {
	const progressFillls = document.querySelectorAll(".progress-fill");

	progressFillls.forEach((fill) => {
		const width = fill.style.widthl
		fill.style.width = "0";

		setTimeout(() => {
			fill.style.width = width;
		}, 100);
	})
})