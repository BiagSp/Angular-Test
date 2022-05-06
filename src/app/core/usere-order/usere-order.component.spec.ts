import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsereOrderComponent } from './usere-order.component';

describe('UsereOrderComponent', () => {
  let component: UsereOrderComponent;
  let fixture: ComponentFixture<UsereOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsereOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsereOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
