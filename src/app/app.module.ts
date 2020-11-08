import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbNavModule} from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {ClassMatsComponent} from './class/class-mats.component';
import {ItemCategoryComponent} from './item-category/item-category.component';
import {DataService} from './data/data-service'

@NgModule({
  declarations: [
    AppComponent,
    ClassMatsComponent,
    ItemCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbNavModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
