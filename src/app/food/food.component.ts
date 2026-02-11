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
  loadingStarters = true;

  constructor(private startersService: StartersService) { }

  ngOnInit(): void {
    this.StartersRolls();
  }

  StartersRolls(): void {
    this.loadingStarters = true;

    this.startersService.getStarters().subscribe(data => {
      this.Starters = data;
      this.filterStarters();
      this.loadingStarters = false;   // IMPORTANT
    }, error => {
      console.error('Error fetching starters: ', error);
      this.loadingStarters = false;   // also stop loader on error
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
