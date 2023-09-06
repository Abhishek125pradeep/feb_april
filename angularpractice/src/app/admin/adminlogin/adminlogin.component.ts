import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  constructor(private routes:Router){}
Name="Abhishek";
myname:string='KHAN'
gender=false;
testbinding:any;
mame=true;
oncemore:any;
city="Wardha;"
Testevent(){
  this.testbinding="Something else"
}
root(){
this.oncemore="more than you think"
}
BaCK(){
  this.routes.navigateByUrl("/home")
}
}
