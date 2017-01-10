import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {LoginModule} from './login/login.module';
import {AppComponent} from './app.component';


import {AppRoutingModule} from './app-routing.module';

import {UserService} from './services/users/user.service';
import {LoggerService} from './services/logger/logger.service';
import {AuthGuardService} from './services/guard/auth-guard.service';


@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        LoginModule,
        AppRoutingModule

    ],
    declarations:[
        AppComponent
    ],
    providers:[
        UserService,
        LoggerService,
        AuthGuardService
    ],
    bootstrap:[AppComponent]
})
export class AppModule{}