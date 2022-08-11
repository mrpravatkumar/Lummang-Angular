import { Component, OnInit } from '@angular/core';
import {CheckoutService} from '../checkout.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
 buyerid=(JSON.parse(sessionStorage.getItem('data')))._id
 order:any
  constructor( private CheckoutService:CheckoutService) { }

  ngOnInit(): void {
    if((JSON.parse(sessionStorage.getItem('data')).usertype)==='buyer'){

      this.CheckoutService.getorderbybuyerid(this.buyerid).subscribe(data=>{

        this.order=data
        console.log(data)

      })

    }else{
      console.log('user not exit')
    }
    


  }

}
