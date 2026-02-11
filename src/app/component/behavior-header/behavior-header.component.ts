import { Component } from '@angular/core';
import { ThemeService } from '../../service/theme.service';

@Component({
  selector: 'app-behavior-header',
  imports: [],
  templateUrl: './behavior-header.component.html',
  styleUrl: './behavior-header.component.css'
})
export class BehaviorHeaderComponent {

  constructor(public theme : ThemeService){

  }

}
