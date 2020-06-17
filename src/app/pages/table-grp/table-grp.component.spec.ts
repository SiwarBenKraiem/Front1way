import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGrpComponent } from './table-grp.component';

describe('TableGrpComponent', () => {
  let component: TableGrpComponent;
  let fixture: ComponentFixture<TableGrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableGrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableGrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
