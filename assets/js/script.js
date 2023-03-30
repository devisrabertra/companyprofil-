'use strict'

// add event on element

const addEvenOnElem = function (elem, type, callback) {
	if (elem.length > 1) {
		for (let i = 0; i < elem.length; i++) {
			elem[i].addEventListener(type, callback);
		}
	}else{
		elem.addEventListener(type, callback);
	}
}

// navbar toggle

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function() {
	navbar.classList.toggle("active");
	overlay.classList.toggle("active");
	document.body.classList.toggle("active");
} 

addEvenOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function() {
	navbar.classList.remove("active");
	overlay.classList.remove("active");
	document.body.classList.remove("active");
}

addEvenOnElem(navbarLinks, "click", closeNavbar);

// header active when window scroll down to 100px
const header = document.querySelector("[data-header]");

const activeElemOnScroll = function() {
	if (window.scrollY > 100) {
		header.classList.add("active");
	}else{
		header.classList.remove("active");
	}	
}

addEvenOnElem(window, "scroll", activeElemOnScroll);