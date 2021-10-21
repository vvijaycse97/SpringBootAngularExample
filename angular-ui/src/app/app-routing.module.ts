import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuccessComponent } from './success';
import { PageNotFoundComponent } from './pagenotfound';
import { GithubdetailsComponent } from './githubdetails';
import { GithubusernamecheckComponent } from './githubusernamecheck';
import { GithubuserdetailsComponent } from './githubuserdetails';

const routes: Routes = [  
  { path:'', component: SuccessComponent},  
  { path:'success', component: SuccessComponent},
  { path:'githubdetails', component :GithubdetailsComponent},  
  { path:'githubusernamecheck', component :GithubusernamecheckComponent},
  { path:'githubuserdetails', component :GithubuserdetailsComponent},  
  { path:'**', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
