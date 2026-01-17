import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { MainComponent } from './components/main/main.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarModule } from 'src/app/sidebar/sidebar.module';

@NgModule({
  declarations: [AdminComponent, MainComponent],
  imports: [CommonModule, DashboardRoutingModule, SidebarModule],
})
export class DashboardModule {}
