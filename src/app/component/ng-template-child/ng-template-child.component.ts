import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-ng-template-child',
  imports: [CommonModule],
  templateUrl: './ng-template-child.component.html',
  styleUrl: './ng-template-child.component.css'
})
export class NgTemplateChildComponent implements AfterContentInit {
  
  ngAfterContentInit(): void {
      console.log("Header :" + this.headerTpl.elementRef.nativeElement.textcontent);
      console.log("Footer : "+this.footerTpl.elementRef.nativeElement.textcontent);
  }

  @ContentChild('header') headerTpl!: TemplateRef<any>;
  @ContentChild('footer') footerTpl!: TemplateRef<any>;
  showHeader : boolean = false;
  showFooter : boolean = false;


}
