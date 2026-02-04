import { HomeService } from './service/home.service';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private service : HomeService ) {

   } 

  appname:string = "Angular 19";
  destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const  c = setInterval(() => {
                  this.appname = this.service.getApplicationName();
                }, 1000);
                
    this.destroyRef.onDestroy(() => clearInterval(c));
  }


}
