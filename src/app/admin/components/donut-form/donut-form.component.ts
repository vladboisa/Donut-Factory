import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Donut } from '../../models/donut.model';
import { JsonPipe, NgForOf, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-donut-form',
  standalone: true,
  imports: [RouterModule, DonutFormComponent, NgIf, FormsModule, JsonPipe, NgSwitch,NgSwitchCase, NgForOf ],
  templateUrl: './donut-form.component.html',
  styleUrls: ['./donut-form.component.scss'],
})
export class DonutFormComponent {
  isFormChanged = false;
  @Input() donut!: Donut;
  @Input() isEditable!:boolean;
  @Output() createForm = new EventEmitter<Donut>();
  @Output() updateForm = new EventEmitter<Donut>();
  @Output() deleteForm = new EventEmitter<Donut>();
  @ViewChild('form') form:NgForm;

  icons: string[] = ['caramel', 'chocolate', 'default', 'glazed', 'white'];

  constructor() {}

  handleCreate(form: NgForm) {
    if (form.valid) {
      this.createForm.emit(form.value);
      this.isEditable = !this.isEditable;
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
  handleDelete() {
    if (confirm(`Are you really wan't to delete ${this.donut.name}?`)) {
      this.deleteForm.emit({ ...this.donut });
      this.form.resetForm();
    }
  }
}
