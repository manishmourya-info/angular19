import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MultiSlotChildComponent } from '../multi-slot-child/multi-slot-child.component';

@Component({
  selector: 'app-multi-slot',
  imports: [MultiSlotChildComponent],
  templateUrl: './multi-slot.component.html',
  styleUrl: './multi-slot.component.css'
})
export class MultiSlotComponent implements OnInit,AfterViewInit {
 
 @ViewChild("multi") multi! : ElementRef;

  ngAfterViewInit(): void {
    console.log("View Child : "+this.multi.nativeElement.textContent);
  }

  ngOnInit(): void {
    //alert(this.multi.nativeElement.textContent);
  }

  

}
