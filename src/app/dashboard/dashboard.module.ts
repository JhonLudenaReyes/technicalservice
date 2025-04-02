import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { MainComponent } from './components/main/main.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [AdminComponent, MainComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
