import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MomosService {

  constructor(private firestore: AngularFirestore) {}

  getMomos(): Observable<any[]> {
    return this.firestore.collection('Natures hut').doc('Momos').collection('Items').valueChanges();
  }
}
