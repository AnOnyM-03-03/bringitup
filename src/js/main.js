import {
   MainSlider,
   MiniSlider,
   VideoPlayer,
   Difference,
   Form,
   ShowInfo,
   Download,
} from './modules/index';

window.addEventListener('DOMContentLoaded', () => {
   const video = new VideoPlayer('.showup .play', '.overlay');
   video.init();
   const slider = new MainSlider({ btns: '.next', page: '.page' });
   slider.render();

   const modulePageSlider = new MainSlider({
      page: '.moduleapp',
      btns: '.next',
   });
   modulePageSlider.render();

   const showUpSlider = new MiniSlider({
      page: '.showup__content-slider',
      prev: '.showup__prev',
      next: '.showup__next',
      activeClass: 'card-active',
      animate: true,
   });
   const modulesSlider = new MiniSlider({
      page: '.modules__content-slider',
      prev: '.modules__info-btns .slick-prev',
      next: '.modules__info-btns .slick-next',
      activeClass: 'card-active',
      animate: true,
      autoplay: true,
   });
   const feedSlider = new MiniSlider({
      page: '.feed__slider',
      prev: '.feed__slider .slick-prev',
      next: '.feed__slider .slick-next',
      activeClass: 'feed__item-active',
   });

   new Form('.form', 'assets/question.php').init();
   new Difference('.officerold', '.officernew', '.officer__card-item').init();
   new ShowInfo('.plus__content').init();
   new Download('.download').init();

   showUpSlider.init();
   modulesSlider.init();
   feedSlider.init();
});
