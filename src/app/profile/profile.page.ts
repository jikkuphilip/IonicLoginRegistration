import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ApiSrvService } from '../api-srv.service';
import { ToastrService } from 'ngx-toastr';
import { AlertService } from 'ngx-alerts';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userData: any;

  constructor(private route: Router, private api: ApiSrvService, private toast: ToastrService, private alertService: AlertService) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData () {
    console.log('user', history.state.data)
      this.userData = history.state.data;
  }

  logout () {
    localStorage.removeItem('Token')
    this.route.navigate(['login'])
  }

}
