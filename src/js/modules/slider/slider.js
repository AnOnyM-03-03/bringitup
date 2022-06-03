export class Slider {
   constructor({
      page = null,
      btns = null,
      next = null,
      prev = null,
      activeClass,
      animate,
      autoplay,
   } = {}) {
      //    внутри конструктора указываем переменные
      this.page = document.querySelector(page);
      //   слайдеры это у нас все дети родительского блока с классом page
      try {
         this.slides = this.page.children;
      } catch (e) {}
      this.btns = document.querySelectorAll(btns);
      //   номер текущего слайда
      this.slideIndex = 1;
      this.prev = document.querySelector(prev);
      this.next = document.querySelector(next);
      this.activeClass = activeClass;
      this.animate = animate;
      this.autoplay = autoplay;
   }
}
