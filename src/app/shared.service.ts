import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'

function _window(): any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  get nativeWindow(): any {
    return _window();
  }

  constructor(private http: HttpClient) { }

  getitembycategoryid(categoryid) {
    return this.http.get<any>("http://localhost:4000/api/item/getitemsbycategoryid/" + categoryid)
  }

  createpayment(amount) {
    // console.log('createpayment: ',environment.baseUrl+"razorpay", amount)
    return this.http.post<any>(environment.baseUrl+"razorpay", amount)  
  }

}
