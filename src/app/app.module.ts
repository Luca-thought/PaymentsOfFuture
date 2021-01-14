import { HomePageComponent } from './pages/home-page/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SortFilter } from '@app-filter/sortFilter.pipe';
import { AppRoutingModule } from './app-routing,module';
import { YourCashback } from './pages/your-cashback/your-cashback.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    YourCashback,
    SortFilter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
   ,MatIconModule
   ,MatTabsModule
  ],
  exports: [
    SortFilter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
