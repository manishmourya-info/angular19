import { CommonModule } from '@angular/common';
import { APP_ID, Component, inject, OnInit, Pipe, DestroyRef } from '@angular/core';
import { filter, from, fromEvent, interval, map, Observable, of, Subject, take, takeUntil } from 'rxjs';
import { HomeService } from '../../service/home.service';
import { ApiUser } from '../../model/api.user';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';



@Component({
  selector: 'app-rxjs-operators',
  imports: [CommonModule],
  templateUrl: './rxjs-operators.component.html',
  styleUrl: './rxjs-operators.component.css'
})
export class RxjsOperatorsComponent implements OnInit {

  service = inject(HomeService);
  mapValues$ :Observable<{ id: number; name: string }[]> | undefined;
  numbers$ = of(1, 2, 3, 4, 5, 6, 8);
  array$ = from([1, 2, 3, 4, 5, 6, 8, 9, 10]);
  ofValues:number[] = [];
  takeValues:number[] = [];
  takeUntillValues:number[] = [];
  flag$ = new Subject<void>();

  constructor(private destroyRef: DestroyRef){
  
    this.numbers$.pipe(
      filter(x => x%2 == 0)
    ).subscribe(x=>{
        this.ofValues.push(x);
    });
  
    this.array$
    .pipe(map(x=> x*2))
    .subscribe(x=> console.log(x));
  
  }
  
  ngOnInit(): void {
    
    this.mapValues$ = this.service.getAllUses();

    interval(1000).pipe(take(5)).subscribe(x=> this.takeValues.push(x));

    interval(1000).pipe(takeUntil(this.flag$)).subscribe(x=> this.takeUntillValues.push(x));


    //interval(1000).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(x=> this.takeUntillValues.push(x));
    
  }

  stop() {
    this.flag$.next();
    this.flag$.complete();
    this.flag$.unsubscribe();
  }


}
