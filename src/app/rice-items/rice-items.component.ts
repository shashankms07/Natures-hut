import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rice-items',
  templateUrl: './rice-items.component.html',
  styleUrls: ['./rice-items.component.scss']
})
export class RiceItemsComponent implements OnInit {

  rices: any[] = [];
  filteredRices: any[] = [];
  selectedTab: string = 'All';

  ngOnInit(): void {
    this.loadRice();
  }

  // Static data
  loadRice(): void {
    this.rices = [
      { name: 'Curd Rice', price: 100, type: 'Veg' },
      { name: 'Mushroom Fried Rice', price: 130, type: 'Veg' },
      { name: 'Palak Rice', price: 100, type: 'Veg' },
      { name: 'Dal Rice', price: 100, type: 'Veg' },
      { name: 'Jeera Rice', price: 100, type: 'Veg' },
      { name: 'Paneer Fried Rice', price: 130, type: 'Veg' },
      { name: 'Ghee Rice', price: 120, type: 'Veg' },
      { name: 'Veg Fried Rice', price: 100, type: 'Veg' },
      { name: 'Chicken Fried Rice', price: 130, type: 'Non-Veg' },
      { name: 'Veg Biryani', price: 160, type: 'Veg' },
      { name: 'Chicken Biryani', price: 130, type: 'Non-Veg' },
      { name: 'Egg Fried Rice', price: 110, type: 'Non-Veg' },
      { name: 'Tomato Rice', price: 80, type: 'Veg' },
      { name: 'Lemon Rice', price: 100, type: 'Veg' },
      { name: 'Egg Biryani', price: 110, type: 'Non-Veg' }
    ];

    this.filterRice();
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
    this.filterRice();
  }

  filterRice(): void {
    this.filteredRices =
      this.selectedTab === 'All'
        ? this.rices
        : this.rices.filter(rice => rice.type === this.selectedTab);
  }
}
