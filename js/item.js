let headerSearchWrap = document.querySelector('.header__search-wrap');
let wrapper = document.querySelector('.wrapper');
let headerEyeLink = document.querySelector('.header__eye-link');
let headerTop = document.querySelector('.header__top');
let headerSearchMob = document.querySelector('.header__search-mob');
let closeSearch = document.querySelector('.close-search');
let headerBottom = document.querySelector('.header__bottom');
let header = document.querySelector('.header');
let secondMenuButton = document.querySelectorAll('.second-menu-btn');
let secondMenu = document.querySelectorAll('.second-menu');
let burger = document.querySelector('.burger');
let navLevel2 = document.querySelectorAll('.nav-level-2');
let nav = document.querySelector('.nav');
let toBack1 = document.querySelectorAll('.to-back-1');
let toLevel3 = document.querySelectorAll('.to-level-3');
let navLevel3 = document.querySelectorAll('.nav-level-3');
let toBack21 = document.querySelectorAll('.to-back-2-1');
let toBack22 = document.querySelectorAll('.to-back-2-2');
let toBack23 = document.querySelectorAll('.to-back-2-3');
let toBack24 = document.querySelectorAll('.to-back-2-4');
let headerContent = document.querySelector('.header__content');
let headerSearchInput = document.querySelector('.header__search-input');
let headerSearch = document.querySelector('.header__search');

headerSearchInput.onfocus = function () {
	headerSearch.classList.add('focus');
}
headerSearchInput.onblur = function () {
	headerSearch.classList.remove('focus');
}

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
}

if (window.innerWidth < 768) {
	wrapper.append(headerSearchWrap);
}
if (window.innerWidth < 1024) {
	wrapper.append(headerBottom);
	for (let i = 0; i < secondMenu.length; i++) {
		headerBottom.prepend(secondMenu[i]);
	}
	for (let i = 0; i < secondMenu.length; i++) {
		secondMenuButton[i].onclick = function () {
			nav.classList.add('hide-nav');
			secondMenu[i].classList.add('show');
			navLevel2[i].classList.add('open-nav-level-2');
		}
	}
	burger.addEventListener('click', function () {
		if (nav.classList.contains('hide-nav')) {
			nav.classList.remove('hide-nav');
			nav.classList.remove('none-nav');
			for (let i = 0; i < secondMenu.length; i++) {
				navLevel2[i].classList.remove('open-nav-level-2');
				secondMenu[i].classList.remove('show');
				secondMenu[i].classList.remove('show-fix');
			}
			for (let i = 0; i < navLevel3.length; i++) {
				navLevel3[i].classList.remove('open-nav-level-3');
			}
		}
	});
}

window.addEventListener("resize", function () {
	if (window.innerWidth < 768) {
		wrapper.append(headerSearchWrap);
	} else {
		headerTop.insertBefore(headerSearchWrap, headerEyeLink);
	}
	if (window.innerWidth < 1024) {
		wrapper.append(headerBottom);
		for (let i = 0; i < secondMenu.length; i++) {
			headerBottom.prepend(secondMenu[i]);
		}
		for (let i = 0; i < secondMenu.length; i++) {
			secondMenuButton[i].onclick = function () {
				nav.classList.add('hide-nav');
				secondMenu[i].classList.add('show');
				navLevel2[i].classList.add('open-nav-level-2');
			}
		}
		burger.addEventListener('click', function () {
			if (nav.classList.contains('hide-nav')) {
				nav.classList.remove('hide-nav');
				nav.classList.remove('none-nav');
				for (let i = 0; i < secondMenu.length; i++) {
					navLevel2[i].classList.remove('open-nav-level-2');
					secondMenu[i].classList.remove('show');
					secondMenu[i].classList.remove('show-fix');
				}
				for (let i = 0; i < navLevel3.length; i++) {
					navLevel3[i].classList.remove('open-nav-level-3');
				}
			}
		});
	} else {
		headerContent.appendChild(headerBottom);
		for (let i = 0; i < secondMenu.length; i++) {
			header.append(secondMenu[i]);
		}
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
		}
	}
});

headerSearchMob.onclick = function () {
	headerSearchWrap.classList.toggle('show-search');
	headerBottom.classList.remove('menu-open');
	burger.classList.remove('menu-open');
}
closeSearch.onclick = function () {
	headerSearchWrap.classList.remove('show-search');
}

