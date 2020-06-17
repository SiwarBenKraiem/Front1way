import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeQstionnaireComponent } from './liste-qstionnaire.component';

describe('ListeQstionnaireComponent', () => {
  let component: ListeQstionnaireComponent;
  let fixture: ComponentFixture<ListeQstionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeQstionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeQstionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
