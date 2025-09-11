import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectsTableComponent } from './new-projects-table.component';

describe('NewProjectsTableComponent', () => {
  let component: NewProjectsTableComponent;
  let fixture: ComponentFixture<NewProjectsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProjectsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
