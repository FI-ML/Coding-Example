import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-example-three',
  templateUrl: './example-three.component.html',
  styleUrls: ['./example-three.component.css']
})
export class ExampleThreeComponent implements OnInit {

  firstPartEmail = 'The first Part of Email';

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeForm();
    this.loginForm.controls['secondEmail'].disable();
    this.loginForm.controls['thirdEmail'].disable();
  }


  private initializeForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      secondEmail: [''],
      thirdEmail: [''],
    })
  }

  get email() {
    return this.loginForm.get('email');
  }

  isValidEmail(): boolean {
    const control: AbstractControl | null = this.loginForm.get('email');
    return control != null ? control.valid : false;
  }

  getFirstPart() {
    let value = this.firstPartEmail = this.loginForm.get('email')?.value;
    return value.split('@')[0];
  }

  getSecondPart() {
    let value = this.firstPartEmail = this.loginForm.get('email')?.value;
    return value.includes('@') ? value.split('@')[1] : '';
  }
}
