import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SidebarModule } from './sidebar/sidebar.module';
import { JwtInterceptor } from './auth/services/jwt.interceptor';

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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
