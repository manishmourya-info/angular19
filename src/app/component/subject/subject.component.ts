import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { RefreshService } from '../../service/refresh.service';
import { ToolbarComponent } from "../toolbar/toolbar.component";

@Component({
  selector: 'app-subject',
  imports: [ToolbarComponent],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit,OnDestroy {

  
  readonly subject$ = new Subject<number>();

  constructor(private refreshService: RefreshService) {
        this.refreshService.refresh$.
        pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.loadData();
        });
  }

  ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
  }

  loadData() {
    console.log('Reload data');
  }
  
  ngOnInit(): void {
    this.subject$.subscribe(v => console.log('A:', v));
    this.subject$.subscribe(v => console.log('B:', v));
    this.subject$.next(1);
  }


  private destroy$ = new Subject<void>();

  
}
