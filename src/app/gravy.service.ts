import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GravyService {

  constructor(private firestore: AngularFirestore) {}

  Getgravy(): Observable<any[]> {
    return this.firestore.collection('Natures hut').doc('Gravy').collection('Items').valueChanges();
  }
}
