const keyContent = {
  en: {
    row1: ['&acute;', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    row2: ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '&bsol;', 'EN'],
    row3: ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '&grave;', 'Enter'],
    row4: ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'Shift'],
    row5: ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'],
  },
  'en-shift': {
    row1: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
    row2: ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'EN'],
    row3: ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
    row4: ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&uarr;', 'Shift'],
    row5: ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'],
  },
  ru: {
    row1: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    row2: ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '&bsol;', 'RU'],
    row3: ['Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
    row4: ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '&uarr;', 'Shift'],
    row5: ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'],
  },
  'ru-shift': {
    row1: ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
    row2: ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '|', 'RU'],
    row3: ['Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
    row4: ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', '&uarr;', 'Shift'],
    row5: ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'],
  },
  code: {
    row1: ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    row2: ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
    row3: ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
    row4: ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
    row5: ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
  },
};

class Keyboard {
  constructor() {
    this.setCode = 'en';
    this.pressedKey = new Set();
    this.capsOn = false;
  }

  fillHtml() {
    localStorage.getItem('language') !== undefined ? this.setCode = localStorage.getItem('language') : this.setCode = 'en';
    this.root = document.getElementById('root');
    this.wrapper = document.createElement('div');
    this.title = document.createElement('h1');
    this.made = document.createElement('p');
    this.change = document.createElement('p');
    this.combination = document.createElement('strong');
    this.textarea = document.createElement('textarea');
    this.keyboard = document.createElement('div');
    // while (root.firstChild) {// delete all old htmls
    //   root.removeChild(root.firstChild);
    // }
    this.wrapper.classList.add('wrapper');
    this.title.innerHTML = 'Virtual Keyboard';
    this.made.innerHTML = 'Made for Windows';
    this.change.innerHTML = 'Change language: ';
    this.combination.innerHTML = 'Ctrl + Shift';
    this.change.append(this.combination);
    this.textarea.cols = '50';
    this.textarea.rows = '5';
    this.textarea.classList.add('textarea');
    this.textarea.id = 'textarea';
    this.textarea.name = 'textarea';
    this.keyboard.classList.add('keyboard');
    for (const row in keyContent[this.setCode]) {
      const rowKey = document.createElement('div');
      rowKey.classList.add('row');
      rowKey.classList.add(row);
      for (let i = 0; i < keyContent[this.setCode][row].length; i += 1) {
        const key = document.createElement('div');
        key.classList.add('key');
        key.innerHTML = keyContent[this.setCode][row][i];
        if (row === 'row1') {
          if (i === 13) key.classList.add('key-backspace');
        } else if (row === 'row2') {
          if (i === 0) key.classList.add('key-tab');
          if (i === 14) key.classList.add('key-lang');//
        } else if (row === 'row3') {
          if (i === 0) key.classList.add('key-capslock');
          if (i === 12) key.classList.add('key-enter');
        } else if (row === 'row4') {
          if (i === 0) key.classList.add('key-shift-left');
          if (i === 11) key.classList.add('key-up');
          if (i === 12) key.classList.add('key-shift-right');
        } else if (row === 'row5') {
          if (i === 0) key.classList.add('key-ctrl-left');
          if (i === 1) key.classList.add('key-win');
          if (i === 2) key.classList.add('key-alt-left');
          if (i === 3) key.classList.add('key-space');
          if (i === 4) key.classList.add('key-alt-right');
          if (i === 5) key.classList.add('key-left');
          if (i === 6) key.classList.add('key-down');
          if (i === 7) key.classList.add('key-right');
          if (i === 8) key.classList.add('key-ctrl-right');
        }
        rowKey.append(key);
      }
      this.keyboard.append(rowKey);
    }
    this.wrapper.append(this.title);
    this.wrapper.append(this.made);
    this.wrapper.append(this.change);
    this.wrapper.append(this.textarea);
    this.wrapper.append(this.keyboard);
    this.root.append(this.wrapper);//
  }

