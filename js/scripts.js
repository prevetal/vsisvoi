WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]


document.addEventListener('DOMContentLoaded', function () {
	// Main slider on the main page
	const mainSliders = [],
		mainSlider = document.querySelectorAll('.main_slider .swiper')

	mainSlider.forEach(function (el, i) {
		el.classList.add('main_slider_s' + i)

		let options = {
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
			lazy: true,
			autoplay: {
				delay: 4000,
				disableOnInteraction: false
			}
		}

		mainSliders.push(new Swiper('.main_slider_s' + i, options))
	})


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
			lazy: true,
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
			lazy: true,
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
					let parent = $(swiper.el).closest('.popular_products'),
						nextBanner = parent.find('.products_banners > *').eq(swiper.realIndex)

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
			lazy: true,
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
					let parent = $(swiper.el).closest('.top_products'),
						nextBanner = parent.find('.products_banners > *').eq(swiper.realIndex)

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
			lazy: true,
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
					slidesPerView: el.classList.contains('big')  ? 4 : 6,
					spaceBetween: 20
				}
			},
			on: {
				init: swiper => {
					if(swiper.slides.length <= swiper.params.slidesPerView) {
						$(swiper.el).find('.controls').addClass('hide')
					}

					setTimeout(() => {
						$(swiper.el).find('> .swiper-button-next, > .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					swiper.slides.length <= swiper.params.slidesPerView
						? $(swiper.el).find('.controls').addClass('hide')
						: $(swiper.el).find('.controls').removeClass('hide')

					setTimeout(() => {
						$(swiper.el).find('> .swiper-button-next, > .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				}
			}
		}

		productsSliders.push(new Swiper('.products_s' + i, options))
	})


	// Banners blocks
	const bannersSlidersArr = [],
		bannersSliders = document.querySelectorAll('.banners_block .swiper')

	bannersSliders.forEach(function (el, i) {
		el.classList.add('banners_block_s' + i)

		let options = {
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
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
					loop: true,
					spaceBetween: 0,
					slidesPerView: 1
				},
				768: {
					loop: true,
					spaceBetween: 20,
					slidesPerView: 3
				},
				1024: {
					loop: false,
					spaceBetween: 20,
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					if(swiper.slides.length <= swiper.params.slidesPerView) {
						$(swiper.el).find('.controls').addClass('hide')
					}
				},
				resize: swiper => {
					swiper.slides.length <= swiper.params.slidesPerView
						? $(swiper.el).find('.controls').addClass('hide')
						: $(swiper.el).find('.controls').removeClass('hide')
				}
			}
		}

		bannersSlidersArr.push(new Swiper('.banners_block_s' + i, options))
	})


	// Brands - alphabets
	const alphabetsSliders = [],
		alphabets = document.querySelectorAll('.alphabet .swiper')

	alphabets.forEach(function (el, i) {
		el.classList.add('alphabet_s' + i)

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
			spaceBetween: 15,
			slidesPerView: 'auto'
		}

		alphabetsSliders.push(new Swiper('.alphabet_s' + i, options))
	})


	// Mob. menu
	$('header .mob_menu_btn, .mob_menu .close_btn').click(e => {
		e.preventDefault()

		$('body').toggleClass('menu_open')
		$('.mob_menu').toggleClass('show')
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


	// Mob. menu
	$('.mob_menu .menu .item > a.sub_link').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})


	// Mob. footer
	$('footer .links .title').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})


	// Adding product to favorites
	// $('.product .favorite_btn, .product_info .favorite_btn').click(function(e) {
	// 	e.preventDefault()

	// 	clearTimeout(timer)

	// 	let product = $(this).closest('.product')

	// 	$(this).toggleClass('active')

	// 	// Show message
	// 	product.find('.favorite_mes').hide()

	// 	$(this).hasClass('active')
	// 		? product.find('.favorite_mes.added').fadeIn(300)
	// 		: product.find('.favorite_mes.removed').fadeIn(300)

	// 	var timer = setTimeout(() => product.find('.favorite_mes').fadeOut(200), 2000)
	// })


	// Brands
	initBrandsSliders()

	// Reviews
	initReviewsSliders()


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
				}], {
					on: {
						reveal: () => {
							// Cart modal - Products
							const cartProductsSliders = [],
								cartProducts = document.querySelectorAll('.fancybox__container #cart_modal .products .swiper:not(.swiper-initialized)')

							cartProducts.forEach(function (el, i) {
								el.classList.add('cart_products_s' + i)

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
									lazy: true,
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
											slidesPerView: 5,
											spaceBetween: 20
										}
									},
									on: {
										init: swiper => {
											if(swiper.slides.length <= swiper.params.slidesPerView) {
												$(swiper.el).find('.controls').addClass('hide')
											}
										},
										resize: swiper => {
											swiper.slides.length <= swiper.params.slidesPerView
												? $(swiper.el).find('.controls').addClass('hide')
												: $(swiper.el).find('.controls').removeClass('hide')
										}
									}
								}

								cartProductsSliders.push(new Swiper('.cart_products_s' + i, options))
							})
						}
					}
				})
			})
		})
	}


	$('.modal .close_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()
	})


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false,
		},
		Thumbs: {
			autoStart: false,
		}
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


	// Change type password
	$('.form .type_toggle_btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.field')

		$(this).toggleClass('active')

		$(this).hasClass('active')
			? parent.find('.input').attr('type', 'text')
			: parent.find('.input').attr('type', 'password')
	})


	// Custom select - Nice select
	const selects = document.querySelectorAll('select:not(.skip)')

	if (selects) {
		selects.forEach(el => {
			NiceSelect.bind(el, {
				placeholder: el.getAttribute('data-placeholder')
			})

			el.addEventListener('change', () => el.classList.add('selected'))
		})
	}


	// Custom select - Select2
	$.fn.select2.defaults.set('width', '100%')

	$('select.select2').select2({
		allowClear: true,
		language: {
			'noResults': () =>'Нічого не знайдено'
		}
	})


	// World phones
	$('.phone_input').intlTelInput({
		showSelectedDialCode: true
	})


	// Checkout form
	$('.checkout .order_form .form .other_recipient_checkbox').click(function(e) {
		if(e.target.nodeName == 'LABEL') {
			let parent = $(this).closest('.section')

			parent.find('.current_recipient').addClass('hide')
			parent.find('.other_recipient').removeClass('hide')
		}
	})


	$('.checkout .order_form .form .add_btn').click(function(e) {
		e.preventDefault()

		$(this).addClass('hide').next().removeClass('hide')
	})


	$('.checkout .order_form .form .apply_btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.line')

		$(this).hide()

		parent.find('.remove_btn').fadeIn(300)
		parent.find('.status.green').fadeIn(300)
	})

	$('.checkout .order_form .form .remove_btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.line')

		$(this).hide()

		parent.find('.apply_btn').fadeIn(300)
		parent.find('.status').fadeOut(200)
	})


	$('.checkout .delivery_type label').click(function(e) {
		if (e.target.nodeName === 'LABEL') {
			let type = $(this).data('type')

			if (type == 'ukraine') {
				$('.checkout .order_form').hide()
				$('.checkout .order_form.for_ukraine').fadeIn(300)
			}

			if (type == 'world') {
				$('.checkout .order_form').hide()
				$('.checkout .order_form.for_world').fadeIn(300)
			}
		}
	})


	$('.checkout .delivery .checkbox').click(function(e) {
		if (e.target.nodeName === 'LABEL') {
			let info = $(this).data('info'),
				parent = $(this).closest('.delivery')

			$(parent).find('.method_info').hide()
			$(parent).find('.method_info' + info).fadeIn(300)
		}
	})


	$('.checkout .payment .checkbox[data-info]').click(function(e) {
		if (e.target.nodeName === 'LABEL') {
			let info = $(this).data('info'),
				parent = $(this).closest('.payment')

			$(parent).find('.method_info').hide()
			$(parent).find('.method_info' + info).fadeIn(300)
		}
	})


	$('.checkout .order_form .form .pay_for_delivery_checkbox').click(function(e) {
		if(e.target.nodeName == 'LABEL') {
			let parent = $(this).closest('.field')

			parent.find('.delivery_price').toggleClass('hide')
		}
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


	// Filter
	$('.mob_products_head .filter_btn, .mob_filter_btn').click(function(e) {
		e.preventDefault()

		$('body').addClass('filter_open')

		$('.filter .name').removeClass('active')
		$('.filter .data').hide()

		$('.filter').fadeIn(300)
	})

	$('.filter .close_btn').click(function(e) {
		e.preventDefault()

		$('body').removeClass('filter_open')

		$('.filter').fadeOut(200)
	})


	$('.filter .name.spoler, .filter .name .icon.spoler').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').next('.data').slideToggle(300, () => $('.filter').trigger('sticky_kit:recalc'))
	})

	$('.filter .name .icon.spoler').click(function(e) {
		e.preventDefault()

		let name = $(this).closest('.name')

		name.toggleClass('active').next('.data').slideToggle(300, () => $('.filter').trigger('sticky_kit:recalc'))
	})


	$('.filter .spoler_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').closest('.data').find('.hide').slideToggle(300, () => $('.filter').trigger('sticky_kit:recalc'))
	})


	$('.filter .mob_categories_btn, .filter .categories .back_btn').click(function(e) {
		e.preventDefault()

		$('.filter .categories').toggleClass('show')
	})


	$('.filter .sub .checkbox').click(function(e) {
		if (e.target.nodeName === 'LABEL') {
			let category = $(this).closest('.category'),
				sub = $(this).closest('.sub')

			setTimeout(() => {
				sub.find('.checkbox input:checked').length
					? category.find('.name').addClass('default')
					: category.find('.name').removeClass('default')
			})
		}
	})


	$('.filter .reset_filter_btn').click(function() {
		if($priceRange) {
			$priceRange.reset()
		}

		$('.filter form').get(0).reset()
	})


	$priceRange = $('.filter #price_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 10000,
		from: 760,
		to: 6400,
		step: 10,
		onChange: data => {
			$('.filter .price_range input.from').val(data.from.toLocaleString())
			$('.filter .price_range input.to').val(data.to.toLocaleString())
		},
		onUpdate: data => {
			$('.filter .price_range input.from').val(data.from.toLocaleString())
			$('.filter .price_range input.to').val(data.to.toLocaleString())
		}
	}).data('ionRangeSlider')

	$('.filter .price_range .input').keyup(function () {
		$priceRange.update({
			from: parseInt($('.filter .price_range input.from').val().replace(/\s/g, '')),
			to: parseInt($('.filter .price_range input.to').val().replace(/\s/g, ''))
		})
	})


	// Sticky element
	if (window.outerWidth > 1023) {
		let productsHeadHeight = $('.products_head').length ? $('.products_head').outerHeight() : 0,
			offset = $('header').outerHeight() + productsHeadHeight + 8

		$('.filter').stick_in_parent({
			offset_top: offset
		})
	}


	// Spoler in text
	$('.text_block .spoler_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').closest('.text_block').find('.hide').slideToggle(300)
	})


	// Reviews
	$('.reviews .spoler_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').closest('.reviews').find('.list .hide').slideToggle(300)
	})


	// Accordion
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		let item = $(this).closest('.accordion_item'),
			accordion = $(this).closest('.accordion')

		if (item.hasClass('active')) {
			item.removeClass('active').find('.data').slideUp(300)
		} else {
			accordion.find('.accordion_item').removeClass('active')
			accordion.find('.data').slideUp(300)

			item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Product page - images
	if ($('.product_info .images').length) {
		let productThumbs = new Swiper('.product_info .thumbs .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 10,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			slidesPerView: 'auto',
			direction: 'vertical',
			on: {
				activeIndexChange: swiper => {
					swiper.activeIndex
						? $(swiper.el).addClass('pad_top')
						: $(swiper.el).removeClass('pad_top')

					swiper.activeIndex === (swiper.slides.length - $(swiper.el).find('.swiper-slide-fully-visible').length)
						? $(swiper.el).addClass('in_and')
						: $(swiper.el).removeClass('in_and')
				}
			}
		})

		new Swiper('.product_info .big .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 10,
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			thumbs: {
				swiper: productThumbs
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				1280: {
					slidesPerView: 2
				}
			}
		})
	}


	fullViewSlider = new Swiper('.full_view .swiper', {
		loop: false,
		speed: 500,
		roundLengths: true,
		watchSlidesProgress: true,
		slideActiveClass: 'active',
		slideVisibleClass: 'visible',
		spaceBetween: 0,
		lazy: true,
		centeredSlides: true,
		initialSlide: $(this).data('slide-index'),
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		breakpoints: {
			0: {
				slidesPerView: 1
			},
			1024: {
				slidesPerView: 2
			},
			1280: {
				slidesPerView: 2.333
			}
		},
		on: {
			activeIndexChange: swiper => {
				$(swiper.el).find('.swiper-slide').removeClass('zoomed')
				$(swiper.el).find('.swiper-slide img').css('transform', `none`)
			}
		}
	})


	$('.product_info .images .big .image').click(function(e) {
		e.preventDefault()

		if (typeof fullViewSlider != 'undefined') {
			fullViewSlider.slideTo($(this).data('slide-index'))
		}

		$('body').toggleClass('menu_open')

		$('.full_view').toggleClass('show')
	})


	// Product page - data
	if (WW < 1023) {
		$('.product_info .accordion_item').removeClass('active')
		$('.product_info .accordion_item .data').hide()
	}


	// Zoom
	$('body').on('click', '.full_view .swiper-slide.active', function (e) {
		e.preventDefault()

		$(this).toggleClass('zoomed')

		if ($(this).hasClass('zoomed')) {
			let translateY = e.pageY / $(this).outerHeight() * -100 / 2 + 25

			$(this).find('img').css('transform', `scale3d(2, 2, 2) translateY(${translateY}%)`)
		} else {
			$(this).find('img').css('transform', `none`)
		}
	})


	// Mouse move
	$('body').on('mousemove touchmove', '.full_view .swiper-slide.zoomed', function (e) {
		let translateY = 0,
			translateX = 0

		if (!e.touches) {
			// Mouse move
			translateY = e.pageY / $(this).outerHeight() * -100 / 2 + 25
		} else {
			// Touch move
			translateY = e.touches[0].pageY / $(this).outerHeight() * -100 / 2 + 25
			translateX = e.touches[0].pageX / $(this).outerWidth() * 100 / 2 - 25
		}

		$(this).find('img').css('transform', `scale3d(2, 2, 2) translate(${translateX}%, ${translateY}%)`)
	})


	$('.full_view .close_btn').click(function(e) {
		e.preventDefault()

		$('.product_info .full_view').toggleClass('show')

		$('body').toggleClass('menu_open')
	})


	// Product page - sizes
	$('.product_info .sizes .spoler_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')

		$('.product_info .sizes .vals .hide').slideToggle(300)
	})


	// Product page - stock
	$('.timer').each(function () {
		$(this).countdown($(this).data('date'), function (event) {
			$(this).find('.days span').text(event.strftime('%D'))
			$(this).find('.hours').text(event.strftime('%H'))
			$(this).find('.minutes').text(event.strftime('%M'))
			$(this).find('.seconds').text(event.strftime('%S'))
		})
	})


	// Smooth scrolling to anchor
	const scrollBtns = document.querySelectorAll('.scroll_btn')

	if (scrollBtns) {
		scrollBtns.forEach(element => {
			element.addEventListener('click', e => {
				e.preventDefault()

				let anchor = element.getAttribute('data-anchor')

				document.getElementById(anchor).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				}, 1000)
			})
		})
	}


	// Availability notification
	$('#noti_availability_modal .form').submit(function(e) {
		e.preventDefault()

		// Close previous modal
		Fancybox.close()

		// Show success modal
		Fancybox.show([{
			src: '#noti_availability_success_modal',
			type: 'inline'
		}])
	})


	// Side modals
	$('.side_modal_btn').click(function(e) {
		e.preventDefault()

		let modal = $(this).data('modal')

		$('#' + modal).addClass('show')
		$('.overlay').fadeIn(300)

		$('body').toggleClass('menu_open')
	})

	$('.overlay, .side_modal .close_btn').click(function(e) {
		e.preventDefault()

		$('.side_modal').removeClass('show')
		$('.overlay').fadeOut(200)

		$('body').toggleClass('menu_open')
	})


	// Brands - alphabet types
	$('.brands_page .head .type .btn').click(function(e) {
		e.preventDefault()

		if(!$(this).hasClass('active')) {
			$('.brands_page .head .type .btn').removeClass('active')
			$('.brands_page .head .alphabet .swiper').hide()

			$(this).addClass('active')
			$('.brands_page .head .alphabet .swiper' + $(this).data('type')).fadeIn(200)
		}
	})


	// Size table
	const scrollableDiv = document.querySelector('.side_modal .table_wrap')

	if(scrollableDiv) {
		let isMouseDown = false,
			startX, scrollLeft

		scrollableDiv.addEventListener('mousedown', (e) => {
			isMouseDown = true
			startX = e.pageX - scrollableDiv.offsetLeft
			scrollLeft = scrollableDiv.scrollLeft
		})

		scrollableDiv.addEventListener('mouseup', () => isMouseDown = false)
		scrollableDiv.addEventListener('mouseleave', () => isMouseDown = false )

		scrollableDiv.addEventListener('mousemove', (e) => {
			if (!isMouseDown) return

			let x = e.pageX - scrollableDiv.offsetLeft,
				walkX = (x - startX) * 1.5

			scrollableDiv.scrollLeft = scrollLeft - walkX
		})

		scrollableDiv.addEventListener('wheel', (e) => {
			e.preventDefault()

			scrollableDiv.scrollLeft += e.deltaY
		})
	}


	// LK - Profile
	$('.lk_profile .about_me .head .spoler_btn').click(function(e) {
		$(this).toggleClass('active')

		$('.lk_profile .about_me .hide').slideToggle(300)
	})


	// LK - Profile - Kids
	$('.lk_profile .form .children .have_boys').click(function(e) {
		if(e.target.nodeName === 'LABEL') {
			$(this).closest('.boys').find('.birthday').slideToggle(300)
		}
	})

	$('.lk_profile .form .children .have_girls').click(function(e) {
		if(e.target.nodeName === 'LABEL') {
			$(this).closest('.girls').find('.birthday').slideToggle(300)
		}
	})


	// LK - Profile - Kids - Add
	$('.lk_profile .form .children .add_btn').click(function(e) {
		e.preventDefault()

		// Get template
		let template = $(this).closest('.birthday').next('.template').html()

		$(this).before(template).promise().done(() => {
			// Init selects
			let selects = $(this).closest('.birthday').find('> .need_init select')

			selects.each(i => {
				selects[i].classList.remove('skip')

				NiceSelect.bind(selects[i], {
					placeholder: selects[i].getAttribute('data-placeholder')
				})
			})

			$(this).closest('.birthday').find('> .need_init').removeClass('need_init')
		})
	})


	// LK - Profile - Kids - Delete
	$('body').on('click', '.lk_profile .form .children .birthday .delete_btn', function (e) {
		e.preventDefault()

		$(this).closest('.fields').remove()
	})


	// LK - Success message
	$('.lk_info .form').submit(function (e) {
		e.preventDefault()

		// Show
		$('.lk_info .success_message').fadeIn(300)

		// Hide after 3s
		setTimeout(() => $('.lk_info .success_message').fadeOut(200), 3000)
	})


	// Mini modal
	$('.mini_modal_btn').click(function(e) {
		e.preventDefault()

		let modalId = $(this).data('modal-id')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.mini_modal').removeClass('active')

			// Search modal
			if (modalId == '#search_modal') {
				$('.search_tips').fadeOut(200)

				$('body').removeClass('menu_open')
			}

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini_modal_btn').removeClass('active')
			$(this).addClass('active')

			$('.mini_modal').removeClass('active')
			$(modalId).addClass('active')

			// Search modal
			if (modalId == '#search_modal') {
				$('.search_tips').fadeIn(300)

				$('body').addClass('menu_open')

				setTimeout(() => $('header .search .input').focus(), 100)
			}

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})

	// Close the popup when clicked due to its behavior
	$(document).click(e => {
		if ($(e.target).closest('.modal_cont').length === 0) {
			if($(e.target).closest('.search_tips').length === 0) {
				$('.search_tips').fadeOut(200)

				if ($('header .search .btn').hasClass('active')) {
					$('body').removeClass('menu_open')
				}

				$('.mini_modal, .mini_modal_btn').removeClass('active')

				if (is_touch_device()) $('body').css('cursor', 'default')
			}
		}
	})


	// LK - Address - Add
	$('.lk_address .add_btn').click(function(e) {
		e.preventDefault()

		$(this).hide()
		$('.lk_address .add_form').fadeIn(300)
	})

	$('.lk_address .add_form .cancel_btn').click(function(e) {
		e.preventDefault()

		$('.lk_address .add_form').hide()
		$('.lk_address .add_btn').fadeIn(300)
	})


	$('.lk_address .add_form .input[name=city]').keyup(function() {
		let _self = $(this),
			parent = $(this).closest('.line')

		setTimeout(() => {
			_self.val().length
				? parent.next('.hide').fadeIn(300)
				: parent.next('.hide').fadeOut(200)
		})
	})

	$('.lk_address .add_form select[name=delivery_method]').change(function() {
		$('.lk_address .add_form .method_info').hide()
		$('.lk_address .add_form .method_info' + $(this).val()).fadeIn(300)
	})


	// LK - Address - Edit
	$('.lk_address .address .edit_btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.address')

		parent.find('.data').hide()
		parent.find('.form').fadeIn(300)
	})

	$('.lk_address .address .form .cancel_btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.address')

		parent.find('.form').hide()
		parent.find('.data').fadeIn(300)
	})


	// LK - Address - Delete
	$('.lk_address .address .delete_btn').click(function(e) {
		e.preventDefault()

		$(this).closest('.address').remove()
	})


	// LK - Orders
	$('.lk_orders .order .head').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').next('.data').slideToggle(300)
	})


	// LK - Subscribe
	$('.lk_subscribe .form .gender label').click(function(e) {
		if (e.target.nodeName == 'LABEL') {
			let parent = $(this).closest('.lk_subscribe'),
				filter = $(this).data('filter')

			if (filter == '*') {
				parent.find('.brands_page .list .row > *').fadeIn(200)
			} else {
				parent.find('.brands_page .list .row > *').hide()
				parent.find('.brands_page .list .row > *' + filter).fadeIn(200)
			}
		}
	})


	$('.lk_subscribe .toggle label').click(function(e) {
		if (e.target.nodeName == 'LABEL') {
			let parent = $(this).closest('.lk_subscribe')

			parent.find('.hide').slideToggle(300)
		}
	})


	$('.lk_subscribe .form .toggle_all').click(function(e) {
		if (e.target.nodeName == 'LABEL') {
			$(this).toggleClass('active')

			$(this).hasClass('active')
				? $('.lk_subscribe .brands_page input').prop('checked', true)
				: $('.lk_subscribe .brands_page input').prop('checked', false)
		}
	})


	$('.lk_subscribe .form .clear_btn').click(function(e) {
		e.preventDefault()

		$('.lk_subscribe .form .btns .toggle_all').removeClass('active')
		$('.lk_subscribe .form .btns .toggle_all input').prop('checked', false).removeAttr('checked')

		$('.lk_subscribe .brands_page input').prop('checked', false)
	})


	// Search
	$('header .search .input').keyup(function() {
		let _self = $(this)

		setTimeout(() => {
			_self.val().length
				? $('.search_tips .rec_products .more').fadeIn(300)
				: $('.search_tips .rec_products .more').fadeOut(200)
		})
	})


	$('.search_tips .close_btn').click(function(e) {
		e.preventDefault()

		$('.search_tips').fadeOut(200)

		$('body').removeClass('menu_open')
	})


	// Register
	$('.register .form .add_btn').click(function(e) {
		e.preventDefault()

		$(this).hide()
		$('.register .form .hide').fadeIn(300)
	})


	$('.register .form').submit(function(e) {
		e.preventDefault()

		// Show success modal
		Fancybox.show([{
			src: '#register_success_modal',
			type: 'inline'
		}])
	})


	// Feedback form
	$('.feedback .form').submit(function(e) {
		e.preventDefault()

		$('.feedback .success').css('display', 'flex')
	})


	// FAQ - Add question
	$('.FAQ .add_form').submit(function(e) {
		e.preventDefault()

		$('.FAQ .add_form .success').css('display', 'flex')
	})


	// Thank you
	$('.thank_you .data .form').submit(function(e) {
		e.preventDefault()

		let rating = new FormData(this).get('rating'),
			message = ''

		if (rating < 4) {
			message = '.message_low'
		}

		if (rating < 9 && rating > 3) {
			message = '.message_medium'
		}

		if (rating > 8) {
			message = '.message_high'
		}

		$('.thank_you .data').hide()
		$(message).fadeIn(300)
	})


	// Top banner
	$('.top_banner .close_btn').click(e => {
		$('.top_banner').slideUp(200)
	})


	// Brand info
	$('.brand_info .spoler_btn').click(function(e) {

		$(this).toggleClass('active')
		$('.brand_info .text_block').toggleClass('show')
	})


	// Load products
	// $('.pagination .load_more_btn').click(function(e) {
	// 	e.preventDefault()

	// 	// Remember position when clicked
	// 	let offsetTop = $(window).scrollTop()

	// 	// Request and insert new products in html
	// 	// ...

	// 	// Return the user to the right place
	// 	setTimeout(() => {
	// 		$('html, body').animate({
	// 			scrollTop: offsetTop
	// 		}, 500)
	// 	})
	// })


	// Create new password
	$('.create_new_password .form').submit(function(e) {
		e.preventDefault()

		// Show success modal
		Fancybox.show([{
			src: '#create_new_password_success_modal',
			type: 'inline'
		}])
	})


	// Packaging modal
	$('#packaging_modal .mob_view .size select').change(function() {
		$('#packaging_modal .mob_view .item').removeClass('show')
		$('#packaging_modal .mob_view .item.size' + $(this).val()).addClass('show')
	})


	// Tabs
	$('body').on('click', '.tabs .btn', function(e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			let parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				activeTabContent = $(activeTab),
				level = $(this).data('level')

			parent.find('.tabs:first .btn').removeClass('active')
			parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			activeTabContent.addClass('active')
		}
	})


	// Confirm phone
	if ($('#confirm_phone_modal').length) {
		Fancybox.show([{
			src: '#confirm_phone_modal',
			type: 'inline'
		}], {
			on: {
				reveal: () => $('#confirm_phone_modal .input:first').focus()
			}
		})


		// Confirm phone - timer
		startResendTimer()


		// Confirm phone - resend
		$('.resend .btn').click(function(e) {
			e.preventDefault()

			// Send SMS

			// Show message
			$('.resend .message').fadeIn(200)

			// Start timer
			startResendTimer()

			// Hide messahe after 3 sec
			setTimeout(() => $('.resend .message').fadeOut(100), 3000)
		})
	}
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth


		// Brands
		initBrandsSliders()

		// Reviews
		initReviewsSliders()


		// Mob. version
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})



