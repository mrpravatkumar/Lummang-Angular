import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Checkout } from './checkout';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http:HttpClient) { }
  placeorder(order:Checkout):Observable<any>{
   return this.http.post<any>("https://demo22.appman.in/api/order/placeorder",order);


 } 

 getorderbybuyerid(buyerid){
  return this.http.get<any>("https://demo22.appman.in/api/order/user/getmyorder/" +buyerid)
}

postuseraddress(useraddress){
  return this.http.post<any>("https://demo22.appman.in/useraddress",useraddress);
 

} 
getuseraddressbyuserid(userid){
  return this.http.get<any>("https://demo22.appman.in/api/useraddressbyuserid/" +userid)

} 
getuseraddresscount(customerid):Observable<any>{
  return this.http.get<any>("https://demo22.appman.in/countaddress/"+customerid)

}
getdeleteuseraddress(customerid):Observable<any>{
  return this.http.get<any>("https://demo22.appman.in/api/delete/useraddress/"+customerid)

}
getuseraddressbyid(id):Observable<any>{
  return this.http.get<any>("https://demo22.appman.in/api/useraddress/"+id)

}
updateuseraddress(address){
  return this.http.post<any>("https://demo22.appman.in/updateuseraddress",address)
}
} 