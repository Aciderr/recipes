import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { IonicModule } from '@ionic/angular';
import { ProductsComponent } from 'apps/mobile/src/app/products/products.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, IonicModule, ProductsComponent],
  selector: 'nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mobile';
}
