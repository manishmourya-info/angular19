import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRouteDetailsComponent } from './child-route-details.component';

describe('ChildRouteDetailsComponent', () => {
  let component: ChildRouteDetailsComponent;
  let fixture: ComponentFixture<ChildRouteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildRouteDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildRouteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
