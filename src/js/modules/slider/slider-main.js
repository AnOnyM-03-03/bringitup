import { Slider } from './slider';

export class MainSlider extends Slider {
   constructor(page, buttons) {
      super(page, buttons);
   }

   //    функция в которую передаем текущий индекс слайда
   showSlides(n) {
      //    если индекс слайда больше чем длина, то есть мы уже на последнем слайде, то возвращаем 1 слайд
      if (n > this.slides.length) {
         this.slideIndex = 1;
      }
      //   если слайд меньше чем 1, то есть мы движемся в противоположную сторону, показываем последний слайд
      if (n < 1) {
         this.slideIndex = this.slides.length;
      }
      try {
         this.hanson.style.opacity = '0';

         if (n === 3) {
            this.hanson.classList.add('animated');
            setTimeout(() => {
               this.hanson.style.opacity = '1';
               this.hanson.classList.add('slideInUp');
            }, 3000);
         } else {
            this.hanson.classList.remove('slideInUp');
         }
      } catch (e) {}

      // перебираем слайды и для слайдов ставим display = 'none'
      this.slides.forEach((slide) => {
         slide.style.display = 'none';
      });
      // но показываем тот слайд на котором сейчас находимся
      // this.slideIndex - 1 - отсчет в массиве идет с 0, для этого и вычитаем
      this.slides[this.slideIndex - 1].style.display = 'block';
   }
   // вспомогательная функция для перебора слайдов
   plusSlides(n) {
      this.showSlides((this.slideIndex += n));
   }

   render() {
      try {
         this.hanson = document.querySelector('.hanson');
      } catch (e) {}

      //    перебираем кнопки и на каждую вешаем клик
      this.btns.forEach((btn) => {
         //   т,к у нас на странице одна кнопка и нужна вспомогательная функция
         btn.addEventListener('click', () => {
            this.plusSlides(1);
         });

         // обращаемся к родителю кнопки и вызываем метод для вызова предыдущего элемента и вешаем на него клик
         btn.parentNode.previousElementSibling.addEventListener(
            'click',
            (e) => {
               // отменяем стандартное поведение для ссылки
               e.preventDefault();
               //    ссылаемся на самый первый слайд
               this.slideIndex = 1;
               //    и вызываем функцию для перехода к нему
               this.showSlides(this.slideIndex);
            }
         );
      });

      this.showSlides(this.slideIndex);
   }
}
