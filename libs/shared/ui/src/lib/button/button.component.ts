import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() backgroundColor: 'blue' | 'red' = 'blue';
  @Input({ required: true }) text!: string;
}
