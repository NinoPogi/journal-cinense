import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  imports: [FormsModule, CommonModule],
  templateUrl: './homepage.component.html',
  standalone: true,
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  name = '';

  userInput = signal('');

  itemList: WritableSignal<string[]> = signal<string[]>([]);

  constructor() {
    this.itemList = signal<string[]>(this.loadFromLocalStorage()); 
  }

  addItem() {
    this.itemList.update((value) => {
      const updatedList = [...value, this.userInput()];
      this.saveToLocalStorage(updatedList);
      return updatedList;
    });
    this.userInput.set('');
    console.log(this.itemList());
  }

  private saveToLocalStorage(items: string[]) {
    localStorage.setItem('itemList', JSON.stringify(items));
  }

  private loadFromLocalStorage(): string[] {
    const storedItems = localStorage.getItem('itemList');
    return storedItems ? JSON.parse(storedItems) : [];
  }
}
