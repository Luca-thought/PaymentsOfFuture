import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map,startWith } from 'rxjs/operators';

@Component({
  selector: 'app-your-cashback',
  templateUrl: './your-cashback.component.html',
  styleUrls: ['./your-cashback.component.css']
})
export class YourCashback {

  listObjectPrefer = [{
    search : 'abercrombie',
    icon : 'assets/abercrombie.png',
    percentual: '10%',
    expired : '2 days ago',
    order: 1,
    added: false
  },
  {
    search : 'airbnb',
    icon : 'assets/Airbnb.png',
    percentual: '5%',
    expired : '5 days ago',
    order: 2,
    added: false
  },
  {
    search : 'footlocker',
    icon : 'assets/footlocker.png',
    percentual: '-',
    expired : 'Not avaiable',
    order: 3,
    added: false
  }];

  listObjectAvaiable = [{
    search : 'abercrombie',
    icon : 'assets/abercrombie.png',
    percentual: '10%',
    expired : '2 days ago',
    order: 1,
    added: false
  },
  {
    search : 'airbnb',
    icon : 'assets/Airbnb.png',
    percentual: '5%',
    expired : '5 days ago',
    order: 5,
    added: false
  },
  {
    search : 'colemar',
    icon : 'assets/colemar.png',
    percentual: '3%',
    expired : '5 days ago',
    order: 3,
    added: false
  },
  {
    search : 'ihg',
    icon : 'assets/IHG.png',
    percentual: '3%',
    expired : '20 days ago',
    order: 2,
    added: false
  },
  {
    search : 'coop',
    icon : 'assets/coop.png',
    percentual: '5%',
    expired : '30 days ago',
    order: 4,
    added: false
  },
  {
    search : 'carrefour',
    icon : 'assets/carre.png',
    percentual: '2%',
    expired : '60 days ago',
    order: 6,
    added: false
  }];

  listObjectExpired = [{
    search : 'terranova',
    icon : 'assets/terranova.png',
    percentual: '2%',
    expired : '10 days ago',
    order: 6,
    added: false
  }];
  listObjectSelected =[];
  valueFilter = '';


 constructor() {


  }

  added(elem,type){
    elem.added = true;
    this.listObjectSelected.push(elem);
    if(type ==='avalaible'){
      for(let i of this.listObjectPrefer){
        if(i.icon === elem.icon){
          i.added = true;
        }
      }
    } else if(type === 'prefer'){
      for(let i of this.listObjectAvaiable){
        if(i.icon === elem.icon){
          i.added = true;
        }
      }
    }

  }

  remove(elem){
    elem.added = false;
    this.listObjectSelected.forEach((element,index)=>{
      if(element.icon === elem.icon) {this.listObjectSelected.splice(index,1)};
   });

    for(let i of this.listObjectPrefer){
      if(i.icon === elem.icon){
        i.added = false;
      }
    }
    for(let i of this.listObjectAvaiable){
      if(i.icon === elem.icon){
        i.added = false;
      }
    }
  }



}
