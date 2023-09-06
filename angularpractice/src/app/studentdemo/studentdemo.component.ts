import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentdemo',
  templateUrl: './studentdemo.component.html',
  styleUrls: ['./studentdemo.component.css']
})
export class StudentdemoComponent {
  cars=["Swift","i10",'minicuper',"Ferrari","Ducati"];
  carsdetails=[{carname:"Ferrari",carprice:450000,colors:"yellow"},
  {carname:"Swift",carprice:890000,colors:"orange"},
  {carname:"Duster",carprice:950000,colors:"red"},
  {carname:"BMW",carprice:650000,colors:"Blue"}
]
constructor(private routes:Router){}


Back(){
  this.routes.navigateByUrl("/home")
}
}
