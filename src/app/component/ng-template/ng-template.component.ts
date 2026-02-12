import { Component } from '@angular/core';
import { NgTemplateChildComponent } from '../ng-template-child/ng-template-child.component';

@Component({
  selector: 'app-ng-template',
  imports: [NgTemplateChildComponent],
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.css'
})
export class NgTemplateComponent {

}
