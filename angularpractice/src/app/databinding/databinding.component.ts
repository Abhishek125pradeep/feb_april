import { Component } from '@angular/core';

@Component({
  selector: 'app-databindinga',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
Name:string='shek';
enable:boolean=false;
Uname:string="Nagabhi";
Myname:string='prakashraj';
Majhanav:String="NagyaAbhishek";
eenable:boolean=false;
bindingdata:any;
CommonName:string="Ngmodule";
Grnder:boolean=true;
databinding(){
 this.bindingdata='Showme' 
}

}
