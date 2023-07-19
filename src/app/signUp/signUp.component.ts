import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import Swal from 'sweetalert2'
import {of, map, filter, interval, take, Observable, from, mergeMap} from 'rxjs'
import { AuthServiceService } from '../auth-service.service';


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
    emailFormControl = new FormControl('', [Validators.pattern('[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+')]);
    matcher = new MyErrorStateMatcher();
    userNameControl = new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9_-]{4,15}$')])
    passwordControl = new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$')])
  constructor(private router : Router, public service: AuthServiceService) {}
  onSubmit() {
    if (!this.emailFormControl.valid || !this.userNameControl.valid || !this.passwordControl.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }else{
        this.service.inOrOut = true
        this.router.navigateByUrl('/')
    }
  }
}
