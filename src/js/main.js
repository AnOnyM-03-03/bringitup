import { VideoPlayer } from './modules';
import { Slider } from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
   const video = new VideoPlayer('.showup .play', '.overlay');
   video.init();
   const slider = new Slider('.page', '.next');
   slider.render();
});
