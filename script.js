const keyContent = {
  'en': {
    'row1': ['&acute;', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    'row2': ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '&bsol;', 'EN'],
    'row3': ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '&grave;', 'Enter'],
    'row4': ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'Shift'],
    'row5': ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl']
  },
  'en-shift': {
    'row1': ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
    'row2': ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'EN'],
    'row3': ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
    'row4': ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&uarr;', 'Shift'],
    'row5': ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl']
  },
  'ru': {
    'row1': ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    'row2': ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '&bsol;', 'RU'],
    'row3': ['Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
    'row4': ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '&uarr;', 'Shift'],
    'row5': ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl']
  },
  'ru-shift': {
    'row1': ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
    'row2': ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '|', 'RU'],
    'row3': ['Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
    'row4': ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', '&uarr;', 'Shift'],
    'row5': ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl']
  },
  'code': {
    'row1': ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    'row2': ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
    'row3': ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
    'row4': ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
    'row5': ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']
  }
}

class Keyboard {
  constructor() {
    this.capslock = false;
    this.setCode = 'en';
    this.shiftPres = false;
    this.pressedKey = new Set();
  }

  fillHtml() {
    localStorage.getItem('language') !== undefined ? this.setCode = localStorage.getItem('language') : this.setCode = 'en';
    this.root = document.getElementById('root');
    this.wrapper = document.createElement('div');
    this.title = document.createElement('h1');
    this.made = document.createElement('p');
    this.change = document.createElement('p');
    this.combination = document.createElement('strong');
    this.textarea = document.createElement('textarea')
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
    for (let row in keyContent[this.setCode]) {
      // console.log(keyContent.en[row]); //[...]
      const rowKey = document.createElement('div');
      rowKey.classList.add('row');
      rowKey.classList.add(row);
      for (let i = 0; i < keyContent[this.setCode][row].length; i++){
        // console.log(i); // 0123...
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
    for (let row in keyContent[set]) {
      const line = this.keyboard.querySelector(`.${row}`);
      let lineNodes = line.childNodes;
      for (let i = 0; i < keyContent[set][row].length; i++){
        const key = lineNodes[i];
        key.innerHTML = keyContent[set][row][i];
      }
    }
  }

  changeLang() {
    this.setCode === 'en' ? this.setCode = 'ru' : this.setCode = 'en';
    localStorage.setItem('language', this.setCode);
    this.changeKeyLabel(this.setCode);
  }

  test() {
    console.log(this.keyboard);
    this.textarea.innerHTML = 'hjdhfjd';
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
      // console.log(this.pressedKey);
      if ((this.pressedKey.has('ShiftLeft') && this.pressedKey.has('ControlLeft')) || 
        this.pressedKey.has('ShiftRight') && this.pressedKey.has('ControlRight')) {
        this.changeLang();
        this.pressedKey.clear();
      }
      //Оставшиеся shift, alt, ctrl, caps lock, space должны работать как в реальной клавиатуре
      // console.log(`key=${e.key}`);
      // console.log(`code=${e.code}`);
      // console.log(e);
      // console.log(this.findKeyCode(e.code)[0]);
      // this.findKeyCode(e.code); // ['row', 0...12]
      // const ddd = this.keyboard.querySelector('.key');
      // ddd.classList.add('active');
      const line = this.keyboard.querySelector(`.${this.findKeyCode(e.code)[0]}`);
      let lineNodes = line.childNodes;
      const keyDown = lineNodes[this.findKeyCode(e.code)[1]];
      keyDown.classList.add('active');
      if (keyDown.classList.contains('key-enter')) {
        this.textarea.innerHTML = `${this.textarea.innerHTML}\n`;
      } else if (keyDown.classList.contains('key-backspace')) {
        this.textarea.innerHTML = this.textarea.innerHTML.slice(0, -1);
      } else if (keyDown.classList.contains('key-tab')) {
        this.textarea.innerHTML = `${this.textarea.innerHTML}    `;
      } else if (keyDown.classList.contains('key-capslock')) {
        //
      } else if (keyDown.classList.contains('key-shift-left') || 
      keyDown.classList.contains('key-shift-right')) {
        this.changeShiftOn();
      } else if (keyDown.classList.contains('key-lang')) {
        this.changeLang();
      }  else if (keyDown.classList.contains('key-ctrl-left')) {
        // 
      } else if (keyDown.classList.contains('key-win')) {
        // 
      } else if (keyDown.classList.contains('key-alt-left')) {
        // 
      } else if (keyDown.classList.contains('key-alt-right')) {
        // 
      } else if (keyDown.classList.contains('key-ctrl-right')) {
        // 
      } else {
        this.textarea.innerHTML = this.textarea.innerHTML + keyDown.innerHTML;
      }
    }
  }

  keyUp(e) {
    if (e.code !== 'F5') {
      e.preventDefault();
      this.pressedKey.delete(e.code);
      //Оставшиеся shift, alt, ctrl, caps lock, space должны работать как в реальной клавиатуре
      // this.findKeyCode(e.code); // ['row', 0...12]
      // console.log(`key=${e.key}`);
      // console.log(`code=${e.code}`);
      const line = this.keyboard.querySelector(`.${this.findKeyCode(e.code)[0]}`);
      let lineNodes = line.childNodes;
      const keyDown = lineNodes[this.findKeyCode(e.code)[1]];
      keyDown.classList.remove('active');
      if (keyDown.classList.contains('key-shift-left') || 
      keyDown.classList.contains('key-shift-right')) {
      this.changeShiftOff();
      }
    }
  }

  findKeyCode(keyCode) {
    for (let row in keyContent.code) {
      // console.log(row);
      for (let i = 0; i < keyContent.code[row].length; i++) {
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
        //
      } else if (e.target.classList.contains('key-shift-left')) {
        // 
      } else if (e.target.classList.contains('key-lang')) {
        this.changeLang();
      } else if (e.target.classList.contains('key-shift-right')) {
        // 
      } else if (e.target.classList.contains('key-ctrl-left')) {
        // 
      } else if (e.target.classList.contains('key-win')) {
        // 
      } else if (e.target.classList.contains('key-alt-left')) {
        // 
      } else if (e.target.classList.contains('key-alt-right')) {
        // 
      } else if (e.target.classList.contains('key-ctrl-right')) {
        // 
      } else {
        this.textarea.innerHTML = this.textarea.innerHTML + e.target.innerHTML;
      }
      
      // console.log(e.target.innerHTML);
    }
    

  }
}





















































const keyboard = new Keyboard();
keyboard.fillHtml();
keyboard.test();
keyboard.addListwner();