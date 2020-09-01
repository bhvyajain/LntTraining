import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksWebFooterComponent } from './books-web-footer.component';

describe('BooksWebFooterComponent', () => {
  let component: BooksWebFooterComponent;
  let fixture: ComponentFixture<BooksWebFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksWebFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksWebFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