burger.addEventListener('click', function () {
	burger.classList.toggle('menu-open');
	headerBottom.classList.toggle('menu-open');
	headerSearchWrap.classList.remove('show-search');
});

for (let i = 0; i < secondMenu.length; i++) {
	toBack1[i].onclick = function () {
		navLevel2[i].classList.remove('open-nav-level-2');
		nav.classList.remove('hide-nav');
		secondMenu[i].classList.remove('show');
	}
}

for (let i = 0; i < toLevel3.length; i++) {
	toLevel3[i].onclick = function () {
		for (let j = 0; j < secondMenu.length; j++) {
			navLevel2[j].classList.remove('open-nav-level-2');
			navLevel3[i].parentElement.parentElement.classList.add('show-fix');
			nav.classList.add('none-nav');
		}
		navLevel3[i].classList.add('open-nav-level-3');
	}
}

for (let i = 0; i < toBack21.length; i++) {
	toBack21[i].onclick = function () {
		for (let i = 0; i < navLevel3.length; i++) {
			navLevel3[i].classList.remove('open-nav-level-3');
			navLevel2[0].classList.add('open-nav-level-2');
			nav.classList.remove('none-nav');
			navLevel3[i].parentElement.parentElement.classList.remove('show-fix');
		}
	}
}

for (let i = 0; i < toBack22.length; i++) {
	toBack22[i].onclick = function () {
		for (let i = 0; i < navLevel3.length; i++) {
			navLevel3[i].classList.remove('open-nav-level-3');
			navLevel2[1].classList.add('open-nav-level-2');
			nav.classList.remove('none-nav');
			navLevel3[i].parentElement.parentElement.classList.remove('show-fix');
		}
	}
}

for (let i = 0; i < toBack23.length; i++) {
	toBack23[i].onclick = function () {
		for (let i = 0; i < navLevel3.length; i++) {
			navLevel3[i].classList.remove('open-nav-level-3');
			navLevel2[2].classList.add('open-nav-level-2');
			nav.classList.remove('none-nav');
			navLevel3[i].parentElement.parentElement.classList.remove('show-fix');
		}
	}
}

for (let i = 0; i < toBack24.length; i++) {
	toBack24[i].onclick = function () {
		for (let i = 0; i < navLevel3.length; i++) {
			navLevel3[i].classList.remove('open-nav-level-3');
			navLevel2[3].classList.add('open-nav-level-2');
			nav.classList.remove('none-nav');
			navLevel3[i].parentElement.parentElement.classList.remove('show-fix');
		}
	}
}
;
let footerMenuHead = document.querySelectorAll('.footer-menu__head');
let footerMenuBody = document.querySelectorAll('.footer-menu__body');

if (window.innerWidth < 1131) {
	for (let i = 0; i < footerMenuHead.length; i++) {
		footerMenuHead[i].onclick = function (e) {
			for (let j = 0; j < footerMenuHead.length; j++) {
				if (footerMenuBody[j] != this.nextElementSibling) {
					footerMenuBody[j].classList.remove('opened');
					footerMenuBody[j].style.maxHeight = 0;
					footerMenuHead[j].classList.remove('opened');
				}
			}
			if (this.nextElementSibling.classList.contains('opened')) {
				this.nextElementSibling.classList.remove('opened');
				this.nextElementSibling.style.maxHeight = 0;
				footerMenuHead[i].classList.remove('opened');
			} else {
				this.nextElementSibling.classList.add('opened');
				this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
				footerMenuHead[i].classList.add('opened');
			}
		}
	}
}

window.addEventListener("resize", function () {
	if (window.innerWidth < 1131) {
		for (let i = 0; i < footerMenuHead.length; i++) {
			footerMenuBody[i].style.maxHeight = 0;
			footerMenuHead[i].onclick = function (e) {
				for (let j = 0; j < footerMenuHead.length; j++) {
					if (footerMenuBody[j] != this.nextElementSibling) {
						footerMenuBody[j].classList.remove('opened');
						footerMenuBody[j].style.maxHeight = 0;
						footerMenuHead[j].classList.remove('opened');
					}
				}
				if (this.nextElementSibling.classList.contains('opened')) {
					this.nextElementSibling.classList.remove('opened');
					this.nextElementSibling.style.maxHeight = 0;
					footerMenuHead[i].classList.remove('opened');
				} else {
					this.nextElementSibling.classList.add('opened');
					this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
					footerMenuHead[i].classList.add('opened');
				}
			}
		}
	} else {
		for (let i = 0; i < footerMenuHead.length; i++) {
			footerMenuBody[i].style.maxHeight = '100%';
		}
	}
}); ;

