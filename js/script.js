$(document).ready(function () {
    //вывод плашки с логотипом в хедере
    function moveHeaderLogo() {
        let leftIndent = $('.limit').offset().left;
        let width = $('.header__light').width();
        let box = $('.header__logo-box-inner');
        let rightIndent = width - leftIndent - box.width() - 50;
        setTimeout(() => {
            $('.header__logo-box').css('right', rightIndent);
        }, 500);
    }

    moveHeaderLogo();
    //при изменении ширины экрана двигаем плашку
    $(window).resize(moveHeaderLogo)
    //вывод плашки с логотипом в хедере

    /*Открытие/Закрытие мобильного меню*/
    $(document).mouseup(function (e) {
        if (!$('.mob-header__menu').hasClass('mob-header__menu--showed') && $('.mob-header__burger').is(e.target)) {
            $('.mob-header__burger').addClass('mob-header__burger--active');
            $('.mob-header__menu').addClass('mob-header__menu--showed');
        } else if ($('.mob-header__menu').hasClass('mob-header__menu--showed') && !$('.mob-header__menu').is(e.target)) {
            $('.mob-header__burger--active').removeClass('mob-header__burger--active');
            $('.mob-header__menu--showed').removeClass('mob-header__menu--showed');
        } else {
        }
    });
    /*Открытие/Закрытие мобильного меню*/

    //Скрол до формы заказа
    $('.torequest').on('click', function (e) {
        e.preventDefault();
        $('body,html').animate({scrollTop: $('.request').offset().top}, 400);
    });
    //Скрол до формы заказа

    /*Проверка согласия на обработку персональных данных*/
    $('#request__checkbox').on('change', function () {
        if ($('#request__checkbox').prop('checked')) {
            $('.request__submit').attr('disabled', false);
        } else {
            $('.request__submit').attr('disabled', true);
        }
    });
    /*Проверка согласия на обработку персональных данных*/
    /*Валидация телефонного номера*/
    if ($('#phone').length) {
        $('#phone').mask("(999)999 9999", {autoclear: false})
    }
    /*Валидация телефонного номера*/
});