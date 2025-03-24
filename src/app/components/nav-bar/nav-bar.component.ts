import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Database, onValue, ref } from '@angular/fire/database';

@Component({
  standalone: true,
  selector: 'app-nav-bar',
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  private db: Database = inject(Database);
  title = 'International Journal of Lantern and Cultural Studies';

  menuOpen = false;

  ngOnInit() {
    onValue(
      ref(this.db, '/'),
      (snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log('No data available');
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
