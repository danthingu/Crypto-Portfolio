import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  credentials: TokenPayload = {
    email: '',
    name: '',
    password: ''
  };
  constructor(private router: Router) { }

  ngOnInit() {
  }

  register() {
    console.log('register');
    //this.router.navigateByUrl('/register');
  }

  onSearchChange(searchValue: String) {
    console.log('show: ' + this.credentials.name)
  }
}


export interface TokenPayload {
  email: string;
  password: string;
  name?: string;
}