import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {
    this.getUsers();
  }

  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  getUsers(){
    this.http
      .get<User[]>(
        'https://my-json-server.typicode.com/pawankkumawat/demo/users'
      )
      .pipe(
        tap((data: User[]) => {
          console.log(data);
          this.usersSubject.next(data);
          return data;
        }),
        map((x) => x)
      ).subscribe();
  }
}
