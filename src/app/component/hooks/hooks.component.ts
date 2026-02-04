import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  imports: [],
  templateUrl: './hooks.component.html',
  styleUrl: './hooks.component.css'
})
export class HooksComponent implements OnInit,OnDestroy,OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  constructor() {
   console.log("constructor");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges hook called now");
  }
 
  ngOnInit(): void {
    console.log("OnInit hook called now");
  }
  
  ngAfterContentInit(): void {
    console.log("AfterContentInit hook called now");
  }

  ngAfterContentChecked(): void {
    console.log("AfterContentChecked hook called now");
  }

  ngAfterViewChecked(): void {
    console.log("AfterViewChecked hook called now");
  }
  
  ngAfterViewInit(): void {
    console.log("AfterViewInit hook called now");
  }

  ngDoCheck(): void {
    console.log("DoCheck hook called now");
  }

  ngOnDestroy(): void {
      console.log("OnDestroy hook called now");
   }

}
