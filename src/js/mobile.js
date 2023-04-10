(function () {
	const burgerItem = document.querySelector(".burger");
	const menu = document.querySelector(".header-desktop");
	const menuCloseItem = document.querySelector(".header-close");
	burgerItem.addEventListener("click", () => {
		menu.classList.add("header-desktop-active");
	});
	menuCloseItem.addEventListener("click", () => {
		menu.classList.remove("header-desktop-active");
	});
})();