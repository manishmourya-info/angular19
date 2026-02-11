import { effect, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';


type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themeSubject = new BehaviorSubject<Theme>('light');
  theme$ = this.themeSubject.asObservable();
  theme = toSignal(this.theme$,{initialValue:'light'});

  constructor() {
    effect(() => {
      document.body.classList.toggle('dark', this.theme() === 'dark');
    });
   }

  toggle() {
    this.themeSubject.next(this.theme() === 'light' ? 'dark' : 'light');
  }

  set(theme: Theme) {
    this.themeSubject.next(theme);
  }

}
