import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { FormGroup, FormControl, Validators, NonNullableFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Userapplymedicine } from 'src/app/model/userapplymedicine';
import { ApplymedicineserviceService } from 'src/app/shared/applymedicineservice.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-newreg',
  templateUrl: './newreg.component.html',
  styleUrls: ['./newreg.component.css']
})
export class NewregComponent implements OnInit {
  
  patternname="^[a-zA-Z]+$";
   
  
  form = new FormGroup({
     name: new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern(this.patternname),Validators.maxLength(15)]),
     n1: new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern(this.patternname),Validators.maxLength(15)]),
    phnm: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required,Validators.email]),
    m1: new FormControl('', [Validators.required,Validators.minLength(16),Validators.maxLength(16),Validators.pattern('[0-9]*')]),
    m2: new FormControl('', [Validators.required,Validators.pattern(this.patternname)]),
    m3: new FormControl('', [Validators.required,Validators.pattern(this.patternname),Validators.maxLength(2),Validators.minLength(2)]),
    m4:new FormControl('', [Validators.required,Validators.pattern(this.patternname)]),
    m5:new FormControl('', [Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(3),Validators.minLength(3)]),
    m6:new FormControl('', [Validators.required,Validators.pattern(this.patternname)]),
  })
  // create local data

quan: number =0;
second:number = 0;
sum:string='';
prize:number=10;
f:number=20;
s:number=10;
  constructor(private auth: AuthService, 
    private data: ApplymedicineserviceService, 
     private fb: NonNullableFormBuilder,
     private router: Router,
     private toast: HotToastService,) { }

  ngOnInit(): void {
  }
  usermedicineList: Userapplymedicine[] = [];
  usermedicineObj: Userapplymedicine = {
    id: '',
    username : '',
    phonenumber: '',
    email : '',
    availablemedicine : '',
    quantity:'',
    amount : '',
    cardholdername : '',
    deborcrednumber:'',
    expdate : '',
    cvv:''
  };
  id: string = '';
  username: string = '';
  phonenumber: string = '';
  email: string = '';
  availablemedicine : string='';
  quantity : string='';
  amount : string='';
  cardholdername: string='';
  deborcrednumber : string='';
  expdate : string='';
  cvv : string='';
  getAllusermedicinedata() {

    this.data.getAllusermedicinedata().subscribe(res => {

      this.usermedicineList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Error while fetching student data');
    })

  }
  resetForm() {
    this.id = '';
    this.username = '';
    this.email = '';
    this.phonenumber = '';
    this.availablemedicine = '';
    this.quantity='';
    this.amount = '';
    this.cardholdername = '';
    this.deborcrednumber='';
    this.expdate = '';
    this.cvv='';
  }
  addusermedicinedetail() {
    // if (this.username == '' || this.email == '' || this.availablemedicine == '' || this.phonenumber == '' || this.expdate == ''
    // || this.quantity == '' || this.amount == '' || this.cardholdername == '' || this.deborcrednumber == '' || this.cvv == '') {
    // //  alert('Fill all input fields');
    //   return;
    // }

    this.usermedicineObj.id = '';
    this.usermedicineObj.email = this.email;
    this.usermedicineObj.username = this.username;
    this.usermedicineObj.availablemedicine = this.availablemedicine;
    this.usermedicineObj.phonenumber = this.phonenumber;

    this.usermedicineObj.expdate = this.expdate;
    this.usermedicineObj.quantity = this.quantity;
    this.usermedicineObj.amount = this.amount;
    this.usermedicineObj.cardholdername = this.cardholdername;
    this.usermedicineObj.deborcrednumber = this.deborcrednumber;
    console.log(this.usermedicineObj);
    this.data
    .addusermedicinedata(this.usermedicineObj)
    .pipe(
      this.toast.observe({      
        success: 'Congrats!'+this.usermedicineObj.username+' You are successfully applied',
        loading: 'loding ...',
        // error:  'wrong'    
       error:(err: any)=>`${err?.message}`,
      })  
      )
      .subscribe(() => {
       this.router.navigate(['/navbar']);
      });
  }
//   submit(){
//     const { name, phnm,email, password,cpassword } = this.form.value;
//     if (!this.form.valid || !name || !phnm || !email || !password || !cpassword) {
//       return;
//     }
//     this.registerObj.id = '';
//     this.registerObj.username = this.username;
//     this.registerObj.phonenumber = this.phonenumber;
//     this.registerObj.email = this.email;
//     this.registerObj.password = this.password;
//     this.registerObj.confirmpassword = this.confirmpassword;

//     console.log(this.form.value);
   
//     this.data
//     .addregisterdata(this.registerObj)
//     .pipe(
//     this.toast.observe({      
//       success: 'Congrats! You are all signed up',
//       loading: 'Signing up...',
//      // error:  'wrong'    
//      error:(err: any)=>`${err?.message}`,
//     })  
//     )
//     // this.auth
//     // .signUp(email, password)
//     .subscribe(() => {
//       //this.router.navigateByUrl('/login');
//      this.router.navigate(['/login']);
//     });
   

// }
  

}
