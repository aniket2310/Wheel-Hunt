import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FavouritesService } from 'src/app/services/favourites.service';
import * as screenText from '../../../assets/constant-data.json';
import { RupeePipe } from "../../pipe/rupee.pipe";

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
  selector: 'app-recent-launches',
  templateUrl: './recent-launches.component.html',
  styleUrls: ['./recent-launches.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RupeePipe],
})
export class RecentLaunchesComponent implements OnInit {
  
  constants: any = screenText;
  bike: Bike[] = this.constants.All_bike_Data;  
  searchText: string = '';
  isSearchVisible: boolean = false;
  filteredBikes: Bike[] = this.bike;

  constructor(private router: Router, private favouriteService: FavouritesService) {}

  ngOnInit(): void {}

  filterBikes(): void {
    if (!this.searchText) {
      this.filteredBikes = this.bike;
    } else {
      this.filteredBikes = this.bike.filter((bike) =>
        bike.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  toggleSearch(): void {
    this.isSearchVisible = !this.isSearchVisible;
  }

  LocateDealers(): void {
    this.router.navigate(['home/locate-dealers']);
  }

  goToOnRoadPrice(bike: Bike): void {
    this.router.navigate(['home/on-road-price'], {
      state: { bikeDetails: bike }
    });
  }

  toggleFavourite(bike: Bike): void {
    if (bike.isFavourite) {
      this.favouriteService.removeFavourite(bike.id);
    } else {
      this.favouriteService.addFavourite(bike);
    }
    bike.isFavourite = !bike.isFavourite; 
  }
}
