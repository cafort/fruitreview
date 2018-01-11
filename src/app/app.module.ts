import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FruitComponent } from './fruit/fruit.component';
import { CategoriesService } from "./shared/services/categories.service";
import { FruitsService } from "./shared/services/fruits.service";
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    FruitComponent,
    FruitDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CategoriesService,
    FruitsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
