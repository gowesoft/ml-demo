import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeModule } from './home/home.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
    declarations: [
        AppComponent,
        SearchBoxComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }