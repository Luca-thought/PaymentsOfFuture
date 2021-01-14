import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-your-cashback',
  templateUrl: './your-cashback.component.html',
  styleUrls: ['./your-cashback.component.css']
})
export class YourCashback {
  title = 'payments-of-future';


  listObjectPrefer = [{
    title : 'Transactions List',
    icon : 'payment',
    order: 2
  },
  {
    title : 'Balance detail',
    icon : 'euro_symbol',
    order: 1
  },
  {
    title : 'New Transfer',
    icon : 'payment',
    order: 3
  }];

 constructor(
    private router: Router) {
  }

  goTo(elem){
    this.router.navigate([elem.url]);

  }

}
