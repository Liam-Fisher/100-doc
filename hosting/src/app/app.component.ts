import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileSelectComponent } from './components/file-select/file-select.component';
import { LoginComponent } from './components/login/login.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { FirebaseAuthService } from './services/auth/firebase-auth.service';
import { AsyncPipe } from '@angular/common';
import { DayCounterComponent } from './components/day-counter/day-counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, FileSelectComponent, LoginComponent, UserInfoComponent, DayCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'doc-100';
  auth = inject(FirebaseAuthService);
}
