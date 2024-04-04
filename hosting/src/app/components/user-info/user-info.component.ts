import { Component, inject } from '@angular/core';
import { FirebaseAuthService } from '../../services/auth/firebase-auth.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [AsyncPipe],
  template: `
  <p class="user-data">Logged in as {{auth.activeUser|async}}</p>
  <button (click)="auth.logout()">Log out</button>
  `,
  styles: ``
})
export class UserInfoComponent {

  auth = inject(FirebaseAuthService);
  
}
