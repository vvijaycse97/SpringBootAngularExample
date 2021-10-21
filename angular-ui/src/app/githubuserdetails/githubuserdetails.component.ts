import { Component, OnInit } from '@angular/core';
@Component({ templateUrl: 'githubuserdetails.component.html' })
export class GithubuserdetailsComponent implements OnInit { 
  githublogin="";
  githubcreatedat="";
    constructor() {
    } 
    ngOnInit() {
          console.log("API Response Code");                                    
          this.githublogin=localStorage.getItem('githublogin');         
          console.log(this.githublogin);
          this.githubcreatedat=localStorage.getItem('githubcreatedat');         
          console.log(this.githubcreatedat);
          localStorage.setItem("githublogin",this.githublogin); 
          localStorage.setItem("githubcreatedat",this.githubcreatedat); 
  }   
                 
}