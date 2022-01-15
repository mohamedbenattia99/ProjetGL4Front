import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullName:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required],
      confirmPassword:['', Validators.required]
    })
  }

  signup(){
    this.router.navigate(['/login'])
  }

}
