import { Component, OnInit } from '@angular/core';
import { RiceService } from '../rice.service';

@Component({
  selector: 'app-rice-items',
  templateUrl: './rice-items.component.html',
  styleUrls: ['./rice-items.component.scss']
})
export class RiceItemsComponent implements OnInit {

  rices: any[] = [];
  filteredRices: any[] = [];
  selectedTab: string = 'All';

  constructor(private riceService: RiceService) {}

  ngOnInit(): void {
    this.loadRice();
  }

  loadRice(): void {
    this.riceService.getRice().subscribe(
      data => {
        this.rices = data;
        this.filterRice();
      },
      error => {
        console.error('Error fetching rice items: ', error);
      }
    );
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
    this.filterRice();
  }

  filterRice(): void {
    this.filteredRices = this.selectedTab === 'All' 
      ? this.rices 
      : this.rices.filter(rice => rice.type === this.selectedTab);
  }
}
