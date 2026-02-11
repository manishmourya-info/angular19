import { Component } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promise',
  imports: [CommonModule],
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.css'
})
export class PromiseComponent {

constructor(private service : HomeService) {

}

 users :any[] = [];

 async loadUser() {
  try {
    this.users = await this.service.getUsers();
  } catch (e) {
    console.error(e);
  }
}


  getUsers() {
    this.service.getUsers()
    .then(x => this.users = x)
    .catch(x => console.log(x))
    .finally(() => {
        // cleanup task
    });
  }

}
