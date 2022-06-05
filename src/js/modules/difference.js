export class Difference {
   constructor(oldOfficer, newOfficer, items) {
      try {
         this.oldOfficer = document.querySelector(oldOfficer);
         this.newOfficer = document.querySelector(newOfficer);
         this.oldItems = this.oldOfficer.querySelectorAll(items);
         this.newItems = this.newOfficer.querySelectorAll(items);
         this.oldCounter = 0;
         this.newCounter = 0;
      } catch (e) {}
   }

   bindTriggers(container, items, counter) {
      //    находим блок с классом plus и вешаем на него событие клика
      container.querySelector('.plus').addEventListener('click', () => {
         //   если открываем не последние 2 блока то мы их показываем и прибавляем счетчик
         if (counter !== items.length - 2) {
            items[counter].style.display = 'flex';
            counter++;
            // иначе мы открываем последние 2 блока мы их показываем и последний блок удаляем
         } else {
            items[counter].style.display = 'flex';
            items[items.length - 1].remove();
         }
      });
   }
   //    функция скрытия блоков карточек
   hideItems(items) {
      //    перебираем наши карточки
      items.forEach((item, i, arr) => {
         //   если индекс карточки не последний то мы их скрываем
         if (i !== arr.length - 1) {
            item.style.display = 'none';
         }
      });
   }

   init() {
      try {
         this.hideItems(this.oldItems);
         this.hideItems(this.newItems);
         this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
         this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
      } catch (e) {}
   }
}
