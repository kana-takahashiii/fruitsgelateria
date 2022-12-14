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
            ease: 'power4.easeInOut,',

            scrollTrigger: {
                trigger:  item,
                start: 'top center',
                // markers: true,
                onEnter: () => item.classList.add('is-active'),
                onLeaveBack: () => item.classList.remove('is-active'),
            }
        }
        );
});





// -------------
// ★gsap★
// menu>フレーバーメニューアイコン
//ばらつきのある表現
// -------------
gsap.from('.card-item',
    {   autoAlpha: 0,
        y: -100,
        ease: 'power4.easeInOut',
        duration: 2,
        stagger: 0.07,
        scrollTrigger:{
            trigger: '#menu',
            start: "top",
            // markers: true
        }
    });


// -------------
// span化
// -------------
class SpanWrap {
    constructor(target) {
        this.target = this.convertElement(target);
        this.nodes = [...this.target.childNodes];
        this.convert();
    }
    convert() {
    
        let spanWrapText = ""
    
        this.nodes.forEach((node) => {
        if (node.nodeType == 3) {
            const text = node.textContent.replace(/\r?\n/g, '');
            spanWrapText = spanWrapText + text.split('').reduce((acc, v) => {
            return acc + `<span>${v}</span>`
            }, "");
        } else {
            spanWrapText = spanWrapText + node.outerHTML
        }
        })
    
        this.target.innerHTML = spanWrapText
    
    }
    convertElement(element) {
        if (element instanceof HTMLElement) {
            return element
        }
        return document.querySelector(element);
        }
}
//実行
const targets = [...document.querySelectorAll(".main-copy")]
targets.forEach( (target) => {
    new SpanWrap(target);
})



// main-copy
gsap.set(".main-copy span",
    {
        opacity: 0,
    });

var El = gsap.timeline();
    El.to(".main-copy span",{
        opacity: 1,
        duration: 3,
        stagger: 0.07,
        y: "30%",
        ease: "Expo.easeOut"
    })
