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
let headerContainerTop = document.querySelector('.header__container-top');
let headerContainerBottom = document.querySelector('.header__container-bottom');
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
			if (secondMenuButton[j].classList.contains('show') && secondMenuButton[j].dataset.id != secondMenuButton[i].dataset.id) {
				secondMenuButton[j].classList.remove('show');
				secondMenu[j].classList.remove('show');
			}
		}
		if (secondMenuButton[i].dataset.id == secondMenu[i].dataset.id) {
			secondMenuButton[i].classList.toggle('show');
			secondMenu[i].classList.toggle('show');
		}
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
		headerContainerBottom.appendChild(headerBottom);
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
const CLASS_NAME_SELECT = 'select';
const CLASS_NAME_ACTIVE = 'select_show';
const CLASS_NAME_SELECTED = 'select__option_selected';
const SELECTOR_ACTIVE = '.select_show';
const SELECTOR_DATA = '[data-select]';
const SELECTOR_DATA_TOGGLE = '[data-select="toggle"]';
const SELECTOR_OPTION_SELECTED = '.select__option_selected';

class CustomSelect {
	constructor(target, params) {
		this._elRoot = typeof target === 'string' ? document.querySelector(target) : target;
		this._params = params || {};
		if (this._params['options']) {
			this._elRoot.classList.add(CLASS_NAME_SELECT);
			this._elRoot.innerHTML = CustomSelect.template(this._params);
		}
		this._elToggle = this._elRoot.querySelector(SELECTOR_DATA_TOGGLE);
		this._elRoot.addEventListener('click', this._onClick.bind(this));
	}
	_onClick(e) {
		const target = e.target;
		const type = target.closest(SELECTOR_DATA).dataset.select;
		switch (type) {
			case 'toggle':
				this.toggle();
				break;
			case 'option':
				this._changeValue(target);
				break;
		}
	}
	_update(option) {
		const selected = this._elRoot.querySelector(SELECTOR_OPTION_SELECTED);
		if (selected) {
			selected.classList.remove(CLASS_NAME_SELECTED);
		}
		option.classList.add(CLASS_NAME_SELECTED);
		this._elToggle.textContent = option.textContent;
		this._elToggle.value = option.dataset['value'];
		this._elToggle.dataset.index = option.dataset['index'];
		this._elRoot.dispatchEvent(new CustomEvent('select.change'));
		this._params.onSelected ? this._params.onSelected(this, option) : null;
		return option.dataset['value'];
	}
	_reset() {
		const selected = this._elRoot.querySelector(SELECTOR_OPTION_SELECTED);
		if (selected) {
			selected.classList.remove(CLASS_NAME_SELECTED);
		}
		this._elToggle.textContent = 'Выберите из списка';
		this._elToggle.value = '';
		this._elToggle.dataset.index = -1;
		this._elRoot.dispatchEvent(new CustomEvent('select.change'));
		this._params.onSelected ? this._params.onSelected(this, null) : null;
		return '';
	}
	_changeValue(option) {
		if (option.classList.contains(CLASS_NAME_SELECTED)) {
			return;
		}
		this._update(option);
		this.hide();
	}
	show() {
		document.querySelectorAll(SELECTOR_ACTIVE).forEach(select => {
			select.classList.remove(CLASS_NAME_ACTIVE);
		});
		this._elRoot.classList.add(CLASS_NAME_ACTIVE);
	}
	hide() {
		this._elRoot.classList.remove(CLASS_NAME_ACTIVE);
	}
	toggle() {
		if (this._elRoot.classList.contains(CLASS_NAME_ACTIVE)) {
			this.hide();
		} else {
			this.show();
		}
	}
	dispose() {
		this._elRoot.removeEventListener('click', this._onClick);
	}
	get value() {
		return this._elToggle.value;
	}
	set value(value) {
		let isExists = false;
		this._elRoot.querySelectorAll('.select__option').forEach((option) => {
			if (option.dataset['value'] === value) {
				isExists = true;
				return this._update(option);
			}
		});
		if (!isExists) {
			return this._reset();
		}
	}
	get selectedIndex() {
		return this._elToggle.dataset['index'];
	}
	set selectedIndex(index) {
		const option = this._elRoot.querySelector(`.select__option[data-index="${index}"]`);
		if (option) {
			return this._update(option);
		}
		return this._reset();
	}
}

CustomSelect.template = params => {
	const name = params['name'];
	const options = params['options'];
	const targetValue = params['targetValue'];
	let items = [];
	let selectedIndex = -1;
	let selectedValue = '';
	let selectedContent = 'Выберите из списка';
	options.forEach((option, index) => {
		let selectedClass = '';
		if (option[0] === targetValue) {
			selectedClass = ' select__option_selected';
			selectedIndex = index;
			selectedValue = option[0];
			selectedContent = option[1];
		}
		items.push(`<li class="select__option${selectedClass}" data-select="option" data-value="${option[0]}" data-index="${index}">${option[1]}</li>`);
	});
	return `<button type="button" class="select__toggle" name="${name}" value="${selectedValue}" data-select="toggle" data-index="${selectedIndex}">${selectedContent}</button>
  <div class="select__dropdown">
    <ul class="select__options">${items.join('')}</ul>
  </div>`;
};


