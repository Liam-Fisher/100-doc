import { Injectable, inject } from '@angular/core';
import { Storage } from '@angular/fire/storage';
import {  downloadBlob, downloadBytes, downloadURL } from './helpers/download';
import { createFile, uploadFile } from './helpers/upload';
import { _ref, listStorageFiles, listStorageFolders } from './helpers/refs';
@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {
  readonly storage = inject(Storage);

  _ref = _ref.bind(this);
  listStorageFolders = listStorageFolders.bind(this);
  listStorageFiles = listStorageFiles.bind(this);

  downloadURL = downloadURL.bind(this);
  downloadBlob = downloadBlob.bind(this);
  downloadBytes = downloadBytes.bind(this);

  createFile = createFile.bind(this);
  uploadFile = uploadFile.bind(this);
  constructor() { }

}
