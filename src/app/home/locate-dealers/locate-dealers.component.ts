import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import * as screenText from '../../../assets/constant-data.json';

interface cities
 {
  name:string;
  dealers: {
    title: string;
    location: string;
    contact: string;
  };
}

@Component({
  selector: 'app-locate-dealers',
  templateUrl: './locate-dealers.component.html',
  styleUrls: ['./locate-dealers.component.scss'],
  standalone:true,
  imports: [IonicModule, CommonModule,FormsModule],
})

export class LocateDealersComponent{

  constant :any = screenText;
  cities= this.constant.Cities;
  
searchText: string = ''; 
isSearchVisible: boolean = false;




  filteredCities: any[] = this.cities;  


  filterCities() {
    if (!this.searchText) {
      this.filteredCities = this.cities;  
    } else {
      this.filteredCities = this.cities.filter((city: { name: string; }) => 
        city.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
  }


}
