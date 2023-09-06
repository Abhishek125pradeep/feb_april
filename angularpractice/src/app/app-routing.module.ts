import { Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { StudentdemoComponent } from './studentdemo/studentdemo.component';

const routes: Routes = [
  {path:"databinding",component:DatabindingComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:"studentdemo",component:StudentdemoComponent},
  {path:"directives",component:Directive},
{path:'admin',loadChildren:()=>import('./admin/admin.module').then(mod => mod.AdminModule)}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
