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
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active',
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
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active',
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
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active',
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
					slidesPerView: 2,
					grid: {
						rows: 2,
						fill: 'column'
					},
					spaceBetween: 20
				},
				1280: {
					slidesPerView: 3,
					grid: {
						rows: 2,
						fill: 'column'
					},
					spaceBetween: 20
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
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active',
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
					slidesPerView: 2
				},
				1280: {
					slidesPerView: 3,
					spaceBetween: 20
				}
			}
		}

		topProductsSliders.push(new Swiper('.top_products_s' + i, options))
	})


	// Mob. menu
	$('.mob_header .mob_menu_btn').click(e => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').addClass('active')
		$('body').addClass('menu_open')
		$('header').addClass('show')
		$('.overlay').fadeIn(300)
	})


	if (is_touch_device()) {
		const subMenus = document.querySelectorAll('header .menu .sub_menu')

		// Submenu on the touch screens
		$('header .menu_item > a.sub_link').addClass('touch_link')

		$('header .menu_item > a.sub_link').click(function (e) {
			const $dropdown = $(this).next()

			if ($dropdown.css('visibility') === 'hidden') {
				e.preventDefault()

				subMenus.forEach(el => el.classList.remove('show'))
				$dropdown.addClass('show')

				BODY.style = 'cursor: pointer;'
			}
		})

		// Close the under. menu when clicking outside of it
		document.addEventListener('click', e => {
			if ($(e.target).closest('.menu').length === 0) {
				subMenus.forEach(el => el.classList.remove('show'))

				BODY.style = 'cursor: default;'
			}
		})
	}


	// Mob. footer
	$('footer .links .title').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})


	// Brands
	initBrandsSliders()
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