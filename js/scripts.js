WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]
OVERLAY = document.querySelector('.overlay')


document.addEventListener('DOMContentLoaded', function () {
	// Main slider on the main page
	let mainSlider = document.querySelector('.main_slider .swiper')

	if (mainSlider) {
		new Swiper('.main_slider .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				dynamicBullets: true,
				clickable: true,
				renderBullet: (index, className) => {
					return '<div class="' + className + '"><span>' + (index + 1) + '</span></div>'
				}
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			autoplay: {
				delay: 4000,
				disableOnInteraction: false
			}
		})
	}


	// Categories sliders
	const categoriesSlidersArr = [],
		categoriesSliders = document.querySelectorAll('.categories_slider .swiper')

	categoriesSliders.forEach(function (el, i) {
		el.classList.add('categories_slider_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			pagination: {
				el: '.swiper-pagination',
				dynamicBullets: true,
				clickable: true,
				renderBullet: (index, className) => {
					return '<div class="' + className + '"><span>' + (index + 1) + '</span></div>'
				}
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 'auto'
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				1024: {
					spaceBetween: 20,
					slidesPerView: 4
				}
			}
		}

		categoriesSlidersArr.push(new Swiper('.categories_slider_s' + i, options))
	})


	// Popular products
	const popularProductsSliders = [],
		popularProducts = document.querySelectorAll('.popular_products .swiper')

	popularProducts.forEach(function (el, i) {
		el.classList.add('popular_products_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			pagination: {
				el: '.swiper-pagination',
				dynamicBullets: true,
				clickable: true,
				renderBullet: (index, className) => {
					return '<div class="' + className + '"><span>' + (index + 1) + '</span></div>'
				}
			},
			autoplay: {
				delay: 6000,
				disableOnInteraction: false
			},
			slidesPerView: 1,
			spaceBetween: 20,
			on: {
				activeIndexChange: swiper => {
					let direction = '',
						parent = $(swiper.$el).closest('.popular_products'),
						nextBanner

					swiper.activeIndex > swiper.previousIndex
						? direction = 'right'
						: direction = 'left'


					// Change banner
					if(direction == 'right') {
						nextBanner = parent.find('.products_banners > *.active').next()

						if(!nextBanner.length) {
							nextBanner = parent.find('.products_banners  > *:first-child')
						}
					}

					if(direction == 'left') {
						nextBanner = parent.find('.products_banners > *.active').prev()

						if(!nextBanner.length) {
							nextBanner = parent.find('.products_banners  > *:last-child')
						}
					}

					parent.find('.products_banners > *').removeClass('active').hide()
					nextBanner.addClass('active').fadeIn(300)
				}
			}
		}

		popularProductsSliders.push(new Swiper('.popular_products_s' + i, options))
	})


	// Top products
	const topProductsSliders = [],
		topProducts = document.querySelectorAll('.top_products .swiper')

	topProducts.forEach(function (el, i) {
		el.classList.add('top_products_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			pagination: {
				el: '.swiper-pagination',
				dynamicBullets: true,
				clickable: true,
				renderBullet: (index, className) => {
					return '<div class="' + className + '"><span>' + (index + 1) + '</span></div>'
				}
			},
			autoplay: {
				delay: 6000,
				disableOnInteraction: false
			},
			slidesPerView: 1,
			spaceBetween: 20,
			on: {
				activeIndexChange: swiper => {
					let direction = '',
						parent = $(swiper.$el).closest('.top_products'),
						nextBanner

					swiper.activeIndex > swiper.previousIndex
						? direction = 'right'
						: direction = 'left'


					// Change banner
					if(direction == 'right') {
						nextBanner = parent.find('.products_banners > *.active').next()

						if(!nextBanner.length) {
							nextBanner = parent.find('.products_banners  > *:first-child')
						}
					}

					if(direction == 'left') {
						nextBanner = parent.find('.products_banners > *.active').prev()

						if(!nextBanner.length) {
							nextBanner = parent.find('.products_banners  > *:last-child')
						}
					}

					parent.find('.products_banners > *').removeClass('active').hide()
					nextBanner.addClass('active').fadeIn(300)
				}
			}
		}

		topProductsSliders.push(new Swiper('.top_products_s' + i, options))
	})


	// Products
	const productsSliders = [],
		products = document.querySelectorAll('.products .cont > .swiper')

	products.forEach(function (el, i) {
		el.classList.add('products_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			pagination: {
				el: '.swiper-pagination',
				dynamicBullets: true,
				clickable: true,
				renderBullet: (index, className) => {
					return '<div class="' + className + '"><span>' + (index + 1) + '</span></div>'
				}
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 'auto'
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				1024: {
					spaceBetween: 20,
					slidesPerView: 4
				},
				1280: {
					slidesPerView: 6,
					spaceBetween: 20
				}
			},
			on: {
				init: swiper => {
					if(swiper.slides.length <= swiper.params.slidesPerView) {
						$(swiper.$el).find('.controls').addClass('hide')
					}
				},
				resize: swiper => {
					swiper.slides.length <= swiper.params.slidesPerView
						? $(swiper.$el).find('.controls').addClass('hide')
						: $(swiper.$el).find('.controls').removeClass('hide')
				}
			}
		}

		productsSliders.push(new Swiper('.products_s' + i, options))
	})


	// Mob. menu
	$('header .mob_menu_btn').click(e => {
		e.preventDefault()

		// $('header .mob_menu_btn').addClass('active')
		// $('body').addClass('menu_open')
		// $('.mob_menu').addClass('show')
	})


	if (is_touch_device()) {
		const subMenus = $('header .categories .item .sub')

		// Submenu on the touch screens
		$('header .categories .item > a.sub_link').addClass('touch_link')

		$('header .categories .item > a.sub_link').click(function (e) {
			let $dropdown = $(this).next()

			if ($dropdown.css('visibility') === 'hidden') {
				e.preventDefault()

				subMenus.removeClass('show')
				$dropdown.addClass('show')

				BODY.style = 'cursor: pointer;'
			}
		})

		// Submenu on the touch screens - level2
		$('header .categories .sub .links a.sub_link').click(function (e) {
			e.preventDefault()

			let sub = $(this).data('sub'),
				parent = $(this).closest('.sub'),
				subMenusLevel2 = parent.find('.sub_level2')

			subMenusLevel2.removeClass('show')
			parent.find(sub).addClass('show')
		})

		// Close the under. menu when clicking outside of it
		document.addEventListener('click', e => {
			if ($(e.target).closest('.categories').length === 0) {
				subMenus.removeClass('show')

				BODY.style = 'cursor: default;'
			}
		})
	}


	// Mob. footer
	$('footer .links .title').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})


	// Adding product to favorites
	$('.product .favorite_btn').click(function(e) {
		e.preventDefault()

		clearTimeout(timer)

		let product = $(this).closest('.product')

		$(this).toggleClass('active')

		// Show message
		product.find('.favorite_mes').hide()

		$(this).hasClass('active')
			? product.find('.favorite_mes.added').fadeIn(300)
			: product.find('.favorite_mes.removed').fadeIn(300)

		var timer = setTimeout(() => product.find('.favorite_mes').fadeOut(200), 2000)
	})


	// Subscribe
	$('.subscribe .form').submit(function(e) {
		e.preventDefault()

		// Show success modal
		Fancybox.show([{
			src: '#subscribe_success_modal',
			type: 'inline'
		}])

		// Show error modal
		// Fancybox.show([{
		// 	src: '#subscribe_error_modal',
		// 	type: 'inline'
		// }])
	})


	// Brands
	initBrandsSliders()


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: 'Закрити',
		NEXT: 'Наступний',
		PREV: 'Попередній',
		MODAL: 'Ви можете закрити це модальне вікно натиснувши клавішу ESC'
	}

	Fancybox.defaults.template = {
		closeButton: '<svg><use xlink:href="images/sprite.svg#ic_close"></use></svg>',
		spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
		main: null
	}


	// Modals
	const modalBtns = document.querySelectorAll('.modal_btn')

	if (modalBtns) {
		modalBtns.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				Fancybox.close()

				Fancybox.show([{
					src: document.getElementById(el.getAttribute('data-modal')),
					type: 'inline'
				}])
			})
		})
	}


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false,
		},
		Thumbs: {
			autoStart: false,
		}
	})


	// Product amount
	$('body').on('click', '.amount .minus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			minimum = parseFloat($input.data('minimum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal > minimum) $input.val(inputVal - step + unit)
	})

	$('body').on('click', '.amount .plus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			maximum = parseFloat($input.data('maximum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal < maximum) $input.val(inputVal + step + unit)
	})

	$('.amount .input').keydown(function () {
		const _self = $(this),
			maximum = parseInt(_self.data('maximum'))

		setTimeout(() => {
			if (_self.val() == '' || _self.val() == 0) _self.val(parseInt(_self.data('minimum')))
			if (_self.val() > maximum) _self.val(maximum)
		})
	})


	// Mob. cart
	$('.checkout .mob_head .spoler_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')

		if($('.checkout .orders_cart_info').length) {
			$('.checkout .orders_cart_info').slideToggle(300)
		} else {
			$('.checkout .cart_info').slideToggle(300)
		}
	})


	// Phone mask
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{38} (000) 000 00 00',
				lazy: true
			})
		})
	}


	// Custom select
	const selects = document.querySelectorAll('select')

	if (selects) {
		selects.forEach(el => NiceSelect.bind(el, {
			placeholder: el.getAttribute('data-placeholder')
		}))
	}


	// Checkout form
	$('.checkout .order_form .form .other_recipient_checkbox').click(function(e) {
		console.log(e)
		if(e.currentTarget.nodeName == 'LABEL') {
			let parent = $(this).closest('.section')

			parent.find('.current_recipient').addClass('hide')
			parent.find('.other_recipient').removeClass('hide')
		}
	})


	$('.checkout .order_form .form .add_btn').click(function(e) {
		e.preventDefault()

		$(this).addClass('hide').next().removeClass('hide')
	})


	// Menu
	$('header .categories .sub .main_links .links a').mouseover(function() {
		let sub = $(this).data('sub'),
			parent = $(this).closest('.sub')

		parent.find('.main_links .links a').removeClass('active')
		$(this).addClass('active')

		parent.find('.sub_level2').removeClass('show')
		parent.find(sub).addClass('show')
	})
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth


		// Brands
		initBrandsSliders()


		// Mob. version
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 480) document.getElementsByTagName('meta')['viewport'].content = 'width=480, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})



// Brands
brandsSliders = []

function initBrandsSliders() {
	if ($(window).width() < 768) {
		if ($('.brands .row').length) {
			$('.brands .row > *').addClass('swiper-slide')
			$('.brands .row').addClass('swiper-wrapper').removeClass('row')

			$('.brands .swiper').each(function (i) {
				$(this).addClass('brands_s' + i)

				let options = {
					loop: true,
					speed: 500,
					watchSlidesProgress: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					slidesPerView: 'auto',
					spaceBetween: 20
				}

				brandsSliders.push(new Swiper('.brands_s' + i, options))
			})
		}
	} else {
		brandsSliders.forEach(element => element.destroy(true, true))

		brandsSliders = []

		$('.brands .swiper-wrapper').addClass('row').removeClass('swiper-wrapper')
		$('.brands .row > *').removeClass('swiper-slide')
	}
}