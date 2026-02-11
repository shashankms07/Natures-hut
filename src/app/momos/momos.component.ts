import { Component, OnInit } from '@angular/core';
import { MomosService } from '../momos.service';

@Component({
  selector: 'app-momos',
  templateUrl: './momos.component.html',
  styleUrls: ['./momos.component.scss']
})
export class MomosComponent implements OnInit {

  momos: any[] = [];
  filteredMomos: any[] = [];
  selectedTab: string = 'All';
  loadingMomos = true;   // spinner variable

  constructor(private momosService: MomosService) { }

  ngOnInit(): void {
    this.loadMomos();
  }

  loadMomos(): void {
    this.loadingMomos = true;

    this.momosService.getMomos().subscribe(data => {
      this.momos = data;
      this.filterMomos();
      this.loadingMomos = false;   // stop loader
    }, error => {
      console.error('Error fetching momos: ', error);
      this.loadingMomos = false;
    });
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
    this.filterMomos();
  }

  filterMomos(): void {
    if (this.selectedTab === 'All') {
      this.filteredMomos = this.momos;
    } else {
      this.filteredMomos = this.momos.filter(
        momo => momo.type === this.selectedTab
      );
    }
  }
}
