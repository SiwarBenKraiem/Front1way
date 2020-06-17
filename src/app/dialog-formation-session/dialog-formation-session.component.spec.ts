import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormationSessionComponent } from './dialog-formation-session.component';

describe('DialogFormationSessionComponent', () => {
  let component: DialogFormationSessionComponent;
  let fixture: ComponentFixture<DialogFormationSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFormationSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFormationSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
