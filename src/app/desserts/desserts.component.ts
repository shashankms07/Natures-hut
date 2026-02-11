import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.scss']
})
export class DessertsComponent {

  selectedTab: string = 'Ice Cream';
  iceCreams: any[] = [];
  cakes: any[] = [];

  loadingDesserts = true;   // spinner flag

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {

    this.firestore.collection('Natures hut').doc('Desserts')
      .collection('Cake').valueChanges()
      .subscribe(data => {
        this.cakes = data;
        this.loadingDesserts = false;   // stop spinner
      });

    this.firestore.collection('Natures hut').doc('Desserts')
      .collection('Ice Cream').valueChanges()
      .subscribe(data => {
        this.iceCreams = data;
        this.loadingDesserts = false;   // stop spinner
      });
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
}
