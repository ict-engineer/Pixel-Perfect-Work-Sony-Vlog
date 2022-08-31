$(document).ready(function() {
    $('.js-anchor-link').click(function(e) {
        e.preventDefault();
        var target = $($(this).attr('href'));
        if (target.length) {
            var scrollTo = target.offset().top;
            $('body, html').animate({ scrollTop: scrollTo + 'px' }, 800);
        }
    });

    $('.bottom-flue').click(function(e) {
        e.preventDefault();
        var target = $($(this).attr('href'));
        if (target.length) {
            var scrollTo = target.offset().top;
            $('body, html').animate({
                scrollTop: scrollTo + 'px'
            }, 1500);
        }
    });
    var mybutton = document.getElementById("stickybtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
});

$(function () {
	'use strict';

	var $swipeTabsContainer = $('.swipe-tabs'),
		$swipeTabs = $('.swipe-tab'),
		$swipeTabsContentContainer = $('.swipe-tabs-container'),
		currentIndex = 0,
		activeTabClassName = 'active-tab';

	$swipeTabsContainer.on('init', function(event, slick) {
		$swipeTabsContentContainer.removeClass('invisible');
		$swipeTabsContainer.removeClass('invisible');

		currentIndex = slick.getCurrent();
		$swipeTabs.removeClass(activeTabClassName);
       	$('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
    });
    
    console.log($(window).width());

    if ($(window).width() >= 768 ) {
        $swipeTabsContainer.slick({
            //slidesToShow: 3.25,
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: false,
            infinite: false,
            swipeToSlide: true,
            touchThreshold: 10
        });
    }

    if ($(window).width() < 768 && $(window).width() >= 576) {
        $swipeTabsContainer.slick({
            //slidesToShow: 3.25,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            infinite: false,
            swipeToSlide: true,
            touchThreshold: 10
        });
    }

    if ($(window).width() < 576) {
        $swipeTabsContainer.slick({
            //slidesToShow: 3.25,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            infinite: false,
            swipeToSlide: true,
            touchThreshold: 10
        });
    }

	$swipeTabsContentContainer.slick({
		asNavFor: $swipeTabsContainer,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite: false,
		swipeToSlide: true,
        draggable: false,
		touchThreshold: 10
	});


	$swipeTabs.on('click', function(event) {
        // gets index of clicked tab
        currentIndex = $(this).data('slick-index');
        $swipeTabs.removeClass(activeTabClassName);
        $('.swipe-tab[data-slick-index=' + currentIndex +']').addClass(activeTabClassName);
        $swipeTabsContainer.slick('slickGoTo', currentIndex);
        $swipeTabsContentContainer.slick('slickGoTo', currentIndex);
    });

    //initializes slick navigation tabs swipe handler
    $swipeTabsContentContainer.on('swipe', function(event, slick, direction) {
    	currentIndex = $(this).slick('slickCurrentSlide');
		$swipeTabs.removeClass(activeTabClassName);
		$('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
	});
});

let title = [
    '川島海荷',
    'ひかりんちょ',
    'ジェットダイスケ',
    '高澤けーすけ',
    '大川優介',
    'in living.',
    ' Harukiはるき',
    'カズチャンネル',
    '0'
];
$('#morebutton').on('click', function(e) {
    e.preventDefault();
    
    let lastnum = parseInt($('.judge__main').children(".judge__main--content").last().find("span").first().text());
    // console.log(typeof(lastnum));
    for (let i = 0; i < 3; i++) {
        let html = `
            <div class="judge__main--content">
                <div class="image new aos-init" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                    <img src="./images1/v-camera-${(lastnum + i) % 8 + 1}.png" srcset="./images1/v-camera-${(lastnum + i) % 8 + 1}.png 1x, ./images1/v-camera-${(lastnum + i) % 8 + 1}@2.png 2x">
                    <div class="text">
                        <span class="font-20 ff-pro-b">${lastnum + i + 1}</span>
                        <div><span class="font-18 ff-jp-b">${title[(lastnum + i) % 8]}</span></div>
                    </div>
                </div>
                <div class="social">
                    <a href="#" class="fa fa-instagram fc-white"></a>
                    <a href="#" class="fa fa-twitter fc-white"></a>
                    <a href="#" class="fa fa-youtube-play fc-white"></a>
                </div>
            </div>
        
        `;
        $('.judge__main').append(html);
        
    }
    setTimeout(()=> {
        $(".judge__main--content").find('div.new').addClass("aos-animate")
    }, 70)
  });