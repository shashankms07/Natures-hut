import { Component } from '@angular/core';
import { NoodlesService } from '../noodles.service';

@Component({
  selector: 'app-noodles',
  templateUrl: './noodles.component.html',
  styleUrls: ['./noodles.component.scss']
})
export class NoodlesComponent {


    rices: any[] = [];
    filteredRices: any[] = [];
    selectedTab: string = 'All';
  
    constructor(private noodlesService: NoodlesService) {}
  
    ngOnInit(): void {
      this.loadRice();
    }
  
    loadRice(): void {
      this.noodlesService.getNoodles().subscribe(
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
