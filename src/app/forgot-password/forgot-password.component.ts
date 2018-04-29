import { Component, OnInit } from '@angular/core';
import{UserService}from '../login/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  model:any={};
  constructor(private userService: UserService,private router:Router) { }

  ngOnInit() {
  }
  
  forgotPassword(){
    console.log(this.model);
    console.log("in login");
  
    this.userService.getUserService('forgotPassword',this.model).subscribe(response=>{
    if(response.body.statusCode=== 100){
    
    console.log("mail send successfully");
    this.router.navigate(['/resetpassword']);
    }
    else{ 
    console.log("Invalid Password or email");
    }
    });

    }
    
}