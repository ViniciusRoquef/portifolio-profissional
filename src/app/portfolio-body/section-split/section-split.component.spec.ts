import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSplitComponent } from './section-split.component';

describe('SectionSplitComponent', () => {
  let component: SectionSplitComponent;
  let fixture: ComponentFixture<SectionSplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSplitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
