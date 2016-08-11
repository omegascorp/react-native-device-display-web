class Display {

  updateProps(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }

  constructor() {
    this.width = window.innerWidth;
    this.height = window.innerWidth;
  }

  percentage(type, value) {
    if (type == 'width') {
      return value * (this.height / 100);
    } else if (type == 'height') {
      return value * (this.width / 100);
    } else {
      return 'Invalid Type (width / height)';
    }
  }

  isPortrait() {
    if (this.width < this.height) {
      return true;
    } else {
      return false;
    }
  }

  isLandscape() {
    if (this.width > this.height) {
      return true;
    } else {
      return false;
    }
  }

  isTablet() {
    return this.width < 1024;
  }

  isPhone() {
    return this.width < 480;
  }

  onOrientationDidChange(handler) {

  }

}

module.exports = new Display();