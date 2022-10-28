import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Mregister } from 'src/app/model/mregister';
import { AuthService } from 'src/app/shared/auth.service';
import { SregisterService } from 'src/app/shared/sregister.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-loginregister',
  templateUrl: './loginregister.component.html',
  styleUrls: ['./loginregister.component.css']
})
export class LoginregisterComponent implements OnInit {
  patternname="^[a-zA-Z]+$";
  numpattern="/^[0-9]+$/";
  form = new FormGroup({
     name: new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern(this.patternname)]),
    phnm: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required,Validators.email]),
    password:new FormControl ('',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]),
    cpassword: new FormControl('', [Validators.required]),
   
  });
  ngOnInit(): void {
  }
  registerList: Mregister[] = [];
  registerObj: Mregister = {
    id: '',
    username : '',
    phonenumber: '',
    email : '',
    password : '',
    confirmpassword:''
  };
  id: string = '';
  username: string = '';
  phonenumber: string = '';
  email: string = '';
  password: string = '';
  confirmpassword:string='';
  constructor(private auth: AuthService, 
    private data: SregisterService, 
     private fb: NonNullableFormBuilder,
     private router: Router,
     private toast: HotToastService,) { }
  getAlluserregisterdata() {

    this.data.getAlluserregisterdata().subscribe(res => {

      this.registerList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Error while fetching student data');
    })

  }
  submit(){
    const { name, phnm,email, password,cpassword } = this.form.value;
    if (!this.form.valid || !name || !phnm || !email || !password || !cpassword) {
      return;
    }
    this.registerObj.id = '';
    this.registerObj.username = this.username;
    this.registerObj.phonenumber = this.phonenumber;
    this.registerObj.email = this.email;
    this.registerObj.password = this.password;
    this.registerObj.confirmpassword = this.confirmpassword;

    console.log(this.form.value);
    this.data
    .addregisterdata(this.registerObj)
    .pipe(
    this.toast.observe({
      success: 'Congrats! You are all signed up',
      loading: 'Signing up...',
     // error:  'wrong'
     error:(err: any)=>`${err?.message}`,
    })  
    )
    .subscribe(() => {
      this.router.navigate(['/login']);
    });
   

}
    
  }


