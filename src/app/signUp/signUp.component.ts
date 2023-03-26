import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router, RouterOutlet, RouterModule } from '@angular/router';


export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  }

@Component({
  selector: 'signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})
export class signUp {
    name : string = ''
    email : string = ''
    password : string = ''
    emailFormControl = new FormControl('', [Validators.required, Validators.email]);
    nameControl = new FormControl('', [Validators.required, Validators.maxLength(4)])
    matcher = new MyErrorStateMatcher();

  public inputHandler(e: Event) {
   this.name = (<HTMLInputElement>e.target).value
  }
  public emailHandler(e: Event) {
   this.email = (<HTMLInputElement>e.target).value
  }
  public passwordHandler(e: Event) {
   this.password = (<HTMLInputElement>e.target).value
  }
  constructor(private router : Router) {}
  onSubmit() {
    if(this.name.length > 4 || this.password.length > 8) {
    this.router.navigateByUrl('/home')
    }else{
      alert('error')
    }
  }


  }
