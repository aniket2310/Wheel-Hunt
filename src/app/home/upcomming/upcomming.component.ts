import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import * as screenText from '../../../assets/constant-data.json';
import { RupeePipe } from "../../pipe/rupee.pipe";

interface Upcomming_bikes{
  name:string;
  specs:string;
  price:number;
  launchDate:string;
  image:string;
}

@Component({
  selector: 'app-upcomming',
  templateUrl: './upcomming.component.html',
  styleUrls: ['./upcomming.component.scss'],
  standalone:true,
  imports: [IonicModule, CommonModule, FormsModule, RupeePipe],
})
export class UpcommingComponent  implements OnInit {

constants: any = screenText;

  Upcommingbike: Upcomming_bikes[] = this.constants.Upcomming_bikes;  

  searchText: string = ''; 
  isSearchVisible: boolean = false;


  constructor(private router :Router) { }

  ngOnInit() {}

  
  filteredBikes: any[] = this.Upcommingbike;  


  filterbikes() {
    if (!this.searchText) {
      this.filteredBikes = this.Upcommingbike;  
    } else {
      this.filteredBikes = this.Upcommingbike.filter(bike => 
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


}