document.addEventListener('click', (e) => {
	if (!e.target.closest('.select')) {
		document.querySelectorAll(SELECTOR_ACTIVE).forEach(select => {
			select.classList.remove(CLASS_NAME_ACTIVE);
		});
	}
});;

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

if (whereStock) {
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
}

let orderLensPurpose = document.querySelector('.order-lens__purpose');
let about = document.querySelector('.about');
let orderLensArt = document.querySelector('.order-lens__art');
let lensForm = document.querySelector('.lens-form');
let orderLensRow = document.querySelector('.order-lens__row');
let info = document.querySelector('.info');
let bonus = document.querySelector('.bonus');

if (orderLensPurpose) {
	if (window.innerWidth < 821) {
		itemLeft.insertBefore(orderLensPurpose, about);
		itemLeft.insertBefore(orderLensArt, about);
		itemLeft.insertBefore(lensForm, about);
		itemLeft.insertBefore(orderLensRow, about);
		itemRight.append(info);
	}

	window.addEventListener("resize", function () {
		if (window.innerWidth < 821) {
			itemLeft.insertBefore(orderLensPurpose, about);
			itemLeft.insertBefore(orderLensArt, about);
			itemLeft.insertBefore(lensForm, about);
			itemLeft.insertBefore(orderLensRow, about);
			itemRight.append(info);
		} else {
			itemLeft.append(info);
			itemRight.insertBefore(lensForm, bonus);
			itemRight.insertBefore(orderLensRow, lensForm);
			orderStock.append(orderLensArt);
			orderStock.append(orderLensPurpose);
			orderStock.append(orderLensRow);
		}
	});
}

let askPopup = document.querySelector('.ask-popup');
let closeAsk = document.querySelector('.close-ask');
let messagePopup = document.querySelector('.message-popup');
let orderStockBtn = document.querySelector('.order-stock__btn');

if (messagePopup && orderStockBtn) {
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

new Swiper('.similar-slider', {
	speed: 600,
	slidesPerView: 'auto',
	spaceBetween: 18,
	grabCursor: true,
	breakpoints: {
		1401: {
			slidesPerView: 6,
			spaceBetween: 18,
		}
	}
});

let infoHead = document.querySelectorAll('.info-head');
let infoBody = document.querySelectorAll('.info-body');

for (let i = 0; i < infoHead.length; i++) {
	infoHead[i].onclick = function (e) {
		for (let j = 0; j < infoHead.length; j++) {
			if (infoBody[j] != this.nextElementSibling) {
				infoBody[j].classList.remove('opened');
				infoBody[j].style.maxHeight = 0;
				infoHead[j].classList.remove('opened');
			}
		}
		if (this.nextElementSibling.classList.contains('opened')) {
			this.nextElementSibling.classList.remove('opened');
			this.nextElementSibling.style.maxHeight = 0;
			infoHead[i].classList.remove('opened');
		} else {
			this.nextElementSibling.classList.add('opened');
			this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
			infoHead[i].classList.add('opened');
		}
	}
}

let orderLensBtn = document.querySelector('.order-lens__btn');
let lensCalcForm = document.querySelector('.lens-calc');
let selectsRequire = document.querySelectorAll('.required-select');
let errorPopup = document.querySelector('.error-popup');

if (orderLensBtn) {
	$(document).ready(function () {
		let selectsSumo = $('select').SumoSelect({
			placeholder: '',
		});
		for (let i = 0; i < selectsSumo.length; i++) {
			selectsSumo[i].sumo.unSelectAll();
		}
		lensCalcForm.onsubmit = function (e) {
			e.preventDefault();
			let valid = true;
			for (let i = 0; i < selectsRequire.length; i++) {
				if (selectsRequire[i].value == '') {
					valid = false;
				}
			}
			if (valid) {
				orderLensBtn.classList.remove('disabled');
			}
		}
	});
}
if (lensCalcForm) {
	orderLensBtn.onclick = function () {
		if (!orderLensBtn.classList.contains('disabled')) {
			messagePopup.classList.add('show');
		} else {
			lensCalcForm.classList.add('error-form');
			setTimeout(function () {
				lensCalcForm.classList.remove('error-form');
			}, 200);
		}
	}

	messagePopup.onclick = function (e) {
		if (!e.target.closest('.message-popup__body')) {
			messagePopup.classList.remove('show');
		}
	}
	errorPopup.onclick = function (e) {
		if (!e.target.closest('.error-popup__body')) {
			errorPopup.classList.remove('show');
		}
	}
	closeAsk.onclick = function () {
		messagePopup.classList.remove('show');
		errorPopup.classList.remove('show');
	}
}

let lensClueBody = document.querySelector('.lens-clue__body');
let lensClue = document.querySelector('.lens-clue');

if (lensClue) {
	lensClue.addEventListener('mouseenter', e => {
		lensClueBody.classList.add('show');
	});

	lensClue.addEventListener('mouseleave', e => {
		lensClueBody.classList.remove('show');
	});
}





