import { Component } from '@angular/core';
import { MomosService } from '../momos.service';

@Component({
  selector: 'app-momos',
  templateUrl: './momos.component.html',
  styleUrls: ['./momos.component.scss']
})
export class MomosComponent {

  Starters: any[] = [];
  filteredStarters: any[] = [];
  selectedTab: string = 'All';

  constructor(private momosService: MomosService) {}

  ngOnInit(): void {
    this.StartersRolls();
  }

  StartersRolls(): void {
    this.momosService.getMomos().subscribe(data => {
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
