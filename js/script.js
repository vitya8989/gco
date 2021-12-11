let secondMenuButton = document.querySelectorAll('.second-menu-btn');
let secondMenu = document.querySelectorAll('.second-menu');

for (let i = 0; i < secondMenu.length; i++) {
	secondMenuButton[i].onclick = function () {
		for (let j = 0; j < secondMenuButton.length; j++) {
			if (secondMenuButton[j].classList.contains('show') && secondMenuButton[j] != secondMenuButton[i]) {
				secondMenuButton[j].classList.remove('show');
				secondMenu[j].classList.remove('show');
			}
		}
		secondMenuButton[i].classList.toggle('show');
		secondMenu[i].classList.toggle('show');
	}
};
new Swiper('.main-slider', {
	speed: 600,
	slidesPerView: 1,
	navigation: {
		nextEl: '.main-slider__btn-next',
		prevEl: '.main-slider__btn-prev'
	},
	pagination: {
		el: '.main-slider__pagination',
		clickable: true,
	},
});;
new Swiper('.promo-slider', {
	speed: 600,
	slidesPerView: 'auto',
	spaceBetween: 10,
	navigation: {
		nextEl: '.promo-slider__btn-next',
		prevEl: '.promo-slider__btn-prev'
	},
	breakpoints: {
		891: {
			spaceBetween: 24,
		},
		1561: {
			slidesPerView: 4,
		},
	},
});;