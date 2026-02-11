import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorHeaderComponent } from './behavior-header.component';

describe('BehaviorHeaderComponent', () => {
  let component: BehaviorHeaderComponent;
  let fixture: ComponentFixture<BehaviorHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviorHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
