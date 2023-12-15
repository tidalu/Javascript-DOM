// Your JavaScript code goes here

class ProgressBar {
  constructor(element, initialvalue = 0) {
    this.valueElem = element.querySelector('.progress-bar-value');
    this.fillElem = element.querySelector('.progress-bar-fill');
    this.setValue(initialvalue);
    // console.log(this.valueElem, this.fillElem);
  }

  setValue(newValue) {
    newValue < 0 ? (newValue = 0) : newValue;
    newValue > 100 ? (newValue = 100) : newValue;

    this.value = newValue;
    this.update();
  }

  update() {
    const percentage = this.value + '%';

    this.fillElem.style.width = percentage;
    this.valueElem.textContent = percentage;
  }
}

const pd1 = new ProgressBar(document.querySelector('.progress-bar'), 75);
