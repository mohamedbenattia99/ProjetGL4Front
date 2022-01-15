import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from "@angular/forms";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['', Validators.required],
      password:['', Validators.required],
    })
  }

  login(){
    this.router.navigate(['/signup'])
  }

}
