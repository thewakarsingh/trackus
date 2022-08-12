import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByMeComponent } from './by-me.component';

describe('ByMeComponent', () => {
  let component: ByMeComponent;
  let fixture: ComponentFixture<ByMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
