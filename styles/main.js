document.addEventListener('DOMContentLoaded', function () {
    const Main = new main();
});

class main {
    constructor() {
        this.header = document.querySelector('.header');
        // queryselecterAllは対象要素が複数あるから
        this.sides = document.querySelectorAll('.side');
        this._observers = [];
        this._init();
    }

    set observers(val) {
        this._observers.push(val);
    }

    get observers() {
        return this._observers;
    }

    _init() {
        new MobileMenu();
        this.hero = new HeroSlider('.swiper-container');
        Pace.on('done', this._paceDone.bind(this));

    }
    _paceDone() {
        this._scrolInit();
    }


    _textAnimation(el, inview) {
        if (inview) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }

    _inviewAnimation(el, inview) {
        if (inview) {
            el.classList.add('inview');
        } else {
            el.classList.remove('inview');
        }
    }

    _navAnimation(el, inview) {
        if (inview) {
            this.header.classList.remove('triggered');
        } else {
            this.header.classList.add('triggered');
        }
    }

    _sideAnimation(el, inview) {
        if (inview) {
            this.sides.forEach(side => side.classList.add('inview'));
        } else {
            this.sides.forEach(side => side.classList.remove('inview'));
        }
    }

    //アニメーション起動・停止 
    _toggleSlideAnimation(el, inview) {
        if (inview) {
            this.hero.start();
        } else {
            this.hero.stop();
        }
    }

    _scrolInit() {
        this.observers = new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), { once: false });
        this.observer = new ScrollObserver('.cover-slide', this._inviewAnimation);
        this.observer = new ScrollObserver('.appear', this._inviewAnimation);
        this.observer = new ScrollObserver('#main-content', this._sideAnimation.bind(this), { once: false ,rootMargin:"-300px 0px"});
        this.observers = new ScrollObserver('.tween-animate-title', this._textAnimation);
        this.observers = new ScrollObserver('.swiper-container', this._toggleSlideAnimation.bind(this), { once: false });
    }
}


