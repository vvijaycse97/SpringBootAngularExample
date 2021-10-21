import { Component, OnInit } from '@angular/core';
@Component({ templateUrl: 'githubdetails.component.html' })
export class GithubdetailsComponent implements OnInit { 
  apistatuscode="";
    constructor() {
    } 
    ngOnInit() {
          console.log("API Response Code");                                    
          this.apistatuscode=localStorage.getItem('apistatuscode');         
          console.log(this.apistatuscode);
  }   
                 
}