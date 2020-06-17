import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutSpecialiteComponent } from './ajout-specialite.component';

describe('AjoutSpecialiteComponent', () => {
  let component: AjoutSpecialiteComponent;
  let fixture: ComponentFixture<AjoutSpecialiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutSpecialiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutSpecialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
