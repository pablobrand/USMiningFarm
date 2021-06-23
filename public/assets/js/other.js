/* eslint-disable no-undef */
$(window).scroll(function () {
    if ($(this).scrollTop() > 75) {
        $('#banner').addClass('sticky')
    } else {
        $('#banner').removeClass('sticky')
    }
})

$('.counter-count').each(function () {
    $(this)
        .prop('Counter', 0)
        .animate(
            {
                Counter: $(this).text()
            },
            {
                duration: 4000,
                easing: 'swing',
                step(now) {
                    $(this).text(Math.ceil(now))
                }
            }
        )
})
