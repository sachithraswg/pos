import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserListComponent } from './user-list.component';
import { UserDetailComponent } from './user-detail.component';

@NgModule({
  imports: [SharedModule, UserManagementRoutingModule, UserListComponent, UserDetailComponent]
})
export class UserManagementModule {}
