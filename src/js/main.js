import { VideoPlayer } from './modules';
import { Slider } from './modules/slider';
import { MainSlider } from './modules/slider/slider-main';
window.addEventListener('DOMContentLoaded', () => {
   const video = new VideoPlayer('.showup .play', '.overlay');
   video.init();
   const slider = new MainSlider({ btns: '.next', page: '.page' });
   slider.render();
});
