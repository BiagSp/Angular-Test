import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListVComponent } from './users-list-v.component';

describe('UsersListVComponent', () => {
  let component: UsersListVComponent;
  let fixture: ComponentFixture<UsersListVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersListVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
