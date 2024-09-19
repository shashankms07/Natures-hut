import { Component, OnInit } from '@angular/core';
import { StartersService } from '../starters.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  Starters: any[] = [];
  filteredStarters: any[] = [];
  selectedTab: string = 'All';

  constructor(private startersService: StartersService) {}

  ngOnInit(): void {
    this.StartersRolls();
  }

  StartersRolls(): void {
    this.startersService.getStarters().subscribe(data => {
      this.Starters = data;
      this.filterStarters();
    }, error => {
      console.error('Error fetching starters: ', error);
    });
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
    this.filterStarters();
  }

  filterStarters(): void {
    if (this.selectedTab === 'All') {
      this.filteredStarters = this.Starters;
    } else {
      this.filteredStarters = this.Starters.filter(
        starter => starter.type === this.selectedTab
      );
    }
  }
}
