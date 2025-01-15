import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoodlesService {


  constructor(private firestore: AngularFirestore) {}

  getNoodles(): Observable<any[]> {
    return this.firestore.collection('Natures hut').doc('Noodles').collection('Items').valueChanges();
  }
}
