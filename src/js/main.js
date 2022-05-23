import { VideoPlayer } from './modules';

window.addEventListener('DOMContentLoaded', () => {
   const video = new VideoPlayer('.showup .play', '.overlay');
   video.init();
});
