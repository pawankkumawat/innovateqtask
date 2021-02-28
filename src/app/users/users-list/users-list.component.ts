import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { COLORS, NAMES } from 'src/app/constants/constants';
import { User } from 'src/app/models';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'designation', 'joiningdate'];
  dataSource$: Observable<MatTableDataSource<User>>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private usersService: UsersService) {}
  ngOnInit(): void {
    this.dataSource$ = this.usersService.users$.pipe(
      map((users) => {
        let ds = new MatTableDataSource(users);
        ds.paginator = this.paginator;
        ds.sort = this.sort;
        return ds;
      })
    );
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }
}
