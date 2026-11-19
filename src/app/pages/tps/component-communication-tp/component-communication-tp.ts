import { Component, signal } from '@angular/core';
import { TpUserModel } from '../../../models/tp-user-model';
import { TpUserActive } from '../../../components/tp-user-active/tp-user-active';
import { TpUserData } from '../../../components/tp-user-data/tp-user-data';

@Component({
  imports: [TpUserActive, TpUserData],
  selector: 'app-component-communication-tp',
  styleUrl: './component-communication-tp.css',
  templateUrl: './component-communication-tp.html',
})
export class ComponentCommunicationTp {
  oneUser = signal<TpUserModel>({ name: 'Alice', age: 30 });

  updateUser(user: TpUserModel): void {
    console.log('reçu par le parent :', user);
    this.oneUser.set(user);
  }
}
