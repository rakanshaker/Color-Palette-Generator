class View {
  constructor(body) {
    this.body = body;
  }
  onKeyPress(cb) {
    this.body.onkeypress = cb;
  }
  onLoad(cb) {
    this.body.onload = cb;
  }
}

class PaletteView {
  constructor(input, form, container, lockIcon, copyIcon, arrowIcon) {
    this.input = input;
    this.form = form;
    this.container = container;
    this.lockIcon = lockIcon;
    this.copyIcon = copyIcon;
    this.arrowIcon = arrowIcon;
    this.setupFormAction();
  }

  setupFormAction() {
    this.form.onsubmit = (ev) => {
      ev.preventDefault();
      this.container.style.backgroundColor = this.input.value;
    };
  }
}

class PaletteController {
  constructor(paletteObjectArr, keyPress) {
    this.paletteObjectArr = paletteObjectArr;
    this.keyPress = keyPress;
    this.keyPress.onKeyPress(this.paletteShuffle.bind(this));
    this.keyPress.onLoad(this.load.bind(this));
  }

  paletteShuffle(event) {
    if (event.keyCode == 32) {
      for (let i in this.paletteObjectArr) {
        let hex = Color.randomColor().colorCode;
        const arrItem = this.paletteObjectArr[i];
        arrItem.input.value = hex;
        arrItem.container.style.backgroundColor = hex;
      }
      console.log("shuffle");
    }
  }

  load() {
    for (let i in this.paletteObjectArr) {
      let hex = Color.randomColor().colorCode;
      const arrItem = this.paletteObjectArr[i];
      arrItem.input.value = hex;
      arrItem.container.style.backgroundColor = hex;
    }
    console.log("load");
  }
}

let create = new PaletteController(
  [
    new PaletteView(
      document.getElementById("box-1-hex"),
      document.getElementById("form-1"),
      document.getElementById("box-1"),
      document.getElementById("lock-1"),
      document.getElementById("copy-1"),
      document.getElementById("arrow-1")
    ),
    new PaletteView(
      document.getElementById("box-2-hex"),
      document.getElementById("form-2"),
      document.getElementById("box-2"),
      document.getElementById("lock-2"),
      document.getElementById("copy-2"),
      document.getElementById("arrow-2")
    ),
    new PaletteView(
      document.getElementById("box-3-hex"),
      document.getElementById("form-3"),
      document.getElementById("box-3"),
      document.getElementById("lock-3"),
      document.getElementById("copy-3"),
      document.getElementById("arrow-3")
    ),
    new PaletteView(
      document.getElementById("box-4-hex"),
      document.getElementById("form-4"),
      document.getElementById("box-4"),
      document.getElementById("lock-4"),
      document.getElementById("copy-4"),
      document.getElementById("arrow-4")
    ),
    new PaletteView(
      document.getElementById("box-5-hex"),
      document.getElementById("form-5"),
      document.getElementById("box-5"),
      document.getElementById("lock-5"),
      document.getElementById("copy-5"),
      document.getElementById("arrow-5")
    ),
  ],
  new View(document.body)
);
