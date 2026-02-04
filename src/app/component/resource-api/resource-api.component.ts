import { Component, resource } from '@angular/core';

@Component({
  selector: 'app-resource-api',
  imports: [],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.css'
})
export class ResourceApiComponent {

   users = resource({
    loader: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      return res.json();
    }
  });

}
