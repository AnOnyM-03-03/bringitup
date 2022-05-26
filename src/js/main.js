import { MainSlider } from './modules/slider/slider-main';

window.addEventListener('DOMContentLoaded', () => {
   const slider = new MainSlider({ btns: '.next', page: '.page' });
   slider.render();
});
