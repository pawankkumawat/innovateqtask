import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersTilesComponent } from './users-tiles/users-tiles.component';
import { RouteStrings } from '../constants/constants';
import { FormsModule } from '@angular/forms';
import { AllMaterialModule } from '../material/material-module';

@NgModule({
  declarations: [UsersListComponent, UsersTilesComponent],
  imports: [
    CommonModule,
    FormsModule,
    AllMaterialModule,
    RouterModule.forChild([
      {
        path: RouteStrings.userlist,
        component: UsersListComponent,
      },
      {
        path: RouteStrings.usertiles,
        component: UsersTilesComponent,
      },
      // {
      //   path: 'users',
      //   component: UsersListComponent,
      //   children: [
      //     {
      //       path: '',
      //       redirectTo: 'list'
      //     },
      //     {
      //       path: 'list',
      //       component: UsersListComponent
      //     },
      //     {
      //       path: 'tiles',
      //       component: UsersTilesComponent
      //     }
      //   ]
      // }
    ]),
  ],
})
export class UsersModule {}
