import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDocToColl, getCollRef, getDocData, getDocRef, setDocInColl } from './helpers/docs';
import { addUser, formatUserDoc, getUser, setUser } from './helpers/users';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDatabaseService {
  readonly firestore = inject(Firestore);


  public getCollRef= getCollRef.bind(this);
  public getDocRef = getDocRef.bind(this);
  public addDocToColl = addDocToColl.bind(this);
  public setDocInColl = setDocInColl.bind(this);
  public getDocData = getDocData.bind(this);

  public addUser = addUser.bind(this);
  public setUser = setUser.bind(this);
  public getUser = getUser.bind(this);
  public formatUserDoc = formatUserDoc.bind(this);

  constructor() { }
}
