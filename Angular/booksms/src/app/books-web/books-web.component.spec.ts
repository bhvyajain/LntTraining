import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksWebComponent } from './books-web.component';

describe('BooksWebComponent', () => {
  let component: BooksWebComponent;
  let fixture: ComponentFixture<BooksWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
