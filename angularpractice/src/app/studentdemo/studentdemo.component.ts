import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentdemo',
  templateUrl: './studentdemo.component.html',
  styleUrls: ['./studentdemo.component.css']
})
export class StudentdemoComponent {
constructor(private routes:Router){}


Back(){
  this.routes.navigateByUrl("/home")
}
}
