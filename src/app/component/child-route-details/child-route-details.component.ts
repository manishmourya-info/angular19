import { ActivatedRoute } from '@angular/router';
import { routes } from './../../app.routes';
import { Component } from '@angular/core';

@Component({
  selector: 'app-child-route-details',
  imports: [],
  templateUrl: './child-route-details.component.html',
  styleUrl: './child-route-details.component.css'
})
export class ChildRouteDetailsComponent {

  id = "";

  constructor(private routes : ActivatedRoute) {
      this.id = this.routes.snapshot.paramMap.get("id")!;
  }

}
