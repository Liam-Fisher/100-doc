import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { BehaviorSubject } from 'rxjs';
import { FirebaseStorageService } from '../../services/storage/firebase-storage.service';
@Component({
  selector: 'app-file-select',
  standalone: true,
  imports: [MatButtonModule, MatSelectModule, AsyncPipe],
  template: `
  <button mat-button (click)="test()">Test</button>
  `,
  styles: ``
})
export class FileSelectComponent {
  folders = new BehaviorSubject<string[]>([]);
  storageService = inject(FirebaseStorageService);
test() {
  this.storageService.listStorageFolders('').then((folders) => {
    this.folders.next(folders);
  });
}
}
