import { Component, Input } from '@angular/core';
import { passenger } from '../../../containers/passenger-dashboard/passenger-dashboard/passenger-dashboard.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-passenger-detail',
  imports: [CommonModule],
  templateUrl: './passenger-detail.component.html',
  styleUrl: './passenger-detail.component.scss'
})
export class PassengerDetailComponent {
  @Input()
  detail: passenger | undefined;
  constructor() { }



}
