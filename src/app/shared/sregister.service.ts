import { Injectable } from '@angular/core';
import { checkActionCode, signInWithEmailAndPassword } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { from, Observable } from 'rxjs';
// import { FileMetaData } from '../model/file-meta-data';
import { Mregister } from '../model/mregister';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  updateProfile,
  UserInfo,
  UserCredential,
} from '@angular/fire/auth';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class SregisterService {

  constructor(private afs : AngularFirestore,private firestore: Firestore, private fireStorage : AngularFireStorage) { }
  addregisterdata(dregister : Mregister) {   
    dregister.id = this.afs.createId();
    return from (this.afs.collection('/Registerdata').add(dregister)).pipe();
  }
  getAlluserregisterdata() {
    return this.afs.collection('/Registerdata').snapshotChanges();
  }
  // login(email: string, password: string){
  //   return from(signInWithEmailAndPassword(this.addregisterdata, email, password));
    
  // }
  // addUser(user: Mregister): Observable<void> {
  //   const ref = doc(this.firestore, 'users', user.id);
  //   return from(setDoc(ref, user));
  // }
 
}
