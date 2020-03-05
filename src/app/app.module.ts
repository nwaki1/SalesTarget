import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailyTargetandPeriodComponent } from './daily-targetand-period/daily-targetand-period.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { TargetComponent } from './target/target.component';
import { TargetListComponent } from './target-list/target-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyTargetandPeriodComponent,
    TargetComponent,
    TargetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
