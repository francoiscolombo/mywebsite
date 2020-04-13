import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcContactComponent } from './fc-contact.component';

describe('FcContactComponent', () => {
  let component: FcContactComponent;
  let fixture: ComponentFixture<FcContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
