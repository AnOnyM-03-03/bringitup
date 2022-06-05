export class Form {
   constructor(forms, url) {
      this.forms = document.querySelectorAll(forms);
      this.inputs = document.querySelectorAll('input');
      this.path = url;
   }

   initMask() {
      const setCursorPosition = (pos, elem) => {
         elem.focus();

         if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
            const range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.movetart('character', pos);
            range.select();
         }
      };

      function createMask(e) {
         let matrix = '+1 (__) ___-___',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');

         if (def.length >= val.length) {
            val = def;
         }
         this.value = matrix.replace(/./g, function (a) {

            return /[_\d]/.test(a) && i < val.length
               ? val.charAt(i++)
               : i >= val.length
               ? ''
               : a;
         });

         if (e.type === 'blur') {
            if (this.value.length == 2) {
               this.value = '';
            }
         } else {
            setCursorPosition(this.value.length, this);
         }
      }

      const inputs = document.querySelectorAll('[name="phone"]');
      inputs.forEach((input) => {
         input.addEventListener('input', createMask);
         input.addEventListener('focus', createMask);
         input.addEventListener('blur', createMask);
      });
   }

   async postData(url, data) {
      const res = await fetch(url, {
         method: 'POST',
         body: data,
      });

      return await res.text();
   }

   clearInputs() {
      this.inputs.forEach((item) => {
         item.value = '';
      });
   }

   checkMailInputs() {
      const emailInputs = document.querySelectorAll('[type="email"]');
      emailInputs.forEach((Input) => {
         Input.addEventListener('keypress', (e) => {

            if (e.key.match(/[^a-z 0-9 @ \.]/gi)) {
               e.preventDefault();
            }
         });
      });
   }

   init() {
      this.initMask();
      this.checkMailInputs();
      this.forms.forEach((form) => {
         form.addEventListener('submit', (e) => {
            e.preventDefault();
            const statusMessage = document.createElement('div');
            statusMessage.style.cssText = `
                margin-top:15px;
                font-size:18px;
                color:gray;
            `;
            form.parentNode.appendChild(statusMessage);
            statusMessage.innerText = 'Вы молодец! форма отправлена:)';

            const formData = new FormData(form);
            this.postData(this.path, formData);
            
            try {
               then((res) => {
                  console.log(res);
                  statusMessage.innerText = 'Вы молодец! форма отправлена:)';
               });
            } catch (e) {throw e = new Error('Вы не смогли это сделать');}
            finally {
               () => {
                  this.clearInputs();
                  setTimeout(() => {
                     statusMessage.remove();
                  }, 4000);
               };
            }
         });
      });
   }
}
