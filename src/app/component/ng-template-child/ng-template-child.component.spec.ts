import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateChildComponent } from './ng-template-child.component';

describe('NgTemplateChildComponent', () => {
  let component: NgTemplateChildComponent;
  let fixture: ComponentFixture<NgTemplateChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTemplateChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTemplateChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
