import { listAll, ref } from "@angular/fire/storage";
import { FirebaseStorageService } from "../firebase-storage.service";
export function _ref(this: FirebaseStorageService, path: string) {
    return ref(this.storage, path);
}
export async function listStorageFolders(this: FirebaseStorageService, path: string): Promise<string[]> {
    const  results = await listAll(ref(this.storage, path));
    console.log('results', results);
    return results.prefixes.map((res) => res.name.split('.')[0]);
}

export async function listStorageFiles(this: FirebaseStorageService, path: string): Promise<string[]> {
    const  results = await listAll(ref(this.storage, path));
    console.log('results', results);
    return results.items.map((res) => res.name.split('.')[0]);
}