import { Component } from '@angular/core';
import { ThemeService } from '../../service/theme.service';
import { BehaviorHeaderComponent } from "../behavior-header/behavior-header.component";

@Component({
  selector: 'app-behavior-subject',
  imports: [BehaviorHeaderComponent],
  templateUrl: './behavior-subject.component.html',
  styleUrl: './behavior-subject.component.css'
})
export class BehaviorSubjectComponent {

    constructor(public theme: ThemeService) {}


}
