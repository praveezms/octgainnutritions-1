(function($) {
    "use strict";
  
    const $documentOn = $(document);
    const $windowOn = $(window);
  
    $documentOn.ready( function() {
  
      /* ================================
       Mobile Menu Js Start
    ================================ */
    
      $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "1199",
        meanExpand: ['<i class="far fa-plus"></i>'],
    });

       $('#mobile-menus').meanmenu({
        meanMenuContainer: '.mobile-menus',
        meanScreenWidth: "19920",
        meanExpand: ['<i class="far fa-plus"></i>'],
    });

    // মেইন লিঙ্কে ক্লিক করলে ড্রপডাউন ওপেন করার কোড
     $documentOn.on("click", ".mean-expand", function () {
        let icon = $(this).find("i");

        if (icon.hasClass("fa-plus")) {
            icon.removeClass("fa-plus").addClass("fa-minus"); 
        } else {
            icon.removeClass("fa-minus").addClass("fa-plus"); 
        }
    });
    
    $(document).on("click", ".mean-nav li > a", function (e) {
        let expandBtn = $(this).siblings(".mean-expand");
        
        if (expandBtn.length > 0 && $(this).attr('href') === '#') {
            e.preventDefault(); 
            expandBtn.trigger("click"); 
        }
    });

    
    /*----------------------------------------------
        # Background Color
        ----------------------------------------------*/
        $("[data-bg-color]").each(function () {
            $(this).css("background-color", $(this).attr("data-bg-color"));
        });

        /*----------------------------------------------
        # Background Image
        ----------------------------------------------*/
        $("[data-background]").each(function () {
            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
        });

        /*----------------------------------------------
        # Width
        ----------------------------------------------*/
        $("[data-width]").each(function () {
            $(this).css("width", $(this).attr("data-width"));
        });

        /*----------------------------------------------
        # Text Color
        ----------------------------------------------*/
        $("[data-text-color]").each(function () {
            $(this).css("color", $(this).attr("data-text-color"));
        });
        

    /* ================================
        Sidebar Toggle & Sticky Item Logic
        ================================ */

        // Open offcanvas
        $(".sidebar__toggle").on("click", function () {
        $(".offcanvas__info").addClass("info-open");
        $(".offcanvas__overlay").addClass("overlay-open");

        // Hide sticky item
        $(".sidebar-sticky-item").fadeOut().removeClass("active");
        });

        // Close offcanvas
        $(".offcanvas__close, .offcanvas__overlay").on("click", function () {
        $(".offcanvas__info").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");

        // Show sticky item
        $(".sidebar-sticky-item").fadeIn().addClass("active");
        });

        /* ================================
        Body Overlay Js Start
        ================================ */

        $(".body-overlay").on("click", function () {
        $(".offcanvas__area").removeClass("offcanvas-opened");
        $(".df-search-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");

        // Show sticky item when overlay clicked
        $(".sidebar-sticky-item").fadeIn().addClass("active");
        });

        /* ================================
        Offcanvas Link Click (Optional)
        ================================ */

        $(".offcanvas a").on("click", function () {
        $(".sidebar-sticky-item").fadeIn().addClass("active");
    });

    
      /* ================================
       Sticky Header Js Start
    ================================ */

       $windowOn.on("scroll", function () {
        if ($(this).scrollTop() > 250) {
          $("#header-sticky").addClass("sticky");
        } else {
          $("#header-sticky").removeClass("sticky");
        }
      });      
      
       /* ================================
       Video & Image Popup Js Start
    ================================ */

      $(".img-popup").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });

      $(".video-popup").magnificPopup({
        type: "iframe",
        callbacks: {},
      });
  
      /* ================================
       Counterup Js Start
    ================================ */

      $(".count").counterUp({
        delay: 15,
        time: 4000,
      });
  
      /* ================================
       Wow Animation Js Start
    ================================ */

      new WOW().init();
  
      /* ================================
       Nice Select Js Start
    ================================ */

    if ($('.single-select').length) {
        $('.single-select').niceSelect();
    }

      /* ================================
       Parallaxie Js Start
    ================================ */

      if ($('.parallaxie').length && $(window).width() > 991) {
          if ($(window).width() > 768) {
              $('.parallaxie').parallaxie({
                  speed: 0.55,
                  offset: 0,
              });
          }
      }

      /* ================================
      Hover Active Js Start
    ================================ */

    $(".service-list-items-2").hover(
		// Function to run when the mouse enters the element
		function () {
			// Remove the "active" class from all elements
			$(".service-list-items-2").removeClass("active");
			// Add the "active" class to the currently hovered element
			$(this).addClass("active");
		}
	);


    /* ================================
      Custom Accordion Js Start
    ================================ */

    if ($('.accordion-box').length) {
        $(".accordion-box").on('click', '.acc-btn', function () {
            var outerBox = $(this).closest('.accordion-box');
            var target = $(this).closest('.accordion');
            var accBtn = $(this);
            var accContent = accBtn.next('.acc-content');

            if (target.hasClass('active-block')) {
                // Already open, so close it
                accBtn.removeClass('active');
                target.removeClass('active-block');
                accContent.slideUp(300);
            } else {
                // Close all others
                outerBox.find('.accordion').removeClass('active-block');
                outerBox.find('.acc-btn').removeClass('active');
                outerBox.find('.acc-content').slideUp(300);

                // Open clicked one
                accBtn.addClass('active');
                target.addClass('active-block');
                accContent.slideDown(300);
            }
        });
    }

     /* ================================
      Brand Slider Js Start
    ================================ */

   if ($('.brand-slider').length > 0) {
    const brandSlider = new Swiper(".brand-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".array-next",
            prevEl: ".array-prev",
        },
        breakpoints: {
            1399: {
                slidesPerView: 6,
            },
            1199: {
                slidesPerView: 5,
            },
            991: {
                slidesPerView: 4,
            },
            767: {
                slidesPerView: 3,
            },
            575: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
   }

    /* ================================
      Testimonial Slider Js Start
    ================================ */

   if ($('.testimonial-slider').length > 0) {

    const testimonialSlider = new Swiper(".testimonial-slider", {
        spaceBetween: 30,
        speed: 1200,
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: ".array-next",
            prevEl: ".array-prev",
        },

        on: {
            slideChangeTransitionStart: function () {

                $(".testimonial-content").css({
                    opacity: "0",
                    transform: "translateY(40px)"
                });

            },

            slideChangeTransitionEnd: function () {

                $(".swiper-slide-active .testimonial-content").css({
                    opacity: "1",
                    transform: "translateY(0)"
                });

            }
        }

    });

    }

    if ($('.testimonial-slider-2').length > 0) {
    const testimonialSlider2 = new Swiper(".testimonial-slider-2", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".array-next",
            prevEl: ".array-prev",
        },
        breakpoints: {
            1199: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
    }

     if ($('.testimonial-slider-3').length > 0) {
    const testimonialSlider3 = new Swiper(".testimonial-slider-3", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".array-next",
            prevEl: ".array-prev",
        },
        breakpoints: {
            1199: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
    }

    /* ================================
      Project Slider Js Start
    ================================ */

    if ($('.project-slider').length > 0) {
    const projectSlider = new Swiper(".project-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".dot",
            clickable: true,
        },
        breakpoints: {
            1199: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
   }

   /* ================================
      Service Slider Js Start
    ================================ */

    if ($('.service-slider-5').length > 0) {
    const ServiceSlider5 = new Swiper(".service-slider-5", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".dot5",
            clickable: true,
        },
        breakpoints: {
            1199: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
   }

   /* ================================
      Testimonial Slider Js Start
    ================================ */

    if ($('.testimonial-slider-5').length > 0) {
    const TestimonialSlider5 = new Swiper(".testimonial-slider-5", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".array-next",
            prevEl: ".array-prev",
        },
        breakpoints: {
            1399: {
                slidesPerView: 2,
            },
            1199: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
   }


   /* ================================
      Global Service Box Js Start
    ================================ */

    if (document.querySelectorAll(".service-list-items-2").length) {
    const serviceListItems2 = document.querySelectorAll(".service-list-items-2");

    serviceListItems2.forEach((box) => {
        const hoverImg = box.querySelector(".hover-image");
        if (!hoverImg) return;

        box.addEventListener("mousemove", (event) => {
        const rect = box.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        hoverImg.style.opacity = "1";
        hoverImg.style.visibility = "visible";
        hoverImg.style.transform = `translate(${x}px, ${y}px) rotate(0deg)`;
        });

        box.addEventListener("mouseleave", () => {
        hoverImg.style.opacity = "0";
        hoverImg.style.visibility = "hidden";
        hoverImg.style.transform = `translateY(-50%) rotate(10deg)`;
        });
    });
    }

    
      /*----------------------------------------------
        # Branding Hover Image
        ----------------------------------------------*/
        if ($(".branding-section").length) {

            $(".branding-section").each(function () {

                const $box = $(this);
                const hoverImg = $box.find(".hover-image")[0];

                if (!hoverImg) return;

                $box.on("mousemove", function (event) {

                    const rect = this.getBoundingClientRect();
                    const x = event.clientX - rect.left;
                    const y = event.clientY - rect.top;

                    hoverImg.style.opacity = "1";
                    hoverImg.style.visibility = "visible";
                    hoverImg.style.transform = `translate(${x}px, ${y}px) rotate(10deg)`;

                });

                $box.on("mouseleave", function () {

                    hoverImg.style.opacity = "0";
                    hoverImg.style.visibility = "hidden";
                    hoverImg.style.transform = `translateY(-50%) rotate(10deg)`;

                });

            });
        }

        /*----------------------------------------------
        # Image Trail Animation
        ----------------------------------------------*/
        if ($(".image-trail-animation").length && typeof gsap !== "undefined") {

            const MathUtils = {
                lerp: (a, b, n) => (1 - n) * a + n * b,
                distance: (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1)
            };

            $(".image-trail-animation").each(function () {

                const section = this;
                const imagesWrapper = section.querySelector(".image-trail-images");
                if (!imagesWrapper) return;

                const images = [...imagesWrapper.querySelectorAll("img")];

                let mouse = { x: 0, y: 0 };
                let lastMouse = { x: 0, y: 0 };
                let cachedMouse = { x: 0, y: 0 };

                const threshold = 80;
                let zIndex = 1;
                let imgIndex = 0;

                const getMousePos = (e) => {
                    const rect = section.getBoundingClientRect();
                    return {
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top
                    };
                };

                section.addEventListener("mousemove", (e) => {
                    mouse = getMousePos(e);
                });

                class ImageTrail {
                    constructor() {
                        requestAnimationFrame(() => this.render());
                    }

                    render() {

                        const distance = MathUtils.distance(
                            mouse.x, mouse.y,
                            lastMouse.x, lastMouse.y
                        );

                        cachedMouse.x = MathUtils.lerp(
                            cachedMouse.x || mouse.x,
                            mouse.x,
                            0.15
                        );

                        cachedMouse.y = MathUtils.lerp(
                            cachedMouse.y || mouse.y,
                            mouse.y,
                            0.15
                        );

                        if (distance > threshold) {
                            this.showImage();
                            lastMouse = { ...mouse };
                        }

                        requestAnimationFrame(() => this.render());
                    }

                    showImage() {

                        const img = images[imgIndex];
                        if (!img) return;

                        gsap.killTweensOf(img);

                        const rect = img.getBoundingClientRect();

                        gsap.set(img, {
                            opacity: 1,
                            scale: 1,
                            zIndex: zIndex++,
                            x: cachedMouse.x - rect.width / 2,
                            y: cachedMouse.y - rect.height / 2
                        });

                        gsap.to(img, {
                            duration: 0.8,
                            ease: "expo.out",
                            x: mouse.x - rect.width / 2,
                            y: mouse.y - rect.height / 2
                        });

                        gsap.to(img, {
                            duration: 0.9,
                            delay: 0.3,
                            opacity: 0,
                            scale: 0.25,
                            ease: "power2.out"
                        });

                        imgIndex = (imgIndex + 1) % images.length;
                    }
                }

                new ImageTrail();

            });
        }

    /* ================================
        Mouse Cursor Animation Js Start
    ================================ */

    if ($(".mouseCursor").length > 0) {
        function itCursor() {
            var myCursor = jQuery(".mouseCursor");
            if (myCursor.length) {
                if ($("body")) {
                    const e = document.querySelector(".cursor-inner"),
                        t = document.querySelector(".cursor-outer");
                    let n, i = 0, o = !1;
                    window.onmousemove = function(s) {
                        if (!o) {
                            t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
                        }
                        e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
                        n = s.clientY;
                        i = s.clientX;
                    };
                    $("body").on("mouseenter", "button, a, .cursor-pointer", function() {
                        e.classList.add("cursor-hover");
                        t.classList.add("cursor-hover");
                    });
                    $("body").on("mouseleave", "button, a, .cursor-pointer", function() {
                        if (!($(this).is("a", "button") && $(this).closest(".cursor-pointer").length)) {
                            e.classList.remove("cursor-hover");
                            t.classList.remove("cursor-hover");
                        }
                    });
                    e.style.visibility = "visible";
                    t.style.visibility = "visible";
                }
            }
        }
        itCursor();
    }

    /* ================================
        Back To Top Button Js Start
    ================================ */
    $windowOn.on('scroll', function() {
        var windowScrollTop = $(this).scrollTop();
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();

        if (windowScrollTop + windowHeight >= documentHeight - 10) {
            $("#back-top").addClass("show");
        } else {
            $("#back-top").removeClass("show");
        }
    });

    $documentOn.on('click', '#back-top', function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    /* ================================
       Search Popup Toggle Js Start
    ================================ */

    if ($(".search-toggler").length) {
        $(".search-toggler").on("click", function(e) {
            e.preventDefault();
            $(".search-popup").toggleClass("active");
            $("body").toggleClass("locked");
        });
    }

    /* ================================
      Service Hover Active Js Start
    ================================ */

   if ($('.service-section').length) {

    $('.service-section').each(function () {

        const $section = $(this);
        const $serviceItems = $section.find('.service-list-items');
        const $serviceImages = $section.find('.gt-service-one-image');

        $serviceItems.on('mouseenter', function () {

            const index = $(this).index();

            // remove active
            $serviceItems.removeClass('active');
            $serviceImages.removeClass('active');

            // add active
            $(this).addClass('active');
            $serviceImages.eq(index).addClass('active');

        });

    });

    }

    
	
    /* ================================
       Smooth Scroller And Title Animation Js Start
    ================================ */
    if ($('#smooth-wrapper').length && $('#smooth-content').length) {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

        gsap.config({
            nullTargetWarn: false,
        });

        let smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 2,
            effects: true,
            smoothTouch: 0.1,
            normalizeScroll: false,
            ignoreMobileResize: true,
        });
    }

        /* ================================
       Text Anim Js Start
    ================================ */

    if (
    typeof SplitText !== "undefined" &&
        document.querySelectorAll(".split-title").length > 0
        ) {
    document.querySelectorAll(".split-title").forEach((title) => {

        // split by words + chars (IMPORTANT)
        const split = new SplitText(title, {
        type: "words,chars"
        });

        // add class to chars
        split.chars.forEach((char) => {
        char.classList.add("char");
        });

        // GSAP animation
        gsap.to(split.chars, {
        scrollTrigger: {
            trigger: title,
            start: "top 90%",
            toggleActions: "play none none none"
        },
        duration: 0.8,
        clipPath: "inset(0% 0% -15% 0%)",
        x: 0,
        opacity: 1,
        ease: "power4.out",
        stagger: 0.03
        });

    });
    }

     if (typeof gsap !== "undefined") {
          gsap.registerPlugin(ScrollTrigger, SplitText);

          let mm = gsap.matchMedia();

          mm.add("(min-width: 1200px)", () => {

              let splits = [];

              // ===== tz-sub-tilte =====
              $('.tz-sub-tilte').each(function (index, el) {

              let split = new SplitText(el, {
                  type: "lines,words,chars",
                  linesClass: "split-line"
              });

              splits.push(split);

              gsap.set(split.chars, {
                  opacity: 0,
                  x: 7
              });

              gsap.to(split.chars, {
                  scrollTrigger: {
                  trigger: el,
                  start: "top 90%",
                  end: "top 60%",
                  scrub: 1
                  },
                  x: 0,
                  opacity: 1,
                  duration: 0.7,
                  stagger: 0.2
              });
              });

              // ===== tz-itm-title =====
              $('.tz-itm-title').each(function (index, el) {

              let split = new SplitText(el, {
                  type: "lines,words,chars",
                  linesClass: "split-line"
              });

              splits.push(split);

              gsap.set(split.chars, {
                  opacity: 0.3,
                  x: -7
              });

              gsap.to(split.chars, {
                  scrollTrigger: {
                  trigger: el,
                  start: "top 92%",
                  end: "top 60%",
                  scrub: 1
                  },
                  x: 0,
                  opacity: 1,
                  duration: 0.7,
                  stagger: 0.2
              });
              });

              // ðŸ”¥ MOST IMPORTANT PART
              ScrollTrigger.refresh();

              // ðŸ”¥ cleanup on breakpoint change
              return () => {
              splits.forEach(split => split.revert());
              ScrollTrigger.getAll().forEach(st => st.kill());
              };

          });
    }

     /* ================================
       Des Portfolio Anim Js Start
    ================================ */
    if (document.querySelector(".des-portfolio-wrap")) {

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1199px)", () => {

        const sections = document.querySelectorAll(".des-portfolio-panel");
        const wrap = document.querySelector(".des-portfolio-wrap");

        if (!sections.length || !wrap) return;

        // Initial state
        gsap.set(sections, {
            scale: 1,
            opacity: 1,
            autoAlpha: 1
        });

        sections.forEach((section, index) => {

            const isLast = index === sections.length - 1;

            // SCALE ANIMATION (same as before feel)
            gsap.to(section, {
                scale: isLast ? 1 : 0.8,
                opacity: isLast ? 1 : 0.6,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top 14%",
                    end: "bottom 80%",
                    scrub: true,
                    pin: true,
                    pinSpacing: false, // 🔥 original behavior preserved
                    endTrigger: wrap,
                },
            });

            // VISIBILITY CONTROL (optimized but same logic)
            ScrollTrigger.create({
                trigger: section,
                start: "top 14%",

                onEnter: () => {
                    sections.forEach((el, i) => {
                        if (i < index) {
                            gsap.set(el, { autoAlpha: 0 });
                        } else {
                            gsap.set(el, { autoAlpha: 1 });
                        }
                    });
                },

                onEnterBack: () => {
                    sections.forEach((el, i) => {
                        if (i < index) {
                            gsap.set(el, { autoAlpha: 0 });
                        } else {
                            gsap.set(el, { autoAlpha: 1 });
                        }
                    });
                }

            });

        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };

    });
    }


    /* ================================
    Scale Up Image Js Start
    ================================ */

    if (typeof ScrollTrigger !== "undefined") {

    ScrollTrigger.matchMedia({

        // ✅ XL and up → animation ON
        "(min-width: 1200px)": function () {

        document.querySelectorAll(".scale-up-img").forEach((section) => {

            const img = section.querySelector(".scale-up");

            let tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom center",
                scrub: 1
            }
            });

            tl.to(img, {
            scale: 1.15,
            ease: "none"
            });

        });

        },

        // ❌ Below XL → animation OFF + reset
        "(max-width: 1199px)": function () {

        // kill all related ScrollTriggers
        ScrollTrigger.getAll().forEach((st) => {
            if (st.trigger && st.trigger.classList.contains("scale-up-img")) {
            st.kill();
            }
        });

        // reset scale
        document.querySelectorAll(".scale-up-img .scale-up").forEach((img) => {
            gsap.set(img, { scale: 1 });
        });

        }

    });

    }


    gsap.to(".image-wrap", {
    width: "100%",
    scrollTrigger: {
        trigger: ".hero-4",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true
    }
});

     //*===== 12 Reveal to Left Animation =====*/
    function desklyRevealLeftAnimation() {
        if ($(".reveal-left").length) {
            $(".reveal-left").each(function () {
                const container = this;
                const image = $(container).find("img").get(0);
                if (!image) return;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        toggleActions: "play none none none",
                    },
                });

                tl.set(container, { autoAlpha: 1 });
                tl.from(container, {
                    duration: 1.5,
                    xPercent: -100,
                    ease: Power2.out,
                });
                tl.from(image, {
                    duration: 1.5,
                    xPercent: 100,
                    scale: 1.3,
                    delay: -1.5,
                    ease: Power2.out,
                });
            });
        }
    }
    desklyRevealLeftAnimation();

    $(".service-box-item-4").hover(
        function () {
            $(".service-box-item-4").removeClass("active");
            $(this).addClass("active");
        }
    );
     /* ================================
    Animate Circle Js Start
    ================================ */

    if ($('.bz-gsap-animate-circle').length) {
    gsap.utils.toArray('.bz-gsap-animate-circle').forEach((el) => {

        // Accessibility: reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(el, { rotate: 0 });
        return;
        }

        gsap.timeline({
        scrollTrigger: {
            trigger: el,
            scrub: 1,
            start: "top 80%",
            end: "top 20%",
            markers: false
        }
        })
        .set(el, { transformOrigin: "50% 50%" })
        .fromTo(
        el,
        { rotate: 0 },
        { rotate: 180, ease: "none" }
        );
    });
    }
    
   if ($(".wa_split_up").length) {

        var wa_split_up = $(".wa_split_up");

        gsap.registerPlugin(SplitText, ScrollTrigger);

        wa_split_up.each(function (index, el) {

            el.split = new SplitText(el, {
                type: "lines,words,chars",
                linesClass: "split-line",
            });

            gsap.set(el, { perspective: 400 });

            let delayValue = $(el).attr("data-split-delay") || "0s";
            delayValue = parseFloat(delayValue) || 0;

            gsap.set(el.split.chars, {
                y: 50,
                opacity: 0,
            });

            el.anim = gsap.to(el.split.chars, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 86%",
                    toggleActions: "play none none reverse",
                },
                y: 0,
                opacity: 1,
                duration: 0.3,
                ease: "power1.out",
                stagger: 0.15,
                delay: delayValue,
            });

        });

    }

    if ($(".as-partner-3-big-title").length) {

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1200px)", () => {

        var waSplitup2hero2 = $(".as-partner-3-big-title");

        gsap.registerPlugin(SplitText, ScrollTrigger);

        waSplitup2hero2.each(function (index, el) {

            el.split = new SplitText(el, {
                type: "lines,words,chars",
                linesClass: "split-line",
            });

            gsap.set(el.split.chars, {
                yPercent: -560,
                opacity: 0,
            });

            gsap.to(el.split.chars, {
                scrollTrigger: {
                    trigger: el,
                    end: "top 30%",
                    toggleActions: "play none none reverse",
                    scrub: true,
                },
                opacity: 1,
                yPercent: 0,
                duration: 0.5,
                ease: "power1.out",
                stagger: 0.2,
            });

        });

        var asP3bigTitle = gsap.timeline({
            scrollTrigger: {
                trigger: ".as-partner-3-big-title",
                end: "top 10%",
                toggleActions: "play none none reverse",
                scrub: true,
            },
        });

        asP3bigTitle.from(".as-partner-3-big-title", {
            xPercent: 100,
        });

    });

    }

   if ($(".wa_title_spilt_1").length) {

        gsap.registerPlugin(SplitText, ScrollTrigger);

        document.querySelectorAll(".wa_title_spilt_1").forEach((atEl) => {

            const atSplit = new SplitText(atEl, {
                type: "words,chars",
                wordsClass: "word",
                charsClass: "char",
            });

            let atDuration = parseFloat(atEl.getAttribute("data-speed")) || 1;
            let atDelay = parseFloat(atEl.getAttribute("data-delay")) || 0;

            if (window.innerWidth <= 768) {
                atDuration = atDuration * 0.3;
            }

            gsap.set(atSplit.words, {
                willChange: "transform",
                perspective: 1000,
                transformStyle: "preserve-3d",
            });

            gsap.set(atSplit.chars, {
                willChange: "transform",
                opacity: 0,
                rotateX: -80,
                transformOrigin: "center center -10px",
            });

            gsap.set(atEl, {
                perspective: 1000,
                transformStyle: "preserve-3d",
            });

            gsap.to(atSplit.chars, {
                scrollTrigger: {
                    trigger: atEl,
                    start: "top 80%",
                },
                opacity: 1,
                rotateX: 0,
                duration: atDuration,
                delay: atDelay,
                ease: "power3.out",
                stagger: {
                    each: 0.05,
                    from: "center",
                    grid: "auto",
                },
            });

        });

    }

    if ($(".design-choose-item-wrap").length) {

        gsap.registerPlugin(ScrollTrigger);

        const pw = gsap.matchMedia();

        pw.add("(min-width: 1200px)", () => {

            document.querySelectorAll(".design-choose-item-wrap").forEach((wrap) => {

                const pairs = wrap.querySelectorAll(".col-xl-6:nth-child(odd)");

                pairs.forEach((pair) => {

                    const item1 = pair.querySelector(".design-choose-item-1");
                    const item2 = pair.nextElementSibling?.querySelector(".design-choose-item-2");

                    if (item1 && item2) {

                        gsap.set(item1, { x: -400, rotate: -40 });
                        gsap.set(item2, { x: 400, rotate: 40 });

                        let tl = gsap.timeline({
                            scrollTrigger: {
                                trigger: pair,
                                start: "top 90%",
                                end: "top 20%",
                                scrub: 1,
                            }
                        });

                        tl.to(item1, { x: 0, rotate: 0 })
                            .to(item2, { x: 0, rotate: 0 }, 0);

                    }

                });

            });

        });

    }

     /* ================================
       Service Panel Js Start
    ================================ */

	let sv = gsap.matchMedia();
	sv.add("(min-width: 1199px)", () => {
		let tl = gsap.timeline();
		let projectpanels = document.querySelectorAll('.tp-service-panel');
		let baseOffset = 150;
		let offsetIncrement = 120;

		projectpanels.forEach((section, index) => {
			let topOffset = baseOffset + (index * offsetIncrement);
			tl.to(section, {
				scrollTrigger: {
					trigger: section,
					pin: section,
					scrub: 1,
					start: `top ${topOffset}px`,
					end: "bottom 90%",
					endTrigger: '.tp-service-pin',
					pinSpacing: false,
					markers: false,
				},
			});
		});
	});


    /*------------------------------------------
    = section-triger-slider
	-------------------------------------------*/
    
	const triggerSlices = [...document.querySelectorAll('.sec-triger')];

	triggerSlices.forEach((section) => {
		const slices = section.querySelectorAll(".xb_uncover_slice");
		const image = section.querySelector(".myimg");

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: "50% bottom",
				markers: false,
			}
		});

		tl.to(slices, { 
			height: 0,  
			ease: 'power6.inOut',
			duration: 0.6,
			stagger: { each: 0.3 }
		}, 'start')

		.to(image, {
			scale: 1.3,
			duration: 1.5,
			ease: 'power6.inOut'
		}, 'start');
	});

  
    // Create mask divs for each wrapper
		const initial = [
        "polygon(0% 0%,0% 0%,0% 0%,0% 0%)",
        "polygon(33% 0%,33% 0%,33% 0%,33% 0%)",
        "polygon(66% 0%,66% 0%,66% 0%,66% 0%)",
        "polygon(0% 33%,0% 33%,0% 33%,0% 33%)",
        "polygon(33% 33%,33% 33%,33% 33%,33% 33%)",
        "polygon(66% 33%,66% 33%,66% 33%,66% 33%)",
        "polygon(0% 66%,0% 66%,0% 66%,0% 66%)",
        "polygon(33% 66%,33% 66%,33% 66%,33% 66%)",
        "polygon(66% 66%,66% 66%,66% 66%,66% 66%)"
        ];

        const final = [
        "polygon(0% 0%,33% 0%,33% 33%,0% 33%)",
        "polygon(33% 0%,66% 0%,66% 33%,33% 33%)",
        "polygon(66% 0%,100% 0%,100% 33%,66% 33%)",
        "polygon(0% 33%,33% 33%,33% 66%,0% 66%)",
        "polygon(33% 33%,66% 33%,66% 66%,33% 66%)",
        "polygon(66% 33%,100% 33%,100% 66%,66% 66%)",
        "polygon(0% 66%,33% 66%,33% 100%,0% 100%)",
        "polygon(33% 66%,66% 66%,66% 100%,33% 100%)",
        "polygon(66% 66%,100% 66%,100% 100%,66% 100%)"
        ];

        document.querySelectorAll(".xb-clip-animation").forEach(wrapper => {

            const img = wrapper.querySelector("img");
            const url = img.src;

            img.style.opacity = "0"; // hide original image

            for (let i = 0; i < 9; i++) {
                const mask = document.createElement("div");
                mask.className = "mask";
                mask.style.backgroundImage = `url(${url})`;
                mask.style.backgroundSize = "cover";
                mask.style.backgroundPosition = "center";
                wrapper.appendChild(mask);
            }

            const masks = wrapper.querySelectorAll(".mask");

            gsap.set(masks, { clipPath: i => initial[i] });

            gsap.to(masks, {
                clipPath: i => final[i],
                duration: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: wrapper,
                    start: "top 80%"
                }
            });
        });
                

        document.fonts.ready.then(() => {
		if ($(".xb-split-up").length) {
			var waSplitup = $(".xb-split-up");
			if (waSplitup.length == 0) return;
			gsap.registerPlugin(SplitText);
			waSplitup.each(function (index, el) {
				el.split = new SplitText(el, {
					type: "lines,words,chars",
					linesClass: "split-line",
				});
	
				let delayValue = $(el).attr("data-split-delay") || "0s";
				delayValue = parseFloat(delayValue) || 0;
	
				if ($(el).hasClass("xb-split-up")) {
					gsap.set(el.split.chars, {
						rotate: 90,
						opacity: 0,
					});
				}
	
				el.anim = gsap.to(el.split.chars, {
					scrollTrigger: {
						trigger: el,
						start: "top 86%",
						toggleActions: "play none none reverse",
					},
					opacity: 1,
					rotate: 0,
					duration: 0.8,
					ease: "back.out(3)",
					stagger: 0.08,
					delay: delayValue,
				});
			});
		}
	    })


       $(".feature-card-items-5").on("mouseenter", function() {
    $(this).find("::before").css("height", "100%");
    }).on("mouseleave", function() {
        $(this).find("::before").css("height", "0%");
    });



    }); // End Document Ready Function

     /* ================================
      Pricing Toggle Js Start
    ================================ */

    document.addEventListener("DOMContentLoaded", () => {
        const monthlyBtn = document.querySelector(".monthly-label");
        const yearlyBtn = document.querySelector(".yearly-label");
        const prices = document.querySelectorAll(".price");

        if (!monthlyBtn || !yearlyBtn || prices.length === 0) return;

        let isAnimating = false;

        function changePrice(type) {
            if (isAnimating) return;
            isAnimating = true;

            prices.forEach(price => {
                price.classList.add("fade-out");

                setTimeout(() => {
                    const value = price.dataset[type];

                    if (!value) {
                        price.classList.remove("fade-out");
                        isAnimating = false;
                        return;
                    }

                    const period = type === "monthly" ? "month" : "year";

                    price.innerHTML = `$${value}<sub> / ${period}</sub>`;

                    price.classList.remove("fade-out");
                    price.classList.add("fade-in");

                    setTimeout(() => {
                        price.classList.remove("fade-in");
                        isAnimating = false;
                    }, 300);
                }, 300);
            });
        }

        monthlyBtn.addEventListener("click", function () {
            if (!this.classList.contains("active")) {
                monthlyBtn.classList.add("active");
                yearlyBtn.classList.remove("active");
                changePrice("monthly");
            }
        });

        yearlyBtn.addEventListener("click", function () {
            if (!this.classList.contains("active")) {
                yearlyBtn.classList.add("active");
                monthlyBtn.classList.remove("active");
                changePrice("yearly");
            }
        });
    });



    /* ================================
       Preloader Js Start
    ================================ */
    // $windowOn.on('load', function() {
    //     $(".preloader").fadeOut(600);
    // });

   /* Preloader Effect */
$(window).on('load', function(){
    $(".preloader").fadeOut(800);
});

  
  })(jQuery); // End jQuery

