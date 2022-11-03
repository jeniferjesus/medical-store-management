import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from } from 'rxjs';
import { Userapplymedicine } from '../model/userapplymedicine';

@Injectable({
  providedIn: 'root'
})
export class ApplymedicineserviceService {

  constructor(private afs : AngularFirestore) { }
  addusermedicinedata(uapplymedicine : Userapplymedicine) {   
    uapplymedicine.id = this.afs.createId();
     return from (this.afs.collection('/UserMedicinedetail').add(uapplymedicine)).pipe();
   }
   getAllusermedicinedata() {
     return this.afs.collection('/UserMedicinedetail').snapshotChanges();
   }
}
