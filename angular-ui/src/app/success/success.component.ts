import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { __param } from 'tslib';

@Component({ templateUrl: 'success.component.html' })
export class SuccessComponent implements OnInit {
    successForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    httpError:any;
  
    constructor
    (
        private http: HttpClient, 
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,        
   )
    {} 
    ngOnInit() {            
 
this.successForm = this.formBuilder.group({      
})

// get return url from route parameters or default to '/'
this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}
  // convenience getter for easy access to form fields
  get f() { return this.successForm.controls; }  
  
  getAPIResponseCode()
  {
    console.log("APIResponseCode details!");
    return this.http.get('http://localhost:5003/getResponseCode');
  }
 
onSubmit(buttonType):void {
  
    console.log('onSubmit() start!!!!!!'); 
     this.submitted = true;     

    if(buttonType==="githubhealthcheck") {        
      this.getAPIResponseCode().subscribe((res:any) => {   
        console.log("getAPIResponseCode call details");       
        localStorage.setItem("apistatuscode",res); 
        this.router.navigate(['/githubdetails']);
      },
      (error) => {                              //Error callback
        console.error('error caught in method getAPIResponseCode()');
        console.log(error);
        this.httpError="Service not available";
        return;
      }); 
      if(this.httpError=="Service not available") 
      {
       console.log("condition true") ;
       this.router.navigate(['/success']);
      }
    }
     else if(buttonType==="githubusernamecheck"){
        this.router.navigate(['/githubusernamecheck']);  
      }
    this.loading = true;    
  } 
}
