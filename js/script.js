var obiekt = document.getElementById("obiekt");

document.getElementById("link").addEventListener("mouseover", function () {
	obiekt.style.transform = "scale(1.1)";
	obiekt.style.color = "#DB463F";
});

document.getElementById("link").addEventListener("mouseout", function () {
	obiekt.style.transform = "scale(1)";
	obiekt.style.color = "#163759";
});

var obiek2 = document.getElementById("obiekt2");

document.getElementById("link2").addEventListener("mouseover", function () {
	obiekt2.style.transform = "scale(1.1)";
	obiekt2.style.color = "#74DB70";
});

document.getElementById("link2").addEventListener("mouseout", function () {
	obiekt2.style.transform = "scale(1)";
	obiekt2.style.color = "#163759";
});

var obiek3 = document.getElementById("obiekt3");

document.getElementById("link3").addEventListener("mouseover", function () {
	obiekt3.style.transform = "scale(1.1)";
	obiekt3.style.color = "#EF9A00";
});

document.getElementById("link3").addEventListener("mouseout", function () {
	obiekt3.style.transform = "scale(1)";
	obiekt3.style.color = "#163759";
});

var obiek4 = document.getElementById("obiekt4");

document.getElementById("link4").addEventListener("mouseover", function () {
	obiekt4.style.transform = "scale(1.1)";
	obiekt4.style.color = "#536CFF";
});

document.getElementById("link4").addEventListener("mouseout", function () {
	obiekt4.style.transform = "scale(1)";
	obiekt4.style.color = "#163759";
});

const menu = document.querySelector(".NavMenu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger_menu = document.querySelector(".menuIcon");
const hamburger_close = document.querySelector(".closeIcon");

function toggleMenu() {
	if (menu.classList.contains("showMenu")) {
		menu.classList.remove("showMenu");
	} else {
		menu.classList.add("showMenu");
	}
}

hamburger_menu.addEventListener("click", toggleMenu);
hamburger_close.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
	menuItem.addEventListener("click", toggleMenu);
});
