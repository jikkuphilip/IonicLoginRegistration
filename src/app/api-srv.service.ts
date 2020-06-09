import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiSrvService {

  constructor(private htttp: HttpClient) { }

  handlePostApi (apiName, data) {
    return this.htttp.post(environment.BASE_URL+apiName, data)    

  }

  handleGetApi (apiName) {
    return this.htttp.get(environment.BASE_URL+apiName)
    

  }
}
