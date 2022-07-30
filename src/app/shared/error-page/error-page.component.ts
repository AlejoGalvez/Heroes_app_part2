import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styles: [
  ]
})
export class ErrorPageComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['./auth/login'])  
  }

}
