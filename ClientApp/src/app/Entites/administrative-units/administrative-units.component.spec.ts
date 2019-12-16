import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeUnitsComponent } from './administrative-units.component';

describe('AdministrativeUnitsComponent', () => {
  let component: AdministrativeUnitsComponent;
  let fixture: ComponentFixture<AdministrativeUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrativeUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativeUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
