import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StartersService {

  constructor(private firestore: AngularFirestore) {}

  getStarters(): Observable<any[]> {
    return this.firestore.collection('Natures hut').doc('Starters').collection('Items').valueChanges();
  }
}
