import { MainSlider, MiniSlider } from './modules/index';

window.addEventListener('DOMContentLoaded', () => {
   const slider = new MainSlider({ btns: '.next', page: '.page' });
   slider.render();

   const showUpSlider = new MiniSlider({
      page: '.showup__content-slider',
      prev: '.showup__prev',
      next: '.showup__next',
      activeClass: 'card-active',
      animate: true,
   });
   showUpSlider.init();

   const modulesSlider = new MiniSlider({
      page: '.modules__content-slider',
      prev: '.modules__info-btns .slick-prev',
      next: '.modules__info-btns .slick-next',
      activeClass: 'card-active',
      animate: true,
      autoplay: true,
   });
   modulesSlider.init();

   const feedSlider = new MiniSlider({
      page: '.feed__slider',
      prev: '.feed__slider .slick-prev',
      next: '.feed__slider .slick-next',
      activeClass: 'feed__item-active',
   });
   feedSlider.init();
});
