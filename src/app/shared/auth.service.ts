import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
//import {AngularFirestore} from '@angular/fire/compat/firebase.app';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { Mregister } from '../model/mregister';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage,  
    private auth1 : AngularFireAuth,private auth: Auth,
    private router : Router) { }
   // add student
  //  addregisterdata(registerdata : Mregister) {
  //   //registerdata.id = this.afs.createId();
  //   return this.afs.collection('/register').add(registerdata);
  // }

  // // get all students
  // getAllregisterdata() {
  //   return this.afs.collection('/register').snapshotChanges();
  // }


  // signUp(email: string, password: string): Observable<any>{
  //   return from(createUserWithEmailAndPassword(this.auth, email, password));
  // }

  // login(email: string, password: string): Observable<any> {
  //   return from(signInWithEmailAndPassword(this.auth, email, password));
  // }
  
}
