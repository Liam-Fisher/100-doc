import { Injectable, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, User, authState, signInAnonymously, signInWithPopup, signOut } from '@angular/fire/auth';
import { BehaviorSubject, Observable, Subscription, from, of, switchMap } from 'rxjs';
import { UserDoc } from '../../types/firebase';
import { FirebaseDatabaseService } from '../database/firebase-database.service';
import { removeUser, setUser } from './helpers/users';



@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  readonly auth: Required<Auth> = inject(Auth);
  readonly db = inject(FirebaseDatabaseService);
  readonly user: Observable<UserDoc | null>;
  $user!: Subscription
  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isUser: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isAdmin: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isAnon: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public activeUser: BehaviorSubject<string> = new BehaviorSubject('stranger');

  
  setUser = setUser.bind(this);
  removeUser = removeUser.bind(this);

  constructor() { 
    this.user = authState(this.auth).pipe(
      switchMap((user: User|null) => {
        if(user?.uid) {
          console.log('getting user', user);
          return from(this.db.setUser(user)); 
        } 
        else {
          console.log('no user');
          return of(null);
        }
      })
  );
    this.$user = this.user.subscribe((user) => {
      try {
        if(user) {
          console.log('settting user', user);
          this.loggedIn.next(true);
          this.isUser.next(true);
          this.isAdmin.next(user.isAdmin);
          this.isAnon.next(user.isAnonymous);
          this.activeUser.next(user.displayName);
        }
        else {
          console.log('removing user', user);
          this.loggedIn.next(false);
          this.isUser.next(false);
          this.isAdmin.next(false);
          this.isAnon.next(false);
          this.activeUser.next('stranger');
        }
      }
      catch(err) {
        console.log('error setting user', err);
      }
    }
  );
}
async loginWithGoogle() {
  console.log('logging in with google');
  const provider = new GoogleAuthProvider();
  return signInWithPopup(this.auth, provider);
}
async logout() {
  console.log('logging out');
  return signOut(this.auth);
}
  ngOnDestroy() {
    this.$user.unsubscribe();
  }
}
