class View{
    constructor(body){
        this.body = body;
    }
    on_submit(cb){
        this.body.onkeypress = cb;
    }
    on_load(cb){
        this.body.onload = cb
        console.log("loaded")
    }
}

class Palette{
    constructor(palette_1_input, palette_1, palette_2_input, palette_2, palette_3_input, palette_3, palette_4_input, palette_4, palette_5_input, palette_5, submission){

        this.palette_1_input = palette_1_input;
        this.palette_1 = palette_1;
        this.palette_2_input = palette_2_input;
        this.palette_2 = palette_2;
        this.palette_3_input = palette_3_input;
        this.palette_3 = palette_3;
        this.palette_4_input = palette_4_input
        this.palette_4 = palette_4;
        this.palette_5_input = palette_5_input
        this.palette_5 = palette_5;
        this.submission = submission;
        this.submission.on_submit(this.submit.bind(this));
        this.submission.on_load(this.load.bind(this));

    }
    
    submit(event){
        if (event.keyCode == 32){
            let hex = Color.randomColor().colorCode;
            this.palette_1.style.backgroundColor = hex;
            this.palette_1_input.value = hex;

            hex = Color.randomColor().colorCode;
            this.palette_2.style.backgroundColor = hex;
            this.palette_2_input.value = hex;

            hex = Color.randomColor().colorCode;
            this.palette_3.style.backgroundColor = hex;
            this.palette_3_input.value = hex;

            hex = Color.randomColor().colorCode;
            this.palette_4.style.backgroundColor = hex;
            this.palette_4_input.value = hex;

            hex = Color.randomColor().colorCode;
            this.palette_5.style.backgroundColor = hex;
            this.palette_5_input.value = hex;

        }
    }

    load(){
            let hex = Color.randomColor().colorCode;
            this.palette_1.style.backgroundColor = hex;
            this.palette_1_input.value = hex;

            hex = Color.randomColor().colorCode;
            this.palette_2.style.backgroundColor = hex;
            this.palette_2_input.value = hex;

            hex = Color.randomColor().colorCode;
            this.palette_3.style.backgroundColor = hex;
            this.palette_3_input.value = hex;

            hex = Color.randomColor().colorCode;
            this.palette_4.style.backgroundColor = hex;
            this.palette_4_input.value = hex;
            hex = Color.randomColor().colorCode;
            this.palette_5.style.backgroundColor = hex;
            this.palette_5_input.value = hex;

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
    new View (document.body)
);














//-------OLD FUNCTIONS-------//

// function submit(event){
//     //console.log(base_color_input.value)
//     let color_submission = new Color(`${base_color_input.value}`).colorCode;
//     base_color_display.style.backgroundColor = color_submission;
//    event.preventDefault();
//     update_palette();
// }

// function update_palette(){
//     palette_1.style.backgroundColor = new Color(`${base_color_input.value}`).inverse_hex(`${base_color_input.value}`);
//     palette_2.style.backgroundColor = new Color(`${base_color_input.value}`).getCompliment(this.colorCode)
//     palette_3.style.backgroundColor = new Color(`${base_color_input.value}`).altCompliment(this.colorCode)
// }

// function submit_random(event){
//     const randomColor = Color.randomColor();
//     //randomColor is an instance of Color
//     //we should be able to call randomColor.getCompliment() to get inverse hex value
//     base_color_display.style.backgroundColor = randomColor.colorCode;
//     base_color_input.value = randomColor.colorCode
//     // console.log(base_color_display.style.backgroundColor);
//     event.preventDefault();
// }


// submit(event){
//     if (event.keyCode == 32){
//     const color_submission = new Color(`${this.base_color_input.value}`).colorCode;
//     console.log('hello')
//     this.base_color_display.style.backgroundColor = color_submission;
//    event.preventDefault();
//     this.update_palette();
//     }
// }

// update_palette(){
//     this.palette_1.style.backgroundColor = new Color(`${this.base_color_input.value}`).inverse_hex(`${this.base_color_input.value}`);
//     this.palette_2.style.backgroundColor = new Color(`${this.base_color_input.value}`).getCompliment(this.colorCode)
//     this.palette_3.style.backgroundColor = new Color(`${this.base_color_input.value}`).altCompliment(this.colorCode)
// }

// submit_random(event){
//     const randomColor = Color.randomColor();
//     //randomColor is an instance of Color
//     //we should be able to call randomColor.getCompliment() to get inverse hex value
//     this.base_color_display.style.backgroundColor = randomColor.colorCode;
//     this.base_color_input.value = randomColor.colorCode
//     // console.log(base_color_display.style.backgroundColor);
//     event.preventDefault();
// }