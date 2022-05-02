const keyContent = {
  'en': {
    'row1': ['&acute;', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    'row2': ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '&bsol;', 'Del'],
    'row3': ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '&grave;', 'Enter'],
    'row4': ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'Shift'],
    'row5': ['Ctrl', 'Win', 'Alt', '', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl']
  }
}

class Keyboard {
  constructor(name) {
    this.name = name;
  }

  fillHtml() {
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
    for (let row in keyContent.en) {
      // console.log(keyContent.en[row]); //[...]
      const rowKey = document.createElement('div');
      rowKey.classList.add('row');
      rowKey.classList.add(row);
      for (let i = 0; i < keyContent.en[row].length; i++){
        // console.log(i); // 0123...
        const key = document.createElement('div');
        key.classList.add('key');
        key.innerHTML = keyContent.en[row][i];
        if (row === 'row1') {
          if (i === 13) key.classList.add('key-backspace');
        } else if (row === 'row2') {
          if (i === 0) key.classList.add('key-tab');
          if (i === 14) key.classList.add('key-del');
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
}





















































const keyboard = new Keyboard();
keyboard.fillHtml();