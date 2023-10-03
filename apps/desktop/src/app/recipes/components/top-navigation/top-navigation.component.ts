import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'fo-top-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './top-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavigationComponent {}
