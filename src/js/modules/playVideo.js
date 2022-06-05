export class VideoPlayer {
   constructor(triggers, popup) {
      //    передаем триггер куда будем кликать
      this.buttons = document.querySelectorAll(triggers);
      //   блок которй ьудем вызывать
      this.popup = document.querySelector(popup);
      //   в самом блоке находим элемент с кнопкой
      this.close = this.popup.querySelector('.close');
      this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
   }

   bindTriggers() {
      //    перебираем кнопки
      this.buttons.forEach((btn, i) => {
         try {
            const blockedElem = btn.closest(
               '.module__video-item'
            ).nextElementSibling;
            if (i % 2 === 0) {
               blockedElem.setAttribute('data-disabled', 'true');
            }
         } catch (e) {}

         btn.addEventListener('click', () => {
            if (
               !btn.closest('.module__video-item') ||
               btn.getAttribute('data-disabled', 'true') !== 'true'
            ) {
               this.actibeBtn = btn;
               //  если при нажатии на кнопку имеется класс iframe#frame то мы показываем окно с видео
               if (document.querySelector('iframe#frame')) {
                  this.popup.style.display = 'flex';
                  if (this.path !== btn.getAttribute('data-url')) {
                     this.path = btn.getAttribute('data-url');
                     this.player.loadVideoById({ videoId: this.path });
                  }
               } else {
                  // иначе мы создаем новое окно с видео
                  this.path = btn.getAttribute('data-url');

                  this.createPlayer(this.path);
               }
            }
         });
      });
   }

   //    функция закрытия модального окна
   bindCloseBtn() {
      this.close.addEventListener('click', () => {
         this.popup.style.display = 'none';
         this.player.stopVideo();
      });
   }

   //    функция создания блока с видеоплеером
   createPlayer(url) {
      this.player = new YT.Player('frame', {
         height: '100%',
         width: '100%',
         videoId: `${url}`,
         events: {
            'onStateChange': this.onPlayerStateChange,
         },
      });
      this.popup.style.display = 'flex';
   }

   onPlayerStateChange(state) {
      try {
         const blockedElem = this.actibeBtn.closest(
            '.module__video-item'
         ).nextElementSibling;
         const playBtn = this.actibeBtn.querySelector('svg').cloneNode(true);

         if (state.data === 0) {
            if (
               blockedElem
                  .querySelector('.play__circle')
                  .classList.contains('closed')
            ) {
               blockedElem
                  .querySelector('.play__circle')
                  .classList.remove('closed');
               blockedElem.querySelector('svg').remove();
               blockedElem.querySelector('.play__circle').appendChild(playBtn);
               blockedElem.querySelector('.play__text').textContent =
                  'play video';
               blockedElem
                  .querySelector('.play__text')
                  .classList.remove('attention');
               blockedElem.style.opacity = 1;
               blockedElem.style.filter = 'none';

               blockedElem.setAttribute('data-disabled', 'false');
            }
         }
      } catch (e) {}
   }

   //    главный метод инициализации
   init() {
      if (this.buttons.length > 0) {
         //    создаем тег скрипт
         const tag = document.createElement('script');
         //   с ссылкой на ютюб
         tag.src = 'https://www.youtube.com/iframe_api';
         //   в переменную записываем тег который будет первым
         const firstScriptTag = document.getElementsByTagName('script')[0];
         //   и затем мы его отправлеям вниз
         firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

         this.bindTriggers();
         this.bindCloseBtn();
      }
   }
}
