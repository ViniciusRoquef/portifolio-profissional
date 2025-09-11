import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectsFilterComponent } from './new-projects-filter.component';

describe('NewProjectsFilterComponent', () => {
  let component: NewProjectsFilterComponent;
  let fixture: ComponentFixture<NewProjectsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProjectsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
