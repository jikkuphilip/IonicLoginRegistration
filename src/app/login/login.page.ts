import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiSrvService } from '../api-srv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginObj : any
  userData :  any

  constructor(private route: Router, private toast: ToastrService, private api: ApiSrvService) { }

  ngOnInit() {
    this.loginObj = {};
  }

  gotoRegister () {
    this.route.navigate(['register'])
  }

  loginUser (form) {
    console.log('form',  form)
    if (form.form.status === 'VALID') {
    this.api.handlePostApi('auth/login', this.loginObj).subscribe((resp:any)  => {
      if (resp.success) {
      this.toast.success('Login Successful');
      localStorage.setItem('Token', resp.data.token);
      this.getUserData();
      } else this.toast.error('Invalid credentials')
    }, err => {
      this.toast.error('Failed to login')
    })
  }

  }

  getUserData () {
    this.api.handleGetApi('user').subscribe((resp:any) => {
      this.userData = resp.data.userData;
      this.route.navigate(['profile'],{state:{data: this.userData}})
      this.loginObj={}
    });
  }

}
