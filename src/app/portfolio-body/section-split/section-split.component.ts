import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-split',
  templateUrl: './section-split.component.html',
  styleUrls: ['./section-split.component.scss']
})
export class SectionSplitComponent implements OnInit {

  @Input() title: string = '';
  @Input() sectionId: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
