class View {
  constructor(body, input) {
    this.body = body;
    this.input = input;
  }
  onKeyPress(cb) {
    this.body.onkeypress = cb;
  }
  onLoad(cb) {
    this.body.onload = cb;
  }
  onInput(cb) {
    this.input.onSubmit = cb;
  }
}

class PaletteObject {
  constructor(input, container, lockIcon, copyIcon, arrowIcon) {
    this.input = input;
    this.container = container;
    this.lockIcon = lockIcon;
    this.copyIcon = copyIcon;
    this.arrowIcon = arrowIcon;
  }
}

class PaletteController {
  constructor(paletteObjectArr, keyPress, inputField) {
    this.paletteObjectArr = paletteObjectArr;
    this.keyPress = keyPress;
    this.keyPress.onKeyPress(this.paletteShuffle.bind(this));
    this.keyPress.onLoad(this.load.bind(this));
    this.inputField = inputField;
    this.inputField.onInput(this.input.bind(this));
  }

  paletteShuffle(event) {
    if (event.keyCode == 32) {
      for (let i in this.paletteObjectArr) {
        let hex = Color.randomColor().colorCode;
        const arrItem = this.paletteObjectArr[i];
        arrItem.input.value = hex;
        arrItem.container.style.backgroundColor = hex;
      }
    }
  }

  load() {
    for (let i in this.paletteObjectArr) {
      let hex = Color.randomColor().colorCode;
      const arrItem = this.paletteObjectArr[i];
      arrItem.input.value = hex;
      arrItem.container.style.backgroundColor = hex;
    }
  }

  //the submit event is reloading the page, triggering the onLoad method - perhaps it's a bug because of using document.body (too broad?)
  input(event) {
    event.preventDefault();
    console.log(this.inputField.value);
    for (let i in this.paletteObjectArr) {
      const arrItem = this.paletteObjectArr[i];
      arrItem.container.style.backgroundColor = arrItem.input.value;
    }
  }
}

//   setColor(){
//     for(let i in this.paletteObjectArr){
//      const arrItem = this.paletteObjectArr[i];
//      arrItem.input.value =
//     }
// }

let create = new PaletteController(
  [
    new PaletteObject(
      document.getElementById("box-1-hex"),
      document.getElementById("box-1"),
      document.getElementById("lock-1"),
      document.getElementById("copy-1"),
      document.getElementById("arrow-1")
    ),
    new PaletteObject(
      document.getElementById("box-2-hex"),
      document.getElementById("box-2"),
      document.getElementById("lock-2"),
      document.getElementById("copy-2"),
      document.getElementById("arrow-2")
    ),
    new PaletteObject(
      document.getElementById("box-3-hex"),
      document.getElementById("box-3"),
      document.getElementById("lock-3"),
      document.getElementById("copy-3"),
      document.getElementById("arrow-3")
    ),
    new PaletteObject(
      document.getElementById("box-4-hex"),
      document.getElementById("box-4"),
      document.getElementById("lock-4"),
      document.getElementById("copy-4"),
      document.getElementById("arrow-4")
    ),
    new PaletteObject(
      document.getElementById("box-5-hex"),
      document.getElementById("box-5"),
      document.getElementById("lock-5"),
      document.getElementById("copy-5"),
      document.getElementById("arrow-5")
    ),
  ],
  new View(document.body, document.getElementById("box-5-hex")),
  new View(document.body, document.getElementById("box-5-hex"))
);
