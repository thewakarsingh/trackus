import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login1bComponent } from './login1b.component';

describe('Login1bComponent', () => {
  let component: Login1bComponent;
  let fixture: ComponentFixture<Login1bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Login1bComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Login1bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
