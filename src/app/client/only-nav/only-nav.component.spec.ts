import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyNavComponent } from './only-nav.component';

describe('OnlyNavComponent', () => {
  let component: OnlyNavComponent;
  let fixture: ComponentFixture<OnlyNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlyNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
