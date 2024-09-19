import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { single } from 'rxjs';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.scss']
})
export class DessertsComponent {

  selectedTab: string = 'Ice Cream'; // Default tab
  iceCreams: any;
  cakes: any;
 
  


 
  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

 

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    this.firestore.collection('Natures hut').doc('Desserts').collection('Cake').valueChanges()
      .subscribe(data => {
        this.cakes = data;
      });

      this.firestore.collection('Natures hut').doc('Desserts').collection('Ice Cream').valueChanges()
      .subscribe(data => {
        this.iceCreams = data;
      });

     
}
}
