import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcResponsabilitiesComponent } from './fc-responsabilities.component';

describe('FcResponsabilitiesComponent', () => {
  let component: FcResponsabilitiesComponent;
  let fixture: ComponentFixture<FcResponsabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcResponsabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcResponsabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
