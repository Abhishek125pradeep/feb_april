import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private route:Router){}

  studentdemo(){
    this.route.navigateByUrl("/studentdemo")
  }
  admin(){
    this.route.navigateByUrl("admin/adminlogin")
  }
  directives(){
    this.route.navigateByUrl("/directives")
  }
}
