import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';
// import { BrowserModule } from '@angular/platform-browser';
import { RegisterPage } from './register.page';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
// import { ToastrModule } from 'ngx-toastr';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    // ToastrModule.forRoot()
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
