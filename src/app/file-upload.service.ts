import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private storage: AngularFireStorage, private firestore: AngularFirestore) { }

  uploadImage(file: File): Observable<string> {
    const filePath = `images/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    return new Observable(observer => {
      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            observer.next(url);
            observer.complete();
          });
        })
      ).subscribe();
    });
  }

  saveData(name: string, age: number, city: string, imageUrl: string) {
    const id = this.firestore.createId(); // Generate a unique ID for the document
    return this.firestore.collection('people').doc(id).set({
      name,
      age,
      city,
      imageUrl
    });
  }

  getImageById(documentId: string): Observable<any> {
    return this.firestore.collection('people').doc(documentId).snapshotChanges().pipe(
      map(action => {
        const data = action.payload.data() as any;
        const id = action.payload.id;
        return { id, ...data };
      })
    );
  }
}
