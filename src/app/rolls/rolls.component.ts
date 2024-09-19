import { Component, OnInit } from '@angular/core';
import { RollsService } from '../rolls.service';

@Component({
  selector: 'app-rolls',
  templateUrl: './rolls.component.html',
  styleUrls: ['./rolls.component.scss']
})
export class RollsComponent implements OnInit {

  rolls: any[] = [];
  filteredRolls: any[] = [];
  selectedTab: string = 'All';

  constructor(private rollsService: RollsService) {}

  ngOnInit(): void {
    this.loadRolls();
  }

  loadRolls(): void {
    this.rollsService.getRolls().subscribe(data => {
      this.rolls = data;
      this.filterRolls();
    }, error => {
      console.error('Error fetching rolls: ', error);
    });
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
    this.filterRolls();
  }

  filterRolls(): void {
    if (this.selectedTab === 'All') {
      this.filteredRolls = this.rolls;
    } else {
      this.filteredRolls = this.rolls.filter(
        roll => roll.type === this.selectedTab
      );
    }
  }
}
