import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesSpecComponent } from './tables-spec.component';

describe('TablesSpecComponent', () => {
  let component: TablesSpecComponent;
  let fixture: ComponentFixture<TablesSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesSpecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
