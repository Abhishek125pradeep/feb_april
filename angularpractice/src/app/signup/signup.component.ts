import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
myName = "Abhishek Nagrale";
Namemy= "NagraleAbhishek";
strng:string="Abhi Nagrale"
databindingdb:any;
testingevent:any;
gender = true;
loginForm = "Loginform";
toshowpara:string="abhi";
parashow!:string;
Toggel:boolean=true;
Gender=true;
show=false;
testingeventbinding(){
  this.testingevent='testing'
}
Databinding(){
this.databindingdb="enything else"
}
MYname(){
 return "MY  Name Is "+this. strng
}
toggel(){
  // this.Toggel=false
  this.Toggel= !this.Toggel
}
}
