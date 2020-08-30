class PaletteView {
  constructor(
    input,
    form,
    container,
    lockIcon,
    copyIcon,
    arrowIcon,
    lockState
  ) {
    this.input = input;
    this.form = form;
    this.container = container;
    this.lockIcon = lockIcon;
    this.copyIcon = copyIcon;
    this.arrowIcon = arrowIcon;
    this.lockState = lockState;
    this.setupFormAction();
    this.copyToClipBoard();
    this.arrowClick();
    this.lockClick();
  }

  setupFormAction() {
    this.form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      //check if it's a proper hex
      if (isThisHex(this.input.value)) {
        let inputColor = new Color(this.input.value);
        this.container.style.backgroundColor = inputColor.colorCode;
        this.checkDark(inputColor);
      } else {
        //if it's not hex, return the color of the container back to input (in hex form)
        this.input.value = RGBToHex(this.container.style.backgroundColor);
      }
    });
  }

  setColor(hexColor) {
    this.input.value = hexColor.colorCode;
    this.container.style.backgroundColor = hexColor.colorCode;
    this.checkDark(hexColor);
  }
  checkDark(hexInput) {
    if (hexInput.isDark()) {
      this.lightenIcons();
    } else {
      this.normalizeIcons();
    }
  }

  lightenIcons() {
    let lightColor = "rgba(255, 255, 255, 0.5)";
    this.lockIcon.style.color = lightColor;
    this.copyIcon.style.color = lightColor;
    this.arrowIcon.style.color = lightColor;
    this.input.style.color = lightColor;
  }
  normalizeIcons() {
    let normalColor = "rgba(0, 0, 0)";
    this.lockIcon.style.color = normalColor;
    this.copyIcon.style.color = normalColor;
    this.arrowIcon.style.color = normalColor;
    this.input.style.color = normalColor;
  }

  copyToClipBoard() {
    this.copyIcon.onclick = () => {
      let copyText = this.input;
      copyText.focus();
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
      this.snackBar();
    };
  }
  snackBar() {
    //from https://www.w3schools.com/howto/howto_js_snackbar.asp
    let x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  }
  arrowClick() {
    this.arrowIcon.addEventListener("click", () => {
      this.setColor(new Color(randomHex()));
    });
  }

  lockClick() {
    this.lockIcon.onclick = () => {
      if (this.lockState === true) {
        this.lockIcon.className = "fas fa-lock";
        this.arrowIcon.style.pointerEvents = "none";
        this.form.style.pointerEvents = "none";
        this.lockState = false;
      } else {
        this.lockIcon.className = "fas fa-unlock";
        this.arrowIcon.style.pointerEvents = "auto";
        this.form.style.pointerEvents = "auto";
        this.lockState = true;
      }
    };
  }
}
