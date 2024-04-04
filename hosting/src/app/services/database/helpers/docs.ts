import { DocumentData, DocumentReference, WithFieldValue, addDoc, collection, doc, getDoc, setDoc } from "@angular/fire/firestore";
import { FirebaseDatabaseService } from "../firebase-database.service";
import { Coll } from "../../../types/firebase";

export function getDocRef<T extends DocumentData>(this: FirebaseDatabaseService, coll: string, id: string): DocumentReference<T> {
    return doc(this.firestore, `${coll}/${id}`) as DocumentReference<T>;
  }
export function getCollRef(this: FirebaseDatabaseService, coll: string) {
    return collection(this.firestore, coll);
}

export async function addDocToColl<T extends DocumentData>(this: FirebaseDatabaseService, coll: Coll, data: T): Promise<T> {
    let ref = this.getCollRef(coll);
    try {
      await addDoc(ref, data);
    }
    catch(err) {
      console.log(`error adding doc to coll ${coll}`, data);
      throw err;
    }
    return data;
}
export async function setDocInColl<T extends DocumentData>(this: FirebaseDatabaseService, coll: string, id: string, data: T): Promise<DocumentReference<T>> {
    let ref = this.getDocRef(coll, id);
    try {
      await setDoc(ref, data);
    }
    catch(err) {
      console.log(`error setting doc with id: ${id} in coll ${coll}`, data);
      throw err;
    }
    return ref as DocumentReference<T>;
}
export async function getDocData<T extends DocumentData>(ref: DocumentReference): Promise<T|null> {
    let doc = await getDoc(ref);
    if(!doc.exists()) return null;
    return doc.data() as T;
}