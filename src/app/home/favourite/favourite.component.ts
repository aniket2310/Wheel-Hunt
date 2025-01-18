import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FavouritesService } from 'src/app/services/favourites.service';


@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
  standalone:true,
  imports:[IonicModule,CommonModule],
})
export class FavouriteComponent  implements OnInit {

   
  favouriteBikes: any[] = [];

  constructor(private router:Router,private favouriteService: FavouritesService) {}

  ngOnInit() {
    this.favouriteService.favouriteBikes$.subscribe(bikes => {
      this.favouriteBikes = bikes;
    });
  }

  
  toggleFavourite(bike: any) {
    if (bike.isFavourite) {
      // If already a favourite, remove from the favourite list
      this.favouriteService.removeFavourite(bike.id);
    } else {
      // If not a favourite, add it to the favourite list
      this.favouriteService.addFavourite(bike);
    }
    bike.isFavourite = !bike.isFavourite; // Toggle the favourite state locally
  }
  
  goToOnRoadPrice() {
    this.router.navigate(['home/on-road-price']);
  }

}
