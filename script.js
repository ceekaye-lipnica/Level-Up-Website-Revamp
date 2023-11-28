// TOGGLE MENU 
const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header-mobile-nav");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    headNav.classList.toggle("open");
});


// SCROLL TO TOP
let mybutton = document.getElementById("roll-up");

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 600) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// HEADER MOVING TO TOP
const gutter = document.querySelector(".header-bottom.nav");
window.addEventListener("scroll", () => {
	console.log(window.pageYOffset);
	if (window.pageYOffset >= 100) {
    gutter.classList.add("top");
} else {
    gutter.classList.remove("top");
	}
});