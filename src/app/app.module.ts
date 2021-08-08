import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { CreateAccountNavComponent } from './components/create-account-nav/create-account-nav.component';
import { CreateAccountTabNavigationComponent } from './components/create-account-tab-navigation/create-account-tab-navigation.component';
import { CreateAccountPersonalInfoComponent } from './components/create-account-personal-info/create-account-personal-info.component';
import { CreateAccountQualificationsComponent } from './components/create-account-qualifications/create-account-qualifications.component';

import { FormsModule } from '@angular/forms';
import { UserdetailsService } from './core/userdetails.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    CreateAccountComponent,
    CreateAccountNavComponent,
    CreateAccountTabNavigationComponent,
    CreateAccountPersonalInfoComponent,
    CreateAccountQualificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
