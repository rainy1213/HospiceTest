import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorpreferenceComponent } from './colorpreference.component';

describe('ColorpreferenceComponent', () => {
  let component: ColorpreferenceComponent;
  let fixture: ComponentFixture<ColorpreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorpreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorpreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
