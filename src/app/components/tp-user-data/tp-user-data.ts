import { Component, signal, output } from '@angular/core';
import { FormField, form } from '@angular/forms/signals';
import { TpUserModel } from '../../models/tp-user-model';

@Component({
  imports: [FormField],
  selector: 'app-tp-user-data',
  styleUrl: './tp-user-data.css',
  templateUrl: './tp-user-data.html',
})
export class TpUserData {
  userModel = signal<TpUserModel>({ name: '', age: 0 });
  userForm = form(this.userModel);

  readonly userDataEmitUpdate = output<TpUserModel>();

  validateData(event: Event): void {
    event.preventDefault();
    this.userDataEmitUpdate.emit({ ...this.userModel() });
    this.userModel.set({ name: '', age: 0 });
  }
}
