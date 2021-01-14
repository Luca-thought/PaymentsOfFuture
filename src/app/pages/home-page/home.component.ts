import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomePageComponent {
  title = 'payments-of-future';


  listObject = [{
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
  },
  {
    title : 'Your Cashback',
    icon: 'settings_backup_restore',
    url : '/your_cashback',
    order: 4
  },
  {
    title : 'Your Alerts',
    icon: 'alarm',
    order: 5
  },
  {
    title : 'Account statements',
    icon: 'list_alt',
    order: 6
  }];

 constructor(
    private router: Router) {
  }

  goTo(elem){
    this.router.navigate([elem.url]);

  }

}
