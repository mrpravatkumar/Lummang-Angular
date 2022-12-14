import { Component, OnInit, NgModule } from '@angular/core';
import { CheckoutService } from '../checkout.service';
// import { BrowserModule } from '@angular/platform-browser';

import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  buyerid = (JSON.parse(sessionStorage.getItem('data')))._id
  orders: any

  title = 'Order Summary';
  closeResult: string;
  modalOptions: NgbModalOptions;

  orderDetail: any = {}
  currentRate = 0

  constructor(private CheckoutService: CheckoutService, private modalService: NgbModal) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop',
      size: 'lg'
    }
  }

  ngOnInit(): void {
    if ((JSON.parse(sessionStorage.getItem('data')).usertype) === 'buyer') {
      this.CheckoutService.getorderbybuyerid(this.buyerid).subscribe(data => {
        console.log(data.data.orders)
        this.orders = data.data.orders
      })
    } else {
      console.log('user not exit')
    }
  }

  rating(e){
    setTimeout(() => {
      console.log('currentRate: ', this.currentRate)
      alert(`Thanks for the rating ${this.currentRate}`)
    }, 2000);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  openModal(content, obj) {
    console.log('modal content: ', content, obj.order)
    if( obj.modalName ==='invoice'){
      this.modalOptions['size'] = 'xl'
    }else{
      this.modalOptions['size'] = 'lg'
    }
    this.orderDetail = obj.order
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  cancelOrder() {
    if (confirm('Are you sure you want to cancel this order?')) {
      // notify seller that this order is in cancel state, seller will approve it and then this order will be canceled.
      console.log('your order has been canceled successfully!')
      alert('your order has been canceled successfully!')
    }
  }

}
