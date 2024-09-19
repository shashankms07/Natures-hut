import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RollsService {

  constructor(private firestore: AngularFirestore) {}

  getRolls(): Observable<any[]> {
    return this.firestore.collection('Natures hut').doc('Rolls').collection('Items').valueChanges();
  }
}