let mainImagesImgMini = document.querySelectorAll('.main-images__img-mini');
let mainImagesImgBig = document.querySelectorAll('.main-images__img-big');

for (let i = 0; i < mainImagesImgMini.length; i++) {
	mainImagesImgMini[i].onclick = function () {
		for (let j = 0; j < mainImagesImgMini.length; j++) {
			mainImagesImgBig[j].classList.remove('show');
			mainImagesImgMini[j].classList.remove('active-img');
		}
		mainImagesImgBig[i].classList.add('show');
		mainImagesImgMini[i].classList.add('active-img');
	}
}

let orderStock = document.querySelector('.order-stock');
let whereStock = document.querySelector('.where-stock');
let itemRight = document.querySelector('.item__right');
let itemLeft = document.querySelector('.item__left');
let size = document.querySelector('.size');
let orderStockBtnNo = document.querySelector('.order-stock__btn-no');
let orderStockRight = document.querySelector('.order-stock__right');

if (window.innerWidth < 821) {
	itemLeft.insertBefore(orderStock, size);
	itemLeft.insertBefore(whereStock, size);
	if (orderStockBtnNo) {
		orderStock.append(orderStockBtnNo);
	}
}

window.addEventListener("resize", function () {
	if (window.innerWidth < 821) {
		itemLeft.insertBefore(orderStock, size);
		itemLeft.insertBefore(whereStock, size);
		if (orderStockBtnNo) {
			orderStock.append(orderStockBtnNo);
		}
	} else {
		itemRight.prepend(whereStock);
		itemRight.prepend(orderStock);
		if (orderStockBtnNo) {
			orderStockRight.append(orderStockBtnNo);
		}
	}
});

let askPopup = document.querySelector('.ask-popup');
let closeAsk = document.querySelector('.close-ask');
let messagePopup = document.querySelector('.message-popup');
let orderStockBtn = document.querySelector('.order-stock__btn');

if (messagePopup) {
	orderStockBtn.onclick = function () {
		messagePopup.classList.add('show');
	}
	messagePopup.onclick = function (e) {
		if (!e.target.closest('.message-popup__body')) {
			messagePopup.classList.remove('show');
		}
	}
	closeAsk.onclick = function () {
		messagePopup.classList.remove('show');
	}
}

if (askPopup) {
	orderStockBtnNo.onclick = function () {
		askPopup.classList.add('show');
	}
	askPopup.onclick = function (e) {
		if (!e.target.closest('.ask-popup__body')) {
			askPopup.classList.remove('show');
		}
	}
	closeAsk.onclick = function () {
		askPopup.classList.remove('show');
	}

	let onlyLetterRus = document.querySelector('.only-letter-rus');
	let onlyNumber = document.querySelector('.only-number');
	let onlyLetterEng = document.querySelector('.only-letter-eng');
	onlyLetterRus.addEventListener('keyup', function () {
		this.value = this.value.replace(/[\w]/g, '');
	});
	onlyLetterEng.addEventListener('keyup', function () {
		this.value = this.value.replace(/[а-яё]/ig, '');
	});
	onlyNumber.addEventListener('keyup', function () {
		this.value = this.value.replace(/[^0-9]/g, '');
	});

	let askForm = document.querySelector('.ask-form');
	askForm.onsubmit = function (e) {
		e.preventDefault();
		if (onlyLetterRus.value == '') {
			onlyLetterRus.classList.add('error-input');
		}
		if (onlyNumber.value == '') {
			onlyNumber.classList.add('error-input');
		}
		if (onlyLetterEng.value == '') {
			onlyLetterEng.classList.add('error-input');
		}
	}
	onlyLetterRus.onfocus = function () {
		onlyLetterRus.classList.remove('error-input');
	}
	onlyNumber.onfocus = function () {
		onlyNumber.classList.remove('error-input');
	}
	onlyLetterEng.onfocus = function () {
		onlyLetterEng.classList.remove('error-input');
	}
}

let benefitsClueBody = document.querySelector('.benefits__clue-body');
let benefitsClueArea = document.querySelector('.benefits__clue-area');

benefitsClueArea.addEventListener('mouseenter', e => {
	benefitsClueBody.classList.add('show');
});

benefitsClueArea.addEventListener('mouseleave', e => {
	benefitsClueBody.classList.remove('show');
});
