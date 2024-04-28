import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-form',
  templateUrl: './donut-form.component.html',
  styleUrls: ['./donut-form.component.scss'],
})
export class DonutFormComponent {
  isFormChanged = false;
  @Input() donut!: Donut;
  @Output() createForm = new EventEmitter<Donut>();
  @Output() updateForm = new EventEmitter<Donut>();
  @ViewChild('donut-form') form!: NgForm;
  icons: string[] = ['caramel', 'chocolate', 'default', 'glazed', 'white'];

  constructor() { }

  handleCreate(form: NgForm) {
    if (form.valid) {
      this.createForm.emit(form.value);
    } else {
      form.form.markAllAsTouched();
    }
  }
  handleUpdate(form: NgForm) {
    if (form.valid && this.isFormChanged) {
      this.updateForm.emit({ id: this.donut.id, ...form.value });
      this.isFormChanged = false;
    } else {
      form.form.markAllAsTouched();
    }
  }
}
