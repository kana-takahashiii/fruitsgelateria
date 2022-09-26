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
gsap.from('.card-img-wrapper img',
    {   autoAlpha: 0,
        y: -100,
        ease: "power3",
        duration: 1,
        stagger: 0.01,
        scrollTrigger:{
            trigger: '#menu',
            start: "top",
            // markers: true
        }
    });


// span化
class SpanWrap {
    constructor(target) {
    
        this.target = this.convertElement(target);
        this.nodes = [...this.target.childNodes];
        this.convert();
        // console.log("spanでた");
    }
    
    convert() {
    
        let spanWrapText = ""
    
        this.nodes.forEach((node) => {
        if (node.nodeType == 3) {//テキストの場合
            const text = node.textContent.replace(/\r?\n/g, '');//テキストから改行コード削除
            //spanで囲んで連結
            spanWrapText = spanWrapText + text.split('').reduce((acc, v) => {
            return acc + `<span>${v}</span>`
            }, "");
        } else {//テキスト以外
            //<br>などテキスト以外の要素をそのまま連結
            spanWrapText = spanWrapText + node.outerHTML
        }
        })
    
        this.target.innerHTML = spanWrapText
    
    }
    //jQueryオブジェクトや文字列セレクターを変換
    convertElement(element) {
        if (element instanceof HTMLElement) {
            return element
        }
        // if (element instanceof jQuery) {
        //   return element[0]
        // }
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