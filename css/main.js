// ハンバーガーメニュー
$('.burger-btn').on('click',function(){
    $('.burger-btn').toggleClass('cross');
    // $('nav').fadeToggle(300);
    $('nav').toggleClass('show');
    $('body').toggleClass('noscroll')
});

jQuery(function($){$('.nav-item a').on('click', function(){
    if (window.innerWidth <= 1024) {
        $('.burger-btn').click();
    }
});});







// -------------
// ★gsap★
// about>Scrolltrigger
// -------------
const items = gsap.utils.toArray('.js-trigger');
items.forEach((item) => {
    gsap.fromTo(item,
        {
            y: 10,
        },
        {
            y: 0,
            duration: 5,
            ease: 'power2.out',

            scrollTrigger: {
                trigger:  item,
                start: 'top center',
                markers: true,
                onEnter: () => item.classList.add('is-active'),
                onLeaveBack: () => item.classList.remove('is-active'),
            }
        }
        );
});





// -------------
// ★gsap★
// menu>img
//ばらつきのある表現
// -------------
gsap.from('.card-img-wrapper img',
    {   autoAlpha: 0,
        y: -100,
        ease: "power3",
        duration: 1,
        stagger: 0.2,
        scrollTrigger:{
            trigger: '#menu',
            start: "top",
            // markers: true
        }
    });
