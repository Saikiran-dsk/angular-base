import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http : HttpClient) { }
  postsUrl = "https://jsonplaceholder.typicode.com/posts";

  getData():Observable<User>{
    return this.http.get<User>(this.postsUrl);
  }
}