  changeKeyLabel(set) { // set = 'en', 'ru', 'en-shift', 'ru-shift'
    for (const row in keyContent[set]) {
      const line = this.keyboard.querySelector(`.${row}`);
      const lineNodes = line.childNodes;
      for (let i = 0; i < keyContent[set][row].length; i += 1) {
        const key = lineNodes[i];
        if ((keyContent.code[row][i].includes('Key') || keyContent.code[row][i].includes('Bracket')
        || keyContent.code[row][i].includes('Semicolon') || keyContent.code[row][i].includes('Quote')) && this.capsOn) {
          if (set === 'en') key.innerHTML = keyContent['en-shift'][row][i];
          if (set === 'en-shift') key.innerHTML = keyContent.en[row][i];
          if (set === 'ru') key.innerHTML = keyContent['ru-shift'][row][i];
          if (set === 'ru-shift') key.innerHTML = keyContent.ru[row][i];
        } else {
          key.innerHTML = keyContent[set][row][i];
        }
      }
    }
  }

  changeLang() {
    this.setCode === 'en' ? this.setCode = 'ru' : this.setCode = 'en';
    localStorage.setItem('language', this.setCode);
    this.changeKeyLabel(this.setCode);
  }

  addListwner() {
    this.keyboard.addEventListener('click', (e) => this.keyboardClick(e));
    document.addEventListener('keydown', (e) => this.keyDown(e));
    document.addEventListener('keyup', (e) => this.keyUp(e));
  }

  changeShiftOn() {
    if (this.setCode !== 'en-shift' && this.setCode !== 'ru-shift') {
      if (this.setCode === 'en') {
        this.setCode = 'en-shift';
      } else if (this.setCode === 'ru') {
        this.setCode = 'ru-shift';
      } else this.setCode = 'en-shift';
      this.changeKeyLabel(this.setCode);
    }
  }

  changeShiftOff() {
    if (this.setCode !== 'en' && this.setCode !== 'ru') {
      if (this.setCode === 'en-shift') {
        this.setCode = 'en';
      } else if (this.setCode === 'ru-shift') {
        this.setCode = 'ru';
      } else this.setCode = 'en';
      this.changeKeyLabel(this.setCode);
    }
  }

  keyDown(e) {
    if (e.code !== 'F5') {
      e.preventDefault();
      this.pressedKey.add(e.code);
      if ((this.pressedKey.has('ShiftLeft') && this.pressedKey.has('ControlLeft'))
        || (this.pressedKey.has('ShiftRight') && this.pressedKey.has('ControlRight'))) {
        this.changeLang();
        this.pressedKey.clear();
      }
      const line = this.keyboard.querySelector(`.${this.findKeyCode(e.code)[0]}`);
      const lineNodes = line.childNodes;
      const keyDown = lineNodes[this.findKeyCode(e.code)[1]];
      keyDown.classList.add('active');
      if (keyDown.classList.contains('key-enter')) {
        this.textarea.innerHTML = `${this.textarea.innerHTML}\n`;
      } else if (keyDown.classList.contains('key-backspace')) {
        this.textarea.innerHTML = this.textarea.innerHTML.slice(0, -1);
      } else if (keyDown.classList.contains('key-tab')) {
        this.textarea.innerHTML = `${this.textarea.innerHTML}    `;
      } else if (keyDown.classList.contains('key-capslock') || keyDown.classList.contains('key-ctrl-left')
      || keyDown.classList.contains('key-win') || keyDown.classList.contains('key-alt-left')
      || keyDown.classList.contains('key-alt-right') || keyDown.classList.contains('key-ctrl-right')) {
        //
      } else if (keyDown.classList.contains('key-shift-left')
      || keyDown.classList.contains('key-shift-right')) {
        this.changeShiftOn();
      } else if (keyDown.classList.contains('key-lang')) {
        this.changeLang();
      } else {
        this.textarea.innerHTML += keyDown.innerHTML;
      }
    }
  }

