import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

}
