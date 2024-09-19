import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private firestore: AngularFirestore) {}

  getPizzas(): Observable<any[]> {
    return this.firestore.collection('Natures hut').doc('Pizza').collection('Items').valueChanges();
  }
}
