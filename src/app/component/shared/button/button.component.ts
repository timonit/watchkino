import { Component, HostBinding, Input } from '@angular/core';

type SizeVariant = 'sm' | 'md' | 'lg';

type StyleVariant = 'success' | 'danger' | 'primary';

const fontSize = {
  sm: '10pt',
  md: '13pt',
  lg: '16pt',
};

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() size: SizeVariant = 'sm';

  @Input() variant: StyleVariant = 'primary';

  @HostBinding('style.fontSize') get fontSize(): string {
    return fontSize[this.size];
  }

  @HostBinding('class') get styleClass(): string {
    return this.variant;
  }
}
