import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard/passenger-dashboard.component";
import { PassengerCountComponent } from "./components/passenger-count/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail/passenger-detail.component";
import { AppComponent } from "../app.component";

@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule,
        PassengerDashboardComponent,
        PassengerDetailComponent,
        PassengerCountComponent
    ],
    exports: [
        PassengerDashboardComponent,
        PassengerDetailComponent
    ],

})

export class PassengerDashboardModule { }