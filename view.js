class View {
  constructor(body) {
    this.body = body;
  }
  onKeyPress(cb) {
    this.body.onkeypress = cb;
  }
  onLoad(cb) {
    this.body.onload = cb;
  }
}
