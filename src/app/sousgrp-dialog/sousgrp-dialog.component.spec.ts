import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousgrpDialogComponent } from './sousgrp-dialog.component';

describe('SousgrpDialogComponent', () => {
  let component: SousgrpDialogComponent;
  let fixture: ComponentFixture<SousgrpDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousgrpDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousgrpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
