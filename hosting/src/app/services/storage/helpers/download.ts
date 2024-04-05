
import { FirebaseStorageService } from "../firebase-storage.service";
import { getBlob, getDownloadURL, getBytes } from "@angular/fire/storage";



export async function downloadURL(this: FirebaseStorageService, path: string): Promise<string> {
    return getDownloadURL(this._ref(path));
}

export async function downloadBlob(this: FirebaseStorageService, path: string) {
    return getBlob(this._ref(path));
}
export async function downloadBytes(this: FirebaseStorageService, path: string) {
    return getBytes(this._ref(path));
}

/* 
export async function loadJSON(this: FirebaseStorageService, path: string) {
    return JSON.parse(await (await this.loadBlob(`${path}.json`)).text());
} */