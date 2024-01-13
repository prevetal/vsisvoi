WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]


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
			lazy: true,
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
					let direction = '',
						parent = $(swiper.el).closest('.popular_products'),
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
					let direction = '',
						parent = $(swiper.el).closest('.top_products'),
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
	$('.product .favorite_btn, .product_info .favorite_btn').click(function(e) {
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
								cartProducts = document.querySelectorAll('.fancybox__container #cart_modal .products .swiper')

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


	// Custom select
	const selects = document.querySelectorAll('select:not(.skip)')

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


	// Filter
	$('.mob_products_head .filter_btn, .mob_filter_btn').click(function(e) {
		e.preventDefault()

		$('.filter').fadeIn(300)

		$('body').addClass('menu_open')
	})

	$('.filter .close_btn').click(function(e) {
		e.preventDefault()

		$('.filter').fadeOut(200)

		$('body').removeClass('menu_open')
	})


	$('.filter .name').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').next('.data').slideToggle(300, () => $('.filter').trigger('sticky_kit:recalc'))
	})

	$('.filter .spoler_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').closest('.data').find('.hide').slideToggle(300, () => $('.filter').trigger('sticky_kit:recalc'))
	})

	$('.reset_filter_btn').click(function() {
		if($priceRange) {
			$priceRange.reset()
		}

		$('.filter form').get(0).reset()

		$('.filter_selected').html('')
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


	// Product page - sizes
	$('.product_info .sizes .spoler_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')

		$('.product_info .sizes .vals .hide').slideToggle(300)
	})


	// Product page - stock
	$('.stock .timer').each(function () {
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


	// Mini modal
	$('.mini_modal_btn').click(function(e) {
		e.preventDefault()

		let modalId = $(this).data('modal-id')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.mini_modal').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini_modal_btn').removeClass('active')
			$(this).addClass('active')

			$('.mini_modal').removeClass('active')
			$(modalId).addClass('active')

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})

	// Close the popup when clicked due to its behavior
	$(document).click(e => {
		if ($(e.target).closest('.modal_cont').length === 0) {
			$('.mini_modal, .mini_modal_btn').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
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

			if (windowW < 480) document.getElementsByTagName('meta')['viewport'].content = 'width=480, user-scalable=no'
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