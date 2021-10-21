import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SuccessComponent } from './success';
import { GithubdetailsComponent } from './githubdetails';
import { GithubusernamecheckComponent } from './githubusernamecheck';
import { GithubuserdetailsComponent } from './githubuserdetails';
import { PageNotFoundComponent } from './pagenotfound';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,    
    SuccessComponent,
    GithubdetailsComponent,
    PageNotFoundComponent,
    GithubusernamecheckComponent,
    GithubuserdetailsComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
