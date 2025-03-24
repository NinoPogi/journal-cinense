import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  imports: [FormsModule],
  templateUrl: './homepage.component.html',
  standalone: true,
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  name = '';
}
