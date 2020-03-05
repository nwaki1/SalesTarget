import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyTargetandPeriodComponent } from '../app/daily-targetand-period/daily-targetand-period.component'
import {TargetComponent} from '../app/target/target.component';
const routes: Routes = [
  { path: 'dailytargetandperiodcomponent', component: DailyTargetandPeriodComponent },
  { path: 'targetcomponent', component: TargetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
