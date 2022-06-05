import { Slider } from './slider';

export class MiniSlider extends Slider {
   constructor(page, next, prev, activeClass, animate, autoplay) {
      super(page, next, prev, activeClass, animate, autoplay);
   }

   decorizeSlides() {
      this.slides.forEach((slide) => {
         slide.classList.remove(this.activeClass);

         if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '0.4';
            this.slides[0].querySelector(
               '.card__controls-arrow'
            ).style.opacity = '0';
         }
      });

      if (!this.slides[0].closest('button')) {
         this.slides[0].classList.add(this.activeClass);
      }

      if (this.animate) {
         this.slides[0].querySelector('.card__title').style.opacity = '1';
         this.slides[0].querySelector('.card__controls-arrow').style.opacity =
            '1';
      }
   }

   nextSlide() {

      if (
         this.slides[1].tagName == 'BUTTON' &&
         this.slides[2].tagName == 'BUTTON'
      ) {
         this.page.appendChild(this.slides[0]); //slide
         this.page.appendChild(this.slides[1]); //btn
         this.page.appendChild(this.slides[2]); //btn
         this.decorizeSlides();

      } else if (this.slides[1].tagName == 'BUTTON') {
         this.page.appendChild(this.slides[0]); //slide
         this.page.appendChild(this.slides[1]); //btn
         this.decorizeSlides();
      } else {
         this.page.appendChild(this.slides[0]);
         this.decorizeSlides();
      }
   }

   bindTriggers() {
      this.next.addEventListener('click', () => this.nextSlide());
      this.prev.addEventListener('click', () => {
         for (let i = this.slides.length - 1; i > 0; i--) {

            if (this.slides[i].tagName !== 'BUTTONS') {
               let active = this.slides[i];
               this.page.insertBefore(active, this.slides[0]);
               this.decorizeSlides();

               break;
            }
         }
      });
   }

   init() {
        try {
            this.page.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
            `;

            this.bindTriggers();
            this.decorizeSlides();

            if (this.autoplay) {
                setInterval(() => this.nextSlide(), 5000);
            }
        } catch (e) {}
    }
}
