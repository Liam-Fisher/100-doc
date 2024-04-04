import { UserDoc } from "../../../types/firebase";
import { FirebaseAuthService } from "../firebase-auth.service";

export function setUser(this: FirebaseAuthService, u: UserDoc) {
    this.loggedIn.next(true);
    this.isUser.next(true);
    this.isAdmin.next(u.isAdmin);
    this.isAnon.next(u.isAnonymous);
    this.activeUser.next(u?.displayName ?? u?.uid);
}
  export function removeUser(this: FirebaseAuthService) {
    this.loggedIn.next(false);
    this.isUser.next(false);
    this.isAnon.next(false);
    this.isAdmin.next(false);
    this.activeUser.next('stranger');
}
