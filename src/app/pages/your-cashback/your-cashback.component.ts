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
    icon : 'assets/abercrombie.png',
    percentual: '10%',
    expired : '2 days ago',
    order: 1,
    added: false
  },
  {
    title : 'Balance detail',
    icon : 'assets/Airbnb.png',
    percentual: '5%',
    expired : '5 days ago',
    order: 2,
    added: false
  },
  {
    title : 'New Transfer',
    icon : 'assets/footlocker.png',
    percentual: '-',
    expired : 'Not avaiable',
    order: 3,
    added: false
  }];

  listObjectAvaiable = [{
    title : 'Transactions List',
    icon : 'assets/abercrombie.png',
    percentual: '10%',
    expired : '2 days ago',
    order: 1,
    added: false
  },
  {
    title : 'Balance detail',
    icon : 'assets/Airbnb.png',
    percentual: '5%',
    expired : '5 days ago',
    order: 5,
    added: false
  },
  {
    title : 'New Transfer',
    icon : 'assets/colemar.png',
    percentual: '3',
    expired : '5 days ago',
    order: 3,
    added: false
  },
  {
    title : 'Transactions List',
    icon : 'assets/IHG.png',
    percentual: '3%',
    expired : '20 days ago',
    order: 2,
    added: false
  },
  {
    title : 'Balance detail',
    icon : 'assets/coop.png',
    percentual: '5%',
    expired : '30 days ago',
    order: 4,
    added: false
  },
  {
    title : 'New Transfer',
    icon : 'assets/terranova.png',
    percentual: '2%',
    expired : '60 days ago',
    order: 6,
    added: false
  }];

  listObjectExpired = [];
  listObjectSelected =[];

 constructor() {
  }

  added(elem){
    elem.added = true;
    this.listObjectSelected.push(elem);
    for(let i of this.listObjectPrefer){
      if(i.icon === elem.icon){
        i.added = true;
      }
    }
  }

  remove(elem){
    elem.added = false;
    this.listObjectSelected.forEach((element,index)=>{
      if(element.added === false) {this.listObjectSelected.splice(index,1)};
   });

    for(let i of this.listObjectPrefer){
      if(i.icon === elem.icon){
        i.added = false;
      }
    }
  }

}
