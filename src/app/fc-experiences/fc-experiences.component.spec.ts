import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcExperiencesComponent } from './fc-experiences.component';

describe('FcExperiencesComponent', () => {
  let component: FcExperiencesComponent;
  let fixture: ComponentFixture<FcExperiencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcExperiencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
