import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRouteListComponent } from './child-route-list.component';

describe('ChildRouteListComponent', () => {
  let component: ChildRouteListComponent;
  let fixture: ComponentFixture<ChildRouteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildRouteListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildRouteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
