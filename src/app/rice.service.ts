import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RiceService {

  constructor(private firestore: AngularFirestore) {}

  getRice(): Observable<any[]> {
    return this.firestore.collection('Natures hut').doc('rice').collection('Items').valueChanges();
  }
}
