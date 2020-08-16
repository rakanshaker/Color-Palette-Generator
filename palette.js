class View {
  constructor(body) {
    this.body = body;
  }
  onSubmit(cb) {
    this.body.onkeypress = cb;
  }
  onLoad(cb) {
    this.body.onload = cb;
    console.log("loaded");
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
  constructor(paletteObjectArr, submission) {
    this.paletteObjectArr = paletteObjectArr;
    this.submission = submission;
    this.submission.onSubmit(this.submit.bind(this));
    this.submission.onLoad(this.load.bind(this));
  }

  submit(event) {
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
}

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
  new View(document.body)
);
