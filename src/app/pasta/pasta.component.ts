import { Component } from '@angular/core';
import { PastasService } from '../pasta.service';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.scss']
})
export class PastaComponent {

  Starters: any[] = [];
  filteredStarters: any[] = [];
  selectedTab: string = 'All';

  constructor(private pastasService: PastasService) {}

  ngOnInit(): void {
    this.StartersRolls();
  }

  StartersRolls(): void {
    this.pastasService.getPastas().subscribe(data => {
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
