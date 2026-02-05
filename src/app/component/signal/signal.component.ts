import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {

  constructor() {
    //Run side effects
    effect(()=>{
      console.log(" counter value changed ",this.counter());
    });
  }

  counter = signal(0);
  count = this.counter.asReadonly();

  increment() {
      this.counter.update( c => c + 1); //Update based on old value
  }

  decrement() {
      this.counter.update( c => c - 1); //Update based on old value
  }

  reset() {
      this.counter.set(0); //Set or Reset new value
  }

}
