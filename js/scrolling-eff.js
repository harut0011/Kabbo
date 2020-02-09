console.log('scrolling-eff.js is successfully loaded')

window.onscroll = function showHeader() {
	let header = document.querySelector('.header');
	let menu = document.querySelector('.menu');
	let headermenu = document.querySelector('.header-menu')
	let circleSp = document.getElementsByClassName('circle-sp')
	if (window.pageYOffset > 200) {
		menu.classList.add('menu_fixed');
		headermenu.style.height = 4 + 'vw';
	} else {
		menu.classList.remove('menu_fixed');
		headermenu.style.height = 6 + 'vw';
	}
}



