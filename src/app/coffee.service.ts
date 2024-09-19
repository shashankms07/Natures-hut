import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor(private firestore: AngularFirestore) {}

  getCoffee(): Observable<any[]> {
    return this.firestore.collection('Natures hut').doc('Hot Beverages').collection('Items').valueChanges();
  }
}
