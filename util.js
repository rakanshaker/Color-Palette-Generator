const hex_table = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function random_hex(){
    let new_hex = "";
        for(let i=0; i<6; i++){
          let random = hex_table[Math.floor(Math.random()*16)];
          new_hex+= random;
        }
        console.log(new_hex)
        return new_hex
    }
