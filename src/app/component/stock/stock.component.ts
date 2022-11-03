import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  //emailRegexPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  submit=false;
  loading=false;
  patternname="^[a-zA-Z]+$";

  numpattern="/^[0-9]+$/";

  stockform = new FormGroup({

     name : new FormControl('', [Validators.required, Validators.minLength(5),Validators.pattern(this.patternname)]),

     stock_id: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'),Validators.minLength(4),Validators.maxLength(6)]),
    quantity: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'),Validators.minLength(4),Validators.maxLength(6)]),
    // email: new FormControl('', [Validators.required,Validators.email]),

    // password:new FormControl ('',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]),

   

  });
  

  constructor() { }

  ngOnInit(): void {
  }
 onsubmit(){
  this.loading=true;
 }
}
