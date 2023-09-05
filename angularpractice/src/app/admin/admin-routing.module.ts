import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

const routes: Routes = [
  {path:'adminsignup',component:AdminsignupComponent},
  {path:'adminlogin',component:AdminloginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
