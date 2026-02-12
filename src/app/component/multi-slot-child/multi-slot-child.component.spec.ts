import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSlotChildComponent } from './multi-slot-child.component';

describe('MultiSlotChildComponent', () => {
  let component: MultiSlotChildComponent;
  let fixture: ComponentFixture<MultiSlotChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSlotChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSlotChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
