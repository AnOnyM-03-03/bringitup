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
   new MainSlider({ btns: '.next', page: '.page' }).render();

   new MainSlider({
      page: '.moduleapp',
      btns: '.next',
   }).render();

   new MiniSlider({
      page: '.showup__content-slider',
      prev: '.showup__prev',
      next: '.showup__next',
      activeClass: 'card-active',
      animate: true,
   }).init();
   new MiniSlider({
      page: '.modules__content-slider',
      prev: '.modules__info-btns .slick-prev',
      next: '.modules__info-btns .slick-next',
      activeClass: 'card-active',
      animate: true,
      autoplay: true,
   }).init();
   new MiniSlider({
      page: '.feed__slider',
      prev: '.feed__slider .slick-prev',
      next: '.feed__slider .slick-next',
      activeClass: 'feed__item-active',
   }).init();

   new VideoPlayer('.showup .play', '.overlay').init();
   new VideoPlayer('.module__video-item .play', '.overlay').init();
   new Form('.form', 'assets/question.php').init();
   new Difference('.officerold', '.officernew', '.officer__card-item').init();
   new ShowInfo('.plus__content').init();
   new Download('.download').init();
});
