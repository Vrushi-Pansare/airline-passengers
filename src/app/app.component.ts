import { Component } from '@angular/core';
//import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { PassengerDashboardComponent } from "./passenger-dashboard/containers/passenger-dashboard/passenger-dashboard/passenger-dashboard.component";
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [routes, PassengerDashboardModule, PassengerDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'airline';
}
