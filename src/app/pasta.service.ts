import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PastasService {

  constructor(private firestore: AngularFirestore) {}

  getPastas(): Observable<any[]> {
    return this.firestore.collection('Natures hut').doc('pasta').collection('Items').valueChanges();
  }
}
