import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RouteApis } from '../constants/constants';
import { Post } from '../models';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>(RouteApis.getPosts).pipe(
      map((response) =>  response)
    );
  }
}
