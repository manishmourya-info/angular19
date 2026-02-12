import { CommonModule } from '@angular/common';
import { APP_ID, Component, inject, OnInit, Pipe, DestroyRef } from '@angular/core';
import { concatMap, debounceTime, distinctUntilChanged, exhaustMap, filter, flatMap, forkJoin, from, fromEvent, interval, map, mergeMap, Observable, of, Subject, switchMap, take, takeUntil } from 'rxjs';
import { HomeService } from '../../service/home.service';
import { ApiUser } from '../../model/api.user';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-rxjs-operators',
  imports: [CommonModule, ReactiveFormsModule],
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
  nameControl$ = new FormControl('');
  http = inject(HttpClient);
  results = undefined;
  forkJoinResults:number[] =[]; 
  loginClick$ = new Subject<void>();

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
   
    // forkJoin 
    forkJoin([
        of(1),
        of(2),
        of(3)
      ]).subscribe(result => {
        this.forkJoinResults = result;
      });

    const posts$ = this.http.get("https://jsonplaceholder.typicode.com/posts");
    const users$ = this.http.get("https://jsonplaceholder.typicode.com/users");
    
    // forkJoin
    forkJoin([posts$,users$]).subscribe((x:any)=> {
          console.log(x);
        },error=>{
          console.log("error");
        }
      );

    /*  
    this.nameControl$.valueChanges.subscribe((x:string|null)=>{
      if (x != null) {  
        this.http.get("https://dummyjson.com/products/search?q="+x).subscribe(x=>{
          console.log(x);
        });
      }
    });
    */

    /*
    switchMap example  
    this.nameControl$.valueChanges.pipe(
      switchMap((x:string|null)=>this.http.get("https://dummyjson.com/products/search?q="+x))
    ).subscribe(x=>{
      console.log(x);
    });

    */
    
    /*
    mergeMap
    this.nameControl$.valueChanges.pipe(
      mergeMap((x:string|null)=>this.http.get("https://dummyjson.com/products/search?q="+x))
    ).subscribe(x=>{
      console.log(x);
    });
    
    */

    /*
    concatMap  
    this.nameControl$.valueChanges.pipe(
      concatMap((x:string|null)=>this.http.get("https://dummyjson.com/products/search?q="+x))
    ).subscribe(x=>{
      console.log(x);
    });

    */

    //exhaustMap
    this.loginClick$.pipe(
      exhaustMap(()=>this.http.get("https://jsonplaceholder.typicode.com/users"))
    ).subscribe(x=>{
      console.log(x);
    });  

    /*
 
    this.nameControl$.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter((value): value is string => !!value),
      mergeMap(value =>
        this.http.get(`https://jsonplaceholder.typicode.com/todos/${value}`)
      )
    ).subscribe(results => {
        console.log(results);
    }

    );*/
    
 
  }

  stop() {
    this.flag$.next();
    this.flag$.complete();
    this.flag$.unsubscribe();
  }

  onClick() {
    this.loginClick$.next();
  }

}
