import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduserpreferenceComponent } from './adduserpreference.component';

describe('AdduserpreferenceComponent', () => {
  let component: AdduserpreferenceComponent;
  let fixture: ComponentFixture<AdduserpreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdduserpreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduserpreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
