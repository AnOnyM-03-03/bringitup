import { VideoPlayer } from './modules';

window.addEventListener('DOMContentLoaded', () => {
   new VideoPlayer('.showup .play', '.overlay').init();
   new VideoPlayer('.module__video-item .play', '.overlay').init();
});
