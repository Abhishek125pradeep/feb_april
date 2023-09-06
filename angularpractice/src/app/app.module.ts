import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { HomeComponent } from './home/home.component';
import { StudentdemoComponent } from './studentdemo/studentdemo.component';
import { DirectivesComponent } from './directives/directives.component';
// console.log("app.module.ts");

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    DatabindingComponent,
    HomeComponent,
    StudentdemoComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
