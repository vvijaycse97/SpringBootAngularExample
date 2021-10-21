import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Githubdet } from '../models/githubdet';
@Component({ templateUrl: 'githubusernamecheck.component.html' })
export class GithubusernamecheckComponent implements OnInit {
    loginForm: FormGroup;
    githubusernamecheckForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string; 
    githubusername=""; 
    githubusernameinvalidcheck=""; 
    githubservicenotavailable="";
    httpError:any;
    constructor(
        private http: HttpClient, 
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,       
    ) 
    { } 
    ngOnInit() {        
        this.githubusernamecheckForm = this.formBuilder.group({
            githubusername: ['', Validators.required],
        })
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    // convenience getter for easy access to form fields
    get f() { return this.githubusernamecheckForm.controls; }

    getGithubUsernameCheckDetails()
    {
      const params = new HttpParams().append('githubusername', this.githubusername);
      console.log("GithubUserNameCheck details!!!!!!!!!");
      console.log("param value");
      console.log(params);
      return this.http.get('http://localhost:5004/getGithubUsernameCheck',{params});
    }

    onSubmit() {      
        this.submitted = true;         
        this.loading = true;        
        console.log("dfgdfghdfh -> githubuseridcheckForm"+this.githubusernamecheckForm);
        this.getGithubUsernameCheckDetails().subscribe((res:any) => {          
         console.log("sb service call details");
         console.log(res);           
         githubdet: Githubdet;         
         let map=new Map();
                 
                  for (let [key,value] of Object.entries(res))
                  {           
                   map.set(key,value);
                  }
                 for (let entry of map.entries()) 
                 {
                 if(entry[0]=='login' && entry[1]=='Invalid User')
                   {
                    console.log("Invalid User------>"); 
                    localStorage.setItem("githublogin","Invalid User"); 
                    localStorage.setItem("githubcreatedat",""); 
                    this.githubusernameinvalidcheck="Invalid User";                                                 
                   }         
                 }
                  
              for (let entry of map.entries()) 
               {  
                  if(entry[0]=='login')
                  {
                    console.log("login value------>");
                    console.log(entry[1]); 
                    localStorage.setItem("githublogin",entry[1]);           
                  }
                  else if(entry[0]=='created_at')
                  {
                    console.log("createdAt value------>");
                    console.log(entry[1]);
                    localStorage.setItem("githubcreatedat",entry[1]); 
                  }  
              } 
         this.router.navigate(['/githubuserdetails']);
       },
       (error) => {                              //Error callback
        console.error('error caught in method getGithubUsernameCheckDetails()');
        console.log(error);
        this.httpError="Service not available";
        return;
      }); 
      if(this.httpError=="Service not available") 
      {
        console.log("Service not available");
        this.githubservicenotavailable="Service not available";
        return this.router.navigate(['/githubusernamecheck']);
      }
    }   
}