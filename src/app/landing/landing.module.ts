import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  declarations: [LandingComponent],
  exports: [LandingComponent],
  imports: [CommonModule, LandingRoutingModule],
})
export class LandingModule {}
