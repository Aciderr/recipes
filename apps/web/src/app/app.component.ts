import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControl } from "@angular/forms";

@Component({
  standalone: true,
  imports: [RouterModule, NgComponentOutlet],
  selector: 'fo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'nx';
  component: any;

  async ngOnInit(): Promise<void> {
    setTimeout(async () => {
      const { TopNavigationComponent } = await import(
        './recipes/components/top-navigation/top-navigation.component'
      );
      this.component = TopNavigationComponent;
    }, 2000);
  }
}
