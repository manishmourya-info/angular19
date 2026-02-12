import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-multi-slot-child',
  imports: [],
  templateUrl: './multi-slot-child.component.html',
  styleUrl: './multi-slot-child.component.css'
})
export class MultiSlotChildComponent implements AfterContentInit {

  @ContentChild('header') headerContent!: ElementRef;

  ngAfterContentInit(): void {
    console.log("Content Child : "+ this.headerContent.nativeElement.textContent);
  }


}
