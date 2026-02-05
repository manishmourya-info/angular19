import { Component, linkedSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-linked-signal',
  imports: [FormsModule],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css'
})
export class LinkedSignalComponent {

  
  constructor() {
    
  }

  price = signal(0);
  quantity = signal(0);
  total = linkedSignal(() => this.price() * this.quantity());

  reset() {
    this.total.set(0);
    this.price.set(0);
    this.quantity.set(0);
  }

  parentCounter = signal(0);
  childCounter = linkedSignal(() => this.parentCounter());

  
  incrementP() {
      this.parentCounter.update( c => c + 1); //Update based on old value and child also
  }

  decrementP() {
      this.parentCounter.update( c => c - 1); //Update based on old value 
  }

  resetP() {
      this.parentCounter.set(0); //Set or Reset new value and child also
  }

  incrementC() {
      this.childCounter.update( c => c + 1); //Update based on old value * Overriding a Linked Signal
  }

  decrementC() {
      this.childCounter.update( c => c - 1); //Update based on old value * Overriding a Linked Signal
  }

  resetC() {
      this.childCounter.set(0); //Set or Reset new value * Overriding a Linked Signal
  }

}
