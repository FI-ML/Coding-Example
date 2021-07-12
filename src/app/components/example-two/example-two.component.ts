import {Component} from '@angular/core';

@Component({
  selector: 'app-example-two',
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.css']
})
export class ExampleTwoComponent {

  public value = 0;
  public result = 0;

  constructor() {
  }

  sumOfDigits() {
    if (this.value != 0) {
      let value = this.value,
        sum = value
          .toString()
          .split('')
          .map(Number)
          .reduce(function (a, b) {
            return a + b;
          }, 0);

      this.result = sum;
    }

  }
}
