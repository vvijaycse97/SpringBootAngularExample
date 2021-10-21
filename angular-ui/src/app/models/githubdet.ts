export class Githubdet {
    login: string;    
    createdAt: string;
    
    constructor(public _login: string, public _createdAt: string) {
        this.login = _login;        
        this.createdAt = _createdAt;
        
    }
}