import { Component, OnInit } from '@angular/core';
import {SellerService} from '../seller.service'

@Component({
  selector: 'app-sellerorder',
  templateUrl: './sellerorder.component.html',
  styleUrls: ['./sellerorder.component.css']
})
export class SellerorderComponent implements OnInit {
  customerid= (JSON.parse(sessionStorage.getItem('data')))._id

  order:any
  constructor(private SellerService:SellerService) { }

  ngOnInit(): void {
    console.log((JSON.parse(sessionStorage.getItem('data')))._id)
    this.SellerService.getorderdetailsbycustomerid('62922e5850ad94df398ac93a').subscribe(data=>{

      this.order=data
      console.log(this.order)
    })
  } 

} 
 