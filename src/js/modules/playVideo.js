export class VideoPlayer {
   constructor(triggers, popup) {
      //    передаем триггер куда будем кликать
      this.buttons = document.querySelectorAll(triggers);
      //   блок которй ьудем вызывать
      this.popup = document.querySelector(popup);
      //   в самом блоке находим элемент с кнопкой
      this.close = this.popup.querySelector('.close');
   }

   bindTriggers() {
      //    перебираем кнопки
      this.buttons.forEach((btn) => {
         btn.addEventListener('click', () => {
            //  если при нажатии на кнопку имеется класс iframe#frame то мы показываем окно с видео
            if (document.querySelector('iframe#frame')) {
               this.popup.style.display = 'flex';
            } else {
               // иначе мы создаем новое окно с видео
               const path = btn.getAttribute('data-url');

               this.createPlayer(path);
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
      });
      this.popup.style.display = 'flex';
   }

//    главный метод инициализации
   init() {
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
