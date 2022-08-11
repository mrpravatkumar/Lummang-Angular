import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http:HttpClient) { }

  addcart(customerid,itemid,sellerid):Observable<any>{
    return this.http.get<any>(`https://demo22.appman.in/api/cart/addcart/${customerid}/${itemid}/${sellerid}`,{})
 
 
  }   


  getcart(customerid):Observable<any>{
    return this.http.get<any>("https://demo22.appman.in/api/cart/"+customerid)
 
  }
  deletecart(cartid,deletedBy):Observable<any>{
    return this.http.get<any>(`http://localhost:4000/api/deletecart/${cartid}/${deletedBy}`,{})
 
 
  } 


  getcartcount(customerid):Observable<any>{
    return this.http.get<any>("http://localhost:4000/api/count/"+customerid)
 
  }

  geteditcart(cartid,quantity):Observable<any>{
    return this.http.get<any>(`http://localhost:4000/api/editcart/${cartid}/${quantity}`,{})
 
  }
}
 