import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-donut-form',
  templateUrl: './donut-form.component.html',
  styleUrls: ['./donut-form.component.scss']
})
export class DonutFormComponent {
icons :string[] = [
  'caramel',
  'chocolate',
  'default',
  'glazed',
  'white'
]

constructor () {

}

handleSubmit(form: NgForm) {
  if (form.valid) {
    console.log(form.value);
  } else {
    form.form.markAllAsTouched();
  }
}
}
