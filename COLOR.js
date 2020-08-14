class Color {
  constructor(colorCode) {
    this.colorCode = colorCode;
  }
  static randomColor() {
    return new Color(random_hex());
  }

  isDark() {
    //https://stackoverflow.com/questions/12043187/how-to-check-if-hex-color-is-too-black
    //var c = c.substring(1); // strip #
    var c = this.colorCode;
    var rgb = parseInt(c, 16); // convert rrggbb to decimal
    var r = (rgb >> 16) & 0xff; // extract red
    var g = (rgb >> 8) & 0xff; // extract green
    var b = (rgb >> 0) & 0xff; // extract blue

    var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
    console.log(luma);
    if (luma < 40) {
      return true;
    }

    return false;
  }

  //add compliment method
  getCompliment() {
    let hex = this.colorCode;
    let compliment_hex = hex.slice(2) + hex.slice(0, 2);
    console.log(compliment_hex);
    return compliment_hex;
    //onsubmit create a new color box with complimentary color
  }

  altCompliment() {
    let hex = this.colorCode;
    let compliment_hex = hex.slice(3) + hex.slice(0, 3);
    console.log(compliment_hex);
    return compliment_hex;
    //onsubmit create a new color box with complimentary color
  }
  inverse_hex() {
    let hex = "";
    for (let i = this.colorCode.length - 1; i >= 0; i--) {
      hex += this.colorCode[i];
    }
    console.log(hex);
    return hex;
  }
}
