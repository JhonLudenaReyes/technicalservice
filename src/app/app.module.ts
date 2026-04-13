import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SidebarModule } from './sidebar/sidebar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NavigationModule,
    SidebarModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
