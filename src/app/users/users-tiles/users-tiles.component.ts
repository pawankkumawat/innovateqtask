import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-tiles',
  templateUrl: './users-tiles.component.html',
  styleUrls: ['./users-tiles.component.scss'],
})
export class UsersTilesComponent implements OnInit {
  users$: Observable<User[]>;
  constructor(private usersService: UsersService) {}
  ngOnInit(): void {
    this.users$ = this.usersService.users$;
  }
}
