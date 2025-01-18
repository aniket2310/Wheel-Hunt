import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  private favouriteBikes = new BehaviorSubject<any[]>([]); // Holds an array of favourite bikes
  favouriteBikes$ = this.favouriteBikes.asObservable(); // Observable to subscribe to for updates

  constructor() { }

  addFavourite(bike: any) {
    const currentFavourites = this.favouriteBikes.value;
    if (!currentFavourites.find(b => b.id === bike.id)) {
      this.favouriteBikes.next([...currentFavourites, bike]);
    }
  }

  removeFavourite(bikeId: number) {
    const currentFavourites = this.favouriteBikes.value;
    this.favouriteBikes.next(currentFavourites.filter(b => b.id !== bikeId));
  }

}
