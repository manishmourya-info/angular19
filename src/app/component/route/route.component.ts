import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-route',
  imports: [RouterModule],
  templateUrl: './route.component.html',
  styleUrl: './route.component.css'
})
export class RouteComponent implements OnInit {

  id = "";
  category = "";
  title = "";
  
  constructor(private route : ActivatedRoute, private router: Router) {
      this.route.data.subscribe(d => this.title = d['title'])!;
  }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")!;
    this.route.queryParamMap.subscribe(params => {
      this.category = params.get('category')!;
    });
  }

  click() {
    this.router.navigate(['/route'], {
      queryParams: { category: 'books', page: 2 }
    });
  }

}
