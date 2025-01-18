import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import * as screenText from '../../../assets/constant-data.json';
import { FavouritesService } from 'src/app/services/favourites.service';


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

interface Electric_bikes{
  id:number;
  name:string;
  specs:string;
  price:string;
  launchDate:string;
  image:string;
  isFavourite:boolean;


}

@Component({
  selector: 'app-electric-bikes',
  templateUrl: './electric-bikes.component.html',
  styleUrls: ['./electric-bikes.component.scss'],
  standalone:true,
  imports: [CommonModule,IonicModule,FormsModule],

})
export class ElectricBikesComponent  implements OnInit {

  constants: any = screenText;

  ElectricBikes: Electric_bikes[] = this.constants.Electric_bikes;  


  searchText: string = ''; 
  isSearchVisible: boolean = false;

  constructor(private router:Router,private favouriteService: FavouritesService) { }

  ngOnInit() {}
  
  filteredBikes: any[] = this.ElectricBikes;  


  filterbikes() {
    if (!this.searchText) {
      this.filteredBikes = this.ElectricBikes;  
    } else {
      this.filteredBikes = this.ElectricBikes.filter(bike => 
        bike.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
  }

  LocateDealers(){
    this.router.navigate(['home/locate-dealers']);
  }
  goToOnRoadPrice(bike: Bike): void {
    this.router.navigate(['home/on-road-price'], {
      state: { bikeDetails: bike }
    });
  }

  toggleFavourite(bike: Electric_bikes) {
    if (bike.isFavourite) {
      this.favouriteService.removeFavourite(bike.id);
    } else {
      this.favouriteService.addFavourite(bike);
    }
    bike.isFavourite = !bike.isFavourite; 
  }
}



