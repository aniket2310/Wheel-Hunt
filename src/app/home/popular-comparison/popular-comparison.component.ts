import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import * as screenText from '../../../assets/constant-data.json';

export interface ComparedBikeData {
  bike1: {

    image: string;
    name: string;
  };
  bike2: {
    image: string;
    name: string;
  };
  specifications: {
    title: string;
    bike1: string;
    bike2: string;
  }[];
}


@Component({
  selector: 'app-popular-comparison',
  templateUrl: './popular-comparison.component.html',
  styleUrls: ['./popular-comparison.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class PopularComparisonComponent implements OnInit {

  constants :any = screenText;
  

  bikeComparisons : ComparedBikeData []= this.constants.bikeComparisons;

  searchText: string = '';
  isSearchVisible: boolean = false;

  filteredBikes: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.filteredBikes = [...this.bikeComparisons];
  }

 
  filterFromComparison() {
    if (!this.searchText) {
      this.filteredBikes = this.bikeComparisons;
    } else {
      const searchTerm = this.searchText.toLowerCase();
      this.filteredBikes = this.bikeComparisons.filter((bikeComparisons: { bike1: { name: string; }; bike2: { name: string; }; }) => {
        return (
          bikeComparisons.bike1.name.toLowerCase().includes(searchTerm) ||
          bikeComparisons.bike2.name.toLowerCase().includes(searchTerm)
        );
      });
    }
  }

  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
  }

  navigateToComparedBikes(comparedBikeData: ComparedBikeData): void {
    this.router.navigate(['home/compared-bikes'], {
      state: { ComparedDetails: comparedBikeData }
    });
  }

  LocateDealers() {
    this.router.navigate(['home/locate-dealers']);
  }
  goToBrands() {
    this.router.navigate(['home/brands']);
  }
}
