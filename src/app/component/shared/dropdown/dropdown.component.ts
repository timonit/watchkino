import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent<T> {
  @Input() items: T[] = [];

  @Input() keyTitle: keyof T;

  showStatus = false;

  set show(value: boolean) {
    this.showStatus = value;
    this.showChange.emit(value);
  }

  @Input() get show(): boolean {
    return this.showStatus;
  }

  @Output() showChange = new EventEmitter<boolean>();

  @Output() selected = new EventEmitter<number>();

  inside = false;

  @HostListener('mousedown', ['$event']) insideClick(event: Event): void {
    this.inside = true;
  }

  @HostListener('document:mousedown', ['$event']) outsideClick(event: Event): void {
    if (!this.inside) {
      this.show = false;
    }
    this.inside = false;
  }

  select(index: number): void {
    this.selected.emit(index);
  }
}
