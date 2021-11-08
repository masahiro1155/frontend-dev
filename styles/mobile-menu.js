class MobileMenu {
    constructor() {
        this.DOM = {};
        this.DOM.btn = document.querySelector('.mobile-menu__btn');
        this.DOM.cover = document.querySelector('.mobile-menu__cover');
        this.DOM.container = document.querySelector('#global-container');
        // 基本的にプライベートメソッドで切り出して、thisの値のみにする
        this.eventType = this._getEventType();
        this._addEvent();
    }

    _toggle() {
        this.DOM.container.classList.toggle('menu-open');
    }

    _getEventType(){
        return window.ontouchstart ?'touchstart' : 'click';
    }

    _addEvent(){
        this.DOM.btn.addEventListener('click', this._toggle.bind(this));
        this.DOM.cover.addEventListener('click', this._toggle.bind(this));
    }

}


