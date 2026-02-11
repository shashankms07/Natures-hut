import { Component, OnInit } from '@angular/core';
import { PastasService } from '../pasta.service';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.scss']
})
export class PastaComponent implements OnInit {

  pastas: any[] = [];
  filteredPastas: any[] = [];
  selectedTab: string = 'All';
  loadingPastas = true;   // added

  constructor(private pastasService: PastasService) {}

  ngOnInit(): void {
    this.loadPastas();
  }

  loadPastas(): void {
    this.loadingPastas = true;

    this.pastasService.getPastas().subscribe(data => {
      this.pastas = data;
      this.filterPastas();
      this.loadingPastas = false;   // stop loader
    }, error => {
      console.error('Error fetching pastas: ', error);
      this.loadingPastas = false;
    });
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
    this.filterPastas();
  }

  filterPastas(): void {
    if (this.selectedTab === 'All') {
      this.filteredPastas = this.pastas;
    } else {
      this.filteredPastas = this.pastas.filter(
        pasta => pasta.type === this.selectedTab
      );
    }
  }
}
