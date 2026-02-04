import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BoldDirective } from '../../directive/bold.directive';

@Component({
  selector: 'app-directive',
  imports: [CommonModule,BoldDirective],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {

  checkDisplay = true;

  classArry:string[] = ['Angular','React','Java','CSS'];

  roleid:number = 1;

  toggleClass = true;

  style = { color: 'red', 'font-size': '20px' };

}
