import { HomePageComponent } from './pages/home-page/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortFilter } from '@app-filter/sortFilter.pipe';
import { AppRoutingModule } from './app-routing,module';
import { YourCashback } from './pages/your-cashback/your-cashback.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FilterPipe } from '@app-filter/appFitler.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    YourCashback,
    SortFilter,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
    //,MatFormFieldModule
   ,MatIconModule
   ,MatTabsModule
   ,MatInputModule
   ,MatButtonModule
   ,MatButtonToggleModule
   ,ReactiveFormsModule

  ],
  exports: [
    SortFilter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
