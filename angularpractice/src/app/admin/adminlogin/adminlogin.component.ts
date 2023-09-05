import { Component } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
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

}
