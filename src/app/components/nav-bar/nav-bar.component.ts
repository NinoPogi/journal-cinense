import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  OnDestroy,
  signal,
  WritableSignal,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from '../../services/database.service';
import { RouterModule } from '@angular/router';

interface MenuItem {
  dropdown: boolean;
  route: string;
  subpages: SubPage[];
  title: string;
}

interface SubPage {
  route: string;
  title: string;
}

@Component({
  standalone: true,
  selector: 'app-nav-bar',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent implements OnDestroy {
  private databaseService = inject(DatabaseService);
  title = '';
  menuOpen = false;
  menuList: WritableSignal<MenuItem[]> = signal<MenuItem[]>([]);
  private subscription: Subscription | undefined;

  ngOnInit() {
    this.subscription = this.databaseService.readDB('/menuItems').subscribe({
      next: (data: MenuItem[]) => {
        if (data) {
          const valuesArray = Object.values(data)
            .map((value) => value as MenuItem)
            .filter((item) => !!item);

          this.menuList.set(valuesArray);
        }
      },
      error: (error) => console.error(error),
    });

    this.subscription = this.databaseService.readDB('/title').subscribe({
      next: (data: string) => {
        if (data) {
          console.log(data);
          this.title = data;
        }
      },
      error: (error) => console.error(error),
    });
  }

  ngOnDestroy(): void {
    this.subscription!.unsubscribe();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  getFilteredSubPages(menu: MenuItem) {
    return menu.subpages ? menu.subpages.filter((sub: SubPage) => sub) : [];
  }
}
