class Color {
  constructor(colorCode) {
    this.colorCode = colorCode;
  }
  static randomColor() {
    return new Color(randomHex());
  }

  isDark() {
    //https://stackoverflow.com/questions/12043187/how-to-check-if-hex-color-is-too-black
    //var c = c.substring(1); // strip #
    let c = this.colorCode;
    let rgb = parseInt(c, 16); // convert rrggbb to decimal
    let r = (rgb >> 16) & 0xff; // extract red
    let g = (rgb >> 8) & 0xff; // extract green
    let b = (rgb >> 0) & 0xff; // extract blue

    let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
    console.log(luma);
    if (luma < 55) {
      return true;
    }

    return false;
  }

  //add compliment method
  getCompliment() {
    let hex = this.colorCode;
    let complimentHex = hex.slice(2) + hex.slice(0, 2);
    console.log(complimentHex);
    return complimentHex;
    //onsubmit create a new color box with complimentary color
  }

  altCompliment() {
    let hex = this.colorCode;
    let complimentHex = hex.slice(3) + hex.slice(0, 3);
    console.log(complimentHex);
    return complimentHex;
    //onsubmit create a new color box with complimentary color
  }
  inverseHex() {
    let hex = "";
    for (let i = this.colorCode.length - 1; i >= 0; i--) {
      hex += this.colorCode[i];
    }
    console.log(hex);
    return hex;
  }
}
