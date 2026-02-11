import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-shakes',
  templateUrl: './shakes.component.html',
  styleUrls: ['./shakes.component.scss']
})
export class ShakesComponent {

  selectedTab: string = 'shakes';

  sodaBases: any[] = [];
  iceBases: any[] = [];
  shakes: any[] = [];

  loadingShakes = true;   // spinner flag
  loadingCount = 0;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {

    this.firestore.collection('Natures hut').doc('Cold Beverages')
      .collection('Shakes').valueChanges()
      .subscribe(data => {
        this.shakes = data;
        this.checkLoading();
      });

    this.firestore.collection('Natures hut').doc('Cold Beverages')
      .collection('Soda Base').valueChanges()
      .subscribe(data => {
        this.sodaBases = data;
        this.checkLoading();
      });

    this.firestore.collection('Natures hut').doc('Cold Beverages')
      .collection('Ice Base').valueChanges()
      .subscribe(data => {
        this.iceBases = data;
        this.checkLoading();
      });
  }

  checkLoading() {
    this.loadingCount++;
    if (this.loadingCount === 3) {
      this.loadingShakes = false;
    }
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
}
