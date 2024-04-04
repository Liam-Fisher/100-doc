import { User } from "@angular/fire/auth";
import { FirebaseDatabaseService } from "../firebase-database.service";
import { UserDoc } from "../../../types/firebase";



export async function addUser(this: FirebaseDatabaseService, user: User) {
    let data = this.formatUserDoc(user);
    await this.setDocInColl('users', user.uid, data);
    return data;
}
export async function getUser(this: FirebaseDatabaseService, uid: string): Promise<UserDoc|null> {
    let ref = this.getDocRef('users', uid);
    console.log('getting user ref', ref);
    let doc = await this.getDocData(ref);
    console.log('getting user doc', doc);
    return doc as UserDoc | null;
}
export async function setUser(this: FirebaseDatabaseService, user: User) {
    let data = await this.getUser(user.uid);
    if(!data&&!user.isAnonymous) { // user does not exist, and is not anonymous, create new user
      data = await this.addUser(user);
    }
    return data as UserDoc;
}
export function formatUserDoc(user: User): UserDoc {
    const dateString = (new Date()).toString();
    return {
        uid: user.uid,
        displayName: user.displayName ?? user.uid,
        email: user?.email ?? "",
        isAnonymous: user.isAnonymous,
        isAdmin: false,
        createdAt: dateString
    };
};

