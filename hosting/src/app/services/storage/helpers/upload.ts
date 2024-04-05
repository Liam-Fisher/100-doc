import { uploadBytes } from "@angular/fire/storage";
import { FirebaseStorageService } from "../firebase-storage.service";

export function createFile(this: FirebaseStorageService, blob: Blob, filename: string, type: string): File {
    let ext = type.split('/')[1];
    return new File([blob], `${filename}.${ext}`, {type});
}

export async function uploadFile(this: FirebaseStorageService, file: File, path: string) {
    return uploadBytes(this._ref(path), file);
}