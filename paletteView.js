class PaletteView {
  constructor(input, form, container, lockIcon, copyIcon, arrowIcon) {
    this.input = input;
    this.form = form;
    this.container = container;
    this.lockIcon = lockIcon;
    this.copyIcon = copyIcon;
    this.arrowIcon = arrowIcon;
    this.setupFormAction();
    this.copyToClipBoard();
    this.arrowClick();
  }

  setupFormAction() {
    this.form.onsubmit = (ev) => {
      ev.preventDefault();
      this.container.style.backgroundColor = this.input.value;
    };
  }

  setColor(hexColor) {
    this.input.value = hexColor.colorCode;
    this.container.style.backgroundColor = hexColor.colorCode;
    if (hexColor.isDark()) {
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
    this.arrowIcon.onclick = () => {
      this.setColor(new Color(randomHex()));
    };
    console.log("arrow click");
  }
}
