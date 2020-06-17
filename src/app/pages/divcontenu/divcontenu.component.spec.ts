import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivcontenuComponent } from './divcontenu.component';

describe('DivcontenuComponent', () => {
  let component: DivcontenuComponent;
  let fixture: ComponentFixture<DivcontenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivcontenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivcontenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
