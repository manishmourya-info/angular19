import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';
import { ApiUser} from "../model/api.user";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient : HttpClient) { }

  getApplicationName() {
    return "Angular19";
  }

  getToDoList() {
    return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/todos/1');
  }

  getUsers(): Promise<any[]> {
    return firstValueFrom(this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/todos'));
  }

  getAllUses() {
    return this.httpClient.get<ApiUser[]>("https://jsonplaceholder.typicode.com/users").pipe(
      map(res => res.map(x=> ({id:x.id,name:x.name})))
    );
  }

}
