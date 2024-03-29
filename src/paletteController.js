class PaletteController {
  constructor(paletteObjectArr, keyPress) {
    this.paletteObjectArr = paletteObjectArr;
    this.keyPress = keyPress;
    this.keyPress.onKeyPress(this.submit.bind(this));
    this.keyPress.onLoad(this.load.bind(this));
  }
  paletteShuffle() {
    for (let i in this.paletteObjectArr) {
      const arrItem = this.paletteObjectArr[i];
      if (arrItem.lockState === true) {
        arrItem.setColor(new Color(randomHex()));
      } else {
      }
    }
  }

  submit() {
    if (event.keyCode == 32) {
      this.paletteShuffle();
    }
  }

  load() {
    this.paletteShuffle();
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
      document.getElementById("arrow-1"),
      true
    ),
    new PaletteView(
      document.getElementById("box-2-hex"),
      document.getElementById("form-2"),
      document.getElementById("box-2"),
      document.getElementById("lock-2"),
      document.getElementById("copy-2"),
      document.getElementById("arrow-2"),
      true
    ),
    new PaletteView(
      document.getElementById("box-3-hex"),
      document.getElementById("form-3"),
      document.getElementById("box-3"),
      document.getElementById("lock-3"),
      document.getElementById("copy-3"),
      document.getElementById("arrow-3"),
      true
    ),
    new PaletteView(
      document.getElementById("box-4-hex"),
      document.getElementById("form-4"),
      document.getElementById("box-4"),
      document.getElementById("lock-4"),
      document.getElementById("copy-4"),
      document.getElementById("arrow-4"),
      true
    ),
    new PaletteView(
      document.getElementById("box-5-hex"),
      document.getElementById("form-5"),
      document.getElementById("box-5"),
      document.getElementById("lock-5"),
      document.getElementById("copy-5"),
      document.getElementById("arrow-5"),
      true
    ),
  ],
  new View(document.body)
);
