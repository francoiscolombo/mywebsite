import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcWorkComponent } from './fc-work.component';

describe('FcWorkComponent', () => {
  let component: FcWorkComponent;
  let fixture: ComponentFixture<FcWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
