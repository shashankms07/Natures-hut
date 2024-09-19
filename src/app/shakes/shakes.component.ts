import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-shakes',
  templateUrl: './shakes.component.html',
  styleUrls: ['./shakes.component.scss']
})
export class ShakesComponent {

  selectedTab: string = 'shakes'; // Default tab
  sodaBases: any;
  iceBases: any;
  shakes: any;


 
  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  coldBeverages: any[] = [];

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    this.firestore.collection('Natures hut').doc('Cold Beverages').collection('Shakes').valueChanges()
      .subscribe(data => {
        this.shakes = data;
      });

      this.firestore.collection('Natures hut').doc('Cold Beverages').collection('Soda Base').valueChanges()
      .subscribe(data => {
        this.sodaBases = data;
      });

      this.firestore.collection('Natures hut').doc('Cold Beverages').collection('Ice Base').valueChanges()
      .subscribe(data => {
        this.iceBases = data;
      });
      
  }

  
}
