import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { CreateAccountPersonalInfoComponent } from './components/create-account-personal-info/create-account-personal-info.component';
import { CreateAccountQualificationsComponent } from './components/create-account-qualifications/create-account-qualifications.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'useraccount' , component: CreateAccountComponent,
    children:[
       {path: 'personalinfo', component: CreateAccountPersonalInfoComponent }, 
       {path: 'qualificationinfo', component: CreateAccountQualificationsComponent }
      ] 
    
  }
    ,
  {path: '**' , component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
