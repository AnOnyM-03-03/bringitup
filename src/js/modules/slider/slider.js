export class Slider {
   constructor({ page = '', btns = '', next = '', prev = '' } = {}) {
      //    внутри конструктора указываем переменные
      this.page = document.querySelector(page);
      //   слайдеры это у нас все дети родительского блока с классом page
      this.slides = this.page.children;
      this.btns = document.querySelectorAll(btns);
      //   номер текущего слайда
      this.slideIndex = 1;
   }
}
