import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesDomaineComponent } from './tables-domaine.component';

describe('TablesDomaineComponent', () => {
  let component: TablesDomaineComponent;
  let fixture: ComponentFixture<TablesDomaineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesDomaineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
