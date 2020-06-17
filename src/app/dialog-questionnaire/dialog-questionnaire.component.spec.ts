import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogQuestionnaireComponent } from './dialog-questionnaire.component';

describe('DialogQuestionnaireComponent', () => {
  let component: DialogQuestionnaireComponent;
  let fixture: ComponentFixture<DialogQuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogQuestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
