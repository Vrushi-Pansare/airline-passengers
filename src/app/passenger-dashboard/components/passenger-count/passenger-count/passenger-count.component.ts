import { Component, Input } from '@angular/core';
import { passenger } from '../../../containers/passenger-dashboard/passenger-dashboard/passenger-dashboard.component';

@Component({
  selector: 'app-passenger-count',
  imports: [],
  templateUrl: './passenger-count.component.html',
  styleUrl: './passenger-count.component.scss'
})
export class PassengerCountComponent {
  @Input()
  items: passenger[] = [];
  checkedInCount(): number {
    if (!this.items) return 0;
    return this.items.filter((passenger: passenger) => passenger.checkedIn).length;
  }
}
