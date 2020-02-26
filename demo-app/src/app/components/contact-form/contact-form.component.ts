import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { map } from 'rxjs/operators';

import { minAgeValidator } from '../../shared/validators/minAgeValidator';
import { phoneOrEmailValidator } from '../../shared/validators/phoneOrEmailValidator';
import { colorNameAsyncValidator } from '../../shared/validators/colorNameAsyncValidator';

// const colorNameAsyncValidator = (httpClient: HttpClient) => (c: AbstractControl) => {

//   return httpClient.get<string[]>('http://localhost:4250/colors?name=' + c.value)
//     .pipe(map(colors => colors.length === 1 ? null : ({ colorName: true })));
// };

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private httpClient: HttpClient) { }

  get nameValid() {

    const c = this.contactForm.get('name');

    return c.errors.required && c.touched;
    // return c?.errors?.required && c?.touched;
    // This gives a linter error for some reason. But not on Eric's version.
  }

  ngOnInit(): void {

    // option 1 - without FormBuilder, you would have this:
    // this.contactForm = new FormGroup({
    //   name: new FormControl('', Validators.required),
    //   age: new FormControl(0),
    //   phone: new FormControl(''),
    //   email: new FormControl(''),
    // });

    // option 2 - with FormBuilder
    this.contactForm = this.fb.group({
      name: [ '', { validators: [ Validators.required ] } ],
      age: [ 0, { validators: [ Validators.required, minAgeValidator(13) ] } ],
      phone: '',
      email: '',
      color: [ '', { asyncValidators: [ colorNameAsyncValidator(this.httpClient) ] }]
    }, { validators: [ phoneOrEmailValidator ]});
  }

}
