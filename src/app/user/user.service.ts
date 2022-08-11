import { Injectable } from '@angular/core';
import { User } from './user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { from, Observable } from 'rxjs';
 
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService { 

  users:any;
  constructor(private http:HttpClient,private activatedRoute:ActivatedRoute ) { }

  
  
// mobile no verification 
  public mobilenoresister(user :User):Observable<any>{
    return this.http.post<any>("https://demo22.appman.in/api/createotp",user)
 
 
  }
  //verify otp
  public verifyotp(Phoneno,user:User):Observable<any>{
    return this.http.post<any>(`https://demo22.appman.in/api/verifyotp/${Phoneno}`,user)
  }
  public getcustomerbyid(customerid){
    return this.http.get<any>("https://demo22.appman.in/api/customerdetails/"+customerid)
  }



   getalluser(){
  return this.http.get<User>("https://demo22.appman.in/api/getalluser");

  
  } 

  sellerresister(customer){
    return this.http.post<any>("https://demo22.appman.in/api/sellerregister/",customer)
 
 
  }
  buyerregister(customer){
    return this.http.post<any>("https://demo22.appman.in/api/buyerregister/",customer)
  }
  updatecustomer(customer){
    return this.http.post<any>("https://demo22.appman.in/api/updatecustomer/",customer)
  }
 
  getcategorybyprimary(primary){
    return this.http.get<any>("https://demo22.appman.in/get/"+primary)
  

  }
  // generate otp
  getotpapi(phoneno){
   return this.http.get<any>("https://demo22.appman.in/api/sms/sendsignupotp/"+phoneno)
  }
  
  //gst validation
  gstvalidation(gstinno){
    return this.http.post<any>("https://demo22.appman.in/api/otp/"+gstinno ,{})
  }
//account no validation
  accountnovalidation(ifsc,account_number,name,mobile){
    return this.http.post<any>(`https://demo22.appman.in/api/phoneno/${ifsc}/${account_number}/${name}/${mobile}`,{})
  }
//pincode validation
  pincodevalidation(pincode){
    return this.http.post<any>("https://demo22.appman.in/api/pincode",{pincode})
  }
}




