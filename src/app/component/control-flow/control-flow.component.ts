import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {

  showcontent = true;

  array = ['C','C++','Python', 'Java', 'ML'];

  switchid = 2;

}
