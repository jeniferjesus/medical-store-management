import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
//import { AuthService } from 'src/app/shared/auth.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Mregister } from 'src/app/model/mregister';
// try
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
//import { AuthService } from 'src/app/shared/auth.service';

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsDontMatch: true };
    } else {
      return null;
    }
  };
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form = new FormGroup({  
   email: new FormControl('', [Validators.required,Validators.email]),
   password:new FormControl ('',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]),
  });
  registerdata: Mregister[] = [];
  registerdataObj: Mregister = {
    id: '',
    username: '',
    phonenumber: '',
    email: '',
    password: '',
    confirmpassword: '',
  
  };
  id: string = '';
  username: string = '';
  phonenumber: string = '';
  email:string='';
  password:string='';
  data: any;
  constructor(
    private auth : AuthService,
    private authService: AuthService,
    private router: Router,
    private toast: HotToastService,
  //  private usersService: UsersService,
    private fb: NonNullableFormBuilder,
  ) { }

  ngOnInit(): void {
  }
  loginForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    }
  );
  
  getAllStudents() {

    this.data.getAllStudents().subscribe((res: any[]) => {

      this.registerdata = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, 
    Error,(err: any)=>`${err?.message}`)

  }
}