// Table sticky column
function tableScrollTracking(el) {
	el.scrollLeft > 0
		? $(el).find('table').addClass('stuck')
		: $(el).find('table').removeClass('stuck')
}



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



// Reviews
reviewsSliders = []

function initReviewsSliders() {
	if ($(window).width() < 1024) {
		if ($('.reviews .list').length) {
			$('.reviews .list > *').addClass('swiper-slide')
			$('.reviews .list').addClass('swiper-wrapper').removeClass('list')

			$('.reviews .swiper').each(function (i) {
				$(this).addClass('reviews_s' + i)

				let options = {
					loop: true,
					speed: 500,
					watchSlidesProgress: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					slidesPerView: 1,
					spaceBetween: 20,
					autoHeight: true,
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					pagination: {
						el: '.swiper-pagination',
						dynamicBullets: true,
						clickable: true,
						renderBullet: (index, className) => {
							return '<div class="' + className + '"><span>' + (index + 1) + '</span></div>'
						}
					},
				}

				reviewsSliders.push(new Swiper('.reviews_s' + i, options))
			})
		}
	} else {
		reviewsSliders.forEach(element => element.destroy(true, true))

		reviewsSliders = []

		$('.reviews .swiper-wrapper').addClass('list').removeClass('swiper-wrapper')
		$('.reviews .list > *').removeClass('swiper-slide')
	}
}



// Start resend timer
function startResendTimer() {
	$('.resend .btn').attr('disabled', true)
	$('.resend_timer').show()

	let now = new Date()

	$('.resend_timer').countdown(now.setSeconds(now.getSeconds() + 59), event => {
		$('.resend_timer span').text(event.strftime('%S'))
	}).on('finish.countdown', () => {
		// End of countdown
		$('.resend .btn').removeAttr('disabled')
		$('.resend_timer').hide()
	})
}



// Move focus
function moveFocus(el) {
	if ($(el).val().length >= 1) {
		$(el).closest('.field').next().find('input').focus()
	}
}


// Move back
function moveBack(el, event) {
	if (event.key === 'Backspace' || event.keyCode === 8) {
		setTimeout(() => {
			if ($(el).val().length === 0) {
				$(el).closest('.field').prev().find('input').select()
			}
		})
	}
}