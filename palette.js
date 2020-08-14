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

class Palette {
  constructor(
    paletteOneInput,
    paletteOne,
    paletteTwoInput,
    paletteTwo,
    paletteThreeInput,
    paletteThree,
    paletteFourInput,
    paletteFour,
    paletteFiveInput,
    paletteFive,
    submission
  ) {
    this.paletteOneInput = paletteOneInput;
    this.paletteOne = paletteOne;
    this.paletteTwoInput = paletteTwoInput;
    this.paletteTwo = paletteTwo;
    this.paletteThreeInput = paletteThreeInput;
    this.paletteThree = paletteThree;
    this.paletteFourInput = paletteFourInput;
    this.paletteFour = paletteFour;
    this.paletteFiveInput = paletteFiveInput;
    this.paletteFive = paletteFive;
    this.submission = submission;
    this.submission.onSubmit(this.submit.bind(this));
    this.submission.onLoad(this.load.bind(this));
  }

  submit(event) {
    if (event.keyCode == 32) {
      let hex = Color.randomColor().colorCode;
      this.paletteOne.style.backgroundColor = hex;
      this.paletteOneInput.value = hex;

      hex = Color.randomColor().colorCode;
      this.paletteTwo.style.backgroundColor = hex;
      this.paletteTwoInput.value = hex;

      hex = Color.randomColor().colorCode;
      this.paletteThree.style.backgroundColor = hex;
      this.paletteThreeInput.value = hex;

      hex = Color.randomColor().colorCode;
      this.paletteFour.style.backgroundColor = hex;
      this.paletteFourInput.value = hex;

      hex = Color.randomColor().colorCode;
      this.paletteFive.style.backgroundColor = hex;
      this.paletteFiveInput.value = hex;
    }
  }

  load() {
    let hex = Color.randomColor().colorCode;
    this.paletteOne.style.backgroundColor = hex;
    this.paletteOneInput.value = hex;

    hex = Color.randomColor().colorCode;
    this.paletteTwo.style.backgroundColor = hex;
    this.paletteTwoInput.value = hex;

    hex = Color.randomColor().colorCode;
    this.paletteThree.style.backgroundColor = hex;
    this.paletteThreeInput.value = hex;

    hex = Color.randomColor().colorCode;
    this.paletteFour.style.backgroundColor = hex;
    this.paletteFourInput.value = hex;
    hex = Color.randomColor().colorCode;
    this.paletteFive.style.backgroundColor = hex;
    this.paletteFiveInput.value = hex;
  }
}

let create = new Palette(
  document.getElementById("box-1-hex"),
  document.getElementById("box-1"),
  document.getElementById("box-2-hex"),
  document.getElementById("box-2"),
  document.getElementById("box-3-hex"),
  document.getElementById("box-3"),
  document.getElementById("box-4-hex"),
  document.getElementById("box-4"),
  document.getElementById("box-5-hex"),
  document.getElementById("box-5"),
  new View(document.body)
);
