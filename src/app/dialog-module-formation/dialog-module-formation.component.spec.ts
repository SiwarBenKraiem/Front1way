import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogModuleFormationComponent } from './dialog-module-formation.component';

describe('DialogModuleFormationComponent', () => {
  let component: DialogModuleFormationComponent;
  let fixture: ComponentFixture<DialogModuleFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogModuleFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogModuleFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
