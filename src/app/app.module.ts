import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailyTargetandPeriodComponent } from './daily-targetand-period/daily-targetand-period.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { TargetComponent } from './target/target.component';
import { TargetListComponent } from './target-list/target-list.component';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DailyTargetandPeriodComponent,
    TargetComponent,
    TargetListComponent,
    
  ],
  
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    ChartsModule,
    TabsModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component:TargetComponent},
    ]),
    NgSelectModule, 
    FormsModule,
    HttpClientModule,
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
