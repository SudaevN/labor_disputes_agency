$(document).ready(function () {
    /*Слайдер*/
    $('.slider').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1390,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    //выставляем slick-dots
    function moveDots() {
        let leftIndent = $('.limit').offset().left + 20;
        setTimeout(() => {
            let dots = $('.slider').find('.slick-dots');
            dots.css('left', leftIndent);
        }, 500);
    }

    moveDots();
    setTimeout(function () {
        let dots = $('.slider').find('.slick-dots');
        dots.css('opacity', 1)
    }, 3000);
    //при изменении ширины экрана двигаем slick-dots
    $(window).resize(moveDots);

    $('.reviews__list').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        dots: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    adaptiveHeight: true
                }
            }
        ]
    });


    $('.mob-slider-inner').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    });

    if ($('.certificates').innerWidth() < 1025) {
        $('.certificates__list').slick({
            autoplay: true,
            autoplaySpeed: 6000,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        })
    }
    /*Слайдер*/

    /*кнопка развернуть для отзывов*/
    $('.review__item').map(function () {
        if ($(window).width() > 767 && $(this).find('.review__item-body').height() > 94) {
            $(this).find('.review__item-footer').css('display', 'flex')
        } else if ($(window).width() < 768 && $(this).find('.review__item-body').height() > 97) {
            $(this).find('.review__item-footer').css('display', 'flex');
        }
    });

    $('.review__show-more').on('click', function () {
        let elem = $(this).parents('.review__item');
        let avaSrc = elem.find('.review__item-ava').attr('src');
        let name = elem.find('.review__item-name').text();
        let status = elem.find('.review__item-status').text();
        let text = elem.find('.review__item-body').children().clone();

        let reviewPopup = $('.review-popup');
        $('.review-popup__avatar').attr('src', avaSrc);
        $('.review-popup__name').text(name);
        $('.review-popup__status').text(status);
        $('.review-popup__body').html(text);

        $('.review-popup__body').children().each(function () {
            $(this).html($(this).html().trim());
        });

        reviewPopup.css({'display': 'flex'});
        setTimeout(() => {
            reviewPopup.css('opacity', '1')
        }, 200)
    });
    /*кнопка развернуть для отзывов*/
    /*Скрыть попап отзыва*/
    $('.review-popup__close').on('click', function () {
        $('.review-popup').css('opacity', '0');
        setTimeout(() => {
            $('.review-popup').css('display', 'none')
        }, 300)
    });
    /*Скрыть попап отзыва*/


    /*Сертификаты*/
    // показать сертификат на весь экран
    $('.certificate').on('click', function () {
        let picUrl = $($(this).find("img")[0]).attr('src');

        let fullScreen = $('.certificate-fullscreen');
        $(fullScreen.find("img")[0]).attr('src', picUrl);
        fullScreen.fadeIn();
    });
    // спрятать сертификат
    $('.certificate-close').on('click', function () {
        $('.certificate-fullscreen').fadeOut();
    });
    /*Сертификаты*/

    /*Установка Яндекс карт фоном*/
    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map('map', {
                center: [55.0405, 82.8807],
                zoom: 13
            }),

            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemark = new ymaps.Placemark([55.044469, 82.920007], {
                hintContent: 'Собственный значок метки с контентом',
                balloonContent: 'Тут мы ждем вашего звонка'
            }, {
                iconLayout: 'default#imageWithContent',
                iconImageHref: 'img/mark.png',
                iconImageSize: [34, 52],
                iconImageOffset: [-17, -52],
                iconContentOffset: [15, 15],
                iconContentLayout: MyIconContentLayout
            });

        myMap.geoObjects
            .add(myPlacemark);
    }
    /*Установка Яндекс карт фоном*/
});