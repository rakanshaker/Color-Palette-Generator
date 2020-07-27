//-----------Variables-----------//
// const base_color_input = document.getElementById("base-color-input")
// const base_color_display = document.getElementById("base-box")
// const palette_1 = document.getElementById("box-1")
// const palette_2 = document.getElementById("box-2")
// const palette_3 = document.getElementById("box-3")
// const random_button = document.getElementById("random-button")
// const submit_button = document.getElementById("submit-base-color")
// const form = document.getElementById("base-color-form")
// const style_label = document.getElementById("style_label")

let style = "primary"

//-------------EVENT LISTENERS----------//
class View{
    constructor(form, random_button){
        this.form = form;
        this.random_button = random_button;
    }
    on_submit(cb){
        this.form.onsubmit = cb;
    }
    random_click(cb){
        this.random_button.onclick = cb;
    }
}

// form.onsubmit = submit;
// random_button.onclick = submit_random;

//-----------FUNCTIONS--------------//
class Palette{
    constructor(base_color_input, base_color_display, palette_1, palette_2, palette_3, random_button, submit_button, form, style_label, submission, random_sub){

        this.base_color_input = base_color_input;
        this.base_color_display = base_color_display;
        this.palette_1 = palette_1;
        this.palette_2 = palette_2;
        this.palette_3 = palette_3;
        this.random_button = random_button;
        this.submit_button = submit_button;
        this.form = form;
        this.style_label = style_label;
        this.submission = submission;
        this.submission.on_submit(this.submit.bind(this))
        this.random_sub = random_sub
        this.random_sub.random_click(this.submit_random.bind(this))

    }

    submit(event){
        
        const color_submission = new Color(`${this.base_color_input.value}`).colorCode;
        console.log('hello')
        this.base_color_display.style.backgroundColor = color_submission;
       event.preventDefault();
        this.update_palette();
    }
    
    update_palette(){
        this.palette_1.style.backgroundColor = new Color(`${this.base_color_input.value}`).inverse_hex(`${this.base_color_input.value}`);
        this.palette_2.style.backgroundColor = new Color(`${this.base_color_input.value}`).getCompliment(this.colorCode)
        this.palette_3.style.backgroundColor = new Color(`${this.base_color_input.value}`).altCompliment(this.colorCode)
    }
    
    submit_random(event){
        const randomColor = Color.randomColor();
        //randomColor is an instance of Color
        //we should be able to call randomColor.getCompliment() to get inverse hex value
        this.base_color_display.style.backgroundColor = randomColor.colorCode;
        this.base_color_input.value = randomColor.colorCode
        // console.log(base_color_display.style.backgroundColor);
        event.preventDefault();
    }
    

}



let create = new Palette(
    document.getElementById("base-color-input"), 
    document.getElementById("base-box"), 
    document.getElementById("box-1"), 
    document.getElementById("box-2"),
    document.getElementById("box-3"),
    document.getElementById("random-button"),
    document.getElementById("submit-base-color"),
    document.getElementById("base-color-form"),
    document.getElementById("style_label"),
    new View (document.getElementById("base-color-form"), document.getElementById("random-button")),
    new View (document.getElementById("base-color-form"), document.getElementById("random-button")),

);




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



/****
 * TODO
 * try organizing OOP 
 * class based
 * Make this into Controller
 * 
 * palette js is controller, html = view, model
 * 
 * try copying controller from tic tac toe and reusing it for this case
 */