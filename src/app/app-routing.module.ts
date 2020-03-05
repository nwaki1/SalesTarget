import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyTargetandPeriodComponent } from '../app/daily-targetand-period/daily-targetand-period.component'

const routes: Routes = [
  { path: 'dailytargetandperiodcomponent', component: DailyTargetandPeriodComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
