import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcWhoamiComponent } from './fc-whoami.component';

describe('FcWhoamiComponent', () => {
  let component: FcWhoamiComponent;
  let fixture: ComponentFixture<FcWhoamiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcWhoamiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcWhoamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
