import { Component, inject } from '@angular/core';
import { FirebaseAuthService } from '../../services/auth/firebase-auth.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AsyncPipe],
  template: `
  <button (click)="login('google')" >Log in with Google</button>
  `,
  styles: ``
})
export class LoginComponent {
  auth = inject(FirebaseAuthService);
  constructor() { }
ngAfterViewInit() { } 
login(provider: string) {
  switch (provider) {
    case 'google':
      return this.auth.loginWithGoogle();
    default:
      throw new Error(`invalid provider: ${provider}`);
  }
}
}
