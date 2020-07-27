
class Color {
    constructor(colorCode) {
      this.colorCode = colorCode;
    }
    static randomColor() {
      return new Color(random_hex())
    }

    //add compliment method
    getCompliment(){
      let hex =this.colorCode;
     let compliment_hex= hex.slice(2) + hex.slice(0,2);
      console.log(compliment_hex)
      return compliment_hex;
      //onsubmit create a new color box with complimentary color
    }

    altCompliment(){
      let hex =this.colorCode;
     let compliment_hex= hex.slice(3) + hex.slice(0,3);
      console.log(compliment_hex)
      return compliment_hex;
      //onsubmit create a new color box with complimentary color
    }
    inverse_hex(){
      let hex = ""
      for(let i=this.colorCode.length-1; i>=0; i--){
          hex+=this.colorCode[i];
      }
      console.log(hex)
      return hex
  }
  }

