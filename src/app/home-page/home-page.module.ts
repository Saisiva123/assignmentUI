import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { SiteDetailsComponent } from './site-details/site-details.component';
import { MaterialModules } from '../material-ui/material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AddSiteDetailsComponent } from './site-details/add-site-details/add-site-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomePageComponent, SideNavBarComponent, SiteDetailsComponent, AddSiteDetailsComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MaterialModules,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      animationDuration: 300
    })
  ]
})
export class HomePageModule { }
