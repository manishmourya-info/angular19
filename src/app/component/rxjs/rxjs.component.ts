import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, interval, Observable, of, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  imports: [CommonModule],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent implements OnInit,OnDestroy {
 
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  
  sub!: Subscription;
  value$ :Observable<any> | undefined;
  values : any[] | undefined = ["A", "B"];
  of$ = of(1, 2, 3);                 // emits values
  from$ = from([1, 2, 3]);             // from array
  fetch$ = from(fetch('https://jsonplaceholder.typicode.com/todos/1'));    // from promise
  interval$ = interval(1000);              // every second
  timer$ = timer(3000);                 // after 2 seconds


  ngOnInit(): void {
    this.value$ = new Observable((value) => {
        value.next(1);
        value.next("Manish Mourya");
        value.next(1.233);
        value.error("NULLPointerException");
        value.complete();
  });

  this.sub = this.value$.subscribe(x => {
      this.values?.push(x);  
  });

  this.value$.subscribe({
    next: value => console.log(value),
    error: err => console.error(err),
    complete: () => console.log('Done')
  });

}


  

  
  
}
