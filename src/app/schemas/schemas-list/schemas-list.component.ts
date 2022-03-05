import { Component, Input, OnInit } from '@angular/core';
import { MatListOption, MatListOptionCheckboxPosition, MatSelectionListChange } from '@angular/material/list';
import { ISchema } from 'src/app/core/models/schema.interface';

@Component({
  selector: 'app-schemas-list',
  templateUrl: './schemas-list.component.html',
  styleUrls: ['./schemas-list.component.scss']
})
export class SchemasListComponent implements OnInit {
  @Input() schemas: ISchema[] = [];
  selected: ISchema[] = [];
  checkBoxPosition: MatListOptionCheckboxPosition = 'before';
  constructor() { }
  ngOnInit(): void {
  }
  onSelect(event: MatSelectionListChange) {
    const selected: MatListOption[] = event.source.selectedOptions.selected;
    this.selected = selected.map(s => s.value);
  }
}
