import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-computed-signal',
  imports: [FormsModule,CommonModule],
  templateUrl: './computed-signal.component.html',
  styleUrl: './computed-signal.component.css'
})
export class ComputedSignalComponent {

  constructor() {
    
  }

  price = signal(100);
  quantity = signal(2);

  total = computed(() => this.price() * this.quantity());


}
