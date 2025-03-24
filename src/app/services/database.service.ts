import { Injectable } from '@angular/core';
import { Database, ref, onValue } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DatabaseService {
  constructor(private db: Database) {}

  readDB(path: string): Observable<any> {
    return new Observable((observer) => {
      const dbRef = ref(this.db, path);
      const unsubscribe = onValue(
        dbRef,
        (snapshot) => observer.next(snapshot.val()),
        (error) => observer.error(error)
      );
      return () => unsubscribe();
    });
  }
}
