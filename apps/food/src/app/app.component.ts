import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopNavigationComponent } from './recipes/components/top-navigation/top-navigation.component';

@Component({
  standalone: true,
  imports: [RouterModule, TopNavigationComponent],
  selector: 'fo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nx';
}
