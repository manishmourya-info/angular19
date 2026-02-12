import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSlotChildComponent } from './single-slot-child.component';

describe('SingleSlotChildComponent', () => {
  let component: SingleSlotChildComponent;
  let fixture: ComponentFixture<SingleSlotChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleSlotChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleSlotChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
