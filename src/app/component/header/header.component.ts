import { Component, ElementRef, Input, input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnChanges {


  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges hook called now with change",changes);
  }

  @Input() appname!:string; 
}
