import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksWebHeaderComponent } from './books-web-header.component';

describe('BooksWebHeaderComponent', () => {
  let component: BooksWebHeaderComponent;
  let fixture: ComponentFixture<BooksWebHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksWebHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksWebHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
