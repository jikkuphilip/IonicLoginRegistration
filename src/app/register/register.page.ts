import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ApiSrvService } from '../api-srv.service';
import { ToastrService } from 'ngx-toastr';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  userObj  : any;
  check  :boolean;
  constructor(private route: Router, private api: ApiSrvService, private toast: ToastrService, private alertService: AlertService) { }

  ngOnInit() {
    this.userObj = {};
    this.check=true;
  }

  registerUser (form) {
    if (form.form.status === 'VALID') {
      this.api.handlePostApi('auth/checkMail',{email:  this.userObj.email}).subscribe((resp:any) => {
       if (resp.success) { 
         this.alertService.success('Email validated successfully');  
         this.api.handlePostApi('auth/register', this.userObj).subscribe((response:any) => {
           if (response.success) {
              this.toast.success('User Registered Successfully');
              this.route.navigate(['login']);
              this.userObj = {};
           }
           else this.toast.error(response.message)
         }, error => {
           this.toast.error('check your connection!')
         })
       }    
       else this.alertService.danger(resp.message)
      }, err => {
        this.toast.error('check your connection!')
      })
    }
  }

  gotoLogin () {
    this.route.navigate(['login'])

  }
  checkPasswd(){
    console.log('this.userObj.cnfrmpassword',this.userObj.cnfrmpassword)
    if(this.userObj.password && this.userObj.cnfrmpassword){
      if(this.userObj.password==this.userObj.cnfrmpassword){
        this.check=true;
      }else{
        this.check=false;

      }
    }
  }

}