  keyUp(e) {
    if (e.code !== 'F5') {
      e.preventDefault();
      this.pressedKey.delete(e.code);
      const line = this.keyboard.querySelector(`.${this.findKeyCode(e.code)[0]}`);
      const lineNodes = line.childNodes;
      const keyDown = lineNodes[this.findKeyCode(e.code)[1]];
      keyDown.classList.remove('active');
      if (keyDown.classList.contains('key-shift-left')
      || keyDown.classList.contains('key-shift-right')) {
        this.changeShiftOff();
      } else if (keyDown.classList.contains('key-capslock')) {
        if (this.capsOn) {
          this.capsOn = false;
          this.changeKeyLabel(this.setCode);
        } else {
          this.capsOn = true;
          keyDown.classList.add('active');
          this.changeKeyLabel(this.setCode);
        }
      }
    }
  }

  findKeyCode(keyCode) {
    for (const row in keyContent.code) {
      for (let i = 0; i < keyContent.code[row].length; i += 1) {
        if (keyContent.code[row][i] === keyCode) {
          return [row, i];
        }
      }
    }
  }

  keyboardClick(e) {
    if (e.target.classList.contains('key')) {
      if (e.target.classList.contains('key-enter')) {
        this.textarea.innerHTML = `${this.textarea.innerHTML}\n`;
      } else if (e.target.classList.contains('key-backspace')) {
        this.textarea.innerHTML = this.textarea.innerHTML.slice(0, -1);
      } else if (e.target.classList.contains('key-tab')) {
        this.textarea.innerHTML = `${this.textarea.innerHTML}    `;
      } else if (e.target.classList.contains('key-capslock')) {
        if (this.capsOn) {
          this.capsOn = false;
          e.target.classList.remove('active');
          this.changeKeyLabel(this.setCode);
        } else {
          this.capsOn = true;
          e.target.classList.add('active');
          this.changeKeyLabel(this.setCode);
        }
      } else if (e.target.classList.contains('key-shift-left')
      || e.target.classList.contains('key-shift-right')) {
        if (this.setCode.includes('shift')) {
          this.changeShiftOff();
          e.target.classList.remove('active');
        } else {
          this.changeShiftOn();
          e.target.classList.add('active');
        }
      } else if (e.target.classList.contains('key-lang')) {
        this.changeLang();
      } else if (e.target.classList.contains('key-ctrl-left') || e.target.classList.contains('key-ctrl-right')) {
        if (this.setCode.includes('shift')) { // Pressed Shift 
          this.changeShiftOff();
          const shiftLeftTemp = document.querySelector('.key-shift-left');
          const shiftRightTemp = document.querySelector('.key-shift-right');
          shiftLeftTemp.classList.remove('active');
          shiftRightTemp.classList.remove('active');
          this.changeLang();
          this.pressedKey.clear();
        }
      } else if (e.target.classList.contains('key-win') || e.target.classList.contains('key-alt-left')
      || e.target.classList.contains('key-alt-right')) {
        //
      } else {
        this.textarea.innerHTML += e.target.innerHTML;
      }
    }
  }
}

const keyboard = new Keyboard();
keyboard.fillHtml();
keyboard.addListwner();
console.log('- реализована генерация DOM-элементов +20\n- нажатие на кнопку на физической клавиатуре подсвечивает кнопку на виртуальной +10\n- есть переключение между русским и английским языком, а также сохранение выбранного языка +15\n- клики мышкой по кнопкам на виртуальной клавиатуре или нажатие на кнопки физической клавиатуры, выводят символы в инпут (textarea) +15- реализована анимация нажатия на кнопку +15\n- использование в коде фишек стандарта ES6 и выше (classes) +15\n- использование eslint +10\n- требования к репозиторию, коммитам и PR выполнены: +10\nИтого: 110 баллов');
