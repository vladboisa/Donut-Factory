import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-form',
  templateUrl: './donut-form.component.html',
  styleUrls: ['./donut-form.component.scss']
})
export class DonutFormComponent {
  @Input() donut!: Donut;
  @Output() createForm = new EventEmitter<Donut>();
  @Output() updateForm = new EventEmitter<Donut>();
icons :string[] = [
  'caramel',
  'chocolate',
  'default',
  'glazed',
  'white'
]

constructor () {

}

handleCreate(form: NgForm) {
  if (form.valid) {
    this.createForm.emit(form.value)
  } else {
    form.form.markAllAsTouched();
  }
}
handleUpdate(form:NgForm) {
  if (form.valid) {
    this.updateForm.emit({id: this.donut.id, ...form.value})
  } else {
    form.form.markAllAsTouched();
  }
}
}
