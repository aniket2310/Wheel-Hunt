import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import * as screenText from '../../../assets/constant-data.json';

export interface Bike {
  id: number;
  name: string;
  specs: string;
  price: number;
  launchDate: string;
  image: string;
  posture: string;
  displacement: number;
  isFavourite: boolean;
  availableColors: { name: string; hex: string }[];
  bikeVariants: { name: string; price: string }[];
}

@Component({
  selector: 'app-all-bikes-details',
  templateUrl: './all-bikes-details.component.html',
  styleUrls: ['./all-bikes-details.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class AllBikesDetailsComponent implements OnInit {

  constants: any = screenText;
  bike: Bike[] = this.constants.All_bike_Data;  

  maxPrice!: number;
  minPrice!: number;
  maxCC!: number;
  minCC!: number;
  searchText: string = '';
  isSearchVisible: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  filteredBikes: Bike[] = []; 

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const selectedBrand = params['brand'];
      const selectedPosture = params['posture'];
      this.minPrice = Number(params['minPrice']) || 0;
      this.maxPrice = Number(params['maxPrice']) || Infinity;
      this.minCC = Number(params['minCC']) || 0;
      this.maxCC = Number(params['maxCC']) || Infinity;

      this.filteredBikes = this.bike.filter((bike: Bike) => {
        const matchesBrand = selectedBrand ? bike.name.toLowerCase().includes(selectedBrand.toLowerCase()) : true;
        const matchesPosture = selectedPosture ? bike.posture.toLowerCase().includes(selectedPosture.toLowerCase()) : true;
        const matchesPrice = bike.price >= this.minPrice && bike.price <= this.maxPrice;
        const matchesCC = bike.displacement >= this.minCC && bike.displacement <= this.maxCC;
        return matchesBrand && matchesPosture && matchesPrice && matchesCC;
      });
    });
  }

  filterBikesByBrand(brand: string) {
    this.filteredBikes = this.bike.filter((bike: Bike) =>
      bike.name.toLowerCase().includes(brand.toLowerCase())
    );
  }

  filterBikesByPosture(posture: string) {
    this.filteredBikes = this.bike.filter((bike: Bike) =>
      bike.posture.toLowerCase().includes(posture.toLowerCase())
    );
  }

  filterBikes() {
    this.filteredBikes = this.bike.filter(
      (bike: Bike) => bike.price >= this.minPrice && bike.price <= this.maxPrice
    );
  }

  filterByCC() {
    this.filteredBikes = this.bike.filter(
      (bike: Bike) => bike.displacement >= this.minCC && bike.displacement <= this.maxCC
    );
  }

  LocateDealers() {
    this.router.navigate(['home/locate-dealers']);
  }

  goToOnRoadPrice(bike: Bike): void {
    this.router.navigate(['home/on-road-price'], {
      state: { bikeDetails: bike }
    });
  }
}
