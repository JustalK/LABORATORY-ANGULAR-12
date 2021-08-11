import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childparent-child',
  templateUrl: './template.component.html',
})
export default class CustomComponent implements OnChanges {
  @Input() myValue: number = 0;

  private _count = 0;

  private childValue = 0;
  @Output() countChanged: EventEmitter<number> = new EventEmitter();

  @Input()
  set count(v: number) {
    this._count = v;
  }

  get count(): number {
    return this._count;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.childValue += 1;
    this.countChanged.emit(this.childValue);
  }
}
