import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryOfFileComponent } from './category-of-file.component';

describe('CategoryOfFileComponent', () => {
  let component: CategoryOfFileComponent;
  let fixture: ComponentFixture<CategoryOfFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryOfFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryOfFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
