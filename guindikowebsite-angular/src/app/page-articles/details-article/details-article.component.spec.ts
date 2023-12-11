import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsArticleComponent } from './details-article.component';

describe('DetailsArticleComponent', () => {
  let component: DetailsArticleComponent;
  let fixture: ComponentFixture<DetailsArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsArticleComponent]
    });
    fixture = TestBed.createComponent(DetailsArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
