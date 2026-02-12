import { Component } from '@angular/core';
import { SingleSlotChildComponent } from '../single-slot-child/single-slot-child.component';

@Component({
  selector: 'app-single-slot',
  imports: [SingleSlotChildComponent],
  templateUrl: './single-slot.component.html',
  styleUrl: './single-slot.component.css'
})
export class SingleSlotComponent {

}
