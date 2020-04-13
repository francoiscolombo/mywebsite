import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcBlogArticlesComponent } from './fc-blog-articles.component';

describe('FcBlogArticlesComponent', () => {
  let component: FcBlogArticlesComponent;
  let fixture: ComponentFixture<FcBlogArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcBlogArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcBlogArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
