import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PassengerDetailComponent } from '../../../components/passenger-detail/passenger-detail/passenger-detail.component';
import { PassengerCountComponent } from "../../../components/passenger-count/passenger-count/passenger-count.component";
export interface Child {
  name: string,
  age: number
}
export interface passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate: number | null
  children?: Child[] | null
}
@Component({
  selector: 'app-passenger-dashboard',
  imports: [CommonModule, PassengerCountComponent, PassengerDetailComponent],
  templateUrl: './passenger-dashboard.component.html',
  styleUrl: './passenger-dashboard.component.scss'
})
export class PassengerDashboardComponent implements OnInit {
  passengers: passenger[] = [];
  constructor() { }
  ngOnInit(): void {
    console.log('ngOnInit');
    this.passengers = [{
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 }]
    },
    {
      id: 3,
      fullname: 'james',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null
    },
    {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }]
    },
    {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null,
      children: null
    }];
  }



}
